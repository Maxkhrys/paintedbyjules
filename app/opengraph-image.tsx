import { ImageResponse } from "next/og";

export const alt = "Painted by Jules - original artwork and bespoke portraits";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background: "#e9e2d8",
          color: "#292623",
          padding: "66px 76px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 420,
            height: 540,
            right: 86,
            top: 46,
            background: "#9b6b56",
            transform: "rotate(2deg)",
          }}
        >
          <div style={{ position: "absolute", width: 230, height: 230, borderRadius: 999, background: "#c89478", top: 110, left: 96 }} />
          <div style={{ position: "absolute", width: 260, height: 180, borderRadius: "50% 50% 12% 12%", background: "#433730", top: 55, left: 80 }} />
          <div style={{ position: "absolute", width: 310, height: 190, borderRadius: "45% 45% 0 0", background: "#657074", bottom: 0, left: 55 }} />
        </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640 }}>
          <div style={{ display: "flex", fontFamily: "Arial, sans-serif", fontSize: 20 }}>Original work · Bespoke portraits</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 112, lineHeight: 0.86, letterSpacing: -5 }}>
            <span>Painted</span>
            <span style={{ marginLeft: 138, fontStyle: "italic" }}>by Jules</span>
          </div>
          <div style={{ display: "flex", fontFamily: "Arial, sans-serif", fontSize: 23 }}>Painted by hand from photographs you already love.</div>
        </div>
      </div>
    ),
    size,
  );
}
