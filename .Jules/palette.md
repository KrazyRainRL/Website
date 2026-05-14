## 2024-05-14 - Mobile Menu Accessibility

**Learning:** The mobile menu pattern in `Navbar.jsx` used `focus:outline-none` without providing any alternative visible focus indicator. Additionally, the icon-only toggle button lacked an `aria-label` and `aria-expanded` attributes, making it fully inaccessible to screen readers and keyboard users.
**Action:** When working with toggle buttons that open/close navigation (especially icon-only ones), always pair `focus:outline-none` with explicit `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm` styles. Always include `aria-expanded` and descriptive `aria-label` attributes to communicate the state.
