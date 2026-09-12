"use client";

type GlobalErrorProps = {
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <main
          style={{
            display: "grid",
            minHeight: "100vh",
            placeContent: "center",
            gap: "1.25rem",
            padding: "2rem",
            color: "#292622",
            background: "#f2eee5",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: ".72rem", textTransform: "uppercase" }}>
            Painted by Jules
          </p>
          <h1 style={{ margin: 0, fontFamily: "Georgia, serif", fontSize: "clamp(3rem, 9vw, 7rem)", fontWeight: 400 }}>
            The studio is resting.
          </h1>
          <button
            type="button"
            onClick={reset}
            style={{
              width: "fit-content",
              margin: "1rem auto 0",
              padding: ".9rem 1.2rem",
              border: 0,
              color: "#f8f5ee",
              background: "#292622",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
