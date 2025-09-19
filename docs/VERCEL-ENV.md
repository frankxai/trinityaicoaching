# Vercel Environment Setup

Follow these steps to configure TrinityAI on Vercel so live deployments have the right API keys, database URLs, and feature toggles. This guide assumes you have already imported the repository into Vercel.

## 1. Open Project Settings

1. Log in to [Vercel](https://vercel.com/).
2. Select the **TrinityAI** project.
3. Navigate to **Settings → Environment Variables**.

## 2. Required Variables

These values must be present before shipping production traffic.

| Variable | Scope | Purpose | Notes |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Preview & Production | Canonical URL used by `sitemap.ts`, `robots.ts`, and Open Graph tags. | Set to `https://your-domain.com` without a trailing slash. |
| `OPENAI_API_KEY` | Preview & Production | Enables live responses for `/api/chat` and `/api/plan`. | Use an organisation-level key with access to `gpt-4o-mini` or your selected model. |
| `OPENAI_MODEL` | Optional override | Chooses the default completion model. | Defaults to `gpt-4o-mini`. Set when you prefer a different compliant model. |

If these are missing the app will still render, but AI features will fall back to canned copy.

## 3. Database & Auth (Phase 2+)

Add when you connect Prisma/Supabase or enable Auth.js/Clerk flows.

| Variable | Scope | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Preview & Production | Connection string for Postgres/Supabase used by plans, check-ins, and journals. |
| `NEXTAUTH_SECRET` | Preview & Production | Secret for session encryption once Auth.js is active. |
| `SUPABASE_SERVICE_ROLE_KEY` | Production only | Server-side access to Supabase for secure mutations. |
| `NEXT_PUBLIC_SUPABASE_URL` | Preview & Production | Client URL for Supabase when persistence is on. |

## 4. Billing (When Launching Payments)

| Variable | Scope | Purpose |
| --- | --- | --- |
| `STRIPE_SECRET_KEY` | Production | Server key to create subscriptions. |
| `STRIPE_WEBHOOK_SECRET` | Production | Validates Stripe webhooks for plan lifecycle events. |

## 5. How to Add Variables in Vercel

1. Click **Add New** in the environment variables panel.
2. Enter the **Key** exactly as listed (e.g. `OPENAI_API_KEY`).
3. Paste the **Value** from your source of truth (e.g. 1Password, Vault).
4. Choose **Environment**: set to both *Preview* and *Production* unless otherwise noted.
5. Leave **Encrypt** toggled on (default).
6. Click **Save**.
7. Repeat for each variable.

## 6. Trigger a Redeploy

- After saving values, redeploy the latest commit from the **Deployments** tab.
- Confirm the build logs show the environment variables. Vercel masks secrets, but you will see references like `NEXT_PUBLIC_SITE_URL` in logs.
- Validate `/sitemap.xml` returns your canonical domain and `/api/chat` streams responses.

## 7. Local `.env` Parity

Create a `.env.local` file locally with the same keys so developers and AI agents testing locally match production behaviour.

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
```

Add optional keys as features roll out.

## 8. Monitoring Checklist

- [ ] `/robots.txt` points to the deployed `sitemap.xml`.
- [ ] Hero FAQ answers reference the OpenAI requirement for clarity.
- [ ] `docs/DEPLOYMENT.md` and `docs/VERCEL-ENV.md` stay in sync.
- [ ] Update keys during rotations and document the change in `docs/CHANGELOG.md`.

Following this checklist ensures the TrinityAI deployment on Vercel has everything needed for coaches and their AI agents to experience the platform as designed.
