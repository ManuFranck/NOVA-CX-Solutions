import { Ribbon } from "../components/Ribbon";
import { Agents } from "../components/Agents";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">NOVA CX Solutions</h1>
        <p className="mt-3 text-slate-600">
          Friendly customer experience & smart chatbots for Africa
        </p>

        <div className="mt-6 inline-flex flex-wrap justify-center gap-2">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
            WhatsApp • Web • Telegram
          </span>
          <span className="rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold text-sky-700">
            Chatbots + Support Hybride
          </span>
        </div>
      </section>

      <Ribbon
        badge="Solutions"
        title="Automatisez intelligemment votre support"
        subtitle="Chatbots + humain, parfaitement équilibrés"
      />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="font-semibold text-slate-900">Chatbots intelligents</p>
          <p className="mt-2 text-sm text-slate-600">FAQ, rendez-vous, réclamations, suivi.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="font-semibold text-slate-900">Support hybride</p>
          <p className="mt-2 text-sm text-slate-600">Le bot gère ~80% • humain pour le complexe.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="font-semibold text-slate-900">Pilotage CX</p>
          <p className="mt-2 text-sm text-slate-600">CSAT, qualité, amélioration continue.</p>
        </div>
      </section>

      <Ribbon
        badge="Équipe"
        title="Des agents humains quand ça compte"
        subtitle="Le chatbot gère le reste"
      />

      <Agents />

      <Ribbon
        badge="Contact"
        title="Demandez une démo"
        subtitle="Réponse rapide sur WhatsApp ou email"
      />

      <section className="flex flex-wrap justify-center gap-3">
        <a className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700" href="mailto:contact@novacxsolutions.com">
          Email
        </a>
        <a className="rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50" href="https://wa.me/224600000000">
          WhatsApp
        </a>
      </section>
    </main>
  );
}
