import type { PageHeroContent, ResearchTrack } from "../../types/content";

export const researchHero: PageHeroContent = {
  eyebrow: "Research",
  title: "Research Directions",
  summary:
    "Our research joins biological priors with machine learning to interpret sequence variation, study immune recognition, and integrate multi-omics evidence for clinically relevant prediction."
};

export const researchTracks: ResearchTrack[] = [
  {
    id: "sequence-annotation",
    period: "From 2015",
    title: "Sequence and Variant Annotation",
    summary:
      "We build interpretable predictors that connect sequence context, regulatory grammar, and functional consequence across genome-wide settings.",
    mediaLabel: "Sequence-aware modeling",
    metrics: ["Regulatory grammar", "Variant prioritization", "Functional interpretation"],
    details: [
      {
        id: "seq-1",
        title: "Modeling variant effect at scale",
        copy: "Workflows prioritize rare variants and connect pathogenicity reasoning to functional genomic evidence."
      },
      {
        id: "seq-2",
        title: "Bench-to-model translation",
        copy: "The lab emphasizes biological plausibility so computational predictions stay useful for downstream validation."
      }
    ]
  },
  {
    id: "immunogenomics",
    period: "From 2019",
    title: "Deep Learning for Immunogenomics",
    summary:
      "We study peptide presentation, immune recognition, and sequence-derived signals that matter for translational immunology.",
    mediaLabel: "Immunogenomics pipeline",
    metrics: ["Peptide binding", "Model interpretation", "Population relevance"],
    details: [
      {
        id: "imm-1",
        title: "Foundation models for regulatory genomics",
        copy: "We adapt modern sequence modeling ideas to immune-related prediction problems while preserving interpretability."
      },
      {
        id: "imm-2",
        title: "Antigen presentation signals",
        copy: "Research tracks how allele-specific sequence patterns affect binding and downstream clinical decision support."
      }
    ]
  },
  {
    id: "multiomics",
    period: "From 2022",
    title: "Outcome Prediction by Integrating Multi-Omics Data",
    summary:
      "The lab integrates genome, transcriptome, epigenome, and proteome signals to support precision medicine and disease-risk reasoning.",
    mediaLabel: "Cross-scale disease modeling",
    metrics: ["Multi-omics fusion", "Precision medicine", "Population interpretation"],
    details: [
      {
        id: "multi-1",
        title: "Clinical translation",
        copy: "Models are designed to bridge large-scale cohort data and human-interpretable outputs for translational use."
      },
      {
        id: "multi-2",
        title: "Taiwan-focused resources",
        copy: "Population-specific resources help calibrate prediction to the realities of Taiwanese genetic data."
      }
    ]
  }
];
