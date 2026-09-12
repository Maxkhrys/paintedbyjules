import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

const gallerySans = localFont({
  src: [
    {
      path: "./fonts/NimbusSansNarrow-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NimbusSansNarrow-Oblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/NimbusSansNarrow-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gallery",
  display: "swap",
});

const salonSerif = localFont({
  src: [
    {
      path: "./fonts/JulesSalon-Roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/JulesSalon-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-salon",
  display: "swap",
});

const julesSignature = localFont({
  src: "./fonts/JulesChancery-MediumItalic.otf",
  variable: "--font-signature",
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Painted by Jules | Original Art & Bespoke Portraits",
    template: "%s | Painted by Jules",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: siteConfig.name,
    title: "Painted by Jules | Original Art & Bespoke Portraits",
    description: siteConfig.description,
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painted by Jules | Original Art & Bespoke Portraits",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2a0d12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl.toString(),
    description: siteConfig.description,
  };

  return (
    <html
      lang="en"
      className={`${gallerySans.variable} ${salonSerif.variable} ${julesSignature.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
