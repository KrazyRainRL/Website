## 2024-06-30 - Accessible Icon-Only Buttons
**Learning:** Icon-only buttons (like the mobile menu toggle) in this application lack ARIA labels and focus indicators, making them inaccessible to screen readers and keyboard users. Additionally, Lucide React icons need `aria-hidden="true"` to prevent redundant screen reader announcements.
**Action:** Always add `aria-label`, `aria-expanded`, proper focus states (e.g., `focus-visible:ring-2`), and set `aria-hidden="true"` on decorative icons for all icon-only buttons in the design system.
