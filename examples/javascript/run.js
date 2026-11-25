// Call publicrecords/tennis-scores-api on YOUR Apify account. Set APIFY_TOKEN. Do not commit the token.
// Standby/MCP mode is not built; this script uses the Apify API only.
const TOKEN = process.env.APIFY_TOKEN;
if (!TOKEN) {
  console.error("Set APIFY_TOKEN to your own Apify token");
  process.exit(1);
}
const url = `https://api.apify.com/v2/acts/publicrecords~tennis-scores-api/run-sync-get-dataset-items?token=${TOKEN}`;
const payload = {
  "tournament": "wimbledon",
  "date": "2026-07-12",
  "maxResults": 20
};

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
const items = await res.json();
console.log(JSON.stringify(Array.isArray(items) ? items.slice(0, 5) : items, null, 2));
console.log("count", Array.isArray(items) ? items.length : "n/a");
