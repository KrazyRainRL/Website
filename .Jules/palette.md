## 2026-04-21 - Focus Outline Anti-Pattern
**Learning:** Found a project-wide pattern of using `focus:outline-none` in Tailwind without providing a `focus-visible` fallback, effectively destroying keyboard accessibility and hiding focus states from users navigating via keyboard.
**Action:** Always pair `focus:outline-none` with explicit `focus-visible:ring-*` or similar styles to ensure visual focus indicators are present for keyboard users while keeping mouse clicks clean.
