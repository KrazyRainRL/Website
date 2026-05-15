## 2024-05-15 - Fixing the focus:outline-none Anti-pattern
**Learning:** Discovered a codebase anti-pattern where Tailwind's `focus:outline-none` is used on interactive elements without `focus-visible` fallbacks, breaking keyboard accessibility. Icon-only stateful toggles are also missing `aria-label` and `aria-expanded`.
**Action:** Always pair `focus:outline-none` with `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm`. Ensure icon-only buttons have `aria-label`, and toggles use `aria-expanded`.
