## 2024-05-08 - SPA Code-Splitting with Anchor Navigation
**Learning:** When code-splitting single-page applications (SPAs) that rely on native HTML anchor links (e.g., `href="#services"`) for navigation, deferring component rendering via an `IntersectionObserver` breaks the initial page load navigation because the target anchor IDs are not in the DOM until scrolled.
**Action:** Use standard `React.lazy()` with a `<Suspense>` boundary directly to split the chunks. The chunks will still load synchronously relative to user interaction, providing the bundle size reduction benefit without breaking anchor links.

## 2024-05-08 - ES Module Workspace Scripts
**Learning:** The project is configured with `"type": "module"` in `package.json`. Temporary workspace Node scripts using `require()` will fail with a `ReferenceError`.
**Action:** Use the `.cjs` extension for temporary Node scripts, or use standard ESM `import` syntax when writing automated patching or testing scripts within the workspace.
