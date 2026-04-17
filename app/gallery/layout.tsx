import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Student Robotics Innovations",
  description: "Witness the creativity of our young engineers through robots, drones, and connected devices built at Mech-E-Tron.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
