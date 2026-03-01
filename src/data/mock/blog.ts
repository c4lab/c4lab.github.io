import type { BlogPostCard, PageHeroContent } from "../../types/content";

export const blogHero: PageHeroContent = {
  eyebrow: "Blog",
  title: "Selected Reading",
  summary:
    "A curated set of external articles, notes, and explainers that translate research themes into public-facing reading."
};

export const blogPosts: BlogPostCard[] = [
  {
    id: "blog-1",
    title: "台大生機系課程：人工智慧概論",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "台大生機系人工智慧概論課程介紹與教學資源。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%8F%B0%E5%A4%A7%E7%94%9F%E6%A9%9F%E7%B3%BB%E8%AA%B2%E7%A8%8B-%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%A6%82%E8%AB%96-2023-introduction-to-artificial-intelligence-b3e6767eadb6",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-2",
    title: "科技英文寫作",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "科技英文寫作技巧與指導。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E7%A7%91%E6%8A%80%E8%8B%B1%E6%96%87%E5%AF%AB%E4%BD%9C-1f1fd1830c36",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-3",
    title: "如何學習生物資訊?",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "生物資訊學習路徑與資源推薦。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%A6%82%E4%BD%95%E5%AD%B8%E7%BF%92%E7%94%9F%E7%89%A9%E8%B3%87%E8%A8%8A-de0f2e4ce1e3",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-4",
    title: "TaiwanGenomes",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "TaiwanGenomes 計畫介紹與台灣基因體研究。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/taiwangenomes-660d9228cf2d",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-5",
    title: "台灣人工智慧實驗室 之 Polygenic Risk Score (PRS)",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "多基因風險分數在台灣族群的應用與研究。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%8F%B0%E7%81%A3%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%AF%A6%E9%A9%97%E5%AE%A4-%E4%B9%8B-polygenic-risk-score-prs-3f903b21ac3b",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-6",
    title: "台灣人工智慧實驗室 之 Deep learning for HLA characterization",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "深度學習應用於 HLA 基因分型的方法與成果。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%8F%B0%E7%81%A3%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%AF%A6%E9%A9%97%E5%AE%A4-%E4%B9%8B-deep-learning-for-hla-characterization-a3be30872d2a",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-7",
    title: "台灣人工智慧實驗室 之 AutoML for Genomic AI",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "自動化機器學習在基因體 AI 分析中的應用。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%8F%B0%E7%81%A3%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%AF%A6%E9%A9%97%E5%AE%A4-%E4%B9%8B-automl-for-genomic-ai-bd83152eb25d",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-8",
    title: "Nebula Genomics $299 美元的 30x WGS是否是一個值得購買的產品?",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "Nebula Genomics 消費級全基因組定序產品評測。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/nebula-genomics-299-%E7%BE%8E%E5%85%83%E7%9A%84-30x-wgs%E6%98%AF%E5%90%A6%E6%98%AF%E4%B8%80%E5%80%8B%E5%80%BC%E5%BE%97%E8%B3%BC%E8%B2%B7%E7%9A%84%E7%94%A2%E5%93%81-1681af054edf",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-9",
    title: "人工智慧在生物資訊的應用",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "AI 技術在生物資訊領域的應用概覽。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%9C%A8%E7%94%9F%E7%89%A9%E8%B3%87%E8%A8%8A%E7%9A%84%E6%87%89%E7%94%A8-84aa252372d",
    ctaLabel: "Read on Medium"
  },
  {
    // NOTE: This post reuses the same Medium URL as blog-9.
    // Likely a data entry error on the old site — flagged for owner to verify.
    id: "blog-10",
    title: "LDTS 之生物資訊專業該如何把關?",
    author: "Chien-Yu Chen 陳倩瑜",
    summary: "實驗室自行開發檢測（LDTS）中生物資訊品質管理的探討。",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%9C%A8%E7%94%9F%E7%89%A9%E8%B3%87%E8%A8%8A%E7%9A%84%E6%87%89%E7%94%A8-84aa252372d",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-11",
    title: "Graph-based Read Mapping 介紹",
    author: "林弘曄",
    summary: "圖形導向的讀段比對方法介紹。",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/graph-based-read-mapping-%E4%BB%8B%E7%B4%B9-115393b34ab7",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-12",
    title: "Differential Expression Gene (DEG) Analysis 基因差異化表現的分析",
    author: "林弘曄",
    summary: "差異表現基因分析的原理與方法。",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/differential-expression-gene-deg-%E5%9F%BA%E5%9B%A0%E5%B7%AE%E7%95%B0%E5%8C%96%E8%A1%A8%E7%8F%BE%E7%9A%84%E5%8E%9F%E7%90%86-5a7e9934819d",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-13",
    title: "Read Mapping 概念與演算法",
    author: "林弘曄",
    summary: "讀段比對的基本概念與常用演算法解析。",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/read-mapping-%E6%A6%82%E5%BF%B5%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95-c5bd423cbf80",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-14",
    title: "RNA Quantification, RNA 定量",
    author: "林弘曄",
    summary: "RNA 定量分析的方法與工具介紹。",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/rna-quantification-rna-%E5%AE%9A%E9%87%8F-63945382e49f",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-15",
    title: "DADA2: 一個高解析度分析 Microbiota 16S sequences 演算法",
    author: "林弘曄",
    summary: "DADA2 演算法在微生物體 16S 序列分析中的應用。",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/dada2-%E4%B8%80%E5%80%8B%E9%AB%98%E8%A7%A3%E6%9E%90%E5%BA%A6%E5%88%86%E6%9E%90-microbiota-16s-sequences-%E6%BC%94%E7%AE%97%E6%B3%95-1196b95cad71",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-16",
    title: "簡介單細胞定序 review",
    author: "林弘曄",
    summary: "單細胞定序技術的文獻回顧與概述。",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/%E7%B0%A1%E4%BB%8B%E5%96%AE%E7%B4%B0%E8%83%9E%E5%AE%9A%E5%BA%8F-review-545b4094d31b",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-17",
    title: "基因上位作用(epistasis)介紹與發現",
    author: "林弘曄",
    summary: "基因上位作用的概念介紹與發現方法。",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/%E5%9F%BA%E5%9B%A0%E4%B8%8A%E4%BD%8D%E4%BD%9C%E7%94%A8-epistasis-%E4%BB%8B%E7%B4%B9%E8%88%87%E7%99%BC%E7%8F%BE-a7ccd9bc1d70",
    ctaLabel: "Read on Medium"
  }
];
