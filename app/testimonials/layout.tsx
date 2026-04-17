import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials — What Our Community Says",
  description: "Read real stories from students, parents, and school partners who have experienced Mech-E-Tron's hands-on learning.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
