# Trinity AI Knowledgebase

## Internal Assets
- **Agent Operations Guide** (`Agent.md`): aligns hand-offs between humans and AI pods, environment defaults, and ritual governance.
- **Functional Spec** (`docs/PORTAL_SPEC.md`): source of truth for every page, surface, and data contract.
- **Snapshots** (`internal/`):
  - `roadmap.html` – progress board mirroring the old public roadmap.
  - `docs-inventory.html` – index of every markdown asset for quick reference.
- **Retreat Assets**: add imagery to `public/retreat/hero.jpg` and `public/retreat/*.jpg` to power the new retreat experience.

## Production Checklist
1. Set `OPENAI_API_KEY` and `NEXT_PUBLIC_SITE_URL` in Vercel.
2. Review Agent.md before shipping automations or YAML updates.
3. Keep marketing copy aligned with `lib/portalData.ts` so avatars/modules stay synced.
4. Update `internal/roadmap.html` after each milestone.

## Retreat Playbook
- `/retreat` page hosts the experience overview, itinerary, and calls-to-action.
- Hero / immersion imagery pulled from `public/retreat/*` – use soft gradients for parity with existing design.
- Immersion tracks: Body, Mind, Soul – tie to program modules when creating collateral.

## Active Tasks (Sept 2025)
- Launch retreat visuals + RSVP flow.
- Tighten knowledgebase content around deployment + automation bumps.
- Prep persistence migration (Supabase/Prisma) once spec locks.

## Design System Notes
- Dark mode gradient originates from `globals.css` (`body` + `.bg-hero`).
- Colors/typography defined in `tailwind.config.ts` (`brand`, `neutral` scales).
- Shared components live in `components/ui/primitives.tsx` (`Surface`, `SectionHeading`, `Pill`, `BulletList`, `StatBlock`). Reuse these primitives when building new surfaces or external projects.
## Trinity Command Saved Plans
- The planner (`/app/plans`) saves to local storage under `plans.saved` and `plans.active`.
- `/app/plans/[id]` loads individual plans for review, export (Markdown/JSON/ICS), reactivation, or deletion.
- Export helpers use client-side blobs; remind members to re-export after edits because plans stay device-specific until Prisma arrives.

