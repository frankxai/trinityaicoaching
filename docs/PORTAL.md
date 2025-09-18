# Trinity Portal Playbook

## Command Surfaces
- **Trinity Command (`/app`)** – Daily ritual stack, mission cards, momentum metrics, avatar briefings.
- **Coach Hub (`/hub`)** – Program studio, avatar operations, automation and integration consoles.
- **Marketing alignment (`/`)** – Landing sections reuse the same data for avatars, modules, and incentives.

## Shared Data Layer
- `lib/portalData.ts` centralises:
  - Avatar personas, moods, and experiments.
  - Learning modules with rituals, outcomes, and metrics.
  - Automation playbooks, tool integrations, contribution bounties, momentum metrics, and milestones.
- `components/ui/primitives.tsx` provides consistent surfaces (SectionHeading, Surface, Pill, StatBlock, BulletList).
- Product + marketing read from the same definitions → no drift in copy or naming.
- `docs/COACH-AGENT-EXPERIENCE.md` maps personas, search flows, and KPI targets for coaches and AI agents.

## Avatar Roster (sample)
- **Trinity Prime** – Integrative strategist orchestrating the full journey.
- **Trinity Athlete** – Body archetype focused on strength, conditioning, and breath.
- **Trinity Sage** – Soul mystic guiding numerology, rituals, and ceremonies.
- **Trinity Tactician** – Mind operator optimising leverage and automations.
- **Trinity Guardian** – Operations sentinel ensuring integrity and compliance.

## Module Tracks
- Embodied Strength Foundation (Body) – 30 day hybrid programme.
- Leverage Operations Sprint (Mind) – 21 day automation sprint.
- Soul Alignment Ascension (Soul) – 6 week live cohort.
- Triad Mastery Intensive (Integrative) – 90 day capstone.

## Incentive Layer
- Contribution programmes incentivise agent builds, ritual keepers, biometric ops.
- Token treasury and honors surfaced on dashboard + hub.
- Ledger + soulbound integrations planned for Phase 5.

## Next Steps
1. Wire the `portalData` structures into API responses and database once persistence lands.
2. Connect wearables + biometrics to populate momentum metrics live.
3. Build token ledger UI pulling from on-chain contracts (Guardian overseen).
4. Expand automation playbooks with executable workflows (LangGraph, MCP).
5. Add onboarding wizard to personalise avatar mix using numerology/cosmology inputs.
