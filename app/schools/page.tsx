import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TrustStrip from "@/components/TrustStrip";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";

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
                <Image src="/images/stem-school.webp" alt="School Robotics Lab setup by Mech-E-Tron" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
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

      {/* ══════ ISL Extended Sections (Pages 6–9) ═════════════════ */}

      {/* ── Beyond Basic Learning — ISL Ecosystem ─────────────── */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow mb-3">ISL Ecosystem</div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-2">
              Beyond Basic Learning
            </h2>
            <p className="text-brand-blue font-semibold mb-4">Industry Focused Unique ISL Ecosystem</p>
            <p className="text-brand-muted leading-relaxed">
              The India STEM Lab ecosystem focuses on industry collaboration, fostering real-world skills, innovation, and practical experiences for students&apos; future careers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { number: "01", title: "Tech Solutions to Real-Life Problems", description: "Identifying regional and day-to-day challenges and finding technology-based solutions." },
              { number: "02", title: "Industry Focused Innovations", description: "Innovations in major sectors like Agriculture, Healthcare, and Aerospace." },
              { number: "03", title: "Industry Experts Guidance", description: "Apart from regular faculty, students interact directly with industry experts for mentorship and guidance." },
              { number: "04", title: "Data Repository for AI Development", description: "AICRA has developed a data repository accessible to all ISL learners for AI-based module development." },
              { number: "05", title: "Exposure to Industry and Investors", description: "Students showcase their projects at various platforms and competitions, gaining exposure to real investors." },
            ].map((pillar) => (
              <div key={pillar.number} className="card border-brand-blue/10 hover:border-brand-blue/30 transition-all p-6">
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-display font-bold text-sm mb-4">
                  {pillar.number}
                </div>
                <h3 className="font-display font-bold text-brand-ink mb-2">{pillar.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Quote callout */}
          <div className="bg-brand-tint border border-brand-blue/10 rounded-card p-8 lg:p-10 max-w-4xl mx-auto">
            <blockquote className="text-lg text-brand-body italic leading-relaxed text-center">
              &ldquo;ISL connects communities to address local challenges through innovative technologies. By fostering collaboration, we create prototypes and solutions that empower cities, driving sustainable development and enhancing quality of life.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Expert Backing — TGSC + Data Repository ────────────── */}
      <section className="py-20 bg-brand-surface">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow mb-3">Expert Backing</div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-2">
              Guidance by Industry Experts
            </h2>
            <p className="text-brand-blue font-semibold mb-4">Technology Governance Steering Committee (TGSC)</p>
            <p className="text-brand-muted leading-relaxed">
              AICRA takes help of industry and experts to identify and design projects for the area of development in STEM Labs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Stats */}
            <div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { number: "3500+", label: "Industry and academia members" },
                  { number: "1800+", label: "Technical Consultants at GRAPES" },
                  { number: "800+", label: "Individual researchers and professionals" },
                ].map((stat) => (
                  <div key={stat.label} className="card border-brand-blue/10 text-center p-6">
                    <div className="text-3xl font-display font-extrabold text-brand-blue mb-2">{stat.number}</div>
                    <div className="text-xs text-brand-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-brand-muted italic">
                Various Govt. Department officials engaged at state and central levels.
              </p>
            </div>

            {/* Right: Data Repository */}
            <div className="card border-brand-blue/10 p-8">
              <h3 className="font-display font-bold text-brand-ink text-xl mb-2">Data Repository &amp; Access</h3>
              <p className="text-brand-blue font-semibold text-sm mb-4">Empowering Insights Through Data Access</p>
              <p className="text-sm text-brand-muted mb-4 leading-relaxed">
                AICRA has set up a strong database server accessible to learners at India STEM Lab.
              </p>
              <ul className="space-y-3">
                {[
                  "Students may save various categories of data for AI-based module development",
                  "Students may access data for industry-based project development",
                ].map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-brand-body">
                    <span className="text-brand-blue flex-shrink-0">●</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Faculty Development ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow mb-3">Faculty Development</div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-2">
              Faculty Development Programs
            </h2>
            <p className="text-brand-blue font-semibold">Empowering Educators, Ensuring Excellence</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: body + schedule */}
            <div>
              <p className="text-brand-muted leading-relaxed mb-6">
                The faculty development program focuses on enhancing educators&apos; skills in STEM teaching and integration. By engaging with government regulations, the program ensures compliance and alignment with educational standards. Continuous professional development workshops and seminars empower faculty to adopt innovative teaching methods.
              </p>
              <div className="mb-4">
                <span className="text-sm font-semibold text-brand-ink mb-3 block">Schedule Options</span>
                <div className="flex flex-wrap gap-2">
                  {["Daily", "Alternate Days", "Weekly"].map((opt) => (
                    <span key={opt} className="badge-brand text-sm px-4 py-1.5">{opt}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: trainer card */}
            <div className="card border-brand-blue/10 p-8">
              <h3 className="font-display font-bold text-brand-ink text-lg mb-5">Expert Trainer Deployment</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="font-semibold text-brand-ink w-28 flex-shrink-0">Qualification</span>
                  <span className="text-brand-muted">B.Tech / MCA with 2–4 years of industry or academia experience</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-brand-ink w-28 flex-shrink-0">Languages</span>
                  <span className="text-brand-muted">English / Hindi / Regional Language</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-brand-ink w-28 flex-shrink-0">Certification</span>
                  <span className="text-brand-muted">Each trainer undergoes AICRA&apos;s Trainer Development Program</span>
                </div>
                <div className="border-t border-brand-blue/10 pt-4 space-y-3">
                  {[
                    { level: "Level 1", description: "Deployed on-site at the school for regular sessions" },
                    { level: "Level 2", description: "Expert trainers providing virtual and special sessions" },
                  ].map((l) => (
                    <div key={l.level} className="flex gap-3">
                      <span className="badge-brand text-xs px-2 py-0.5 flex-shrink-0">{l.level}</span>
                      <span className="text-brand-muted">{l.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Student Outcomes — Certification + Delegation ─────── */}
      <section className="py-20 bg-brand-surface">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow mb-3">Student Outcomes</div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink">
              Certify. Compete. Go Global.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certification card */}
            <div className="card border-brand-blue/10 p-8">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="font-display font-bold text-brand-ink text-xl mb-2">AICRA Certification</h3>
              <p className="text-brand-blue font-semibold text-sm mb-4">Empowering Futures with Certification</p>
              <p className="text-sm text-brand-muted leading-relaxed">
                Students participating in the India STEM Lab will receive certification from AICRA, validating their skills and knowledge in STEM disciplines. This certification enhances their educational credentials and prepares them for future career opportunities.
              </p>
            </div>

            {/* Delegation card */}
            <div className="card border-brand-blue/10 p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-display font-bold text-brand-ink text-xl mb-2">Global Student Delegation Program</h3>
              <p className="text-brand-blue font-semibold text-sm mb-4">Global Reach, Local Impact, Everywhere</p>
              <div className="text-5xl font-display font-extrabold text-brand-blue mb-3">40+</div>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                The India STEM Lab student delegation program enables selected students to visit international institutions, gaining insights into global advancements in STEM education. In return, international students visit India, fostering cross-cultural exchange and collaboration.
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                {[
                  "India", "Azerbaijan", "Algeria", "Afghanistan", "Bangladesh", "Bhutan",
                  "Brazil", "Botswana", "Canada", "Côte d'Ivoire", "Egypt", "Germany",
                  "Ghana", "Iran", "Iraq", "Kazakhstan", "Kenya", "Malaysia", "Mexico",
                  "Morocco", "Montenegro", "Mali", "Madagascar", "Mozambique", "Nepal",
                  "Nigeria", "Norway", "Oman", "Paraguay", "Philippines", "Puerto Rico",
                  "Russia", "South Africa", "Saudi Arabia", "Zimbabwe", "South Korea",
                  "Sri Lanka", "Tunisia", "Turkey", "Uzbekistan", "UAE", "Vietnam",
                  "Venezuela", "Zambia",
                ].map((country) => (
                  <span key={country} className="inline-flex items-center rounded-pill bg-brand-blue/5 text-brand-ink/70 border border-brand-blue/10 px-2.5 py-0.5 text-[11px] font-medium">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-brand-muted mt-8">
            Source: AICRA India STEM Lab Program. MechEtron is an authorized implementation partner.
          </p>
        </div>
      </section>

      {/* ── ISL Certificate Gallery ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="eyebrow mb-3">AICRA Certification</div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-2">
              India STEM Lab Certificates
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Students completing the ISL program receive official AICRA-recognized certificates. Below are sample certificate designs from the India STEM Lab program.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style.png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(1).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(2).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(3).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(4).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(5).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(6).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(7).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(8).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(9).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(10).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(11).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(12).png",
              "Robotics%20Certificate%20in%20Blue%20Orange%20Cartoon%20Robot%20Style%20(13).png",
            ].map((file, i) => (
              <div key={i} className="relative aspect-[1.414/1] rounded-lg overflow-hidden border border-brand-blue/10 shadow-card hover:shadow-glow-sm transition-all hover:scale-[1.02] bg-brand-tint">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/isl%20images/${file}`}
                  alt={`AICRA India STEM Lab Certificate design ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-brand-muted mt-6 italic">
            Source: AICRA India STEM Lab Program. MECH-ε-TRON™ is an authorized implementation partner.
          </p>
        </div>
      </section>

      <CTABanner
        title="Request a proposal for your school"
        subtitle="Our institutional team will visit your campus for a feasibility study and demo session. Let's build a STEM lab your students will love."
        cta1={{ label: "Request Proposal", href: "/contact" }}
        cta2={{ label: "WhatsApp Chat", href: "https://wa.me/918148435256" }}
      />
    </main>
  );
}
