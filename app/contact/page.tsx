import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/lib/data";

export const metadata = {
  title: "Contact Us | Mech-E-Tron Robotics Hyderabad",
  description: "Visit our robotics lab at OTBI, Osmania University. Contact us for course inquiries, prototyping services, or school partnerships.",
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
            <h2 className="text-3xl font-display font-bold text-brand-ink mb-8">Visit Our Innovation Lab</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-xl border border-brand-blue/10">📍</div>
                 <div>
                    <h4 className="font-display font-bold text-brand-ink">Address</h4>
                    <p className="text-brand-muted mt-1 leading-relaxed">
                      {address.line1}<br />
                      {address.line2}<br />
                      {address.line3}<br />
                      Pin code: {address.pincode}
                    </p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-xl border border-brand-blue/10">📞</div>
                 <div>
                    <h4 className="font-display font-bold text-brand-ink">Phone & WhatsApp</h4>
                    <p className="text-brand-muted mt-1">
                      Main: <a href={`tel:${phone}`} className="text-brand-blue font-semibold hover:underline">{phone}</a><br />
                      Support: <a href={`https://wa.me/${whatsapp}`} className="text-brand-blue font-semibold hover:underline">WhatsApp Support</a>
                    </p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-xl border border-brand-blue/10">✉️</div>
                 <div>
                    <h4 className="font-display font-bold text-brand-ink">Email</h4>
                    <p className="text-brand-muted mt-1">
                      <a href={`mailto:${email}`} className="text-brand-blue font-semibold hover:underline">{email}</a><br />
                      For Partnerships: <a href="mailto:partners@mechetron.com" className="text-brand-blue font-semibold hover:underline">partners@mechetron.com</a>
                    </p>
                 </div>
              </div>
            </div>

            {/* Embed Map Placeholder / Link */}
            <div className="mt-12 p-1 rounded-xl2 bg-brand-surface border border-brand-blue/10 overflow-hidden">
               <div className="aspect-video bg-gray-200 flex items-center justify-center relative grayscale hover:grayscale-0 transition-all duration-500">
                  <p className="text-brand-muted text-sm font-medium z-10">Google Maps Integration</p>
                  <a 
                    href="https://maps.google.com/?q=Osmania+Technology+Business+Incubator+Hyderabad" 
                    target="_blank" 
                    className="absolute inset-0 z-20"
                    aria-label="View on Google Maps"
                  />
                  <img src="/images/osmania-university.webp" alt="Osmania University OTBI" className="absolute inset-0 w-full h-full object-cover opacity-50" />
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
