#!/usr/bin/env bash
# Call publicrecords/tennis-scores-api on YOUR Apify account. Set APIFY_TOKEN. Do not commit the token.
# Standby/MCP mode is not built; this script uses the Apify API only.
set -euo pipefail
: "${APIFY_TOKEN:?Set APIFY_TOKEN to your own Apify token}"
curl -sS -X POST \
  "https://api.apify.com/v2/acts/publicrecords~tennis-scores-api/run-sync-get-dataset-items?token=${APIFY_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"tournament": "wimbledon", "date": "2026-07-12", "maxResults": 20}'
