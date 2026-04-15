## 2024-05-24 - React.lazy Optimization
**Learning:** The application primarily consists of static React components with minimal state, making initial load optimizations (like code-splitting below-the-fold content via React.lazy) more effective than state-based render optimizations (like React.memo).
**Action:** Prioritize bundle size reduction and resource deferral over render cycle optimizations in this specific architecture.
