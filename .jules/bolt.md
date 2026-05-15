## 2024-06-19 - Code Splitting Breaks Native Anchor Links

**Learning:** When code-splitting single-page applications (SPAs) that rely on native HTML anchor links (e.g., `href="#section-id"`) for navigation, do not conditionally remove the target sections from the DOM (e.g., using an `IntersectionObserver` to defer rendering). Doing so breaks navigation links on initial load because the anchor targets do not exist in the document. Standard `React.lazy()` can be used to split the bundle without breaking DOM availability because chunks are separated from the initial main bundle but are still loaded upon initial render, not deferred until scroll.

**Action:** When implementing code splitting for SPAs using anchor navigation, use standard `React.lazy()` with `<Suspense>` without intersection observers to ensure target elements are present in the DOM for anchor links to function.
