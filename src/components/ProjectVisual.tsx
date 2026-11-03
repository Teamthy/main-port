import type { Motif } from "../data/projects";

const ACCENT = "#C7F24E";

/**
 * Deterministic, code-drawn project artwork. No stock photography, no remote
 * images: each project gets a motif that says something about what it does,
 * rendered as plain SVG so it is instant, crisp at any size and identical
 * on every build.
 */
export default function ProjectVisual({
  motif,
  index,
  caption,
  className = "",
}: {
  motif: Motif;
  index?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 640 360"
      className={`w-full ${className}`}
      style={{ backgroundColor: "#0A0A0B" }}
      role="img"
      aria-label={caption ? `${caption} — schematic illustration` : "Project schematic illustration"}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id={`grid-${motif}`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#1C1C1F" strokeWidth="1" />
        </pattern>
        <linearGradient id={`glow-${motif}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.22" />
          <stop offset="60%" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="640" height="360" fill="#0A0A0B" />
      <rect width="640" height="360" fill={`url(#grid-${motif})`} />
      <rect width="640" height="360" fill={`url(#glow-${motif})`} />

      {/* editorial frame */}
      <text x="28" y="34" fill="#6B6B72" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="1.6">
        {index ? `FIG. ${index}` : "FIG."}
      </text>
      <g fill="#3A3A40">
        <circle cx="584" cy="30" r="2.5" />
        <circle cx="596" cy="30" r="2.5" />
        <circle cx="608" cy="30" r="2.5" />
      </g>

      <g stroke="#2A2A30" strokeWidth="1.2" fill="none">
        <path d="M28 336H612" />
        <path d="M28 332V336M60 332V336M92 332V336M124 332V336M156 332V336M188 332V336M220 332V336M252 332V336M284 332V336M316 332V336M348 332V336M380 332V336M412 332V336M444 332V336M476 332V336M508 332V336M540 332V336M572 332V336M604 332V336" />
      </g>

      <MotifArt motif={motif} />

      <text x="28" y="318" fill="#6B6B72" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="1.4">
        {caption ? caption.toUpperCase() : "SCHEMATIC"}
      </text>
    </svg>
  );
}

function MotifArt({ motif }: { motif: Motif }) {
  switch (motif) {
    case "chain":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect
                x={116 + i * 92}
                y={140}
                width={64}
                height={56}
                rx={6}
                fill="#121215"
                stroke={i === 0 ? ACCENT : "#3A3A42"}
                strokeWidth="1.4"
              />
              <path d={`M${132 + i * 92} 160H${164 + i * 92}`} stroke="#4A4A52" strokeWidth="2" />
              <path d={`M${132 + i * 92} 172H${156 + i * 92}`} stroke="#4A4A52" strokeWidth="2" />
              {i < 3 && <path d={`M${180 + i * 92} 168H${208 + i * 92}`} stroke={ACCENT} strokeWidth="1.6" strokeDasharray="3 3" />}
            </g>
          ))}
          <g stroke="#3A3A42" strokeWidth="1.4" strokeDasharray="5 5">
            <rect x={484} y={140} width={64} height={56} rx={6} fill="none" />
          </g>
          <text x="496" y="174" fill="#5A5A62" fontSize="10" fontFamily="ui-monospace, monospace">
            GAP
          </text>
          <path d="M116 224H548" stroke="#2A2A30" strokeWidth="1" />
          <text x="116" y="242" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            RECORD → SEAL → CHAIN
          </text>
        </g>
      );

    case "gate":
      return (
        <g>
          <rect x={300} y={96} width={10} height={168} fill={ACCENT} opacity="0.9" />
          {[116, 148, 180, 212, 244].map((y, i) => (
            <g key={y}>
              <path d={`M90 ${y}H280`} stroke="#3A3A42" strokeWidth="1.4" />
              <circle cx="90" cy={y} r="3" fill="#4A4A52" />
              {i < 3 ? (
                <>
                  <path d={`M292 ${y}H332`} stroke={i === 0 ? ACCENT : "#3A3A42"} strokeWidth="1.4" strokeDasharray="4 4" />
                  <circle cx="340" cy={y} r="3" fill={i === 0 ? ACCENT : "#3A3A42"} />
                </>
              ) : (
                <g stroke="#5A5A62" strokeWidth="1.6">
                  <path d={`M286 ${y - 8}L306 ${y + 8}`} />
                  <path d={`M306 ${y - 8}L286 ${y + 8}`} />
                </g>
              )}
            </g>
          ))}
          <text x="352" y="120" fill={ACCENT} fontSize="9" fontFamily="ui-monospace, monospace">
            NEW
          </text>
          <text x="352" y="152" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            KNOWN
          </text>
          <text x="352" y="184" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            FIXED
          </text>
          <text x="352" y="216" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            BLOCKED
          </text>
          <text x="90" y="300" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            FIND → FINGERPRINT → DIFF → GATE
          </text>
        </g>
      );

    case "crash":
      return (
        <g>
          <rect x={96} y={128} width={120} height={80} rx={6} fill="#121215" stroke="#3A3A42" strokeWidth="1.4" />
          <text x="112" y="160" fill="#8A8A92" fontSize="10" fontFamily="ui-monospace, monospace">
            PROCESS
          </text>
          <text x="112" y="180" fill={ACCENT} fontSize="10" fontFamily="ui-monospace, monospace">
            DECIDED
          </text>
          <path d="M216 168H268" stroke="#3A3A42" strokeWidth="1.4" strokeDasharray="4 4" />
          <path d="M268 168L280 152M268 168L280 184" stroke={ACCENT} strokeWidth="1.6" />
          <text x="272" y="140" fill={ACCENT} fontSize="9" fontFamily="ui-monospace, monospace">
            EXIT(9)
          </text>
          <rect x={330} y={128} width={120} height={80} rx={6} fill="#121215" stroke="#3A3A42" strokeWidth="1.4" />
          <text x="346" y="160" fill="#8A8A92" fontSize="10" fontFamily="ui-monospace, monospace">
            AUDIT STORE
          </text>
          <text x="346" y="180" fill="#6B6B72" fontSize="10" fontFamily="ui-monospace, monospace">
            id + commit
          </text>
          <path d="M450 168H486" stroke="#3A3A42" strokeWidth="1.4" />
          <path d="M486 140V196" stroke="#3A3A42" strokeWidth="1.4" />
          <rect x={500} y={128} width={42} height={80} rx={6} fill="none" stroke="#3A3A42" strokeDasharray="4 4" />
          <text x="504" y="172" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            GAP
          </text>
          <text x="96" y="252" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            VERIFY TRUSTS NONE OF THE ARTEFACTS
          </text>
        </g>
      );

    case "probes":
      return (
        <g>
          {["INJECTION", "RETRIEVAL", "TOOLS", "LANGUAGE", "METRIC"].map((label, i) => {
            const y = 108 + i * 36;
            return (
              <g key={label}>
                <text x="96" y={y + 4} fill="#8A8A92" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="1">
                  {label}
                </text>
                <path d={`M216 ${y}H520`} stroke="#2A2A30" strokeWidth="1" />
                {[0, 1, 2].map((d) => (
                  <circle
                    key={d}
                    cx={300 + d * 84}
                    cy={y}
                    r={5}
                    fill={i === 3 && d === 1 ? ACCENT : "#26262B"}
                    stroke={i === 3 && d === 1 ? ACCENT : "#3A3A42"}
                    strokeWidth="1.2"
                  />
                ))}
              </g>
            );
          })}
          <text x="96" y="306" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            3 ATTEMPTS / CLASS · ENGLISH + PIDGIN/YORUBA
          </text>
        </g>
      );

    case "routes":
      return (
        <g>
          <rect x={96} y={96} width={448} height={34} rx={4} fill="#121215" stroke={ACCENT} strokeWidth="1.3" />
          <text x="112" y="118" fill="#B9B9C0" fontSize="10" fontFamily="ui-monospace, monospace">
            OPENAPI · 48 ROUTES · CHECKED BOTH WAYS
          </text>
          <path d="M320 130V154" stroke="#3A3A42" strokeWidth="1.4" />
          <path d="M150 154H490" stroke="#3A3A42" strokeWidth="1.4" />
          {[
            { x: 128, label: "GO API" },
            { x: 292, label: "WEB / PWA" },
            { x: 456, label: "NATIVE" },
          ].map((node) => (
            <g key={node.label}>
              <path d={`M${node.x + 32} 154V196`} stroke="#3A3A42" strokeWidth="1.4" />
              <rect x={node.x} y={196} width={64} height={52} rx={4} fill="#121215" stroke="#3A3A42" strokeWidth="1.2" />
              <text x={node.x + 10} y={226} fill="#8A8A92" fontSize="9" fontFamily="ui-monospace, monospace">
                {node.label}
              </text>
            </g>
          ))}
          <text x="96" y="288" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            ONE SERVER OWNS DEADLINE · SCORING · AUTH
          </text>
        </g>
      );

    case "ledger":
      return (
        <g>
          <rect x={96} y={104} width={220} height={150} rx={4} fill="#121215" stroke="#3A3A42" strokeWidth="1.2" />
          <rect x={324} y={104} width={220} height={150} rx={4} fill="#121215" stroke="#3A3A42" strokeWidth="1.2" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <path d={`M112 ${136 + i * 28}H300`} stroke="#26262B" strokeWidth="1" />
              <path d={`M340 ${136 + i * 28}H528`} stroke="#26262B" strokeWidth="1" />
              <path d={`M112 ${136 + i * 28}H${150 + (i % 3) * 28}`} stroke="#3A3A42" strokeWidth="2" />
              <path d={`M340 ${136 + i * 28}H${388 + (i % 2) * 40}`} stroke={i === 0 ? ACCENT : "#3A3A42"} strokeWidth="2" />
            </g>
          ))}
          <text x="112" y="126" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            DEBIT · ₦ KOBO
          </text>
          <text x="340" y="126" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            CREDIT · ₦ KOBO
          </text>
          <path d="M320 104V254" stroke="#2A2A30" strokeWidth="1" />
          <text x="96" y="288" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            Σ POSTINGS = 0 · COUNTER-ENTRY, NEVER DELETE
          </text>
        </g>
      );

    case "layers":
      return (
        <g>
          {[
            { x: 120, w: 400, y: 100, label: "PRESENTATION · NEXT.JS 15" },
            { x: 144, w: 352, y: 148, label: "API · GO MODULAR MONOLITH" },
            { x: 168, w: 304, y: 196, label: "DOMAIN · ESCROW · VETTING" },
            { x: 192, w: 256, y: 244, label: "POSTGRES · REDIS" },
          ].map((layer, i) => (
            <g key={layer.label}>
              <rect
                x={layer.x}
                y={layer.y}
                width={layer.w}
                height={36}
                rx={4}
                fill="#121215"
                stroke={i === 1 ? ACCENT : "#3A3A42"}
                strokeWidth={i === 1 ? 1.4 : 1.1}
              />
              <text
                x={layer.x + 14}
                y={layer.y + 23}
                fill={i === 1 ? "#D6D6DA" : "#7A7A82"}
                fontSize="9"
                fontFamily="ui-monospace, monospace"
                letterSpacing="1"
              >
                {layer.label}
              </text>
            </g>
          ))}
          <path d="M528 116V262" stroke="#2A2A30" strokeWidth="1" />
          <text x="536" y="192" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace" transform="rotate(90 536 192)">
            OBSERVABILITY
          </text>
        </g>
      );

    case "boxes":
      return (
        <g>
          <rect x={112} y={92} width={416} height={176} rx={4} fill="#121215" stroke="#3A3A42" strokeWidth="1.2" />
          <path d="M112 226H528" stroke="#26262B" strokeWidth="1" />
          <circle cx="410" cy="150" r="18" fill="#1B1B20" />
          <rect x="386" y="172" width="48" height="54" rx="10" fill="#1B1B20" />
          <rect x={148} y={120} width={104} height={120} fill="none" stroke={ACCENT} strokeWidth="1.6" />
          <text x="148" y="114" fill={ACCENT} fontSize="9" fontFamily="ui-monospace, monospace">
            PERSON 0.94
          </text>
          <rect x={300} y={150} width={150} height={70} fill="none" stroke="#5A5A62" strokeWidth="1.4" strokeDasharray="5 4" />
          <text x="300" y="144" fill="#8A8A92" fontSize="9" fontFamily="ui-monospace, monospace">
            VEHICLE 0.71
          </text>
          <text x="112" y="292" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            ONNX · YOLOV8N · QUEUED + SYNC INFERENCE
          </text>
        </g>
      );

    case "waveform":
      return (
        <g>
          {Array.from({ length: 40 }).map((_, i) => {
            const h = 12 + Math.abs(Math.sin(i * 0.9)) * 82 + (i % 5) * 4;
            return (
              <rect
                key={i}
                x={104 + i * 11}
                y={180 - h / 2}
                width={5}
                height={h}
                rx={2.5}
                fill={i > 16 && i < 22 ? ACCENT : "#33333A"}
              />
            );
          })}
          <circle cx="320" cy="180" r="0" fill="none" />
          <path d="M104 236H536" stroke="#2A2A30" strokeWidth="1" />
          <text x="104" y="258" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            DISCOVER → LISTEN → CONFESS → RETURN
          </text>
        </g>
      );

    case "docs":
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} opacity={1 - i * 0.22}>
              <rect x={140 + i * 22} y={104 + i * 14} width={300} height={140} rx={4} fill="#121215" stroke="#3A3A42" strokeWidth="1.1" />
              <path d={`M164 ${136 + i * 14}H316`} stroke="#3A3A42" strokeWidth="2" />
              <path d={`M164 ${154 + i * 14}H${380 - i * 20}`} stroke="#26262B" strokeWidth="1.4" />
              <path d={`M164 ${170 + i * 14}H${360 - i * 20}`} stroke="#26262B" strokeWidth="1.4" />
              <path d={`M164 ${186 + i * 14}H${330 - i * 20}`} stroke="#26262B" strokeWidth="1.4" />
            </g>
          ))}
          <circle cx="498" cy="120" r="18" fill="none" stroke={ACCENT} strokeWidth="1.4" />
          <path d="M490 120L496 126L508 112" stroke={ACCENT} strokeWidth="1.8" fill="none" />
          <text x="140" y="292" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            TYPECHECK · LINT · TEST · BUILD · AUDIT · GITLEAKS
          </text>
        </g>
      );

    case "register":
      return (
        <g>
          <rect x={104} y={100} width={432} height={152} rx={4} fill="#121215" stroke="#3A3A42" strokeWidth="1.2" />
          {[0, 1, 2, 3].map((row) => (
            <g key={row}>
              <path d={`M104 ${132 + row * 30}H536`} stroke="#26262B" strokeWidth="1" />
              <text x="120" y={124 + row * 30} fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
                {["ASSET", "BRANCH", "FINANCE", "AUDIT"][row]}
              </text>
              {[0, 1, 2, 3, 4].map((col) => (
                <circle
                  key={col}
                  cx={300 + col * 46}
                  cy={120 + row * 30}
                  r={3.4}
                  fill={(row + col) % 3 === 0 ? ACCENT : "#2A2A30"}
                />
              ))}
            </g>
          ))}
          <text x="104" y="288" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            7 ROLES · BRANCH-SCOPED QUERIES · JWT ALWAYS
          </text>
        </g>
      );

    case "request":
      return (
        <g>
          <rect x={104} y={100} width={188} height={152} rx={4} fill="#121215" stroke="#3A3A42" strokeWidth="1.2" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <path d={`M124 ${124 + i * 26}H272`} stroke="#26262B" strokeWidth="1" />
              <path d={`M124 ${124 + i * 26}H${160 + (i % 3) * 24}`} stroke="#3A3A42" strokeWidth="2" />
            </g>
          ))}
          <path d="M292 176H360" stroke={ACCENT} strokeWidth="1.6" />
          <path d="M352 168L362 176L352 184" stroke={ACCENT} strokeWidth="1.6" fill="none" />
          <rect x={374} y={132} width={150} height={88} rx={14} fill="#121215" stroke={ACCENT} strokeWidth="1.4" />
          <path d="M396 220L388 238L414 220" fill="#121215" stroke={ACCENT} strokeWidth="1.4" />
          <text x="392" y="164" fill="#B9B9C0" fontSize="10" fontFamily="ui-monospace, monospace">
            WHATSAPP
          </text>
          <text x="392" y="184" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            ONE HANDOFF
          </text>
          <text x="104" y="292" fill="#6B6B72" fontSize="9" fontFamily="ui-monospace, monospace">
            REQUEST ≠ CONFIRMATION
          </text>
        </g>
      );

    default:
      return null;
  }
}
