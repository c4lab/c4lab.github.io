import { BlogCardGrid } from "../components/sections/BlogCardGrid";
import { blogHero } from "../data/mock/blog";
import { PageHero } from "../components/ui/PageHero";

export function BlogPage() {
  return (
    <>
      <PageHero {...blogHero} />
      <BlogCardGrid />
    </>
  );
}
