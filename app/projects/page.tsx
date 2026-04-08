import { projects } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CourseCard from "@/components/CourseCard";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Engineering Projects & Support | Mech-E-Tron",
  description: "Guided B.E. / B.Tech projects in Robotics, IoT, and Embedded Systems. Get prototype assistance, documentation, and demo support at OTBI, Hyderabad.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title="Engineering Projects"
        subtitle="End-to-end support for your Final Year B.E. / B.Tech projects—from ideation to working prototype."
        badge="Project Support"
      />

      <Section id="project-list" className="bg-brand-surface">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <CourseCard
              key={project.slug}
              title={project.title}
              short={project.desc}
              image={project.slug === "robotics" ? "/images/robotics-lab.webp" : (project.slug === "iot" ? "/images/iot-project.webp" : "/images/pcb-prototype.webp")}
              href={`/projects/${project.slug}`}
              category="Projects"
              icon={project.icon}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-brand-ink mb-6">Why Partner with Us for Your Project?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
             <div className="p-6">
                <div className="text-4xl mb-4">🔬</div>
                <h4 className="font-display font-bold text-brand-ink mb-2">OTBI Lab Access</h4>
                <p className="text-sm text-brand-muted">Work in a professional innovation environment with access to all tools and sensors.</p>
             </div>
             <div className="p-6">
                <div className="text-4xl mb-4">📝</div>
                <h4 className="font-display font-bold text-brand-ink mb-2">Documentation Support</h4>
                <p className="text-sm text-brand-muted">Complete assistance with project reports, circuit diagrams, and PPT presentations.</p>
             </div>
             <div className="p-6">
                <div className="text-4xl mb-4">🎬</div>
                <h4 className="font-display font-bold text-brand-ink mb-2">Working Demos</h4>
                <p className="text-sm text-brand-muted">We ensure your prototype works flawlessly for your external examiners and viva.</p>
             </div>
          </div>
        </div>
      </Section>

      <CTABanner 
        title="Running late on your project deadline?"
        subtitle="Don't panic. Visit our lab today for an express consultation and get your project back on track."
        cta1={{ label: "Get Project Help", href: "/contact" }}
        cta2={{ label: "WhatsApp Now", href: "https://wa.me/918148435256" }}
      />
    </main>
  );
}
