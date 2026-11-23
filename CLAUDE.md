# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static site for **Retroriemu**. The main focus is the **Retroriemu-kirpputori** (retro flea market / recycling centre + Retro Ompelimo sewing shop) located in the Kivinokan kesäteatteri area, Helsinki, with a colourful, playful brand taken from the building's facade signage. The original premium event business built around the retro electric car (weddings, events, catering) lives on its own page, `retroauto.html`, which keeps the earlier retro-luxury look.

- Pure HTML5 + vanilla CSS + vanilla JS. **No frameworks, build tools, npm packages, CMS, or external libraries beyond Google Fonts.**
- All user-facing content is in **Finnish** (also alt texts, meta tags, error messages). No Lorem ipsum, no generic startup language.
- Hosted on **Netlify**, deployed automatically by pushing to `main` on GitHub (preview: `https://retroriemu.netlify.app/`, production domain: `https://retroriemu.fi`).
- Original specification: `ohjeet_Claude_Codelle.txt`. Finnish setup guides for the site owner: `GA4_OHJEET.txt`, `NETLIFY_FORMS_OHJEET.txt`, `README.md`.

## Running locally

There is no build, lint, or test tooling. Serve the directory statically:

```bash
npx http-server -p 8000      # or: python -m http.server 8000 (Python isn't installed on the owner's machine)
```

Opening the HTML files directly via `file://` also works for layout checks.

Netlify Forms submission only works on the deployed site; locally the POST will fail after client-side validation passes.

## Architecture

**Pages and stylesheets** – two separate visual systems:
- `index.html` + **`kirppis.css`** (standalone, `--k-*` variables, Fredoka/Nunito fonts, cream `#FFF8E3` with orange/blue/green/purple from the facade signs). Sticky nav with section links and a "Retroriemu-auto →" button. Sections: hero (`#top`, the single `<h1>`) → `#kirpputori` (Osto/Myynti) → `#ompelimo` → facade image → `#juhlaan` (Retroriemu-auto feature linking to `retroauto.html` + Suojateltat/Ateriapalvelut/Rakennuspalvelut tiles) → `#sijainti` (opening hours still a TODO comment) → `#yhteystiedot` (form) → footer → cookie banner.
- `retroauto.html` + **`styles.css`** (`--color-*`/`--spacing-*` variables, Playfair Display/Open Sans, beige + gold). Sticky `.auto-topbar` linking back to `index.html`; then hero, services, wedding showcase, why, custom quote, `#contact` form.
- `kiitos.html` (form thank-you page) and `tietosuoja.html` (privacy policy; keep its cookie/analytics section consistent with real behavior) load `styles.css` plus their own inline `<style>`. Renaming variables in `styles.css` affects all three.

**Images**: originals in `Kuvat/Julkisivumatskut/` are print files (up to 33,000 px / 11 MB) – never reference them from HTML. Pages use resized WebP copies in `Kuvat/web/`, generated with ffmpeg (available on this machine; Python is not), e.g. `ffmpeg -i in.png -vf "scale=1400:-2" -c:v libwebp -quality 82 Kuvat/web/out.webp`. Keep `width`/`height` attributes on `<img>` in sync with the real WebP size.

**Contact form (Netlify Forms)** – `#contactForm` exists on both `index.html` and `retroauto.html`
- Both use the same form name and identical field set: `name="contact" method="POST" action="/kiitos.html" data-netlify="true" netlify-honeypot="bot-field"`, hidden `form-name`, honeypot `bot-field`, and a hidden `sivu` field ("Kirpputori" / "Retroriemu-auto") telling which page the message came from. Netlify detects forms by parsing the static HTML at deploy time, so keep these in the markup (don't render via JS) and keep the field sets identical on both pages.
- `script.js` validates on blur and on submit (name ≥ 2 chars, email regex, message ≥ 10 chars, Finnish error text in `#nameError` etc.) and calls `preventDefault()` only when invalid; valid submissions post natively to Netlify. The `#successMessage` element is a leftover from the earlier mailto implementation and is no longer shown.

**Cookie consent + GA4** – consent stored in `localStorage.cookieConsent` (`'accepted'` / `'rejected'`).
- Banner (`#cookieConsent`) appears 1 s after load only if no choice is stored.
- GA4 loads from an inline `<head>` script in `index.html` and `retroauto.html` (returning visitors who accepted) and from `initializeGA4()` in `script.js` (on clicking "Hyväksy"). Rejected/no choice → GA never loads.
- Measurement ID is still the placeholder `G-XXXXXXXXXX`, in **6 spots**: 2 in each page head, 2 in `script.js`. Change all of them together.
- `script.js` is shared and looks up the form and cookie elements by id without null checks, so every page that loads it must contain both.

**SEO**
- Each page has its own meta tags, canonical URL and JSON-LD (`Store` on `index.html`, `LocalBusiness` on `retroauto.html`) whose service lists mirror the visible content — keep them in sync.
- `sitemap.xml` (update `lastmod` when pages change) and `robots.txt` (disallows `/kiitos.html`). Absolute URLs use `https://retroriemu.fi`.

**Assets** (`Kuvat/`): `vankkuriauto_logo1.png` (car page hero background), `vankkuriauto_kuvake1.png` (favicon), `vankkuriauto_haatapahtuma1.png` (car page wedding section), `web/*.webp` (homepage). The QR code and poster PNGs are print material.

## Design constraints

- Homepage: playful and colourful to match the facade signs, but still tidy and credible; rounded cards and pill buttons in the sign colours.
- Car page: retro luxury (beige, gold, serif headings, generous whitespace, subtle shadows).
- **Car page hero background must use `background-size: contain`** (not `cover`) with `background-color: rgb(123, 119, 112)` so the whole image, including text baked into it, is never cropped. Hero height is tuned per breakpoint (100vh desktop → smaller vh with min/max on mobile) and the overlay darkens from 0.5 to 0.6 at ≤480px.
- Breakpoints: 992px, 768px, 480px, 360px (`max-width` media queries, desktop-first).
- Semantic HTML with exactly one `<h1>`; Finnish alt text on all images.

`kiitos.html` is intentionally excluded from `sitemap.xml` and disallowed in `robots.txt`.
