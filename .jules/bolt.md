## $(date +%Y-%m-%d) - Optimize font loading for faster FCP
**Learning:** Using `@import` for fonts inside a CSS file creates a network waterfall, delaying font loading until the CSS file is fully parsed.
**Action:** Always prefer using `<link>` tags with `rel="preconnect"` in the HTML `<head>` for fetching external fonts to enable parallel downloads and improve FCP.
