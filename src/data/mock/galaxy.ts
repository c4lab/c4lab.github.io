import type { GalaxySection, GalaxySupportContact, PageHeroContent } from "../../types/content";

export const galaxyHero: PageHeroContent = {
  eyebrow: "Galaxy",
  title: "Galaxy Support",
  summary:
    "Operational guidance for users working with NTU Galaxy resources, including onboarding, data transfer, job monitoring, and support contacts."
};

export const galaxySections: GalaxySection[] = [
  {
    id: "apply",
    title: "Request Access",
    summary: "Start with the application flow and confirm the correct institutional account path before submitting jobs.",
    points: [
      "Use the account application form before requesting compute support.",
      "Confirm project ownership and storage expectations with the lab.",
      "Keep the service scope visible for new users."
    ],
    links: [{ label: "Open application guide", href: "https://example.org/galaxy/apply", external: true }]
  },
  {
    id: "upload",
    title: "Upload and Organize Data",
    summary: "Choose the transfer workflow that fits dataset size and turnaround requirements.",
    points: [
      "Use browser upload for small files and FTP for larger datasets.",
      "Standardize filenames before upload to simplify downstream tracking.",
      "Stage inputs so re-runs stay reproducible."
    ],
    links: [{ label: "Read transfer instructions", href: "https://example.org/galaxy/upload", external: true }]
  },
  {
    id: "jobs",
    title: "Track Jobs and Download Results",
    summary: "Monitor job state, confirm output naming, and download artifacts using a consistent archive structure.",
    points: [
      "Check queue status before rerunning long analyses.",
      "Verify result folders immediately after job completion.",
      "Download final artifacts with metadata notes for reproducibility."
    ],
    links: [{ label: "Open job-status checklist", href: "https://example.org/galaxy/jobs", external: true }]
  },
  {
    id: "resources",
    title: "Reference Materials",
    summary: "Use the tutorial library and package-status notes to avoid unsupported tool paths.",
    points: [
      "Cross-check package availability before drafting a workflow.",
      "Use tutorial links for standardized training paths.",
      "Escalate environment issues early if packages diverge from the expected release set."
    ],
    links: [
      { label: "Package status sheet", href: "https://example.org/galaxy/packages", external: true },
      { label: "Official tutorial", href: "https://example.org/galaxy/tutorial", external: true }
    ]
  }
];

export const galaxySupport: GalaxySupportContact[] = [
  { name: "c4Lab Service Desk", email: "chienyuchen@ntu.edu.tw", role: "General support" },
  { name: "Galaxy Operations", email: "galaxy-support@example.org", role: "Workflow troubleshooting" }
];
