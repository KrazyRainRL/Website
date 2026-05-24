## 2024-05-24 - Stateful Mobile Menu Accessibility
**Learning:** Mobile menu toggle buttons often lack `aria-expanded` and `aria-controls` which are crucial for screen readers to understand the state and association of the menu, and icon-only buttons need `aria-label`.
**Action:** Always ensure stateful toggle buttons include `aria-expanded`, `aria-controls`, `aria-label`, and `focus-visible` styling using the standard `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm` pattern.
