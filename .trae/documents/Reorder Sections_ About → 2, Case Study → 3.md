## Goal
Reorder page sections so About Me is second and Case Study is third, update navigation order and icons accordingly, and ensure smooth, accessible navigation.

## Changes
- Move About Me section above Case Study in `src/pages/Home.tsx`.
- Update observed section IDs order for clarity: Home → About → Case Study → Contact.
- Reorder navigation items in `src/components/SidebarNav.tsx` to: Home, About Me, Case Study, Contact.
- Keep Figma icons: Home (home glyph), About (person glyph), Case Study (document/search glyph), Contact (mail glyph).
- Add `role="navigation"` and `aria-label` to nav container; set `aria-current="page"` on active button for accessibility.

## Smooth Scrolling & UX
- Retain existing rAF-based smooth scroll (450ms, easeInOutCubic) and disabled state during transitions.
- Keep progress indicator during transitions.

## Validation
- Verify scroll-to-section from each nav item lands correctly and highlights active item.
- Check layout across breakpoints; ensure no overlap or visual glitches.
- Confirm IDs and nav targets are synchronized.

Approve to proceed and I will implement the reordering, navigation updates, and accessibility improvements, then verify behavior end-to-end.