/* ── Wooden DIY Adventure Models — Page Data ─────────────── */

export const woodenDiyData = {
  meta: {
    title: "Wooden DIY Adventure Models | Build. Learn. Explore. – MechEtron",
    description:
      "Premium laser-cut wooden DIY vehicle models by MechEtron. Eco-friendly, STEM-focused hands-on kits for kids, students, and hobbyists. Build your own SUV, off-road truck, and more.",
    keywords: [
      "wooden DIY model kit",
      "laser cut wooden car kit",
      "STEM toy India",
      "wooden SUV model",
      "eco-friendly DIY kit",
      "MechEtron wooden models",
      "HobeeBob wooden kit",
    ],
    og: {
      title: "Wooden DIY Adventure Models – MechEtron",
      description: "Hands-on laser-cut wooden vehicle kits. Engineering meets creativity.",
      image: "/images/wooden-diy/hero.webp",
    },
  },

  hero: {
    badge: "🚙 Wooden DIY Adventure Models",
    headline: "Build. Learn. Explore.",
    subheadline:
      "Premium laser-cut wooden vehicle kits where engineering meets creativity.",
    body: "At MechEtron, we bring engineering and creativity together through our premium wooden DIY vehicle models. Designed with precision and inspired by real off-road machines, these models are more than just toys — they are a complete hands-on STEM learning experience.",
    tags: ["No Glue", "Eco-Friendly", "Educational", "Fun for All Ages"],
    cta: { label: "Shop Now", href: "/contact" },
    secondaryCta: { label: "View All Products", href: "/products" },
    heroImage: "/images/wooden-diy/hero.webp",
    fallbackImage: "/images/wooden-diy/collection.webp",
  },

  highlights: [
    {
      icon: "🚀",
      title: "DIY Assembly Experience",
      description:
        "Build your own vehicle step-by-step and understand real engineering concepts in a fun and engaging way.",
    },
    {
      icon: "🧠",
      title: "STEM Learning",
      description:
        "Enhances problem-solving skills, creativity, and logical thinking — perfect for students and hobbyists.",
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Material",
      description:
        "Made from sustainable wood, safe for kids and environmentally responsible.",
    },
    {
      icon: "🎁",
      title: "Perfect Gift Choice",
      description:
        "An ideal gift for kids, students, and enthusiasts who love building, exploring, and creating.",
    },
    {
      icon: "🌄",
      title: "Designed for Adventure",
      description:
        "Each model is inspired by real-world off-road vehicles, built to reflect strength, durability, and rugged performance.",
    },
    {
      icon: "💡",
      title: "More Than a Model — It's an Experience",
      description:
        "Users don't just assemble a product — they experience engineering in action. From structure and design to patience and focus, every build becomes a journey of discovery.",
    },
  ],

  models: [
    {
      id: "classic-suv",
      name: "Classic SUV Model",
      tagline: "Sleek, detailed, and realistic",
      description:
        "A precision-crafted closed-body jeep design capturing the spirit of adventure and mechanical excellence. Ideal for beginners and first-time builders.",
      difficulty: "Beginner" as const,
      image: "/images/wooden-diy/classic-suv.webp",
      badge: "Bestseller" as string | null,
    },
    {
      id: "off-road-pickup",
      name: "Off-Road Pickup Model",
      tagline: "Bold, powerful, and rugged",
      description:
        "Inspired by powerful pickup-style explorers, this model features bold lines and a rugged frame that challenges your building skills.",
      difficulty: "Intermediate" as const,
      image: "/images/wooden-diy/off-road-pickup.webp",
      badge: null as string | null,
    },
    {
      id: "premium-explorer",
      name: "Premium Long-Body Explorer",
      tagline: "Advanced design with fine detailing",
      description:
        "Our most detailed model with advanced fine detailing and a long-body frame. A showpiece and a serious engineering challenge.",
      difficulty: "Advanced" as const,
      image: "/images/wooden-diy/premium-explorer.webp",
      badge: "New" as string | null,
    },
  ],

  assemblySteps: [
    {
      step: 1,
      label: "Pop Out",
      description: "Remove laser-cut pieces from the wooden sheet",
    },
    {
      step: 2,
      label: "Assemble",
      description: "Follow the guide to fit parts together — no glue needed",
    },
    {
      step: 3,
      label: "Add Detail",
      description: "Add wheels, axles, and fine details",
    },
    {
      step: 4,
      label: "Complete",
      description: "Your model is ready to display or gift",
    },
  ],

  whyChoose: [
    "Made from high-quality sustainable wood",
    "Precision laser-cut for easy, perfect-fit assembly",
    "Enhances creativity and problem-solving",
    "Perfect for hobbyists, collectors, and gifts",
    "No glue required — eco-friendly and safe for all ages",
    "Proudly made with care and precision finish",
  ],

  gallery: [
    { src: "/images/wooden-diy/hero.webp", alt: "Wooden DIY adventure models hero shot" },
    { src: "/images/wooden-diy/classic-suv.webp", alt: "Classic SUV wooden model kit" },
    { src: "/images/wooden-diy/off-road-pickup.webp", alt: "Off-road pickup wooden model" },
    { src: "/images/wooden-diy/premium-explorer.webp", alt: "Premium long-body explorer wooden model" },
    { src: "/images/wooden-diy/assembly.webp", alt: "Wooden model assembly process" },
    { src: "/images/wooden-diy/collection.webp", alt: "Full wooden DIY models collection" },
  ],

  experienceBlock: {
    headline: "More Than a Model — It's an Experience",
    body: "With MechEtron DIY kits, users don't just assemble a product — they experience engineering in action. From structure and design to patience and focus, every build becomes a journey of discovery.",
  },

  mission:
    "To inspire the next generation of innovators by combining education, creativity, and real-world engineering concepts through hands-on learning.",

  cta: {
    heading: "Ready to Build Your Adventure?",
    subtitle:
      "Order your wooden DIY model kit today and start your engineering journey.",
    button: { label: "Get in Touch", href: "/contact" },
  },
};

/* ── Difficulty badge styling helpers ─────────────────────── */
export const difficultyStyles: Record<
  "Beginner" | "Intermediate" | "Advanced",
  { label: string; className: string }
> = {
  Beginner: {
    label: "Beginner",
    className:
      "inline-flex items-center rounded-pill bg-green-100 text-green-700 border border-green-200 px-3 py-0.5 text-xs font-semibold",
  },
  Intermediate: {
    label: "Intermediate",
    className:
      "inline-flex items-center rounded-pill bg-amber-100 text-amber-700 border border-amber-200 px-3 py-0.5 text-xs font-semibold",
  },
  Advanced: {
    label: "Advanced",
    className:
      "inline-flex items-center rounded-pill bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-semibold",
  },
};
