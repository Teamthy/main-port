import { Fragment } from "react";

/**
 * Renders copy that uses backticks for inline code (for example
 * "`tieout verify` needs no model"). Keeps the source text readable in the
 * data files and the rendered page honest to the terminal language the rest of
 * the site uses, instead of showing literal backticks.
 */
export default function Prose({
  text,
  tone = "light",
}: {
  text: string;
  tone?: "light" | "dark";
}) {
  const parts = text.split("`");

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <code
            key={index}
            className={
              tone === "dark"
                ? "rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.88em] text-white/90"
                : "rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-[0.88em] text-black"
            }
          >
            {part}
          </code>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
