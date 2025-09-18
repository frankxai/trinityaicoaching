# Trinity UI Design System Notes

## Overview
The Trinity AI portal uses a lightweight design system built on Tailwind CSS with custom tokens for brand gradients, glassmorphism surfaces, and neutral typography. The key pieces live in `tailwind.config.ts`, `app/globals.css`, and `components/ui/primitives.tsx`.

## Color System
| Token | Value | Usage |
| --- | --- | --- |
| `brand.500` | `#4f63ff` | Primary CTAs, highlight gradients, active pills |
| `brand.600` | `#2e3ff0` | Hover state for primary CTAs |
| `brand.700` | `#1f2fcc` | Focus outlines and deep accent shadows |
| Neutral base | Tailwind `neutral-950` on text `neutral-100` | Dark canvas with soft white typography |

Extend colors inside `tailwind.config.ts`. Copy the `brand` object into other projects to reuse the palette.

## Backgrounds & Effects
- `bg-hero` (Tailwind config) blends two radial gradients to create the purple-blue glow on marketing surfaces.
- Global body styles in `app/globals.css` apply the neutral-950 canvas plus glassmorphism helpers (`.glass`, `.card`, `.btn`).
- `Surface` components layer `bg-white/5` with `border-white/10` for depth without heavy opacity.
- Add `bg-grid` if you need subtle grid overlays on new panels.

## UI Primitives (`components/ui/primitives.tsx`)
- `Surface` renders the glass panels; pass `tone="highlight"` for gradient-backed hero cards.
- `SectionHeading` standardises eyebrow > title > description > actions.
- `Pill`, `BulletList`, and `StatBlock` provide quick badges, checklists, and metrics.

## Implementation Pattern
1. Wrap each major section in `Surface` for spacing and hover states.
2. Use the `container-px` utility (from `app/globals.css`) to maintain horizontal padding.
3. Pair `bg-white/5` with `border-white/10` when crafting new modules.
4. Follow the hero gradient recipe: large radial at top center, secondary accent near the CTA side.

## Reusing in New Projects
- Copy the `extend` block from `tailwind.config.ts` (colors + backgroundImage) into the new Tailwind config.
- Import the global CSS snippets for `.glass`, `.card`, `.btn`, and `.input`.
- Bring `components/ui/primitives.tsx` across so new pages can reuse Surface/Pill/SectionHeading.
- Install `@tailwindcss/typography` if you rely on Markdown prose rendering.

## Related Assets
- Brand icons live in `public/brand/`.
- Retreat visuals should live in `public/retreat/` following the drop zones documented on `/retreat`.

_Last updated: 2025-09-18_
