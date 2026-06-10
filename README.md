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

The waitlist form validates emails server-side and saves signups to the `waitlist_signups` table in Supabase.

Copy `.env.example` to `.env` and set `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` from [Supabase → Settings → API](https://supabase.com/dashboard/project/kfjmzsukylthtstjmmcz/settings/api). Use the **Project URL** (`https://…supabase.co`) — not the REST endpoint (`…/rest/v1/`). Add the same variables in Vercel for production.

## Deploy

Configured for [Vercel](https://vercel.com/) via `@sveltejs/adapter-vercel`:

```bash
npm run build
```
