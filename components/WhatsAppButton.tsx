import { companyInfo } from "@/lib/data";

export default function WhatsAppButton() {
  const url = `https://wa.me/${companyInfo.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20Mech-E-Tron%20courses`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center text-2xl hover:scale-110 animate-pulse-soft transition-transform"
    >
      💬
    </a>
  );
}
