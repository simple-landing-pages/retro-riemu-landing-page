# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing site for **Retroriemu**, a premium event/experience service in Finland built around a retro electric car (weddings, corporate events, catering, entertainment). Audience: wealthy individuals and corporations. Brand: retro + luxury + modern, restrained and credible.

- Pure HTML5 + vanilla CSS + vanilla JS. **No frameworks, build tools, npm packages, CMS, or external libraries beyond Google Fonts.**
- All user-facing content is in **Finnish** (also alt texts, meta tags, error messages). No Lorem ipsum, no generic startup language.
- Hosted on **Netlify**, deployed automatically by pushing to `main` on GitHub (preview: `https://retroriemu.netlify.app/`, production domain: `https://retroriemu.fi`).
- Original specification: `ohjeet_Claude_Codelle.txt`. Finnish setup guides for the site owner: `GA4_OHJEET.txt`, `NETLIFY_FORMS_OHJEET.txt`, `README.md`.

## Running locally

There is no build, lint, or test tooling. Serve the directory statically:

```bash
python -m http.server 8000   # then open http://localhost:8000
```

Netlify Forms submission only works on the deployed site; locally the POST will fail after client-side validation passes.

## Architecture

**Pages**
- `index.html` – the one-page landing site. Section order: hero (`<header id="hero">`, the single `<h1>`) → `#services` (4 cards with inline SVG icons) → `#wedding-showcase` (uses `Kuvat/vankkuriauto_haatapahtuma1.png`) → `#why` → `#custom-quote` (tailored-quote pitch; replaced the original fixed-price section, no prices shown) → `#contact` → footer (links to `tietosuoja.html`) → cookie banner.
- `kiitos.html` – thank-you page the contact form redirects to.
- `tietosuoja.html` – privacy policy (GDPR); its cookie/analytics section must stay consistent with actual site behavior.
- Subpages load the shared `styles.css` (for `:root` CSS variables like `--color-gold`, `--spacing-*`) plus their own page-specific inline `<style>` block. Changing variable names in `styles.css` affects all three pages.

**Contact form (Netlify Forms)** – `index.html` `#contactForm`
- Uses `name="contact" method="POST" action="/kiitos.html" data-netlify="true" netlify-honeypot="bot-field"` plus a hidden `form-name` input and a hidden honeypot `bot-field`. Netlify detects forms by parsing the static HTML at deploy time, so these attributes and the hidden inputs must stay in the markup (don't render the form via JS).
- `script.js` validates on blur and on submit (name ≥ 2 chars, email regex, message ≥ 10 chars, Finnish error text in `#nameError` etc.) and calls `preventDefault()` only when invalid; valid submissions post natively to Netlify. The `#successMessage` element is a leftover from the earlier mailto implementation and is no longer shown.

**Cookie consent + GA4** – consent stored in `localStorage.cookieConsent` (`'accepted'` / `'rejected'`).
- Banner (`#cookieConsent`) appears 1 s after load only if no choice is stored.
- GA4 loads in two places: an inline script in `index.html` `<head>` (returning visitors who accepted) and `initializeGA4()` in `script.js` (on clicking "Hyväksy"). Rejected/no choice → GA never loads.
- Measurement ID is still the placeholder `G-XXXXXXXXXX`, in **4 spots**: 2 in `index.html` head, 2 in `script.js` `initializeGA4()`. Change all of them together.

**SEO**
- `index.html` head contains meta description/keywords, Open Graph/Twitter tags, and a JSON-LD `LocalBusiness` block whose service list mirrors the service cards — keep them in sync when services change.
- `sitemap.xml` (update `lastmod` when pages change) and `robots.txt` (disallows `/kiitos.html`). Absolute URLs use `https://retroriemu.fi`.

**Assets** (`Kuvat/`): `vankkuriauto_logo1.png` (hero background, OG image), `vankkuriauto_kuvake1.png` (favicon), `vankkuriauto_haatapahtuma1.png` (wedding section). The QR code and A3 poster PNGs are print material, not used by the site.

## Design constraints

- Palette via CSS variables in `styles.css` `:root`: beige background (`--color-bg`), gold accent (`--color-gold`), near-black text. Fonts: Playfair Display (headings), Open Sans (body). Generous whitespace, rounded buttons, subtle shadows.
- **Hero background must use `background-size: contain`** (not `cover`) with `background-color: rgb(123, 119, 112)` so the whole image, including text baked into it, is never cropped. Hero height is tuned per breakpoint (100vh desktop → smaller vh with min/max on mobile) and the overlay darkens from 0.5 to 0.6 at ≤480px.
- Breakpoints: 992px, 768px, 480px, 360px (`max-width` media queries, desktop-first).
- Semantic HTML with exactly one `<h1>`; Finnish alt text on all images.

`kiitos.html` is intentionally excluded from `sitemap.xml` and disallowed in `robots.txt`.
