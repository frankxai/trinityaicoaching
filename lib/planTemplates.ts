export function staticPlan(horizon: number) {
  const intro = (scope: string) => [
    `Set ${scope.toLowerCase()} baselines and track daily`,
    `Define 2-3 measurable goals for ${scope.toLowerCase()}`,
    `Schedule 3 weekly check-ins for ${scope.toLowerCase()}`,
    `Apply 1% improvements daily`,
  ];
  return [
    { title: "Body", items: [
      ...intro("Body"),
      "Walk 8–10k steps/day",
      "Strength train 2–4x/week",
      "Protein target ~1.6–2.2g/kg",
      "Sleep 7–9h with wind-down routine",
    ]},
    { title: "Mind", items: [
      ...intro("Mind"),
      "One 90-minute deep work block/day",
      "Reduce notifications to essentials",
      "Weekly review and plan",
      "Journal 5 minutes/day",
    ]},
    { title: "Soul", items: [
      ...intro("Soul"),
      "Clarify values and mission",
      "Meaningful conversation 2x/week",
      "Gratitude note each evening",
      "1 digital sabbath (half-day) per week",
    ]},
  ];
}

