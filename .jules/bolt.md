## 2024-04-30 - Code-splitting SPAs with anchor links
**Learning:** When code-splitting single-page applications (SPAs) that rely on native HTML anchor links (e.g., `href="#section-id"`) for navigation, do not conditionally remove the target sections from the DOM (e.g., using an `IntersectionObserver` to defer rendering). Doing so breaks navigation links on initial load because the anchor targets do not exist in the document.
**Action:** Use standard `React.lazy()` without conditional mounting to split the bundle while maintaining DOM availability for anchor links.
