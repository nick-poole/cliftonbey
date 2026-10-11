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
| Book | `/book` | Booking landing page — every Book CTA links straight to the hosted Booksy page (`https://alhakeemstonsorial.booksy.com`, new tab) |
| Black-Owned Barbershop | `/black-barbershop-owings-mills` | Landing page for "Black-owned barbershop" searches in Owings Mills: client gallery, first-visit pricing, directions, FAQ, BuyBlack.org badge |
| Blog | `/blog` | Blog landing page |
| Blog Post | `/blog/private-barber-suite-vs-barbershop` | Article: The Barbershop as a Safe Space: Why It Still Matters (October 5, 2026) |
| Blog Post | `/blog/how-much-should-a-haircut-cost` | Article: How Much Should a Haircut Cost? (September 5, 2026) |
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
- The haircut-cost article (`/blog/how-much-should-a-haircut-cost`) links out to six sibling posts (fades, how-often, membership, professional grooming, master barber, modern barbershop) plus six per-service anchors on `/services`, and receives inbound links from the how-often, membership, and professional-grooming posts
- The fade-styles article (`/blog/low-fade-vs-mid-fade-vs-high-fade`) cross-links to all seven sibling blog posts plus the about and services pages, and reuses real client fade photos from the portfolio for its Low Fade, Mid Fade, and Temple Taper figures
- The safe-space article (`/blog/private-barber-suite-vs-barbershop`) links out to six sibling posts (haircut cost, membership, father-son, modern barbershop, professional grooming) plus the about, services, cranial-prosthesis, and book pages, and receives inbound links from the haircut-cost and modern-barbershop posts
- Black-owned barbershop landing page linked from every footer ("Black-Owned Barbershop" in the Company list, which replaced the old "Your Local Barber" link to `/#local`), the homepage Areas Served paragraph, the About bio, and contextual links across the site
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
│   │   ├── badges/
│   │   ├── blog/
│   │   │   └── heroes/
│   │   ├── favicons/
│   │   ├── gallery/
│   │   ├── logo/
│   │   └── portfolio/
│   └── js/
│       ├── main.js
│       └── swiper-bundle.min.js
├── blog/
│   ├── private-barber-suite-vs-barbershop.html
│   ├── how-much-should-a-haircut-cost.html
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
├── black-barbershop-owings-mills.html
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

## Voice and Point of View

Clifton is a solo barber, so the site never says "we" or "our" about the shop.

| Where | Point of view | Example |
|------|------|------|
| Homepage, About, Cranial Prosthesis, Black-Owned Barbershop | Third person, about Clifton | "Clifton has been cutting hair since 1996." |
| Services (descriptions, policies, FAQ) | First person, Clifton speaking | "I ask that clients cancel or reschedule online." |
| Book | Neutral, addressed to the client | "Pick a service, choose a time." |
| Blog posts | First person, Clifton speaking | "After more than three decades behind the chair, I've learned..." |
| Blog author bios and sign-off cards | Third person | "Clifton operates Al-Hakeem's Tonsorial in Owings Mills." |
| FAQ questions | The client's voice | "Do I need an appointment?" |

Rules that follow from it:

- **No "we" or "our" for the business.** "We" is fine when it means people in general ("the decisions we make") or barber and client together ("together, we'll find the style"), and when it is Clifton speaking for barbers as a group in his own essays ("that's not our role").
- **Third-person pages don't narrate authorship.** Link to a blog post with what the reader gets ("read why, in his own words"), not "Clifton has written about...".
- **His own words stay his.** Clifton's essays (September and October 2026) are published with his sentences unedited; quotes of them elsewhere are verbatim.

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

### Black-owned page follow-ups: link color, interlinking, point of view (October 11, 2026)

- **Homepage link color.** The "Black-owned barbershop" link in the Areas Served paragraph sat on the navy band in the default red, which read poorly. `.areas-served__description a` now uses the gold accent (`--second-color`, about 9:1 on prussian blue) with an underline and a cornsilk hover. axe-core clean on the section.
- **Interlinking.** Contextual in-body links to `/black-barbershop-owings-mills` now come from ten pages, each on words already in the copy: homepage (Areas Served), About (bio), Services (location FAQ, "Owings Mills"; the FAQ text itself is unchanged so it still matches its schema), Book (a "Parking and Metro" link beside "Get directions" in the Location card, pointing at `#finding-the-suite`), and the father-son, haircut-cost, membership, modern-barbershop, professional-grooming, beard-maintenance (author bio), master-barber (sign-off card), and private-suite (address line, to `#finding-the-suite`) posts. Not linked on purpose: the fade and how-often posts (no Owings Mills mention in the body to hang a link on), the cranial prosthesis page, the blog index, and the 404. All of them still reach the page through the footer.
- **Point of view.** A site-wide audit set the convention now documented under *Voice and Point of View* above. Fixes: the new page's two sentences that narrated authorship ("In October, Clifton wrote about..." and "Clifton has written about...") now read "Read why, in his own words" and "built around the father-son haircut tradition"; editorial "our" became "my" in the how-often post (beard care guide, membership options), the modern-barbershop post (haircut guide), and the beard post ("as I covered in my guide"); the services FAQ's "contact us directly so we can make it right" is now "contact me directly so I can make it right", in both the visible answer and its FAQPage schema. `dateModified` bumped on the how-often and modern-barbershop posts.
- **Footer.** The "Your Local Barber" link (to the homepage `#local` section) was removed from the Company list on all 20 HTML files; "Black-Owned Barbershop" takes its place as the footer's local-intent link.
- **Housekeeping.** Cache-bust `?v=20261011b` on all 20 HTML files. The sitemap already lists the page (added in the previous commit, priority 0.80, lastmod 2026-10-11).
- **Validation.** W3C Nu checker: no messages beyond the known heading-less-section notes, across every page. `html-validate` clean on every page. Every JSON-LD block parses; every internal link and `#finding-the-suite` fragment resolves.

### Black-owned barbershop landing page (October 11, 2026)

**New page — Black-Owned Barbershop in Owings Mills, MD (`/black-barbershop-owings-mills`).** A free page Nick wrote for Clifton, aimed at "Black barbershop near me" searches and written for someone choosing a barber. Built from Nick's October 10 draft; every business fact matches the live site (1996 apprenticeship and 1999 master barber license from `/about`; prices, first-visit description, and the Father & Son $180/month rate from `/services`; walk-in wording now matches the services FAQ exactly: "when availability allows"). Title tag "Black-Owned Barbershop in Owings Mills, MD | Al-Hakeem's" (56 chars), 144-char description, H1 "Black-Owned Barbershop in Owings Mills, MD". URL drops the draft's trailing slash to match the site-wide `/*/ → /:splat` rule; `/black-barbershop-owings-mills.html` 301s to it.

- **Hero** reuses the homepage photo of Clifton at work (`tonsorial-hero.webp`) as a real `<img>` via new `.blog__hero-11`, so returning visitors already have it cached; a 1200×630 crop (`black-barbershop-owings-mills-og.jpg`) is the social image and the WebPage `primaryImageOfPage`.
- **Gallery** (new `.cut-gallery`, 2 up on phones, 3 up from 768px, uniform 4:5 tiles) uses nine client photos that were already in the repo but unused: seven from `portfolio/reserve/` and two of the five unnamed JPEGs in `assets/images/blog/`, one photo per client, grouped Fades and Tapers / Lineups / Beards / Young Clients. Processed into `assets/images/gallery/` as WebP with descriptive names. `youth-curly-top-taper.webp` is cropped to remove an old Booksy watermark (`al-hakeemsbarbershop.booksy.com`) and avatar. Alt text names the cut, Clifton, and the shop; each photo is also an `ImageObject` with caption and `creator` → Clifton in the page's WebPage node. Nick confirmed permission covers the two youth photos.
- **Black-Owned, in Owings Mills** quotes Clifton verbatim from his October essay (two passages, cited and linked) instead of new sentences written for him; he signs off before publish. The section carries the BuyBlack.org member badge (`assets/images/badges/buyblack-member-badge.png`, 120px, `rel="nofollow noopener"`, consistent with the earlier sitewide decision) next to the Support Black Owned listing link, plus the Pew Research figure (Maryland ~10% of firms, 2022 data, confirmed at the source) and the 2020 Census line for Owings Mills (35,674 people, about six in ten Black). **The Census figures were read from a secondary copy; confirm on data.census.gov before merge.**
- **Finding the Suite** uses sourced public facts only: Salontra is in the 10200 Grand Central Avenue building at Metro Centre; Metro Centre's garages are free (Garage 1, 5048 Painters Mill Road; Garage 2, 10450 Grand Central Avenue); the Owings Mills station, last stop on the Metro SubwayLink, connects to Metro Centre by a pedestrian tunnel under I-795. The entrance and the route to Suite 21 are left out until Clifton supplies them. The map embed is the shop's own Google listing, same as the homepage.
- **Deliberately left out:** the draft's hair-loss sentence and `/cranial-prosthesis` link (the service is not ready to be promoted), straight razor shaves (not on the services menu), a Metro walking distance, and any phone number other than (347) 815-5706.
- **Schema:** the shared entity graph, BreadcrumbList (Home → page), WebPage (`about` → business, `significantLink` → `/book`, gallery `image` list), and FAQPage mirroring the five visible questions word for word.
- **Inbound links:** a "Black-Owned Barbershop" item in the footer Company list on all 20 HTML files (the root `templates/blog-template.html` uses its relative `../*.html` link style), "Black-owned barbershop" in the homepage Areas Served sentence, and "a trusted Black-owned barbershop owner in Owings Mills" in the About bio.
- **Housekeeping:** sitemap gains the URL at priority 0.80 and every `lastmod` moves to 2026-10-11; cache-bust is now `?v=20261011` on all 20 HTML files.
- **Validation:** W3C Nu checker 0 errors (the only note is the shared heading-less intro section); `html-validate` clean; axe-core WCAG 2.1 AA clean on the page content at 1400px and 390px (the one finding is the site-wide footer phone-link label already logged in the previous entry); JSON-LD parses, every `@id` resolves, FAQ text matches, every schema image exists; no horizontal scroll at 390px.

### Pre-publication validation pass for PR #28 (October 10, 2026)

Run against the whole branch, since the schema change touched 18 pages. Tooling: W3C Nu checker 26.10.9 via `vnu-jar` (`java -jar vnu.jar --stdout --format json`, with the house-style "trailing slash on void elements" note filtered), `html-validate` 8 with the repo's `.htmlvalidate.json`, axe-core (WCAG 2.0/2.1 A+AA plus best-practice rules) in headless Chromium through Playwright at 1400px and at a 390px iPhone viewport, a structural JSON-LD audit script (every block parses; every `{"@id"}` reference resolves inside the page's graph; BlogPosting carries headline, image, datePublished, author, publisher, mainEntityOfPage, description; schema image URLs exist as files; breadcrumb positions are sequential and end on the canonical; FAQPage text is compared to the visible FAQ; the business node has name, address, telephone, hours, sameAs, alternateName, containedInPlace), and a sitemap cross-check (every non-404 page is listed, nothing listed is missing, every canonical matches its `<loc>`).

- **W3C:** zero errors on all 18 real pages. The only five errors are the `{{SLUG}}` / `{{FEATURED_IMAGE}}` placeholders in the two blog templates, already noted below as a known item. Seventeen info-level "section lacks heading" notes are the intro `<section>` without an H2 that every post uses.
- **html-validate:** clean on every page touched in this PR.
- **axe-core:** the new post is clean at both widths, including the stacked table (`data-label` pseudo-content and the visually hidden `<thead>`). The how-often post is clean. Three pre-existing findings elsewhere were left as they are and are listed here for a later decision: (1) `label-content-name-mismatch` (WCAG 2.5.3) on the phone links in the footer, contact card, and book page, because the digit-by-digit `aria-label` chosen on September 30 does not contain the visible "(347) 815-5706"; the fix that keeps the digit-by-digit reading is to lead the label with the visible text. (2) The gold `.section__subtitle` labels on the homepage, already recorded as a design decision. (3) Low-contrast labels inside the red `.chart-card--red` exam-breakdown chart on the master-barber post (foreground #363a45 on #be3737, about 2:1), which predate this PR.
- **Schema:** zero structural issues on any page. The FAQ-text comparison shows minor wording drift between visible answers and schema on five older posts and the services page (pre-existing; Google asks only that the content be visible, not identical). The new post's five answers and the new line-up answer match their schema text exactly.
- **Sitemap:** 16 URLs, matches the page set, canonicals match, `lastmod` 2026-10-10 on every URL because the cache-bust touched every page.

### Search-intent layer on the safe-space post, brand schema, old-slug redirect, line-up FAQ, master-barber retitle (October 10, 2026)

**Safe-space post re-targeted at client-side "private barber suite vs. barbershop."** SERP research showed the "barber suite" results are written for barbers deciding whether to rent; the only client-facing page is a ~250-word post from a one-barber studio in Laurel. Clifton's H1, subtitle, byline, and every sentence of his prose are unchanged; his one-line paragraphs were regrouped into normal paragraphs for the web. What changed around them: slug is now `/blog/private-barber-suite-vs-barbershop` (renamed before anything went live, so no redirect needed); title tag "Private Barber Suite vs. Barbershop: Why Trust Matters" (55 chars) while the H1 keeps his headline; meta/OG/Twitter/BlogPosting description leads with the comparison; `keywords` lead with the primary query; tags are "Barbershop Experience" + "Private Suite". Eight of his twelve H2s were reworded to carry the query while keeping his phrase where he had one (e.g. "How to Know You've Found a Good Barber: Trust Is Built Through Consistency"); "The Barber Chair Has a Unique Perspective" was deliberately kept as written. Added, visibly separate from his prose: an "At a Glance" definition box (`.chart-card`, third person, names Suite 21 at Salontra Select Suites) after the back link; a six-row comparison `<table>` (`.article__table--compare`) as an H3 at the end of the privacy section, caption linking to `/services`, with the new opt-in `.article__table--stack` modifier that turns each row into a labeled card below 640px (Clifton's one review note: the three-column grid was crowded on his phone); a five-question FAQ replacing the previous four (do you have to talk to your barber, is it rude not to talk, confidentiality, is a barber a therapist, suite vs. barbershop) with answers written to say only what his sections already say, mirrored in the FAQPage JSON-LD (no links to `/cranial-prosthesis` remain in the post; the service is not ready to be promoted from it); a sixth question on private hair-loss appointments was drafted and removed because the cranial prosthesis service is not ready to be promoted from this post; the CTA heading is now "Book a Private Barber Suite Appointment in Owings Mills" with the full suite address in plain text. **Not added, on purpose:** any HIPAA claim (not verifiable from the site), a "silent appointment" service promise, the audiobook entity, links to locale pages that do not exist, and the Suite 21 hero photo (Nick is not asking Clifton for one; the stock interior stays).

**Brand entity schema, site-wide (18 files; `404.html` carries no graph).** The business node gained `alternateName` (Al Hakeem's Tonsorial, Al-Hakeems Tonsorial, Al Hakeem Tonsorial, Al-Hakeem the Barber) for the spelling variants Search Console shows, `containedInPlace` → Salontra Select Suites with its postal address, and three `sameAs` entries the footer already linked or the shop already holds: the YouTube channel, the Apple Podcasts show, and the BuyBlack.org listing (citation only; the badge itself was reverted in the same PR). The Person node gained `alternateName` (Al-Hakeem, Cliff Al-Hakeem, Clifton Al-Hakeem Bey). Target: the site averaged position 9.2 for its own name.

**Old slug redirect.** `/blog/how-often-should-get-a-haircut` still appears in Search Console and had no rule; `netlify.toml` now 301s it to the current slug. The `http://alhakeems.com/*` → HTTPS forced 301 from September 5 already covers the HTTP homepage variant; the HTTP clicks in GSC predate it.

**"How long does a line up last?"** The how-often post answered how often to get one but never how long one lasts (578 impressions at position 6.3, 1 click). Added a sentence under the lineups heading and a visible FAQ + FAQPage entry: about 1 to 2 weeks, consistent with the post's existing 1-to-2-week maintenance interval. `dateModified` bumped.

**Master-barber post retitled toward "what is a master barber"** (position 8.5, 551 impressions, vs. 2.6 for "barber vs master barber", 63). Title tag is now "What Is a Master Barber? Barber vs. Master Barber Explained" (59 chars, brand suffix dropped from the 69-char original); OG/Twitter titles match; the four descriptions lead with the definition. The H1, the "What Is a Master Barber?" section, and its bolded direct-answer paragraph were already in place, so no body change. `dateModified` bumped.

### Safe-space article — The Barbershop as a Safe Space: Why It Still Matters (October 5, 2026)

**New blog post — The Barbershop as a Safe Space: Why It Still Matters (`/blog/private-barber-suite-vs-barbershop`).** Clifton's October essay on trust, discretion, and community in the barbershop, written around his move back into a private suite. Published in his voice with his sentences unedited; his one-line paragraphs were grouped into normal paragraphs for the web, and two runs of parallel lines (the values he is carrying into the suite, and the "Can you expect…" consistency questions) became `<ul>` lists with each item verbatim. The deck "More Than a Haircut: Trust, Community, and the Importance of the Barber-Client Relationship" is a styled `<p class="blog__subheading">` and the schema `alternativeHeadline`. The headline is kept as both the title tag and the H1 (52 characters); the SEO layer targets the long-tail cluster around **barbershop as a safe space / why the barbershop still matters / private barber suite vs. traditional barbershop** in the meta description and `keywords`. Ahrefs had no API units left when the post was built, so no volume data backs that choice; re-check the cluster when units reset. Between his sections sits a four-question FAQ (what a safe space means here, private suite vs. traditional shop, discretion, what builds trust) whose answers are drawn only from his own text and mirrored in the `FAQPage` JSON-LD. Schema follows the site convention (global entity graph by `@id`, BreadcrumbList, BlogPosting, FAQPage). Cross-links: "Last month, I wrote about…" goes to the haircut-cost post; tradition → father-son; consistency → membership; "a premium grooming environment" → modern barbershop; "changes in their appearance" → cranial prosthesis; three decades → about; CTA → `/services` and `/book`. The haircut-cost post ("the relationships that develop over time") and the modern-barbershop post ("the relationship between a client and their barber") link back, with their `dateModified` bumped. Hero is the `classic-barbershop-interior` pair from the heroes library (real `<img>`, 2400×1260, `fetchpriority="high"`; the 1200×630 `-og.webp` is the social image) via a new `.blog__hero-10` rule, which is why the `styles.css` / `main.js` cache-bust string is now `?v=20261010c` across all 19 HTML files. Added to the blog index grid (newest card), the `Blog` schema `blogPost` list, and `sitemap.xml` (every `lastmod` set to 2026-10-10, since the cache-bust touched every page). Clifton offered a photo for the piece; swap the two hero files under the same names if he sends one.

### Site-wide validity, accessibility, and interlinking pass (September 6, 2026)

Audited every page with the W3C Nu checker (run locally via `vnu-jar`), `html-validate`, and axe-core (WCAG 2.1 AA + best practices) in headless Chromium.

- **`.visually-hidden` was `display: none`**, which hides text from screen readers as well as sighted users, so every label that relied on it (nav logo text, footer social names) was silent. Replaced with the standard clip-rect pattern.
- **Footer social links** on eight pages had no text at all (icon only). Each now carries `aria-hidden` on the icon and a visually-hidden name, matching the pattern the blog posts already used. Nav toggle/close buttons declare `type="button"` on every page.
- **Landmarks.** Blog heroes moved inside `<main>` and the scroll-to-top control inside `<footer>` on all pages, so no content sits outside a landmark.
- **Contrast.** New `--text-color-muted` token (4.5:1+ on white and cream) replaces the too-light `--text-color-light` on captions, card meta, service durations, chart subtitles/footers, and the home description. Table captions declare their own background so contrast checkers stop assuming the navy table behind them. The homepage inline link is underlined so it does not rely on color alone.
- **W3C errors cleared:** decorative carousel images no longer pair `alt=""` with `role="presentation"`; the Google Maps iframe drops its `width="100%"` attribute (CSS already sizes it); master-barber chart bars carry `role="img"` with their labels and the captioned figure drops its `role`; services comparison headers declare `scope="col"` and the blank corner header has a hidden "Feature" label. Remaining W3C messages are informational (self-closing slashes on void elements, the house style) plus the placeholder URLs in the blog template.
- **Interlinking.** The haircut-cost post now links to six siblings; the how-often, membership, and professional-grooming posts link back on natural anchors (see Features).
- `sitemap.xml` `lastmod` set to 2026-09-05 for every URL (the `lang`/cache-busting change touched every page); how-often `dateModified` bumped to match its retitle.
- **Known, left as design decisions:** the gold `.section__subtitle` labels on the homepage (`--second-color` on cream, ~1.7:1) fail AA and would need a darker gold (~`hsl(42, 98%, 30%)`) to pass; `public/templates/blog-template.html` is publicly reachable with placeholder URLs and should be moved out of `public/` or given `noindex`.

### Indexing hygiene, nav CTA, and asset cache-busting (September 5, 2026)

- **`<html lang="en-US">` on all 18 pages and templates** (was `en`), plus a site-wide `Content-Language: en-US` response header in `netlify.toml`. Search Console showed the blog picking up auto-translated impressions overseas; both signals tell search engines the site is US English only.
- **How-often post retitled toward intent.** Title tag is now "How Often Should You Get a Haircut? A Schedule by Style" (55 chars) and the meta / Open Graph / Twitter descriptions lead with the 2-to-4-week answer. The phrase "a master barber" was removed from all of them: the page was drawing ~1.9K zero-click impressions for "almost became a master barber", a query with nothing to do with the article. The `Person` schema still carries the Master Barber job title, which is entity data, not a page-topic signal.
- **Explicit `http://alhakeems.com/* -> https://` 301 (`force = true`)** in `netlify.toml`. Netlify already forces HTTPS at the edge; the rule makes it declarative so an HTTP variant can never be served alongside the canonical. Audit confirmed every canonical, sitemap `<loc>`, and internal link is already `https://`.
- **Asset cache-busting.** `/assets/css/*` and `/assets/js/*` are served `immutable, max-age=31536000`, but the filenames never changed, so returning visitors could keep a year-old stylesheet and never see layout fixes (this is why the Book button appeared out of position for some viewers). Every `styles.css` and `main.js` reference now carries `?v=20260905`. **Bump the version string in all 20 HTML files whenever either asset changes.**
- **Nav Book CTA visible before scroll.** In the un-scrolled header state the red-gradient button sat on the red header and read as plain text. At desktop widths the CTA now renders cream with navy text until `.bg-header` is applied on scroll, when it returns to the red gradient. Placement was already correct: `.nav__item--cta { order: 1 }` puts it at the right-hand end of the row at ≥1150px.

### Haircut-cost article — How Much Should a Haircut Cost? (September 5, 2026)

**New blog post — How Much Should a Haircut Cost? (`/blog/how-much-should-a-haircut-cost`).** H1 carries the pricing query; the deck "Why Cheap Haircuts Can Cost More in the Long Run" is the author's headline and the schema `alternativeHeadline`. Clifton's own essay on price versus value in barbering, published in his voice with his sentences unedited. The SEO layer targets **"how much does a men's haircut cost"** (parent topic "how much is a mens haircut", the only cleanly male-intent term in the cluster; the broader "how much does a haircut cost" rolls up to women's salon pricing and "men's haircut prices" to the budget-chain cluster, so both are deliberately avoided in metadata). The title tag carries the query while the on-page H1 keeps the author's headline; six of the ten H2s were reworded to question format. Between his sections sit a two-paragraph national/Baltimore price-range block, a **"What I Charge at Al-Hakeem's Tonsorial"** `<table>` mirroring the published `/services` rate card (each row links to a new per-service anchor on that page), and a five-question FAQ (what a men's cut costs here, why haircuts cost what they do, what is included in a service, fixing a bad haircut, how often to cut) whose first answer leads with the shop's real $60 price before the national context. Schema follows the site convention (global entity graph referenced by `@id`, BreadcrumbList, BlogPosting with `alternativeHeadline` for the deck, FAQPage mirroring the visible answers) and adds six `Service` nodes with `Offer` prices whose `@id`s match the new `/services#…` anchors, also stamped onto the matching `Service` nodes in the services page's `OfferCatalog`. A closing **Sources** section cites SQUIRE's *2026 State of the Barbershop Industry Report* (13.9M appointments across 7,000+ shops; source of the $43 national and $40 Southern regional averages, also linked inline) and the Maryland Board of Barbers licensing and exam pages, rendered as reference-style `[1]` markers via CSS counters; the same references sit in the BlogPosting `citation` array. SQUIRE is deliberately chosen over salon-blended aggregator data: it is barbershop-only, current, and the platform the shop books on. The subtitle is a styled `<p class="blog__subheading">`, not an H2. The hero is a real `<img>` (`assets/images/blog/heroes/barber-shears-straight-razor-hero.webp`, 2400×1260, `fetchpriority="high"`, alt text) filling the `.blog__hero-9` band via the new `.hero > img` rule; the matching 1200×630 `-og.webp` is the Open Graph / Twitter image. Both live in a new `assets/images/blog/heroes/` library that also holds seven more hero + OG pairs (barber chairs, clippers, shears in motion, classic interior, barber pole, barbers at work, vintage chair) ready for future posts. `netlify.toml` gained `[context.deploy-preview]` and `[context.branch-deploy]` commands that flip every page's robots meta to `noindex, nofollow` on non-production deploys.

### Booksy booking migration (September 30, 2026)

**Booking moved from SQUIRE to Booksy.** The client now books through Booksy, so `/book` was repointed. `alhakeems.com/book` stays the address given to clients; it is the page that hands off to Booksy.

- **`/book` CTAs.** Both Book Now buttons (hero and closing band) and the "Trouble booking?" fallback link are plain `<a href="https://alhakeemstonsorial.booksy.com" target="_blank" rel="noopener noreferrer">` links. No booking script runs on the page anymore: the SQUIRE widget loader, the `[data-squire-open]` wiring script (dialog open, idle pre-mount, corner-bubble suppression) and the `#squire_booking_widget_root` CSS rules were removed. On-page copy now says booking runs through Booksy and opens in a new tab; the "no account needed" note was dropped since that was a SQUIRE-specific claim.
- **Preconnect.** The `widget.getsquire.com` / `getsquire.com` preconnects were replaced by a single `alhakeemstonsorial.booksy.com` preconnect so the Booksy tab opens faster.
- **CSP tightened.** With no embedded booking dialog, `script-src`, `frame-src` and `connect-src` no longer list any SQUIRE host: `script-src 'self' 'unsafe-inline'`, `frame-src https://www.google.com`, `connect-src 'self'`. The apex-vs-wildcard lesson in the previous entry no longer applies to a live host but is kept below for the record.
- **Schema.** The business node's `sameAs` in all 17 files carrying the entity graph (15 pages plus both blog templates) now lists `https://alhakeemstonsorial.booksy.com`: unlike the old short link, the Booksy page is a public business profile (reviews, photos, hours), so it belongs beside the social profiles. The `ReserveAction` `urlTemplate` deliberately stays `https://alhakeems.com/book`: the client wants alhakeems.com to remain the booking address given out, and `/book` is the page that hands off. The `/book` `WebPage` node gained `significantLink` pointing at Booksy and its `description` names Booksy.
- **SEO.** The `/book` meta description, Open Graph and Twitter descriptions now name Booksy (covers "al hakeem booksy" style queries and sets expectations in the snippet). Booksy links carry `rel="noopener"` without `noreferrer`, so Booksy's own analytics attribute the traffic to alhakeems.com; the Google Maps link keeps `noreferrer`. `sitemap.xml` `lastmod` bumped to 2026-09-30 on every URL, since every page's schema changed.
- **A11y.** All three Booksy links and the "Get directions" link carry a `.visually-hidden` "(opens in a new tab)" hint for screen-reader users. Existing landmarks were re-checked: skip link to `#book`, single `<h1>`, `h2`/`h3` order intact, icons `aria-hidden`, nav toggle/close labelled, footer phone link spelled out digit-by-digit.
- **NAP.** Name, street address (`10200 Grand Central Avenue, Suite 21, Owings Mills, MD 21117`), phone (`+1-347-815-5706` in schema, `(347) 815-5706` visible) and hours (Tue–Fri 10–6, Sat 10–4, Sun 10–3, closed Monday) match across the footer, the `/book` info cards and the schema on every page. The one outlier, the `/book` fallback phone link's `tel:+13478155706` href, now uses the site-wide `tel:347-815-5706` form.
- **Not touched.** The haircut-cost article still cites SQUIRE's *2026 State of the Barbershop Industry Report* as a pricing data source (inline link, Sources list, and `citation` schema); that is a data citation, not a booking reference, and stays. All other pages already link to `/book` rather than to any provider, so nothing changed there.

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
- **Dedicated hero + social image for `/book`.** `assets/images/book-hero.webp` (1800x514 panoramic, black-and-white) is the page hero and LCP preload; `book-hero.jpg` is the `og:image`/`twitter:image` (1800x514 with matching width/height/alt tags). The files carry the client-chosen photo (recovered at original quality); to swap the artwork later, replace both files under the same names — no code changes needed.
- **Page-level structured data on `/book`.** In addition to the site-wide graph and BreadcrumbList (`#breadcrumb`), the page carries a `WebPage` node (`#webpage`) with `primaryImageOfPage`, `isPartOf` -> `#website`, `about` -> `#business`, and `breadcrumb` linkage.
- **A11y + validation pass on `/book`.** Icon `<i>` elements are `aria-hidden`, info-card titles are real `<h3>` headings, nav toggle/close buttons declare `type="button"`, footer social links have `aria-label`s, and phone links are `white-space: nowrap`. The page passes `html-validate` clean against `.htmlvalidate.json` (repo root), which encodes the house void-element style.

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
