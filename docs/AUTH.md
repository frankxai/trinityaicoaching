# Authentication, Billing, Persistence

## Auth (Clerk or Auth.js)
- Easiest path: Clerk (OAuth + email + orgs). Add orgs for multi-tenant coach workspaces.
- Alternative: Auth.js (NextAuth) if you want pure OSS, then layer orgs yourself.

Steps (Clerk):
1. `npm install @clerk/nextjs`
2. Create Clerk app → add .env vars (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY)
3. Wrap `app/layout.tsx` with `<ClerkProvider>` and protect routes with `<SignedIn>`
4. Create `app/sign-in/` and `app/sign-up/` routes via Clerk generator

## Billing (Stripe)
- Coaches on Pro plans; metered usage via Stripe + Event-based webhooks for AI usage.
- Plan ideas: Free (local only), Pro (saved data + reminders), Teams (multi-coach workspaces).

## DB (Supabase + Prisma)
- Tables: users, orgs, members, programs, sessions, plans, journals, habits, invoices, usage
- Add RLS rules scoping rows to org_id
- Store YAML agents and program templates per org

## Costs and Limits
- Usage metering: count tokens/requests per org; store daily aggregates
- Hard limits per plan; soft alerts at 80%, 100%
- Cache plan generations; debounce duplicate prompts

## File Uploads & Safety
- S3 (R2/S3) bucket; virus scan; OCR pipeline; restrict accepted types
- Consent banners for medical content flows (peptides/nano); route to licensed providers

