# Coral Island Guide

A comprehensive guide for Coral Island game, hosted at [coral.guide](https://coral.guide).

This is an Angular application built with Nx workspace that provides an interactive guide for the Coral Island game.

## Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js** (version 20.x or higher recommended)
-   **npm** (version 10.x or higher, comes with Node.js)

You can verify your installations by running:

```bash
node --version
npm --version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/teegly/coral-island-guide.git
cd coral-island-guide
```

### 2. Install Dependencies

```bash
npm install --force
```

**Note:** The `--force` flag is required because the project includes a Windows-specific dependency (`@img/sharp-win32-x64`) that may not be compatible with all operating systems. This dependency is used for image processing in the build pipeline but doesn't affect local development on other platforms.

### 3. Run the Development Server

```bash
npx nx serve guide
```

Or alternatively:

```bash
npm run start
```

The application will be available at `http://localhost:4200/` by default. The dev server will automatically reload if you change any of the source files.

## Available Commands

### Development

-   **Start dev server:** `npx nx serve guide`
-   **Build for production:** `npx nx build guide --configuration=production`
-   **Build for development:** `npx nx build guide --configuration=development`

### Code Quality

-   **Lint the code:** `npx nx lint guide`
-   **Format code:** `npx prettier --write .`

### Build Dependencies

Before building, the project automatically runs:

-   **Build routes:** `npx nx build-routes guide` (generates static routes list)
-   **Build changelog:** `npx nx build-changelog guide` (extracts changelog)

### Other Nx Commands

-   **Show project info:** `npx nx show project guide`
-   **List all projects:** `npx nx show projects`
-   **Run any target:** `npx nx [target] [project]`

## Project Structure

This is an Nx monorepo with multiple packages:

-   **`packages/guide`** - The main Angular application (the web guide)
-   **`packages/data-types`** - Shared TypeScript data types
-   **`packages/file-extraction`** - Tools for extracting assets from game files
-   **`packages/pak-files-parser`** - Parser for game PAK files
-   **`packages/util`** - Utility functions

## Technology Stack

-   **Framework:** Angular 20.x
-   **Build System:** Nx 21.x
-   **UI Components:** Angular Material
-   **Styling:** TailwindCSS with SCSS
-   **PWA:** Angular Service Worker
-   **SSR/Prerendering:** Angular SSR (Server-Side Rendering)

## Building for Production

To create a production build:

```bash
npx nx build guide --configuration=production
```

The build artifacts will be stored in the `dist/packages/guide/` directory.

## Troubleshooting

### Installation Issues

If you encounter errors during `npm install`:

1. Make sure you're using the `--force` flag: `npm install --force`
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and `package-lock.json`, then reinstall:
    ```bash
    rm -rf node_modules package-lock.json
    npm install --force
    ```

### Port Already in Use

If port 4200 is already in use, you can specify a different port:

```bash
npx nx serve guide --port=4300
```

### Build Errors

If you encounter build errors, ensure all dependencies are installed correctly and try:

```bash
npx nx reset
npm install --force
npx nx serve guide
```

## Contributing

This project is for the Coral Island game guide. If you want to contribute, please ensure your changes work locally before submitting.

## License

MIT

## Links

-   **Live Site:** [coral.guide](https://coral.guide)
-   **Repository:** [github.com/teegly/coral-island-guide](https://github.com/teegly/coral-island-guide)
