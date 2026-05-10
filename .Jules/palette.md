## 2024-05-10 - Mobile Menu Focus State Anti-pattern
**Learning:** Found a common anti-pattern in the codebase where Tailwind's `focus:outline-none` was used without any `focus-visible` fallback, completely removing visual focus for keyboard users on interactive elements.
**Action:** When auditing Tailwind codebases, always grep for `focus:outline-none` and ensure it is either removed or paired with `focus-visible:ring-*` to maintain accessibility.
