import type { GalaxySection, GalaxySupportContact, PageHeroContent } from "../../types/content";

export const galaxyHero: PageHeroContent = {
  eyebrow: "Galaxy",
  title: "NTU Galaxy 相關說明",
  summary:
    "NTU Galaxy 使用說明，包含帳號申請、資料上傳、Job 監控、以及支援聯絡方式。"
};

export const galaxySections: GalaxySection[] = [
  {
    id: "apply",
    title: "申請帳號",
    summary: "透過線上表單申請 NTU Galaxy 帳號。",
    points: [
      "填寫帳號申請表單後，等待審核通過即可使用。",
      "確認計畫負責人與儲存空間需求。",
      "通過後可至 galaxy2.cc.ntu.edu.tw 登入使用。"
    ],
    links: [
      {
        label: "帳號申請表單",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScbK4zqPezYqW0L2s3_taYlk4oU9Kvb_AI4aIrAQJaNrkrdVA/viewform?usp=sf_link",
        external: true
      },
      {
        label: "開啟 Galaxy",
        href: "https://galaxy2.cc.ntu.edu.tw",
        external: true
      }
    ]
  },
  {
    id: "upload",
    title: "上傳資料",
    summary: "小檔案使用網頁上傳，大檔案使用 FTP。",
    points: [
      "小檔案使用網頁上傳，大型資料集使用 FTP 上傳。",
      "上傳前統一檔案命名，方便後續追蹤。",
      "建議整理好 input 資料以利重現分析結果。"
    ],
    links: []
  },
  {
    id: "jobs",
    title: "Job 狀態與下載結果",
    summary: "監控 job 狀態、確認輸出、下載分析結果。",
    points: [
      "重新執行長時間分析前，請先確認 queue 狀態。",
      "右側欄 History 的磁碟圖示可下載結果。",
      "BWA、Bowtie 等 read-mapping 工具可使用 built-in reference index，若遇到 error 請通知我們下載對應檔案。"
    ],
    links: []
  },
  {
    id: "resources",
    title: "資源與參考資料",
    summary: "PBS 共 27 個 node，每個 node 有 20-24 CPU 跟 128 GB RAM。",
    points: [
      "開始設計 workflow 前，請先確認所需 package 是否已安裝。",
      "使用官方 Galaxy Training 教材學習標準分析流程。",
      "遇到 error 可按 Dataset Error Report，系統會自動寄送診斷資訊給管理員。"
    ],
    links: [
      {
        label: "Package 安裝與測試狀態",
        href: "https://docs.google.com/spreadsheets/d/1APjFZYs30Vh9jEvyhq8Phnlw217jpkPimSlqUFRNuR8/edit#gid=0",
        external: true
      },
      {
        label: "官方 Galaxy Training",
        href: "https://training.galaxyproject.org/training-material/",
        external: true
      }
    ]
  }
];

export const galaxySupport: GalaxySupportContact[] = [
  { name: "楊文策", email: "d06631002@ntu.edu.tw", role: "NTU c4Lab" },
  { name: "林弘曄", email: "r08631020@ntu.edu.tw", role: "NTU c4Lab" }
];
