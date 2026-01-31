import { notFound } from "next/navigation";
import { industries } from "@/content/industries";
import Link from "next/link";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const i = industries.find((x) => x.slug === params.slug);
  if (!i) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link className="text-sm text-slate-500 hover:text-white" href="/">← Retour</Link>
        <p className="mt-6 text-sm text-slate-500">Secteur</p>
        <h1 className="mt-2 text-4xl font-semibold">{i.title}</h1>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold">Douleurs</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {i.pains.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold">Résultats</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {i.outcomes.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white/10 to-transparent p-6 shadow-soft">
            <h2 className="text-lg font-semibold">Exemples de flux</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {i.exampleFlows.map((c) => (
                <span key={c} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
                  {c}
                </span>
              ))}
            </div>

            <a href="/#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90">
              Demander une démo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
