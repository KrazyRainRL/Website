## 2024-05-25 - Accessible Mobile Menu Toggles

**Learning:** When building responsive navigation in React, icon-only toggle buttons (like hamburger menus) often lack proper semantic context for assistive technologies. Simply adding an `aria-label` isn't enough; screen readers also need to understand the state of the menu (open/closed) and the relationship between the button and the menu container it controls.
**Action:** Always pair `aria-label` with `aria-expanded` (tied to the component's state) and `aria-controls` (pointing to the ID of the controlled container) on mobile menu toggles to ensure a complete and accessible interaction model. Furthermore, ensure clear keyboard navigation visibility with `focus-visible:ring-2`.
