import { courses } from "@/lib/data";
import PageHero from "@/components/PageHero";
import CourseCard from "@/components/CourseCard";
import Section from "@/components/Section";
import TrustStrip from "@/components/TrustStrip";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Robotics & STEM Courses in Chennai, Hyderabad, Tirupati | Mech-E-Tron",
  description: "Explore hands-on robotics, Arduino, AI & IoT and drone courses for school and college students. Build real projects. AICRA certified. From ₹2,299. Enroll today.",
  keywords: ["robotics course Chennai", "robotics course Hyderabad", "arduino course India", "STEM training students", "drone workshop India"],
  alternates: { canonical: "https://mechetron.com/courses" },
};

export default function CoursesPage() {
  return (
    <main>
      <PageHero
        title="Our Courses"
        subtitle="Hands-on training designed by engineers for the next generation of innovators."
        badge="Learn by Doing"
      />

      <TrustStrip />

      <Section id="course-list" className="bg-brand-surface">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.slug}
              title={course.title}
              short={course.short}
              image={course.image}
              href={`/courses/${course.slug}`}
              category={course.category}
              tag={course.tag}
              icon={course.icon}
            />
          ))}
        </div>
      </Section>

      <CTABanner 
        title="Not sure which course to pick?"
        subtitle="Book a free counseling session or visit our lab at OTBI, Osmania University to see our robots in action."
        cta1={{ label: "Book Free Demo", href: "/contact" }}
        cta2={{ label: "WhatsApp Us", href: "https://wa.me/918148435256" }}
      />
    </main>
  );
}
