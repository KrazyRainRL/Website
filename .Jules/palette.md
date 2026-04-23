## 2024-04-23 - Mobile Menu Button Accessibility Pattern
**Learning:** The application uses Tailwind's `focus:outline-none` anti-pattern on interactive elements (like the mobile menu button in `Navbar.jsx`), which breaks keyboard accessibility.
**Action:** When adding focus states, always replace `focus:outline-none` with explicit `focus-visible:ring-*` classes (e.g., `focus:outline-none focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm p-1`) to ensure visible focus indicators are present for keyboard users without affecting mouse users.
