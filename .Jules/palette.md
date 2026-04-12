## 2026-04-12 - Dynamic Icon-Only Buttons Accessibility
**Learning:** Found a pattern where dynamic icon-only buttons (like mobile menu toggles) were missing screen reader context. They lacked `aria-expanded` state, a descriptive `aria-label`, and `aria-hidden` on the decorative SVG icons. They also lacked visible focus rings for keyboard navigation.
**Action:** When adding or reviewing interactive icon buttons, always check for `aria-label`, state attributes like `aria-expanded` (if applicable), `aria-hidden="true"` on the icon itself, and visible focus styles (e.g., `focus-visible:ring-2`).
