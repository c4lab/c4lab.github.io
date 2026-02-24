# c4Lab 靜態重建深度解析（子代理彙整）

## 範圍

本文件基於平行頁面分析結果，將 `docs/prd/c4lab-static-rebuild-prd.md` 延伸為更深入、可直接實作的細節。

已分析的來源檔案：

- `recovered_snapshot/raw_html/home.html`
- `recovered_snapshot/raw_html/publication.html`
- `recovered_snapshot/raw_html/member.html`
- `recovered_snapshot/raw_html/research.html`
- `recovered_snapshot/raw_html/blog.html`
- `recovered_snapshot/raw_html/galaxy.html`

## 已驗證清單

- Home 時間軸：25 則不重複故事（`story-*` IDs）
- Publication 時間軸：73 則不重複故事（`story-*` IDs）
- Member 卡片：約 45 張視覺卡片（1 位重點 PI + 網格項目）
- Research 詳細區塊：3 個 `RESEARCH CONTENT` 區段
- Blog 貼文卡片：17 筆

## 資訊架構決策

保留為核心頁面：

- `/`
- `/blog/`
- `/research/`
- `/publication/`
- `/member/`

可選頁面（建議保留）：

- `/galaxy/`

## 保留 vs 移除（舊系統連結）

保留：

- 主導覽連結：Home、Blog、Research、Publication、Member
- 來自 Home 的網站聯絡資訊
- blog/publication/research/timeline 使用的站外內容連結

從重建後的靜態網站移除：

- WordPress login/admin/feed/meta 連結
- WordPress 主題致謝與外掛相依項
- 綁定 WP 查詢處理的舊版搜尋端點（除非已在靜態搜尋中重新實作）

## 內容模型

### Home 模型

```json
{
  "hero": {
    "headline": "Bringing Machine Intelligence To Life",
    "summary": "...",
    "image": "...",
    "links": [{"label": "...", "url": "..."}]
  },
  "timeline": [
    {
      "id": "story-...",
      "date": "YYYY-MM-DD or YYYY",
      "title": "...",
      "summary_html": "...",
      "image": "...",
      "link": "..."
    }
  ],
  "contact": {
    "phone": "+886-2-3366-7118",
    "email": "chienyuchen@ntu.edu.tw",
    "contact_person": "Prof. Chen, Chien-Yu",
    "address_lines": [
      "R304 Department of Biomechatronics",
      "(new building), National Taiwan University"
    ]
  }
}
```

### Publication 模型

```json
{
  "publications": [
    {
      "id": "story-...",
      "date": "YYYY-MM-DD",
      "venue": "...",
      "title": "...",
      "authors": "...",
      "link": "...",
      "notes_html": "..."
    }
  ]
}
```

規則：

- 先以 `id` 去重；備援鍵為：`date + title + link`。
- 首次遷移先保留作者文字原樣；第二階段再正規化為陣列。

### Member 模型

```json
{
  "featured": {
    "name": "...",
    "role": "Professor",
    "profile_url": "...",
    "bio": "...",
    "social": [{"platform": "facebook", "url": "..."}]
  },
  "members": [
    {
      "name": "...",
      "program_or_role": "...",
      "year_label": "2024 ~",
      "image": "...",
      "profile_url": null,
      "status": "current|alumni|unknown"
    }
  ]
}
```

規則：

- 在來源資料中保留原始 `year_label`。
- 可選擇將 `start_year/end_year` 解析為衍生欄位。
- 跳過沒有真實成員姓名的佔位卡片。

### Research 模型

```json
{
  "research_tracks": [
    {
      "period": "From 2015",
      "title": "Sequence/Variant Annotation",
      "summary": "...",
      "media": {"type": "video|image", "url": "..."},
      "detail_points": ["...", "...", "..."]
    }
  ]
}
```

規則：

- 保留檔案庫中的 3 軌結構。
- 將 accordion 內容保留為明確的條列陣列（不只藏在 HTML 中）。

### Blog 模型

```json
{
  "posts": [
    {
      "title": "...",
      "author": "...",
      "summary": "...",
      "image": "...",
      "external_url": "...",
      "source_host": "medium.com|linnil1.medium.com"
    }
  ]
}
```

規則：

- 所有連結皆為站外；在 UI 中需明確標示外部連結。
- 明確保留 host/domain 供 QA 與斷鏈監控使用。

### Galaxy 模型

```json
{
  "sections": [
    {
      "title": "...",
      "body": "...",
      "links": [{"label": "...", "url": "..."}],
      "media": [{"type": "image", "url": "..."}]
    }
  ],
  "support_contacts": [
    {"name": "...", "email": "..."}
  ]
}
```

規則：

- 取代遺失或無效的舊資產（例如 `blob:` 圖片參照）。
- 對於有標籤文字但缺少 `href` 的區段，需在上線前完成解析。

## 遷移風險登錄

1. 在封存標記中，Publication 時間軸有重複渲染。
- 影響：若匯入流程過於直覺，會產生重複條目。
- 緩解：以 `story-*` ID + 內容雜湊去重。

2. Galaxy 頁面含有未解決的資產/連結。
- 影響：重建網站可能出現壞圖或失效 CTA。
- 緩解：人工逐一驗證每個 Galaxy 區段連結與媒體參照。

3. Blog 連結完全為外部連結。
- 影響：存在你無法控制的連結腐化風險。
- 緩解：定期連結檢查器 + 可選的本地摘要鏡像。

4. WordPress/外掛標記混入內容匯出。
- 影響：若直接複製，渲染會很脆弱。
- 緩解：遷移為結構化資料模型，並以靜態模板重新渲染。

5. Member/Research 文字存在混合語言格式與手動換行。
- 影響：清理過程中可能遺失格式。
- 緩解：保留原始文字欄位，並以可控的換行處理進行渲染。

## QA 檢查清單（深入）

### 資料 QA

- [ ] 最終資料集中無重複 publication IDs
- [ ] 每筆 publication 皆有 date/title/venue/link
- [ ] 每筆 member 項目皆有 name 與 image
- [ ] Research tracks 除非刻意調整，否則必須維持恰好三個
- [ ] Blog 項目保留 title/author/external URL
- [ ] Galaxy 支援 email 合法且可見

### UX QA

- [ ] 外部連結開啟時有明確站外提示
- [ ] Home 聯絡資訊區塊與封存值一致
- [ ] 手機版導覽與桌面版導覽項目一致
- [ ] Timeline 頁面在無 JS-heavy 外掛行為下仍可讀

### 安全性 QA

- [ ] 正式環境 HTML 中不殘留 `/wp-` 連結
- [ ] 除非有意保留，否則不暴露 admin/feed 連結
- [ ] 靜態主機/CDN 已設定 CSP/安全標頭

## 建議實作順序

1. 為所有頁面建立靜態版面殼層。
2. 先匯入 `home`、`contact` 與導覽。
3. 匯入 publication 資料集並完成去重。
4. 匯入 member 資料集並分類 current/alumni。
5. 匯入 research tracks 與 accordion 內容。
6. 匯入 blog 外部卡片。
7. 重建 Galaxy 說明頁並驗證所有連結/媒體。
8. 執行最終 QA 檢查清單後上線。
