# ITechWise — Dark Glass SPA

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build command remains `npm run build`, and the production output continues to be written to `dist/` with a top-level `index.html` suitable for Cloudflare Pages.

## i18n

- RU (`ru`) and EN (`en`) translations are fully supported.
- The language toggle lives in the site header and persists the selected locale in `localStorage` so it survives reloads.
- The `<html lang>` attribute is updated whenever the active language changes.

## Deploy to Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Root directory: empty
- Do not add `404.html` or `_redirects`. SPA fallback will serve `index.html`.
- Production branch: `main`
- Custom domain: attach to this Pages project.

**Common pitfall:** if `Build output directory` is empty or not `dist`, Pages may serve `README.md`. Ensure `dist/index.html` exists in deploy logs.
