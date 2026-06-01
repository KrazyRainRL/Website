## 2024-06-01 - Mobile Menu Toggle Accessibility Pattern
**Learning:** Icon-only mobile menu toggles need dynamic `aria-label` updates based on state (e.g., "Open menu" vs "Close menu"), and `aria-controls` works best when the targeted menu container is assigned a matching `id`.
**Action:** Always verify that mobile toggles use `focus-visible` to allow keyboard users to see where they are before triggering the menu.
