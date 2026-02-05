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
| Blog Post | `/blog/modern-barbershop-experience` | Article: The Modern Barbershop Experience |

## Features

- Responsive mobile-first design
- Structured data (JSON-LD) on every page: LocalBusiness, Person, BreadcrumbList, FAQPage, OfferCatalog, BlogPosting
- Open Graph and Twitter Card meta tags for social sharing
- HTTP security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Cache headers for static assets (1-year immutable) and HTML (1-hour revalidate)
- Hero image preloaded with `fetchpriority="high"` for LCP optimization
- Lazy loading on below-fold images
- Skip-to-content links and ARIA landmarks for accessibility
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
│   │   ├── favicons/
│   │   ├── logo/
│   │   └── portfolio/
│   └── js/
│       ├── main.js
│       └── swiper-bundle.min.js
├── blog/
│   └── modern-barbershop-experience.html
├── templates/
│   └── blog-template.html
├── index.html
├── services.html
├── about.html
├── cranial-prosthesis.html
├── blog.html
├── sitemap.xml
└── robots.txt
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
