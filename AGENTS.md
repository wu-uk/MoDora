# Repository Guidelines

## Project Structure & Module Organization
The primary app lives at the repository root as a Next.js 14 + TypeScript site. Route entrypoints are in `app/`, shared UI is in `components/`, and small helpers live in `lib/`. Static dataset and runtime artifacts appear under `data/`, `out/`, `.next/`, and similar generated folders; do not treat those as source.

`MoDora-backend/` is a separate Python workspace for experiments, cached results, and backend tests. Keep long-lived code under `MoDora-backend/src/` and tests under `MoDora-backend/tests/`. Avoid committing files from cache-heavy paths such as `MoDora-backend/tmp/`, `MoDora-backend/logs/`, `cache/`, or `exp_*`.

## Build, Test, and Development Commands
- `npm install`: install root frontend dependencies.
- `npm run dev`: start the Next.js app locally.
- `npm run build`: create the production export used by GitHub Pages.
- `npm run start`: serve the production build locally.
- `npm run lint`: run Next.js/ESLint checks.

Run backend Python tools from `MoDora-backend/` and keep that environment isolated from the frontend toolchain.

## Coding Style & Naming Conventions
Use TypeScript with React function components and named exports for shared UI sections. Component files use `PascalCase`; utility modules use lowercase names like `lib/utils.ts`. Prefer the existing alias imports (`@/components/...`, `@/lib/...`).

Follow the existing style in each file: app code generally uses 2-space indentation and double quotes, while some UI utility files are semicolon-free. Run `npm run lint` before submitting changes and keep Tailwind class usage readable.

## Testing Guidelines
Frontend automated tests are not configured yet, so linting and manual verification are the current baseline. At minimum, verify `npm run build` succeeds and test affected pages in `npm run dev`.

Backend tests follow `test_*.py` naming under `MoDora-backend/tests/`. Keep new tests close to the code they exercise and avoid depending on large local caches unless the fixture is checked in intentionally.

## Commit & Pull Request Guidelines
Recent history follows Conventional Commit prefixes such as `feat:` and `fix:`. Keep subjects imperative and specific, for example `feat: add architecture section animation`.

Pull requests should include a short summary, affected areas, manual test notes, and screenshots for visible UI changes. Call out any generated output, data files, or deployment-impacting config changes explicitly.

## Security & Configuration Tips
This repo is configured for GitHub Pages export in `next.config.mjs`, including `basePath: '/MoDora'`. Preserve that unless the deployment target changes. Do not commit secrets, local `.env` files, `node_modules/`, `.next/`, `out/`, or backend caches already covered by `.gitignore`.
