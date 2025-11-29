## What We Will Deliver
- Replace the current About section content with the exact Figma "MacBook Air - 5" layout, typography, images, and components.
- Preserve responsiveness and theme integration with Tailwind while keeping the Figma look.

## Source Components & Assets
- Component: `.figma/524_25/index.jsx` (MacBookAir5)
- Styles: `.figma/524_25/index.module.scss`
- Assets confirmed present: `.figma/image/mikbwzvk-27kboxh.svg`, `.figma/image/mikbwzvk-u1mh4j9.svg`, `.figma/image/mikbwzvu-vzwzohp.png`, `.figma/image/mikbwzvl-*.svg`

## Typography
- Lexend Deca already loaded globally.
- Add DM Sans via Google Fonts import to `src/index.css` for exact matching of body and headings used in the Figma styles.

## Layout & Integration Steps
1. Import MacBook Air 5 component in `src/pages/Home.tsx`:
   - `import About5 from '../../.figma/524_25'`
2. Replace the About section’s inner component:
   - Swap `<AboutFrame />` for `<About5 />`.
3. Match container width and centering:
   - Wrap with `w-full max-w-[1280px] mx-auto` to match the Figma artboard width.
4. Maintain section background:
   - Keep `bg-white` per Figma card backdrop.

## Images & Toggle
- Keep the Figma-provided toggle image (`toggleButton`) as-is for visual parity.
- The preview image block uses background image from SCSS (`mikbwzvu-vzwzohp.png`); ensure it stays and is centered per existing styles.

## Responsiveness
- Constrain to `max-w-[1280px]` with centered layout; optionally add `2xl:scale-150` to match previously requested large-screen scaling (we can enable this if you want consistency with other sections).

## Accessibility
- Add `aria-label` to decorative images where suitable; ensure text content is readable and semantic.

## Validation
- Run the dev server, visually verify spacing, borders, shadows, and typography match the screenshot.
- Confirm assets load and the layout doesn’t overflow at various breakpoints.

## Optional Enhancements
- Replace the static toggle image with the new `Switch` component for interaction (only if you want interactivity; default will match Figma static design).
- Add links/actions to the “Get In Touch” cards (mail, LinkedIn, Behance) for real navigation.

## Next Steps
- Proceed to implement the above steps. Would you like the `2xl:scale-150` applied for the About section as well for consistency?