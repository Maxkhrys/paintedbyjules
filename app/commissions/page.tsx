import type { Metadata } from "next";
import Image from "next/image";
import { CommissionForm } from "@/components/CommissionForm";
import { commissionPricing, commissionSteps } from "@/config/commissions";
import { formatPrice } from "@/lib/format-price";

export const metadata: Metadata = {
  title: "Portrait Commissions",
  description:
    "Commission a hand-painted portrait from your photographs. Learn about pricing, process and how to request a piece.",
  alternates: { canonical: "/commissions" },
};

export default function CommissionsPage() {
  return (
    <main id="main-content" className="commissions-page">
      <section className="commission-hero page-shell" aria-labelledby="commission-title">
        <p className="commission-hero__folio">Commissions / Painted personally</p>
        <h1 id="commission-title">
          <span>Your photograph,</span>
          <span>held in paint.</span>
        </h1>
        <div className="commission-hero__image">
          <Image
            src="/artwork/mother-and-daughter.svg"
            alt="Preview mother and daughter portrait study in soft earth tones"
            fill
            priority
            sizes="(max-width: 760px) 91vw, 52vw"
          />
          <span>Preview study</span>
        </div>
        <div className="commission-hero__copy">
          <p>
            Jules creates individual, couple, family and pet portraits from photographs. They can mark a wedding, birthday, anniversary, memorial, or simply a person you want to keep close.
          </p>
          <a href="#request">Start your request ↓</a>
        </div>
      </section>

      <section className="commission-pricing page-shell" aria-labelledby="pricing-title">
        <div className="commission-pricing__intro">
          <h2 id="pricing-title">A clear place to begin.</h2>
          <p>
            Final price depends on subject count, detail and composition. Jules confirms it before any artwork begins.
          </p>
        </div>
        <div className="commission-pricing__list">
          {commissionPricing.map((item) => (
            <article key={item.size}>
              <p>{item.size}</p>
              <strong>{item.price ? `From ${formatPrice(item.price)}` : "Request a quote"}</strong>
              <span>{item.note}</span>
            </article>
          ))}
        </div>
        <p className="commission-pricing__note">
          Additional people, pets or complex backgrounds may affect the quote.
        </p>
      </section>

      <section id="process" className="commission-process" aria-labelledby="commission-process-title">
        <div className="page-shell">
          <div className="commission-process__intro">
            <h2 id="commission-process-title">Five stages. One clear process.</h2>
            <p>Each decision happens before the paint becomes permanent.</p>
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
          <p>Request a commission</p>
          <h2 id="request-title">Describe the piece.</h2>
          <span>No polished brief needed. A few honest details and your photographs are enough.</span>
        </div>
        <CommissionForm />
      </section>
    </main>
  );
}
