export default function FAQPage() {
  const faqs = [
    { q: 'Is Trinity medical advice?', a: 'No. Trinity provides educational guidance only. For medical questions (including peptides/nano/clinical topics), consult a qualified professional and follow local regulations.' },
    { q: 'Do I need an OpenAI key?', a: 'No. The app works without it using high‑quality fallbacks. Add OPENAI_API_KEY to enable AI‑generated plans and streaming coach sessions.' },
    { q: 'How do plans personalize?', a: 'Save your Profile & Baselines, then generate 7/30/90‑day plans. You can adapt the plan weekly via check‑ins and reviews.' },
    { q: 'Can coaches create their own agents?', a: 'Yes. Use the Agent Builder to export YAML personas now. Soon, you’ll manage agents in a workspace library with tests, versions, and tools.' },
    { q: 'What about privacy?', a: 'We only process data necessary to deliver the experience. When using AI providers, data is transmitted securely via their APIs. Enterprise plans support additional controls.' },
  ];
  return (
    <div className="container-px mx-auto max-w-4xl py-10">
      <h1 className="text-2xl font-semibold">FAQ</h1>
      <div className="mt-6 grid gap-4">
        {faqs.map((f, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="font-medium">{f.q}</div>
            <p className="text-neutral-300 mt-1 text-sm">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

