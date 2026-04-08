import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Section from "@/components/Section";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} Service | Mech-E-Tron Hyderabad`,
    description: service.short,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <main>
      {/* Header */}
      <div className="bg-brand-ink pt-28 pb-16">
        <div className="container-x">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: "#", current: true },
            ]} 
          />
          
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-pill bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-6">
                Professional Service
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                {service.title}
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
                {service.overview}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`https://wa.me/918148435256?text=Hi%2C%20I%27m%20interested%20in%20your%20${service.title}%20service.`} className="btn-primary">
                  Request Quote
                </a>
                <a href="/contact" className="btn-dark">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl2 overflow-hidden border border-white/10 shadow-glow animate-fade-in-up animate-delay-200">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-brand-ink mb-10 text-center">Service Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-card bg-brand-surface border border-brand-blue/5 hover:shadow-card transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <p className="text-brand-ink font-semibold">{cap}</p>
                  <p className="text-sm text-brand-muted mt-1">High-quality, industry-standard {service.title.toLowerCase()} service.</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-card bg-brand-tint border border-brand-blue/20 text-center">
            <h3 className="text-xl font-display font-bold text-brand-ink mb-4">Pricing & Consultation</h3>
            <p className="text-brand-body mb-6">
              Pricing for {service.title.toLowerCase()} depends on design complexity, material choice, and volume. For an accurate quote, please share your design files (STL, DXF, or CAD) via WhatsApp or Email.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://wa.me/918148435256" className="font-bold text-brand-blue hover:underline">WhatsApp Us →</a>
              <span className="text-gray-300">|</span>
              <a href="mailto:info@mechetron.com" className="font-bold text-brand-blue hover:underline">info@mechetron.com</a>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner 
        title="Ready to start building?"
        subtitle="Bring your digital designs to life with our precision fabrication services at OTBI, Osmania University."
        cta1={{ label: "Request a Quote", href: "/contact" }}
        cta2={{ label: "WhatsApp Support", href: "https://wa.me/918148435256" }}
      />
    </main>
  );
}
