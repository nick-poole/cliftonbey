# Al-Hakeem's Tonsorial

Personal barbershop website for Clifton "Al-Hakeem" Bey — Master Barber in Owings Mills, MD.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4b232e02-180e-4391-9381-e1b6b8c268f1/deploy-status)](https://app.netlify.com/sites/cliftonbey/deploys)

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- [Swiper.js](https://swiperjs.com/) for carousels
- [Remix Icons](https://remixicon.com/) 4.5.0 via CDN (with SRI)
- Google Fonts (Kanit, Poppins, Ubuntu)
- Deployed on [Netlify](https://www.netlify.com/) with built-in CSS/JS minification

## Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero, services carousel, portfolio gallery, contact, areas served |
| Services | `/services` | Full service menu, pricing, membership comparison table, FAQs |
| About | `/about` | Clifton Bey's bio and background |
| Cranial Prosthesis | `/cranial-prosthesis` | Dedicated page for certified cranial prosthesis services |
| Book | `/book` | SQUIRE booking widget, with the hosted SQUIRE short link as fallback |
| Blog | `/blog` | Blog landing page |
| Blog Post | `/blog/low-fade-vs-mid-fade-vs-high-fade` | Article: Which Fade Is Right for You? Low Fade vs. Mid Fade vs. High Fade Explained (August 5, 2026) |
| Blog Post | `/blog/is-a-barbershop-membership-worth-it` | Article: Is a Barbershop Membership Worth It? The Value of Consistent Professional Grooming (July 5, 2026) |
| Blog Post | `/blog/father-son-haircut-owings-mills` | Article: Why Father-Son Haircuts Build Confidence, Discipline, and Tradition (June 5, 2026) |
| Blog Post | `/blog/barber-vs-master-barber` | Article: Barber vs. Master Barber — The Real Difference (May 5, 2026) |
| Blog Post | `/blog/beard-maintenance-between-barber-visits` | Article: How to Maintain a Sharp Beard Between Barbershop Visits |
| Blog Post | `/blog/professional-grooming-first-impressions` | Article: The Power of Professional Grooming |
| Blog Post | `/blog/how-often-should-you-get-a-haircut` | Article: How Often Should You Get a Haircut? |
| Blog Post | `/blog/modern-barbershop-experience` | Article: The Modern Barbershop Experience |

## Features

- Responsive mobile-first design
- Structured data (JSON-LD) on every page: LocalBusiness, Person (with `hasCredential` for the Maryland Master Barber license and CCPS certification), BreadcrumbList, FAQPage, OfferCatalog, BlogPosting, Article
- Open Graph and Twitter Card meta tags for social sharing
- HTTP security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Cache headers for static assets (1-year immutable) and HTML (1-hour revalidate)
- Hero image preloaded with `fetchpriority="high"` for LCP optimization
- Lazy loading on below-fold images
- Skip-to-content links and ARIA landmarks for accessibility
- Eight-link social row in the footer (Facebook, Instagram, Threads, YouTube, X, TikTok, LinkedIn, Apple Podcasts) with a responsive grid (3 columns on mobile, 4 columns at 768px, 8 columns at 1000px)
- In-article chart components (`.chart-card` with navy, cream, and persian-red themes) used by the Barber vs. Master Barber post for training-hour bars, exam-breakdown bars, competency tables, and overlap cards
- Site-wide cross-linking between the master-barber article and the five sibling blog posts plus the homepage, about, services, and cranial-prosthesis pages
- The fade-styles article (`/blog/low-fade-vs-mid-fade-vs-high-fade`) cross-links to all seven sibling blog posts plus the about and services pages, and reuses real client fade photos from the portfolio for its Low Fade, Mid Fade, and Temple Taper figures
- Google Maps embed for business location
- Sitemap and robots.txt for SEO

## Project Structure

```
public/
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── swiper-bundle.min.css
│   ├── images/
│   │   ├── blog/
│   │   ├── favicons/
│   │   ├── logo/
│   │   └── portfolio/
│   └── js/
│       ├── main.js
│       └── swiper-bundle.min.js
├── blog/
│   ├── low-fade-vs-mid-fade-vs-high-fade.html
│   ├── is-a-barbershop-membership-worth-it.html
│   ├── father-son-haircut-owings-mills.html
│   ├── barber-vs-master-barber.html
│   ├── beard-maintenance-between-barber-visits.html
│   ├── professional-grooming-first-impressions.html
│   ├── how-often-should-you-get-a-haircut.html
│   └── modern-barbershop-experience.html
├── templates/
│   └── blog-template.html
├── 404.html
├── index.html
├── services.html
├── about.html
├── cranial-prosthesis.html
├── blog.html
├── sitemap.xml
└── robots.txt
styleguide/
└── blog-style-guide.html
templates/
└── blog-template.html
netlify.toml
```

## Local Development

This is a static site with no build step. Open any HTML file directly or use a local server:

```bash
npx serve public
```

## Deployment

Pushes to the main branch auto-deploy via Netlify. The `netlify.toml` config handles:
- Pretty URLs (strips `.html`)
- CSS/JS minification and bundling
- Security and cache headers
- Redirects

## Recent Updates

### SQUIRE booking migration (August 16, 2026)

**Booking moved from the previous provider to SQUIRE, and on-site.** The client launches SQUIRE on August 24, 2026, so every booking pathway was repointed off the old third-party booking URL. All 69 references across 17 HTML files are gone.

- **New `/book` page (`public/book.html`).** A conversion-focused booking landing page: a two-column top block (pitch + primary "Book Now" CTA on the left, vertically centered against a three-step "How It Works" list on the right), a "Good to Know" row (location, hours, walk-ins, cancellations — 4-up on desktop, 2x2 on tablet), and a closing navy callout band. A "Most Booked" service-card section was tried and removed: `SquireWidget.open()` accepts only brand/shop/barber, so a per-service CTA cannot preselect the service in the dialog. Booking opens in SQUIRE's slide-in dialog via `window.SquireWidget.open()`, pinned straight to Clifton's chair (`brand` + `shop`/`barber` slugs, skipping the brand-to-barber lookups). SQUIRE's floating corner bubble is hidden with CSS (`#squire_booking_widget_root { display: none }`) — **not** with the `x-squire-show-btn="false"` attribute, which also stops `dataPreloader.js` from loading and crashes `SquireWidget.open()` on the missing `window._squireQueryClient`; our two `data-squire-open` CTAs (hero and closing band) are the only triggers. The widget script is scoped to this page only.
- **Booking cannot dead-end.** Both Book CTAs are real `<a href="https://getsqr.co/clifton-22" target="_blank">` links; the wiring script upgrades clicks to the in-page dialog only when `window.SquireWidget` is ready. Widget blocked, slow, or JS off entirely -> the links simply work. The dialog is also pre-mounted during browser idle time (`window._squireMountWidgetSetup`) so the first open is instant.
- **URL is `/book`, not `/book/`.** The site-wide `/*/ → /:splat` rule in `netlify.toml` strips trailing slashes and every existing URL is extensionless-no-slash, so a `/book/` canonical would have fought that rule and looped.
- **All CTAs now internal.** Hero, services, blog callouts, 404, both blog templates, and the footer "Booking" link all point at `/book` in the same tab (`target="_blank"`/`rel` removed). Prose and FAQ answers that named the old provider were rewritten rather than URL-swapped, with the visible FAQ text and its `FAQPage` JSON-LD kept in sync.
- **Nav gained a Book item**, as the single emphasized `nav__link button`; Contact was demoted to a plain `nav__link` so the nav still has exactly one button. Book is **first in the DOM** — so it leads the mobile slide-in panel, where the primary CTA should be thumb-reachable — and carries `.nav__item--cta { order: 1 }` inside the `min-width: 1150px` query, which moves it to the right-hand end of the desktop row where a nav CTA conventionally sits. `.nav__list` is `display: flex` at every width (only `flex-direction` flips at the breakpoint), so `order` is honoured in both states.
- **The booking page cannot silently fail.** If the embedded frame has not booted within 10s, an inline script collapses the dead frame and reveals a prominent "Book on SQUIRE" fallback; a late boot restores the frame and re-hides the fallback. The success signal is a `message` event from the `https://getsquire.com` origin — the booking app posts to its parent frame on boot. The iframe `load` event is deliberately **not** used as a signal: Chromium fires it even for committed error pages, which would mask a dead embed. `window.__squireEmbedLoaded()` is a manual console/test hook. The script stays inline and independent of `main.js` so it runs regardless of the shared bundle's state.
- **Schema.** The `ReserveAction` `urlTemplate` in all 15 files carrying the graph now points at `https://alhakeems.com/book` and declares `actionPlatform` (desktop + mobile). New `BreadcrumbList` (Home → Book) on `/book`. `sameAs` was already clean; `getsqr.co` is deliberately not added there (booking endpoint, not a profile).
- **CSP: only `frame-src` needs SQUIRE.** `frame-src` allows the **apex** `https://getsquire.com` plus `https://*.getsquire.com`. Deploy-preview testing showed the booking app lives on the apex, which a `*.getsquire.com` wildcard does **not** match (CSP wildcards cover subdomains only) — the apex entry is what makes the embed render, so it must not be removed when tightening. Everything the framed app loads internally (Stripe, hCaptcha, its API) is governed by SQUIRE's own CSP, not ours, so no other directive lists SQUIRE hosts; the temporary `script-src`/`connect-src`/`style-src`/`font-src` widenings from the widget-loader era were reverted when the loader was dropped. Netlify applies every matching `[[headers]]` rule and browsers intersect duplicate CSP headers, so a `/book`-scoped policy would not work — the site-wide policy is the one that carries the frame-src entries.
- **Redirects.** `/booking` and `/book.html` → `/book` (301). `/book/` is already handled by the existing trailing-slash rule.
- New `.book__hero` (300px, reusing `tonsorial-hero.webp`) and `.book__fallback*` styles.

**Unrelated bug fixed in the same pass — `main.js` was dying on 15 of 16 pages.** `new Swiper(...)` was called unguarded, but `swiper-bundle.min.js` is only loaded by `index.html`. Every other page threw `Swiper is not defined`, which aborted the rest of the file — so the sticky-header background change, the scroll-to-top button, and the scroll-spy silently did nothing outside the homepage. Both constructors now go through an `initSwiper(selector, options)` helper that checks `typeof Swiper` and element presence before constructing, and returns `null` otherwise. Verified in headless Chromium: no page errors and the scroll handler is live on all 8 pages sampled, and the homepage carousels still initialize.

### Fade-styles article — Low Fade vs. Mid Fade vs. High Fade (August 5, 2026)

**New blog post — Which Fade Is Right for You? (`/blog/low-fade-vs-mid-fade-vs-high-fade`).** A new entry in The Tonsorial Journal targeting "low fade vs mid fade vs high fade," written in Clifton's first-person voice. The article explains where each fade begins (low, mid, high), clarifies the fade-vs-taper distinction, covers the temple taper, and walks through how to choose based on face shape, hair type, lifestyle, and profession. It carries the full metadata set (Open Graph/Twitter cards, BreadcrumbList, an enriched BlogPosting with an image array plus `inLanguage`/`articleSection`/`keywords`, and FAQPage), a `.blog__hero-8` hero (`fades-explained-hero.webp`, 1800×800) with a `role="img"` label, and left-aligned CTA copy via the opt-in `.blog__callout--left` modifier. The Low Fade, Mid Fade, and Temple Taper figures reuse real client photos from the portfolio; the High Fade slot and the three-up comparison strip remain drop-in placeholders until final images are produced. The post cross-links to all seven sibling articles plus the about and services pages.

### Barbershop Membership post, membership repricing, and mobile table (July 5, 2026)

**New blog post — Is a Barbershop Membership Worth It? (`/blog/is-a-barbershop-membership-worth-it`).** A new entry in The Tonsorial Journal targeting "barbershop membership," written in Clifton's first-person voice (he is a solo barber, so the copy stays "I"/"my" throughout — no "we"/"our"). The article makes the case for consistent professional grooming and includes a cost-comparison table that shows each metal tier against paying à la carte, using the real $60 Signature Cut. The Father & Son section intentionally emphasizes consistency, shared time, and tradition over dollar savings, per the client's direction.

- New `.blog__hero-7` hero variant (`assets/images/blog/first-class-razor.webp`, background position `60% 50%`)
- Cost-comparison table built on the reusable `.article__table`, plus a new `.article__table--sticky` modifier that freezes the first column on mobile so the tier names stay visible while the savings columns scroll horizontally (works around `overflow: hidden` trapping `position: sticky` by rounding corners on the `.table-responsive` wrapper instead)
- Full SEO layer: title tag, meta description, canonical, Open Graph / Twitter cards, and BlogPosting + FAQPage + Person + Breadcrumb JSON-LD; visible FAQ kept in sync with the FAQPage schema
- Internal links to `/services#memberships` and three sibling posts (father-son, professional-grooming, how-often, beard-maintenance)
- Added to the blog index grid (newest card), the blog `Blog` structured-data `blogPost` list, and `sitemap.xml`

**Membership repricing (site-wide).** Updated to the client's current pricing on `/services`, in the membership article's comparison table, and in the Father & Son article: **Bronze $110/month, Silver $165/month, Gold $215/month, Father & Son $180/month.** All monthly and annual savings in the article table were recalculated against the $60 Signature Cut (Bronze $10/mo · $120/yr; Silver $15/mo · $180/yr; Gold $25/mo · $300/yr).

**Cash discount removed.** The additional cash-payment discount is no longer offered; the "Cash payments save $4–$5/mo" note was removed from `/services` and the corresponding line dropped from the article.

**10% grooming-product discount narrowed to Silver and Gold.** Bronze no longer includes the 10% off grooming products. Updated the `/services` comparison table (Bronze cell now shows "—") and the article paragraph beneath the savings table to state the discount applies to Silver and Gold only.

**Zelle.** Confirmed there are no remaining Zelle references anywhere on the site (the client now processes payments through Square).

`sitemap.xml` `lastmod` values bumped to 2026-07-05 for `/blog`, the new membership article, `/services`, and the Father & Son article.

### Father-Son Haircut post, membership pricing, hours, and SEO audit (June 5, 2026)

**New blog post — Father-Son Haircuts (`/blog/father-son-haircut-owings-mills`).** A new entry in The Tonsorial Journal targeting the local-commercial keyword "father son haircut Owings Mills," written in Clifton's first-person voice. Per the client's brand direction, the article focuses year-round on the father-son relationship — mentorship, consistency, tradition, confidence, discipline, and self-respect passed from one generation to the next — with "The Corner Chair Experience" woven into the message and the closing emphasizing that fatherhood is lived every day, not celebrated once a year. Father's Day is intentionally kept to a single secondary FAQ mention rather than positioning the piece as a Father's Day article.

- New `.blog__hero-6` hero variant (`assets/images/blog/black-father-son-haircut.webp`) plus an in-flow `father-son-tradition.webp` figure
- BlogPosting + BreadcrumbList + FAQPage (6 Q&As) JSON-LD, `datePublished` / `dateModified` 2026-06-05, alongside the shared LocalBusiness/Person/WebSite graph
- Internal links to the Father & Son Membership (`/services#memberships`) and Youth Signature Cut (`/services#haircuts`), the booking page (`/book`), and four sibling posts; reverse contextual links added from the professional-grooming, how-often, and modern-barbershop posts
- Added to the blog index grid (newest card), the blog `Blog` structured-data `blogPost` list, and `sitemap.xml`
- CTA contrast fix: buttons placed inside `.article__section` now keep white text (a new rule prevents the inline-link color from overriding `.button`)

**Father & Son Membership pricing.** Updated to **$170/month** with the current benefit list (2 haircuts/month for father, 2 for son, priority booking, consistent grooming for both, optional additional youth at +$65/month) on `/services` and reflected in the article body and FAQ.

**Promotions and payment methods.** Removed the Government / Military / Teacher / Student discount section from `/services` (no longer offered) and scrubbed all Zelle references site-wide (the "$5 off via Cash or Zelle" line on the Father & Son Membership and the metal-tier "Cash or Zelle" savings note, now "Cash payments"), as the shop no longer accepts Zelle.

**Business hours (site-wide).** Updated everywhere — footers, the homepage contact card, and the LocalBusiness `openingHoursSpecification` JSON-LD on every page and both blog templates — to: **Closed Monday; Tuesday–Friday 10 AM–6 PM; Saturday 10 AM–4 PM; Sunday 10 AM–3 PM.**

**SEO / schema / accessibility audit.** Fixed a broken Open Graph / Twitter / schema image on the modern-barbershop post (it referenced a non-existent `modern-barbershop-experience.jpg`; now points to the image the post actually uses, `redd-francisco.webp`). Synced every page's declared `og:image:width` / `og:image:height` to the real file dimensions (several had falsely claimed 1200×630). Verified site-wide: one `<h1>` per page, `lang` attributes present, no duplicate element IDs, all images carry `alt` (decorative carousel images use `alt="" role="presentation"`), all `target="_blank"` links carry `rel="noopener noreferrer"`, clean heading order, and all JSON-LD blocks parse as valid. `sitemap.xml` `lastmod` values bumped to 2026-06-05 for every page. (Known minor item left as-is: `how-often-haircut.webp` contains JPEG bytes under a `.webp` extension — it renders correctly but could be re-encoded to true WebP.)

### Business email update (May 23, 2026)

All public-facing references to the legacy `clifton@alhakeems.com` address were swapped for the new shared business inbox `info@alhakeems.com`. The change covers every footer `mailto:` link, the homepage contact card (`href`, `title`, and the visible `<address>`), and the LocalBusiness `email` field in JSON-LD on `index`, `services`, `about`, `cranial-prosthesis`, `blog`, the 404 page, all five blog posts, and both blog templates. The cranial-prosthesis CTA paragraph is the intentional exception: it still routes to the dedicated `clifton@alhakeemsmedicalwigs.com` inbox so medical-wig inquiries land in the correct mailbox. `sitemap.xml` `lastmod` values were bumped to 2026-05-23 for every page.

### Address change (May 19, 2026)

Al-Hakeem's Tonsorial has moved to a new location inside **Salontra Select Suites**:

> Salontra Select Suites
> 10200 Grand Central Avenue, Suite 21
> Owings Mills, MD 21117

Every page (`index`, `services`, `about`, `cranial-prosthesis`, `blog`, all five blog posts, the 404 page, and both blog templates) was updated in three places: the LocalBusiness `PostalAddress.streetAddress` in JSON-LD, the footer address block, and any in-copy mention of the old venue name or street. The homepage contact card, location section, areas-served paragraph, and Google Maps iframe were also updated, along with the FAQ entry on `/services`. The schema `hasMap` URLs and the homepage location card now point to the canonical short URL `https://maps.app.goo.gl/E2xanCu54EYtj8u49`, the embedded iframe on the homepage uses the new place-keyed Google Maps embed for "Al-Hakeem's Tonsorial", and `GeoCoordinates` were updated to the new location (`39.406118`, `-76.781402`). `sitemap.xml` `lastmod` values were bumped to 2026-05-19 for every affected page.

### Barber vs. Master Barber post (May 5, 2026)

The newest blog post explains the difference between an unlicensed cutter, a licensed barber, and a master barber in Maryland. Highlights:

- Direct, AI-citable definition paragraph at the top (bolded master-barber sentence followed by the regular-barber comparison)
- Four custom chart components built with the new `.chart-card` scaffold:
  - Maryland Barber Training Requirements (horizontal stacked bars, navy theme)
  - Maryland Barber Theory Exam breakdown (horizontal gradient bars, persian-red theme)
  - What Your Barber Should Know (standard `.article__table`, Master Barber column first)
  - Where They Overlap (three-card overlap layout, navy theme)
- New `.blog__hero-5` variant with a custom hero image (`assets/images/blog/barber-vs-master-barber.webp`)
- FAQPage + Article + BreadcrumbList JSON-LD with `keywords`, `datePublished` / `dateModified` locked to 2026-05-05
- Four external links to the Maryland Department of Labor Board of Barbers and the license-lookup tool, plus internal links to `/services`, `/about`, `/cranial-prosthesis`, and the four sibling blog posts

### Person schema enrichment

Every page that references Clifton now ships a `Person.hasCredential` array calling out his Maryland Master Barber License (recognized by the Maryland Board of Barbers) and his Certified Cranial Prosthesis Specialist (CCPS) certification.

### Footer social row

The footer social row now carries eight links in this order: Facebook, Instagram, Threads, YouTube (The Corner Chair Experience), X, TikTok, LinkedIn, Apple Podcasts (The Tonsorial Podcast). The grid responds at three breakpoints: 3 columns on mobile (default), 4 columns at 768px, and 8 columns at 1000px.

### Maryland Department of Labor URLs

All `www.dllr.state.md.us/license/barb/...` URLs across the site and inside JSON-LD have been migrated to their current `labor.maryland.gov/license/barbers/...` and `labor.maryland.gov/license/law/...` equivalents.
