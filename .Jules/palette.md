## 2024-05-03 - Accessible Mobile Navigation and Dummy Link UX
**Learning:** The application uses empty `href="#"` links as placeholders for logos, social media links, and utility links, which causes jarring page jumps to the top when clicked.
**Action:** Replace logo placeholder links with semantic `#home` anchors, and convert generic text-only dummy links (e.g., social links without URLs) to `span` elements with `cursor-default` styling to prevent focus and top-of-page jumps until real URLs are implemented.
