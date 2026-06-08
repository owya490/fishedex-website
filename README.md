# Fishédex Website

Marketing landing page for [Fishédex](https://github.com/owenyang/fishedex) — a Pokédex-style fishing journal for iOS.

## Stack

- [SvelteKit](https://kit.svelte.dev/) + Svelte 5
- [Tailwind CSS v4](https://tailwindcss.com/)
- Pokemon Classic pixel font + brand assets from the iOS app

## Development

Requires Node.js 20+ (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Waitlist

The waitlist form validates emails server-side via a SvelteKit form action (`+page.server.ts`). Signups are logged to the console — wire up your provider (Supabase, Resend, Loops, etc.) in that file when ready.

## Deploy

Configured for [Vercel](https://vercel.com/) via `@sveltejs/adapter-vercel`:

```bash
npm run build
```
