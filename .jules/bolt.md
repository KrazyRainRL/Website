
## 2024-05-18 - CSS @import Waterfall
**Learning:** Found that using `@import` for Google Fonts inside `index.css` creates a critical rendering path bottleneck by forcing the browser to wait for the CSS file to download and parse before it even begins discovering and fetching the font resources.
**Action:** Always move external font loading directly into the HTML `<head>` using `<link rel="preload" or rel="preconnect">` and `<link rel="stylesheet">` tags to allow the browser to fetch fonts in parallel with CSS, improving First Contentful Paint.
