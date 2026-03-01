# c4Lab Website

c4Lab 實驗室網站，使用 Vite + React + TypeScript 建構的純靜態 SPA。

所有內容（成員、論文、部落格等）都寫在 TypeScript 資料檔裡，不需要資料庫或 CMS。
改完檔案、push 上來、server 上 rebuild 就會更新。

## 更新網站內容

### 流程

```
1. 編輯 src/data/mock/ 裡的資料檔
2. （選配）放圖片到 public/images/ 對應資料夾
3. git add / commit / push
4. 到 server 上執行：
   git pull
   docker compose up --build -d
```

### 我要改什麼，改哪個檔案？

| 我想要...                   | 編輯的檔案            | 備註                                                    |
| -------------------------- | -------------------- | ------------------------------------------------------- |
| 新增論文                    | `publications.ts`    | 加到對應年份的 `items`，或新增一個年份 group              |
| 新增／畢業成員              | `members.ts`         | 新增加到 `memberRecords`；畢業改 `status: "alumni"` 和 `yearLabel` |
| 更新教授資訊                | `members.ts`         | 編輯 `featuredMember`                                    |
| 新增部落格文章卡片           | `blog.ts`            | 加到 `blogPosts`，圖片放 `public/images/blog/`            |
| 新增首頁 timeline 事件      | `home.ts`            | 加到 `timelineEntries`，圖片放 `public/images/timeline/`  |
| 新增首頁專案卡片             | `home.ts`            | 加到 `projectHighlights`                                 |
| 改首頁介紹文字              | `home.ts`            | 編輯 `homeHero`                                          |
| 改聯絡資訊／地址             | `site.ts`            | 編輯 `siteContact`                                       |
| 改導覽列連結                | `site.ts`            | 編輯 `primaryNav` 或 `utilityNav`                        |
| 改研究方向                  | `research.ts`        | 編輯或新增 `researchTracks`                               |
| 改 Galaxy 說明              | `galaxy.ts`          | 編輯 `galaxySections` 或 `galaxySupport`                  |

> 所有資料檔都在 `src/data/mock/` 目錄下。

### 圖片放哪裡？

圖片放在 `public/images/`，資料檔裡用 `/images/...` 路徑引用。

| 目錄                      | 用途              | 命名慣例                              |
| ------------------------- | ---------------- | ------------------------------------- |
| `public/images/`          | 全站共用          | `hero-bg.png`, `prof-chen.png` 等      |
| `public/images/blog/`     | 部落格封面圖       | `blog-NN-描述.ext`（如 `blog-01-i2ai.webp`）|
| `public/images/timeline/` | 首頁 timeline 縮圖 | `YYYY-描述.ext`（如 `2024-ai-multiomics.jpg`）|

圖片不會自動壓縮或轉檔，放什麼就 serve 什麼。

### 常見範例

#### 新增一篇 2026 年的論文

在 `src/data/mock/publications.ts` 找到（或新增）year `"2026"` 的 group，加一筆：

```ts
{
  id: "pub_077",
  year: "2026",
  dateLabel: "15 Mar 2026",
  title: "Your Paper Title",
  venue: "Nature Methods",
  authors: "Author A, Author B, Chien-Yu Chen*",
  href: "https://doi.org/10.xxxx/xxxxx"
}
```

#### 成員畢業

在 `src/data/mock/members.ts` 找到該成員，改兩個欄位：

```ts
status: "alumni",        // 原本是 "current"
yearLabel: "2022 - 2026" // 原本是 "2022 ~"
```

#### 新增部落格卡片

1. 把封面圖放到 `public/images/blog/blog-18-topic.png`
2. 在 `src/data/mock/blog.ts` 的 `blogPosts` 陣列加一筆：

```ts
{
  id: "blog-18",
  title: "文章標題",
  author: "作者名",
  summary: "一兩句摘要...",
  imageUrl: "/images/blog/blog-18-topic.png",
  sourceHost: "Medium",
  href: "https://medium.com/...",
  ctaLabel: "Read on Medium"
}
```

## 本地開發

### 環境需求

- Node.js 22+
- npm（隨 Node 附帶）

### 起手

```bash
git clone git@github.com:c4lab/c4lab-webiste-rebuild.git
cd c4lab-webiste-rebuild
npm install
npm run dev
```

Dev server 會跑在 http://localhost:5173，支援 hot reload——改任何 `.ts`/`.tsx`/`.css` 檔案都會即時反映在瀏覽器上，不需要手動重新整理。

### 常用指令

| 指令              | 作用                                    |
| ---------------- | --------------------------------------- |
| `npm run dev`    | 啟動開發 server（http://localhost:5173） |
| `npm run build`  | Production build，輸出到 `dist/`         |
| `npm run preview`| 本地預覽 production build 的結果         |
| `npm test`       | 跑 Vitest 測試                           |

### 典型開發流程

```
1. npm run dev              ← 開 dev server
2. 編輯程式碼                ← 瀏覽器自動 hot reload
3. npm test                 ← 確認測試通過
4. npm run build            ← （選配）確認 production build 沒問題
5. git add / commit / push
```

### 專案結構

```
src/
├── app/             ← 頁面元件和路由（App.tsx）
├── components/      ← 共用 UI 元件
├── data/mock/       ← 所有網站內容資料（改內容改這裡）
├── types/           ← TypeScript 型別定義
└── main.tsx         ← 進入點

public/
└── images/          ← 靜態圖片（build 時原封不動複製）
```

## 部署架構

```
外層 nginx (TLS + domain routing)
  └─ proxy_pass → localhost:10001
       └─ Docker container (nginx:alpine, serve 靜態檔)
            └─ Vite build output (dist/)
```

- 內層 container 只負責 serve 靜態檔，不管 TLS、不管 domain
- 外層 nginx 負責 `c4lab.tw` / `c4lab.bime.ntu.edu.tw` 的 TLS 和轉發
- SPA 路由靠 `try_files $uri $uri/ /index.html` 處理

### Server 上的操作

Docker（或 Podman）：

```bash
git pull
docker compose up --build -d
```

如果用 Podman 且沒有 `podman compose`：

```bash
git pull
podman build -t c4lab-web .
podman stop c4lab-web && podman rm c4lab-web
podman run -d --name c4lab-web --restart always -p 10001:80 c4lab-web
```

### 相關檔案

| 檔案                | 用途                                |
| ------------------- | ---------------------------------- |
| `Dockerfile`        | Multi-stage build（Node build → nginx serve）|
| `docker-compose.yml`| 一行 service，10001:80              |
| `nginx.conf`        | SPA fallback + assets cache header  |
| `.dockerignore`     | 排除 node_modules、dist、.git       |

## 技術棧

- **Framework**: React 19 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Router**: react-router-dom v7（BrowserRouter）
- **Testing**: Vitest + jsdom
