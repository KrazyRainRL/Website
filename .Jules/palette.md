## 2024-05-15 - Focus outlines breaking keyboard accessibility
**Learning:** The application uses Tailwind's `focus:outline-none` on interactive elements like the mobile menu button, without providing a `focus-visible` fallback. This completely removes the focus indicator for keyboard users, breaking accessibility guidelines.
**Action:** Always pair `focus:outline-none` with explicit `focus-visible:ring-*` styles (e.g., `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm`) to ensure visual focus indicators remain visible for keyboard users while keeping click interactions clean.
