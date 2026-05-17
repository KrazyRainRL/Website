## 2025-02-14 - Mobile Menu Button Accessibility
**Learning:** The mobile menu toggle button lacks both screen-reader accessibility (no ARIA label or expanded state) and keyboard navigation visibility (no focus ring).
**Action:** Always apply `aria-label`, `aria-expanded`, and the standard `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm` focus indicator to icon-only interactive elements like mobile menus in this design system.
