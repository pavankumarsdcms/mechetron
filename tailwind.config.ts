import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // ── PRIMARY CTA — replaces old "orange" token name so components work unchanged ──
          blue:           "#0355BC",   // primary blue
          "blue-hover":   "#0056BE",   // deep-blue hover

          // ── BLUE PALETTE ──
          dark:    "#0355BC",   // primary blue (CTA, section accents)
          accent:  "#1DA5FA",   // accent blue (headings, highlights)
          deep:    "#0056BE",   // deep blue (H3, footer)
          light:   "#1BA4FD",   // light blue (hover, glow)
          nav:     "#4F80FF",   // nav links
          link:    "#605BE5",   // hyperlinks

          // Legacy blue aliases (keep so existing components don't break)
          blue:        "#1DA5FA",
          "blue-light":"#1BA4FD",

          // ── DARK BACKGROUNDS ──
          ink:   "#0F1724",   // dark hero/sections deepest bg

          // ── TEXT ──
          body:      "#333333",   // main body text
          muted:     "#5E6B7A",   // captions, meta, subtext
          secondary: "#777777",   // placeholders, light descriptions

          // ── SURFACES ──
          surface:  "#F9FBFD",   // alternating light sections
          tint:     "#F2F7FF",   // blue-tint — tags, code backgrounds
          mist:     "#F2F7FF",   // alias
          white:    "#FFFFFF",

          // ── SEMANTIC ──
          success: "#00A651",
          amber:   "#FFB400",   // star ratings, warnings, highlights
          alert:   "#E51919",
          sky:     "#BEE6FF",   // info banners, light tags

          // Legacy aliases
          yellow: "#FFB400",
        },
      },

      fontFamily: {
        // Brand spec: Poppins for headings, Roboto for body, Red Hat Display for hero body
        display: ["Poppins", "system-ui", "sans-serif"],
        sans:    ["Roboto", "system-ui", "sans-serif"],
        hero:    ["'Red Hat Display'", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },

      fontSize: {
        hero: ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.01em" }],
        h2:   ["clamp(1.875rem, 4vw, 3rem)",  { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        h3:   ["clamp(1.125rem, 2vw, 1.375rem)", { lineHeight: "1.3" }],
      },

      boxShadow: {
        // Blue-tinted shadows per brand spec
        card:        "0 6px 18px rgba(3, 85, 188, 0.14)",
        "card-hover":"0 18px 40px rgba(3, 85, 188, 0.18)",
        nav:         "0 1px 0 rgba(0,0,0,0.06)",
        // Glow tokens — blue brand glows
        glow:        "0 0 40px rgba(3, 85, 188, 0.30)",
        "glow-sm":   "0 0 20px rgba(3, 85, 188, 0.18)",
        "glow-blue": "0 0 40px rgba(29, 165, 250, 0.30)",
        "glow-accent":"0 0 30px rgba(29, 165, 250, 0.22)",
        "inner-glow":"inset 0 1px 0 rgba(255,255,255,0.08)",
      },

      borderRadius: {
        // Brand spec: btn = 3px, small = 8px, card = 16px, pill = 9999px
        btn:  "3px",
        tag:  "8px",
        card: "16px",
        xl2:  "24px",
        pill: "9999px",
      },

      maxWidth: {
        content: "1240px",   // brand spec: 1240px max content width
      },

      backgroundImage: {
        // Brand gradient: 90deg #0355BC → #1DA5FA
        "gradient-brand":  "linear-gradient(90deg, #0355BC, #1DA5FA)",
        "gradient-blue":   "linear-gradient(90deg, #0355BC, #1DA5FA)",
        "gradient-blue":   "linear-gradient(90deg, #0355BC, #1DA5FA)",
        "gradient-dark":   "linear-gradient(135deg, #0F1724 0%, #0355BC 60%, #0F1724 100%)",
        "gradient-hero":   "linear-gradient(135deg, #0F1724 0%, #0355BC 55%, #0F1724 100%)",
        "gradient-cta":    "linear-gradient(90deg, #0355BC, #1DA5FA)",
        "grid-lines":      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "dot-grid":        "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
        "circuit":         "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },

      animation: {
        "marquee":    "marquee 35s linear infinite",
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
        "fade-in":    "fade-in 0.6s ease-out both",
        "slide-up":   "slide-up 0.6s ease-out both",
        "float":      "float 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "spin-slow":  "spin 12s linear infinite",
        "border-glow":"border-glow 3s ease-in-out infinite",
      },

      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%":      { transform: "scale(1.08)", opacity: "0.9" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(3, 85, 188, 0.25)" },
          "50%":      { boxShadow: "0 0 40px rgba(3, 85, 188, 0.55)" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(3, 85, 188, 0.30)" },
          "50%":      { borderColor: "rgba(3, 85, 188, 0.80)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
