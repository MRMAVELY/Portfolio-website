## Goal
Create a fixed/sticky top navigation that remains visible during scroll, supports smooth in‑page navigation, highlights the active section, is responsive, and sits above all content.

## Navigation Design
- Use a `nav` element positioned `sticky top-0 z-50` (preferred for performance); fallback `fixed top-0 left-0 right-0` if needed.
- Background: `bg-[#faf8ed]` to match page; add subtle shadow `shadow-sm` to separate from content.
- Content: brand/title left (optional), section links right: Home, Case Study, About Me, Contact Me.
- Active link styling: bold text, darker color, bottom border or pill background.

## Smooth Scrolling & Active State
- Link clicks call `scrollIntoView({ behavior: 'smooth' })` for sections.
- Use `IntersectionObserver` to set `activeSection` without scroll listeners.
- Add `scroll-margin-top` to each section (`home / case-study / about / contact`) equal to nav height (e.g., `scroll-mt-24`) to avoid content being hidden behind the fixed bar.

## File Changes
- Add `src/components/TopNav.tsx`:
  - Props: `active: string`, `onNavigate: (section) => void`.
  - Renders horizontally arranged links with active styles; responsive layout (`flex`, `gap-4`, `md:gap-6`).
- Update `src/pages/Home.tsx`:
  - Import and render `<TopNav active={active} onNavigate={navigateTo} />` above content.
  - Keep existing `IntersectionObserver` hook; ensure mapping unchanged.
  - Add `scroll-mt-[navHeight]` classes to all section containers.

## Responsiveness
- Mobile: collapsible menu button shows links (simple disclosure without complex JS).
- Tablet/Desktop: full link row.
- Ensure nav width spans `w-full`; container uses `max-w-7xl mx-auto px-4` for consistent gutters.

## Z‑Index & Layering
- Nav uses `z-50` and `sticky` to ensure it overlays clouds and collage cards.
- Avoid `position: absolute` content overlapping by maintaining layout flow.

## Accessibility
- `role="navigation"`, `aria-label="Primary"`.
- Active link uses `aria-current="page"`.
- Keyboard focus states visible; links are `<button>` or `<a>` for semantics.

## Performance
- Prefer `IntersectionObserver` over scroll events.
- No layout thrashing; no continuous DOM writes on scroll.

## Verification
- Click each link → smooth scroll to target; nav remains visible.
- Resize to mobile/tablet/desktop; nav remains usable and visible.
- Active highlight changes when scrolling through sections.

Approve to proceed and I’ll implement `TopNav.tsx`, wire it into `Home.tsx`, add section offsets, and verify the interaction and styles end‑to‑end.