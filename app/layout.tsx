import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimator from "@/components/ScrollAnimator";
import { Poppins, Roboto, Red_Hat_Display, JetBrains_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-red-hat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Robotics Courses in Chennai & Hyderabad | AICRA Certified | Mech-E-Tron",
    template: "%s | Mech-E-Tron",
  },
  description:
    "Hands-on robotics and STEM courses in Chennai, Hyderabad and Tirupati. AICRA certified. Arduino, drones, AI and IoT. Book your free demo today.",
  keywords: [
    "robotics course Chennai", "robotics course Hyderabad", "robotics course Tirupati",
    "arduino training India", "STEM summer camp Chennai", "STEM summer camp Hyderabad",
    "robotics summer camp 2026", "final year project help", "btech project ECE",
    "arduino course students", "robotics classes near me", "drone training India DGCA",
    "world robotics championship India", "AICRA robotics", "Mech-E-Tron",
  ],
  metadataBase: new URL("https://mechetron.com"),
  alternates: { canonical: "https://mechetron.com" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mech-E-Tron",
    title: "Robotics Courses in Chennai & Hyderabad | AICRA Certified | Mech-E-Tron",
    description: "Hands-on robotics and STEM courses in Chennai, Hyderabad and Tirupati. AICRA certified. Arduino, drones, AI and IoT. Book your free demo today.",
    images: [
      {
        url: "https://mechetron.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mech-E-Tron — Hands-On Robotics & STEM Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robotics Courses in Chennai & Hyderabad | Mech-E-Tron",
    description: "AICRA certified robotics & STEM courses. Arduino, drones, AI & IoT. Book a free demo.",
    images: ["https://mechetron.com/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${redHatDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* JSON-LD — LocalBusiness + EducationalOrganization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "EducationalOrganization"],
                  "@id": "https://mechetron.com/#org",
                  name: "Mech-E-Tron",
                  description: "Hands-on robotics and STEM education for school and college students. Arduino courses, drone training, AI and IoT, and final year project support.",
                  url: "https://mechetron.com",
                  logo: "https://mechetron.com/images/logo-mechetron.png",
                  foundingDate: "2025",
                  telephone: ["+918148435246", "+918499985383"],
                  email: "info@mechetron.com",
                  priceRange: "₹₹",
                  openingHours: "Mo-Sa 09:00-18:00",
                  hasCredential: "AICRA District Coordinator",
                  address: [
                    {
                      "@type": "PostalAddress",
                      streetAddress: "Mahindra World City, Paranur Railway Station",
                      addressLocality: "Chennai",
                      addressRegion: "Tamil Nadu",
                      postalCode: "603002",
                      addressCountry: "IN",
                    },
                    {
                      "@type": "PostalAddress",
                      streetAddress: "OTBI, Osmania University, Central Facilities for R&D Building",
                      addressLocality: "Hyderabad",
                      addressRegion: "Telangana",
                      postalCode: "500007",
                      addressCountry: "IN",
                    },
                  ],
                  geo: { "@type": "GeoCoordinates", latitude: 17.4065, longitude: 78.4772 },
                  contactPoint: [
                    { "@type": "ContactPoint", telephone: "+918148435246", contactType: "customer support", areaServed: "IN", availableLanguage: ["English", "Telugu", "Hindi"] },
                  ],
                  sameAs: [
                    "https://instagram.com/mechetron",
                    "https://youtube.com/@mechetron",
                    "https://twitter.com/mechetron",
                  ],
                  memberOf: [
                    { "@type": "Organization", name: "AICRA" },
                    { "@type": "Organization", name: "Skill India" },
                    { "@type": "Organization", name: "MSME" },
                    { "@type": "Organization", name: "Android Robo" },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mechetron.com/#website",
                  url: "https://mechetron.com",
                  name: "Mech-E-Tron",
                  publisher: { "@id": "https://mechetron.com/#org" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://mechetron.com/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
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
        <Newsletter />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <ScrollAnimator />
      </body>
    </html>
  );
}
