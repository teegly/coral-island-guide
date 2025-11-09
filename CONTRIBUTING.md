# Contributing to Coral Island Guide

Thank you for your interest in contributing to the Coral Island Guide! This document provides guidelines and instructions for contributing to the project.

## Development Setup

1. **Fork and clone the repository**

    ```bash
    git clone https://github.com/YOUR_USERNAME/coral-island-guide.git
    cd coral-island-guide
    ```

2. **Install dependencies**

    ```bash
    npm install --force
    ```

    Note: The `--force` flag is required due to platform-specific dependencies.

3. **Start the development server**
    ```bash
    npm start
    ```
    The app will be available at http://localhost:4200

## Making Changes

### Code Style

This project uses:

-   **ESLint** for JavaScript/TypeScript linting
-   **Prettier** for code formatting
-   **EditorConfig** for consistent editor settings

Before committing, ensure your code passes linting:

```bash
npm run lint
```

### Testing Your Changes

1. Start the development server and verify your changes work correctly
2. Test the production build locally:
    ```bash
    npm run build
    ```
3. Ensure there are no console errors or warnings

### Commit Guidelines

-   Write clear, descriptive commit messages
-   Keep commits focused on a single change
-   Reference issue numbers when applicable

## Project Structure

-   `packages/guide/` - Main Angular application
    -   `src/app/` - Application components and services
    -   `src/assets/` - Static assets (images, fonts, etc.)
    -   `src/styles/` - Global styles and SCSS files
-   `packages/data-types/` - Shared TypeScript types
-   `packages/pak-files-parser/` - Game file parser
-   `packages/file-extraction/` - Asset extraction tools
-   `packages/util/` - Utility functions

## Submitting Changes

1. Create a new branch for your feature/fix:

    ```bash
    git checkout -b feature/your-feature-name
    ```

2. Make your changes and commit them:

    ```bash
    git add .
    git commit -m "Description of your changes"
    ```

3. Push to your fork:

    ```bash
    git push origin feature/your-feature-name
    ```

4. Create a Pull Request from your fork to the main repository

## Getting Help

If you have questions or need help:

-   Check the [README.md](README.md) for setup instructions
-   Open an issue for bugs or feature requests
-   Review existing issues and pull requests

## Code of Conduct

-   Be respectful and constructive in your communications
-   Focus on what is best for the community
-   Show empathy towards other contributors

Thank you for contributing to Coral Island Guide!
