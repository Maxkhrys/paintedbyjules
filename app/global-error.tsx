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
            minHeight: "100svh",
            placeContent: "center",
            gap: "1.5rem",
            padding: "2rem",
            color: "#f2ece8",
            background: "#16070a",
            textAlign: "center",
            fontFamily: '"Arial Narrow", Arial, sans-serif',
          }}
        >
          <p style={{ margin: 0, fontSize: ".68rem", letterSpacing: ".24em", textTransform: "uppercase" }}>
            Private viewing room · System notice
          </p>
          <h1 style={{ margin: 0, maxWidth: "10ch", fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 400, lineHeight: ".82", letterSpacing: "-.055em", textTransform: "uppercase" }}>
            The viewing room paused.
          </h1>
          <p style={{ margin: "0 auto", maxWidth: "35ch", color: "#b7a5a5", fontFamily: "Arial, sans-serif", fontSize: ".82rem", lineHeight: 1.6 }}>
            The work is still here. Reopen the room and we&apos;ll pick up where you left off.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              width: "fit-content",
              margin: "1rem auto 0",
              padding: ".85rem 1.4rem",
              border: "1px solid #d8cec8",
              color: "#16070a",
              background: "#d8cec8",
              cursor: "pointer",
              font: "inherit",
              fontSize: ".7rem",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
            }}
          >
            Reopen room
          </button>
        </main>
      </body>
    </html>
  );
}
