import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Painted by Jules — original paintings and portrait commissions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const galleryFont = await readFile(
  join(process.cwd(), "app/fonts/NimbusSansNarrow-Regular.otf"),
);
const heroImage = await readFile(
  join(process.cwd(), "public/collection-v2/soft-hours-og.jpg"),
);

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
          background: "#d5cdca",
          color: "#241014",
          fontFamily: "Gallery",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "58%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 62px",
          }}
        >
          <div style={{ display: "flex", fontSize: 19, letterSpacing: 3 }}>
            PRIVATE VIEWING / COLLECTION I
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 104,
              letterSpacing: -2,
              lineHeight: 0.83,
              textTransform: "uppercase",
            }}
          >
            <span>Painted by</span>
            <span>Jules</span>
          </div>
          <div style={{ display: "flex", fontSize: 21, letterSpacing: 1 }}>
            ORIGINAL WORKS · PORTRAIT COMMISSIONS
          </div>
        </div>

        <img
          alt=""
          src={`data:image/jpeg;base64,${heroImage.toString("base64")}`}
          style={{ width: "42%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "56.8%",
            display: "flex",
            width: 15,
            background: "#351016",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Gallery",
          data: galleryFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
