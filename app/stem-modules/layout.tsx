import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STEM Modules | Grade 1 to Grade 12 Projects — MechEtron",
  description:
    "Official AICRA-collaborated STEM project modules for Grade 1 to Grade 12. Hands-on robotics, IoT, AI, Machine Learning, Drones, 3D Printing, AR/VR and Industry Automation — for schools and inter-colleges across India.",
  keywords: [
    "STEM modules India", "AICRA STEM projects", "grade wise robotics projects",
    "India STEM Lab curriculum", "school STEM projects", "IoT projects for students",
    "AI projects for school", "MechEtron STEM",
  ],
};

export default function StemModulesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
