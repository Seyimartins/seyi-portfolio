# Seyi Olalemi — Portfolio

Senior Product Designer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, and MDX.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. **Contact & links** — Edit [`src/lib/site-config.ts`](src/lib/site-config.ts) (email, phone, LinkedIn, production URL).
2. **Resume** — Replace [`public/resume.pdf`](public/resume.pdf) with your PDF.
3. **Case studies** — Update MDX in [`src/content/projects/`](src/content/projects/) and add images under `public/projects/`.
4. **Insights** — Add MDX articles in [`src/content/insights/`](src/content/insights/).
5. **Thinking** — Add short entries in [`src/content/thinking/`](src/content/thinking/).

## Deploy

Optimized for [Vercel](https://vercel.com). Set `siteConfig.url` to your production domain before deploying.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui
- MDX (`next-mdx-remote` + `gray-matter`)
