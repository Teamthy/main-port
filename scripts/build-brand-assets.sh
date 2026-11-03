#!/usr/bin/env bash
# Rebuild the monochrome brand assets from a colour source photo.
#
#   ./scripts/build-brand-assets.sh /path/to/portrait.jpg
#
# Outputs (all greyscale, so the site stays strictly black and white):
#   public/portrait/olusanya-timothy-portrait.jpg      800x800 full portrait
#   public/portrait/olusanya-timothy-avatar.jpg        480x480 head crop (avatars, OG)
#   src/app/icon.png                                   512x512 favicon / PWA icon
#   src/app/apple-icon.png                             180x180 Apple touch icon
#   src/app/favicon.ico                                48/32/16 legacy favicon
#
# Requires ImageMagick 6+ (`convert`). The generated files are committed, so a
# normal `npm run build` never needs ImageMagick.

set -euo pipefail

SRC="${1:-}"
if [[ -z "$SRC" || ! -f "$SRC" ]]; then
  echo "usage: $0 <source-photo.jpg>" >&2
  exit 1
fi

cd "$(dirname "$0")/.."
mkdir -p public/portrait

MONO="-colorspace Gray -auto-level"

# Full portrait: the composition used on the About and home "About" sections.
convert "$SRC" $MONO -resize 800x800 -unsharp 0x0.7 -quality 88 \
  public/portrait/olusanya-timothy-portrait.jpg

# Head crop: square, contrast-lifted, so it still reads inside a 28px circle.
convert "$SRC" $MONO -crop 205x205+100+12 +repage -resize 480x480 \
  -sigmoidal-contrast 3,52% -unsharp 0x0.8 -quality 88 \
  public/portrait/olusanya-timothy-avatar.jpg

# Favicon set from the same crop.
convert "$SRC" $MONO -crop 205x205+100+12 +repage -resize 512x512 \
  -sigmoidal-contrast 3,52% -unsharp 0x0.9 src/app/icon.png
convert "$SRC" $MONO -crop 205x205+100+12 +repage -resize 180x180 \
  -sigmoidal-contrast 3,52% src/app/apple-icon.png

# Tighter crop for the tab icon, where 16px leaves no room for shoulders.
convert "$SRC" $MONO -crop 160x160+122+22 +repage -sigmoidal-contrast 3.5,52% \
  -unsharp 0x1.0 -define icon:auto-resize=48,32,16 src/app/favicon.ico

echo "brand assets rebuilt in greyscale"
