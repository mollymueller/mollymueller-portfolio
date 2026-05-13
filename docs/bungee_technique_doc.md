# Bungee Layered Text Technique
## Implementation guide for Molly Mueller portfolio

---

## What it is

A visual effect using two overlapping Bungee font variants to create a 3D shadow/extrude look:
- **Layer 1 (base):** Full word in `Bungee Shade` — red, baked-in shadow glyph
- **Layer 2 (top):** Each individual letter in `Bungee Regular` — white, positioned precisely over its counterpart

The effect **cannot** be achieved with a single HTML element or CSS `::before` trick. The two font variants have different internal metrics — baseline, cap height, and glyph width all differ slightly. The only reliable method is individual letter placement from Figma dev mode coordinates.

---

## Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Shade&display=swap" rel="stylesheet">
```

```css
.shade { font-family: 'Bungee Shade', sans-serif; color: #fa2a00; }
.fill  { font-family: 'Bungee', sans-serif;       color: #fff; }
```

---

## HTML Structure

```html
<div class="word-stack" aria-label="AI EMPOWERED" role="heading" aria-level="2">
  <!-- Layer 1: full word in Bungee Shade (sets container width, decorative) -->
  <span class="shade abs" style="left: 0; top: 0;" aria-hidden="true">ai empowered</span>

  <!-- Layer 2: each letter in Bungee Regular, individually positioned -->
  <span class="fill abs" aria-hidden="true" style="left: 11px;  top: -3px;">a</span>
  <span class="fill abs" aria-hidden="true" style="left: 60px;  top: -3px;">i</span>
  <span class="fill abs" aria-hidden="true" style="left: 122px; top: -3px;">e</span>
  <!-- ...etc for every letter -->
</div>
```

**Key rules:**
- The wrapper `div` has `aria-label` with the readable text — this is what screen readers and search engines see
- Both `.shade` and all `.fill` letters have `aria-hidden="true"` — they are purely visual
- The `.shade` span is `position: absolute` and sets the visual width reference
- Every `.fill` letter is `position: absolute` with exact `left`/`top` from Figma

---

## CSS

```css
.word-stack {
  position: relative;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}

.abs {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1;
}

.shade { font-family: 'Bungee Shade', sans-serif; color: #fa2a00; }
.fill  { font-family: 'Bungee', sans-serif; color: #fff; }
```

---

## How to get coordinates from Figma

1. Open the Figma frame in dev mode
2. Select the Bungee Shade layer (full word) — note its `x`/`y` position relative to the frame
3. Select each individual Bungee Regular letter — note its `x`/`y` relative to the **same frame**
4. The `left` value for each `.fill` letter = Figma `x` of that letter **minus** Figma `x` of the Shade word
5. The `top` value = Figma `y` of that letter **minus** Figma `y` of the Shade word

Or: use the Figma MCP tool (`get_design_context`) on the specific word frame — it returns exact pixel positions for each element.

---

## Critical: how `left` works (learned the hard way)

**Figma `x` = the left edge of the element.** Not the center.

Early attempts used `transform: translateX(-50%)` on fill letters, treating `left` as the center point. This looked correct on some words but broke others. 

**The rule:**
- `.shade` word: use `left: [x]px` — its left edge position (no transform)
- `.fill` letters: use `left: [x]px` — also left edge (no transform)
- **Never** use `translateX(-50%)` on fill letters

Exception: if the Figma Shade word itself uses auto-centering within a frame (e.g. Molly Mueller centered in a 1442px container), place the shade at `left: 713px; transform: translateX(-50%)` — but fill letter `left` values are still raw left-edge coordinates, no transform.

---

## What worked for each word (landing page, 60px)

All words at `font-size: 60px`. `left`/`top` are relative to the Shade word's position within the word frame.

### AI EMPOWERED (node 31-2441) ✅ confirmed correct
Shade: `left: 0; top: 0`

| Letter | left | top |
|--------|------|-----|
| a | 11px | -3px |
| i | 60px | -3px |
| e | 122px | -3px |
| m | 167px | -3px |
| p | 223px | -3px |
| o | 270px | -3px |
| w | 321px | -3px |
| e | 377px | -3px |
| r | 422px | -3px |
| e | 472px | -3px |
| d | 518px | -3px |
| , | 583px | 0 |

### SYSTEMS OBSESSED (node 31-2424)
Shade: `left: 6px; top: -5px`

| Letter | left | top |
|--------|------|-----|
| s | 18px | -9px |
| y | 61px | -9px |
| s | 110px | -9px |
| t | 153px | -9px |
| e | 200px | -9px |
| m | 244px | -9px |
| s | 302px | -9px |
| o | 365px | -9px |
| b | 417px | -9px |
| s | 465px | -9px |
| e | 512px | -9px |
| s | 556px | -9px |
| s | 600px | -9px |
| e | 646px | -9px |
| d | 692px | -9px |
| , | 740px | -6px |

### DATA DRIVEN (node 31-2477)
Shade: `left: 0; top: -6px`

| Letter | left | top |
|--------|------|-----|
| d | 11px | -11px |
| a | 63px | -11px |
| t | 110px | -11px |
| a | 153px | -11px |
| d | 221px | -10px |
| r | 271px | -11px |
| i | 321px | -11px |
| v | 364px | -10px |
| e | 415px | -10px |
| n | 459px | -10px |

### PRODUCT DESIGNER (node 31-2460)
Shade: `left: 367.62px; transform: translateX(-50%); top: -4.35px`
Fill letters: raw left-edge, no transform

| Letter | left | top |
|--------|------|-----|
| p | 12.03px | -9.91px |
| r | 58.02px | -9.78px |
| o | 109.02px | -9.65px |
| d | 159.02px | -9.53px |
| u | 209.02px | -9.40px |
| c | 259.02px | -9.29px |
| t | 302.02px | -9.18px |
| d | 369.02px | -8.99px |
| e | 420.02px | -8.88px |
| s | 465.02px | -8.76px |
| i | 509.02px | -8.66px |
| g | 552.02px | -8.54px |
| n | 600.02px | -8.41px |
| e | 651.02px | -8.29px |
| r | 696.02px | -8.17px |

Note: `transform: rotate(-0.15deg); transform-origin: left center` on the container

### MOLLY MUELLER (node 37-2511) — hero size 140px
Shade: `left: 713px; transform: translateX(-50%); top: 2px` (centered in 1442px frame)
Fill letters: raw left-edge, no transform

| Letter | left | top |
|--------|------|-----|
| M | 83.5px | 1px |
| o | 209px | 1px |
| l | 324px | 0 |
| l | 436px | 0 |
| y | 538.5px | 0 |
| m | 706.5px | 0 |
| u | 833.5px | 0 |
| e | 947px | 0 |
| l | 1056px | 0 |
| l | 1168px | 0 |
| e | 1277px | 0 |
| r | 1389.5px | 0 |

---

## Applying to new words (case study titles etc.)

For each new word/title:
1. In Figma, create the word with both layers (Shade + individual Bungee Regular letters) as you have done for the landing page
2. Use Figma MCP `get_design_context` on that specific frame node
3. Read `x`/`y` for the Shade word — this is your `left`/`top` anchor
4. Read `x`/`y` for each fill letter — subtract Shade's `x`/`y` to get relative `left`/`top`
5. No `translateX` on fill letters — left edge only

Font size for case study page titles: `140px` (same as Molly Mueller hero)
Font size for case study listing titles: `70px` (plain Bungee, no Shade layer needed there)

---

## Hover states

On hover, white fill letters turn `#fa2a00` (same as Shade color — letters appear to "merge" with shadow).

```css
.hover-group { cursor: pointer; }
.hover-group:hover .fill { color: #fa2a00; }
.fill { transition: color 0.15s ease; }
```

⚠️ **Known issue:** Hover states were added in Claude chat prototype but are not functioning. Likely a CSS specificity or z-index issue with the scaled canvas wrapper. Debug in Claude Code with the full file in context.

---

## Figma MCP usage

To get coordinates for a new word frame:
```
get_design_context(fileKey: "g6Nk5p5TC3wN4UKEWXNBIN", nodeId: "[node-id]")
```
Returns full element tree with `x`/`y` positions. Look for:
- The `Bungee Shade` text element → your shade anchor
- Each `Bungee Regular` single-character element → your fill letter positions
