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
                        <path d="M1 4l3 3 5-6" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
