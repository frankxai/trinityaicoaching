export default function AboutPage() {
  return (
    <div className="container-px mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-semibold">About Trinity</h1>
      <p className="mt-3 text-neutral-300">Trinity exists to make change feel doable. We blend Body, Mind, and Soul — physiology, cognition, and meaning — into one practical coaching flow.</p>
      <div className="card mt-6">
        <h2 className="text-xl font-semibold">Story</h2>
        <p className="mt-2 text-neutral-300">We started Trinity after watching too many people bounce between extremes: rigid plans that burn out, or vague inspiration that fades. The answer lives in small steps, kind adjustments, and honest reviews.</p>
      </div>
      <div className="card mt-6">
        <h2 className="text-xl font-semibold">Principles</h2>
        <ul className="mt-2 text-neutral-300 list-disc pl-5 space-y-1">
          <li>Compassion over pressure</li>
          <li>1–3 actions per day</li>
          <li>Evidence with context</li>
          <li>Consistency beats intensity</li>
        </ul>
      </div>
    </div>
  );
}

