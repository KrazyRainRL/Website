## 2024-05-24 - Interactive Component States Without ARIA Feedback
**Learning:** Found an interactive mobile menu button relying solely on visual icons (`<Menu />` / `<X />`) to convey state. This creates an accessibility barrier as screen readers receive no context about the button's purpose or current state (open/closed).
**Action:** When implementing or reviewing icon-only toggles (like mobile menus, dark mode switches, etc.), systematically verify the presence of `aria-expanded`, dynamic `aria-label`s, and `aria-controls` to ensure state changes are broadcasted semantically.
