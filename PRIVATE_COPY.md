# Making a Private Copy for Personal Customization

This guide explains how to create your own private, customized copy of the Coral Island Guide without affecting the main repository.

---

## Why Have a Private Copy?

- You can freely experiment, add features, and customize the guide for your own needs.
- Personal forks or private repos are independent and do **not** affect the main repository unless you explicitly submit a pull request.
- You are **not** expected to contribute changes back to the main repo.

---

## How to Make a Private Copy

### Option A: GitHub Fork

1. Click **Fork** on GitHub (at the top right of the repository page)
2. Work on your forked version
3. Your changes are only on your fork unless you open a pull request

### Option B: Local or Private Repository

1. Clone the repo:
    ```bash
    git clone https://github.com/teegly/coral-island-guide.git
    cd coral-island-guide
    ```

2. [Create a new private repo on GitHub](https://github.com/new)

3. Change your remote:
    ```bash
    git remote remove origin
    git remote add origin git@github.com:YOUR_USERNAME/YOUR_PRIVATE_REPO.git
    git push -u origin main
    ```

4. (Optional) Sync upstream changes:
    ```bash
    git remote add upstream https://github.com/teegly/coral-island-guide.git
    git fetch upstream
    git merge upstream/main  # or 'git rebase upstream/main'
    ```

---

## Getting Started with Your Private Copy

### Setting Up Locally

```bash
# Clone (if you haven't already)
git clone https://github.com/teegly/coral-island-guide.git
cd coral-island-guide

# Install dependencies
npm install --force

# Start dev server
npm start

# Open http://localhost:4200 in your browser
```

For more detailed setup instructions, see the [README.md](README.md) Quick Start section.

---

## Relevant Project Files

- **[README.md](README.md)**: Quick Start, setup, troubleshooting, dependency info
- **[CONTRIBUTING.md](CONTRIBUTING.md)**: Default contribution steps (you can skip PRs for private use)
- **[Project Structure](README.md#project-structure)**: Understanding the codebase organization
- **[CHANGELOG.md](packages/guide/src/CHANGELOG.md)**: Version history and changes

---

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

### Platform-Specific Dependencies

- **`@img/sharp-win32-x64`**: This is a Windows-specific dependency used for image processing
- Use `npm install --force` if you see install errors on non-Windows platforms
- This dependency doesn't affect local development on other platforms

### Common Issues

For more troubleshooting help, see the [README.md Troubleshooting section](README.md#troubleshooting).

---

## Keeping Your Private Copy Updated

If you want to pull in updates from the main repository:

```bash
# Fetch the latest changes from the main repo
git fetch upstream

# Merge the changes into your branch
git merge upstream/main

# Or, if you prefer rebasing
git rebase upstream/main
```

**Note:** You may need to resolve conflicts if your customizations conflict with updates from the main repository.

---

## Working on Your Customizations

Since this is your private copy, you can:

- Make any changes you want
- Add custom features
- Modify styling
- Remove features you don't need
- Experiment freely without worrying about breaking the main project

### Development Workflow

1. Make your changes in your favorite editor
2. Test with `npm start`
3. Build for production with `npm run build`
4. Commit and push to your private repository

For detailed development instructions, see [CONTRIBUTING.md - Development Setup](CONTRIBUTING.md#development-setup).

---

## Additional Help

- Your copy is for personal use—no PRs needed!
- For reference: [Project Structure](README.md#project-structure), [Development Setup](CONTRIBUTING.md#development-setup)
- If you ever want to contribute back to the main project, see [CONTRIBUTING.md](CONTRIBUTING.md)

---

## Important Notes

- **No Contribution Required**: This guide is for personal use. You don't need to submit pull requests or contribute changes back.
- **Independent Copy**: Your private copy operates completely independently from the main repository.
- **Optional Contributions**: If you create something you think would benefit the community, you can *optionally* submit a pull request, but this is not expected or required.

---

## Questions?

- Check the [README.md](README.md) for general information
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for development details
- Open an issue if you need help (note: issues should be about the main project, not your private customizations)
