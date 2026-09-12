import { EditorialLink } from "@/components/EditorialLink";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <p className="not-found-page__number">404</p>
      <h1>This page is not in the catalogue.</h1>
      <EditorialLink href="/gallery">Return to the work</EditorialLink>
    </main>
  );
}
