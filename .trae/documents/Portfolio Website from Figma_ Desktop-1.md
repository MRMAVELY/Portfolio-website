## Overview
- Build a single-page portfolio site faithfully matching the Figma "Desktop - 1" layout.
- Use the exact icons and visuals from the Figma export, store all SVG/PNG assets locally, and self-host the Lexend Deca font.
- Implement smooth in-page navigation (Home, Case Study, About Me, Contact Me) and a photo gallery section.

## Assets & Sources
- Use the existing Figma export files:
  - JSX scaffold in `.figma/13_2806/index.jsx`
  - Styles in `.figma/13_2806/index.module.scss`
  - Icons/graphics in `.figma/image/*` (verified via repository scan)
- Map Figma glyphs to navigation icons:
  - Home: `.figma/image/mia0d8x5-4cmfhk0.svg`
  - Case Study: `.figma/image/mia0d8x5-2p1kpev.svg`
  - About Me: `.figma/image/mia0d8x5-q1bbpap.svg`
  - Contact Me: `.figma/image/mia0d8x5-zdlz5rn.svg`
- Decorative elements:
  - Cloud/graphics: `.figma/image/mia0d8x5-75dks8b.svg`, `.figma/image/mia0d8x5-kekao53.svg`
  - Card imagery referenced by SCSS background-image rules

## Typography (Self-hosted)
- Collect and store Lexend Deca locally under `public/fonts/lexend-deca/`:
  - Regular (400), SemiBold (600) and optionally Variable `.ttf/.woff2`
- Add `@font-face` definitions and set as base font:
  - Create `src/styles/fonts.css` and include `font-family: "Lexend Deca", ...`
- Implement spacing and letter-spacing tightness to match Figma:
  - Provide utility classes for `font-weight: 600`, `letter-spacing: -6.71px`, and header size to match Figma (≈84px)

## Design Tokens
- Create `src/styles/figma-desktop1.scss` with:
  - Colors: `#faf8ed` (background), `#717171` (Hey!), `#131313` (headline), grays for labels
  - Spacing scales matching the Figma paddings/gaps
  - Utility classes for rounded boxes, glyph backgrounds, and polaroid frame outlines

## Components
- `src/components/SidebarNav.tsx`
  - Uses Figma SVG glyphs; labels appear on hover and when active
  - Emits scroll-to-section actions
- `src/components/Cloud.tsx`
  - Renders Figma cloud SVGs; supports positions and opacity props
- `src/components/InstagramCard.tsx`
  - Reusable card with upload/preview; honors fixed aspect ratio
- `src/components/SectionHeader.tsx`
  - Standardized section title + subtitle styling

## Page Structure
- `src/pages/Home.tsx`
  - Header: "Hey! I’m Vimal (0>1) product designer" using Lexend Deca 600 and tight tracking
  - Left sidebar navigation using Figma icons
  - Central collage area with overlapping cards (uses local images and `InstagramCard`)
  - Tagline: "I turn confusing products into…"
  - Sections:
    - Photo Gallery: grid with locally stored placeholder assets
    - Case Study: cards with dummy content and tags
    - About Me: profile, skills list, and image block
    - Contact Me: contact info and form (non-functional)
- Smooth scrolling with `scrollIntoView({ behavior: 'smooth' })` and active state via `IntersectionObserver`

## Asset Handling
- Copy required `.svg/.png` from `.figma/image/` to `src/assets/figma/desktop-1/`
- Import SVGs as React components where helpful, else use `<img>` for pixel-perfect matches
- Ensure images referenced in SCSS are updated to the new local paths

## Accessibility & Performance
- Alt text for images/icons
- Keyboard navigable sidebar
- Optimize SVGs via SVGO and use `loading="lazy"` for images
- Self-hosted fonts via `font-display: swap`

## Implementation Steps
1. Create `src/assets/figma/desktop-1/` and copy needed images/SVGs locally
2. Add `src/styles/fonts.css` and `src/styles/figma-desktop1.scss`; wire into the app
3. Build `SidebarNav`, `Cloud`, `InstagramCard`, `SectionHeader` components
4. Implement `Home.tsx` with header, collage, tagline, and the four sections
5. Hook up smooth scrolling and active states
6. Verify visual parity with Figma and adjust spacing/letter-spacing to match

## Deliverables
- Fully working single-page portfolio site mirroring "Desktop - 1"
- All assets and fonts stored locally
- Clean component structure and reusable styles

Confirm to proceed and I’ll implement this end-to-end, migrate assets, and verify everything runs cleanly.