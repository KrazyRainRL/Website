## 2025-02-23 - SPA Anchor Link Code-Splitting Constraint
**Learning:** In SPAs relying on native HTML anchor links (e.g., `href="#services"`), conditionally rendering target sections using `IntersectionObserver` to defer loading breaks navigation on initial load because the anchor targets do not exist in the DOM when the browser attempts to scroll to them.
**Action:** Use standard `React.lazy()` without intersection observers to split the main bundle while ensuring elements render immediately and remain available for anchor navigation.
