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
        title: "Variant pathogenicity prediction",
        copy: "Disease variants from ClinVar, OMIM, and HGMD are classified using ACMG evidence criteria. In silico tools based on evolutionary conservation and protein function assess variant effect, with resampling techniques addressing data imbalance."
      },
      {
        id: "seq-2",
        title: "Enhancer and regulatory region annotation",
        copy: "Deep learning models like accuEnhancer learn enhancer activity from H3K27ac signals and genomic sequences, extending from within-cell-type to cross-cell-type prediction of functional regions."
      }
    ]
  },
  {
    id: "immunogenomics",
    period: "From 2021",
    title: "Deep Learning for Immunogenomics",
    summary:
      "We study peptide presentation, immune recognition, and sequence-derived signals that matter for translational immunology.",
    mediaLabel: "Immunogenomics pipeline",
    metrics: ["Peptide binding", "Model interpretation", "Population relevance"],
    details: [
      {
        id: "imm-1",
        title: "HLA, AIRR, and KIR profiling",
        copy: "Allele typing and effect prediction on complex immunogenomic genes remains challenging. The lab develops AI modules for variation profiling, molecular binding modeling, and response prediction."
      },
      {
        id: "imm-2",
        title: "TCR repertoire and pMHC binding",
        copy: "Deep learning-based encoding of TCR repertoires enables binding prediction between TCR and peptide-MHC complexes, supporting immune response characterization for genomic medicine."
      }
    ]
  },
  {
    id: "multiomics",
    period: "From 2020",
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
