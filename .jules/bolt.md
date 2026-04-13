## 2024-04-13 - Vite Build Artifacts & Lockfile Management
**Learning:** Running `pnpm install` and `pnpm build` in a Vite project environment lacking an initial node_modules structure can unexpectedly generate and commit a massive `pnpm-lock.yaml` if not strictly monitored.
**Action:** Always clean up unrequested artifacts (like `pnpm-lock.yaml` and test scripts) before committing or requesting review to maintain repository hygiene.
