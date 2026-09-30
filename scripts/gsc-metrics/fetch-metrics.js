#!/usr/bin/env node
/**
 * Fetch Google Search Console search analytics (last 7 and 28 days)
 * for themadhatterchimneysweep.com — by page and by query.
 *
 * Auth: set GSC_SERVICE_ACCOUNT_JSON to the full service-account JSON string
 *       (or path to a JSON file). Optionally set GSC_SITE_URL.
 *
 * Writes JSON under metrics/search-console/ and a short latest.md summary.
 * Does not invent or fabricate metrics — fails if the API returns an error.
 */

"use strict";

const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const DEFAULT_SITE_URL = "https://themadhatterchimneysweep.com/";
const SITE_URL = process.env.GSC_SITE_URL || DEFAULT_SITE_URL;
const REPO_ROOT = path.resolve(__dirname, "../..");
const OUT_DIR = path.resolve(
  process.env.GSC_OUT_DIR || path.join(REPO_ROOT, "metrics/search-console")
);

const WINDOWS = [
  { key: "7d", days: 7 },
  { key: "28d", days: 28 },
];

const DIMENSIONS = [
  { key: "page", dimensions: ["page"] },
  { key: "query", dimensions: ["query"] },
];

function loadServiceAccount() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw || !raw.trim()) {
    throw new Error(
      "GSC_SERVICE_ACCOUNT_JSON is required (full JSON string or path to a .json file)."
    );
  }
  const trimmed = raw.trim();
  if (trimmed.startsWith("{")) {
    return JSON.parse(trimmed);
  }
  const filePath = path.resolve(trimmed);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Service account file not found: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function isoDateUTC(d) {
  return d.toISOString().slice(0, 10);
}

/**
 * GSC data typically lags ~2–3 days. End date is yesterday UTC so we never
 * request incomplete "today" data.
 */
function dateRange(days) {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);
  end.setUTCDate(end.getUTCDate() - 1);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - (days - 1));
  return { startDate: isoDateUTC(start), endDate: isoDateUTC(end) };
}

function rowMetrics(row) {
  return {
    keys: row.keys || [],
    clicks: row.clicks ?? 0,
    impressions: row.impressions ?? 0,
    ctr: row.ctr ?? 0,
    position: row.position ?? 0,
  };
}

function aggregateTotals(rows) {
  let clicks = 0;
  let impressions = 0;
  let positionWeighted = 0;
  for (const r of rows) {
    clicks += r.clicks;
    impressions += r.impressions;
    positionWeighted += r.position * r.impressions;
  }
  return {
    clicks,
    impressions,
    ctr: impressions > 0 ? clicks / impressions : 0,
    position: impressions > 0 ? positionWeighted / impressions : 0,
  };
}

async function fetchQuery(searchanalytics, siteUrl, startDate, endDate, dimensions) {
  const res = await searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions,
      rowLimit: 25000,
      dataState: "final",
    },
  });
  return (res.data.rows || []).map(rowMetrics);
}

function formatPct(ctr) {
  return `${(ctr * 100).toFixed(2)}%`;
}

function formatPos(pos) {
  return pos.toFixed(1);
}

function writeMarkdownSummary(payload) {
  const lines = [];
  lines.push(`# Search Console metrics — ${payload.siteUrl}`);
  lines.push("");
  lines.push(`Generated (UTC): ${payload.fetchedAt}`);
  lines.push("");
  lines.push(
    "Source: Google Search Console Search Analytics API (official). No fabricated values."
  );
  lines.push("");

  for (const w of WINDOWS) {
    const block = payload.windows[w.key];
    const t = block.totals;
    lines.push(`## Last ${w.days} days (${block.startDate} → ${block.endDate})`);
    lines.push("");
    lines.push(
      `| Clicks | Impressions | CTR | Avg position | Top pages | Top queries |`
    );
    lines.push(`| --- | --- | --- | --- | --- | --- |`);
    lines.push(
      `| ${t.clicks} | ${t.impressions} | ${formatPct(t.ctr)} | ${formatPos(t.position)} | ${block.byPage.length} | ${block.byQuery.length} |`
    );
    lines.push("");

    const topPages = [...block.byPage]
      .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions)
      .slice(0, 10);
    lines.push(`### Top pages by clicks (${w.key})`);
    lines.push("");
    if (topPages.length === 0) {
      lines.push("_No rows returned for this window._");
    } else {
      lines.push(`| Page | Clicks | Impressions | CTR | Position |`);
      lines.push(`| --- | --- | --- | --- | --- |`);
      for (const r of topPages) {
        lines.push(
          `| ${r.keys[0] || ""} | ${r.clicks} | ${r.impressions} | ${formatPct(r.ctr)} | ${formatPos(r.position)} |`
        );
      }
    }
    lines.push("");

    const topQueries = [...block.byQuery]
      .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions)
      .slice(0, 10);
    lines.push(`### Top queries by clicks (${w.key})`);
    lines.push("");
    if (topQueries.length === 0) {
      lines.push("_No rows returned for this window._");
    } else {
      lines.push(`| Query | Clicks | Impressions | CTR | Position |`);
      lines.push(`| --- | --- | --- | --- | --- |`);
      for (const r of topQueries) {
        lines.push(
          `| ${r.keys[0] || ""} | ${r.clicks} | ${r.impressions} | ${formatPct(r.ctr)} | ${formatPos(r.position)} |`
        );
      }
    }
    lines.push("");
  }

  lines.push("## Files");
  lines.push("");
  lines.push("- `latest.json` — full dump (7d + 28d, by page and by query)");
  lines.push("- `latest.md` — this summary");
  lines.push("");

  return lines.join("\n");
}

async function main() {
  const credentials = loadServiceAccount();
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  const searchconsole = google.searchconsole({ version: "v1", auth });
  const searchanalytics = searchconsole.searchanalytics;

  const clientEmail = credentials.client_email || "(unknown)";
  console.log(`GSC siteUrl=${SITE_URL}`);
  console.log(`Service account=${clientEmail}`);
  console.log(`Output dir=${OUT_DIR}`);

  const payload = {
    siteUrl: SITE_URL,
    fetchedAt: new Date().toISOString(),
    serviceAccountEmail: clientEmail,
    source: "Google Search Console Search Analytics API (webmasters.searchanalytics.query)",
    windows: {},
  };

  for (const w of WINDOWS) {
    const { startDate, endDate } = dateRange(w.days);
    console.log(`Fetching ${w.key}: ${startDate} → ${endDate}`);

    const byPage = await fetchQuery(
      searchanalytics,
      SITE_URL,
      startDate,
      endDate,
      ["page"]
    );
    const byQuery = await fetchQuery(
      searchanalytics,
      SITE_URL,
      startDate,
      endDate,
      ["query"]
    );

    // Totals from page dimension (same site totals either way; page avoids query anonymization quirks for totals)
    const totals = aggregateTotals(byPage);

    payload.windows[w.key] = {
      days: w.days,
      startDate,
      endDate,
      totals,
      byPage,
      byQuery,
    };

    console.log(
      `  ${w.key}: clicks=${totals.clicks} impressions=${totals.impressions} pages=${byPage.length} queries=${byQuery.length}`
    );
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const stamp = payload.fetchedAt.replace(/[:.]/g, "-");
  const latestJsonPath = path.join(OUT_DIR, "latest.json");
  const stampedJsonPath = path.join(OUT_DIR, `gsc-${stamp}.json`);
  const latestMdPath = path.join(OUT_DIR, "latest.md");

  const jsonText = JSON.stringify(payload, null, 2);
  fs.writeFileSync(latestJsonPath, jsonText, "utf8");
  fs.writeFileSync(stampedJsonPath, jsonText, "utf8");
  fs.writeFileSync(latestMdPath, writeMarkdownSummary(payload), "utf8");

  console.log(`Wrote ${latestJsonPath}`);
  console.log(`Wrote ${stampedJsonPath}`);
  console.log(`Wrote ${latestMdPath}`);
}

main().catch((err) => {
  console.error("GSC metrics fetch failed:");
  console.error(err?.response?.data || err.message || err);
  process.exit(1);
});
