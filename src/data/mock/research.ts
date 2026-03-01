import type { ResearchTrack } from "../../types/content";

export const researchTracks: ResearchTrack[] = [
  {
    id: "sequence-annotation",
    period: "From 2015",
    title: "Sequence/Variant Annotation",
    summary:
      "One main interest of our lab is to annotate variants and DNA sequences from human genome. We've built machine learning and deep learning models to predict variant pathogenicity, functional regions (e.g. enhancer, TFBS, eQTL, etc) and their sequence effect.",
    mediaLabel: "Sequence-aware modeling",
    metrics: ["Regulatory grammar", "Variant prioritization", "Functional interpretation"],
    details: [
      {
        id: "seq-1",
        title: "Variant pathogenicity prediction",
        copy: "A number of databases contain a growing number of disease variants that are continuously being discovered in the human genome, such as Clinvar, OMIM and HGMD. ACMG offered an evidence framework and criteria for classifying pathogenic variants. As validation with clinical laboratories may take much effort, the annotation for disease variants pathogenicity has been studied with a variety of in silico tools based on the concept of the evolutionary conservation and protein function change of the variant effect. However, the imbalanced data for positive and negative biological samples remains a problem in the classification task. To correctly identify wether a non-coding variant is pathogenic or not, resampling techniques considering the feature space and cluster ensemble methods showed a promising result from our previous work CE-SMURF."
      },
      {
        id: "seq-2",
        title: "Enhancer and regulatory region annotation",
        copy: "One class of the regulatory elements that have been shown to act as key components to assist promoters in modulating the gene expression in living cells are enhancers. Enhancers function by looping to the promoter that they regulate, and are activated by sequence-specific transcription factors, which create an environment permissive to transcription. At present, the enhancer regions are identified from the chromatin structures, which can be analyzed by Chromosome conformation capture techniques or infered from histone modification signals and transcription factor binding sites. To leverage the extensive experimental data to the functional region, we developed a deep learning model, accuEnhancer, to learn the enhancer activity of H3k27ac signals from genomic sequences and the DNase signals of each corresponding region. Furthermore, we extended the model from within-cell type to cross-cell type to perform superior to the existing enhancer prediction tools."
      },
      {
        id: "seq-3",
        title: "Functional annotation pipeline",
        copy: "Functional annotation of specific regions of the genomic sequences are evaluated from a variety of empigenomic signals in order to predict chromatin activities, TF binding or expression states. After successfully training models from the accumulated large amount of experimental datasets of expression and histone modification profiles for quantification prediction, mutating variant positions inside target sequences may change the predicting profiles. A significant difference between the reference and alternative sequence profile predictions suggest a corresponding functional gain or loss from the variant effect. Constructing this process to a pipeline helps biologists to better evaluate the disease/phenotype related variants and find cure or treatment to it."
      }
    ]
  },
  {
    id: "immunogenomics",
    period: "From 2021",
    title: "Deep Learning for Immunogenomics",
    summary:
      "Deep Learning for Immunogenomics",
    mediaLabel: "Immunogenomics pipeline",
    image: "/images/research-immunogenomics.png",
    metrics: ["Peptide binding", "Model interpretation", "Population relevance"],
    details: [
      {
        id: "imm-1",
        title: "AI platform for individual profiling and response prediction",
        copy: "Advance of next-generation sequencing (NGS) realizes the possibility of individual genomic profiling, including both of the static information of genomic DNA and dynamic information of expressed transcripts in certain conditions or various cell types. While the quality of calling and annotation of single-nucleotide variants (SNV) gets more and more satisfied, the accuracy of allele typing and effect prediction on some complicated genes (e.g. HLA, AIRR, KIR in immunogenomics) remains challenging. c4Lab aims at developing an AI platform for individual profiling and response prediction. This platform will have three AI modules: variation profiling and encoding, molecular binding modelling, and pathogenicity or response prediction. An example of such a three-module application is deep learning-based encoding of TCR repertoires for binding prediction of TCR and peptide-MHC (pMHC) followed by immune response characterization. AI solutions usually require a large amount of data for learning. the training process needs to be accomplished before individual data arrives in genomic medicine. In recent years, we keep collecting the required data and constructing the prediction models by deep learning algorithms. This will largely benefit the field of genomic medicine in leveraging the state-of-the-art AI solutions that have been well developed for analysing the high-throughput sequencing data from multi-omics societies."
      }
    ]
  },
  {
    id: "multiomics",
    period: "From 2020",
    title: "Outcome Prediction by Integrating Multi-omics Data",
    summary:
      "Outcome Prediction by Integrating Multi-omics Data",
    mediaLabel: "Cross-scale disease modeling",
    image: "/images/research-outcome.png",
    metrics: ["Multi-omics fusion", "Precision medicine", "Population interpretation"],
    details: [
      {
        id: "multi-1",
        title: "AI-driven precision diagnosis and prognosis",
        copy: "In recent years, artificial intelligence (AI), usually realized by machine learning or deep learning approaches, has been widely used in clinical diagnosis and biomarker discovery. By integrating images and multi-omics data, the AI models can assist experts to achieve precision diagnosis and prognosis. In addition, AI can help select the best drug treatments and predict survival through the selected biomarkers. This all rely on more and more multi-omics data accumulated from patients for AI model learning. c4Lab previously accumulated many experiences of adopting machine learning methods for prognostic prediction of acute myeloid leukemia patients. We also developed many AI algorithms for predicting molecular binding and detecting genotype-phenotype associations, such as an AutoML (automated machine learning) approach for predicting protein-DNA binding or enhancer activity and a machine learning-based method for GWAS (genome-wide association study) data analysis."
      }
    ]
  }
];
