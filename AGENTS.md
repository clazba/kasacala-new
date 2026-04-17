# AI Agent Guidelines (AGENTS.md)

This file contains critical context and rules for any AI agent (like Antigravity or open source coding assistants) operating within the `Casa Kala Digital Sanctuary` repository. 

**CRITICAL INSTRUCTION FOR ALL AGENTS:** 
You must proactively update this `AGENTS.md` document anytime you implement, change, or establish new patterns regarding:
- App architecture and file structure.
- State management and data fetching patterns.
- New foundational rules that deviate from or expand upon the original setup.

Keep this file succinct, up-to-date, and authoritative.

---

## 1. Design System & Aesthetics
- **Follow `DESIGN.md` Strictly**: A comprehensive breakdown of "The Architectural Mirage" design system is located in `/DESIGN.md`. All visual changes must adhere to the rules outlined there, especially:
  - The **"No-Line" Rule** (rely on surface color shifts, not 1px borders).
  - Use of `0px` border-radius (sharp corners) everywhere.
  - Generous `16px/24px/48px` spacing scale to simulate physical gallery spaces.
  - Editorial typography: `Newsreader` (Headlines/Serif), `Manrope` (Body/Sans), `Inter` (Labels/AllCaps + 0.15em tracking).
- **Tailwind Config**: The design tokens (colors, spacing, typography) have been mapped to `tailwind.config.js`. Use the semantic names defined there (e.g., `text-on-surface`, `bg-surface-container-highest`, `text-primary`).

## 2. Component Architecture
- Place all UI components in `src/components/`.
- **Current Component Groupings:**
  - `src/components/splash/`: Contains the single-page entry layout (`SplashPage.jsx`).
  - `src/components/pillar/`: Contains templates and section architectures for the Four Pillars (`PillarTemplate.jsx`, `FourPillarsMenu.jsx`).
  - `src/components/layout/`: Contains global shell structures (`TopNavBar.jsx`, `SideNavBar.jsx`, `Footer.jsx`).
- Use proper semantic HTML (`<main>`, `<section>`, `<article>`, `<aside>`, `<nav>`) rather than raw `<div>` tags whenever structural grouping is implied.

## 3. Tool Calling Conventions
- When creating bash scripts or files, run specific edits directly rather than streaming changes.
- Ensure all created tools or configuration files (`vite.config.js`, `astro.config.mjs`, package management) adhere to Mac / zsh operating system defaults as requested.

## 4. Updates & Evolution 
*(Agents: Add new architectural decisions here as the application scales!)*
- **State Management:** [To be determined - e.g., React Context, Zustand, Redux]
- **Routing:** [To be determined - e.g., React Router, Next.js App Router, Astro Routing]
- **API/Data:** [To be determined]

---
**Last Updated**: 2026-04-15
