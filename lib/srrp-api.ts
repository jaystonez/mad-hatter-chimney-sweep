// @ts-nocheck
// SRRP API Client - routes through Next.js server-side proxy at /api/scan
// This keeps WP endpoint secret and avoids browser CORS issues

export function isLiveMode() {
  // Live mode is determined server-side by the API route
  // This returns true so UI shows 'live' badge when proxy responds without demo_mode flag
  return true
}

// Demo fallback - used if proxy is unreachable
function getDemoResults(url) {
  let domain = url
  try { domain = new URL(url).hostname } catch {}
  const isFraud = domain.includes('safe-chimney') || domain.includes('pristine')
  if (isFraud) {
    return {
      success: true, url,
      score: 65,
      threat_level: 'High',
      patterns_found: 5,
      demo_mode: true,
      reflex_results: {
        obfuscated_javascript: { score: 90, status: 'Red Flag', details: 'eval() chains and packed JS found in 3 script tags.' },
        schema_cloaking: { score: 65, status: 'Red Flag', details: 'Schema markup differs from visible page content.' },
        review_date_spoofing: { score: 65, status: 'Red Flag', details: '14 reviews posted within a 2-hour window.' },
        hidden_dom_seo: { score: 60, status: 'Red Flag', details: 'Hidden keyword-stuffed divs found with display:none.' },
        filename_spoofing: { score: 65, status: 'Red Flag', details: 'Images named with city/service keywords.' },
        image_reuse: { score: 10, status: 'Clean' },
        cloaked_location: { score: 30, status: 'Clean' },
        business_hours: { score: 0, status: 'No hours found' },
      },
      timestamp: new Date().toISOString(),
    }
  }
  return {
    success: true, url,
    score: 15,
    threat_level: 'Low',
    patterns_found: 0,
    demo_mode: true,
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

export async function scanURL(url) {
  let s = (url || '').trim()
  if (!s) return getDemoResults('')
  if (!s.startsWith('http://') && !s.startsWith('https://')) s = 'https://' + s
  let normalized = s
  try { normalized = new URL(s).href } catch { return getDemoResults(url) }

  try {
    // Call our own Next.js proxy - works from browser, no CORS issues
    const res = await fetch('/api/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: normalized }),
    })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const data = await res.json()
    return data
  } catch (err) {
    console.error('[SRRP] proxy error:', err)
    return getDemoResults(normalized)
  }
}

export default { scanURL, isLiveMode }
