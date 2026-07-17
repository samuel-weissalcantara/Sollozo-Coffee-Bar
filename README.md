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
assets/js/site.js        i18n dictionary (DE/EN), nav, scroll-reveal, menu tabs, lightbox, FAQ accordion
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
- **Map**: `visit.html` embeds an OpenStreetMap iframe centered near
  Poststraße 33; no API key required.
- **Fonts**: self-hosted (Fraunces + Inter, latin subset) — no Google Fonts
  request at runtime, which is both faster and avoids the German/EU privacy
  concerns around loading fonts from Google's CDN.

## Deployment

Any static host works — no build step required at deploy time since
`tailwind.css` is pre-compiled and committed:

- **GitHub Pages**: enable Pages on this repo, serve from the root of the
  default branch.
- **Netlify / Vercel**: point at the repo root, no build command needed.

## Notes

This is an independent concept/demo site, not the café's official online
shop.
