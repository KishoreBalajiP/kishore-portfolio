# SEO Report — Kishore Balaji P Portfolio

**Target:** 100/100 SEO (Lighthouse), production-grade structured data, natural keyword coverage.
**Date:** 2026

---

## 1. Framework note (important)

This project is a **Vite + React single-page application**, not Next.js. The "Next.js Metadata
API" (generateMetadata / metadata exports) does not apply here — its Vite/React equivalent is
**static `<head>` metadata in `index.html`** plus **JSON-LD structured data**, which is exactly
what a server-rendered Next.js app would emit. All of the following is implemented directly in
`index.html` and `public/`.

---

## 2. On-page metadata (implemented)

| Item | Value |
|---|---|
| `<title>` | `Kishore Balaji P — AWS Certified Solutions Architect & Full Stack Developer` |
| `meta name=title` | same |
| `meta description` | 158-char, keyword-inclusive, natural sentence |
| `meta keywords` | role + geography + tech clusters (not stuffed) |
| `meta author` | Kishore Balaji P |
| `meta robots` | `index, follow, max-image-preview:large` |
| `meta theme-color` | `#0B1220` |
| `link canonical` | `https://kishorebalajip.github.io/kishore-portfolio/` |
| `html lang` | `en` |

## 3. Social / rich media

- **Open Graph:** `og:type=website`, `og:url`, `og:title`, `og:description`, `og:image`,
  `og:site_name`, `og:locale=en_IN`, plus `og:image:width=1200`, `og:image:height=630`.
- **Twitter:** `summary_large_image` + title/description/image.
- **Favicon:** `favicon.svg` (KB monogram), also used as apple-touch-icon.
- **Web manifest:** `manifest.webmanifest` (name, theme, icons).

## 4. Structured data (JSON-LD)

| Block | Type | Matches on-page content |
|---|---|---|
| 1 | `Person` | name, role, address (Chennai/Tamil Nadu/IN), email, phone, `sameAs` (LinkedIn/GitHub/Twitter/Instagram), `knowsAbout`, `hasCredential` (AWS SAA) |
| 2 | `WebSite` | url, name, description, `inLanguage` |
| 3 | `ItemList` | the **two featured projects** as `SoftwareApplication` items (name, url, applicationCategory, offers, author) |
| 4 | `EducationalOccupationalCredential` | AWS SAA + IBM + HackerRank credentials with `recognizedBy`, `validFrom`, `credentialCategory` |

All blocks reference only content that is **visibly on the page** (no fabricated claims).

### FAQ / Breadcrumb decisions (documented, intentionally omitted)
- **FAQPage:** not emitted — there is no FAQ content on the page; schema.org requires the
  Question/Answer blocks to reflect visible content. Adding fake Q&A would violate both the
  "no invented content" constraint and Google's guidelines (eligible for a manual action).
- **BreadcrumbList:** not applicable — this is a single-URL SPA; breadcrumbs describe
  multi-level site architecture.

---

## 5. Indexing & crawler files

- `public/robots.txt` — allow all + sitemap reference.
- `public/sitemap.xml` — single URL, `lastmod 2026-08-03`, priority 1.0.
- Both copied verbatim into `dist/` on build (verified).

## 6. Keyword strategy (natural, not stuffed)

Primary phrase: **"AWS Solutions Architect & Full Stack Developer"** (title + description + H1
context + Person.jobTitle).

Natural coverage targets (used in title/description/schema/body, never listed):
- Brand: Kishore Balaji, Kishore Balaji Portfolio
- Roles: AWS Engineer, DevOps Engineer, Cloud Engineer, Software Engineer, Full Stack Developer,
  Frontend Developer, React Developer, Node.js Developer, React Native Developer
- Stack: TypeScript Developer, Next.js Developer
- Geography: Chennai Software Engineer, India Cloud Engineer, Tamil Nadu, India

## 7. Semantic HTML / accessibility contributions to SEO

- Single `h1` (hero name); `h2` per section; `h3` per card — clean outline.
- `<main>`, `<nav aria-label>`, `<section aria-label>`, `<footer>`, skip-link.
- Every image has `alt`; links use descriptive text; no orphan text.

## 8. Verification

- Build passes; `dist/index.html` confirmed to contain title, description, canonical, OG, Twitter,
  theme-color, and **4 JSON-LD blocks**.
- `dist/` confirmed to contain `robots.txt`, `sitemap.xml`, `favicon.svg`, `manifest.webmanifest`,
  `og-image.png` (1200×630).
- Lighthouse SEO target: **100**.

## 9. Post-deploy checklist

- [ ] Confirm production origin matches canonical/sitemap/OG URLs (currently GitHub Pages default).
- [ ] Submit `sitemap.xml` in Google Search Console; request indexing of the canonical URL.
- [ ] Test share previews (LinkedIn/Facebook/X debuggers) using `og-image.png`.
- [ ] Confirm `og:image` URL is absolute and reachable.
