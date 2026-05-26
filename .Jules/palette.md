## 2024-05-26 - Accessible Icon Toggle Buttons
**Learning:** Icon-only toggle buttons for menus require state and structural context (`aria-expanded`, `aria-controls`) along with standard `aria-label`s to be fully accessible to screen readers. Preserving visual focus (`focus-visible:ring-2`) is crucial for keyboard navigation.
**Action:** Always include `aria-expanded` tied to the state variable, `aria-controls` pointing to the menu ID, and a distinct `focus-visible` ring on custom UI toggle buttons.
