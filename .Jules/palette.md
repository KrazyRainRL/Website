## 2024-05-24 - Initial Palette Journal\n**Learning:** Started tracking UX improvements.\n**Action:** Will document critical learnings here.
## 2024-10-24 - Anti-pattern: focus:outline-none without fallback
**Learning:** The codebase contains a recurring anti-pattern of using Tailwind's `focus:outline-none` on interactive elements without providing `focus-visible` fallbacks, breaking keyboard accessibility.
**Action:** Always pair `focus:outline-none` with explicit `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm` styles to ensure visual focus indicators are present for keyboard users.
