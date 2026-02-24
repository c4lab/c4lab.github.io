# c4Lab Static Rebuild Deep Dive (Subagent Synthesis)

## Scope

This document extends `docs/prd/c4lab-static-rebuild-prd.md` with deeper, implementation-ready details from parallel page analysis.

Source files analyzed:

- `recovered_snapshot/raw_html/home.html`
- `recovered_snapshot/raw_html/publication.html`
- `recovered_snapshot/raw_html/member.html`
- `recovered_snapshot/raw_html/research.html`
- `recovered_snapshot/raw_html/blog.html`
- `recovered_snapshot/raw_html/galaxy.html`

## Verified inventory

- Home timeline: 25 unique stories (`story-*` IDs)
- Publication timeline: 73 unique stories (`story-*` IDs)
- Member cards: about 45 total visual cards (1 featured PI + grid entries)
- Research detail blocks: 3 `RESEARCH CONTENT` sections
- Blog post cards: 17 items

## Information architecture decisions

Keep as core pages:

- `/`
- `/blog/`
- `/research/`
- `/publication/`
- `/member/`

Optional page (recommended to preserve):

- `/galaxy/`

## Keep vs drop (legacy system links)

Keep:

- Main nav links: Home, Blog, Research, Publication, Member
- Site contact info from Home
- Off-site content links used by blog/publication/research/timeline

Drop from rebuilt static site:

- WordPress login/admin/feed/meta links
- WordPress theme credits and plugin dependencies
- Legacy search endpoint tied to WP query handling (unless reimplemented in static search)

## Content models

### Home model

```json
{
  "hero": {
    "headline": "Bringing Machine Intelligence To Life",
    "summary": "...",
    "image": "...",
    "links": [{"label": "...", "url": "..."}]
  },
  "timeline": [
    {
      "id": "story-...",
      "date": "YYYY-MM-DD or YYYY",
      "title": "...",
      "summary_html": "...",
      "image": "...",
      "link": "..."
    }
  ],
  "contact": {
    "phone": "+886-2-3366-7118",
    "email": "chienyuchen@ntu.edu.tw",
    "contact_person": "Prof. Chen, Chien-Yu",
    "address_lines": [
      "R304 Department of Biomechatronics",
      "(new building), National Taiwan University"
    ]
  }
}
```

### Publication model

```json
{
  "publications": [
    {
      "id": "story-...",
      "date": "YYYY-MM-DD",
      "venue": "...",
      "title": "...",
      "authors": "...",
      "link": "...",
      "notes_html": "..."
    }
  ]
}
```

Rules:

- Deduplicate by `id` first; fallback key: `date + title + link`.
- Preserve author text as-is for first migration pass; normalize to arrays in a second pass.

### Member model

```json
{
  "featured": {
    "name": "...",
    "role": "Professor",
    "profile_url": "...",
    "bio": "...",
    "social": [{"platform": "facebook", "url": "..."}]
  },
  "members": [
    {
      "name": "...",
      "program_or_role": "...",
      "year_label": "2024 ~",
      "image": "...",
      "profile_url": null,
      "status": "current|alumni|unknown"
    }
  ]
}
```

Rules:

- Keep `year_label` raw in source data.
- Optionally parse `start_year/end_year` into derived fields.
- Skip placeholder cards with no real member name.

### Research model

```json
{
  "research_tracks": [
    {
      "period": "From 2015",
      "title": "Sequence/Variant Annotation",
      "summary": "...",
      "media": {"type": "video|image", "url": "..."},
      "detail_points": ["...", "...", "..."]
    }
  ]
}
```

Rules:

- Preserve 3-track structure from archive.
- Keep accordion content as explicit bullet arrays (not hidden HTML only).

### Blog model

```json
{
  "posts": [
    {
      "title": "...",
      "author": "...",
      "summary": "...",
      "image": "...",
      "external_url": "...",
      "source_host": "medium.com|linnil1.medium.com"
    }
  ]
}
```

Rules:

- All links are off-site; clearly mark external links in UI.
- Keep host/domain explicitly for QA and broken-link monitoring.

### Galaxy model

```json
{
  "sections": [
    {
      "title": "...",
      "body": "...",
      "links": [{"label": "...", "url": "..."}],
      "media": [{"type": "image", "url": "..."}]
    }
  ],
  "support_contacts": [
    {"name": "...", "email": "..."}
  ]
}
```

Rules:

- Replace missing/invalid legacy assets (for example `blob:` image references).
- Resolve sections with label text but missing `href` before launch.

## Migration risk register

1. Duplicate publication timeline rendering in archived markup.
- Impact: duplicate entries if imported naively.
- Mitigation: dedupe by `story-*` ID + content hash.

2. Galaxy page includes unresolved assets/links.
- Impact: broken images or dead CTA in rebuilt site.
- Mitigation: manually verify each Galaxy section link and media reference.

3. Blog links are entirely external.
- Impact: link rot risk outside your control.
- Mitigation: periodic link checker + optional local summary mirror.

4. WordPress/plugin markup mixed into content exports.
- Impact: brittle rendering if copied directly.
- Mitigation: migrate to structured data models and re-render with static templates.

5. Mixed-language formatting and manual line breaks in member/research text.
- Impact: formatting loss during cleaning.
- Mitigation: preserve raw text fields and render with controlled line-break handling.

## QA checklist (deep)

### Data QA

- [ ] No duplicated publication IDs in final dataset
- [ ] Every publication has date/title/venue/link
- [ ] Every member entry has name and image
- [ ] Research tracks remain exactly three unless intentionally changed
- [ ] Blog entries preserve title/author/external URL
- [ ] Galaxy support emails are valid and visible

### UX QA

- [ ] External links open with clear off-site indication
- [ ] Home contact block matches archived values
- [ ] Mobile nav contains same items as desktop nav
- [ ] Timeline pages are readable without JS-heavy plugin behavior

### Security QA

- [ ] No `/wp-` links remain in production HTML
- [ ] No admin/feed links exposed unless intentionally required
- [ ] CSP/security headers configured on static host/CDN

## Suggested implementation order

1. Build static layout shells for all pages.
2. Import `home`, `contact`, and nav first.
3. Import publication dataset with dedupe.
4. Import member dataset and classify current/alumni.
5. Import research tracks and accordion content.
6. Import blog external cards.
7. Rebuild Galaxy help page and validate all links/media.
8. Run final QA checklist and launch.
