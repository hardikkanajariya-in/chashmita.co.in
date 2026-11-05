# Chashmita Engineers — Hallmark system lock

Redesign: full · theme Terrazzo (brand-mapped) · genre modern-minimal

## Material

- Real company copy, client names, projects and contact details from `src/data/*` and `src/lib/site.ts`
- Project photographs under `public/images/site/`
- Logo: `public/images/site/index_r1_c1.gif`

## Tokens

Source: `src/app/tokens.css` and `src/app/base.css`, imported from `src/app/globals.css`.

## Typography

- Display: Syne 700
- Body: Onest 400/500
- Codes: JetBrains Mono (project codes, indices only)

## Surfaces

- Paper background, ink rules, plate cards with 14px hard offset shadow
- Rust accent for focus, selection and active row states
- No rounded corners on cards or controls

## Chrome

- Nav: slab (ink rule, sentence-case links)
- Footer: statement band with contact line
- Hero posture: Poster on home; settled band on inner routes

## Pages

Shared system; inner pages use `PageHero` + spec cards/tables. Do not remove routes or nav hrefs.
