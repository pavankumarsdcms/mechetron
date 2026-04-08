import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TrustStrip from "@/components/TrustStrip";
import CTABanner from "@/components/CTABanner";
import { stats } from "@/lib/data";

export const metadata = {
  title: "About Us | Mech-E-Tron Robotics",
  description: "Learn about Mech-E-Tron's mission to revolutionize STEM education in India. Incubated at OTBI Osmania University, we train engineers of the future.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Our Story"
        subtitle="Empowering the next generation of engineers through hands-on innovation."
        badge="About Mech-E-Tron"
      />

      <TrustStrip />

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-[4/5] rounded-xl2 overflow-hidden shadow-glow">
                <img src="/images/classroom.webp" alt="Students building robots" className="object-cover w-full h-full" />
             </div>
             <div className="absolute -bottom-6 -right-6 glass border-brand-blue/20 p-6 max-w-[200px] shadow-glow-sm">
                <div className="text-3xl font-display font-bold text-brand-blue mb-1">2026</div>
                <p className="text-sm font-medium text-brand-body leading-tight">Driving the future of robotics in India</p>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold text-brand-ink mb-6">Learn Robotics. Build the Future.</h2>
            <div className="prose prose-lg text-brand-muted leading-relaxed space-y-6">
              <p>
                Founded with a vision to bridge the gap between theoretical education and practical engineering, Mech-E-Tron has become a leading name in STEM education in South India.
              </p>
              <p>
                Based out of the **Osmania Technology Business Incubator (OTBI)** at Osmania University, we operate at the intersection of academia and industry. Our mentors are working engineers who bring real-world challenges into the classroom.
              </p>
              <p>
                Whether it's a 10-year-old student building their first line-following robot or a final-year engineering student designing a complex autonomous drone, we provide the tools, the technology, and the mentorship needed to succeed.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-brand-blue/10">
                 {stats.map((s, i) => (
                   <div key={i} className="min-w-[120px]">
                      <div className="text-3xl font-display font-bold text-brand-blue">{s.value}</div>
                      <div className="text-xs uppercase tracking-widest text-brand-muted mt-1">{s.label}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-ink text-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
           <p className="text-white/60">The principles that guide every class, project, and service we offer.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Hardware-First", body: "We believe you can't learn engineering on a screen. Every lesson involves real physical components.", icon: "⚙️" },
             { title: "No Student Left Behind", body: "Our 1:6 mentor-to-student ratio ensures that every learner gets the attention they deserve.", icon: "🤝" },
             { title: "Innovation for All", body: "We make high-end technology—like 3D printing and drone builds—accessible to school students.", icon: "🚀" },
           ].map((v, i) => (
             <div key={i} className="card-glass border border-white/10 hover:border-brand-blue/40 transition-all p-8 text-center">
                <div className="text-4xl mb-6">{v.icon}</div>
                <h4 className="text-xl font-display font-bold mb-4">{v.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{v.body}</p>
             </div>
           ))}
        </div>
      </Section>

      <CTABanner 
        title="Be part of our mission"
        subtitle="Join our community of 10,000+ students and innovators. Let's build the future together."
        cta1={{ label: "View Courses", href: "/courses" }}
        cta2={{ label: "Visit Our Lab", href: "/contact" }}
      />
    </main>
  );
}
