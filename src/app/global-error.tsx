"use client";

// Replaces the entire root layout when an error bubbles past it.
// Kept dependency-free with inline styles so it renders even if CSS fails to load.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#fff",
          color: "#000",
        }}
      >
        <div style={{ textAlign: "center", padding: 24 }}>
          <h1 style={{ fontSize: 28, marginBottom: 8 }}>Something went wrong</h1>
          <p style={{ color: "#555", marginBottom: 24 }}>
            {error.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={reset}
            style={{
              padding: "12px 24px",
              borderRadius: 9999,
              background: "#000",
              color: "#fff",
              border: 0,
              cursor: "pointer",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
