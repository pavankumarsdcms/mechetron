import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TrustStrip from "@/components/TrustStrip";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";
import { stats } from "@/lib/data";

export const metadata = {
  title: "About Mech-E-Tron | AICRA District Coordinator | STEM Robotics India",
  description: "Mech-E-Tron is an AICRA District Coordinator, MSME registered, ISO certified STEM robotics education centre in Hyderabad and Chennai. Trained by IAF officers.",
  keywords: ["about Mech-E-Tron", "AICRA District Coordinator", "STEM robotics India", "IAF drone instructor", "robotics education Hyderabad"],
  alternates: { canonical: "https://mechetron.com/about" },
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
                <Image src="/images/classroom.webp" alt="Students building robots at Mech-E-Tron lab" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
             </div>
             <div className="absolute -bottom-6 -right-6 glass border-brand-blue/20 p-6 max-w-[200px] shadow-glow-sm">
                <div className="text-3xl font-display font-bold text-brand-blue mb-1">2026</div>
                <p className="text-sm font-medium text-brand-body leading-tight">Driving the future of robotics in India</p>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold text-brand-ink mb-6">Learn Robotics. Build Skills, Not Just Theory.</h2>
            <div className="prose prose-lg text-brand-muted leading-relaxed space-y-6">
              <p>
                Founded with a vision to bridge the gap between theoretical education and practical engineering, **Mech-ε-Tron** providing hands-on robotics and STEM education for school and college students across South India.
              </p>
              <p>
                Based out of the **Osmania Technology Business Incubator (OTBI)** at Osmania University, we operate at the intersection of academia and industry. Our teaching staff includes experienced engineers and **retired Indian Air Force officers** who specialize in Drone technology and advanced avionics.
              </p>
              <p>
                We are proud to be an **MSME registered and ISO Certified** organization. As a District Coordinator for **AICRA**, we work towards institutional collaborations to bring international standards of robotics to every classroom.
              </p>
              <p>
                Our students don't just study from books; they build real robots, win National WRC competitions, and develop career-ready skills in AI, IoT, and Embedded Systems.
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

      {/* Affiliations & Certifications */}
      <section className="py-16 bg-brand-surface border-y border-brand-blue/5">
        <div className="container-x">
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 font-display font-black text-2xl text-brand-ink">AICRA</div>
            <div className="flex items-center gap-2 font-display font-black text-2xl text-brand-ink text-blue-600">Skill India</div>
            <div className="flex items-center gap-2 font-display font-black text-2xl text-brand-ink text-green-600">MSME</div>
            <div className="flex items-center gap-2 font-display font-black text-2xl text-brand-ink">ISO 9001:2015</div>
            <div className="flex items-center gap-2 font-display font-black text-2xl text-brand-ink text-orange-600">DGCA</div>
          </div>
        </div>
      </section>

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
