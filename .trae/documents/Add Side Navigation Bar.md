## Goal
Bring the Figma side nav bar (Frame 2147206589) into the page, positioned on the left, using the exact local SVG icons and hover/active behaviors.

## What Will Be Added
- Render the `SidebarNav` component on the left side of the layout as a sticky vertical bar.
- Use the exact Figma glyphs from `.figma/image` (Home, Case Study, About Me, Contact Me).
- Hover reveals text labels; active state highlights the current section.

## Files to Update
- `src/pages/Home.tsx`
  - Place `<SidebarNav />` inside the top-level flex container on the left.
  - Ensure the main content uses `flex-1` so the bar does not overlap.
  - Keep smooth scroll: clicking items scrolls to `#home-section`, `#case-study-section`, `#about-section`, `#contact-section`.

## Behavior
- Sticky positioning so the nav remains visible while scrolling.
- Active state synced via IntersectionObserver (Home, Case Study, About Me, Contact Me).
- No routing; single-page smooth scroll.

## Visual Parity
- Width set to `182px`, spacing `15px`, backgrounds `#eeece3` (icon), `#e1e0d7` (label), matching Figma.
- Icons loaded directly from `.figma/image/*` so visuals match exactly.

## Responsive/Edge Cases
- Non-shrinking sidebar (`shrink-0`) to avoid layout shifts.
- Z-index only if needed to prevent overlap on small screens.

## Verification
- Run the dev server, verify the bar stays fixed and scroll targets work.
- Confirm hover/active styles and assets render correctly.

Approve to proceed and I’ll insert the `SidebarNav` into `Home.tsx`, wire up section IDs, and validate interaction end-to-end.