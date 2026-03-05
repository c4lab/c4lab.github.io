export const SEO_BASE_URL = "https://c4lab.github.io";
export const SEO_SITE_NAME = "c4Lab";
export const SEO_DEFAULT_IMAGE = "/images/logo-192.png";

export type SeoMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function buildAbsoluteUrl(path: string): string {
  return new URL(path, SEO_BASE_URL).toString();
}

export function buildPageTitle(title: string): string {
  return title === SEO_SITE_NAME ? SEO_SITE_NAME : `${title} | ${SEO_SITE_NAME}`;
}

export const pageSeo = {
  home: {
    title: "Machine Learning and Bioinformatics Lab",
    description:
      "c4Lab builds computational solutions for genomics, immunogenomics, and precision medicine at National Taiwan University.",
    path: "/"
  },
  research: {
    title: "Research",
    description:
      "Explore c4Lab research tracks in sequence annotation, immunogenomics, and multi-omics outcome prediction.",
    path: "/research"
  },
  publication: {
    title: "Publications",
    description:
      "Browse c4Lab publications across machine learning, bioinformatics, and precision medicine, grouped by year.",
    path: "/publication"
  },
  member: {
    title: "Members",
    description:
      "Meet c4Lab members, including current researchers, alumni, and principal investigator Chien-Yu Chen.",
    path: "/member"
  },
  blog: {
    title: "Blog",
    description:
      "Read curated c4Lab articles and explainers covering AI, genomics, sequencing, and bioinformatics practice.",
    path: "/blog"
  },
  galaxy: {
    title: "NTU Galaxy Guide",
    description:
      "Access NTU Galaxy account, upload, job monitoring, and support guidance from c4Lab.",
    path: "/galaxy"
  }
} satisfies Record<string, SeoMeta>;
