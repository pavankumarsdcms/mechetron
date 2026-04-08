import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata = {
  title: "Privacy Policy | Mech-E-Tron",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero title="Privacy Policy" subtitle="How we handle your data at Mech-E-Tron." />
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto prose prose-brand">
          <p className="text-brand-muted">Last updated: April 2026</p>
          <h3 className="text-brand-ink">1. Information Collection</h3>
          <p>We collect information you provide directly to us, such as when you book a demo, enroll in a course, or contact us via WhatsApp.</p>
          <h3 className="text-brand-ink">2. User Data</h3>
          <p>We use your contact details solely for providing course updates, responding to inquiries, and improving our STEM services at OTBI Osmania University.</p>
          <h3 className="text-brand-ink">3. Third-Party Services</h3>
          <p>We may use third-party tools like Google Analytics to improve our website experience. We do not sell your personal data to advertisers.</p>
        </div>
      </Section>
    </main>
  );
}
