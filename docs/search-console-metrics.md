# Google Search Console metrics (GitHub Action)

Automated backend metrics for **themadhatterchimneysweep.com**, suitable for AI / ops analysis.

Workflow: [`.github/workflows/search-console-metrics.yml`](../.github/workflows/search-console-metrics.yml)  
Script: [`scripts/gsc-metrics/`](../scripts/gsc-metrics/)

Runs **daily** (cron) and on **workflow_dispatch**. Fetches **last 7 and 28 days** of Search Analytics: **clicks, impressions, CTR, position** — **by page** and **by query**. Uploads JSON + a short markdown summary as a workflow **artifact** (`search-console-metrics`, 90-day retention). Does **not** commit noisy JSON to `main`.

---

## What Knoll must configure (one-time)

### 1. Google Cloud project + Search Console API

1. In [Google Cloud Console](https://console.cloud.google.com/), create or pick a project.
2. Enable **Google Search Console API** (API Library → “Google Search Console API”).
3. Create a **service account** (IAM & Admin → Service Accounts → Create).
4. Create a **JSON key** for that service account and download it.
5. Note the service account email (`…@….iam.gserviceaccount.com`).

### 2. Add the service account in Search Console

1. Open [Google Search Console](https://search.google.com/search-console) for **themadhatterchimneysweep.com**.
2. Settings → **Users and permissions** → Add user.
3. Invite the **service account email** with permission **Full** or **Restricted** (Restricted is enough for read-only Search Analytics).
4. Confirm the property type matches what the workflow will query:
   - **URL-prefix** property → use `https://themadhatterchimneysweep.com/` (default in the script).
   - **Domain** property → set repo variable `GSC_SITE_URL` to `sc-domain:themadhatterchimneysweep.com`.

### 3. GitHub secret (required)

In the repo **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Value |
| --- | --- |
| `GSC_SERVICE_ACCOUNT_JSON` | Entire contents of the service account JSON key file (one secret; do not commit this file) |

Optional repo **variable** (Settings → Secrets and variables → Actions → Variables):

| Variable | When to set |
| --- | --- |
| `GSC_SITE_URL` | Only if the GSC property is not the default URL-prefix `https://themadhatterchimneysweep.com/` |

### 4. Run the workflow

1. Actions → **Search Console metrics** → **Run workflow**.
2. After success, download the **search-console-metrics** artifact (`latest.json`, stamped JSON, `latest.md`).

---

## Local dry-run (optional)

```bash
cd scripts/gsc-metrics
npm install
export GSC_SERVICE_ACCOUNT_JSON='/absolute/path/to/sa.json'
# export GSC_SITE_URL='sc-domain:themadhatterchimneysweep.com'  # if needed
npm run fetch
```

JSON/markdown appear under `metrics/search-console/` (gitignored except `.gitkeep`). Never commit the service account JSON or `.env` files.

---

## Security notes

- `GSC_SERVICE_ACCOUNT_JSON` must stay a **GitHub Actions secret** — never commit it.
- Scope used by the script: `https://www.googleapis.com/auth/webmasters.readonly`.
- Metrics JSON in artifacts may contain query strings and page URLs; treat downloads accordingly.
- This workflow does **not** invent or fabricate metrics; API failures fail the job.
