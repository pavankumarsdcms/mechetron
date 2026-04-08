import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TrustStrip from "@/components/TrustStrip";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Robotics Labs for Schools | Mech-E-Tron",
  description: "Turnkey robotics lab setup, curriculum, and teacher training for schools in India. Partner with Mech-E-Tron to bring STEM innovation to your campus.",
};

export default function SchoolsPage() {
  return (
    <main>
      <PageHero
        title="For Schools & Institutions"
        subtitle="Bring world-class robotics and STEM education to your campus with our turnkey solutions."
        badge="Institutional Partnerships"
      />

      <TrustStrip />

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-brand-ink mb-6">Empower Your Students with 21st Century Skills</h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              Mech-E-Tron partners with school administrators to integrate robotics into the regular curriculum. We provide everything needed to run a successful STEM program—from equipment to expert trainers.
            </p>
            <div className="space-y-6">
               {[
                 { title: "Turnkey Lab Setup", body: "We design and equip your on-campus robotics lab with industrial tools, kits, and safety equipment." },
                 { title: "CBSE/ICSE Aligned Curriculum", body: "Our lesson plans are mapped to national boards, ensuring students learn core concepts through projects." },
                 { title: "Teacher Training (AoT)", body: "We train your faculty to deliver STEM lessons effectively, ensuring program sustainability." },
                 { title: "Competition Coaching", body: "Our mentors prepare your school teams for WRO, RoboLeague, and national robotics events." },
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                       <h4 className="font-display font-bold text-brand-ink">{item.title}</h4>
                       <p className="text-sm text-brand-muted mt-1">{item.body}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-xl2 overflow-hidden border border-brand-blue/10 shadow-glow">
                <img src="/images/stem-school.webp" alt="School Robotics Lab" className="object-cover w-full h-full" />
             </div>
             <div className="absolute -top-6 -left-6 bg-brand-blue text-white p-6 rounded-xl shadow-glow">
                <div className="text-3xl font-display font-bold">120+</div>
                <div className="text-xs uppercase tracking-widest text-white/70 mt-1">School Partners</div>
             </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-surface">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-brand-ink mb-4">Program Structure</h2>
            <p className="text-brand-muted">Flexible options to suit your school's schedule and budget.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: "Workshop Mode", duration: "1–5 Days", ideal: "Annual fests / STEM camps", details: ["Intensive hands-on training", "Kit for every student", "Final project demo", "Certificates for all"] },
              { type: "Semester Mode", duration: "16–20 Weeks", ideal: "Regular school timing", details: ["Weekly 2-hour sessions", "Project-based curriculum", "Internal assessments", "Competition readiness"] },
              { type: "Annual Mode", duration: "Full Academic Year", ideal: "Integrated lab program", details: ["Continuous mentor support", "Lab maintenance", "Teacher certification", "National event prep"] },
            ].map((pkg, i) => (
              <div key={i} className="card border-brand-blue/10 hover:border-brand-blue/30 transition-all p-8">
                 <div className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-2">{pkg.duration}</div>
                 <h3 className="text-2xl font-display font-bold text-brand-ink mb-2">{pkg.type}</h3>
                 <p className="text-xs text-brand-muted mb-6">Ideal for: {pkg.ideal}</p>
                 <ul className="space-y-3">
                    {pkg.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-brand-body">
                         <span className="text-brand-blue">●</span> {d}
                      </li>
                    ))}
                 </ul>
              </div>
            ))}
         </div>
      </Section>

      <CTABanner 
        title="Request a proposal for your school"
        subtitle="Our institutional team will visit your campus for a feasibility study and demo session. Let's build a STEM lab your students will love."
        cta1={{ label: "Request Proposal", href: "/contact" }}
        cta2={{ label: "WhatsApp Chat", href: "https://wa.me/918148435256" }}
      />
    </main>
  );
}
