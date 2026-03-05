import { BlogCardGrid } from "../components/sections/BlogCardGrid";
import { SeoHead } from "../components/seo/SeoHead";
import { pageSeo } from "../lib/seo";

export function BlogPage() {
  return (
    <>
      <SeoHead {...pageSeo.blog} />
      <BlogCardGrid />
    </>
  );
}
