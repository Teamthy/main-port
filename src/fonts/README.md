# Bundled fonts

These files are copied from the Fontsource distributions so that `next build`
never depends on a font CDN. Both families are licensed under the SIL Open Font
License 1.1.

| File | Family | Source |
| --- | --- | --- |
| `inter-latin-wght-normal.woff2` | Inter (variable, 100–900) | `@fontsource-variable/inter` |
| `anonymous-pro-latin-400-normal.woff2` | Anonymous Pro 400 | `@fontsource/anonymous-pro` |
| `anonymous-pro-latin-700-normal.woff2` | Anonymous Pro 700 | `@fontsource/anonymous-pro` |

To refresh, install the Fontsource packages and copy the latin `woff2` files
again — nothing else references `node_modules` at build time.
