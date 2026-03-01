# c4Lab Website — AI Agent Guide

## Project Overview

Static SPA built with Vite + React 19 + TypeScript + Tailwind CSS.
All content lives in TypeScript data files under `src/data/mock/`. No database, no CMS, no API calls.
Routing uses react-router-dom v7 with BrowserRouter (SPA — all paths serve index.html).

## Commands

- `npm run dev` — dev server at http://localhost:5173 (hot reload)
- `npm run build` — production build to `dist/`
- `npm test` — run Vitest tests
- `npm run preview` — preview production build locally

## Project Structure

```
src/data/mock/       ← ALL website content (edit these to update content)
  site.ts            ← nav links, footer contact info, tagline
  home.ts            ← hero, project highlights, timeline entries
  research.ts        ← research tracks and details
  publications.ts    ← year-grouped publication list
  members.ts         ← professor profile, current members, alumni
  blog.ts            ← blog post cards (link to external articles)
  galaxy.ts          ← Galaxy cluster instructions and support contacts
src/app/             ← page components and routing (App.tsx)
src/components/      ← shared UI components
src/types/           ← TypeScript type definitions
public/images/       ← static images (copied as-is to build output)
  blog/              ← blog cover images (blog-NN-description.ext)
  timeline/          ← timeline thumbnails (YYYY-description.ext)
```

## Content Editing Recipes

### Add a new member

Edit `src/data/mock/members.ts`. Find the last `id` in `memberRecords` to determine the next number.

- Insert in the **current members** section (before the `// ── Alumni` comment)
- Keep current members sorted by enrollment year descending (newest first)

```ts
// in memberRecords array, among current members:
{
  id: "member-51",          // increment from last id
  name: "Full Name",
  role: "生機所 碩士",       // degree/program, e.g. "生機系 學士", "GSB 博士"
  yearLabel: "2026 ~",      // enrollment year + " ~"
  focus: "",                // research focus (currently unused, leave blank)
  status: "current"
}
```

### Graduate a member (current → alumni)

Edit `src/data/mock/members.ts`. Find the member and change:

```ts
status: "alumni",           // was "current"
yearLabel: "2022 - 2026"    // was "2022 ~", add graduation year
```

Then move the entry to the **alumni section** (after the `// ── Alumni` comment), sorted by graduation year descending.

### Add a publication

Edit `src/data/mock/publications.ts`. Find the correct year group in `publicationGroups`, or add a new one at the top if it's a new year.

Find the last `id` across all groups to determine the next number.

```ts
{
  id: "pub_076",                         // increment from last id
  year: "2026",                          // must match parent group's year
  dateLabel: "15 Mar 2026",              // human-readable date
  title: "Full Paper Title",
  venue: "Journal or Conference Name",
  authors: "Author A, Author B, Chien-Yu Chen*",
  href: "https://doi.org/10.xxxx/xxxxx"  // link to paper
}
```

If adding a new year group:

```ts
// Add at the TOP of publicationGroups array
{
  year: "2026",
  items: [
    // ... publication items
  ]
}
```

### Add a blog post card

1. Place cover image in `public/images/blog/` (naming: `blog-NN-description.ext`)
2. Edit `src/data/mock/blog.ts`, append to `blogPosts`:

```ts
{
  id: "blog-18",
  title: "文章標題",
  author: "Author Name",
  summary: "一兩句摘要...",
  imageUrl: "/images/blog/blog-18-topic.png",
  sourceHost: "Medium",
  href: "https://medium.com/...",
  ctaLabel: "Read on Medium"
}
```

### Add a timeline entry

1. Place thumbnail in `public/images/timeline/` (naming: `YYYY-description.ext`)
2. Edit `src/data/mock/home.ts`, add to `timelineEntries`:

```ts
{
  id: "story-2026-01",
  year: "2026",
  dateLabel: "Mar 01",
  title: "Event Title",
  href: "https://...",                              // optional
  image: "/images/timeline/2026-event-name.jpg"     // optional
}
```

### Add a project highlight card

Edit `src/data/mock/home.ts`, append to `projectHighlights`:

```ts
{
  id: "project-slug",
  title: "Project Name",
  blurb: "One-sentence description",
  href: "https://...",
  tag: "Open Source"     // badge label
}
```

### Update contact info

Edit `src/data/mock/site.ts`, modify `siteContact`:

```ts
{
  phone: "+886-2-3366-7118",
  email: "chienyuchen@ntu.edu.tw",
  contactPerson: "陳倩瑜 Prof. Chen, Chien-Yu",
  addressLines: ["R304 ...", "..., National Taiwan University"]
}
```

### Update navigation links

Edit `src/data/mock/site.ts`, modify `primaryNav` or `utilityNav` arrays.

### Update research tracks

Edit `src/data/mock/research.ts`, modify or append to `researchTracks`.

### Update Galaxy page

Edit `src/data/mock/galaxy.ts`, modify `galaxySections` or `galaxySupport`.

## Important Conventions

- All data file imports use types from `src/types/content.ts` — check the type definitions if unsure about field names
- Image paths in data files use `/images/...` (relative to `public/`)
- Member IDs follow `member-N`, publication IDs follow `pub_NNN`, blog IDs follow `blog-N`
- Current members are sorted by enrollment year descending; alumni by graduation year descending
- Publications are grouped by year, newest year group first, newest paper first within each group
- Always run `npm test` after content changes to verify nothing breaks
- Always run `npm run build` to verify the production build succeeds before pushing
