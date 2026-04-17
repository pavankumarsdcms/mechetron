import { summerCamp, companyInfo } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";
import SummerCampForm from "@/components/SummerCampForm";
import Link from "next/link";

export const metadata = {
  title: "Robotics Summer Camp 2026 | Grade 3–9 | Free Kit | Chennai & Hyderabad",
  description: "15-day robotics summer camp for Grade 3–9. Free robotic kit included. AICRA certificate. Only ₹2,299. 20 seats per batch in Chennai & Hyderabad. Register now.",
  keywords: ["robotics summer camp Chennai", "STEM summer camp Hyderabad", "robotics camp for kids India 2026", "summer camp Tirupati", "AICRA certificate summer camp"],
  alternates: { canonical: "https://mechetron.com/summer-camp" },
  openGraph: {
    title: "Robotics Summer Camp 2026 | Grade 3–9 | Free Kit | Chennai & Hyderabad",
    description: "15-day robotics summer camp for Grade 3–9. Free robotic kit included. AICRA certificate. Only ₹2,299. 20 seats per batch. Register now.",
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Mech-E-Tron Robotics Summer Camp 2026",
  startDate: "2026-05-01",
  endDate: "2026-06-30",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: [
    { "@type": "Place", name: "Mech-E-Tron Chennai", address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", postalCode: "603002", addressCountry: "IN" } },
    { "@type": "Place", name: "Mech-E-Tron Hyderabad", address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", postalCode: "500007", addressCountry: "IN" } },
  ],
  offers: { "@type": "Offer", price: "2299", priceCurrency: "INR", availability: "https://schema.org/LimitedAvailability", url: "https://mechetron.com/summer-camp" },
  organizer: { "@type": "Organization", name: "Mech-E-Tron", url: "https://mechetron.com" },
  description: "15-day hands-on robotics summer camp for Grade 3-9. Free robotic kit, AICRA certificate. Available in Chennai and Hyderabad.",
  image: "https://mechetron.com/images/og-image.jpg",
};

export default function SummerCampPage() {
  return (
    <main className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <PageHero
        title="Robotics Summer Camp 2026"
        subtitle="Turn your summer into an engineering adventure. Build your own working robot from scratch!"
        badge="Registration Open"
      />

      {/* Stats/Quick Info */}
      <section className="py-12 bg-brand-ink border-y border-white/10">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Duration", value: summerCamp.duration },
              { label: "Pricing", value: summerCamp.price },
              { label: "Daily Timings", value: "3 Hours / Day" },
              { label: "Outcome", value: "Built Robot + Cert" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-brand-blue font-display font-bold text-2xl mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-4">Summer 2026</div>
            <h2 className="text-h2 font-display font-bold text-brand-ink leading-tight">
              Hands-on robotics for the next generation of engineers.
            </h2>
            <p className="mt-6 text-brand-muted leading-relaxed">
              Our summer camp is designed for school and college students who want to build real working models instead of just theory. We provide all hardware, tools, and personalized guidance from expert mentors including retired Indian Air Force officers.
            </p>
            
            <ul className="mt-8 space-y-4">
              {summerCamp.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-brand-body font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`https://wa.me/${companyInfo.whatsapp}?text=Hi, I want to register for the Summer Camp!`} className="btn-primary shadow-glow">
                Register Now
              </a>
              <Link href="/contact" className="btn-outline">
                Inquire for Group
              </Link>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-brand-blue/5 rounded-card -rotate-1 translate-x-2 translate-y-2" />
             <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-brand-blue/10 shadow-xl2">
                <img 
                  src="/images/robotics-lab.webp" 
                  alt="Students building robots" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-brand-orange text-white flex flex-col items-center justify-center text-center p-4 shadow-glow-sm border-4 border-white animate-bounce-slow">
                <span className="text-xs uppercase font-bold">Starts At</span>
                <span className="text-xl font-bold font-display">{summerCamp.price}</span>
             </div>
          </div>
        </div>
      </Section>

      {/* Batch Details & Locations */}
      <section className="py-24 bg-brand-surface relative overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] bg-brand-blue/5 -top-20 -left-20" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-h2 font-display font-bold text-brand-ink">Choose Your Schedule</h2>
             <p className="mt-4 text-brand-muted">Multiple batches and locations across Hyderabad, Chennai, and Tirupati.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Batches Card */}
            <div className="card-glass-white border border-brand-blue/10 p-8">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-xl">📅</div>
                  <h3 className="text-xl font-display font-bold text-brand-ink">Upcoming Batches</h3>
               </div>
               <div className="space-y-4">
                 {summerCamp.batches.map((batch) => (
                   <div key={batch.id} className="flex justify-between items-center p-4 rounded-xl bg-white border border-brand-blue/5 hover:border-brand-blue/20 transition-colors">
                      <span className="font-bold text-brand-ink">{batch.name}</span>
                      <span className="text-brand-blue font-medium bg-brand-blue/5 px-3 py-1 rounded-pill text-sm">{batch.dates}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Timings Card */}
            <div className="card-glass-white border border-brand-blue/10 p-8">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-xl">⏰</div>
                  <h3 className="text-xl font-display font-bold text-brand-ink">Daily Timings</h3>
               </div>
               <div className="space-y-4">
                 {summerCamp.timings.map((timing) => (
                   <div key={timing.id} className="flex justify-between items-center p-4 rounded-xl bg-white border border-brand-blue/5">
                      <span className="font-bold text-brand-ink">{timing.label}</span>
                      <span className="text-brand-orange font-medium">{timing.time}</span>
                   </div>
                 ))}
               </div>
               <p className="mt-6 text-xs text-brand-muted italic">Classes held Monday to Saturday. 2–3 hours per session.</p>
            </div>

            {/* Seats & Locations Card */}
            <div className="card-glass-white border border-brand-blue/10 p-8">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-brand-ink/5 flex items-center justify-center text-xl">🪑</div>
                  <h3 className="text-xl font-display font-bold text-brand-ink">Seat Availability</h3>
               </div>
               <div className="space-y-6">
                 {summerCamp.locations.map((loc) => (
                   <div key={loc.name} className="flex flex-col gap-1 border-b border-brand-blue/5 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between">
                         <span className="font-bold text-brand-ink">{loc.name}</span>
                         <span className="text-xs font-bold text-brand-muted uppercase tracking-widest">{loc.capacity}</span>
                      </div>
                      <div className="text-sm text-brand-blue font-medium">{loc.perBatch}</div>
                   </div>
                 ))}
               </div>
               <div className="mt-8 p-4 bg-brand-ink rounded-xl text-white text-xs">
                  <span className="text-brand-orange font-bold uppercase block mb-1">Note:</span>
                  Seats are filling fast! Group discounts available for 3+ students.
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <Section id="register-now" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <h2 className="text-h2 font-display font-bold text-brand-ink leading-tight">Secure Your Spot</h2>
            <p className="mt-6 text-brand-muted text-lg leading-relaxed">
              Don't miss out on the most exciting STEM event of the year. Filling this form blocks your seat for 48 hours while our team contacts you with schedule confirmation and payment links.
            </p>
            <div className="mt-8 space-y-6">
               <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange text-xl">✨</div>
                  <div>
                    <h4 className="font-bold text-brand-ink">Take-Home Robot</h4>
                    <p className="text-sm text-brand-muted">The robot you build is yours to take home and keep experimenting!</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue text-xl">🏅</div>
                  <div>
                    <h4 className="font-bold text-brand-ink">Get Certified</h4>
                    <p className="text-sm text-brand-muted">Receive a formal certificate of completion recognized by our partner schools.</p>
                  </div>
               </div>
            </div>
          </div>
          <SummerCampForm />
        </div>
      </Section>

      {/* Pricing / CTA */}
      <CTABanner
        title="Still have questions?"
        subtitle="Limited spots available for Summer 2026. Secure your seat today with a simple WhatsApp message."
        cta1={{ label: "Enroll via WhatsApp", href: `https://wa.me/${companyInfo.whatsapp}` }}
        cta2={{ label: "Visit Lab", href: "/contact" }}
      />
    </main>
  );
}
