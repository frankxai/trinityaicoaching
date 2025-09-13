export default function ContactPage() {
  return (
    <div className="container-px mx-auto max-w-3xl py-10">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-neutral-300">Have feedback or partnership ideas? We’d love to hear from you.</p>
      <ul className="mt-4 text-sm text-neutral-300 list-disc pl-5">
        <li>Email: <a className="text-brand-300 hover:text-brand-200" href="mailto:team@trinity.ai">team@trinity.ai</a></li>
        <li>GitHub: <a className="text-brand-300 hover:text-brand-200" href="https://github.com/frankxai/trinityaicoaching" target="_blank">repo</a> (open an issue)</li>
      </ul>
    </div>
  );
}

