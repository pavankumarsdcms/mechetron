import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Mech-E-Tron — Hands-On Robotics & STEM Education",
    template: "%s | Mech-E-Tron",
  },
  description:
    "Mech-E-Tron is India's premier robotics & STEM education platform — hands-on robotics training, Arduino courses, drone workshops, school STEM labs and engineering project support in Hyderabad.",
  keywords: [
    "robotics training",
    "STEM education",
    "Arduino course",
    "drone workshop",
    "engineering final year projects",
    "robotics for schools",
    "robotics training Hyderabad",
    "STEM lab setup",
    "Mech-E-Tron",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mech-E-Tron",
    title: "Mech-E-Tron — Hands-On Robotics & STEM Education",
    description:
      "Train the next generation of engineers through real robots, real code, and real projects.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Poppins — headings | Roboto — body | Red Hat Display — hero body */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Red+Hat+Display:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD — Organisation + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://mechetron.com/#org",
                  name: "Mech-E-Tron",
                  url: "https://mechetron.com",
                  logo: "https://mechetron.com/logo.png",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-8148435256",
                    contactType: "customer support",
                    areaServed: "IN",
                    availableLanguage: ["English", "Telugu", "Hindi"],
                  },
                  sameAs: [
                    "https://instagram.com/mechetron",
                    "https://youtube.com/@mechetron",
                    "https://twitter.com/mechetron",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://mechetron.com/#local",
                  name: "Mech-E-Tron",
                  description:
                    "India's hands-on robotics & STEM education platform — training the next generation of engineers through real robots, real code, and real projects.",
                  url: "https://mechetron.com",
                  telephone: "+91-8148435256",
                  email: "info@mechetron.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "Osmania Technology Business Incubator (OTBI), Central Facilities for Research & Development Building",
                    addressLocality: "Hyderabad",
                    addressRegion: "Telangana",
                    postalCode: "500007",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 17.4065,
                    longitude: 78.4772,
                  },
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    opens: "09:00",
                    closes: "19:00",
                  },
                  priceRange: "₹₹",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
