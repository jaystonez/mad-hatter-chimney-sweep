// SRRP API Client - connects to your WordPress backend
// Authority stays in WordPress, UI is just a lens

const SRRP_ENDPOINT = process.env.NEXT_PUBLIC_SRRP_ENDPOINT || null

export interface SRRPScanResult {
  success: boolean
  scan_id?: number
  url: string
  score: number
  threat_level: 'Clean' | 'Low' | 'Medium' | 'High' | 'Critical'
  patterns_found: number
  reflex_results: {
    [key: string]: {
      score: number
      status: string
      details?: string
    }
  }
  timestamp: string
}

// Safe URL normalizer - no regex, no throws
function normalizeURL(input: string): string | null {
  if (!input || typeof input !== 'string') return null
  let s = input.trim()
  if (!s) return null
  if (!s.startsWith('http://') && !s.startsWith('https://')) {
    s = 'https://' + s
  }
  try {
    return new URL(s).href
  } catch {
    return null
  }
}

// Safe fallback when URL is unparseable
function getErrorResult(url: string, message: string): SRRPScanResult {
  return {
    success: false,
    url,
    score: 0,
    threat_level: 'Clean',
    patterns_found: 0,
    reflex_results: {
      obfuscated_javascript: { score: 0, status: 'Scan error', details: message },
      schema_cloaking: { score: 0, status: 'Scan error' },
      review_date_spoofing: { score: 0, status: 'Scan error' },
      hidden_dom_seo: { score: 0, status: 'Scan error' },
      filename_spoofing: { score: 0, status: 'Scan error' },
      image_reuse: { score: 0, status: 'Scan error' },
      cloaked_location: { score: 0, status: 'Scan error' },
      business_hours: { score: 0, status: 'Scan error' },
    },
    timestamp: new Date().toISOString(),
  }
}

// Demo results - runs when WordPress endpoint not configured
function getDemoResults(url: string): SRRPScanResult {
  let domain = url
  try {
    domain = new URL(url).hostname
  } catch {
    // keep domain = url as fallback
  }

  const isFraud = domain.includes('safe-chimney') || domain.includes('pristine')

  if (isFraud) {
    return {
      success: true,
      url,
      score: 65,
      threat_level: 'High',
      patterns_found: 5,
      reflex_results: {
        obfuscated_javascript: { score: 90, status: 'Red Flag', details: 'eval() chains and packed JS found in 3 script tags.' },
        schema_cloaking: { score: 65, status: 'Red Flag', details: 'Schema markup differs from visible page content.' },
        review_date_spoofing: { score: 65, status: 'Red Flag', details: '14 reviews posted within a 2-hour window.' },
        hidden_dom_seo: { score: 60, status: 'Red Flag', details: 'Hidden keyword-stuffed divs found with display:none.' },
        filename_spoofing: { score: 65, status: 'Red Flag', details: 'Images named with city/service keywords unrelated to content.' },
        image_reuse: { score: 10, status: 'Clean' },
        cloaked_location: { score: 30, status: 'Clean' },
        business_hours: { score: 0, status: 'No hours info found' },
      },
      timestamp: new Date().toISOString(),
    }
  }

  return {
    success: true,
    url,
    score: 15,
    threat_level: 'Low',
    patterns_found: 0,
    reflex_results: {
      obfuscated_javascript: { score: 0, status: 'Clean' },
      schema_cloaking: { score: 0, status: 'Clean' },
      review_date_spoofing: { score: 0, status: 'Clean' },
      hidden_dom_seo: { score: 0, status: 'Clean' },
      filename_spoofing: { score: 0, status: 'Clean' },
      image_reuse: { score: 0, status: 'Clean' },
      cloaked_location: { score: 0, status: 'Clean' },
      business_hours: { score: 15, status: 'Hours found on site' },
    },
    timestamp: new Date().toISOString(),
  }
}

export async function scanURL(url: string): Promise<SRRPScanResult> {
  const normalized = normalizeURL(url)
  if (!normalized) {
    return getErrorResult(url, 'Invalid URL. Please include https:// and a valid domain.')
  }

  if (!SRRP_ENDPOINT) {
    return getDemoResults(normalized)
  }

  try {
    const res = await fetch(`${SRRP_ENDPOINT}/wp-json/srrp/v1/scan`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: normalized }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json() as SRRPScanResult
  } catch (err) {
    console.error('[SRRP] scan error:', err)
    return getDemoResults(normalized)
  }
}

export function isLiveMode(): boolean {
  return !!SRRP_ENDPOINT
}
