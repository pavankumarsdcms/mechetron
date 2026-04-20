import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Section from "@/components/Section";
import CourseCard from "@/components/CourseCard";
import CTABanner from "@/components/CTABanner";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { courses, services, galleryItems, technologies, whyChoose } from "@/lib/data";
import { TechCloud } from "@/components/ui/logo-cloud-2";

/* ─── Metadata ─────────────────────────────────────────── */
export const metadata = {
  title: "Robotics Courses in Chennai & Hyderabad | AICRA Certified | Mech-E-Tron",
  description:
    "Hands-on robotics and STEM courses in Chennai, Hyderabad and Tirupati. AICRA certified. Arduino, drones, AI and IoT. Book your free demo today.",
  keywords: [
    "robotics course Chennai", "robotics course Hyderabad", "robotics course Tirupati",
    "arduino training India", "STEM summer camp Chennai", "robotics classes near me",
    "STEM training school students", "drone training India DGCA", "AICRA robotics",
  ],
  openGraph: {
    title: "Robotics Courses in Chennai & Hyderabad | AICRA Certified | Mech-E-Tron",
    description: "Hands-on robotics and STEM courses in Chennai, Hyderabad and Tirupati. AICRA certified. Arduino, drones, AI and IoT. Book your free demo today.",
    url: "https://mechetron.com",
  },
  alternates: { canonical: "https://mechetron.com" },
};

export default function HomePage() {
  return (
    <>
      {/* ① Hero */}
      <Hero />

      {/* ② Trust Strip */}
      <TrustStrip />

      {/* ②a Partners & Alliances Strip */}
      <section className="py-8 bg-brand-tint border-y border-brand-blue/10">
        <div className="container-x">
          <p className="text-center text-[11px] font-display font-bold uppercase tracking-[0.18em] text-brand-muted mb-6">
            Official Partnerships &amp; Alliances
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            {/* AICRA */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-20 h-14 bg-white rounded-xl border border-brand-blue/30 shadow-sm flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/logos/aicra.png"
                  alt="AICRA — All India Council for Robotics & Automation"
                  width={64}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-[10px] font-semibold text-brand-muted text-center leading-tight">AICRA<br />Alliance Partner</span>
            </div>
            {/* Android Robo */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-20 h-14 bg-white rounded-xl border border-brand-blue/15 shadow-sm flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/logos/andriod%20robo.png"
                  alt="Android Robo — Training Partner"
                  width={64}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-[10px] font-semibold text-brand-muted text-center leading-tight">Android Robo<br />Training Partner</span>
            </div>
            {/* MSME */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-20 h-14 bg-white rounded-xl border border-brand-blue/15 shadow-sm flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/logos/msme.jpeg"
                  alt="MSME Registered"
                  width={64}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-[10px] font-semibold text-brand-muted text-center leading-tight">Govt. of India<br />MSME</span>
            </div>
            {/* TechnoXian */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-20 h-14 bg-white rounded-xl border border-brand-blue/15 shadow-sm flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/logos/worlds%20biggest%20robotics%20championship.jpeg"
                  alt="Techno Xian"
                  width={64}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-[10px] font-semibold text-brand-muted text-center leading-tight">World Robotics<br />Championship</span>
            </div>
            {/* Skill India */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-20 h-14 bg-white rounded-xl border border-[#f97316]/20 shadow-sm flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/logos/Skill-India-Logo.png"
                  alt="Skill India"
                  width={64}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-[10px] font-semibold text-brand-muted text-center leading-tight">Certified<br />Partner</span>
            </div>
            {/* Abira World */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-20 h-14 bg-white rounded-xl border border-brand-blue/15 shadow-sm flex items-center justify-center overflow-hidden p-2">
                <Image
                  src="/images/abira_logo.png"
                  alt="Abira World"
                  width={64}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-[10px] font-semibold text-brand-muted text-center leading-tight">Brand Partner<br />Abira World</span>
            </div>
          </div>
          <p className="text-center text-xs text-brand-muted mt-5 max-w-lg mx-auto leading-relaxed">
            MECH-ε-TRON™ is an official implementation partner of AICRA — All India Council for Robotics &amp; Automation, operating India STEM Labs across Hyderabad &amp; Secunderabad.
          </p>
        </div>
      </section>

      {/* ②aa Recognition & Achievement */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow mb-3">Industry Recognition</div>
            <h2 className="text-h2 font-display font-bold text-brand-ink">
              Excellence acknowledged @ Startup Mahakumbh 2024
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              We are proud to be recognized at India's largest startup showcase, validation of our commitment to revolutionizing STEM education through hands-on engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white p-2 bg-white ring-1 ring-brand-blue/10 group cursor-zoom-in">
                <Image
                  src="/images/certificate.jpg"
                  alt="Startup Dangal Mahakumbh 2024 Certificate of Appreciation"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/20 to-transparent pointer-events-none" />
              </div>
              <p className="text-center text-[10px] text-brand-muted mt-4 font-medium italic">
                Official Certificate presented by AICRA & Ministry of Electronics & IT (MeitY)
              </p>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="card-glass-white p-8 border-brand-blue/10">
                <h3 className="text-xl font-display font-bold text-brand-ink mb-4">Certificate of Appreciation</h3>
                <p className="text-sm text-brand-body leading-relaxed mb-6">
                  Presented to <span className="font-bold underline decoration-brand-blue/30 text-brand-ink">Hobbeebob Art & Craft</span> (A Mech-E-Tron Initiative) for outstanding contribution as an exhibitor at <span className="font-bold text-brand-blue">Startup Mahakumbh 4.0</span>. Held at Yashobhoomi, New Delhi, this event brought together the top 1% of Indian innovators.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="px-3 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-xl text-[10px] font-bold uppercase tracking-wider text-brand-blue text-center">
                    Startup India<br />Verified
                  </div>
                  <div className="px-3 py-2 bg-brand-orange/5 border border-brand-orange/10 rounded-xl text-[10px] font-bold uppercase tracking-wider text-brand-orange text-center">
                    AICRA<br />Recognized
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-5 rounded-3xl bg-brand-surface border border-brand-blue/5">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center p-2 flex-shrink-0 animate-pulse">
                  <Image src="/logos/aicra.png" alt="AICRA" width={48} height={48} className="object-contain" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-muted uppercase mb-1">Affiliation</div>
                  <div className="text-sm font-semibold text-brand-ink leading-snug">All India Council for Robotics & Automation (AICRA)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ②b Summer Camp Highlight */}
      <section className="py-20 bg-brand-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-blue/5 skew-x-12 translate-x-20" />
        <div className="container-x relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 px-3 py-1 text-xs font-bold text-brand-orange uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                Featured: Summer 2026
              </div>
              <h2 className="text-h2 font-display font-bold text-brand-ink mb-6 leading-tight">
                Robotics Summer Camp<br />
                <span className="gradient-text">Starts May 1st</span>
              </h2>
              <p className="text-brand-body text-lg mb-8 leading-relaxed max-w-xl">
                The ultimate hands-on robotics experience for students in Chennai, Hyderabad, and Tirupati. Build your own working robot and get certified this summer.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🏎️", text: "Build a working robot" },
                  { icon: "🎓", text: "Get certified" },
                  { icon: "📍", text: "3 Major Cities" },
                  { icon: "💰", text: "Just ₹2,299" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-semibold text-brand-ink">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/summer-camp" className="btn-primary shadow-glow">
                View Camp Details →
              </Link>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-brand-blue/10 rounded-card rotate-3 group-hover:rotate-1 transition-transform" />
              <div className="relative aspect-video rounded-card overflow-hidden border border-brand-blue/10 shadow-xl2">
                <Image
                  src="/images/robotics-lab.webp"
                  alt="Summer Camp Robotics"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent" />
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 glass p-6 border-brand-blue/20 shadow-glow-sm">
                <div className="text-brand-blue font-display font-bold text-2xl">40 Seats</div>
                <div className="text-xs uppercase font-bold text-brand-muted">Per Location</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ Programs */}
      <Section
        eyebrow="Programs"
        title="Courses built around real engineering"
        subtitle="Project-first learning paths designed by working roboticists and educators."
        center
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <CourseCard
              key={c.slug}
              title={c.title}
              short={c.short}
              image={c.image}
              href={`/courses/${c.slug}`}
              icon={c.icon}
              tag={c.tag}
              category="Course"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/courses" className="btn-outline">
            View All Programs →
          </Link>
        </div>
      </Section>

      {/* ③b STEM Modules Teaser */}
      <section className="py-16 bg-brand-ink relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="glow-orb w-96 h-96 bg-brand-blue/15 -top-20 -right-20" />
        <div className="container-x relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow-white mb-3">AICRA Curriculum</div>
            <h2 className="text-h2 font-display font-bold text-white mb-4">
              Grade-wise STEM Project Modules
            </h2>
            <p className="text-white/55 leading-relaxed mb-6">
              Official AICRA Curriculum — From Grade 1 to Grade 12. Structured hands-on project modules covering Robotics, IoT, AI, Machine Learning, Drones, 3D Printing, AR/VR, and Industry Automation — designed for schools and inter-colleges.
            </p>

            {/* Grade badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {["Grade 1–2", "Grade 3–4", "Grade 5–6", "Grade 7–8", "Grade 9–10", "Grade 11–12"].map((g) => (
                <span key={g} className="inline-flex items-center rounded-pill bg-brand-blue/20 text-brand-accent border border-brand-blue/30 px-3 py-1 text-xs font-semibold">
                  {g}
                </span>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["Robotics", "IoT", "AI", "ML", "Drones", "3D Printing", "AR/VR", "Industry Automation"].map((t) => (
                <span key={t} className="inline-flex items-center rounded-pill bg-white/10 text-white/70 border border-white/15 px-3 py-1 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>

            <Link href="/stem-modules" className="btn-primary shadow-glow">
              Explore All Modules →
            </Link>
          </div>
        </div>
      </section>

      {/* ④ Hands-On Learning Showcase */}
      <section className="py-20 bg-brand-surface">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="eyebrow mb-4">Hands-On Learning</div>
              <h2 className="text-h2 font-display font-bold text-brand-ink">
                Less theory.<br />More building.
              </h2>
              <p className="mt-5 text-brand-muted leading-relaxed">
                Every Mech-E-Tron student leaves with a portfolio of working hardware they
                built and coded themselves — from line followers to autonomous drones.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Industry-grade robotics kits included",
                  "1:6 mentor-to-student ratio",
                  "Capstone project & certification",
                  "Competition coaching support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-body">
                    <span className="w-5 h-5 rounded-full bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3 5-6" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/courses" className="btn-primary mt-8 inline-flex shadow-glow-sm">
                Browse Programs
              </Link>
            </div>

            {/* 2×2 image grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { img: "/images/robotics-lab.webp", label: "Robotics Lab" },
                { img: "/images/drone-workshop.webp", label: "Drone Bay" },
                { img: "/images/3d-printing.webp", label: "3D Print Studio" },
                { img: "/images/arduino-kit.webp", label: "Electronics Bench" },
              ].map((b) => (
                <div key={b.label} className="relative aspect-square rounded-card overflow-hidden group">
                  <Image
                    src={b.img}
                    alt={b.label}
                    fill
                    sizes="(max-width:1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-display font-semibold">
                    {b.label}
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-brand-orange/40 rounded-tr opacity-0 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ For Schools */}
      <section className="py-20 bg-brand-ink relative overflow-hidden" data-animate>
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="glow-orb w-96 h-96 bg-brand-blue/20 -right-20 top-1/2 -translate-y-1/2" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow-white mb-3">For Institutions</div>
            <h2 className="text-h2 font-display font-bold text-white">
              Robotics labs &amp; STEM programs<br />for schools
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed">
              Turnkey lab setup, curriculum, teacher training and competition support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "🏗️", title: "Lab Setup", body: "Complete robotics lab with kits, benches and tools — installed and ready to use." },
              { icon: "👩‍🏫", title: "Teacher Training", body: "Certified training so your faculty can run robotics independently." },
              { icon: "🏆", title: "Competition Coaching", body: "Coaching and mentorship for national and state-level robotics events." },
            ].map((item) => (
              <div key={item.title} className="card-glass-hover flex flex-col gap-4 p-6">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="font-display font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/schools" className="btn-primary shadow-glow">
              Partner With Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ⑥ Services */}
      <Section
        eyebrow="Services"
        title="Maker services & engineering support"
        subtitle="From prototype to product — 3D printing, laser cutting, drones and project guidance."
        center
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <CourseCard
              key={s.slug}
              title={s.title}
              short={s.short}
              image={s.image}
              icon={s.icon}
              category={s.category}
              href={`/services/${s.slug}`}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" className="btn-outline">
            Explore All Services →
          </Link>
        </div>
      </Section>

      {/* ⑥c Hobeebob 3D Wooden Kits - The Long Section */}
      <section className="py-24 bg-[#fdf8f2] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-amber-100/30 skew-x-12 translate-x-20 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div data-animate>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-200 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Hobeebob Original Series
              </div>
              <h2 className="text-h2 font-display font-bold text-brand-ink mb-6">
                3D Wooden Model Kits<br />
                <span className="text-amber-700">Build · Create · Inspire</span>
              </h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                Experience the magic of mechanical engineering with our premium laser-cut wooden vehicle kits. Designed for hobbyists, collectors, and young innovators who love to build with their hands.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: "🚫", title: "No Glue Needed", desc: "Precision interlock parts" },
                  { icon: "🌱", title: "Eco-Friendly", desc: "100% Recyclable natural wood" },
                  { icon: "🎓", title: "Educational", desc: "Learn mechanical principles" },
                  { icon: "🧒", title: "All Ages", desc: "Fun for families & hobbyists" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-brand-ink text-sm">{item.title}</h4>
                      <p className="text-brand-muted text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/wooden-diy" className="btn-primary-amber shadow-glow-amber">
                  Explore Collection →
                </Link>
                <div className="flex items-center gap-3 px-5 py-3 rounded-tag border border-amber-200 bg-white shadow-sm">
                  <div className="text-xs font-bold text-brand-ink uppercase">Tag Us</div>
                  <div className="text-amber-700 font-display font-bold text-sm">#HOBEEBOB</div>
                </div>
              </div>
            </div>

            <div className="relative" data-animate data-delay="200">
              <div className="absolute inset-0 bg-amber-200/50 rounded-[2.5rem] rotate-3 -z-10" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/images/hobeebob-stall.jpg"
                  alt="Hobeebob Showcase at Startup Mahakumbh 2024"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-8 -right-8 glass-amber p-6 border-amber-200 shadow-glow-amber-sm backdrop-blur-md">
                <div className="text-amber-800 font-display font-bold text-2xl">100%</div>
                <div className="text-[10px] uppercase font-bold text-amber-900/60 leading-tight">Sustainable<br />Natural Wood</div>
              </div>
            </div>
          </div>

          {/* Detailed Features Grid (Mentioning "all things" from image) */}
          {/* <div className="grid md:grid-cols-4 gap-8" data-animate data-delay="300">
            <div className="md:col-span-1 space-y-6">
               <h4 className="font-display font-bold text-brand-ink text-lg border-b border-amber-200 pb-2 flex items-center gap-2">
                 <span>🚙</span> The Model Series
               </h4>
               <ul className="space-y-4">
                 {["Adventurer", "Off-Roader", "Defender", "Classic Jeep"].map((m) => (
                   <li key={m} className="flex items-center gap-3 group">
                     <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
                     <span className="font-semibold text-brand-muted group-hover:text-amber-700 transition-colors uppercase tracking-wider text-xs">{m}</span>
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="md:col-span-2 bg-white/60 rounded-[2rem] p-8 border border-amber-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.45L18.85 19H5.15L12 5.45z"/></svg>
               </div>
               <h4 className="font-display font-bold text-brand-ink text-lg mb-8 text-center uppercase tracking-widest">Four Simple Steps to Build</h4>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    { step: 1, title: "Pop Out", desc: "Laser-cut pieces" },
                    { step: 2, title: "Assemble", desc: "Manual interlocking" },
                    { step: 3, title: "Add Detail", desc: "Functional wheels" },
                    { step: 4, title: "Complete", desc: "Showcase ready" },
                  ].map((s) => (
                    <div key={s.step} className="text-center group">
                      <div className="relative w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all group-hover:rotate-12">
                        {s.step}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white border border-amber-200 rounded-full" />
                      </div>
                      <h5 className="font-bold text-[11px] text-brand-ink uppercase mb-1 tracking-wider">{s.title}</h5>
                      <p className="text-[10px] text-brand-muted leading-tight">{s.desc}</p>
                    </div>
                  ))}
               </div>
               <div className="mt-8 pt-6 border-t border-amber-100 text-center">
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.2em] animate-pulse">Scan to watch video tutorial</span>
               </div>
            </div>

            <div className="md:col-span-1 flex flex-col justify-center text-center p-8 bg-amber-700 rounded-[2rem] text-white shadow-xl hover:rotate-1 transition-transform">
               <div className="text-5xl mb-6 drop-shadow-lg">🎁</div>
               <h4 className="font-display font-bold text-xl mb-3 tracking-tight">The Perfect Gift</h4>
               <p className="text-xs text-white/70 leading-relaxed mb-6">Birthdays · Holidays<br/>Corporate Gifting<br/>Special Occasions</p>
               <div className="mt-auto pt-6 border-t border-white/20">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-50 mb-3">Build Quality</div>
                  <div className="flex flex-col gap-2 text-[10px] font-bold italic">
                    <div className="flex justify-between border-b border-white/10 pb-1"><span>✨ Finish</span><span className="text-amber-300">Smooth</span></div>
                    <div className="flex justify-between border-b border-white/10 pb-1"><span>🛠️ Cut</span><span className="text-amber-300">Precision</span></div>
                    <div className="flex justify-between"><span>⌛ Lifetime</span><span className="text-amber-300">Built to last</span></div>
                  </div>
               </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* ⑦ Why Choose Mech-E-Tron */}
      <section className="py-20 bg-brand-ink relative overflow-hidden" data-animate>
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="glow-orb w-[500px] h-[500px] bg-brand-orange/10 top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow-white mb-3">Why Choose Us</div>
            <h2 className="text-h2 font-display font-bold text-white">
              We don&apos;t just teach —<br />we build thinkers & creators
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed">
              Everything we do is designed to produce engineers who can build real solutions,
              not just answer exam questions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="card-glass-hover p-6 flex flex-col gap-4 text-center lg:text-left">
                <div className="text-3xl lg:mx-0 mx-auto">{item.icon}</div>
                <h3 className="font-display font-semibold text-white text-sm leading-snug">{item.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/about" className="btn-dark">
              Learn About Our Approach →
            </Link>
          </div>
        </div>
      </section>

      {/* ⑦b Technologies Taught */}
      <section className="py-24 bg-white relative overflow-hidden" data-animate>
        {/* Decorative background for the tech section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-3">Tech Stack</div>
            <h2 className="text-h2 font-display font-bold text-brand-ink">
              Technologies we teach
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Industry-relevant tools and languages — from your first Arduino sketch to FPGA design.
            </p>
          </div>

          <TechCloud items={technologies} />

          <div className="mt-16 text-center">
            <p className="text-sm text-brand-muted max-w-lg mx-auto italic">
              Our curriculum is constantly updated to match global engineering trends and industry demands.
            </p>
          </div>
        </div>
      </section>

      {/* ⑧ Student Gallery preview */}
      <section className="py-20 bg-white" data-animate>
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-3">Student Projects</div>
            <h2 className="text-h2 font-display font-bold text-brand-ink">Built by our students</h2>
            <p className="mt-4 text-brand-muted">Real projects, real innovation, real impact.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.slice(0, 4).map((item) => (
              <div key={item.title} className="relative aspect-square rounded-card overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-white font-display font-semibold text-xs">{item.title}</div>
                  <div className="text-white/50 text-[10px]">{item.student}</div>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="badge-dark text-[10px]">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/gallery" className="btn-outline">
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ⑧ Testimonials */}
      <Section
        eyebrow="Voices"
        title="What students, parents & schools say"
        subtitle="Real stories from our community of 10,000+ learners."
        center
      >
        <TestimonialCarousel />
      </Section>

      {/* ⑨ Final CTA */}
      <CTABanner
        title="Ready to start your robotics journey?"
        subtitle="Whether you're a student, a school, or an engineering aspirant — Mech-E-Tron gives you the tools, training, and guidance to build the future."
      />
    </>
  );
}
