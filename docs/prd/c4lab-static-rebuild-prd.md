# c4Lab Static Rebuild PRD (Recovery Draft)

## Document status

- Status: Draft for implementation kickoff
- Date: 2026-02-24
- Built from Wayback snapshots (pre-hack captures)
- Source inventory: `recovered_snapshot/metadata/pre_hack_snapshots.tsv`

## Problem statement

The original WordPress site was compromised. The lab needs a static site rebuild that restores public information content, removes dynamic CMS attack surface, and preserves core navigation/content from the archived site.

## Product goals

- Restore core lab information pages quickly.
- Preserve historical content (publications, research highlights, members, blog links).
- Keep maintenance simple for non-engineering lab members.
- Improve security posture by removing runtime CMS/admin surface.

## Non-goals

- Rebuilding WordPress admin/editor workflows.
- Recreating every plugin behavior from the old site.
- Preserving old theme-specific visual effects 1:1.

## Site map (from archive)

Primary navigation found in archive:

- `/` (Home)
- `/blog/`
- `/research/`
- `/publication/`
- `/member/`

Additional page captured but not in main nav:

- `/galaxy/` (service/instructions page)

## Content inventory (archive-derived)

- Home timeline entries: about 25 entries
- Publication timeline entries: about 73 unique entries
- Member cards: about 45 entries
- Research sections: 3 sections
- Blog cards: 17 entries

Note: publication markup contains duplicate timeline widget rendering in the archived HTML. Use unique story IDs when importing records.

## Global requirements checklist

- [ ] Header with c4Lab branding/logo
- [ ] Main nav: Home, Blog, Research, Publication, Member
- [ ] Optional nav/utility link: Galaxy
- [ ] Responsive layout (mobile + desktop)
- [ ] Contact section accessible from main page (or site-wide footer)
- [ ] Basic SEO metadata per page (title, description, canonical)
- [ ] Basic analytics integration (if still needed)
- [ ] Accessibility baseline (heading order, alt text, link labels)
- [ ] No admin/login/feed/search WordPress links exposed

## Page requirements

### 1) Home (`/`)

Purpose: Lab landing page with identity, highlights, and contact.

Required content blocks:

- [ ] Hero message
- [ ] Timeline-style highlights/news list
- [ ] Each highlight supports: date, title, summary, optional image, outbound link
- [ ] Contact block with phone, email, address

Archived contact data found:

- Tel: `+886-2-3366-7118`
- Email: `chienyuchen@ntu.edu.tw` (Prof. Chen)
- Address text includes: `R304 Department of Biomechatronics (new building), National Taiwan University`

### 2) Publication (`/publication/`)

Purpose: Long-form publication archive.

Required data fields per publication item:

- [ ] Publication date
- [ ] Venue/journal
- [ ] Title
- [ ] Author list
- [ ] Outbound link (paper page/DOI/etc.)

Required behaviors:

- [ ] Chronological ordering (newest first)
- [ ] Year grouping labels
- [ ] Handles large dataset (70+ entries now, future growth expected)

### 3) Member (`/member/`)

Purpose: People directory (PI + students/alumni).

Required data fields per member card:

- [ ] Name (EN and/or local language)
- [ ] Role/program or degree status
- [ ] Optional cohort/year range text (e.g., `2024 ~`)
- [ ] Photo/avatar
- [ ] Optional external profile link (example: ORCID for PI)

Required structure:

- [ ] Featured PI/founder block
- [ ] Member grid/list sections (current + historical/alumni style content)

### 4) Research (`/research/`)

Purpose: Describe core research directions.

Required structure observed:

- [ ] Section label like `From <year>`
- [ ] Research topic title
- [ ] Intro text/summary
- [ ] Optional figure/image
- [ ] Expandable detailed content (`RESEARCH CONTENT` block)

Minimum captured themes:

- [ ] Sequence/Variant Annotation
- [ ] Deep Learning for Immunogenomics
- [ ] Outcome Prediction by Integrating Multi-omics Data

### 5) Blog (`/blog/`)

Purpose: Curated reading/resource posts.

Observed pattern:

- [ ] Post title
- [ ] Author label
- [ ] Short summary
- [ ] `More` button linking to external article (mostly Medium)

Requirements:

- [ ] Keep external-link behavior clear (open new tab)
- [ ] Mark off-site links consistently
- [ ] Preserve bilingual post titles where applicable

### 6) Galaxy (`/galaxy/`) [Optional but recommended]

Purpose: Operational help page for NTU Galaxy service users.

Required sections seen in archive:

- [ ] Account application link
- [ ] Upload workflow guidance (web/FTP)
- [ ] Job status and download guidance
- [ ] Notes/caveats
- [ ] Resource information
- [ ] Package install/test status spreadsheet link
- [ ] Official tutorial link
- [ ] Support contacts and emails

## Data model recommendation (for static site)

Store page content in structured files (`.json` or `.yaml`) to decouple content from templates.

Suggested content files:

- `content/home/timeline.(json|yaml)`
- `content/publications.(json|yaml)`
- `content/members.(json|yaml)`
- `content/research.(json|yaml)`
- `content/blog_links.(json|yaml)`
- `content/galaxy_help.(json|yaml)`
- `content/site_contact.(json|yaml)`

## Security requirements (must-have)

- [ ] Static hosting only (no WP/PHP runtime)
- [ ] Disable directory listing where applicable
- [ ] No legacy `/wp-*` routes in deployment
- [ ] Security headers at host/CDN layer
- [ ] Form endpoints (if any) use external trusted provider or serverless endpoint with spam protection

## Migration checklist

### Content extraction

- [ ] Normalize publication records into structured dataset
- [ ] Normalize member records (name, role, years, image)
- [ ] Extract research sections into structured content
- [ ] Extract blog title + author + outbound URL list
- [ ] Verify contact details with lab owner

### Build and QA

- [ ] Implement static templates for each page type
- [ ] Import structured datasets
- [ ] Validate all internal links
- [ ] Validate all external links
- [ ] Run mobile and desktop visual QA
- [ ] Run accessibility checks

### Launch readiness

- [ ] Domain cutover plan
- [ ] Redirect plan for legacy URLs
- [ ] Backup of static build artifacts and content source files
- [ ] Post-launch monitoring checklist

## Open decisions for the team

- [ ] Which static stack (Astro/Next static export/Eleventy/Hugo)?
- [ ] Keep `Galaxy` in top nav or utility/footer only?
- [ ] Keep all historical publications online at launch, or stage by year?
- [ ] Member page scope: current members only vs current + alumni (archive had both styles)
- [ ] Who owns ongoing content updates and where source-of-truth files live?

## Traceability to archived sources

Use these archived HTML files as primary reconstruction sources:

- `recovered_snapshot/raw_html/home.html`
- `recovered_snapshot/raw_html/publication.html`
- `recovered_snapshot/raw_html/member.html`
- `recovered_snapshot/raw_html/research.html`
- `recovered_snapshot/raw_html/blog.html`
- `recovered_snapshot/raw_html/galaxy.html`

This PRD is intentionally checklist-heavy so engineering and content owners can parallelize rebuild work.
