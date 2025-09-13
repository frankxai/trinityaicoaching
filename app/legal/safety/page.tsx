export default function SafetyPage() {
  return (
    <div className="container-px mx-auto max-w-3xl py-10">
      <h1 className="text-2xl font-semibold">Safety & Scope</h1>
      <p className="mt-3 text-neutral-300">Trinity is educational software. It does not provide medical advice or replace professional care.</p>
      <ul className="mt-4 text-neutral-300 list-disc pl-5 space-y-1">
        <li>For medical topics (e.g., peptides, nano formulations), consult licensed professionals and follow regional regulations.</li>
        <li>Use caution with uploads and personal data. Enterprise plans provide additional controls and retention policies.</li>
        <li>In emergencies, contact your local emergency services.</li>
      </ul>
    </div>
  );
}

