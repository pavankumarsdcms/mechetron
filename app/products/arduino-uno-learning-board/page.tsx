import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";
import { arduinoProduct, companyInfo } from "@/lib/data";
import Image from "next/image";

export const metadata = {
  title: "Arduino UNO Learning Board | Shop Mech-E-Tron",
  description: "Buy the Mech-E-Tron Arduino UNO Learning Board. A complete kit for 30+ projects with 3 months mentor support. Fast delivery across India.",
};

function ProductJsonLd({ p }: { p: typeof arduinoProduct }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: `https://mechetron.com${p.images[0]}`,
    offers: {
      "@type": "Offer",
      price: p.price.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Mech-E-Tron" },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ProductPage() {
  const p = arduinoProduct;

  return (
    <main>
      <ProductJsonLd p={p} />
      <div className="bg-brand-ink pt-28 pb-16">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Images */}
            <div className="space-y-6">
              <div className="relative aspect-square rounded-xl2 overflow-hidden border border-white/10 shadow-glow">
                <Image src={p.images[0]} alt={p.name} fill className="object-cover" priority />
                <div className="absolute top-4 right-4 badge-brand uppercase">{p.badge}</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {p.images.map((img, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-brand-blue/50 transition-all cursor-pointer relative">
                    <Image src={img} alt={`${p.name} detail ${i + 1}`} fill className="object-cover" sizes="33vw" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div className="text-white">
              <div className="text-brand-blue font-bold tracking-[0.2em] text-xs uppercase mb-3">Mech-E-Tron Official Store</div>
              <h1 className="text-4xl font-display font-bold leading-tight mb-2">{p.name}</h1>
              <p className="text-xl text-white/50 font-display mb-6">{p.tagline}</p>
              
              <div className="flex items-center gap-4 mb-8">
                 <div className="text-3xl font-display font-bold text-white">{p.price}</div>
                 <div className="text-xl text-white/30 line-through">{p.mrp}</div>
                 <div className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded">SAVE 28%</div>
              </div>

              <p className="text-white/70 leading-relaxed mb-8">
                {p.description}
              </p>

              <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>In Stock — Ships within 24 hours</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm">
                    <span className="text-brand-blue">✈</span>
                    <span>Free Delivery across {p.deliveryDays}</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm">
                    <span className="text-orange-400">★</span>
                    <span>3 Months Free Mentor Support Included</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
                 <a href={`https://wa.me/${p.whatsappOrder}?text=Hi%2C%20I%27d%20like%20to%20order%20the%20Arduino%20UNO%20Learning%20Board.`} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 py-4 text-base">
                    Order via WhatsApp
                 </a>
                 <a href="/contact" className="btn-dark py-4 text-base">
                    Inquire for Bulk
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16">
           <div>
              <h2 className="text-3xl font-display font-bold text-brand-ink mb-8">What's in the Box?</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                 {p.features.map((f, i) => (
                   <div key={i} className="flex items-start gap-2 py-2 border-b border-brand-blue/5">
                      <span className="text-brand-blue mt-1">▹</span>
                      <span className="text-sm text-brand-body">{f}</span>
                   </div>
                 ))}
              </div>
           </div>
           <div>
             <h2 className="text-3xl font-display font-bold text-brand-ink mb-8">Why Choose Our Kit?</h2>
             <div className="space-y-6">
                {p.whyChoose.map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-card bg-brand-surface border border-brand-blue/5">
                     <div className="text-3xl">{item.icon}</div>
                     <div>
                        <h4 className="font-display font-bold text-brand-ink">{item.title}</h4>
                        <p className="text-sm text-brand-muted mt-1">{item.body}</p>
                     </div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </Section>

      {/* Projects List */}
      <Section className="bg-brand-ink text-white">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Complete 30+ Hands-On Projects</h2>
            <p className="text-white/40">From basic LED blinking to autonomous robotic cars.</p>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {p.projects.map((proj, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center text-sm font-medium hover:bg-white/10 transition-colors">
                 {proj}
              </div>
            ))}
         </div>
      </Section>

      <CTABanner 
        title="Ready to start your electronics journey?"
        subtitle="Order your Arduino UNO Learning Board today and get free 3-month access to our mentor group."
        cta1={{ label: "Buy on WhatsApp", href: `https://wa.me/${p.whatsappOrder}` }}
        cta2={{ label: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
