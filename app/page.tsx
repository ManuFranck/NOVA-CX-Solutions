
import { Ribbon } from "../components/Ribbon";
import { Agents } from "../components/Agents";

export default function Page() {
  return (
    <main className="w-full">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold">NOVA CX Solutions</h1>
        <p className="mt-4 text-slate-600">
          Friendly customer experience & smart chatbots for Africa
        </p>
      </section>

      <section className="bg-gradient-to-b from-white to-emerald-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Ribbon badge="Solutions" title="Automatisez intelligemment votre support" subtitle="Chatbots + humain" />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Ribbon badge="Équipe" title="Des agents humains quand ça compte" />
          <Agents />
        </div>
      </section>
    </main>
  );
}
