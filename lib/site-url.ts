export function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const value = explicitUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

  return new URL(value);
}
