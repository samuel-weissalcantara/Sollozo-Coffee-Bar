# Sollozzo Coffee Bar im Hanse-Viertel — Website

A static marketing website for Sollozzo Coffee Bar (Poststraße 33, 20354
Hamburg). Plain HTML, Tailwind CSS (compiled ahead of time, not the runtime
CDN), self-hosted fonts, and a small vanilla-JS layer for language switching
and interactivity. No JS framework, no server.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. No build step is required to *view* the
site — `assets/css/tailwind.css` is already compiled and committed.

## Editing styles (rebuilding Tailwind)

If you change any Tailwind classes in the HTML or the theme in
`assets/css/input.css`, recompile:

```bash
npm install
npm run build:css
```

## Structure

```
index.html              Home
menu.html                Speisekarte / Menu
story.html               Geschichte / Story
visit.html                Besuch & Kontakt / Visit & Contact
impressum.html            Impressum (§5 DDG) — see "German legal compliance" below
datenschutz.html          Datenschutzerklärung (GDPR/TTDSG) — see "German legal compliance" below
assets/js/site.js        i18n dictionary (DE/EN), nav, scroll-reveal, menu tabs, lightbox, FAQ accordion, click-to-load map
assets/css/input.css      Tailwind entry point + brand @theme (colors, fonts, shadow) + custom layer
assets/css/tailwind.css   Compiled, committed output — this is what pages actually load
assets/css/fonts.css      @font-face rules for the self-hosted fonts
assets/fonts/             Self-hosted Fraunces & Inter woff2 files (from @fontsource, latin subset only)
assets/img/               Brand-styled SVG placeholder art (see below)
```

## Content & language

- Default language is German; the DE/EN toggle in the header switches all
  `data-i18n`-tagged text and persists the choice in `localStorage`.
- Real details used: address, general concept (specialty coffee + perfumery),
  small-batch roasting story, and the 4.9★ reputation. **Illustrative** menu
  items and prices are clearly labelled as such — replace with the current
  menu when available.
- Placeholder hours (Mon–Fri 08:00–19:00, Sat 09:00–18:00, Sun closed) and
  contact details are estimates — update in `visit.html` and both footers
  once confirmed.

## Swapping in real assets

- **Photos**: every image is a generated SVG placeholder in the brand
  palette (warm gradient + a simple line icon — cup, bean, flacon, steam,
  etc.), not a hotlinked stock photo. This keeps the site fully
  self-contained and avoids depending on a photo library staying online.
  Swap the `src`/`data-lightbox-trigger` attributes in `assets/img/` for real
  photos of the bar, drinks, and team when available.
- **Logo**: currently text-based ("Sollozzo" in Fraunces). Drop in a real
  logo image if one exists.
- **Reviews**: testimonial text on the homepage is illustrative, written to
  match the tone of real reviews found online — replace with actual guest
  quotes (with permission) when available.
- **Map**: `visit.html` shows a click-to-load placeholder on the "Besuch &
  Kontakt" page — the Google Maps iframe (searching the address text
  directly, no manual coordinates) only loads after the visitor clicks
  "Karte laden", so nothing is fetched from Google until they opt in. See
  "German legal compliance" below for why.
- **Fonts**: self-hosted (Fraunces + Inter, latin subset) — no Google Fonts
  request at runtime, which is both faster and avoids the German/EU privacy
  concerns around loading fonts from Google's CDN.

## German legal compliance

This site includes the standard pages required for a German-hosted/targeted
website:

- **`impressum.html`** (§5 DDG): operator name, address, and contact are
  placeholders (`[NAME]`, `[ADDRESS]`, etc.) — **fill these in with the real
  operator's details before publishing**. Never leave them as placeholders
  on a live site; an incomplete or fake Impressum is itself a legal
  violation in Germany and a common target for Abmahnungen (cease-and-desist
  letters). Since this site is a portfolio/demo built to pitch a prospective
  client rather than the café's own official site, the operator listed
  should be whoever is actually publishing the site (not the café), with a
  clear on-page disclaimer that it's an unofficial concept — which is
  already present in the footer of every page and at the top of the
  Impressum.
- **`datenschutz.html`** (Art. 13/14 GDPR + §25 TTDSG): covers hosting/CDN
  logs, the click-to-load Google Maps embed, contact-form-free data
  handling, and standard data-subject rights. Fill in the hosting
  provider's name/address (e.g. Cloudflare) and the operator's contact
  details to match the Impressum.
- **Click-to-load Maps embed**: nothing from Google loads until the visitor
  clicks the button — this avoids needing a cookie-consent banner for the
  one third-party embed on the site. If you add other embeds (video,
  analytics, social widgets) later, follow the same click-to-load pattern
  or add a proper consent banner.

This is a solid standard-practice baseline, not legal advice — have a
lawyer review the filled-in Impressum/Datenschutz text before a real
commercial launch.

## Deployment

Any static host works — no build step required at deploy time since
`tailwind.css` is pre-compiled and committed:

- **GitHub Pages**: enable Pages on this repo, serve from the root of the
  default branch.
- **Netlify / Vercel**: point at the repo root, no build command needed.
- **Cloudflare Workers (static assets)**: deploy command is `npx wrangler
  deploy`. `wrangler.jsonc` sets the assets directory to the repo root, and
  `.assetsignore` excludes `node_modules`, `.git`, and other non-site files
  from the deployment — without it, Cloudflare's build step reinstalls
  `node_modules` (including wrangler's own ~122 MiB `workerd` binary) and
  tries to upload it as a "static asset", which fails with `Asset too
  large` (Workers caps individual assets at 25 MiB). If you ever see that
  error again, it means something is being swept up that `.assetsignore`
  doesn't yet exclude — check what changed.

## Notes

This is an independent concept/demo site, not the café's official online
shop.
