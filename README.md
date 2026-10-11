## Workspace Layout

This repository uses pnpm workspaces to manage multiple packages in one repository.

- `apps/admin` - Admin application.
- `apps/api` - API application.
- `packages/shared` - Shared code that can be used by the applications.

The workspace configuration is defined in `pnpm-workspace.yaml`.

## Run the Admin Application

Use Node.js 22.12 or newer. The repository pins its pnpm version in the root
`package.json`. From the repository root, install dependencies and start the app:

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm --filter admin dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). The app
runs independently of the API and shows a placeholder dashboard. Business
resources are not configured yet; the placeholder data provider rejects all
operations with an error naming the operation and resource.

Check types, build the app, and serve the build locally:

```bash
corepack pnpm typecheck
corepack pnpm --filter admin build
corepack pnpm --filter admin preview
```

Preview normally runs at `http://localhost:4173`. It is for inspecting the build
locally, not production hosting.

Corepack comes with Node.js 22 and downloads the declared pnpm version when
needed. If that pnpm version is already on your PATH, you can use `pnpm` directly
in these commands.

## Connect the Admin App to API Health

The React Admin app runs at `http://localhost:5173`, and the Express API runs
at `http://localhost:3000`. Start them in separate terminals from the repository
root:

```bash
pnpm --filter @pg-management/admin dev
pnpm --filter @pg-management/api dev
```

The admin dashboard checks the API by sending `GET /health` to the API base
URL. That base URL is set by `VITE_API_URL`, which defaults to
`http://localhost:3000`. To use a different API URL for local development,
provide the variable when starting the admin app:

```bash
VITE_API_URL=http://localhost:3001 pnpm --filter @pg-management/admin dev
```

The admin app and API use different origins because they run on different ports.
Browsers therefore require the API to allow the admin origin through CORS. The
request is also credentialed so browser credentials can be sent; the API must
allow credentials and use the specific admin origin rather than a wildcard.
The dashboard shows a loading state while checking, then indicates whether the
API is available or unavailable. It refreshes the health check automatically.
