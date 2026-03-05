import { useEffect } from "react";
import {
  buildAbsoluteUrl,
  buildPageTitle,
  SEO_DEFAULT_IMAGE,
  SEO_SITE_NAME,
  type SeoMeta
} from "../../lib/seo";

function upsertMetaByName(name: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name=\"${name}\"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[property=\"${property}\"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", url);
}

export function SeoHead({ title, description, path, image, type = "website", noIndex = false }: SeoMeta) {
  useEffect(() => {
    const fullTitle = buildPageTitle(title);
    const canonicalUrl = buildAbsoluteUrl(path);
    const imageUrl = buildAbsoluteUrl(image ?? SEO_DEFAULT_IMAGE);

    document.title = fullTitle;
    upsertCanonical(canonicalUrl);

    upsertMetaByName("description", description);
    upsertMetaByName("robots", noIndex ? "noindex, nofollow" : "index, follow");

    upsertMetaByProperty("og:type", type);
    upsertMetaByProperty("og:site_name", SEO_SITE_NAME);
    upsertMetaByProperty("og:title", fullTitle);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", imageUrl);

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", fullTitle);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", imageUrl);
  }, [title, description, path, image, type, noIndex]);

  return null;
}
