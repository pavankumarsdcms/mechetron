import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/lib/data";

export const metadata = {
  title: "Contact Mech-E-Tron | Chennai 603002 | Hyderabad 500007 | Call 8148435246",
  description: "Reach Mech-E-Tron for robotics course enquiries in Chennai, Hyderabad or Tirupati. Call +91 81484 35246 or WhatsApp. Book a free demo today.",
  keywords: ["contact Mech-E-Tron", "robotics course enquiry", "Hyderabad robotics lab", "Chennai robotics center", "book robotics demo"],
  alternates: { canonical: "https://mechetron.com/contact" },
};

export default function ContactPage() {
  const { address, phone, email, whatsapp } = companyInfo;

  return (
    <main>
      <PageHero
        title="Get in Touch"
        subtitle="Visit our lab at Osmania University or shadow us on social media."
        badge="Contact Us"
      />

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-ink mb-8">Our Training Centers</h2>
            <div className="space-y-6">
              {companyInfo.locations.map((loc) => (
                <div key={loc.city} className="card-glass-white border border-brand-blue/10 p-6 flex gap-5 group hover:border-brand-blue/30 transition-all">
                   <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-xl group-hover:bg-brand-blue/10 transition-colors">📍</div>
                   <div className="flex-1">
                      <div className="flex justify-between items-start">
                         <h4 className="font-display font-bold text-brand-ink">{loc.city} Center</h4>
                         <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/5 px-2 py-0.5 rounded">Active</span>
                      </div>
                      <p className="text-brand-muted mt-2 text-sm leading-relaxed">
                        {loc.address}<br />
                        {loc.state} — {loc.pincode}
                      </p>
                      <a 
                        href={`https://maps.google.com/?q=Mech-e-tron+${loc.city}+${loc.address}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue mt-3 hover:underline"
                      >
                         <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="mt-0.5">
                            <path d="M12 2H2v10h10V2zM1 1h12v12H1V1z" fill="currentColor"/>
                            <path d="M7 4l3 3-3 3-1-1 2-2-2-2 1-1z" fill="currentColor"/>
                         </svg>
                         Get Directions
                      </a>
                   </div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-8">
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-xl border border-brand-blue/10">📞</div>
                 <div>
                    <h4 className="font-display font-bold text-brand-ink">Phone & WhatsApp</h4>
                    <p className="text-brand-muted mt-1 leading-relaxed">
                      Primary: <a href={`tel:${companyInfo.phone}`} className="text-brand-blue font-semibold hover:underline">{companyInfo.phone}</a><br />
                      Technical: <a href={`tel:${companyInfo.phone2}`} className="text-brand-blue font-semibold hover:underline">{companyInfo.phone2}</a><br />
                      Support: <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold hover:underline">WhatsApp Support</a>
                    </p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-xl border border-brand-blue/10">✉️</div>
                 <div>
                    <h4 className="font-display font-bold text-brand-ink">Email</h4>
                    <p className="text-brand-muted mt-1">
                      <a href={`mailto:${companyInfo.email}`} className="text-brand-blue font-semibold hover:underline">{companyInfo.email}</a><br />
                      Technical support handled manually within a few hours.
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card shadow-glow-sm border-brand-blue/20 p-8 lg:p-10">
            <h3 className="text-2xl font-display font-bold text-brand-ink mb-2">Send us a Message</h3>
            <p className="text-brand-muted mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section className="bg-brand-surface border-t border-brand-blue/5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-brand-ink mb-6">Lab Working Hours</h2>
          <div className="grid sm:grid-cols-2 gap-4">
             <div className="p-6 rounded-xl bg-white border border-brand-blue/10">
                <p className="font-display font-bold text-brand-blue mb-1">Weekdays</p>
                <p className="text-brand-body">9:00 AM — 6:00 PM</p>
             </div>
             <div className="p-6 rounded-xl bg-white border border-brand-blue/10">
                <p className="font-display font-bold text-brand-blue mb-1">Weekends</p>
                <p className="text-brand-body">10:00 AM — 5:00 PM</p>
             </div>
          </div>
          <p className="mt-8 text-brand-muted italic text-sm">Students are advised to book a slot before visiting on weekends to ensure mentor availability.</p>
        </div>
      </Section>
    </main>
  );
}
