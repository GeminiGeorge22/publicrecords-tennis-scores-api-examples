**READMEs:** [English](README.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md) · [한국어](README.ko.md)

# Tennis Scores API — サンプル

ATP / WTA のスコア、結果、ランキング。ある日付または大会全体（グランドスラム、シングルス、ダブルス、混合）の全試合を、セットスコア、タイブレーク、シード、ラウンド、コート、勝者付きで取得できます。現行ランキングにも対応します。

Actor は**ご自身の** Apify アカウント（API トークン）で実行されます。料金は無料または有料プランに請求されます。Standby/MCP モードは未実装です。これらのサンプルは Apify API のみを呼びます。

## リンク
- [Apify Store ページ](https://apify.com/publicrecords/tennis-scores-api)
- [n8n / Make / Zapier / Pipedream レシピ](https://github.com/GeminiGeorge22/publicrecords-mcp/tree/main/templates)

## 同期実行

`APIFY_TOKEN` にご自身の Apify トークンを設定してください。リポジトリにコミットしないでください。

```bash
export APIFY_TOKEN=YOUR_TOKEN
python3 examples/python/run.py
# node examples/javascript/run.js
# bash examples/curl/run.sh
```

Python、JavaScript、curl のサンプルは `examples/` にあります。作者: Public Records。ライセンス: MIT。このリポジトリに GitHub Actions はありません。
