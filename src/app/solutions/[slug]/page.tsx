import { notFound } from "next/navigation";
import { solutions } from "@/content/solutions";
import Link from "next/link";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = solutions.find((x) => x.slug === params.slug);
  if (!s) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link className="text-sm text-neutral-400 hover:text-white" href="/">← Retour</Link>
        <p className="mt-6 text-sm text-neutral-400">Solutions</p>
        <h1 className="mt-2 text-4xl font-semibold">{s.title}</h1>
        <p className="mt-3 text-neutral-300">{s.subtitle}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
            <h2 className="text-lg font-semibold">Ce que vous obtenez</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-200">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 shadow-soft">
            <h2 className="text-lg font-semibold">Canaux</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.channels.map((c) => (
                <span key={c} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200">
                  {c}
                </span>
              ))}
            </div>

            <a href="/#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 hover:bg-white/90">
              Demander une démo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
