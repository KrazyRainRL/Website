## 2024-05-13 - Focus Outline None Anti-pattern
**Learning:** The codebase previously contained an anti-pattern of using Tailwind's `focus:outline-none` on interactive elements without providing `focus-visible` fallbacks, breaking keyboard accessibility.
**Action:** When working on elements, pair `focus:outline-none` with explicit `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm` styles to ensure visual focus indicators are present for keyboard users while remaining invisible for mouse users.
