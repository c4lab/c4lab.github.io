import type { HomeHero, ProjectHighlight, TimelineEntry } from "../../types/content";

export const homeHero: HomeHero = {
  eyebrow: "機器學習與生物資訊實驗室 Machine Learning and Bioinformatics Lab",
  title: "Biology.DNA.Future.",
  strapline: "We provide computational solutions for biological problems",
  subtitle: "Bringing Machine Intelligence To Life",
  summary:
    "One main interest of c4Lab is to annotate variants and DNA sequences in the human genome. We built machine learning and deep learning models to predict variant pathogenicity, functional regions (e.g. enhancer, TFBS, eQTL, etc) and their sequence effect.\n\nIn c4Lab, we developed computational methods to solve biological problems, including GenEpi, ezGeno, VariantEpi, MHCfovea, and QuantEval.\n\nWe also built the variant database TaiwanGenomes and released TWB PRS models for studying Taiwanese genetic data.",
  heroImage: "/images/hero-bg.png",
  stats: [
    { label: "Founded", value: "2005" },
    { label: "Research tracks", value: "3" },
    { label: "Publication archive", value: "71" }
  ],
  actions: [
    { label: "Explore Research", href: "/research" },
    { label: "View Publications", href: "/publication" }
  ]
};

export const projectHighlights: ProjectHighlight[] = [
  {
    id: "genepi",
    title: "GenEpi",
    blurb: "Gene-based epistasis discovery using machine learning.",
    href: "https://github.com/Chester75321/GenEpi",
    tag: "Open Source"
  },
  {
    id: "ezgeno",
    title: "ezGeno",
    blurb: "An AutoML solution for epigenomics analysis.",
    href: "https://github.com/ailabstw/ezGeno",
    tag: "AutoML"
  },
  {
    id: "mhcfovea",
    title: "MHCfovea",
    blurb: "Interpretable peptide-binding prediction for immunogenomics.",
    href: "https://mhcfovea.ailabs.tw/",
    tag: "Immunogenomics"
  },
  {
    id: "taiwangenomes",
    title: "TaiwanGenomes",
    blurb: "Complete genomic profiles of Taiwanese for precision medicine.",
    href: "https://genomes.tw/",
    tag: "Data Resource"
  },
  {
    id: "quanteval",
    title: "QuantEval",
    blurb: "Evaluation framework for transcript quantification methods.",
    href: "https://github.com/dn070017/QuantEval",
    tag: "Evaluation"
  },
  {
    id: "twb-prs",
    title: "TWB PRS",
    blurb: "Polygenic risk score models for Taiwanese genetic data.",
    href: "https://github.com/chienyuchen/TWB-PRS/",
    tag: "PRS"
  },
  {
    id: "dockcov2",
    title: "DockCoV2",
    blurb: "A drug database against SARS-CoV-2.",
    href: "https://covirus.cc/drugs/",
    tag: "Drug Discovery"
  },
  {
    id: "pubmedkb",
    title: "pubmedKB",
    blurb: "Knowledge base built from PubMed literature.",
    href: "https://www.pubmedkb.cc/",
    tag: "Knowledge Base"
  }
];

export const timelineEntries: TimelineEntry[] = [
  {
    id: "story-2024-01",
    year: "2024",
    dateLabel: "Aug 01",
    title: "【人工智慧驅動的多體學分析於精準醫學之應用 AI-Driven Multi-Omics Analysis in Precision Medicine 】Chien-Yu Chen",
    href: "https://www.youtube.com/watch?v=xb0a-R8XF-E",
    image: "/images/timeline/2024-ai-multiomics.jpg"
  },
  {
    id: "story-2023-01",
    year: "2023",
    dateLabel: "Dec 29",
    title: "Complete genomic profiles of 1496 Taiwanese reveal curated medical insights",
    href: "https://www.sciencedirect.com/science/article/pii/S2090123223004058?via%3Dihub",
    image: "/images/timeline/2023-taiwangenomes.png"
  },
  {
    id: "story-2022-01",
    year: "2022",
    dateLabel: "May 19",
    title: "AI for Life Science and Precision Medicine",
    href: "https://www.youtube.com/watch?v=Ji3I_bvepgQ",
    image: "/images/timeline/2022-ai-lifescience.png"
  },
  {
    id: "story-2021-01",
    year: "2021",
    dateLabel: "Aug 16",
    title: "An AutoML solution for Epigenomics analysis",
    href: "https://academic.oup.com/bioinformatics/article/37/Supplement_1/i408/6319663",
    image: "/images/timeline/2021-ezgeno.jpeg"
  },
  {
    id: "story-2020-03",
    year: "2020",
    dateLabel: "Dec 09",
    title: "人工智慧在生物資訊的應用︱大安高工",
    href: "https://www.youtube.com/watch?v=uvNpaQhdJl4",
    image: "/images/timeline/2020-bioinformatics-talk.png"
  },
  {
    id: "story-2020-02",
    year: "2020",
    dateLabel: "Oct 09",
    title: "DockCoV2: a drug database against SARS-CoV-2",
    href: "https://academic.oup.com/nar/article/49/D1/D1152/5921658",
    image: "/images/timeline/2020-dockcov2.jpeg"
  },
  {
    id: "story-2020-01",
    year: "2020",
    dateLabel: "Feb 24",
    title: "GenEpi: gene-based epistasis discovery using machine learning",
    href: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-3368-2",
    image: "/images/timeline/2020-genepi.png"
  },
  {
    id: "story-2019-02",
    year: "2019",
    dateLabel: "Jun 05",
    title: "Effect of de novo transcriptome assembly on transcript quantification",
    href: "https://www.nature.com/articles/s41598-019-44499-3",
    image: "/images/timeline/2019-transcript-assembly.png"
  },
  {
    id: "story-2019-01",
    year: "2019",
    dateLabel: "Jan 23",
    title: "用人工智慧探索DNA中的調控密碼 / 陳倩瑜教授",
    href: "https://www.youtube.com/watch?v=OqFbqX7U8dI",
    image: "/images/timeline/2019-regulatory-code.jpg"
  },
  {
    id: "story-2018-01",
    year: "2018",
    dateLabel: "May 02",
    title: "Whole-genome de novo sequencing reveals unique genes that contributed to the adaptive evolution of the Mikado pheasant",
    href: "https://pubmed.ncbi.nlm.nih.gov/29717389/",
    image: "/images/timeline/2018-mikado-pheasant.jpg"
  },
  {
    id: "story-2017-02",
    year: "2017",
    dateLabel: "Dec 08",
    title: "[Dosudo] DeepLearning MEET #11 陳倩瑜教授專訪",
    href: "https://www.youtube.com/watch?v=svQY7TmBYks",
    image: "/images/timeline/2017-dosudo.png"
  },
  {
    id: "story-2017-01",
    year: "2017",
    dateLabel: "May 23",
    title: "當深度學習與生物資訊在個人全基因體註解相遇",
    href: "https://www.youtube.com/watch?v=JwTYvtUTiRM",
    image: "/images/timeline/2017-deeplearning-bioinformatics.jpg"
  },
  {
    id: "story-2016-01",
    year: "2016",
    dateLabel: "",
    title: "Integrating RNA-seq and ChIP-seq Data to Characterize Long Non-coding RNAs in Drosophila melanogaster",
    href: "https://bmcgenomics.biomedcentral.com/articles/10.1186/s12864-016-2457-0"
  },
  {
    id: "story-2015-01",
    year: "2015",
    dateLabel: "",
    title: "Discovery of Genes Related to Formothion Resistance in Oriental Fruit Fly",
    href: "https://pubmed.ncbi.nlm.nih.gov/26017060/"
  },
  {
    id: "story-2013-02",
    year: "2013",
    dateLabel: "",
    title: "De novo transcriptome sequencing of axolotl blastema for identification of differentially expressed genes during limb regeneration",
    href: "https://pubmed.ncbi.nlm.nih.gov/24289268/"
  },
  {
    id: "story-2013-01",
    year: "2013",
    dateLabel: "",
    title: "PiDNA: predicting protein-DNA interactions with structural models",
    href: "https://academic.oup.com/nar/article/41/W1/W523/1105878"
  },
  {
    id: "story-2012-02",
    year: "2012",
    dateLabel: "",
    title: "機器學習的演進與應用 / 陳倩瑜教授",
    href: "https://www.youtube.com/watch?v=I_qCMBfUt_M",
    image: "/images/timeline/2012-ml-talk.jpg"
  },
  {
    id: "story-2012-03",
    year: "2012",
    dateLabel: "",
    title: "Discovery of genes related to insecticide resistance in Bactrocera dorsalis by functional genomic analysis of a de novo assembled transcriptome",
    href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0040950"
  },
  {
    id: "story-2012-04",
    year: "2012",
    dateLabel: "",
    title: "De novo motif discovery facilitates identification of interactions between transcription factors in Saccharomyces cerevisiae",
    href: "https://pubmed.ncbi.nlm.nih.gov/22165826/"
  },
  {
    id: "story-2012-01",
    year: "2012",
    dateLabel: "",
    title: "Predicting Target DNA Sequences of DNA-binding Proteins Based on Unbound Structures",
    href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0030446"
  },
  {
    id: "story-2011-01",
    year: "2011",
    dateLabel: "",
    title: "WildSpan: Mining Structured Motifs from Protein Sequences",
    href: "https://almob.biomedcentral.com/articles/10.1186/1748-7188-6-6"
  },
  {
    id: "story-2008-01",
    year: "2008",
    dateLabel: "",
    title: "Discovering gapped binding sites of yeast transcription factors",
    href: "https://www.pnas.org/doi/10.1073/pnas.0806398105"
  },
  {
    id: "story-2006-01",
    year: "2006",
    dateLabel: "",
    title: "Protein Disorder Prediction by Condensed PSSM Considering Propensity for Order or Disorder",
    href: "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-7-319"
  },
  {
    id: "story-2005-01",
    year: "2005",
    dateLabel: "",
    title: "c4Lab was founded",
    image: "/images/timeline/2005-c4lab-founded.png"
  },
  {
    id: "story-2004-01",
    year: "2004",
    dateLabel: "",
    title: "Incremental Generation of Summarized Clustering Hierarchy for Protein Family Analysis",
    href: "https://academic.oup.com/bioinformatics/article/20/14/2270/236752"
  }
];
