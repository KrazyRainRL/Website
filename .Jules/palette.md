## 2025-05-26 - Mobile Menu ARIA Attributes
**Learning:** Found that the mobile menu toggle button lacked proper `aria-expanded` and `aria-controls` attributes, which are essential for communicating state and container association to screen readers.
**Action:** Always include `aria-expanded` to communicate toggle state and `aria-controls` with a corresponding `id` on the controlled element. Include `aria-label` when the button content is an icon without text. Added focus-visible styles to improve keyboard navigation.
