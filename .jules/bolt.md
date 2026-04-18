## 2024-04-18 - React.lazy Code Splitting Win
**Learning:** Initial application loading can be significantly bottlenecked by bundling all components into a single chunk. Below-the-fold components don't need to be part of the initial render.
**Action:** Utilize React.lazy and Suspense for below-the-fold components. This ensures users get the critical content faster.
