export type PlanSection = { title: string; items: string[] };
export type Plan = PlanSection[];

export const PROGRAM_TEMPLATES: Record<string, { name: string; horizon: number; plan: Plan } > = {
  "beginner-30": {
    name: "Beginner Recomp (30d)",
    horizon: 30,
    plan: [
      { title: "Body", items: [
        "3x/week full‑body strength (45–60m)",
        "Zone 2 cardio 1–2x/week (20–30m)",
        "Protein ~1.6–2.2 g/kg; fiber 25–35 g/day",
        "Sleep 7–9h; wind‑down routine",
      ]},
      { title: "Mind", items: [
        "1x 90‑minute focus block on key days",
        "Notifications: essentials only",
        "Sunday review → Monday plan",
        "Journal 5 minutes each evening",
      ]},
      { title: "Soul", items: [
        "Clarify values + short mission draft",
        "Meaningful conversation 2x/week",
        "30 minutes outdoors daily",
        "Gratitude note nightly",
      ]},
    ]
  },
  "fat-loss-30": {
    name: "Fat Loss Focus (30d)",
    horizon: 30,
    plan: [
      { title: "Body", items: [
        "3x/week strength + 2x Zone 2 (20–30m)",
        "10k steps/day; hydrate",
        "Protein forward meals; fiber targets",
        "Lights out by 10:30pm",
      ]},
      { title: "Mind", items: [
        "Daily 45–90m focus block",
        "Environment design: remove friction foods",
        "Weekly review and plan",
        "Track adherence, not just scale",
      ]},
      { title: "Soul", items: [
        "Values check: why this matters now",
        "1 digital sabbath (half‑day) weekly",
        "Short reflection after dinner",
        "Kind self‑talk policy",
      ]},
    ]
  },
  "deep-work-30": {
    name: "Deep Work (30d)",
    horizon: 30,
    plan: [
      { title: "Body", items: [
        "Daily mobility (10m) + walk breaks",
        "2–3x/week strength; posture focus",
        "Caffeine cutoff 8h before bed",
        "Sleep window consistent",
      ]},
      { title: "Mind", items: [
        "2x 90‑minute deep work blocks (3 days/week)",
        "Task triage nightly; top‑3 next day",
        "Pomodoro for shallow work",
        "Notifications minimal during blocks",
      ]},
      { title: "Soul", items: [
        "Align projects to values/mission",
        "Gratitude + presence practice nightly",
        "Weekly reflection on progress",
        "Meaningful conversation weekly",
      ]},
    ]
  }
};

