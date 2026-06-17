## 2024-05-18 - Stateful Navigation Toggles and Focus Clarity

**Learning:** When implementing interactive stateful toggles (like mobile navigation menus), ARIA labels alone are insufficient. Using `aria-expanded` combined with `aria-controls` explicitly linked to the content container's ID provides screen readers with the necessary relationship context. Additionally, overriding default focus behaviors (like `focus:outline-none`) must be accompanied by explicit, visually distinct focus states (e.g., `focus-visible:ring-2`) to ensure keyboard navigability is not silently broken.

**Action:** Always pair `aria-expanded` and `aria-controls` for expanding UI elements and utilize Tailwind's `focus-visible` utilities rather than bare `focus:outline-none` when styling interactive components.
