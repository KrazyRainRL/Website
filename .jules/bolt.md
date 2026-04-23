## 2024-06-25 - React.lazy and Suspense code splitting
**Learning:** For static/lightweight React apps with heavy below-the-fold content, standard code-splitting (React.lazy) yields significant bundle reductions quickly since state doesn't block component initialization.
**Action:** Always use React.lazy for non-critical rendering paths when building single page applications, significantly improving first-load TTI.
