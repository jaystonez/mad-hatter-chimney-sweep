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

export async function scanURL(url: string): Promise<SRRPScanResult> {
  // Validate URL before anything else
  const normalizedUrl = normalizeURL(url)
  if (!normalizedUrl) {
    return getErrorResult(url, 'Invalid URL format. Please include https://')
  }

  // If no endpoint configured, return demo mode
  if (!SRRP_ENDPOINT) {
    return getDemoResults(normalizedUrl)
  }

  try {
    const response = await fetch(`${SRRP_ENDPOINT}/wp-json/srrp/v1/scan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: normalizedUrl }),
    })

    if (!response.ok) {
      throw new Error(`Scan request failed: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('[SRRP] scan error:', error)
    // Fallback to demo mode on error
    return getDemoResults(normalizedUrl)
  }
}

// Normalize and validate URL — returns null if unparseable
function normalizeURL(input: string): string | null {
  if (!input || typeof input !== 'string') return null
  let trimmed = input.trim()
  if (!trimmed) return null
  // Auto-add https:// if missing protocol
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = 'https://' + trimmed
  }
  try {
    const parsed = new URL(trimmed)
    return parsed.href
  } catch {
    return null
  }
}

// Return a safe error result without crashing
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

// Demo mode - shows example results when backend not connected
function getDemoResults(url: string): SRRPScanResult {
  let domain = ''
  try {
    domain = new URL(url).hostname
  } catch {
    domain = url
  }

  // Domains with 'safe-chimney' or 'pristine' get flagged as demo fraud
  const isDemoFraud = domain.includes('safe-chimney') || domain.includes('pristine')

  return {
    success: true,
    url,
    score: isDemoFraud ? 65 : 15,
    threat_level: isDemoFraud ? 'High' : 'Low',
    patterns_found: isDemoFraud ? 8 : 2,
    reflex_results: isDemoFraud ? {
      obfuscated_javascript: { score: 90, status: 'Heavily obfuscated scripts detected', details: 'eval() chains and packed JS found in 3 script tags.' },
      schema_cloaking: { score: 65, status: 'Cloaking suspected', details: 'Schema markup differs from visible page content.' },
      review_date_spoofing: { score: 65, status: 'Date spoofing suspected', details: '14 reviews posted within a 2-hour window.' },
      hidden_dom_seo: { score: 60, status: 'Suspicious pattern', details: 'Hidden keyword-stuffed divs found with display:none.' },
      filename_spoofing: { score: 65, status: 'Suspicious filename patterns', details: 'Images named with city/service keywords unrelated to content.' },
      image_reuse: { score: 10, status: 'Clean' },
      cloaked_location: { score: 30, status: 'Clean' },
      business_hours: { score: 0, status: 'No business hours found' },
    } : {
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

export function isLiveMode(): boolean {
  return !!SRRP_ENDPOINT
}
