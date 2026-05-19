## 2024-05-19 - Mobile Menu Toggle Accessibility
**Learning:** State toggles like mobile menus must communicate their current state to screen readers, not just their label, otherwise users won't know if clicking will open or close it.
**Action:** Always ensure icon-only toggle buttons include `aria-expanded={isOpen}` in addition to their descriptive `aria-label`.
