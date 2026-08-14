# Parth Alti — Portfolio
## 🌐 Live Portfolio

👉 [View My Portfolio](https://parth-alti-portfolio.vercel.app)

React + TypeScript + Tailwind CSS + Framer Motion + React Three Fiber (Three.js) + Lenis + Lucide React, built with Vite.

## Setup

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`, which you can deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Project structure

```
src/
  components/          UI sections and reusable pieces
    Navbar.tsx           Fixed glass navbar with active-section indicator
    CustomCursor.tsx     Desktop-only custom cursor (disabled on touch)
    SmoothScroll.tsx     Lenis smooth-scroll provider + useLenis() hook
    Loader.tsx           First-visit loading sequence
    TiltCard.tsx         Reusable pointer-based 3D tilt wrapper
    HeroSection.tsx, AboutSection.tsx, ServicesSection.tsx,
    ProjectsSection.tsx, ProjectCard.tsx, ContactSection.tsx, Footer.tsx
    FadeIn.tsx, Magnet.tsx, AnimatedText.tsx, ContactButton.tsx, GhostButton.tsx
  components/visuals/  Illustrations and the 3D hero scene
    HeroScene.tsx        React Three Fiber "core" object (glass shell + wireframe + nodes)
    HeroVisual.tsx        Picks HeroScene (desktop) or HeroPortrait (mobile/reduced motion)
    HeroPortrait.tsx      Lightweight SVG fallback
    CornerPanel.tsx, ProjectVisuals.tsx
  data/                Content data (tech marquee items, project list)
  hooks/               usePrefersReducedMotion, useIsTouchDevice, useActiveSection, useScrollTo
  App.tsx              Composes all sections
  main.tsx             React entry point
  index.css            Tailwind directives + global styles, grain texture, cursor styles
```

## Notes

- The 3D hero scene is lazy-loaded and only shown to desktop visitors without
  `prefers-reduced-motion` set; touch devices and reduced-motion users get the
  original lightweight SVG portrait instead.
- All animation respects `prefers-reduced-motion` via `usePrefersReducedMotion()`.
