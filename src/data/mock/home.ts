import type { HomeHero, ProjectHighlight, TimelineEntry } from "../../types/content";

export const homeHero: HomeHero = {
  eyebrow: "Computational Biology Lab",
  title: "Bringing Machine Intelligence To Life",
  strapline: "We provide computational solutions for biological problems",
  summary:
    "c4Lab studies genome variation, regulatory function, and precision medicine with machine learning, deep learning, and biological insight that can move from method development to real-world interpretation.",
  highlight: "Research programs spanning variant annotation, immunogenomics, and multi-omics reasoning.",
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
    blurb: "Epistasis-oriented modeling for discovering variant interactions in complex traits.",
    href: "https://github.com/Chester75321/GenEpi",
    tag: "Open Source"
  },
  {
    id: "ezgeno",
    title: "ezGeno",
    blurb: "AutoML workflows for sequence analysis and regulatory genomics model exploration.",
    href: "https://github.com/ailabstw/ezGeno",
    tag: "AutoML"
  },
  {
    id: "mhcfovea",
    title: "MHCfovea",
    blurb: "Interpretable peptide-binding prediction for immunogenomics and translational workflows.",
    href: "https://mhcfovea.ailabs.tw/",
    tag: "Immunogenomics"
  },
  {
    id: "taiwangenomes",
    title: "TaiwanGenomes",
    blurb: "Population-scale genome interpretation resources for Taiwanese precision medicine.",
    href: "https://genomes.tw/",
    tag: "Data Resource"
  }
];

export const timelineEntries: TimelineEntry[] = [
  {
    id: "story-2025-01",
    year: "2025",
    dateLabel: "Feb 12",
    title: "c4Lab launches a new translational modeling seminar series",
    summary: "A bilingual seminar format connects algorithm design, clinical interpretation, and reproducible tooling.",
    href: "https://www.youtube.com/watch?v=xb0a-R8XF-E"
  },
  {
    id: "story-2024-01",
    year: "2024",
    dateLabel: "Aug 01",
    title: "AI-Driven Multi-Omics Analysis in Precision Medicine",
    summary: "A public lecture on multi-omics data flow, deep learning advances, and clinical relevance in precision medicine.",
    href: "https://www.youtube.com/watch?v=xb0a-R8XF-E"
  },
  {
    id: "story-2023-01",
    year: "2023",
    dateLabel: "Dec 29",
    title: "Complete genomic profiles of 1496 Taiwanese reveal curated medical insights",
    summary: "Population-scale analysis highlights actionable variants, pharmacogenomic signals, and carrier-risk interpretation.",
    href: "https://www.sciencedirect.com/science/article/pii/S2090123223004058?via%3Dihub"
  },
  {
    id: "story-2022-01",
    year: "2022",
    dateLabel: "May 19",
    title: "AI for Life Science and Precision Medicine",
    summary: "A research overview spanning MHCfovea, ezGeno, pubmedKB, TaiwanGenomes, and polygenic risk workflows.",
    href: "https://www.youtube.com/watch?v=Ji3I_bvepgQ"
  },
  {
    id: "story-2021-01",
    year: "2021",
    dateLabel: "Aug 16",
    title: "An AutoML solution for Epigenomics analysis",
    summary: "ezGeno streamlines sequence-model search for genomic and epigenomic prediction tasks.",
    href: "https://github.com/ailabstw/ezGeno"
  },
  {
    id: "story-2012-01",
    year: "2012",
    dateLabel: "Mar 09",
    title: "Machine learning for biomedical discovery enters the lab's public outreach",
    summary: "An outreach talk frames how machine learning can support gene-disease discovery and future personalized medicine.",
    href: "https://www.youtube.com/watch?v=I_qCMBfUt_M"
  }
];
