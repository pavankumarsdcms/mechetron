import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Section from "@/components/Section";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} Support | Mech-E-Tron Hyderabad`,
    description: project.desc,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main>
      {/* Header */}
      <div className="bg-brand-ink pt-28 pb-16">
        <div className="container-x">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.title, href: "#", current: true },
            ]} 
          />
          
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-pill bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-6">
                Engineering Support
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                {project.title}
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
                {project.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`https://wa.me/918148435256?text=Hi%2C%20I%20need%20help%20with%20my%20${project.title}.`} className="btn-primary">
                  Consult a Mentor
                </a>
                <a href="/contact" className="btn-dark">
                  Visit Lab
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in-up animate-delay-200">
               <div className="h-48 rounded-xl overflow-hidden bg-brand-surface border border-white/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">{project.icon}</div>
               </div>
               <div className="h-48 rounded-xl overflow-hidden bg-brand-blue/20 border border-white/10 p-6 flex flex-col justify-end">
                  <div className="text-white font-bold text-lg">Working Prototype</div>
                  <div className="text-white/40 text-xs">Guaranteed Delivery</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-ink mb-6">Key Domains</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.domains.map((domain, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-brand-surface border border-brand-blue/5">
                  <span className="text-brand-blue">▶</span>
                  <span className="font-semibold text-brand-ink">{domain}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-display font-bold text-brand-ink mt-12 mb-6">What We Deliver</h2>
            <div className="space-y-4">
              {project.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span className="text-brand-body font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-ink rounded-xl2 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-2xl font-display font-bold mb-8 relative z-10">Sample Project Ideas</h2>
            <div className="space-y-3 relative z-10">
              {project.sampleProjects.map((idea, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                   <p className="font-medium">{idea}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/40 text-sm italic">Note: These are just examples. We can help you build any custom idea you have.</p>
          </div>
        </div>
      </Section>

      <CTABanner 
        title="Ready to build your dream project?"
        subtitle="Our mentors are available for one-on-one sessions to help you finalize your project scope and component list."
        cta1={{ label: "Book Appointment", href: "/contact" }}
        cta2={{ label: "Discuss on WhatsApp", href: "https://wa.me/918148435256" }}
      />
    </main>
  );
}
