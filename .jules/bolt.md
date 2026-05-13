## 2024-05-24 - Code Splitting SPA anchors
**Learning:** Code-splitting SPAs using standard `React.lazy()` maintains accessibility of native DOM anchors for initial page load, provided the elements are still mounted within a `Suspense` block rather than completely conditionally rendered out of the tree.
**Action:** Always prefer `React.lazy()` without intersection observers for SPAs that rely heavily on anchor links (#services, #about) to ensure initial navigation remains unbroken.
