## 2026-04-30 - Pair focus:outline-none with focus-visible
**Learning:** The codebase contains an anti-pattern of using Tailwind's `focus:outline-none` without `focus-visible` fallbacks, which breaks keyboard accessibility.
**Action:** Always pair `focus:outline-none` with explicit `focus-visible:ring-*` styles to ensure visual focus indicators are present for keyboard users.
