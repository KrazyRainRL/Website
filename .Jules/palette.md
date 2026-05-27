## 2024-05-27 - Mobile Menu Toggle Accessibility
**Learning:** The mobile menu toggle button lacked critical accessibility attributes (`aria-expanded`, `aria-controls`, `aria-label`) and visible focus states, which are essential for keyboard and screen reader users navigating responsive layouts.
**Action:** Always ensure stateful toggle buttons include `aria-expanded`, `aria-controls`, a descriptive `aria-label`, and use `focus-visible:ring-2` to maintain clear focus indication when custom `focus:outline-none` is applied.
