# stock-imagery

Raw, full-size Unsplash downloads that Nick has picked as candidates for blog hero images.

**This folder is a source library, not a web folder.** It sits outside `public/`, so Netlify never deploys it. Nothing on the site may link to a file in here.

## The rule

A photo from this folder MUST go through all four steps before any version of it lands in `public/`:

| # | Step | Requirement |
|---|------|-------------|
| 1 | **Resize** | Crop to the hero sizes below. Never ship the original dimensions (these are 4000–6700px wide). |
| 2 | **Convert** | WebP only. No `.jpg` or `.png` copies in `public/`. |
| 3 | **Compress** | Hero under about 300 KB, social image under about 150 KB. The originals are 1–6.5 MB each. |
| 4 | **Rename** | Descriptive kebab-case name. No photographer name, no Unsplash ID, no `-unsplash`, no ` (1)`, no spaces. |

Do not copy, move, or symlink an original into `public/`, and do not reference `stock-imagery/` from HTML, CSS, schema, or the sitemap.

## Output spec

Every hero is a pair of files in `public/assets/images/blog/heroes/`:

| File | Size | Used for |
|------|------|----------|
| `<name>-hero.webp` | 2400 × 1260 | The post's hero `<img>`, the LCP preload, the blog index card, the first `image` in the `BlogPosting` schema |
| `<name>-og.webp` | 1200 × 630 | `og:image`, `twitter:image`, the second `image` in the `BlogPosting` schema |

Both are a 1.905:1 landscape crop. Many photos here are portrait, so choose the crop deliberately (see the centering arguments below) and look at the result before using it.

## Naming

Name the file after what is in the picture, in two to five lowercase words joined by hyphens, the same way the existing library is named:

```
barber-pole-shaving-brush-hero.webp
barber-pole-shaving-brush-og.webp
classic-barbershop-interior-hero.webp
vintage-barber-chair-chrome-og.webp
```

| Source file | Good | Bad |
|-------------|------|-----|
| `jon-tyson-6fOU40RFpHo-unsplash.jpg` | `barber-fading-client-hero.webp` | `jon-tyson-6fOU40RFpHo-hero.webp` |
| `jj-shev-VrxWLZnCcBA-unsplash (1).jpg` | `straight-razor-leather-strop-og.webp` | `jj-shev (1).webp` |

Check that the name is not already taken in `public/assets/images/blog/heroes/`.

## How to process one

Python with Pillow does all four steps and strips the EXIF data. Save this as a script outside the repo (or run it inline) from the repo root:

```python
import sys
from PIL import Image, ImageOps

src, name, out = sys.argv[1], sys.argv[2], sys.argv[3]
cx, cy = (float(v) for v in (sys.argv[4:6] or (0.5, 0.5)))

im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
for suffix, size in (("hero", (2400, 1260)), ("og", (1200, 630))):
    ImageOps.fit(im, size, Image.LANCZOS, centering=(cx, cy)).save(
        f"{out}/{name}-{suffix}.webp", "WEBP", quality=72, method=6
    )
```

```bash
python3 make_hero.py "stock-imagery/alex-mihai-c-FWgYghZrVqU-unsplash.jpg" barber-tools-on-counter public/assets/images/blog/heroes 0.5 0.5
```

The last two numbers are the crop centre, from `0 0` (top left) to `1 1` (bottom right). `0.5 0.5` is the middle; use something like `0.5 0.3` to keep the upper part of a portrait photo.

If a file comes out over the size budget, lower `quality` a few points (65 is still fine for these) and run it again.

## After processing

1. Open both output files and confirm the crop, the dimensions, and the file sizes.
2. Write alt text that describes the picture.
3. Use the pair the way the existing posts do: a real `<img>` in the hero band with `width="2400" height="1260"` and `fetchpriority="high"`, a matching `<link rel="preload">`, and a `.blog__hero-N` rule in `styles.css` for `object-position`.
4. Leave the original in this folder. One source photo can be reused for a different crop later.

## Adding photos to this folder

- Unsplash downloads only, kept under the filename Unsplash gives them (`photographer-ID-unsplash.jpg`). The name is the record of who took the photo and which one it is.
- The photo's page is `https://unsplash.com/photos/<ID>`, where the ID is the part between the photographer's name and `-unsplash`.
- The Unsplash licence allows commercial use without attribution. Photos with recognisable people, logos, or other shops' branding still need a second look before they represent this business.
