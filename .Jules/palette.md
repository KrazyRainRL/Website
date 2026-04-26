## 2024-05-18 - Missing Focus Visible on Outline None
**Learning:** The codebase contains an anti-pattern of using Tailwind's `focus:outline-none` on interactive elements without providing `focus-visible` fallbacks, which completely breaks keyboard accessibility by hiding the focus ring.
**Action:** Always pair `focus:outline-none` with explicit `focus-visible:ring-*` styles (e.g., `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm p-1`) to ensure visual focus indicators remain present for keyboard users.
