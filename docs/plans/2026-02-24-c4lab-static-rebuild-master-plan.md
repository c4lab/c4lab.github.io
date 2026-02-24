# c4Lab Static Rebuild Master Plan (Merged + Style Survey)

## Summary
Create a static academic lab website using React + TypeScript + Vite that preserves all required information from archived pages, is responsive (especially smartphone), and is modular for future AI-agent maintenance workflows.

Planned plan file path:
- `docs/plans/2026-02-24-c4lab-static-rebuild-master-plan.md`

## Scope and Information Architecture
Core routes:
- `/`
- `/blog`
- `/research`
- `/publication`
- `/member`

Hidden route:
- `/galaxy` included, not shown in navbar, reachable by direct URL and footer/support links.

Page responsibilities:
- Home: hero, highlights timeline, contact.
- Publication: newest-first, grouped by year, 70+ items scalable.
- Member: featured PI + current/alumni members.
- Research: three tracks with expandable details.
- Blog: external link cards with off-site indication.
- Galaxy: utility/help page for operations and support.

## Technical Approach (Selected)
Chosen approach:
- Typed content files + schema validation.

Why:
- Best for deterministic static builds.
- Best for AI-agent workflows (`add-new-lab-member` etc.).
- Keeps content separate from presentation.
- Supports strict validation and safer automation.

## Public Interfaces / Types
Create typed interfaces:
- `src/types/content.ts`
- `src/types/member.ts`
- `src/types/publication.ts`
- `src/types/research.ts`
- `src/types/blog.ts`
- `src/types/site.ts`
- `src/types/theme.ts`

Core contracts:
- `MemberRecord`: `id`, `name`, `role`, `status`, `yearLabel`, `photo`, `profileUrl?`, `sortOrder`
- `PublicationRecord`: `id`, `date`, `year`, `venue`, `title`, `authors`, `link`
- `ResearchTrack`: `id`, `periodLabel`, `title`, `summary`, `details[]`, `media?`
- `BlogRecord`: `id`, `title`, `author`, `summary`, `externalUrl`, `sourceHost`, `image?`
- `TimelineEntry`: `id`, `date`, `title`, `summary`, `link?`, `image?`
- `SiteConfig`: branding, SEO defaults, contact, nav settings
- Theme tokens: colors, typography scale, spacing, radii, shadows, motion

## Content and Media Layout
Content source of truth:
- Repo-managed JSON/YAML files

Planned content files:
- `src/content/site.json`
- `src/content/home.timeline.json`
- `src/content/publications.json`
- `src/content/members.json`
- `src/content/research.json`
- `src/content/blog.json`
- `src/content/galaxy.json`

Media directories:
- `public/media/members/`
- `public/media/research/`
- `public/media/blog/`
- `public/media/shared/`

## Component / Module Plan
App shell:
- `src/app/router.tsx`
- `src/app/layout/AppLayout.tsx`

Reusable modules:
- `src/components/nav/MainNav.tsx`
- `src/components/seo/SeoHead.tsx`
- `src/components/cards/MemberCard.tsx`
- `src/components/cards/PublicationItem.tsx`
- `src/components/cards/BlogCard.tsx`
- `src/components/timeline/TimelineList.tsx`
- `src/components/research/ResearchAccordion.tsx`
- `src/components/common/ExternalLink.tsx`

Pages:
- `src/pages/HomePage.tsx`
- `src/pages/BlogPage.tsx`
- `src/pages/ResearchPage.tsx`
- `src/pages/PublicationPage.tsx`
- `src/pages/MemberPage.tsx`
- `src/pages/GalaxyPage.tsx`

## AI-Agent Maintenance Contract
Example scenario: `add-new-lab-member`
- Collect required fields (`name`, `role`, `status`, `yearLabel`, `photo`) and optional `profileUrl`.
- Validate schema before writing.
- Enforce media naming: `member-<slug>-<yyyy>.jpg|png|webp`.
- Copy image into `public/media/members/`.
- Append record to `src/content/members.json`.
- Run checks: content validation, typecheck, build.
- Trigger rebuild/deploy only on pass.

Validation rules:
- Required fields non-empty.
- `status` limited to `current|alumni`.
- Duplicate `id` blocked.
- Duplicate `name+yearLabel` blocked.
- Missing media/invalid extension blocked.

## Responsive and UX Constraints
Design direction (from `ui-ux-pro-max` synthesis):
- Professional, restrained academic tone.
- High readability typography and contrast.
- Minimal motion and no fancy effects.
- Smartphone-first breakpoints with no horizontal scroll.

Required responsive QA widths:
- `375`, `768`, `1024`, `1440`

Accessibility baseline:
- Semantic landmarks and headings.
- Keyboard-accessible nav/menu.
- Visible focus states.
- External links clearly labeled.
- `prefers-reduced-motion` respected.
- Alt text for informative images.

## Build, Deployment, and Security
Build:
- Vite production build to `dist/`.
- Static hosting/CDN deployment.

Security:
- No WordPress runtime/routes (`/wp-*`) in output.
- Remove legacy admin/feed/search links.
- Add basic security headers at host/CDN level.
- No server-side CMS surface.

## Test Cases and Acceptance
Data integrity:
- Parse all content JSON successfully.
- Schema validation passes for each dataset.
- No duplicate publication IDs.
- Member photos resolve to existing local files.

Functional:
- All routes render with correct page titles/meta.
- Galaxy is accessible by direct path and absent in navbar.
- Publication ordering newest-first and grouped by year.
- Blog links open off-site safely.

Responsive:
- Layout integrity at 375/768/1024/1440.
- Mobile nav opens/closes and traps focus correctly.
- No clipped cards or overflow.

Accessibility:
- Keyboard-only navigation across all pages.
- Focus visibility on all interactive elements.
- External-link text/icon indicators present.

Agent workflow:
- Simulate add-new-lab-member with valid input -> member appears.
- Simulate missing required field -> blocked with clear error.
- Simulate invalid media name -> blocked with remediation message.

## ASCII Visualization (Subagent Output)

```text
+----------------------------------------------------------------------------------------------+
|                                 Static React + TS + Vite App                                 |
+----------------------------------------------------------------------------------------------+
| Routing / Layout                                                                              |
| BrowserRouter + AppLayout + Navbar(/,/blog,/research,/publication,/member) + Footer          |
| Hidden route: /galaxy (reachable by direct URL only; not rendered in Navbar)                 |
+----------------------------------------------------------------------------------------------+
| Page Modules                                                                                  |
| HomePage(/) | BlogPage(/blog) | ResearchPage(/research) | PublicationPage(/publication)      |
| MemberPage(/member) | GalaxyPage(/galaxy, hidden)                                             |
+----------------------------------------------------------------------------------------------+
| Shared UI Components                                                                          |
| Hero | SectionTitle | Card | FilterBar | Timeline | PublicationList | MemberGrid             |
| BlogList | Pagination | CTA | SEOHead                                                        |
+----------------------------------------------------------------------------------------------+
| Typed Content Data Files                                                                      |
| src/data/site.ts | members.ts | publications.ts | research.ts | blog.ts | timeline.ts        |
| TS interfaces/types validate shape consumed by pages/components                               |
+----------------------------------------------------------------------------------------------+
| Local Media Assets                                                                            |
| public/images/* | public/icons/* | public/files/*                                             |
| Imported by components/pages and copied to dist/ at build                                     |
+----------------------------------------------------------------------------------------------+
| Build / Deploy                                                                                |
| Vite build -> dist/ static bundle -> Static Hosting (e.g., Netlify/Vercel/S3) -> CDN edge    |
+----------------------------------------------------------------------------------------------+
```

```text
[START]
   |
   v
[Run command: add-new-lab-member skill]
   |
   v
[Collect required fields + photo]
   |
   v
{All required fields present?} -------------------- No ---> [FAIL: Invalid data (missing required fields)] -> [STOP]
   |
  Yes
   |
   v
{Schema valid (types/format/rules)?} ------------- No ---> [FAIL: Invalid data (schema validation failed)] -> [STOP]
   |
  Yes
   |
   v
{Photo provided?} --------------------------------- No ---> [FAIL: Missing media] -> [STOP]
   |
  Yes
   |
   v
{Media filename matches naming convention?} ------- No ---> [FAIL: Invalid media naming] -> [STOP]
   |
  Yes
   |
   v
[Append member entry to content file]
   |
   v
[Add/copy image asset to media directory]
   |
   v
[Run checks (lint/build/content validation)]
   |
   v
{Checks pass?} ------------------------------------ No ---> [FAIL: Checks failed] -> [STOP]
   |
  Yes
   |
   v
[Trigger static rebuild + deploy]
   |
   v
[END: Member published]
```

## Style System (From `ui-ux-pro-max` Survey + Subagent)
Chosen direction:
- Civic Clarity / Clean Light

```txt
+--------------------------------------------------------------------------------------------------------------+
| C4LAB STYLE GUIDE v1 - Clean Light / Civic Clarity                                                          |
+--------------------------------------------------------------------------------------------------------------+

[COLOR TOKENS]
bg.base            = #F7F9FC
bg.surface         = #FFFFFF
bg.subtle          = #EEF2F7
text.primary       = #142033
text.secondary     = #42526B
text.muted         = #6C7A90
border.default     = #D5DEE9
border.strong      = #B8C5D6
accent.primary     = #1F5FAF
accent.primary.hov = #184B8A
accent.soft        = #DCEBFF
state.success      = #1F7A4C
state.warning      = #A46512
state.danger       = #B4232C
focus.ring         = #6AA6FF

[TYPOGRAPHY TOKENS]
font.sans          = "IBM Plex Sans", "Noto Sans TC", sans-serif
font.mono          = "IBM Plex Mono", monospace
type.h1            = 44/52 700
type.h2            = 34/42 700
type.h3            = 26/34 600
type.h4            = 22/30 600
type.body.lg       = 19/30 400
type.body          = 17/28 400
type.body.sm       = 15/24 400
type.label         = 14/20 600
type.caption       = 13/18 400
letter.tight       = -0.01em
letter.normal      = 0
letter.wide        = 0.02em

[SPACING SCALE]  (4px base)
space.0  = 0
space.1  = 4
space.2  = 8
space.3  = 12
space.4  = 16
space.5  = 20
space.6  = 24
space.8  = 32
space.10 = 40
space.12 = 48
space.16 = 64
space.20 = 80

[BORDER RADIUS]
radius.xs = 4
radius.sm = 8
radius.md = 12
radius.lg = 16
radius.xl = 24
radius.pill = 999

[SHADOW USAGE]
shadow.none = none
shadow.sm   = 0 1px 2px rgba(20,32,51,0.08)
shadow.md   = 0 6px 20px rgba(20,32,51,0.10)
shadow.lg   = 0 12px 30px rgba(20,32,51,0.14)
rule.1      = Default surfaces use shadow.sm only.
rule.2      = Hovered interactive surfaces can use shadow.md.
rule.3      = Do not stack multiple shadows.

[MOTION RULES]
duration.fast   = 120ms
duration.base   = 180ms
duration.slow   = 260ms
easing.standard = cubic-bezier(0.2, 0, 0, 1)
easing.exit     = cubic-bezier(0.4, 0, 1, 1)
rule.1          = Animate opacity, color, transform only.
rule.2          = Hover transform max: translateY(-2px).
rule.3          = No bouncy motion, no parallax.
rule.4          = Respect reduced motion: set durations to 0ms.

[COMPONENT TONE RULES]

cards:
- calm and structured; clear title, short body, one optional action.
- bg.surface + border.default; radius.md; shadow.sm.
- on hover: border.strong + shadow.md.

buttons:
- primary: accent.primary bg, white text, radius.sm, medium weight.
- secondary: bg.surface, border.default, text.primary.
- hover changes must be color/shadow only; no size jump.
- disabled: 45% opacity, no shadow, no pointer events.

nav:
- plain and stable; no glass, no blur, no large animation.
- desktop height: 64; mobile height: 56.
- active item uses accent.primary text + 2px underline.
- sticky nav allowed with solid bg.base and subtle bottom border.

+--------------------------------------------------------------------------------------------------------------+
```

## Assumptions and Defaults
- Date context: plan prepared against PRD snapshots dated 2026-02-24 and Wayback captures from 2024-11-03 to 2025-04-20.
- Galaxy is intentionally hidden from navbar.
- Repo data files are canonical source (not Google Sheets at runtime).
- Local member media is mandatory for stable builds.
- Visual style is clean and professional, not fancy.
