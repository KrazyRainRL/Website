## 2024-06-09 - Accessible Mobile Menus
**Learning:** Icon-only mobile menu toggle buttons often rely solely on `focus:outline-none` for styling, which completely hides keyboard focus, making mobile menus extremely difficult to access via keyboard navigation.
**Action:** When working with mobile menu toggles or icon buttons in Tailwind, replace bare `focus:outline-none` with explicit focus-visible utilities (e.g., `focus-visible:ring-2 focus-visible:ring-[color] rounded-sm`) to ensure keyboard users have a clear visual indicator.
