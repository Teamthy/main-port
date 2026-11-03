import Image from "next/image";

/**
 * The portrait is shipped monochrome: the source photo is converted to
 * greyscale at build time (see public/portrait), and every usage here keeps a
 * grayscale filter as a belt-and-braces so no colour variant can leak into the
 * black-and-white design system.
 */
export const PORTRAIT_SRC = "/portrait/olusanya-timothy-portrait.jpg";
/** Pre-cropped, pre-greyscaled head shot so small avatars never need CSS zooming. */
export const PORTRAIT_AVATAR_SRC = "/portrait/olusanya-timothy-avatar.jpg";

/** Small circular avatar for navigation, bylines and hero identity rows. */
export function Avatar({
  size = 40,
  className = "",
  priority = false,
  alt = "Olusanya Timothy",
  tone = "light",
}: {
  size?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden rounded-full bg-neutral-200 ring-1 ${
        tone === "dark" ? "ring-white/20" : "ring-black/10"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={PORTRAIT_AVATAR_SRC}
        alt={alt}
        width={size * 2}
        height={size * 2}
        priority={priority}
        className="size-full object-cover grayscale"
      />
    </span>
  );
}

/**
 * Larger framed portrait: square image, thin rules, a mono caption that names
 * the person and the place. Used where the page should show a face rather than
 * an abstract motif.
 */
export function PortraitFigure({
  className = "",
  priority = false,
  caption = "Olusanya Timothy · Lagos, NG",
  tone = "light",
  rounded = "rounded-[24px]",
}: {
  className?: string;
  priority?: boolean;
  caption?: string | null;
  tone?: "light" | "dark";
  rounded?: string;
}) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className={`relative overflow-hidden ${rounded} bg-neutral-100`}>
        <Image
          src={PORTRAIT_SRC}
          alt="Black-and-white portrait of Olusanya Timothy"
          width={800}
          height={800}
          priority={priority}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 420px"
          className="h-auto w-full grayscale"
        />
      </div>
      {caption ? (
        <figcaption
          className={`mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] ${
            tone === "dark" ? "text-white/40" : "text-gray-500"
          }`}
        >
          <span
            aria-hidden="true"
            className={`inline-block size-1.5 rounded-full ${tone === "dark" ? "bg-white/40" : "bg-black"}`}
          />
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default Avatar;
