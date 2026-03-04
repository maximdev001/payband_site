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

Local environment variables can be defined in a `.env` file this repository ignores. For
Render.com, set any necessary variables via the dashboard or `render.yaml` configuration.

## Deployment (Render.com)

1. Connect your GitHub repository to Render and create a new static site.
2. Set the build command to `npm run build` and the publish directory to `dist/`.
3. Optionally specify any environment variables required by the application.

No additional configuration is required; the existing `package.json` scripts are already
compatible with Render's defaults.

---

*This README was generated and customized for the Payband site project.*
