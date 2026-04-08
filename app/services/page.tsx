import { services } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TrustStrip from "@/components/TrustStrip";
import CourseCard from "@/components/CourseCard";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Robotics & Prototyping Services | Mech-E-Tron",
  description: "Professional 3D printing, laser cutting, and custom drone development services in Hyderabad. From prototypes to small-batch production.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Engineering Services"
        subtitle="Professional design, prototyping, and fabrication services for students, hobbyists, and industry."
        badge="Prototyping & Fabrication"
      />

      <TrustStrip />

      <Section id="service-list" className="bg-brand-surface">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <CourseCard
              key={service.slug}
              title={service.title}
              short={service.short}
              image={service.image}
              href={`/services/${service.slug}`}
              category={service.category}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-ink mb-6">Custom Fabrication & Design</h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-6">
              At Mech-E-Tron, we don't just teach — we build. Our state-of-the-art lab at OTBI, Osmania University is equipped with industrial-grade 3D printers, laser cutters, and electronics workstations.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Rapid Prototyping (FDM & Resin)",
                "Precision Laser Cutting & Engraving",
                "Custom Drone & RC Vehicle Builds",
                "PCB Design & Firmware Development",
                "Hardware Product Design Assistance",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  <span className="text-brand-body font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a href="/contact" className="btn-primary">Request a Quote</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square rounded-card overflow-hidden relative border border-brand-blue/10">
                <img src="/images/3d-printing.webp" alt="3D Printing" className="object-cover w-full h-full" />
             </div>
             <div className="aspect-square rounded-card overflow-hidden relative border border-brand-blue/10 mt-8">
                <img src="/images/laser-cutting.webp" alt="Laser Cutting" className="object-cover w-full h-full" />
             </div>
             <div className="aspect-square rounded-card overflow-hidden relative border border-brand-blue/10">
                <img src="/images/pcb-prototype.webp" alt="PCB Design" className="object-cover w-full h-full" />
             </div>
             <div className="aspect-square rounded-card overflow-hidden relative border border-brand-blue/10 mt-8">
                <img src="/images/custom-drone.webp" alt="Drone Build" className="object-cover w-full h-full" />
             </div>
          </div>
        </div>
      </Section>

      <CTABanner 
        title="Have a custom project in mind?"
        subtitle="Visit our lab for a consultation or send us your design files for a quick quote via WhatsApp."
        cta1={{ label: "Contact Us", href: "/contact" }}
        cta2={{ label: "WhatsApp Files", href: "https://wa.me/918148435256" }}
      />
    </main>
  );
}
