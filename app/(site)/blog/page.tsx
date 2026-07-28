import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos técnicos sobre vedação industrial, especificação e manutenção — PhoenixBor.",
};

export default function BlogPage() {
  return (
    <div className="bg-white text-steel-950">
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Blog"
        title="Conteúdo técnico para especificação e manutenção"
        description="Guias práticos para reduzir falhas de vedação e acelerar decisões de compra."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group cursor-pointer border border-steel-200 bg-white p-6 transition-colors hover:border-steel-400"
          >
            <div className="flex items-center gap-3 text-xs text-steel-500">
              <span className="font-semibold uppercase tracking-wide text-blue-700">
                {post.category}
              </span>
              <span>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-steel-950 group-hover:text-blue-800">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
