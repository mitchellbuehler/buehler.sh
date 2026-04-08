# Mitchell's Personal Brand Website

## Project Overview
Personal brand website for Mitchell — a Sales Engineer at Tanium working in Autonomous IT & cybersecurity. The site needs to do three things well:

1. **Showcase professional experience** — current role, career highlights, areas of expertise
2. **Surface projects** — active and completed work (apps, hardware builds, internal programs) with status indicators
3. **Provide a contact method** — without exposing personal email or phone to visitors/bots

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v3 with the custom theme defined in `tailwind.config.ts`
- **Language**: TypeScript (strict mode)
- **Deployment**: Vercel — auto-detects Next.js, zero config needed
- **Contact Form**: Formspree (serverless form backend, keeps email private)
- **Fonts**: Google Fonts loaded via `next/font` — **Instrument Serif** (display/headings) + **DM Sans** (body)

## Design System

### Aesthetic Direction
Dark, refined, technical — warm amber accents on near-black. Think "cybersecurity authority with personality." The site should feel intentional and polished, not templated.

**Do not use**: Inter, Roboto, Arial, purple gradients, generic card layouts, or anything that reads as stock AI output.

### Color Tokens (defined in `tailwind.config.ts`)
| Token             | Value                      | Usage                        |
|--------------------|----------------------------|------------------------------|
| `base`             | `#0A0A0F`                  | Page background              |
| `base-raised`      | `#12121A`                  | Cards, elevated surfaces     |
| `base-subtle`      | `#1A1A25`                  | Tags, subtle fills           |
| `base-border`      | `#2A2A38`                  | Borders, dividers            |
| `accent`           | `#D4A853`                  | Primary accent (amber/gold)  |
| `accent-dim`       | `#B8923F`                  | Hover/pressed accent state   |
| `accent-glow`      | `rgba(212,168,83,0.12)`    | Glow/shadow effects on hover |
| `text-primary`     | `#FFFFFF`                  | Headings, emphasis           |
| `text-body`        | `#E8E4DD`                  | Body copy (warm off-white)   |
| `text-muted`       | `#8A8690`                  | Captions, labels, secondary  |

### Typography
- **Headings**: `font-display` (Instrument Serif) — elegant, editorial feel
- **Body**: `font-body` (DM Sans) — clean, highly readable
- Section headings should be large (`text-4xl` / `text-5xl`) with a short amber accent line underneath

### Visual Details
- Subtle noise/grain texture overlay on `body::before` for depth (SVG `feTurbulence`, ~2.5% opacity)
- Cards get a `border-accent/30` + `shadow-accent-glow` treatment on hover
- Staggered fade-up entrance animations on the hero section (CSS `animation-delay`, no JS library needed)
- Generous whitespace — let the content breathe
- Custom scrollbar styling (thin, dark, accent on hover)
- `::selection` uses accent color on base background

## Site Structure

### Sections (top to bottom, single page)
Build these as individual components in `src/components/`:

1. **Header** (`Header.tsx`)
   - Fixed/sticky nav bar, transparent until scrolled then `bg-base/80 backdrop-blur-xl`
   - Logo: Mitchell's name in `font-display` with amber period accent (`Mitchell.`)
   - Nav links: About, Experience, Projects, Contact — smooth-scroll anchors
   - Mobile: hamburger menu with animated lines → dropdown

2. **Hero** (`Hero.tsx`)
   - Full viewport height, left-aligned content (max-width ~3xl)
   - Eyebrow: domain label in uppercase tracking-wide accent text
   - Name: massive `font-display` heading (6xl → 8xl responsive)
   - Subtitle: "Sales Engineer at Tanium" in muted display text
   - Tagline: one sentence in body text
   - Two CTAs: "View Projects" (filled accent button) + "Get in Touch" (ghost/outline button)
   - Subtle background glow orbs (accent color, blurred, low opacity)
   - Scroll indicator at bottom center

3. **About** (`About.tsx`)
   - Two-column layout: heading left (col-span-2), content right (col-span-3) on large screens
   - Bio paragraphs from `data.ts`
   - Expertise tag cloud: rounded pill badges with hover effect

4. **Experience** (`Experience.tsx`)
   - Same asymmetric two-column layout
   - Timeline-style entries from `data.ts`
   - Each entry: period badge, role title (display font), company name (accent), description, bullet highlights
   - Dot connectors between entries on desktop

5. **Projects** (`Projects.tsx`)
   - Full-width heading with description
   - Responsive card grid (1 → 2 → 3 columns)
   - Each card: status badge (active=emerald, completed=amber, paused=muted), title, description, tech tags
   - External link icon if `link` is provided
   - Cards use the `.card` hover treatment

6. **Contact** (`Contact.tsx`)
   - Same asymmetric layout
   - Formspree-powered form: Name, Email, Message fields
   - Include a hidden honeypot field (`_gotcha`) for spam prevention
   - POST to `https://formspree.io/f/${contactConfig.formspreeId}`
   - States: idle → sending (spinner) → sent (success message) → error (fallback text)
   - `"use client"` directive — this component needs React state

7. **Footer** (`Footer.tsx`)
   - Minimal: copyright left, social icon links right (LinkedIn, GitHub)
   - SVG icons for social links

### Page Composition
`src/app/page.tsx` simply imports and stacks all section components. No logic needed.

### Root Layout
`src/app/layout.tsx`:
- Load Instrument Serif + DM Sans via `next/font/google`
- Set CSS variable classes on `<html>`
- Include metadata: title, description, OG tags (leave OG image URL as a placeholder comment)

## Content Data
All site content is centralized in `src/lib/data.ts`. Components should import from this file — never hardcode content strings in components. The file is already created with typed interfaces and starter content. Key exports:
- `siteConfig` — name, title, company, tagline
- `about` — bio paragraphs array, expertise tags array
- `experience` — typed `ExperienceItem[]` with role, company, period, description, highlights
- `projects` — typed `ProjectItem[]` with title, description, status, tags, optional link
- `socialLinks` — LinkedIn, GitHub URLs (placeholders to be replaced)
- `contactConfig` — Formspree form ID (placeholder), heading, subheading

## Global CSS (`src/app/globals.css`)
Create with:
- Tailwind directives (`@tailwind base/components/utilities`)
- CSS custom properties matching the color tokens above
- `@layer components` block with reusable classes: `.section-container`, `.section-heading`, `.accent-line`, `.card`, `.badge`, `.badge-active`, `.badge-completed`, `.badge-paused`
- `body::before` noise texture
- Scrollbar styling
- Focus-visible ring using accent color
- `::selection` styling

## Formspree Setup (for Mitchell to do manually)
1. Create free account at https://formspree.io
2. Create a new form
3. Copy the form ID
4. Replace `FORMSPREE_FORM_ID` in `src/lib/data.ts`

## Commands
```bash
npm install          # Install deps
npm run dev          # Dev server → localhost:3000
npm run build        # Production build (Vercel runs this)
npm run lint         # ESLint
```

## Deployment
1. Push to GitHub
2. Import at https://vercel.com/new
3. Vercel auto-detects Next.js — deploy with defaults
4. Auto-deploys on every push to `main`

## Post-Launch Customization Checklist
- [ ] Fill in real content in `src/lib/data.ts` (additional experience entries, projects)
- [ ] Replace `FORMSPREE_FORM_ID` in data.ts
- [ ] Update social link URLs in data.ts
- [ ] Update metadata in layout.tsx (title, description, OG image)
- [ ] Add headshot to `public/` and reference in Hero (optional)
- [ ] Replace `public/favicon.ico`

## Future Extensions (not in v1)
- **Blog**: `src/app/blog/` with MDX via `next-mdx-remote`
- **Analytics**: Vercel Analytics or Plausible
- **Resume PDF download**: host in `public/`, link from About
- **Dark/Light mode toggle**: CSS vars are already structured for it
- **Scroll-triggered animations**: add `framer-motion`
- **Project detail pages**: `src/app/projects/[slug]/page.tsx`
