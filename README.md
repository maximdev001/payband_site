# Payband Site

A React application powered by Vite for the Payband marketing site. This project includes
support for internationalization, component styling via CSS modules, and is ready to be
published to [Render.com](https://render.com).

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server with hot module replacement:
   ```bash
   npm run dev
   ```
3. The site will be available at `http://localhost:5173` by default.

## Production Build

To create an optimized production build:

```bash
npm run build
```

The generated `dist` folder is what you deploy. Render.com will automatically run the
build command and serve the resulting static assets.

## Environment Variables

Local environment variables can be defined in a `.env` file; this repository ignores those
files. GitHub Pages does not support server‑side environment variables, so keep any
configuration hard‑coded or handled at build time.

## Deployment (GitHub Pages)

1. Push your code to a GitHub repository (private or public).
2. Ensure the `homepage` field in `package.json` is set to the GitHub Pages URL, for
   example:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>/"
   ```
3. Install the `gh-pages` package if not already present:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
5. Run `npm run deploy` to publish the `dist/` folder to the `gh-pages` branch. GitHub
   Pages will automatically serve the site from there.

No further server configuration is required; GitHub Pages will serve the static build.

---

*This README was generated and customized for the Payband site project.*
