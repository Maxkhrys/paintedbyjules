import type { Metadata } from "next";
import Image from "next/image";
import { EditorialLink } from "@/components/EditorialLink";

export const metadata: Metadata = {
  title: "About Jules",
  description:
    "Meet Jules and learn about the personal, photograph-led process behind Painted by Jules.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-hero page-shell" aria-labelledby="about-title">
        <p className="about-hero__folio">The artist / The studio</p>
        <h1 id="about-title">
          <span>Painted slowly.</span>
          <span>Kept personally.</span>
        </h1>
        <figure>
          <Image
            src="/artwork/jules-studio.svg"
            alt="Preview illustration of a quiet painter's studio with an easel and window light"
            fill
            priority
            sizes="(max-width: 760px) 92vw, 58vw"
          />
          <figcaption>Artist portrait and studio photography to be supplied</figcaption>
        </figure>
        <p className="about-hero__intro">
          Painted by Jules is an independent practice for original work and bespoke portraits. Every piece stays close to one hand, one conversation and one subject.
        </p>
      </section>

      <section className="about-story page-shell" aria-labelledby="about-story-title">
        <h2 id="about-story-title">More than a photograph.</h2>
        <div>
          <p>
            Painting changes the pace. It lets expression, gesture and the relationship between subjects come forward while unnecessary detail falls away.
          </p>
          <p>
            Jules begins with the photographs people already value. Together, you choose what matters in them: a look, a hand, a particular posture, or the atmosphere of one day.
          </p>
        </div>
      </section>

      <section className="about-method" aria-labelledby="about-method-title">
        <div className="about-method__image">
          <Image
            src="/artwork/still-here-detail.svg"
            alt="Preview detail of layered portrait brushwork"
            fill
            sizes="(max-width: 800px) 100vw, 48vw"
          />
        </div>
        <div className="about-method__copy">
          <h2 id="about-method-title">Looking, editing, painting.</h2>
          <p>
            A portrait is not a copy of every pixel. References are considered, the composition is agreed, then paint is used to decide what stays sharp and what can remain loose.
          </p>
          <p>
            The finished piece should still feel unmistakably like its subject, without losing the evidence of how it was made.
          </p>
        </div>
      </section>

      <section className="about-next page-shell">
        <p>If there is someone you would like to see in paint, begin with the photographs you have.</p>
        <EditorialLink href="/commissions#request">Tell Jules about the piece</EditorialLink>
      </section>
    </main>
  );
}
