# Repository Instructions

These instructions apply to the entire repository.

## Required theme guide

Before changing content, components, routes, configuration, SEO, styling, or
build behavior, read and follow:

`/.agents/bitdoze-astro-theme/SKILL.md`

That skill is the source of truth for the theme's content schemas, publication
policy, route and canonical behavior, MDX components, configuration ownership,
accessibility requirements, and verification workflow.

## Working rules

- Inspect `git status --short` before editing and preserve unrelated changes.
- Use `apply_patch` for source edits.
- Keep `src/layouts/Layout.astro` as the only owner of the `<main>` landmark.
- Load public posts through `getPublishedPosts()` from `src/utils/content.ts`.
- Use `getPostUrl()` and `slugify()` for generated links.
- Keep local `slug` values independent from canonical URLs.
- Pass page metadata through `Layout.astro` and `SEO.astro`.
- Preserve keyboard access, visible focus, ARIA state, dark-mode contrast, and
  reduced-motion behavior.
- Do not enable the contact form until a real endpoint is configured.
- Do not publish draft or future-dated content.

## Validation

Run before handing off:

```bash
npm run verify
git diff --check
```

For visual or interactive work, also verify the affected behavior at desktop
and 390px mobile widths and check the browser console.

Report what changed, any configuration still required from the user, and the
validation commands that passed. Do not claim commits, deployment, or staging
unless those actions were explicitly completed.
