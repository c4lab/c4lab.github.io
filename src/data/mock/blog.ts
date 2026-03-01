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
    summary:
      "AI 涵蓋的內容很多，生機系這門必修課是概論的課，目的是引導同學在初步認識 AI 的各種主題之後，可以選擇其他更進階的課程繼續深入學習，例如：資料科學，機器學習，深度學習，統計學習，影像處理，電腦視覺，自然語言處理等等。在琢磨了近兩年時間的選材，終於在這學期開學之初，確定了課程內容",
    imageUrl: "/images/blog/blog-01-i2ai.webp",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%8F%B0%E5%A4%A7%E7%94%9F%E6%A9%9F%E7%B3%BB%E8%AA%B2%E7%A8%8B-%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E6%A6%82%E8%AB%96-2023-introduction-to-artificial-intelligence-b3e6767eadb6",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-2",
    title: "科技英文寫作",
    author: "Chien-Yu Chen 陳倩瑜",
    summary:
      "我的科技英文寫作，啟蒙於念碩士前的暑假 (1996)，當時 Stanford 給我 admission 的條件是：要提前到學校參加暑期語言課程，其中包含一門科技英文寫作。當時 Stanford 圖書館的查詢系統還是終端機模式 (那是一個還沒有 Google Scholar 的時代)，也就是純文字的界面，資料庫中也只能看到摘要，要取得全文還要進圖書館，找到期刊印出紙本。儘管如此，這門科技英文寫作還是幫助我養成許多做研究時該具備的重要能力，包含如何查找相關文獻，如何描述研究問題的背景，如何摘要前人的相關研究成果，如何清楚說出研究目標，如何具體描述自己的研究方法等等。",
    imageUrl: "/images/blog/blog-02-scientific-writing.jpeg",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E7%A7%91%E6%8A%80%E8%8B%B1%E6%96%87%E5%AF%AB%E4%BD%9C-1f1fd1830c36",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-3",
    title: "如何學習生物資訊?",
    author: "Chien-Yu Chen 陳倩瑜",
    summary:
      "我想了很久，覺得這是一個購物車選購產品的問題，學習者得先清楚自己要什麼，才容易預設學習內容。而各單元之間存在一些相依性，在這篇文章中，我用 c4Lab 的學習清單為範例，說明各學習單元之間的相依性。",
    imageUrl: "/images/blog/blog-03-learn-bioinformatics.png",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%A6%82%E4%BD%95%E5%AD%B8%E7%BF%92%E7%94%9F%E7%89%A9%E8%B3%87%E8%A8%8A-de0f2e4ce1e3",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-4",
    title: "TaiwanGenomes",
    author: "Chien-Yu Chen 陳倩瑜",
    summary:
      "c4Lab 和成大電機系張天豪老師團隊合作，將我們 (與陳沛隆醫師與許書睿老師合作) 這些年分析 1,496 個台灣人全基因定序 (Whole Genome Sequencing，簡稱 WGS) 資料的結果，透過網頁介面提供給研究人員查詢 (https://genomes.tw/)，歡迎大家使用。",
    imageUrl: "/images/blog/blog-04-taiwangenomes.png",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/taiwangenomes-660d9228cf2d",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-5",
    title: "台灣人工智慧實驗室 之 Polygenic Risk Score (PRS)",
    author: "Chien-Yu Chen 陳倩瑜",
    summary:
      "多基因風險評分 (Polygenic Risk Score) 在這幾年突然變成一個熱門名詞，但其實它的概念並不新穎，簡單來說，就是把一個人的基因型 (genotype) 當成特徵，每一個 SNP 都是一個變數，使用成千上萬的特徵建立一個線性或非線性的分類或迴歸模型，每一個模型分別用來評估一個人在一生中會得某種疾病的風險，或是預測一些可量化的屬性，例如：身高或體重。",
    imageUrl: "/images/blog/blog-05-prs.png",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%8F%B0%E7%81%A3%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%AF%A6%E9%A9%97%E5%AE%A4-%E4%B9%8B-polygenic-risk-score-prs-3f903b21ac3b",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-6",
    title: "台灣人工智慧實驗室 之 Deep learning for HLA characterization",
    author: "Chien-Yu Chen 陳倩瑜",
    summary:
      "人類白血球抗原（英語：human leukocyte antigen，縮寫為HLA），是一組與人類的免疫系統功能密切相關的重要基因群。今天來跟大家介紹我們如何利用深度學習來剖析 HLA-A、HLA-B 與 HLA-C 這三個基因的各種等位基因 (allele) 之差異。",
    imageUrl: "/images/blog/blog-06-hla.png",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%8F%B0%E7%81%A3%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%AF%A6%E9%A9%97%E5%AE%A4-%E4%B9%8B-deep-learning-for-hla-characterization-a3be30872d2a",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-7",
    title: "台灣人工智慧實驗室 之 AutoML for Genomic AI",
    author: "Chien-Yu Chen 陳倩瑜",
    summary:
      "Taiwan AI Labs 的基因團隊在成立後的第二年釋出了一個 AutoML 的工具 (ezGeno)，最近被 Bioinformatics (https://doi.org/10.1093/bioinformatics/btab588)接受，來跟大家介紹一下。",
    imageUrl: "/images/blog/blog-07-automl.jpeg",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E5%8F%B0%E7%81%A3%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%AF%A6%E9%A9%97%E5%AE%A4-%E4%B9%8B-automl-for-genomic-ai-bd83152eb25d",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-8",
    title: "Nebula Genomics $299 美元的 30x WGS是否是一個值得購買的產品?",
    author: "Chien-Yu Chen 陳倩瑜",
    summary:
      "在台灣，要取得一個人的 30x WGS，因管道不同，價格從 $600 美元到 $2,000 不等。上述價格只得到定序資料，不含分析報告。Nebula Genomics 不是第一個推出 DTC (direct-to-consumer) WGS 的廠商，但是目前為止能直接賣到台灣的等值商品中最低價的一個(?)。今天來跟大家分享一下 $299 能拿到什麼?",
    imageUrl: "/images/blog/blog-08-nebula.png",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/nebula-genomics-299-%E7%BE%8E%E5%85%83%E7%9A%84-30x-wgs%E6%98%AF%E5%90%A6%E6%98%AF%E4%B8%80%E5%80%8B%E5%80%BC%E5%BE%97%E8%B3%BC%E8%B2%B7%E7%9A%84%E7%94%A2%E5%93%81-1681af054edf",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-9",
    title: "人工智慧在生物資訊的應用",
    author: "Chien-Yu Chen 陳倩瑜",
    summary:
      "本演講首先介紹開發 AlphaGo 的 DeepMind 團隊如何運用人工智慧技術預測蛋白質 3D結構，這是一個非常重要且歷史悠久的生物資訊計算問題，這兩年因為這波人工智慧的浪潮推動而有了突破性的發展。此演講中也將分享，個人DNA中的個體變異 (variant) 是否可能影響蛋白質結構，進而影響蛋白質的功能，不正確的 3D 結構將造成疾病，而這些突變所產生的影響都可以使用人工智慧演算法預測評估。不僅如此，癌細胞中的突變，也是醫師進行用藥選擇的重要依據，我們期待未來有越來越多的基因數據累積，人工智慧將有更大的發揮空間，幫助疾病的預防或選擇最合適的治療方案。",
    imageUrl: "/images/blog/blog-09-ai-bioinformatics.png",
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
    summary:
      "最近，一句「第三類是研發、分析、校正、生物資訊處理人員，這類人員至少要有生科相關科系背景」引起生物資訊社群的廣泛討論。完整的原文是這樣：「衛福部次長石崇良在12月16日指出，LDT 操作人員的資格將分為四類：第一類為實驗室的品質主管，資格必須具有醫師或醫檢師的身分；第二類技術操作人員，需要具有醫檢師資格；第三類是研發、分析、校正、生物資訊處理人員，這類人員至少要有生科相關科系背景；第四類則是核發報告人員，必須要具有醫師資格或醫檢師資格。」這件事突然牽涉到生物資訊處理人員，嚇壞許多人。要理解整個故事，需要先瞭解一下背景。首先，這件事牽涉到兩個法規(指引或辦法)：",
    imageUrl: "/images/blog/blog-10-ldts.png",
    sourceHost: "Medium",
    href: "https://medium.com/@chienyuchen_75596/%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%9C%A8%E7%94%9F%E7%89%A9%E8%B3%87%E8%A8%8A%E7%9A%84%E6%87%89%E7%94%A8-84aa252372d",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-11",
    title: "Graph-based Read Mapping 介紹",
    author: "林弘曄",
    summary:
      "本篇介紹兩種 Graph-genome 的技術。原本的 reference 是 linear genome(e.g GRCh38)。而 graph-genome 就是做成 graph 的樣子(見下圖)，最大的優點就是可以把所有已知的 variants 全部塞進 reference 裡，當然，什麼都不加的話，就是在 linear reference 上操作，所以保底就是不會輸一般的方式。我們在此就介紹 2019 的這兩篇有關 graph-genome 的 paper: Hisat2(Kim et al., 2019) 和 Graph Genome Pipeline(Rakocevic et al., 2019)。",
    imageUrl: "/images/blog/blog-11-graph-mapping.png",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/graph-based-read-mapping-%E4%BB%8B%E7%B4%B9-115393b34ab7",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-12",
    title: "Differential Expression Gene (DEG) Analysis 基因差異化表現的分析",
    author: "林弘曄",
    summary:
      "接續前一篇的 Quantification，我們有了每個基因的 RNA 的 read count (數量) 或者說 表現量 (abundance) 之後，我們想做的事情是看看不同實驗之間有哪些基因有表現量差異。e.g. 比如說同一個人吃藥前，吃藥後，藉由看表現量差異，我們可以期待看到某些gene 機制被抑制了。",
    imageUrl: "/images/blog/blog-12-deg.png",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/differential-expression-gene-deg-%E5%9F%BA%E5%9B%A0%E5%B7%AE%E7%95%B0%E5%8C%96%E8%A1%A8%E7%8F%BE%E7%9A%84%E5%8E%9F%E7%90%86-5a7e9934819d",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-13",
    title: "Read Mapping 概念與演算法",
    author: "林弘曄",
    summary:
      "Read mapping 是處理基因資料的第一個環節，本篇會著重在 Seed-Searching, Chaining, Extension 這三個環節，介紹幾個重要的演算法。最後順便講到 bam 檔跟 IGV。",
    imageUrl: "/images/blog/blog-13-read-mapping.png",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/read-mapping-%E6%A6%82%E5%BF%B5%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95-c5bd423cbf80",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-14",
    title: "RNA Quantification, RNA 定量",
    author: "林弘曄",
    summary:
      "簡單介紹 RNA-seq 表現量(Abundance) 的基本概念。Abundance，有時叫 expression，就是這個 transcript 被表現了多少，也就是出現的比例，RNA 的 sequences 越多，代表著那個機制越活耀。這裡會簡介三種計算 read-mapping 用於 quantification 的方式：Transcriptome Read Mapping、Genome Read Mapping、Reference-free Read Mapping。",
    imageUrl: "/images/blog/blog-14-rna-quant.png",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/rna-quantification-rna-%E5%AE%9A%E9%87%8F-63945382e49f",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-15",
    title: "DADA2: 一個高解析度分析 Microbiota 16S sequences 演算法",
    author: "林弘曄",
    summary:
      "我們將介紹在演算法上 DADA2 為何會比其他技術還要好。背景知識: Microbiota 就是微生物菌相，就是有很多不同種不同數量的微生物聚集在一起做事，比如說人體的皮膚上，人體的腸胃道菌。然後也衍伸許多相關的名詞: microbiome, metagenomics。",
    imageUrl: "/images/blog/blog-15-dada2.png",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/dada2-%E4%B8%80%E5%80%8B%E9%AB%98%E8%A7%A3%E6%9E%90%E5%BA%A6%E5%88%86%E6%9E%90-microbiota-16s-sequences-%E6%BC%94%E7%AE%97%E6%B3%95-1196b95cad71",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-16",
    title: "簡介單細胞定序 review",
    author: "林弘曄",
    summary:
      "本篇來自 2018 年 8 月發的 paper: Single-cell RNA sequencing technologies and bioinformatics pipelines。單細胞定序(Single-cell sequencing) 是一門高解析度(high resolution)的測序技術，相較於 bulk sequencing (傳統方法)，沒有把細胞們混在一起，所以我們能從裡面獲取更多資訊，因為即使相似細胞也有不同的表現(異質性 hetergeneous)。下圖為整個流程，我們會一一介紹。",
    imageUrl: "/images/blog/blog-16-single-cell.png",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/%E7%B0%A1%E4%BB%8B%E5%96%AE%E7%B4%B0%E8%83%9E%E5%AE%9A%E5%BA%8F-review-545b4094d31b",
    ctaLabel: "Read on Medium"
  },
  {
    id: "blog-17",
    title: "基因上位作用(epistasis)介紹與發現",
    author: "林弘曄",
    summary:
      "本篇會介紹兩個方向：何謂上位作用、目前如何偵測上位作用。上位作用(epistasis)：一樣也是顏色問題，拉不拉多(Labrador Retriever)的毛色有三種，B* 表示是黑色，bb 是棕色。然後當另外一個 SNP 是 ee 的時候是黃色，我們就說這個 SNP 對剛剛那個 SNP 有上位作用。講簡單一點，上位作用就是 A SNP 會影響 B SNP。",
    imageUrl: "/images/blog/blog-17-epistasis.png",
    sourceHost: "Medium",
    href: "https://linnil1.medium.com/%E5%9F%BA%E5%9B%A0%E4%B8%8A%E4%BD%8D%E4%BD%9C%E7%94%A8-epistasis-%E4%BB%8B%E7%B4%B9%E8%88%87%E7%99%BC%E7%8F%BE-a7ccd9bc1d70",
    ctaLabel: "Read on Medium"
  }
];
