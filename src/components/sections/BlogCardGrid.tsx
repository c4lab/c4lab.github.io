import { blogPosts } from "../../data/mock/blog";
import { Card } from "../ui/Card";
import { ExternalLink } from "../ui/ExternalLink";
import { SectionShell } from "../ui/SectionShell";

export function BlogCardGrid() {
  return (
    <SectionShell className="pt-10">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex h-full flex-col overflow-hidden rounded-[1.75rem]">
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{post.sourceHost}</p>
              <h2 className="mt-4 text-2xl">{post.title}</h2>
              <p className="mt-2 text-sm font-semibold text-primary">{post.author}</p>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{post.summary}</p>
              <div className="mt-6">
                <ExternalLink href={post.href}>{post.ctaLabel}</ExternalLink>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
