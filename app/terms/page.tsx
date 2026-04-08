import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata = {
  title: "Terms & Conditions | Mech-E-Tron",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero title="Terms & Conditions" subtitle="The legal framework for using our services." />
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto prose prose-brand">
          <p className="text-brand-muted">Last updated: April 2026</p>
          <h3 className="text-brand-ink">1. Course Enrollment</h3>
          <p>Enrollment in courses is subject to availability. Fees must be paid as per the agreed schedule (₹1,600 per course or as discussed).</p>
          <h3 className="text-brand-ink">2. Lab Safety</h3>
          <p>Students visiting our lab at OTBI, Osmania University must follow all safety protocols and mentor instructions when handling 3D printers, laser cutters, and electronics.</p>
          <h3 className="text-brand-ink">3. Intellectual Property</h3>
          <p>The curriculum and projects developed by Mech-E-Tron are our intellectual property. Students are encouraged to use what they learn for their personal projects and growth.</p>
        </div>
      </Section>
    </main>
  );
}
