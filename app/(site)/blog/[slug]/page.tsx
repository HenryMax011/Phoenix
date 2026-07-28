import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaButton } from "@/components/ui";
import { blogPosts, getPostBySlug } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artigo" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="bg-white text-steel-950">
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>{" "}
        / {post.category}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-steel-950 sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-steel-500">
        {new Date(post.date).toLocaleDateString("pt-BR")} · {post.readTime} de
        leitura
      </p>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-steel-700">
        {post.content.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-12 border border-steel-200 bg-steel-50 p-6">
        <h2 className="font-semibold text-steel-950">
          Precisa de ajuda na especificação?
        </h2>
        <p className="mt-2 text-sm text-steel-600">
          Fale com a equipe PhoenixBor e receba orientação técnica.
        </p>
        <div className="mt-4">
          <CtaButton href="/contato">Solicitar orçamento</CtaButton>
        </div>
      </div>
    </article>
    </div>
  );
}
