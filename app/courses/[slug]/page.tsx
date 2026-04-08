import { courses, courseFAQs } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Section from "@/components/Section";
import Accordion from "@/components/Accordion";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return {};

  return {
    title: `${course.title} | Robotics Course in Hyderabad`,
    description: course.short,
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  return (
    <main>
      {/* Breadcrumb & Header */}
      <div className="bg-brand-ink pt-28 pb-16">
        <div className="container-x">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Courses", href: "/courses" },
              { label: course.title, href: "#", current: true },
            ]} 
          />
          
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-pill bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 text-xs font-semibold text-brand-blue uppercase tracking-wider mb-6">
                {course.category}
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                {course.title}
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
                {course.overview}
              </p>
              
              <div className="mt-10 flex flex-wrap gap-8 items-center border-t border-white/10 pt-8">
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Price</div>
                  <div className="text-xl font-bold text-white">{course.price}</div>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Duration</div>
                  <div className="text-xl font-bold text-white">{course.duration}</div>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Level</div>
                  <div className="text-xl font-bold text-white">{course.level}</div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href={`https://wa.me/918148435256?text=Hi%2C%20I%27m%20interested%20in%20the%20${course.title}%20course.`} className="btn-primary">
                  Enroll Now
                </a>
                <a href="/contact" className="btn-dark">
                  Book Free Demo
                </a>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl2 overflow-hidden border border-white/10 shadow-glow animate-fade-in-up animate-delay-200">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Curriculum & Details */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-ink mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-card bg-brand-surface border border-brand-blue/5 hover:border-brand-blue/20 transition-colors group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue font-bold flex items-center justify-center text-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <span className="text-brand-body font-medium pt-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-card bg-brand-ink text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[80px] -mr-32 -mt-32" />
              <h3 className="text-2xl font-display font-bold mb-6">Who is this for?</h3>
              <ul className="space-y-4">
                {course.audience.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Outcomes & Sticky Signup */}
          <div className="space-y-8">
            <div className="card-glass border border-brand-blue/20 bg-brand-blue/[0.02]">
              <h3 className="text-xl font-display font-bold text-brand-ink mb-6">Key Outcomes</h3>
              <ul className="space-y-4">
                {course.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-blue font-bold">🎯</span>
                    <span className="text-brand-body text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card bg-brand-surface border-brand-blue/20 p-6 flex flex-col gap-4">
              <div className="text-center">
                <div className="text-brand-muted text-xs uppercase tracking-widest mb-1">Batch Start</div>
                <div className="text-brand-ink font-bold">Every Weekend</div>
              </div>
              <hr className="border-brand-blue/10" />
              <div className="text-center">
                <div className="text-brand-muted text-xs uppercase tracking-widest mb-1">Timing</div>
                <div className="text-brand-ink font-bold">10 AM - 1 PM / 2 PM - 5 PM</div>
              </div>
              <a href={`https://wa.me/918148435256`} className="btn-primary w-full justify-center">
                Contact for Admission
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-brand-surface" title="Course FAQs">
        <div className="max-w-3xl mx-auto">
          <Accordion items={courseFAQs} />
        </div>
      </Section>

      <CTABanner 
        title="Still have questions?"
        subtitle="Call us at +91 8148435256 or visit our Osmania University lab for a free demo session."
        cta1={{ label: "Contact Us", href: "/contact" }}
        cta2={{ label: "WhatsApp Chat", href: "https://wa.me/918148435256" }}
      />
    </main>
  );
}
