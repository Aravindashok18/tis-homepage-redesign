# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** https://aravindashok18.github.io/tis-homepage-redesign/
- **Repository:** https://github.com/Aravindashok18/tis-homepage-redesign

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (design tokens as CSS variables)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions (also Vercel-ready through `vercel.json`)

## ✨ Standout Features Implemented
1. **Custom Cursor** (`animation/CustomCursor`): a spring-following ring plus dot driven by motion values (no React re-renders on mouse move). The ring scales up over links/buttons, hides when the mouse leaves the window, and is not rendered on touch devices (`pointer: fine` check).
2. **Scroll-Triggered Reveals** (`animation/Reveal`): `whileInView` with `viewport={{ once: true }}`, 0.5s duration, staggered by index. Stat numbers count up on entry.
3. **Animated Dark/Light Theme Switcher** (`animation/ThemeToggle` + `hooks/useTheme`): a spring-animated `role="switch"`. Theme is saved in `localStorage`, defaults to the system preference, and is applied by an inline script before first paint (no flash). Colors crossfade via a short-lived `theme-transition` class.
4. **Scroll Progress Bar** (`animation/ScrollProgress`): `useScroll` + `useSpring` driving `scaleX` (GPU-composited).

Also: hero parallax, a sticky blurred navbar, an accessible mobile menu (Esc to close, `aria-expanded`), and `MotionConfig reducedMotion="user"` so animations respect the OS reduced-motion setting.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aravindashok18/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser.
5. **Production build:** `npm run build` (preview with `npm run preview`).

## Component Architecture Overview

```
src/
├── components/
│   ├── ui/          # Button, Badge, SectionHeading, AnimatedNumber
│   ├── layout/      # Navbar, MobileNav, Logo, Footer
│   ├── sections/    # Hero, Stats, About, Programs, Boarding, Testimonial, CTA
│   └── animation/   # ScrollProgress, CustomCursor, ThemeToggle, Reveal
├── hooks/           # useTheme, useFinePointer, useMousePosition, useScrolled
├── data/            # content.js - all copy, stats and nav items
└── styles/          # index.css - Tailwind import + light/dark tokens
```

Content lives in `data/content.js`, so copy changes never touch components.

## Brand Identity Retained

- Primary colors: TIS blue and yellow
- Copy, statistics, rankings, and contact details taken from tis.edu.in
- The logo is a simple "TIS" wordmark placeholder; swap in the official asset from tis.edu.in
- The testimonial is the single quote published on the current site; the admission steps are an illustrative summary
