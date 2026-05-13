# Molly Mueller Portfolio — Claude Code Kickoff Brief
*For use at the start of a Claude Code session*

---

## Project Overview

Building a portfolio site for Molly Mueller — Senior Product Designer / AI Front-End Developer. The site is designed in Figma and partially prototyped in Claude chat. This session picks up where that left off and builds the full production site.

**Deploy target:** Netlify
**Stack:** Next.js (App Router) — for SEO, routing, and static export compatibility with Netlify
**Styling:** CSS Modules or plain CSS — no Tailwind (design uses exact px values from Figma)
**Fonts:** Google Fonts — Bungee, Bungee Shade, Libre Bodoni (already working in prototype)

---

## Figma File

**File key:** `g6Nk5p5TC3wN4UKEWXNBIN`
**File:** Molly Mueller Design Portfolio

### Key node IDs
| Section | Node ID |
|---|---|
| Landing page (default) | `31-2421` |
| Landing page hover state | `76-3397` / `76-3652` |
| Molly Mueller name | `37-2511` |
| AI Empowered | `31-2441` |
| Systems Obsessed | `31-2424` |
| Data Driven | `31-2477` |
| Product Designer | `31-2460` |
| Case studies listing — AI tab | `22-2259` |
| Volt full case study page | `69-3114` |
| Mobile layout | `69-3196` |

---

## Site Structure

```
/                    → Landing page (hero)
/case-studies        → Case studies listing (tag-filtered)
/case-studies/volt   → Volt 2.0 full case study
/case-studies/gamification → Gamification case study
/case-studies/solar-university → Solar University case study
/about               → About page
```

### Navigation tabs
`home · ai · systems · data · about`

Active tag highlighted in orange (`#fa2a00`). Case studies listing page filters by tag. Each case study can carry multiple tags.

### Case study tags
| Case Study | Tags |
|---|---|
| Volt Redesign 2.0 | ai · systems · data |
| Gamification | ai · data |
| Solar University | ai |

---

## Design System

### Colors
```
background:   #403f3f
white:        #f5f5f5
red/orange:   #fa2a00   ← primary accent, hover color
dark:         #403f3f   ← same as bg, used for card shadows
```

### Typography
```
Bungee Shade  → red shadow layer (decorative, aria-hidden)
Bungee        → white fill layer (semantic, readable)
Libre Bodoni  → body, serif text, navigation, CTA
```

### The Bungee Letter Technique
**Critical:** The layered font effect (Bungee Shade base + individually positioned Bungee Regular letters on top) cannot be done with a single element. Each word requires:
1. Full word in `Bungee Shade` as the base layer (`color: #fa2a00`)
2. Each individual letter in `Bungee Regular` absolutely positioned on top (`color: #fff`)
3. Exact `left`/`top` values from Figma dev mode per letter
4. The Shade word and fill letters are both `aria-hidden="true"` — semantic text goes in a visually hidden `aria-label` on the wrapper

This technique is already built for the landing page hero. Reuse the same pattern for case study page titles (Volt 2.0, etc.).

### Card Component
White card (`#f5f5f5`) with a stacked shadow effect:
- Layer 1 (back): `#fa2a00` offset `+18px top, +0 left`
- Layer 2 (mid): `#403f3f` offset `+9px top, +9px left`  
- Layer 3 (front): `#f5f5f5` white card, `border-radius: 4px`, `padding: 45px`

Section headings inside cards use `Bungee Regular` at `60px`.
Body text uses `Libre Bodoni` at `22px`, `line-height: 32px`.

---

## Landing Page

### Status
Mostly complete from Claude chat prototype. HTML/CSS file available to import as starting point.

### Known issues to fix
1. **Hover states not working** — Each word group (AI EMPOWERED, SYSTEMS OBSESSED, DATA DRIVEN, PRODUCT DESIGNER) should turn white fill letters to `#fa2a00` on hover. CTA "check out my case studies" text also turns orange on hover. CSS `.hover-group:hover .fill { color: #fa2a00 }` was added but is not functioning — needs debugging.
2. **"is an" position** — Should align left with the M in MOLLY MUELLER and with "building things..." tagline (`left: 185px` on the 1440px canvas).
3. **Molly Mueller fill letters** — Need verification they sit correctly over the Shade layer at full scale.

### Layout
- Canvas: 1440×1080px, scales proportionally to viewport using JS `scale()` function
- `transform-origin: top left`, `Math.min(scaleX, scaleY)` to fit whole canvas

### Interactions
- Each descriptor word (AI EMPOWERED, etc.) is a clickable link → routes to `/case-studies?tag=ai` etc.
- CTA arrow → routes to `/case-studies`
- Hover: white fill letters turn `#fa2a00`

---

## Case Studies Listing Page (`/case-studies`)

### Layout
- Header: MOLLY MUELLER name (same layered technique, smaller scale)
- "case studies" subtitle in Libre Bodoni
- Tag nav: `home · ai · systems · data · about`
- Case study cards stacked vertically with `94px` gap

### Card structure (per case study)
- Title in `Bungee Regular` `70px` (plain, no shade layer needed here)
- "full case study →" link top right
- White card with red/dark shadow (see Card Component above)
- Left column: body text `24px` Libre Bodoni, `480px` wide
- Right area: image/screenshot (placeholder OK for now)
- Tags at bottom: active tag in `#fa2a00`, others in `#403f3f`

### Tag filtering
Client-side filter — clicking a nav tag shows only case studies with that tag. URL param: `?tag=ai`

---

## Full Case Study Template (`/case-studies/[slug]`)

### Layout pattern (Volt 2.0 as reference — node `69-3114`)
Centered column, `1498px` max-width, sections stacked with `69px` gap:

1. **Hero title** — Bungee layered technique at `140px`
2. **Subtitle** — Libre Bodoni `40px`
3. **Full-width image or image pair**
4. **White card section** — section heading + two-column body text
5. **Image pair or collage** (repeat as needed)
6. ...more card sections...
7. **Takeaways card**

### Two-column text breakpoint
- **≥ 1100px:** Two columns, `640px` each, `34px` gap
- **< 1100px:** Single column, full width
- **< 768px:** Mobile layout (see below)

### Screenshot collage section
The 4-panel fanned/overlapping screenshot layout (between "Into the Code" and "AI Tooling" sections) uses overlapping positioned images with gradient fade-to-dark overlays. Rebuild with `position: relative` container and `%`-based offsets — not fixed `px` — so it scales.

---

## Mobile Layout (< 768px)

Reference node: `69-3196`

- Single column throughout
- Cards stack vertically, full viewport width, `padding: 20px`
- Section headings in Bungee at `36px` (not `60px`)
- Body text `16px`, `line-height: 24px`
- Images full width between cards
- Bungee hero title at `64px` (already designed in Figma)
- No two-column text at any point

---

## Volt 2.0 Case Study Content

Full narrative draft is complete (written in a separate Claude chat session). Sections:
1. Origins
2. The Catalyst (Solar Pros rebrand)
3. Building the Design System
4. Into the Code
5. The AI Tooling Layer (skill + `/volt-tokens` + `/volt-check` + `volt-reviewer` agent)
6. User Validation (satisfaction survey results, user quotes placeholder)
7. Takeaways

Content can be stored as MDX or as JS/TS data objects — architect as appropriate for Next.js.

---

## Assets

- **Figma design files:** All accessible via Figma MCP (file key above)
- **Published style guide:** https://cameo-maize-47156546.figma.site
- **Current live site:** https://mollymueller.com (Squarespace — for reference only)
- **App Store:** Volt by Freedom Forever (live, for screenshots)
- **Images:** Mostly placeholder in Figma — real images to be dropped in. Design uses `object-fit: cover` cropping throughout.

---

## Netlify Deployment Notes

- Use `next export` (static export) or Netlify's Next.js adapter
- No server-side data fetching needed — all content is static
- Add `netlify.toml` with build command: `next build` and publish dir: `.next` (or `out` if using static export)
- Custom domain: mollymueller.com (currently pointing to Squarespace — DNS cutover at the end)

---

## Priorities for This Session

1. Set up Next.js project with correct folder structure and Netlify config
2. Import landing page HTML/CSS and convert to Next.js component
3. Fix hover states on landing page word groups
4. Build shared layout (nav, header) as reusable components
5. Build case studies listing page with tag filtering
6. Build case study page template (Volt 2.0 first)
7. Mobile responsive pass

---

## Notes for Claude Code

- The Bungee layered letter technique must be implemented exactly as described — do not simplify to a single element, it does not produce the correct visual
- All `left`/`top` pixel values for individual letters come from Figma dev mode and are exact — do not estimate or round
- The 1440px canvas scaling approach (JS `scale()` on the landing page) should be preserved for the hero — but subsequent pages use normal responsive layout, not canvas scaling
- Prefer semantic HTML throughout — the visual layering is decorative, real text is always in `aria-label` or visually hidden spans
- Check Figma MCP for exact values before estimating any measurement
