## 2024-05-14 - Mobile Menu Accessibility

**Learning:** When using custom toggle icons (like lucide-react `Menu` and `X`) for mobile navigation, screen readers need explicit ARIA labels to understand the button's action, and keyboard users need visible focus states because `button` elements have default styles overridden.
**Action:** Always add dynamic `aria-label` (e.g., "Open/Close navigation menu"), `aria-expanded` state tracking, `aria-controls` linking to the menu container, and explicit `focus-visible` utility classes to icon-only toggle buttons.
