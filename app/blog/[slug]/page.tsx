import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import type { ReactNode } from "react";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]} ${y}`;
}

function renderBold(text: string): ReactNode[] {
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <b key={i} className="text-brand-ink">{part}</b> : part
  );
}

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category.toLowerCase(), "robotics", "STEM India", "Mech-E-Tron"],
    alternates: { canonical: `https://mechetron.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://mechetron.com/blog/${post.slug}`,
      images: [{ url: `https://mechetron.com${post.image}`, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function extractFAQs(body: string[]): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  for (const para of body) {
    const m = para.match(/^\*\*Q:\s*(.*?)\*\*\s*A:\s*(.+)$/s);
    if (m) faqs.push({ question: m[1].trim(), answer: m[2].trim() });
  }
  return faqs;
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const faqs = extractFAQs(post.body);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `https://mechetron.com${post.image}`,
    author: { "@type": "Organization", name: "Mech-E-Tron", url: "https://mechetron.com" },
    publisher: { "@type": "Organization", name: "Mech-E-Tron", logo: { "@type": "ImageObject", url: "https://mechetron.com/images/og-image.jpg" } },
  };
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <div className="bg-brand-ink pt-28 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[100px] -mr-48 -mt-48" />
        <div className="container-x relative z-10">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: "#", current: true },
            ]} 
          />
          
          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest mb-4">
               {post.category} • {formatDate(post.date)}
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-brand max-w-none">
            {post.body.map((para, i) => (
              <p key={i} className="text-brand-body leading-relaxed mb-6 whitespace-pre-line">{renderBold(para)}</p>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-brand-blue/10 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">M</div>
                <div>
                   <div className="font-display font-bold text-brand-ink">Mech-E-Tron Team</div>
                   <div className="text-xs text-brand-muted">Innovation & STEM Education</div>
                </div>
             </div>
             <div className="flex gap-4">
                {/* Social Share Placeholder */}
                <button className="text-brand-muted hover:text-brand-blue transition">Share</button>
             </div>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Inspired by what you read?"
        subtitle="Explore our hands-on courses and start your own innovation journey today."
        cta1={{ label: "View All Courses", href: "/courses" }}
      />
    </main>
  );
}
