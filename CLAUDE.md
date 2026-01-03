# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page project for **Retroriemu**, a premium event and experience service in Finland. The site is a one-page design built with vanilla HTML, CSS, and minimal JavaScript - no frameworks, build tools, or CMS platforms.

**Target audience**: Wealthy individuals and corporations
**Brand style**: Retro + luxury + modern, sophisticated, trustworthy

## Technical Stack

- Pure HTML5 (semantic structure required)
- Vanilla CSS (separate stylesheet)
- Minimal JavaScript for:
  - Form validation
  - Smooth scrolling
  - Cookie consent management
  - Google Analytics 4 integration
- No build process, no frameworks, no dependencies

## File Structure

```
├── index.html           # Main HTML file with all sections
├── styles.css           # Complete styling and responsive design
├── script.js            # Form validation, smooth scroll, cookies, GA4
├── GA4_OHJEET.txt      # Finnish instructions for Google Analytics setup
├── CLAUDE.md           # This file
├── ohjeet_Claude_Codelle.txt  # Original project specifications
└── Kuvat/
    ├── vankkuriauto_logo1.png    # Hero background image
    └── vankkuriauto_kuvake1.png  # Favicon
```

## Design System

**Color Palette**:
- Background: Light beige / natural white
- Accent: Gold
- Text: Dark gray / near black

**Typography** (Google Fonts):
- Headings: Playfair Display or Cormorant Garamond
- Body: Open Sans or Lato

**Visual principles**:
- Generous whitespace
- Rounded buttons
- Subtle box-shadow effects
- Fully responsive design

## Required Page Structure

The landing page must include these sections in order:

1. **Hero Section**
   - Full-width background image (retro car from `Kuvat/` folder)
   - Dark transparent overlay for text contrast
   - Title: "Retroriemu"
   - Subtitle: "Elämyksiä juhliin ja tapahtumiin – retrohenkisesti ja vaivattomasti"
   - CTA button: "Pyydä tarjous"

2. **Services Section**
   - 3-4 cards covering:
     - Retro electric car for events
     - Full-service event packages
     - Chef services and catering
     - Orchestras and entertainment
   - Each card: heading, 1-2 sentence description, simple icon (SVG or Unicode)

3. **Why Retroriemu Section**
   - Brief list highlighting:
     - Everything from one place
     - No stress for the client
     - Reliable partners
     - Serves all of Finland

4. **Pricing/Example Packages**
   - Starting prices:
     - Event package: from 1500 €
     - Wedding package: from 2000 €
   - Note: Each event is customized to client needs

5. **Contact Section**
   - Form fields: name, email, message
   - Form requires JS validation (no backend needed)
   - Display email: Andreas.lang@saunalahti.fi

6. **Footer**
   - "© Retroriemu – Elämyksiä juhliin ja tapahtumiin"
   - "Helsinki • Toimimme koko Suomessa"

## Asset Usage

Available images in `Kuvat/` folder:
- `vankkuriauto_logo1.png` - Use as logo
- `vankkuriauto_kuvake1.png` - Use as icon/favicon

## SEO Requirements

- Use semantic HTML elements (`<header>`, `<section>`, `<footer>`)
- Proper heading hierarchy (single `<h1>`)
- Meta title and description in Finnish
- Alt text for images in Finnish

## Content Guidelines

- All content in Finnish
- Sales-oriented but restrained tone
- Credible luxury service positioning
- No Lorem ipsum text
- No generic startup language

## Development Constraints

DO NOT use:
- WordPress or any CMS
- React, Vue, or other frameworks
- Build tools (webpack, vite, etc.)
- External libraries beyond Google Fonts

The final result should be deployment-ready for a home server.

---

## Implementation Details

### Hero Section Technical Specifications

**Background Image**:
- Source: `Kuvat/vankkuriauto_logo1.png`
- Background color: `rgb(123, 119, 112)` - shows around the contained image
- Background size: `contain` - ensures entire image is always visible
- Background position: `center`
- Responsive behavior:
  - Desktop: Full viewport height (100vh), min 600px
  - Tablet (768px): 70vh, min 400px, max 600px
  - Mobile (480px): 60vh, min 350px, max 500px
  - Small mobile (360px): 55vh, min 320px, max 450px

**Critical**: Using `contain` instead of `cover` ensures the entire background image (including any text in the image) is always visible without cropping on any screen size.

**Overlay**:
- Default: `rgba(0, 0, 0, 0.5)` - 50% dark overlay
- Mobile (480px): `rgba(0, 0, 0, 0.6)` - 60% for better text readability

### Cookie Consent Banner

**Implementation**: GDPR-compliant cookie consent system

**Location**: Fixed banner at bottom of page
**Visual**: White background, gold top border (3px), subtle shadow
**Content**:
- Title: "Evästeet"
- Description: Finnish text explaining cookie usage
- Two buttons: "Hyväksy" (Accept) and "Hylkää" (Reject)

**Behavior**:
- Appears 1 second after page load (first visit only)
- Slides up from bottom with smooth animation
- Choice stored in `localStorage` as `cookieConsent`
- Never shows again once user makes a choice
- Fully responsive (vertical layout on mobile)

**Files**:
- HTML: `index.html` lines ~159-173
- CSS: `styles.css` lines ~695-814
- JavaScript: `script.js` lines ~196-254

### Google Analytics 4 Integration

**Status**: Integrated and connected to cookie consent

**How it works**:
1. **If user ACCEPTS cookies**:
   - GA4 script loads dynamically
   - Analytics tracking begins
   - Data flows to Google Analytics dashboard

2. **If user REJECTS cookies**:
   - GA4 script does NOT load
   - No tracking occurs
   - Full privacy maintained

**Configuration Required**:
- Replace `G-XXXXXXXXXX` with actual GA4 Measurement ID
- Update in 2 files:
  - `index.html` lines ~30 and ~38
  - `script.js` lines ~221 and ~228

**Setup Instructions**:
- See `GA4_OHJEET.txt` for complete step-by-step guide in Finnish
- Includes: Account creation, property setup, getting tracking ID, testing

**Technical Implementation**:
- Conditional loading: GA4 only loads if `localStorage.getItem('cookieConsent') === 'accepted'`
- First-time visitors: GA4 loads when accepting cookies via `initializeGA4()` function
- Returning visitors (who accepted): GA4 loads immediately from HTML head
- Returning visitors (who rejected): GA4 never loads

**GDPR Compliance**: ✓ Fully compliant - analytics only active with explicit user consent

### Contact Form

**Type**: Client-side validation with mailto: link
**No backend required** - form opens default email client

**Validation**:
- Name: Minimum 2 characters
- Email: Valid email format (regex)
- Message: Minimum 10 characters
- Real-time error messages in Finnish
- Visual feedback with red borders and error text

**Behavior**:
- Creates mailto: link with subject and body pre-filled
- Opens user's default email client
- Shows success message for 3 seconds
- Form resets automatically

### Responsive Design Breakpoints

```css
Desktop:     No media query (default)
Tablet:      @media (max-width: 992px)
Tablet:      @media (max-width: 768px)
Mobile:      @media (max-width: 480px)
Small mobile: @media (max-width: 360px)
```

**Key responsive features**:
- Hero section heights adjust per breakpoint
- Service cards: Grid → Single column
- Pricing cards: Grid → Stacked
- Contact form: Side-by-side → Vertical
- Cookie banner: Horizontal → Vertical with full-width buttons
- Font sizes scale down appropriately
- Spacing (padding/margins) reduce on smaller screens

### Performance Optimizations

- Google Fonts preconnect for faster loading
- Async loading of GA4 script
- Smooth scroll uses native CSS `scroll-behavior`
- Minimal JavaScript - no heavy libraries
- CSS variables for consistent theming
- No unnecessary re-renders or DOM manipulations

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- localStorage support required for cookie consent
- ES6 JavaScript features used (arrow functions, template literals)
