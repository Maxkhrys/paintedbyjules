# Painted by Jules

A responsive portfolio and commission website for an independent contemporary art studio. Built with Next.js 16, TypeScript, React 19 and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Content handoff

- Artwork records, prices and availability: `data/artworks.ts`
- Artwork and studio imagery: `public/artwork/`
- Commission prices and process: `config/commissions.ts`
- Email, Instagram and navigation: `config/site.ts`
- Canonical URL and form delivery: `.env.example`

The included artwork files are labelled illustrative studies. Replace them with Jules's final artwork and studio photography while keeping the existing filenames, or update their paths and dimensions in `data/artworks.ts`.

## Form delivery

Without environment variables, both forms intentionally return a transparent preview state and do not send visitor data. Set `COMMISSION_WEBHOOK_URL` and `CONTACT_WEBHOOK_URL` to HTTPS endpoints before accepting live enquiries. Reference photographs currently stay in the visitor's browser; connect approved object storage before launch if permanent uploads are required.
