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

The production build outputs to `dist/` with a top-level `index.html` suitable for Cloudflare Pages.

## Deploy to Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Root directory: empty
- Do not add `404.html` or `_redirects`. SPA fallback will serve `index.html`.
- Production branch: `main`
- Custom domain: attach to this Pages project.

**Common pitfall:** if `Build output directory` is empty or not `dist`, Pages may serve `README.md`. Ensure `dist/index.html` exists in deploy logs.
