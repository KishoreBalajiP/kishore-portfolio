# Design Review v2 — Kishore Balaji P Portfolio

**Reviewer:** Senior Staff Frontend Engineer / Principal Design Systems
**Date:** 2026

---

## 1. Executive Summary

v1 of the redesign fixed the dark-template problem but introduced a new one: a
**flat, white, evenly-centered layout** that reads as a generic AI-generated portfolio
("Bootstrap with a hero"). Every section used the identical recipe — centered eyebrow +
centered title + centered subtitle + identical bordered cards — producing monotony and
**zero visual hierarchy across sections**.

This review defines v2: a **layered-surface system** (soft neutral canvas, alternating section
tones, white only on cards), an **editorial left-aligned hierarchy**, **distinct card
archetypes per section**, and a **native-app mobile experience** with a frosted-glass bottom
navigation. Target: the precision of Stripe, Apple, Linear, Vercel, GitHub, Notion.

---

## 2. Page-by-Page Audit (v1, out of 10)

| Section | v1 | Issues |
|---|---|---|
| Hero / About | 6/10 | Dark navy block feels detached from the light site; centered-only composition; no distinct visual anchor; "availability pill + gradient name" is a template trope. |
| Skills | 6/10 | Functional categorization, but cards are mini-clones of Projects cards; mobile is 1-up (user requirement: exactly 2-up); no scan hierarchy inside cards. |
| Projects | 6/10 | Standard 2-col card grid, identical card anatomy to Skills/Certificates; weak sense of "case study"; modal is plain. |
| Certificates | 6/10 | Same card anatomy again; issuer treated as a chip instead of an identity element. |
| Contact | 6/10 | Centered header, generic info cards; no clear information architecture. |
| Navigation | 5/10 | Desktop-only nav; on mobile the section-jumping hamburger is web-like, not app-like; no thumb-reach nav; no safe-area handling. |
| Experience | n/a | **Missing entirely.** No career/education narrative between hero and skills. Resume content (B.Tech VIT-AP, product work, credentials) exists but is unmounted. |
| Overall v1 | 5.5/10 | Flat surfaces, template rhythm, duplicate card DNA, no mobile-first navigation, incomplete SEO depth. |

---

## 3. Core Problems (v1 → v2)

### 3.1 Color / Depth
- **Too much plain white.** `surface-0 #FFFFFF` dominates; alternating to `#F8FAFC` is
  imperceptible. Result: empty, Bootstrap-flat.
- No **layered surface language**: base canvas, raised canvas, white card, border, shadow
  hierarchy all need to be distinct but subtle.

### 3.2 Hierarchy & Rhythm
- **Every section centered** with identical structure = template tell.
- Cards share **one anatomy** (border + `shadow-xs` + rounded-lg) across Skills, Projects,
  Certificates → no way to tell sections apart at a glance.
- No editorial devices: no kickers with rules, no sticky headers, no asymmetric grids.

### 3.3 Mobile
- No bottom navigation; hamburger-only; **no safe-area support**; no frosted-glass surface;
  skills grid is 1-up on mobile.

### 3.4 Content Coverage
- No "Experience / Education" narrative despite real content (B.Tech VIT-AP from the unmounted
  Resume component, product work, dated credentials).

### 3.5 SEO depth
- v1 had solid basics (meta, OG, JSON-LD Person/WebSite) but no structured data for the
  two **projects** or the **credentials**; OG image missing explicit dimensions; no SEO report.

---

## 4. v2 Design Direction

1. **Layered neutral system.** Base canvas `#F6F7F9` → alternate `#EEF0F4` → cards white.
   White is reserved for cards and contained panels; **no large plain-white sections**.
2. **Alternating section backgrounds** (rhythm): Hero Neutral → Experience White →
   Skills Neutral₂ → Projects White → Certificates Neutral → Contact Neutral₂ → Footer Ink.
3. **Editorial hierarchy.** Left-aligned kicker + title + description with rule lines; hero is a
   **two-column** composition (story + credential panel). Not everything centered.
4. **Distinct card archetypes:**
   - Hero: layered **credential panel** (AWS, stats).
   - Experience: **timeline** entries (not cards).
   - Skills: compact **tile cards**, exactly 2-up on mobile.
   - Projects: **case-study cards** with imagery + stack footer.
   - Certificates: **credential cards** with issuer identity + verify CTA.
5. **Premium card language:** `rounded-2xl`, layered soft shadows, hairline borders,
   hover = lift + shadow deepen + 1.02 scale (subtle).
6. **Native mobile:** fixed frosted-glass **bottom navigation** (5 items, safe-area aware,
   scroll-spy active state), hidden ≥md; thumb-reachable; no hamburger.
7. **Micro-interactions:** fade/rise scroll reveals, elevation on hover, pressed scale on
   buttons, animated underlines. Nothing continuous.
8. **SEO depth:** add ItemList (projects) + EducationalOccupationalCredential (credentials)
   JSON-LD; OG dimensions; document FAQ/Breadcrumb decisions (not applicable to SPA) in
   SEO_REPORT.md.

---

## 5. Scoring Target (v2)

| Dimension | Target |
|---|---|
| Visual hierarchy | 10/10 — left-aligned editorial, distinct sections |
| Surface language | 10/10 — layered neutrals, no empty white |
| Card design | 10/10 — archetype-specific, premium radius/shadows |
| Mobile UX | 10/10 — bottom nav, safe-area, 2-up skills |
| Typography | 10/10 — display-light hero, fine type scale |
| Accessibility | 10/10 — WCAG AA, focus, ARIA dialogs, scroll-spy |
| SEO | 10/10 — meta + 4 JSON-LD blocks + sitemap + robots |
| Performance | 10/10 — self-hosted fonts, lazy media, ~97KB gz JS |
