## 2024-05-10 - Keyboard Accessibility Anti-Pattern
**Learning:** The codebase contains a recurring anti-pattern of using Tailwind's `focus:outline-none` on interactive elements without providing fallback `focus-visible` styles, which completely breaks keyboard navigation visibility.
**Action:** Always scan for `focus:outline-none` during UX reviews and enforce pairing it with `focus-visible:ring-2 focus-visible:ring-moss-500 rounded-sm` (the project's standard focus ring) to ensure robust keyboard accessibility.
