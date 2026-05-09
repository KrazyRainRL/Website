## 2024-05-09 - Remove empty href='#' from Navbar logo link
**Learning:** Found an anti-pattern in the Navbar where the logo link used `href='#'`, which causes an unwanted scroll jump to the top of the page.
**Action:** Changed to a functional internal anchor (`href='#home'`) to improve accessibility and page interaction context.
