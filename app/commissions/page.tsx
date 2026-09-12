import type { Metadata } from "next";
import Image from "next/image";
import { CommissionForm } from "@/components/CommissionForm";
import { commissionPricing, commissionSteps } from "@/config/commissions";
import { getArtwork } from "@/data/artworks";
import { formatPrice } from "@/lib/format-price";

export const metadata: Metadata = {
  title: "Portrait Commissions",
  description:
    "Commission a hand-painted portrait from your photographs. Learn about pricing, process and how to request a piece.",
  alternates: { canonical: "/commissions" },
};

export default function CommissionsPage() {
  const portraits = [
    getArtwork("she-kept-the-light")!,
    getArtwork("two-of-us")!,
    getArtwork("first-dance")!,
  ];

  return (
    <main id="main-content" className="commissions-page">
      <section className="commission-opening" aria-labelledby="commission-title">
        <div className="commission-opening__title page-shell">
          <p>Private portrait commissions / 2026</p>
          <h1 id="commission-title">
            Made from the photograph you never stopped looking at.
          </h1>
          <a href="#request">Begin your request ↓</a>
        </div>
        <div className="commission-opening__wall page-shell">
          {portraits.map((artwork, index) => (
            <figure key={artwork.slug}>
              <span>Study 0{index + 1}</span>
              <Image
                src={artwork.images[0].src}
                alt={artwork.images[0].alt}
                fill
                priority
                sizes="(max-width: 760px) 78vw, 28vw"
              />
              <figcaption>{artwork.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="commission-ledger page-shell" aria-labelledby="pricing-title">
        <div className="commission-ledger__introduction">
          <h2 id="pricing-title">A clear place to begin.</h2>
          <p>
            Final price depends on subject count, detail and composition. Jules
            confirms the full quote before any artwork begins.
          </p>
        </div>
        <div className="commission-ledger__rows">
          {commissionPricing.map((item, index) => (
            <article key={item.size}>
              <span>0{index + 1}</span>
              <h3>{item.size}</h3>
              <p>{item.note}</p>
              <strong>{item.price ? `From ${formatPrice(item.price)}` : "Quoted individually"}</strong>
            </article>
          ))}
        </div>
        <p className="commission-ledger__note">
          Additional people, pets or complex backgrounds may affect the quote.
        </p>
      </section>

      <section id="process" className="commission-process" aria-labelledby="commission-process-title">
        <div className="page-shell">
          <div className="commission-process__introduction">
            <p>Every decision is agreed before it becomes permanent.</p>
            <h2 id="commission-process-title">From first message to finished painting.</h2>
          </div>
          <ol>
            {commissionSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="request" className="commission-request page-shell" aria-labelledby="request-title">
        <div className="commission-request__intro">
          <p>Commission register / Three steps</p>
          <h2 id="request-title">Tell Jules who the piece is for.</h2>
          <span>
            No polished brief is needed. A few honest details and your photographs
            are enough to begin.
          </span>
        </div>
        <CommissionForm />
      </section>
    </main>
  );
}
