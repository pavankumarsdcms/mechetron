import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mech-E-Tron Blog — Robotics & STEM Insights",
  description: "Insights, guides, and updates from the world of robotics and STEM education.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
