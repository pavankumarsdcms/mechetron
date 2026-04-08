# Mechetron — Next.js Website

Premium robotics & STEM education website built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS (custom brand tokens)
- Component-driven architecture

---

# Website Strategy & Plan

## 1. Strategy Overview
Mechetron is repositioned from a cluttered WordPress brochure into a **trust-first, conversion-focused STEM institute platform** serving three audiences:
1. **Students & Parents** → enroll in courses
2. **Schools & Institutions** → partner for labs / programs
3. **Engineering Students** → final-year project support

Core promise: *Hands-On Robotics & STEM Education.*

## 2. Sitemap (20 pages)
- Home
- About
- Courses (index)
  - Robotics Training
  - Arduino & Embedded Systems
  - Drone Workshop
  - STEM for Schools
- Services (index)
  - 3D Printing
  - Laser Cutting
  - Custom Drone Development
  - RC Aircraft
  - RC Car
  - Prototype Development
- Engineering Projects (index)
  - Final Year Projects
  - IoT Projects
  - Robotics Projects
- For Schools
- Student Projects / Gallery (inside /projects)
- Contact
- Privacy Policy
- Terms & Conditions

## 3. Homepage Wireframe
1. **Hero** — H1 "Hands-On Robotics & STEM Education", subcopy, CTAs (Explore Courses / Book Demo), live stats (10K+ students, 120+ schools, 500+ projects).
2. **Trust Strip** — partner school logos.
3. **Programs Overview** — 4 course cards.
4. **Hands-On Learning Showcase** — split: copy + lab visuals (robotics, drone, 3D, electronics).
5. **Solutions for Schools** — 3 pillars + CTA.
6. **Maker Services** — service cards grid.
7. **Testimonials** — 3 voices (student, parent, school).
8. **CTA Banner** — dark, bold, dual CTA (Demo + WhatsApp).

## 4. Page Structures
Every detail page follows: **Hero → Value props → Curriculum/Process → CTA banner**, with consistent enroll/demo/WhatsApp CTAs.

## 5. SEO Plan
| Page | Title | Target Keywords |
|---|---|---|
| Home | Mechetron — Hands-On Robotics & STEM Education | robotics training, STEM education |
| Courses | Robotics, Arduino & Drone Courses | arduino course, drone workshop |
| Services | Maker Services — 3D Printing & Custom Drones | 3d printing service, custom drone |
| Projects | Engineering Projects & Final Year Project Support | final year projects, iot projects |
| Schools | Robotics Labs & STEM Programs for Schools | robotics for schools, STEM lab setup |
| About | About Mechetron | robotics institute india |
| Contact | Book a Free Demo | robotics demo class |

Heading hierarchy: one H1 per page, H2 for sections, H3 for cards. Metadata defined per route via Next.js `metadata` export.

## 6. Component System
`components/`
- `Navbar`, `Footer`
- `Hero`, `Section`, `CTABanner`
- `CourseCard` (reusable for courses + services + projects)
- `Testimonials`
- `ContactForm`

Data lives in `lib/data.ts` so courses/services are content-driven and dynamic routes (`/courses/[slug]`, `/services/[slug]`) generate statically.

## 7. Conversion Strategy
- Persistent **Book a Demo** CTA in Navbar
- Dual CTA (Enroll + Demo) on every detail page
- WhatsApp deep link in CTA banner & footer
- Inquiry form on `/contact` with audience selector
- Trust signals (student count, school count, awards) repeated across pages

## 8. Visual Design Guidelines
- **Colors**: Orange `#FF6A00` (primary CTA), Yellow `#FFB400` (accent), Blue `#0B3D91` (data/trust), Ink `#0B1220` (text), Mist `#F6F7FB` (surfaces).
- **Type**: Space Grotesk for display, Inter for body.
- **Spacing**: generous (py-20 sections), max-w-7xl container.
- **Cards**: rounded-2xl, soft shadow, white surface.
- **Imagery direction**: real lab photos of students building robots, drones, soldering, 3D printers in action. Replace placeholder emoji blocks in `Hero`, course/service detail heroes, and Projects gallery with photographic assets (suggested: AI-generated via Nano Banana / Midjourney with prompts like "teenage student soldering arduino, bright STEM lab, cinematic, warm orange light"). Drop into `/public/images/` and swap the placeholder blocks.

## Replacing placeholder visuals
The current build uses gradient + emoji placeholders so it runs with zero assets. To upgrade:
1. Add images to `public/images/`.
2. Replace the placeholder `<div>` blocks in `components/Hero.tsx`, `app/courses/[slug]/page.tsx`, `app/services/[slug]/page.tsx`, and the Project Gallery in `app/projects/page.tsx` with `<Image>` from `next/image`.
