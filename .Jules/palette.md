## 2024-05-15 - Missing Focus Fallbacks on Interactive Elements
**Learning:** The codebase contains an anti-pattern of using Tailwind's `focus:outline-none` on interactive elements (like the mobile menu button) without providing `focus-visible` fallbacks, breaking keyboard navigation visibility.
**Action:** Always pair `focus:outline-none` with explicit `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm` styles to ensure visual focus indicators are present for keyboard users.
