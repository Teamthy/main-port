# Bundled fonts

These files are copied from Fontsource and npm distributions so that `next build`
never depends on a font or icon CDN. All three are licensed under the SIL Open
Font License 1.1 or Apache 2.0, as noted below.

| File | Family | Source | Licence |
| --- | --- | --- | --- |
| `jetbrains-mono-latin-wght-normal.woff2` | JetBrains Mono (variable, 100–800) | `@fontsource-variable/jetbrains-mono` | OFL 1.1 |
| `jetbrains-mono-regular.ttf` | JetBrains Mono 400, decompressed from the variable font for the PDF CV | derived from the file above | OFL 1.1 |

The site is monospace end to end, so there is exactly one web font: JetBrains
Mono, loaded with `next/font/local` in `src/app/layout.tsx` and exposed as
`--font-mono`.

## Icons

Icons are Material Symbols by Google (Apache 2.0), taken from the
`@material-symbols/svg-400` package and compiled into `src/components/Icon.tsx`
by `npm run icons:build`. They are inline SVG paths, not an icon font: no extra
download, no flash of text before the glyph, and every icon inherits
`currentColor`.

To refresh either asset, install the npm package, copy the file (or run the icon
script), and commit the result. Nothing references `node_modules` at build time.
