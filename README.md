# c4lab_website_rebuild

本專案用於重建 c4Lab 靜態網站，並保存遭駭前的 Wayback 快照與重建規格。

## 目前 Spec 在哪裡

### 核心 PRD

- `docs/prd/c4lab-static-rebuild-prd.md`（英文）
- `docs/prd/c4lab-static-rebuild-prd.zh-TW.md`（繁中）

### 深度規格（資料模型、風險、QA）

- `docs/prd/c4lab-static-rebuild-deep-dive.md`（英文）
- `docs/prd/c4lab-static-rebuild-deep-dive.zh-TW.md`（繁中）

## Google Sheet 欄位模板

位置：`docs/google_sheet_templates/`

共編連結：

- <https://docs.google.com/spreadsheets/d/1ZbsS51W7eTaWDGcTraRrd0xOx3Bs2fwA/edit?usp=sharing&ouid=105853941157804003114&rtpof=true&sd=true>

- 索引與優先級：`00_欄位模板索引_優先級.csv`
- 匯入說明：`README_欄位模板.md`
- 合併後的 Excel：`c4lab_google_sheet_templates.xlsx`

優先級定義：

- `P0`：上線必備
- `P1`：建議收齊
- `P2`：選配

## Clone 下來的網站快照長怎樣

位置：`recovered_snapshot/`

### 1) 原始 HTML 快照

- `recovered_snapshot/raw_html/home.html`
- `recovered_snapshot/raw_html/blog.html`
- `recovered_snapshot/raw_html/research.html`
- `recovered_snapshot/raw_html/publication.html`
- `recovered_snapshot/raw_html/member.html`
- `recovered_snapshot/raw_html/galaxy.html`

這些是 Wayback 抓下來的「原始 WordPress/Elementor HTML」，可用來抽資料，但不建議直接當成最終網站頁面。

### 2) 快照來源對照

- `recovered_snapshot/metadata/pre_hack_snapshots.tsv`

內容包含每頁的 Wayback timestamp 與原始 URL 對照（遭駭前版本）。

### 3) 重抓腳本

- `recovered_snapshot/fetch_pre_hack_snapshots.sh`

可用來重抓同一批快照頁面。

### 4) 已知特性（重建時要注意）

- 這是「重點頁面快照」，不是全站完整鏡像。
- `publication` 在原始 HTML 中有重複 timeline widget，匯入資料時要先去重。
- 頁面中含有 WP/plugin 的舊資源連結，重建靜態站時需改為新站自己的模板與資產。

## 建議重建流程（簡版）

1. 先填 `P0` 工作表（聯絡、成員、發表、研究、首頁時間軸）。
2. 依 `deep-dive` 的資料模型轉成 JSON/YAML。
3. 用靜態站模板渲染頁面並做 QA（連結、RWD、可讀性、無 WP 殘留路徑）。
