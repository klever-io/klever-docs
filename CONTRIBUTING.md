# Contributing to Klever Documentation

Thank you for your interest in contributing! This guide explains how to set up your environment, our conventions, and how to submit high‑quality pull requests.

## Getting Started
- Fork the repository
- Clone your fork
- Ensure Node.js 20.x is active (repo ships with `.nvmrc`)
- Install dependencies with pnpm

```bash
corepack enable
corepack prepare pnpm@10 --activate
pnpm install
```

## Development Process
- Base branch: `develop`
- Create a topic branch from `develop`
- Branch naming: `KLC-XXXX-brief-description`
- Keep PRs focused and small when possible

## Commit Messages
- Use clear, descriptive messages
- Prefer Conventional Commits style when possible
  - feat: add new X
  - fix: resolve Y
  - docs: update Z
  - chore: housekeeping changes

## Pull Request Process
- PR title format: `[KLC-XXXX] Brief description`
- Link the related Jira/GithubProject issue (KLC-XXXX) in the PR description
- Ensure CI passes (lint, build, typecheck)
- Request review from maintainers
- Be responsive to feedback; follow up with changes as needed

## Code Standards
- TypeScript first: add/keep types for all public exports
- Follow the existing code style (ESLint + Prettier are configured)
- Avoid `console.log` in production code; prefer proper logging or remove
- Keep components and utilities small and composable

## Documentation Standards
- Use MDX for content pages
- Include code examples where applicable
- Update `src/consts/navigation.ts` for new pages/sections when needed
- Test locally before submitting (`pnpm dev`)

## Quality Checklist (before pushing)
- `pnpm lint` has no errors
- `pnpm build:circular` completes successfully
- `pnpm build` succeeds locally
- Types are valid (`pnpm exec tsc --noEmit`)

## Local Development
```bash
pnpm dev
```
Starts Next.js at http://localhost:3000

## Reporting Issues
- Use issue templates where applicable
- Provide reproduction steps, expected vs actual behavior, and environment details

## License
By contributing, you agree that your contributions will be licensed under the same license as this repository.
