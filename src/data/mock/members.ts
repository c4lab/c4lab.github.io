import type { FeaturedMember, MemberRecord, PageHeroContent } from "../../types/content";

export const memberHero: PageHeroContent = {
  eyebrow: "Member",
  title: "Lab Members",
  summary:
    "The lab brings together computational biologists, machine learning researchers, and translational collaborators working across methods, systems, and real-world data."
};

export const featuredMember: FeaturedMember = {
  name: "Prof. Chien-Yu Chen",
  role: "Principal Investigator",
  bio: "Professor Chen leads c4Lab at National Taiwan University, focusing on computational genomics, AI for life science, and biologically grounded machine learning methods.",
  highlights: [
    "Computational genomics and sequence interpretation",
    "Deep learning for immunogenomics",
    "Precision medicine in Taiwanese cohorts"
  ],
  links: [
    { label: "ORCID Profile", href: "https://orcid.org/", external: true },
    { label: "Contact c4Lab", href: "mailto:chienyuchen@ntu.edu.tw", external: true }
  ]
};

export const memberRecords: MemberRecord[] = [
  {
    id: "member-1",
    name: "Yu-Hsuan Lee",
    role: "PhD Candidate",
    yearLabel: "2023 ~",
    focus: "Variant effect modeling and cohort-aware interpretation",
    status: "current"
  },
  {
    id: "member-2",
    name: "Mei-Lin Huang",
    role: "MS Researcher",
    yearLabel: "2024 ~",
    focus: "Sequence foundation models for regulatory genomics",
    status: "current"
  },
  {
    id: "member-3",
    name: "I-Chen Lin",
    role: "Research Assistant",
    yearLabel: "2022 ~",
    focus: "Immunogenomics benchmarks and interpretability",
    status: "current"
  },
  {
    id: "member-4",
    name: "Po-Chieh Su",
    role: "MS Candidate",
    yearLabel: "2024 ~",
    focus: "Multi-omics representation learning",
    status: "current"
  },
  {
    id: "member-5",
    name: "Li-Hao Wang",
    role: "Visiting Student",
    yearLabel: "2025",
    focus: "Population-specific risk calibration",
    status: "current"
  },
  {
    id: "member-6",
    name: "Hsin-Yi Kuo",
    role: "Alumni",
    yearLabel: "2019 - 2024",
    focus: "Translational genomics and reproducibility",
    status: "alumni"
  },
  {
    id: "member-7",
    name: "Pei-Yu Huang",
    role: "Alumni",
    yearLabel: "2020 - 2024",
    focus: "Epigenomics modeling and feature attribution",
    status: "alumni"
  },
  {
    id: "member-8",
    name: "Ming-Jui Tsai",
    role: "Alumni",
    yearLabel: "2018 - 2023",
    focus: "Cohort-scale screening workflows",
    status: "alumni"
  }
];
