import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Mech-E-Tron Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main>
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
               {post.category} • {new Date(post.date).toLocaleDateString()}
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
              <p key={i} className="text-brand-body leading-relaxed mb-6 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<b class="text-brand-ink">$1</b>') }} />
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
        cta2={{ label: "WhatsApp Inquiry", href: "https://wa.me/918148435256" }}
      />
    </main>
  );
}
