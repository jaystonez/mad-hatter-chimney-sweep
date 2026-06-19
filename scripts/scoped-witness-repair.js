#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')

const REPO_ROOT = process.cwd()
const DEFAULT_SCOPE_PATH = 'scope_lock.json'
const DEFAULT_RECEIPT_DIR = '.scope-receipts'
const SCHEMA_VERSION = '1.0.0'

const IGNORED_DIRECTORIES = new Set([
  '.git',
  '.next',
  'node_modules',
  'coverage',
  'out',
  'build',
  '.vercel',
  DEFAULT_RECEIPT_DIR,
])

function main() {
  const args = parseArguments(process.argv.slice(2))
  const command = args._[0]

  if (!command || command === 'help' || command === '--help' || command === '-h') {
    printHelp()
    return
  }

  if (command === 'init') {
    runInit(args)
    return
  }

  if (command === 'validate') {
    runValidate(args, false)
    return
  }

  if (command === 'receipt') {
    runValidate(args, true)
    return
  }

  fail(`Unknown command: ${command}`)
}

function runInit(args) {
  const claimPath = args.claim
  if (!claimPath) {
    fail('Missing required option: --claim <path-to-claim.json>')
  }

  const scopePath = args.scope || DEFAULT_SCOPE_PATH
  const scopeAbsolutePath = resolveToAbsolute(scopePath)
  const force = parseBoolean(args.force, false)

  if (fs.existsSync(scopeAbsolutePath) && !force) {
    fail(`Scope lock already exists at ${scopeAbsolutePath}. Use --force to overwrite.`)
  }

  const claim = readJson(resolveToAbsolute(claimPath))
  const policy = buildPolicyFromClaim(claim, args)
  const scopeRepoPath = toRepoPath(scopeAbsolutePath)
  const baseline = createManifest([scopeRepoPath])

  const lock = {
    schemaVersion: SCHEMA_VERSION,
    lockId: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    claim: {
      claimId: claim.claimId || null,
      target: claim.target || null,
      issue: claim.issue || null,
      source: claim.source || null,
      notes: claim.notes || null,
      metric: normalizeMetricFromClaim(claim.metric),
    },
    policy,
    baseline,
  }

  writeJson(scopeAbsolutePath, lock)

  console.log('Scope lock created.')
  console.log(`  scope: ${scopePath}`)
  console.log(`  allowed files: ${policy.allowedFiles.length}`)
  console.log(`  allowed prefixes: ${policy.allowedPathPrefixes.length}`)
  console.log(`  allow new files: ${policy.allowNewFiles}`)
  console.log(`  baseline repository digest: ${baseline.repositoryDigest}`)
}

function runValidate(args, alwaysWriteReceipt) {
  const scopePath = args.scope || DEFAULT_SCOPE_PATH
  const scopeAbsolutePath = resolveToAbsolute(scopePath)
  const lock = readJson(scopeAbsolutePath)
  assertLockSchema(lock)

  const scopeRepoPath = toRepoPath(scopeAbsolutePath)
  const currentManifest = createManifest([scopeRepoPath])
  const touchedFiles = diffManifest(lock.baseline.files, currentManifest.files)
  const evaluation = evaluateTouchedFiles(touchedFiles, lock.policy)
  const shouldWriteReceipt = alwaysWriteReceipt || typeof args.receipt === 'string'
  const outputPath = shouldWriteReceipt
    ? typeof args.receipt === 'string'
      ? args.receipt
      : defaultReceiptPath(lock.claim.claimId || lock.lockId)
    : null
  const historyDirPath =
    args['history-dir'] ||
    (outputPath ? path.dirname(outputPath) : DEFAULT_RECEIPT_DIR)
  const historyDirAbsolutePath = resolveToAbsolute(historyDirPath)
  const claimIdentifier = lock.claim.claimId || lock.lockId
  const priorNoImprovementStreak = readPriorNoImprovementStreak(
    historyDirAbsolutePath,
    claimIdentifier
  )
  const metricEvaluation = evaluateMetric(
    lock.claim.metric,
    args,
    priorNoImprovementStreak
  )
  const maxNoImprovementRuns = lock.claim.metric?.maxNoImprovementRuns ?? 2
  const actionDecision = determineActionDecision(
    evaluation.passed,
    metricEvaluation,
    maxNoImprovementRuns
  )

  console.log(`Scope validation result: ${evaluation.passed ? 'PASS' : 'FAIL'}`)
  console.log(`  touched files: ${touchedFiles.length}`)
  console.log(`  violations: ${evaluation.violations.length}`)

  if (touchedFiles.length > 0) {
    console.log('  files:')
    for (const touched of touchedFiles) {
      console.log(`    - ${touched.file} (${touched.status})`)
    }
  }

  if (evaluation.violations.length > 0) {
    console.log('  violation details:')
    for (const violation of evaluation.violations) {
      console.log(`    - ${violation.file}: ${violation.reason}`)
    }
  }

  if (metricEvaluation) {
    console.log(`  metric: ${metricEvaluation.name}`)
    if (metricEvaluation.before !== null) {
      console.log(`  metric before: ${metricEvaluation.before}`)
    }
    if (metricEvaluation.after !== null) {
      console.log(`  metric after: ${metricEvaluation.after}`)
    }
    if (metricEvaluation.delta !== null) {
      console.log(`  metric delta (${metricEvaluation.direction}): ${metricEvaluation.delta}`)
    }
    if (metricEvaluation.improved !== null) {
      console.log(`  metric improved: ${metricEvaluation.improved}`)
      console.log(
        `  no-improvement streak: ${metricEvaluation.noImprovementStreak}/${maxNoImprovementRuns}`
      )
    } else {
      console.log(
        '  metric improved: unknown (set --metric-before/--metric-after, or baseline in claim + --metric-after)'
      )
    }
  }

  console.log(`  action: ${actionDecision.action}`)
  console.log(`  reason: ${actionDecision.reason}`)

  if (shouldWriteReceipt) {
    const receipt = {
      schemaVersion: SCHEMA_VERSION,
      receiptId: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      claimIdentifier,
      scopeLockPath: toRepoPath(scopeAbsolutePath),
      claim: lock.claim,
      policy: lock.policy,
      beforeRepositoryDigest: lock.baseline.repositoryDigest,
      afterRepositoryDigest: currentManifest.repositoryDigest,
      touchedFiles,
      violations: evaluation.violations,
      metricEvaluation,
      actionDecision,
      passed: evaluation.passed,
    }

    const receiptAbsolutePath = resolveToAbsolute(outputPath)
    writeJson(receiptAbsolutePath, receipt)
    console.log(`  receipt: ${outputPath}`)
  }

  const strict = parseBoolean(args.strict, true)
  if (!evaluation.passed && strict) {
    process.exitCode = 1
  }
}

function evaluateMetric(metric, args, priorNoImprovementStreak) {
  if (!metric) {
    return null
  }

  const beforeFromArgs = parseOptionalNumber(args['metric-before'])
  const afterFromArgs = parseOptionalNumber(args['metric-after'])
  const before = beforeFromArgs !== null ? beforeFromArgs : metric.baseline
  const after = afterFromArgs

  const result = {
    name: metric.name || 'unnamed_metric',
    direction: metric.direction,
    minDelta: metric.minDelta,
    target: metric.target,
    before,
    after,
    delta: null,
    improved: null,
    targetReached: null,
    noImprovementStreak: priorNoImprovementStreak,
  }

  if (before === null || after === null) {
    return result
  }

  const directionalDelta =
    metric.direction === 'down' ? before - after : after - before
  const improved = directionalDelta >= metric.minDelta
  const targetReached =
    metric.target === null
      ? null
      : metric.direction === 'down'
        ? after <= metric.target
        : after >= metric.target

  result.delta = directionalDelta
  result.improved = improved
  result.targetReached = targetReached
  result.noImprovementStreak = improved
    ? 0
    : priorNoImprovementStreak + 1
  return result
}

function determineActionDecision(
  scopePassed,
  metricEvaluation,
  maxNoImprovementRuns
) {
  if (!scopePassed) {
    return {
      action: 'reject_out_of_scope',
      reason: 'Patch touched files outside the allowed scope.',
    }
  }

  if (!metricEvaluation) {
    return {
      action: 'manual_review',
      reason: 'No metric policy defined on claim; promote manually after review.',
    }
  }

  if (metricEvaluation.improved === null) {
    return {
      action: 'manual_metric_review',
      reason:
        'Metric comparison is incomplete. Provide --metric-after (and --metric-before if no baseline).',
    }
  }

  if (metricEvaluation.targetReached === true) {
    return {
      action: 'promote_candidate',
      reason: 'Target metric reached.',
    }
  }

  if (metricEvaluation.improved === true) {
    return {
      action: 'promote_candidate',
      reason: 'Scoped metric improved.',
    }
  }

  if (metricEvaluation.noImprovementStreak >= maxNoImprovementRuns) {
    return {
      action: 'escalate_human',
      reason: `No metric improvement for ${metricEvaluation.noImprovementStreak} consecutive scoped attempts.`,
    }
  }

  return {
    action: 'iterate_scoped_patch',
    reason: 'Metric did not improve yet; continue with another scoped patch.',
  }
}

function readPriorNoImprovementStreak(historyDirectory, claimIdentifier) {
  if (
    !fs.existsSync(historyDirectory) ||
    !fs.statSync(historyDirectory).isDirectory()
  ) {
    return 0
  }

  const candidates = fs
    .readdirSync(historyDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))

  let latestCreatedAt = null
  let latestStreak = 0

  for (const candidate of candidates) {
    const candidatePath = path.join(historyDirectory, candidate.name)
    const receipt = readJsonIfExists(candidatePath)
    if (!receipt || typeof receipt !== 'object') {
      continue
    }

    const receiptClaimIdentifier =
      receipt.claimIdentifier || receipt.claim?.claimId || null
    if (receiptClaimIdentifier !== claimIdentifier) {
      continue
    }

    if (
      !receipt.metricEvaluation ||
      typeof receipt.metricEvaluation.noImprovementStreak !== 'number'
    ) {
      continue
    }

    const createdAt = Date.parse(receipt.createdAt || '')
    if (!Number.isFinite(createdAt)) {
      continue
    }

    if (latestCreatedAt === null || createdAt > latestCreatedAt) {
      latestCreatedAt = createdAt
      latestStreak = receipt.metricEvaluation.noImprovementStreak
    }
  }

  return latestStreak
}

function buildPolicyFromClaim(claim, args) {
  if (!Array.isArray(claim.allowedFiles) || claim.allowedFiles.length === 0) {
    fail('Claim file must include a non-empty "allowedFiles" array.')
  }

  const allowedFiles = uniqueSorted(claim.allowedFiles.map(normalizeRepoPath))
  for (const file of allowedFiles) {
    const absolutePath = path.join(REPO_ROOT, file)
    if (!fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isFile()) {
      fail(`allowedFiles contains a missing file: ${file}`)
    }
  }

  const allowedPathPrefixes = uniqueSorted(
    Array.isArray(claim.allowedPathPrefixes)
      ? claim.allowedPathPrefixes.map((value) => normalizePathPrefix(value))
      : []
  )

  const forbiddenFiles = uniqueSorted(
    Array.isArray(claim.forbiddenFiles)
      ? claim.forbiddenFiles.map((value) => normalizeRepoPath(value))
      : []
  )

  const allowNewFiles = parseBoolean(
    args['allow-new-files'],
    parseBoolean(claim.allowNewFiles, false)
  )

  return {
    allowedFiles,
    allowedPathPrefixes,
    forbiddenFiles,
    allowNewFiles,
  }
}

function normalizeMetricFromClaim(metric) {
  if (!metric || typeof metric !== 'object') {
    return null
  }

  const direction = metric.direction === 'down' ? 'down' : 'up'
  const minDelta = parseOptionalNumber(metric.minDelta)
  const baseline = parseOptionalNumber(metric.baseline)
  const target = parseOptionalNumber(metric.target)

  return {
    name: typeof metric.name === 'string' && metric.name.trim() ? metric.name.trim() : null,
    direction,
    minDelta: minDelta === null ? 0 : minDelta,
    baseline,
    target,
    maxNoImprovementRuns: parsePositiveInteger(metric.maxNoImprovementRuns, 2),
  }
}

function assertLockSchema(lock) {
  if (!lock || typeof lock !== 'object') {
    fail('Invalid scope lock: expected JSON object.')
  }
  if (!lock.policy || !lock.baseline) {
    fail('Invalid scope lock: missing policy or baseline.')
  }
  if (!lock.baseline.files || typeof lock.baseline.files !== 'object') {
    fail('Invalid scope lock: baseline.files must be present.')
  }
}

function diffManifest(beforeFiles, afterFiles) {
  const allPaths = new Set([...Object.keys(beforeFiles), ...Object.keys(afterFiles)])
  const touched = []

  for (const file of allPaths) {
    const beforeHash = beforeFiles[file]
    const afterHash = afterFiles[file]

    if (!beforeHash && afterHash) {
      touched.push({ file, status: 'created', beforeHash: null, afterHash })
      continue
    }

    if (beforeHash && !afterHash) {
      touched.push({ file, status: 'deleted', beforeHash, afterHash: null })
      continue
    }

    if (beforeHash !== afterHash) {
      touched.push({ file, status: 'modified', beforeHash, afterHash })
    }
  }

  touched.sort((a, b) => a.file.localeCompare(b.file))
  return touched
}

function evaluateTouchedFiles(touchedFiles, policy) {
  const allowedFiles = new Set(policy.allowedFiles || [])
  const forbiddenFiles = new Set(policy.forbiddenFiles || [])
  const prefixes = policy.allowedPathPrefixes || []
  const allowNewFiles = Boolean(policy.allowNewFiles)
  const violations = []

  for (const touched of touchedFiles) {
    if (forbiddenFiles.has(touched.file)) {
      violations.push({
        file: touched.file,
        reason: 'File is explicitly forbidden in scope policy.',
      })
      continue
    }

    const inScope =
      allowedFiles.has(touched.file) ||
      prefixes.some(
        (prefix) => touched.file === prefix || touched.file.startsWith(`${prefix}/`)
      )

    if (!inScope) {
      violations.push({
        file: touched.file,
        reason: 'File is outside allowed scope.',
      })
      continue
    }

    if (touched.status === 'created' && !allowNewFiles) {
      violations.push({
        file: touched.file,
        reason: 'New files are not allowed by scope policy.',
      })
    }
  }

  return {
    passed: violations.length === 0,
    violations,
  }
}

function createManifest(excludedFiles = []) {
  const excludedFileSet = new Set(excludedFiles.map((value) => toPosixPath(value)))
  const files = listRepositoryFiles(REPO_ROOT, excludedFileSet)
  const hashes = {}

  for (const file of files) {
    const absolutePath = path.join(REPO_ROOT, file)
    const content = fs.readFileSync(absolutePath)
    hashes[file] = sha256(content)
  }

  const digestInput = files.map((file) => `${file}:${hashes[file]}`).join('\n')

  return {
    generatedAt: new Date().toISOString(),
    fileCount: files.length,
    repositoryDigest: sha256(digestInput),
    files: hashes,
  }
}

function listRepositoryFiles(rootDir, excludedFileSet) {
  const files = []
  walkDirectory(rootDir, '', files, excludedFileSet)
  files.sort((a, b) => a.localeCompare(b))
  return files
}

function walkDirectory(rootDir, relativeDir, files, excludedFileSet) {
  const directoryPath = relativeDir
    ? path.join(rootDir, relativeDir)
    : rootDir

  const entries = fs.readdirSync(directoryPath, { withFileTypes: true })

  for (const entry of entries) {
    const entryRelativePath = relativeDir
      ? path.join(relativeDir, entry.name)
      : entry.name

    if (entry.isDirectory()) {
      if (IGNORED_DIRECTORIES.has(entry.name)) {
        continue
      }
      walkDirectory(rootDir, entryRelativePath, files, excludedFileSet)
      continue
    }

    if (!entry.isFile()) {
      continue
    }

    const normalizedFilePath = toPosixPath(entryRelativePath)
    if (excludedFileSet.has(normalizedFilePath)) {
      continue
    }
    files.push(normalizedFilePath)
  }
}

function parseArguments(tokens) {
  const parsed = { _: [] }

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index]

    if (!token.startsWith('--')) {
      parsed._.push(token)
      continue
    }

    const key = token.slice(2)
    const nextToken = tokens[index + 1]

    if (!nextToken || nextToken.startsWith('--')) {
      parsed[key] = true
      continue
    }

    parsed[key] = nextToken
    index += 1
  }

  return parsed
}

function parseBoolean(value, defaultValue) {
  if (value === undefined || value === null) {
    return defaultValue
  }

  if (typeof value === 'boolean') {
    return value
  }

  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase()
    if (normalized === 'true' || normalized === '1' || normalized === 'yes') {
      return true
    }
    if (normalized === 'false' || normalized === '0' || normalized === 'no') {
      return false
    }
  }

  return defaultValue
}

function parseOptionalNumber(value) {
  if (value === undefined || value === null || value === '') {
    return null
  }

  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function parsePositiveInteger(value, defaultValue) {
  const parsed = parseOptionalNumber(value)
  if (parsed === null) {
    return defaultValue
  }

  const integer = Math.trunc(parsed)
  return integer >= 1 ? integer : defaultValue
}

function normalizeRepoPath(inputPath) {
  const absolutePath = resolveToAbsolute(inputPath)
  const repoRelativePath = toRepoPath(absolutePath)
  if (!repoRelativePath || repoRelativePath === '.') {
    fail(`Invalid repository file path: ${inputPath}`)
  }
  return repoRelativePath
}

function normalizePathPrefix(inputPath) {
  const normalized = normalizeRepoPath(inputPath)
  return normalized.endsWith('/') ? normalized.slice(0, -1) : normalized
}

function resolveToAbsolute(targetPath) {
  const absolutePath = path.isAbsolute(targetPath)
    ? targetPath
    : path.join(REPO_ROOT, targetPath)

  return path.resolve(absolutePath)
}

function toRepoPath(absolutePath) {
  const relativePath = path.relative(REPO_ROOT, absolutePath)
  const normalized = path.posix.normalize(toPosixPath(relativePath))

  if (
    normalized === '..' ||
    normalized.startsWith('../') ||
    normalized === '' ||
    normalized.startsWith('/')
  ) {
    fail(`Path escapes repository root: ${absolutePath}`)
  }

  return normalized
}

function toPosixPath(value) {
  return value.replace(/\\/g, '/')
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex')
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b))
}

function defaultReceiptPath(claimIdentifier) {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  return `${DEFAULT_RECEIPT_DIR}/${stamp}-${claimIdentifier}.json`
}

function readJson(filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    fail(`JSON file not found: ${filePath}`)
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(content)
  } catch (error) {
    fail(`Failed to parse JSON file ${filePath}: ${error.message}`)
  }
}

function readJsonIfExists(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(content)
  } catch {
    return null
  }
}

function writeJson(filePath, data) {
  const directory = path.dirname(filePath)
  fs.mkdirSync(directory, { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8')
}

function printHelp() {
  console.log(`
Scoped Witness Repair CLI

Usage:
  node scripts/scoped-witness-repair.js <command> [options]

Commands:
  init       Create scope_lock.json from a claim file.
  validate   Validate touched files against scope lock policy.
  receipt    Validate and write a receipt JSON artifact.

Common options:
  --scope <path>            Scope lock file path (default: ${DEFAULT_SCOPE_PATH})
  --strict <true|false>     Exit non-zero on validation failure (default: true)
  --metric-before <number>  Observed metric before patch (optional)
  --metric-after <number>   Observed metric after patch (optional)
  --history-dir <path>      Receipt directory used for streak tracking (default: .scope-receipts)

init options:
  --claim <path>            Required path to claim JSON
  --allow-new-files <bool>  Override allowNewFiles policy
  --force                   Overwrite existing scope lock

validate options:
  --receipt <path>          Optional receipt output path

receipt options:
  --receipt <path>          Optional receipt output path

Claim template:
  security/claim.template.json
`.trim())
}

function fail(message) {
  console.error(`Error: ${message}`)
  process.exit(1)
}

main()
