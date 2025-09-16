# Deployment

## Vercel (recommended)
- Import the repo into Vercel.
- Framework preset: Next.js.
- Review the detailed checklist in [`docs/VERCEL-ENV.md`](./VERCEL-ENV.md) before the first deploy.
- **Environment variables:**
  - `NEXT_PUBLIC_SITE_URL` *(canonical URL for sitemap/robots, e.g. https://trinityaicoaching.vercel.app)*
  - `OPENAI_API_KEY` *(required for live AI responses)*
  - `OPENAI_MODEL` *(optional override, defaults to `gpt-4o-mini`)*
  - `DATABASE_URL` *(required when Prisma/Supabase persistence is enabled)*
  - `NEXTAUTH_SECRET` *(required once Auth.js/Clerk flows are activated)*
  - `STRIPE_SECRET_KEY` & `STRIPE_WEBHOOK_SECRET` *(when billing launches)*
  - `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SUPABASE_URL` *(Phase 2 data persistence)*
- Build command: `next build`
- Output: default

## Local
- `npm install`
- `npm run dev`
- Visit http://localhost:3000

## GitHub
- Initialize git: `git init`
- Create a new GitHub repo and push
- Add a CI workflow (see `.github/workflows/ci.yml`)
