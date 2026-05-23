## 2024-05-23 - Mobile Menu Accessibility
**Learning:** Found an icon-only button lacking `aria-label`, missing `aria-expanded` and `aria-controls` for standard toggle-pattern accessibility on the mobile menu, and missing focus visible styling making keyboard navigation opaque.
**Action:** When adding standard icon-based interactive toggles, always default to including an `aria-label` attribute, map the expansion state to `aria-expanded` and associate to container by `aria-controls`, and include explicit focus ring CSS (`focus-visible:ring-2` etc.) for keyboard a11y.
