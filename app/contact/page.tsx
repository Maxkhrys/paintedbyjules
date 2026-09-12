import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Painted by Jules about an original artwork or a general studio enquiry.",
  alternates: { canonical: "/contact" },
};

type ContactPageProps = {
  searchParams: Promise<{ artwork?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { artwork } = await searchParams;
  const initialSubject = artwork ? `Enquiry about ${artwork}` : "";

  return (
    <main id="main-content" className="contact-page page-shell">
      <header className="contact-page__header">
        <p>Studio enquiries</p>
        <h1>Write to Jules.</h1>
        <span>For original artwork, collaborations, delivery questions, or anything not covered by the commission form.</span>
      </header>

      <section className="contact-page__content" aria-label="Contact form and details">
        <div className="contact-page__details">
          <p>For portrait requests, the dedicated commission form asks for the details Jules needs to quote properly.</p>
          <Link href="/commissions#request">Request a portrait →</Link>
          {siteConfig.email ? (
            <dl>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd>
              </div>
            </dl>
          ) : null}
          {siteConfig.instagramUrl ? (
            <a href={siteConfig.instagramUrl} rel="noreferrer" target="_blank">Instagram ↗</a>
          ) : null}
        </div>
        <ContactForm initialSubject={initialSubject} />
      </section>
    </main>
  );
}
