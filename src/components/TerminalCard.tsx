import Link from "next/link";

const LINES: { label?: string; value: string; accent?: boolean; muted?: boolean }[] = [
  { value: "tieout verify runs/demo", muted: true },
  { label: "format", value: "tieout-bundle/v1" },
  { label: "chain", value: "22 records, intact" },
  { label: "file", value: "sha256 match" },
  { label: "items", value: "14/14 pre-assigned ids present" },
  { label: "re-derive", value: "14/14 verdicts from stored raw" },
  { label: "controls", value: "8 re-derived, 0 FP / 0 FN" },
  { label: "gaps", value: "none" },
  { value: "VERDICT: PASS (re-derivable by a stranger)", accent: true },
];

/**
 * The hero panel: a real verification transcript from the tieout demo bundle.
 * It is the shortest honest description of how this engineer works: the
 * claim, the record, and the command anyone can run to check it.
 */
export default function TerminalCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] bg-[#0A0A0B] ring-1 ring-white/10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          evidence bundle
        </span>
      </div>

      <div className="px-5 py-6 sm:px-7">
        <div className="font-mono text-[12px] leading-[1.9] sm:text-[13px]">
          {LINES.map((line, i) => (
            <div key={i} className="flex gap-3 whitespace-pre-wrap">
              {line.label ? (
                <span className="w-[9ch] shrink-0 text-white/35">{line.label}</span>
              ) : (
                <span className={line.accent ? "shrink-0 text-[#C7F24E]" : "shrink-0 text-white/40"}>{i === 0 ? "$" : " "}</span>
              )}
              <span
                className={
                  line.accent
                    ? "text-[#C7F24E]"
                    : line.muted
                      ? "text-white/50"
                      : "text-white/85"
                }
              >
                {line.value}
              </span>
            </div>
          ))}
          <div className="flex gap-3">
            <span className="w-[9ch] shrink-0 text-white/40">$</span>
            <span className="inline-block h-[1.1em] w-[7px] translate-y-[0.2em] animate-pulse bg-[#C7F24E]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">
          no model · no key · no network
        </span>
        <Link
          href="/portfolio/tieout"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70 underline decoration-white/20 underline-offset-4 transition hover:text-[#C7F24E]"
        >
          Inspect the harness →
        </Link>
      </div>
    </div>
  );
}
