import Link from "next/link";
import { testimonials } from "@/lib/data";

export const metadata = {
  title: "Testimonials — What Our Students & Schools Say",
  description:
    "Real stories from students, parents and school partners about learning robotics and STEM at Mech-E-Tron.",
};

export default function TestimonialsPage() {
  const students = testimonials.filter((t) =>
    ["Student", "Beginner", "B.Tech", "Engineering"].some((kw) =>
      t.role.includes(kw)
    )
  );
  const parents = testimonials.filter((t) => t.role.includes("Parent"));
  const schools = testimonials.filter((t) =>
    ["School", "Principal"].some((kw) => t.role.includes(kw))
  );

  const groups = [
    { label: "Students", items: students.length ? students : testimonials.slice(0, 3) },
    { label: "Parents", items: parents.length ? parents : [] },
    { label: "Schools", items: schools.length ? schools : [] },
  ].filter((g) => g.items.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-brand-accent/20 blur-[120px]" />
        <div className="relative container-x py-20 max-w-3xl">
          <div className="badge-dark">Testimonials</div>
          <h1 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
            What our <span className="gradient-text">community says.</span>
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Real stories from students, parents and school partners who have
            experienced Mech-E-Tron's hands-on learning.
          </p>
        </div>
      </section>

      {/* All testimonials grouped */}
      {groups.map((group) => (
        <section key={group.label} className="py-16 first:pt-20">
          <div className="container-x">
            <div className="eyebrow mb-3">{group.label}</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((t) => (
                <div key={t.name} className="card hover-lift flex flex-col">
                  <div className="flex gap-0.5 text-brand-amber text-lg mb-4">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-sm text-brand-ink/80 leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-black/5">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-dark to-brand-accent grid place-items-center text-white text-sm font-bold flex-shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-brand-ink/55">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-brand-surface">
        <div className="container-x text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">Join the Mech-E-Tron family</h2>
          <p className="mt-4 text-brand-ink/70 max-w-md mx-auto">
            10,000+ students, 120+ schools — and your story could be next.
          </p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex">
            Book a Free Demo →
          </Link>
        </div>
      </section>
    </>
  );
}
