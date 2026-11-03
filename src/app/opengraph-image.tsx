import { ImageResponse } from "next/og";
import { SITE } from "../data/site";

export const alt = "Olusanya Timothy — software engineer, AI red team & evaluation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0B",
          padding: "72px",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "58px",
                height: "58px",
                borderRadius: "999px",
                backgroundColor: "#FFFFFF",
                color: "#0A0A0B",
                fontSize: "22px",
                letterSpacing: "1px",
              }}
            >
              {SITE.initials}
            </div>
            <div style={{ display: "flex", fontSize: "22px", color: "rgba(255,255,255,0.6)" }}>
              github.com/{SITE.githubHandle}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: "20px", color: "#C7F24E", letterSpacing: "3px" }}>
            EVIDENCE &gt; REPORTS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "76px", lineHeight: 1.05, letterSpacing: "-2px" }}>
            I build the system,
          </div>
          <div style={{ display: "flex", fontSize: "76px", lineHeight: 1.05, letterSpacing: "-2px" }}>
            then try to break it.
          </div>
          <div style={{ display: "flex", marginTop: "28px", fontSize: "26px", color: "rgba(255,255,255,0.55)", maxWidth: "900px" }}>
            Go and TypeScript platforms, and open harnesses that make AI evaluations re-derivable.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "30px" }}>{SITE.name}</div>
            <div style={{ display: "flex", fontSize: "20px", color: "rgba(255,255,255,0.45)", marginTop: "6px" }}>
              {SITE.role} · {SITE.location}
            </div>
          </div>
          <div style={{ display: "flex", height: "6px", width: "260px", backgroundColor: "#C7F24E" }} />
        </div>
      </div>
    ),
    size,
  );
}
