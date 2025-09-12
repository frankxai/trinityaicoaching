# Deployment

## Vercel (recommended)
- Import the repo into Vercel
- Framework preset: Next.js
- Env vars: add `OPENAI_API_KEY` (optional), `OPENAI_MODEL` (optional)
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

