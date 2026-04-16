## 2024-04-16 - Vite Bundle Sizes
**Learning:** The application primarily consists of static React components with minimal state, making initial load optimizations (like code-splitting below-the-fold content via React.lazy) more effective than state-based render optimizations (like React.memo) to reduce the initial JS payload (reduced from ~211KB to ~191KB).
**Action:** When working on this specific repo in the future, favor code splitting over component memoization for performance gains.
