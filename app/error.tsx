"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-page">
      <p>Studio interruption</p>
      <h1>Something slipped.</h1>
      <span>The page could not be prepared. Try once more or return to the gallery.</span>
      <div>
        <button type="button" onClick={reset}>Try again</button>
        <Link href="/gallery">View the gallery</Link>
      </div>
    </main>
  );
}
