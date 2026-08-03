# Design System v2 — "Layered Enterprise" (Kishore Portfolio)

Token-driven system. Every value defined once. **The single most important rule: white is never a
page background — white is a card surface.**

---

## 1. Principles

1. **Layered, never flat.** Every section sits on a distinct neutral surface; depth comes from
   surface + hairline border + layered shadow, not from darkness.
2. **One accent, used with intent.** Enterprise blue is for actions, links, focus, and the active
   nav state — never decoration.
3. **Typography carries hierarchy.** Light-weight display type, tight tracking, uppercase
   kickers with rules. No gradient text, no glow text.
4. **Archetype cards.** A skills tile, a project case, and a certificate are three different
   components — not three copies of one card.
5. **Native-feeling mobile.** Thumb-reach bottom navigation, safe-area aware, frosted glass.
6. **AA accessible + reduced-motion friendly.** Every interaction has keyboard + focus parity.
7. **Fast by default.** Self-hosted variable fonts, lazy media, zero render-blocking third parties.

---

## 2. Surface Language (the core of v2)

| Token | Hex | Role |
|---|---|---|
| `canvas` | `#F6F7F9` | base page surface (soft neutral) |
| `canvas-2` | `#EEF0F4` | alternating section surface |
| `surface` | `#FFFFFF` | cards, panels, inputs — **only** |
| `ink-900` | `#0B1220` | footer + dark accents |
| `ink-800` | `#101828` | dark raised |
| `line` | `#E4E7EE` | hairline borders |
| `line-strong` | `#D5DAE3` | border hover / stronger dividers |

**Section rhythm (alternating):**

```
Hero        → canvas      (+ gradient + grid texture)
Experience  → surface     (white panel w/ border separation)
Skills      → canvas-2
Projects    → surface
Certificates→ canvas
Contact     → canvas-2
Footer      → ink-900
```

---

## 3. Color

### Accent — Brand Blue
| Token | Hex | Use |
|---|---|---|
| `brand-50` | `#EFF5FF` | icon chips, active tint |
| `brand-100` | `#DBE8FF` | hover tint |
| `brand-500` | `#3B82F6` | focus ring, links on dark |
| `brand-600` | `#2563EB` | primary buttons, links, active nav |
| `brand-700` | `#1D4ED8` | primary hover |
| `brand-800` | `#1E40AF` | pressed |

### Text
| Token | Hex | Contrast on canvas/surface |
|---|---|---|
| `slate-900` `#0F172A` | headings | 17.1:1 AAA |
| `slate-600` `#475569` | body | 7.2:1 AAA |
| `slate-500` `#64748B` | supporting | 4.7:1 AA |
| `slate-400` `#94A3B8` | captions / meta | 3.1:1 (large/icon only) |

### Semantic
| Token | Hex | Use |
|---|---|---|
| `success-600` | `#059669` | verify / success |
| `success-50` | `#ECFDF5` | success panel |

---

## 4. Typography

Self-hosted variable: **Sora** (display) + **Inter** (body). Both `font-display: swap`.

| Role | Size | Line | Weight | Tracking |
|---|---|---|---|---|
| Display H1 (hero name) | `clamp(2.75rem, 8vw, 5.25rem)` | 1.02 | **Light 300** | -0.03em |
| Hero role | `clamp(1.25rem, 3vw, 1.75rem)` | 1.3 | Medium 500 | -0.01em |
| Section H2 | `clamp(1.75rem, 4vw, 2.5rem)` | 1.12 | SemiBold 600 | -0.02em |
| Card H3 | `clamp(1.125rem, 2vw, 1.375rem)` | 1.3 | SemiBold 600 | -0.01em |
| Kicker / eyebrow | `0.75rem` | 1 | SemiBold 600 | **0.16em** uppercase |
| Lead | `1.125rem` | 1.7 | Regular 400 | 0 |
| Body | `1rem` | 1.65 | Regular 400 | 0 |
| Small / meta | `0.875rem` | 1.5 | Regular 400 | 0 |

**Editorial device — Kicker with rule:**
```
━ ENTREPRENEURIAL BACKGROUND
```
A short rule (24–32px) before the uppercase kicker anchors each section header and replaces the
template "pill" look.

---

## 5. Spacing

- Scale: Tailwind default (4px base).
- Section vertical rhythm: `py-[clamp(4.5rem,10vh,7rem)]` — **one token** used everywhere.
- Content column: `max-w-content` = `72rem`; prose `max-w-prose` = `42rem`.
- Card padding: `p-5` (tiles) / `p-6` (default) / `p-8` (panels).
- Grid gaps: tiles `gap-3 sm:gap-4`, cards `gap-5 sm:gap-6`.

---

## 6. Radius & Shadow

### Radius
| Token | Value | Use |
|---|---|---|
| `rounded-lg` | 0.5rem | buttons, inputs |
| `rounded-xl` | 0.75rem | compact surfaces |
| `rounded-2xl` | 1rem | standard cards |
| `rounded-3xl` | 1.5rem | hero panel, modals |
| `rounded-full` | 9999px | icons, pills |

### Shadows (layered, cool-tinted)
| Token | Value |
|---|---|
| `shadow-xs` | `0 1px 2px rgb(15 23 42 / 0.04)` |
| `shadow-card` | `0 1px 2px rgb(15 23 42 / 0.04), 0 10px 28px -12px rgb(15 23 42 / 0.10)` |
| `shadow-card-hover` | `0 2px 4px rgb(15 23 42 / 0.04), 0 24px 48px -16px rgb(15 23 42 / 0.18)` |
| `shadow-panel` | `0 1px 2px rgb(15 23 42 / 0.05), 0 16px 40px -20px rgb(15 23 42 / 0.16)` |
| `shadow-modal` | `0 24px 64px -16px rgb(15 23 42 / 0.28)` |

---

## 7. Component Archetypes

### 7.1 Header
- Transparent over hero (dark text) → `bg-white/80 backdrop-blur-xl border-b border-line` on scroll.
- Desktop: 6 anchor links + scroll-spy underline + Resume button.
- Mobile: logo + compact resume action only (navigation delegated to BottomNav).

### 7.2 BottomNav (mobile only, `md:hidden`)
- Fixed bottom, `rounded-t-2xl`, `bg-white/85 backdrop-blur-xl`, top hairline, soft top shadow.
- 5 items: Home, Experience, Projects, Certificates, Contact.
- Safe-area: `padding-bottom: calc(env(safe-area-inset-bottom) + 8px)`.
- Active state: brand pill behind icon + brand label; `aria-current`.
- Scroll-spy driven.

### 7.3 Buttons
- Heights: `h-10` (sm) / `h-12` (md/lg). Min tap target 44px.
- States: hover = `-translate-y-0.5` + shade shift; **pressed = `scale-[0.98]`**;
  `focus-visible` = 2px brand ring + offset; disabled = 50% + no pointer.
- Primary: `bg-brand-600 text-white` hover `bg-brand-700`.
- Secondary: white surface + `line` border, hover raises to `shadow-card`.
- onDark: for footer/dark panels.

### 7.4 Cards by archetype
| Archetype | Radius | Anatomy |
|---|---|---|
| Hero credential panel | 3xl | layered stack, gradient halo, stat rows |
| Experience timeline | — | vertical rule + dots + entries (no card boxes) |
| Skills tile | 2xl | icon chip, title, tech list (dense), 2-up mobile |
| Project case | 2xl | imagery, deployment tag, stack chips, link footer |
| Certificate | 2xl | issuer identity, image panel, verify footer |

---

## 8. Motion

| Pattern | Value |
|---|---|
| Reveal (once) | 600ms fade + 16px rise, `cubic-bezier(.22,1,.36,1)` |
| Card hover | 200ms `-translate-y-1` + shadow deepen + scale(1.02) |
| Button pressed | 100ms scale(0.98) |
| Link underline | 200ms width 0→100% |
| BottomNav active | 250ms icon pill swap |

Rules: one-time reveals, `prefers-reduced-motion` disables transforms, **no infinite loops**,
no background drift. The only permitted continuous element is a 2px status pulse on the hero
availability dot (suppressed under reduced motion).

---

## 9. Accessibility Contract

- AA contrast on all meaningful text (table §3).
- `:focus-visible` rings on every interactive element; skip-link present.
- Modals: `role="dialog"`, `aria-modal`, `aria-labelledby`, focus trap, Escape, scroll-lock.
- Anchors are real `<a href="#id">`; `aria-current` on active nav.
- `scroll-padding-top` compensates fixed header; body padding-bottom compensates BottomNav.
- Semantic landmarks: `header/nav/main/section/footer`.
