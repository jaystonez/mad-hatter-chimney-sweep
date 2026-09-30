# GSC metrics script

Fetches real Google Search Console search analytics for `themadhatterchimneysweep.com`.

## Local run

```bash
cd scripts/gsc-metrics
npm install
export GSC_SERVICE_ACCOUNT_JSON='/path/to/sa.json'   # or paste full JSON
# optional override if the GSC property is a domain property:
# export GSC_SITE_URL='sc-domain:themadhatterchimneysweep.com'
npm run fetch
```

Output lands in `metrics/search-console/` at the repo root (`latest.json`, stamped JSON, `latest.md`).

See [docs/search-console-metrics.md](../../docs/search-console-metrics.md) for GitHub Actions secrets and Search Console setup.
