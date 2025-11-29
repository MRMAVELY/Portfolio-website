## Goal
Remove the "My Photos" section from the Home page and ensure navigation and behavior remain consistent without glitches.

## Changes
- Delete the `<section id="photo-gallery-section" ...>` block in `src/pages/Home.tsx`.
- Update the IntersectionObserver `ids` array in `Home.tsx` to remove `photo-gallery-section`.
- Verify that smooth scroll, active state, and progress indicator work for the remaining sections (Home, Case Study, About, Contact).
- Confirm no styling or layout dependencies rely on the deleted section.

## Validation
- Build and run to confirm there are no errors.
- Test navigation across remaining sections for smooth transitions and accurate active state.
- Check that the page layout looks correct without the photos section.

Approve to proceed and I’ll implement these updates and verify end-to-end.