# SEO Pivot to c4lab.github.io Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement robust on-page SEO for the c4Lab SPA and set `https://c4lab.github.io` as the canonical domain across metadata, crawler files, and structured data.

**Architecture:** Add a lightweight client-side SEO system for this React Router SPA: a shared SEO config module, a reusable head manager component for per-route tags, and a site-level JSON-LD injector. Keep it framework-native (no extra SEO dependency), and pair each implementation change with focused tests. Publish crawl discovery files (`robots.txt`, `sitemap.xml`) aligned to the canonical domain.

**Tech Stack:** React 19, TypeScript, react-router-dom v7, Vitest + Testing Library, Vite static `public/` assets.

---

### Task 1: Create Canonical SEO Config Utilities

**Files:**
- Create: `src/lib/seo.ts`
- Test: `src/lib/seo.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, test } from "vitest";
import { buildAbsoluteUrl, buildPageTitle, SEO_BASE_URL, pageSeo } from "./seo";

describe("seo config", () => {
  test("uses github.io as canonical base", () => {
    expect(SEO_BASE_URL).toBe("https://c4lab.github.io");
    expect(buildAbsoluteUrl("/research")).toBe("https://c4lab.github.io/research");
  });

  test("builds page title with site suffix", () => {
    expect(buildPageTitle("Research")).toBe("Research | c4Lab");
  });

  test("contains route SEO entries", () => {
    expect(pageSeo.home.path).toBe("/");
    expect(pageSeo.blog.path).toBe("/blog");
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/seo.test.ts`
Expected: FAIL with module not found for `./seo`

**Step 3: Write minimal implementation**

```ts
export const SEO_BASE_URL = "https://c4lab.github.io";
export const SEO_SITE_NAME = "c4Lab";

export function buildAbsoluteUrl(path: string) {
  return new URL(path, SEO_BASE_URL).toString();
}

export function buildPageTitle(title: string) {
  return `${title} | ${SEO_SITE_NAME}`;
}

export const pageSeo = {
  home: { title: "Machine Learning and Bioinformatics Lab", description: "...", path: "/" },
  research: { title: "Research", description: "...", path: "/research" },
  publication: { title: "Publications", description: "...", path: "/publication" },
  member: { title: "Members", description: "...", path: "/member" },
  blog: { title: "Blog", description: "...", path: "/blog" },
  galaxy: { title: "NTU Galaxy Guide", description: "...", path: "/galaxy" }
};
```

**Step 4: Run test to verify it passes**

Run: `npm test -- src/lib/seo.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/seo.ts src/lib/seo.test.ts
git commit -m "feat(seo): add canonical SEO route config utilities"
```

### Task 2: Add Reusable Head Metadata Component

**Files:**
- Create: `src/components/seo/SeoHead.tsx`
- Test: `src/components/seo/SeoHead.test.tsx`

**Step 1: Write the failing test**

```tsx
import { render } from "@testing-library/react";
import { SeoHead } from "./SeoHead";

test("sets title, canonical, description, og and twitter tags", () => {
  render(<SeoHead title="Research" description="Research page" path="/research" />);

  expect(document.title).toBe("Research | c4Lab");
  expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute("href"))
    .toBe("https://c4lab.github.io/research");
  expect(document.head.querySelector('meta[name="description"]')?.getAttribute("content"))
    .toBe("Research page");
  expect(document.head.querySelector('meta[property="og:url"]')?.getAttribute("content"))
    .toBe("https://c4lab.github.io/research");
  expect(document.head.querySelector('meta[name="twitter:card"]')?.getAttribute("content"))
    .toBe("summary_large_image");
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/seo/SeoHead.test.tsx`
Expected: FAIL with missing `SeoHead`

**Step 3: Write minimal implementation**

```tsx
export function SeoHead({ title, description, path, image, type = "website", noIndex = false }: SeoMeta) {
  useEffect(() => {
    const fullTitle = buildPageTitle(title);
    const canonicalUrl = buildAbsoluteUrl(path);
    const imageUrl = buildAbsoluteUrl(image ?? SEO_DEFAULT_IMAGE);

    document.title = fullTitle;
    // upsert canonical, description, robots
    // upsert og:type, og:site_name, og:title, og:description, og:url, og:image
    // upsert twitter:card, twitter:title, twitter:description, twitter:image
  }, [title, description, path, image, type, noIndex]);

  return null;
}
```

**Step 4: Run test to verify it passes**

Run: `npm test -- src/components/seo/SeoHead.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add src/components/seo/SeoHead.tsx src/components/seo/SeoHead.test.tsx
git commit -m "feat(seo): add reusable route metadata head manager"
```

### Task 3: Add Site-Level Structured Data Component

**Files:**
- Create: `src/components/seo/SiteStructuredData.tsx`
- Modify: `src/components/layout/SiteLayout.tsx`
- Test: `src/components/seo/SiteStructuredData.test.tsx`

**Step 1: Write the failing test**

```tsx
import { render } from "@testing-library/react";
import { SiteStructuredData } from "./SiteStructuredData";

test("injects JSON-LD graph for organization and website", () => {
  render(<SiteStructuredData />);
  const script = document.head.querySelector('script#site-structured-data');
  expect(script).toBeTruthy();
  const payload = JSON.parse(script?.textContent ?? "{}");
  expect(payload["@graph"]?.[0]?.["@type"]).toBe("ResearchOrganization");
  expect(payload["@graph"]?.[1]?.["@type"]).toBe("WebSite");
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/seo/SiteStructuredData.test.tsx`
Expected: FAIL with missing component

**Step 3: Write minimal implementation**

```tsx
export function SiteStructuredData() {
  useEffect(() => {
    const payload = {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "ResearchOrganization", "@id": "https://c4lab.github.io/#organization", name: "c4Lab", url: "https://c4lab.github.io" },
        { "@type": "WebSite", "@id": "https://c4lab.github.io/#website", url: "https://c4lab.github.io", name: "c4Lab" }
      ]
    };
    // upsert <script id="site-structured-data" type="application/ld+json">
  }, []);

  return null;
}
```

Also mount it once in `SiteLayout` above the skip link.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/components/seo/SiteStructuredData.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add src/components/seo/SiteStructuredData.tsx src/components/seo/SiteStructuredData.test.tsx src/components/layout/SiteLayout.tsx
git commit -m "feat(seo): add site-level JSON-LD structured data"
```

### Task 4: Wire Route-Level SEO into Pages

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/pages/ResearchPage.tsx`
- Modify: `src/pages/PublicationPage.tsx`
- Modify: `src/pages/MemberPage.tsx`
- Modify: `src/pages/BlogPage.tsx`
- Modify: `src/pages/GalaxyPage.tsx`
- Modify: `src/app/App.test.tsx`

**Step 1: Write the failing test**

Add route metadata assertions in `App.test.tsx`:

```tsx
test("applies canonical title and URL for research route", () => {
  renderApp(["/research"]);
  expect(document.title).toBe("Research | c4Lab");
  expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute("href"))
    .toBe("https://c4lab.github.io/research");
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/app/App.test.tsx`
Expected: FAIL because title/canonical remain default

**Step 3: Write minimal implementation**

In each page component, add:

```tsx
import { SeoHead } from "../components/seo/SeoHead";
import { pageSeo } from "../lib/seo";

<>
  <SeoHead {...pageSeo.research} />
  {/* existing page content */}
</>
```

Use matching route key (`home`, `research`, `publication`, `member`, `blog`, `galaxy`).

**Step 4: Run test to verify it passes**

Run: `npm test -- src/app/App.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add src/pages/HomePage.tsx src/pages/ResearchPage.tsx src/pages/PublicationPage.tsx src/pages/MemberPage.tsx src/pages/BlogPage.tsx src/pages/GalaxyPage.tsx src/app/App.test.tsx
git commit -m "feat(seo): apply per-route metadata configuration"
```

### Task 5: Add Crawler Discovery Files and Root Fallback Tags

**Files:**
- Modify: `index.html`
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`

**Step 1: Write the failing test**

Add a simple integration verification in `src/app/App.test.tsx` or a new smoke test for sitemap/robots presence by reading built output in Task 6. For this task, use build-time verification as the failing check.

**Step 2: Run check to verify it fails before files exist**

Run: `npm run build && test -f dist/robots.txt && test -f dist/sitemap.xml`
Expected: FAIL because one or both files are missing

**Step 3: Write minimal implementation**

`public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://c4lab.github.io/sitemap.xml
```

`public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://c4lab.github.io/</loc></url>
  <url><loc>https://c4lab.github.io/research</loc></url>
  <url><loc>https://c4lab.github.io/publication</loc></url>
  <url><loc>https://c4lab.github.io/member</loc></url>
  <url><loc>https://c4lab.github.io/blog</loc></url>
  <url><loc>https://c4lab.github.io/galaxy</loc></url>
</urlset>
```

Update `index.html` baseline tags to match canonical domain for the default route:
- `<link rel="canonical" href="https://c4lab.github.io/" />`
- Open Graph/Twitter defaults for the home page.

**Step 4: Run check to verify it passes**

Run: `npm run build && test -f dist/robots.txt && test -f dist/sitemap.xml`
Expected: PASS

**Step 5: Commit**

```bash
git add index.html public/robots.txt public/sitemap.xml
git commit -m "feat(seo): add robots, sitemap, and canonical root tags"
```

### Task 6: End-to-End Verification and Documentation Sync

**Files:**
- Modify (if needed): `README.md`

**Step 1: Run full test suite**

Run: `npm test`
Expected: PASS

**Step 2: Run production build**

Run: `npm run build`
Expected: PASS and emit `dist/index.html`, `dist/robots.txt`, `dist/sitemap.xml`

**Step 3: Spot-check metadata output**

Run:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
curl -s http://127.0.0.1:4173/ | sed -n '1,120p'
```

Expected:
- canonical tag points to `https://c4lab.github.io/`
- default description and OG/Twitter tags present

**Step 4: Update docs if canonical policy is documented anywhere else**

If README mentions multiple equivalent hosts, update wording to mark `https://c4lab.github.io` as primary canonical host for search indexing.

**Step 5: Commit**

```bash
git add README.md
git commit -m "docs(seo): document canonical github.io domain policy"
```

### Execution Notes

- Follow `@superpowers/test-driven-development` for each task before implementation.
- Use `@superpowers/verification-before-completion` before claiming done.
- Keep commits small and task-scoped.
- Do not introduce additional SEO libraries unless a test reveals a hard blocker.

