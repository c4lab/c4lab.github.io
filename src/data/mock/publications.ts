import type { PageHeroContent, PublicationYearGroup } from "../../types/content";

export const publicationHero: PageHeroContent = {
  eyebrow: "Publication",
  title: "Publication Archive",
  summary:
    "A curated, year-grouped archive of papers and talks spanning protein sequence analysis, variant interpretation, immunogenomics, and precision medicine."
};

export const publicationGroups: PublicationYearGroup[] = [
  {
    year: "2025",
    items: [
      {
        id: "pub-2025-1",
        year: "2025",
        dateLabel: "Jan 2025",
        title: "A cross-scale atlas for Taiwanese precision medicine and functional variant reasoning",
        venue: "Genome Medicine",
        authors: "Chien-Yu Chen, Li-Hao Wang, Mei-Lin Huang, and collaborators",
        href: "https://example.org/publications/atlas"
      },
      {
        id: "pub-2025-2",
        year: "2025",
        dateLabel: "Feb 2025",
        title: "Sequence-aware representation learning improves clinically grounded variant triage",
        venue: "Bioinformatics",
        authors: "Yu-Hsuan Lee, Chien-Yu Chen, and collaborators",
        href: "https://example.org/publications/sequence-aware"
      },
      {
        id: "pub-2025-3",
        year: "2025",
        dateLabel: "Mar 2025",
        title: "Interpretable peptide-binding landscapes for population-scale immunogenomics",
        venue: "Nature Communications",
        authors: "I-Chen Lin, Chien-Yu Chen, and collaborators",
        href: "https://example.org/publications/peptide-binding"
      }
    ]
  },
  {
    year: "2024",
    items: [
      {
        id: "pub-2024-1",
        year: "2024",
        dateLabel: "Aug 2024",
        title: "AI-driven multi-omics analysis in precision medicine",
        venue: "Invited Lecture",
        authors: "Chien-Yu Chen",
        href: "https://www.youtube.com/watch?v=xb0a-R8XF-E"
      },
      {
        id: "pub-2024-2",
        year: "2024",
        dateLabel: "Jun 2024",
        title: "Cohort-calibrated risk modeling for Taiwanese genomic screening",
        venue: "PLOS Computational Biology",
        authors: "Ming-Jui Tsai, Chien-Yu Chen, and collaborators",
        href: "https://example.org/publications/risk-modeling"
      },
      {
        id: "pub-2024-3",
        year: "2024",
        dateLabel: "Apr 2024",
        title: "Interpretable enhancer prioritization with auto-configured deep sequence models",
        venue: "Nucleic Acids Research",
        authors: "Pei-Yu Huang, Chien-Yu Chen, and collaborators",
        href: "https://example.org/publications/enhancer-prioritization"
      }
    ]
  },
  {
    year: "2023",
    items: [
      {
        id: "pub-2023-1",
        year: "2023",
        dateLabel: "Dec 2023",
        title: "Complete genomic profiles of 1496 Taiwanese reveal curated medical insights",
        venue: "Cell Genomics",
        authors: "Chien-Yu Chen and collaborators",
        href: "https://www.sciencedirect.com/science/article/pii/S2090123223004058?via%3Dihub"
      },
      {
        id: "pub-2023-2",
        year: "2023",
        dateLabel: "Jul 2023",
        title: "Towards reproducible variant interpretation for population-specific cohorts",
        venue: "Human Mutation",
        authors: "Hsin-Yi Kuo, Chien-Yu Chen, and collaborators",
        href: "https://example.org/publications/reproducible-variant-interpretation"
      }
    ]
  }
];
