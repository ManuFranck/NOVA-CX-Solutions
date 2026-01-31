
import { Ribbon } from "@/components/Ribbon";
import { Agents } from "@/components/Agents";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold">NOVA CX Solutions</h1>
        <p className="mt-3 text-slate-600">Friendly customer experience & smart chatbots for Africa</p>
      </section>

      <Ribbon badge="Solutions" title="Automatisez intelligemment votre support" subtitle="Chatbots + humain, parfaitement équilibrés" />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">Chatbots intelligents</div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">Support hybride</div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">Pilotage CX</div>
      </section>

      <Ribbon badge="Équipe" title="Des agents humains quand ça compte" subtitle="Le chatbot gère le reste" />

      <Agents />
    </main>
  );
}
