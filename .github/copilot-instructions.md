# Copilot Instructions for Coral Island Guide

This repository contains a guide application for the Coral Island game, built with Angular and managed with Nx monorepo tooling.

## Project Overview

The Coral Island Guide is an Angular-based web application that provides guides and information for the Coral Island video game. The project uses:
- **Angular 20.x** for the frontend framework
- **Nx 21.x** for monorepo management and build tooling
- **TypeScript** for type-safe code
- **Tailwind CSS** with Typography plugin for styling
- **Angular Material** for UI components
- **Angular PWA** for progressive web app functionality

## Repository Structure

This is an Nx monorepo with the following key packages:
- `packages/guide/` - Main Angular application
- `packages/data-types/` - Shared data type definitions
- `packages/util/` - Shared utility functions
- `packages/pak-files-parser/` - Parser for game asset files
- `packages/file-extraction/` - Tools for extracting game assets

## Development Workflow

### Installing Dependencies
```bash
npm install
```

### Building the Project
```bash
# Build the main guide application
nx build guide

# Build for production
nx build guide --configuration=production

# Build all projects
nx run-many --target=build --all
```

### Running the Development Server
```bash
# Start development server
nx serve guide

# Server will be available at http://localhost:4200
```

### Linting
```bash
# Lint the guide package
nx lint guide

# Lint all packages
nx run-many --target=lint --all

# Auto-fix linting issues
nx lint guide --fix
```

### Code Formatting
- The project uses **Prettier** for code formatting
- Configuration is in `.prettierrc`
- ESLint is configured in `.eslintrc.json`

## Coding Standards

### TypeScript
- Strict mode is enabled in `tsconfig.base.json`
- Use explicit types where possible
- Follow Angular style guide conventions
- File naming: kebab-case for files (e.g., `user-profile.component.ts`)
- Use barrel exports (`index.ts`) for cleaner imports

### Angular Components
- Component style: inline (no separate style files by default)
- Skip tests by default (configured in `nx.json`)
- Use standalone components where appropriate
- Prefix: `app` (configured in project.json)
- Type separator: `-` (e.g., `user.guard.ts`, not `user-guard.ts`)

### Path Aliases
The following path aliases are configured:
- `@ci/data-types` → `packages/data-types/src/index.ts`
- `@ci/util` → `packages/util/src/index.ts`

Always use these aliases instead of relative imports when importing from these packages.

### Styling
- Use **Tailwind CSS** utility classes
- Typography plugin is available for markdown content
- Container queries plugin is available
- Safe area plugin for mobile device support
- SCSS preprocessing is configured for custom styles if needed

## Special Considerations

### Asset Extraction
The project includes tools for extracting assets from Coral Island game files:
- `extract-assets-live` - Extract from live game version
- `extract-assets-beta` - Extract from beta game version
- These require the UnrealExporter tool in `packages/file-extraction/`

### Build Dependencies
The guide build has dependencies on:
1. `build-routes` - Generates static routes list at `packages/guide/src/generated/routes.txt`
2. `build-changelog` - Extracts changelog information

These run automatically before the main build via the `dependsOn` configuration.

### Deployment Preparation
```bash
npm run prepare-deploy
```
This command:
1. Prepares beta and live pak-files-parser
2. Builds the guide for production
3. Creates a 404.html (copy of index.html for GitHub Pages SPA routing)
4. Resets git state

## Common Tasks

### Adding a New Component
```bash
nx g @nx/angular:component component-name --project=guide
```

### Adding a New Service
```bash
nx g @nx/angular:service service-name --project=guide
```

### Adding a New Library Package
```bash
nx g @nx/angular:library library-name
```

## Build Artifacts

Build outputs are in the `dist/` directory:
- `dist/packages/guide/` - Main application build
- These directories are gitignored

## Important Files

- `nx.json` - Nx workspace configuration
- `package.json` - Root dependencies and scripts
- `tsconfig.base.json` - Base TypeScript configuration
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier formatting rules
- `.editorconfig` - Editor configuration for consistent coding style

## Testing

Note: Unit tests are disabled by default in this project (`unitTestRunner: "none"` in nx.json). When adding tests:
- Follow Angular testing best practices
- Use Jest environment for test specs
- Test files should use `.spec.ts` extension

## Notes for AI Assistants

1. **Always run builds before deploying** - The project has pre-build steps that generate required files
2. **Use Nx commands** - Prefer `nx` over `ng` for consistency with the monorepo setup
3. **Respect the no-tests configuration** - Don't add test files unless explicitly requested
4. **Use path aliases** - Import from `@ci/data-types` and `@ci/util` instead of relative paths
5. **TypeScript strict mode** - Ensure all code passes strict type checking
6. **Tailwind-first approach** - Prefer Tailwind utility classes over custom SCSS
7. **Angular Material** - Use Material components for consistent UI when appropriate
8. **PWA support** - Be mindful that this is a PWA with service worker configuration
