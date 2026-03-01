import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  to: string;
  utility?: boolean;
};

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SiteContact = {
  phone: string;
  email: string;
  contactPerson: string;
  addressLines: string[];
};

export type PageHeroContent = {
  eyebrow: string;
  title: string;
  summary: string;
  actions?: LinkItem[];
};

export type HomeHero = PageHeroContent & {
  strapline: string;
  subtitle?: string;
  highlight?: string;
  heroImage?: string;
  bodyImage?: string;
};

export type TimelineEntry = {
  id: string;
  year: string;
  dateLabel: string;
  title: string;
  summary?: string;
  href?: string;
  image?: string;
};

export type ProjectHighlight = {
  id: string;
  title: string;
  blurb: string;
  href: string;
  tag: string;
};

export type ResearchDetailBlock = {
  id: string;
  title: string;
  copy: string;
};

export type ResearchTrack = {
  id: string;
  period: string;
  title: string;
  summary: string;
  mediaLabel: string;
  metrics: string[];
  details: ResearchDetailBlock[];
};

export type PublicationItem = {
  id: string;
  year: string;
  dateLabel: string;
  title: string;
  venue: string;
  authors: string;
  href: string;
};

export type PublicationYearGroup = {
  year: string;
  items: PublicationItem[];
};

export type FeaturedMember = {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
  links: LinkItem[];
};

export type MemberRecord = {
  id: string;
  name: string;
  role: string;
  yearLabel: string;
  focus: string;
  status: "current" | "alumni";
};

export type BlogPostCard = {
  id: string;
  title: string;
  author: string;
  summary: string;
  sourceHost: string;
  href: string;
  ctaLabel: string;
};

export type GalaxySection = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  links: LinkItem[];
};

export type GalaxySupportContact = {
  name: string;
  email: string;
  role: string;
};

export type SectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  tone?: "light" | "navy";
  id?: string;
};
