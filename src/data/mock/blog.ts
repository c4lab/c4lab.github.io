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
    title: "AI-Driven Multi-Omics Notes",
    author: "c4Lab",
    summary: "A practical overview of how genomic, epigenomic, and transcriptomic evidence can be fused for clinical reasoning.",
    sourceHost: "Medium",
    href: "https://medium.com/@c4lab/ai-driven-multi-omics-notes",
    ctaLabel: "Read on Medium: AI-Driven Multi-Omics Notes"
  },
  {
    id: "blog-2",
    title: "Interpretable Immunogenomics Workflows",
    author: "c4Lab",
    summary: "Why sequence models need biological constraints when they are used for peptide presentation and immune prediction.",
    sourceHost: "Medium",
    href: "https://medium.com/@c4lab/interpretable-immunogenomics-workflows",
    ctaLabel: "Read on Medium: Interpretable Immunogenomics Workflows"
  },
  {
    id: "blog-3",
    title: "以機器學習理解基因變異",
    author: "c4Lab",
    summary: "A bilingual explainer on how variant-effect models help move from raw sequence to interpretable risk signals.",
    sourceHost: "Medium",
    href: "https://medium.com/@c4lab/variant-interpretation-zh",
    ctaLabel: "Read on Medium: 以機器學習理解基因變異"
  },
  {
    id: "blog-4",
    title: "Population-Aware Precision Medicine",
    author: "c4Lab",
    summary: "How cohort composition changes what counts as a clinically meaningful prediction in genomics.",
    sourceHost: "Medium",
    href: "https://medium.com/@c4lab/population-aware-precision-medicine",
    ctaLabel: "Read on Medium: Population-Aware Precision Medicine"
  },
  {
    id: "blog-5",
    title: "Sequence Models Beyond Benchmarks",
    author: "c4Lab",
    summary: "A note on evaluation discipline when model performance and biological reality diverge.",
    sourceHost: "Medium",
    href: "https://medium.com/@c4lab/sequence-models-beyond-benchmarks",
    ctaLabel: "Read on Medium: Sequence Models Beyond Benchmarks"
  },
  {
    id: "blog-6",
    title: "Research Infrastructure for Reproducibility",
    author: "c4Lab",
    summary: "Guidelines for structuring tools, datasets, and model releases so research outputs remain reusable.",
    sourceHost: "Medium",
    href: "https://medium.com/@c4lab/research-infrastructure-for-reproducibility",
    ctaLabel: "Read on Medium: Research Infrastructure for Reproducibility"
  }
];
