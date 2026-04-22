
## 2025-02-12 - Missing Focus Indicators on Mobile Menu
**Learning:** Found an instance of `focus:outline-none` on the mobile menu button without a `focus-visible` fallback, making it invisible to keyboard users when navigating.
**Action:** Always pair `focus:outline-none` with explicit `focus-visible:ring-*` styles, and ensure `aria-expanded` and `aria-label` are present for icon-only toggle buttons.
