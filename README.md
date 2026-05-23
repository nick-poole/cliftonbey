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
| Blog | `/blog` | Blog landing page |
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
- Site-wide cross-linking between the master-barber article and the four sibling blog posts plus the homepage, about, services, and cranial-prosthesis pages
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
