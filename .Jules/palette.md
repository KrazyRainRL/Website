
## 2024-05-18 - Missing ARIA and focus styles on icon-only buttons
**Learning:** Found an anti-pattern in the codebase where icon-only buttons (like the mobile menu) lack `aria-label` and `aria-expanded` attributes, making them inaccessible to screen readers. Additionally, `focus:outline-none` was used without `focus-visible` fallbacks, breaking keyboard navigation.
**Action:** Always add `aria-label` to icon-only buttons and pair `focus:outline-none` with explicit `focus-visible:ring-*` styles to ensure visual focus indicators are present for keyboard users.
