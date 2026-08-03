# Implementation Plan v2 — Layered Enterprise Redesign

Ordered, dependency-safe. Each phase verifiable in isolation. All functionality, APIs, data,
routing (section anchors), and business logic preserved.

---

## Phase 0 — Tokens & Foundation

1. `tailwind.config.js` — layered surface tokens (`canvas`, `canvas-2`, `surface`, `line`),
   display-light type scale, `shadow-card`/`shadow-card-hover`/`shadow-panel`/`shadow-modal`,
   `rounded-3xl`, bottom-nav-safe spacing.
2. `src/index.css` — base canvas color, kicker-with-rule utility, `section-y` rhythm token,
   safe-area utilities, focus/selection, reduced-motion, scrollbar.
3. `index.html` — add JSON-LD `ItemList` (projects) + `EducationalOccupationalCredential`
   (credentials); `og:image:width/height`; keep Person/WebSite.
4. `public/` — unchanged set already present (favicon, manifest, robots, sitemap, og-image).

## Phase 1 — Navigation

5. `Header.tsx` — transparent→glass on scroll (dark text over light hero), 6 desktop links with
   scroll-spy underline, Resume CTA; mobile = logo + compact resume only (nav delegated to
   BottomNav).
6. `BottomNav.tsx` (new) — mobile-only frosted-glass fixed bar, 5 items (Home/Experience/
   Projects/Certificates/Contact), rounded-t-2xl, safe-area padding, scroll-spy active pill,
   `aria-current`, hidden ≥md.

## Phase 2 — Sections (rewrites + new)

7. `About.tsx` (hero, id="about") — layered neutral canvas w/ gradient + grid texture;
   two-column editorial hero: story (kicker rule, display-light name, role, bio, CTAs, trust
   chips) + **credential panel** (AWS SAA card w/ stat rows).
8. `Experience.tsx` (new, id="experience") — white panel; editorial two-col: sticky intro
   (kicker, title, description, resume link) + **timeline** of real content: Education
   (B.Tech CSE · VIT-AP from Resume.tsx), Product entries (JayaStores, VivasayiAI from Projects
   data), Credentials (dated certs). All facts already exist in the codebase.
9. `Skills.tsx` (id="skills") — canvas-2; header row; **tile grid exactly 2-up on mobile**
   (grid-cols-2 → lg:grid-cols-4), equal height, icon chip, title, tech list; Core Strengths
   band preserved.
10. `Projects.tsx` (id="projects") — white; case-study cards (imagery, deployment tag, stack
    chips, link footer) + polished shared modal (unchanged data/links/report).
11. `Certificates.tsx` (id="certificates") — canvas; credential cards (issuer identity, image
    panel, date/expiry, verify CTA) + preserved carousel modal (drag/arrows/keyboard/dialog
    ARIA).
12. `Contact.tsx` (id="contact") — canvas-2; two-col info (phone/email/location/socials) +
    form panel; EmailJS logic untouched; map dialog preserved.
13. `Footer.tsx` — ink-900; brand + links + socials + legal; extra bottom padding for BottomNav
    clearance.

## Phase 3 — Wiring & Verification

14. `App.tsx` — order: About → Experience → Skills → Projects → Certificates → Contact.
15. `npm run typecheck`, `npm run lint`, `npm run build`, preview smoke test (200s on
    /, pdf, favicon, robots, sitemap, og-image, manifest).
16. QA checklist below.

---

## QA Checklist

- [ ] IDs preserved: `about, skills, projects, certificates, contact` + new `experience`.
- [ ] Bottom nav shows 5 items only; hidden on desktop; active state tracks scroll.
- [ ] Skills grid = exactly 2 columns on mobile; 4 on desktop; equal heights.
- [ ] No plain-white page areas; section surfaces alternate.
- [ ] Resume download (hero + header) works.
- [ ] EmailJS submit/sending/success states intact.
- [ ] Certificate carousel: drag, arrows, ←/→/Esc keys.
- [ ] Project modal: open/close/Escape/focus-trap; links `_blank` + rel.
- [ ] Map dialog opens/closes; "Open in Google Maps" works.
- [ ] Keyboard-only: skip link → header → content; modals trap focus; no dead ends.
- [ ] `prefers-reduced-motion`: reveals become opacity-only.
- [ ] No horizontal scroll at 320/375/768/1440.
- [ ] Lighthouse: Perf ≥ 95, A11y 100, Best Practices 100, SEO 100.
