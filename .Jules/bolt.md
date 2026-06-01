## 2025-02-28 - Optimize Google Fonts Loading
**Learning:** By default, Google Fonts inside CSS (`@import`) creates a network request waterfall, which delays First Contentful Paint (FCP).
**Action:** Always load external fonts via `<link rel="preconnect">` and `<link rel="stylesheet">` directly in the HTML `<head>` instead of using CSS `@import` to ensure parallel fetching.
