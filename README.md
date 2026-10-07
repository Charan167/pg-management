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
