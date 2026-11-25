**READMEs:** [English](README.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md) · [한국어](README.ko.md)

# Tennis Scores API — examples

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/GeminiGeorge22/publicrecords-tennis-scores-api-examples/blob/main/notebooks/quickstart.ipynb)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/GeminiGeorge22/publicrecords-tennis-scores-api-examples/HEAD?labpath=notebooks%2Fquickstart.ipynb)

ATP and WTA match scores, results and rankings: every match for a date or a whole tournament (Grand Slams, singles, doubles, mixed), with set-by-set scores, tiebreaks, seeds, round, court and winner — or current tour rankings.

The Actor runs on **your** Apify account (API token). Usage is billed to you on Apify's free or paid tier. Standby/MCP mode is not built; these examples call the Apify API only.

## Links
- [Apify Store page](https://apify.com/publicrecords/tennis-scores-api)
- [n8n / Make / Zapier / Pipedream recipes](https://github.com/GeminiGeorge22/publicrecords-mcp/tree/main/templates)
- [Example repos index](https://github.com/GeminiGeorge22/publicrecords-automation-recipes#example-repos-index)

## Run a sync job

Set `APIFY_TOKEN` to your own Apify token. Do not commit it.

```bash
export APIFY_TOKEN=YOUR_TOKEN
python3 examples/python/run.py
# node examples/javascript/run.js
# bash examples/curl/run.sh
```

Examples in Python, JavaScript and curl are in `examples/`. Author: Public Records. License: MIT. No GitHub Actions in this repository.
