# c4Lab 靜態重建 PRD（復原草案）

## 文件狀態

- 狀態：實作啟動用草案
- 日期：2026-02-24
- 依據 Wayback 快照建立（遭駭前擷取）
- 來源盤點：`recovered_snapshot/metadata/pre_hack_snapshots.tsv`

## 問題陳述

原始 WordPress 網站曾遭入侵。實驗室需要重建靜態網站，以恢復公開資訊內容、移除動態 CMS 攻擊面，並保留封存網站中的核心導覽與內容。

## 產品目標

- 快速恢復實驗室核心資訊頁面。
- 保留歷史內容（出版品、研究亮點、成員、部落格連結）。
- 讓非工程背景的實驗室成員也能維護。
- 透過移除執行期 CMS／管理介面攻擊面，提升安全性。

## 非目標

- 重建 WordPress 後台／編輯流程。
- 重現舊站所有外掛行為。
- 1:1 保留舊主題特定視覺效果。

## 站點地圖（來自封存）

封存中找到的主要導覽：

- `/`（首頁）
- `/blog/`
- `/research/`
- `/publication/`
- `/member/`

有擷取到但不在主導覽中的額外頁面：

- `/galaxy/`（服務／操作說明頁）

## 內容盤點（由封存推導）

- 首頁時間軸項目：約 25 筆
- 出版品時間軸項目：約 73 筆唯一項目
- 成員卡片：約 45 筆
- 研究區塊：3 個區塊
- 部落格卡片：17 筆

註：封存 HTML 中的出版品標記包含重複渲染的時間軸元件。匯入紀錄時請使用唯一 story ID。

## 全域需求檢核清單

- [ ] 含 c4Lab 品牌／logo 的頁首
- [ ] 主導覽：Home、Blog、Research、Publication、Member
- [ ] 可選導覽／工具連結：Galaxy
- [ ] 響應式版面（手機 + 桌機）
- [ ] 可從主頁（或全站頁尾）存取聯絡資訊區塊
- [ ] 每頁基礎 SEO 中繼資料（title、description、canonical）
- [ ] 基礎分析整合（若仍需要）
- [ ] 無障礙基線（標題層級、替代文字、連結標籤）
- [ ] 不暴露 WordPress 的 admin/login/feed/search 連結

## 頁面需求

### 1) 首頁 (`/`)

目的：實驗室入口頁，呈現識別、亮點與聯絡資訊。

必要內容區塊：

- [ ] Hero 訊息
- [ ] 時間軸式亮點／新聞清單
- [ ] 每則亮點支援：日期、標題、摘要、可選圖片、外部連結
- [ ] 含電話、電子郵件、地址的聯絡區塊

封存中找到的聯絡資料：

- 電話：`+886-2-3366-7118`
- Email：`chienyuchen@ntu.edu.tw`（Chen 教授）
- 地址文字包含：`R304 Department of Biomechatronics (new building), National Taiwan University`

### 2) 出版品 (`/publication/`)

目的：長篇出版品封存頁。

每筆出版品項目的必要資料欄位：

- [ ] 出版日期
- [ ] 發表場域／期刊
- [ ] 標題
- [ ] 作者清單
- [ ] 外部連結（論文頁／DOI 等）

必要行為：

- [ ] 依時間排序（最新在前）
- [ ] 依年份分組標籤
- [ ] 可處理大型資料集（目前 70+ 筆，預期未來成長）

### 3) 成員 (`/member/`)

目的：人員名錄（PI + 學生／校友）。

每張成員卡片的必要資料欄位：

- [ ] 姓名（英文與／或在地語言）
- [ ] 角色／學程或學位狀態
- [ ] 可選梯次／年份區間文字（例如：`2024 ~`）
- [ ] 照片／頭像
- [ ] 可選外部個人檔案連結（例如：PI 的 ORCID）

必要結構：

- [ ] 置頂 PI／創辦人區塊
- [ ] 成員網格／清單區塊（現役 + 歷史／校友樣式內容）

### 4) 研究 (`/research/`)

目的：說明核心研究方向。

觀察到的必要結構：

- [ ] 類似 `From <year>` 的區段標籤
- [ ] 研究主題標題
- [ ] 介紹文字／摘要
- [ ] 可選圖表／圖片
- [ ] 可展開的詳細內容（`RESEARCH CONTENT` 區塊）

最低限度已擷取主題：

- [ ] Sequence/Variant Annotation
- [ ] Deep Learning for Immunogenomics
- [ ] Outcome Prediction by Integrating Multi-omics Data

### 5) 部落格 (`/blog/`)

目的：精選閱讀／資源貼文。

觀察到的模式：

- [ ] 貼文標題
- [ ] 作者標示
- [ ] 短摘要
- [ ] 連到外部文章（多為 Medium）的 `More` 按鈕

需求：

- [ ] 明確保留外部連結行為（開新分頁）
- [ ] 站外連結一致標記
- [ ] 在適用時保留雙語貼文標題

### 6) Galaxy (`/galaxy/`) [可選但建議]

目的：提供 NTU Galaxy 服務使用者的操作說明頁。

封存中看到的必要區塊：

- [ ] 帳號申請連結
- [ ] 上傳流程指引（web/FTP）
- [ ] 工作狀態與下載指引
- [ ] 注意事項／限制
- [ ] 資源資訊
- [ ] 套件安裝／測試狀態試算表連結
- [ ] 官方教學連結
- [ ] 支援聯絡人與電子郵件

## 資料模型建議（用於靜態網站）

將頁面內容儲存在結構化檔案（`.json` 或 `.yaml`）中，以將內容與模板解耦。

建議的內容檔案：

- `content/home/timeline.(json|yaml)`
- `content/publications.(json|yaml)`
- `content/members.(json|yaml)`
- `content/research.(json|yaml)`
- `content/blog_links.(json|yaml)`
- `content/galaxy_help.(json|yaml)`
- `content/site_contact.(json|yaml)`

## 安全需求（必備）

- [ ] 僅使用靜態託管（無 WP/PHP 執行環境）
- [ ] 在適用情況下停用目錄列表
- [ ] 部署中不保留舊有 `/wp-*` 路由
- [ ] 在主機／CDN 層設定安全標頭
- [ ] 表單端點（若有）使用外部可信供應商，或具垃圾訊息防護的 serverless 端點

## 遷移檢核清單

### 內容擷取

- [ ] 將出版品紀錄正規化為結構化資料集
- [ ] 正規化成員紀錄（姓名、角色、年份、圖片）
- [ ] 將研究區塊擷取為結構化內容
- [ ] 擷取部落格標題 + 作者 + 外部 URL 清單
- [ ] 與實驗室負責人確認聯絡資訊

### 建置與 QA

- [ ] 為每種頁面類型實作靜態模板
- [ ] 匯入結構化資料集
- [ ] 驗證所有站內連結
- [ ] 驗證所有外部連結
- [ ] 執行手機與桌機視覺 QA
- [ ] 執行無障礙檢查

### 上線準備

- [ ] 網域切換計畫
- [ ] 舊 URL 重新導向計畫
- [ ] 靜態建置產物與內容來源檔備份
- [ ] 上線後監控檢核清單

## 團隊待決策事項

- [ ] 採用哪個靜態技術棧（Astro/Next static export/Eleventy/Hugo）？
- [ ] `Galaxy` 要放在頂部導覽，或僅作為工具／頁尾連結？
- [ ] 上線時保留全部歷史出版品，或按年份分階段上線？
- [ ] 成員頁範圍：僅現役成員 vs 現役 + 校友（封存中兩種樣式都有）
- [ ] 持續內容更新由誰負責，以及 source-of-truth 檔案放在哪裡？

## 與封存來源的可追溯性

以下封存 HTML 檔案作為主要重建來源：

- `recovered_snapshot/raw_html/home.html`
- `recovered_snapshot/raw_html/publication.html`
- `recovered_snapshot/raw_html/member.html`
- `recovered_snapshot/raw_html/research.html`
- `recovered_snapshot/raw_html/blog.html`
- `recovered_snapshot/raw_html/galaxy.html`

此 PRD 刻意採用大量檢核清單格式，讓工程與內容負責人可並行推進重建工作。
