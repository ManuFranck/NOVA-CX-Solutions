"use client";
import React, { useMemo, useState } from "react";

const items = [
  { quote: "Notre WhatsApp est devenu un vrai canal de support: réponses rapides, moins d'appels, meilleure satisfaction.", name: "Responsable Support", org: "PME Retail" },
  { quote: "Le bot gère les questions répétitives et les agents se concentrent sur les cas complexes. Gain immédiat.", name: "CX Manager", org: "Service client" },
  { quote: "Les rapports mensuels (CSAT + qualité) nous aident à piloter. On voit clairement l'évolution.", name: "Chef de projet", org: "ONG / Programme" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const it = useMemo(() => items[i % items.length], [i]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white/10 to-transparent p-6 shadow-soft">
      <p className="text-sm text-slate-600">Témoignage</p>
      <p className="mt-3 text-lg font-semibold leading-relaxed">“{it.quote}”</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-slate-600">
          <span className="font-semibold text-neutral-100">{it.name}</span>{" "}
          <span className="text-slate-500">— {it.org}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setI((v) => (v - 1 + items.length) % items.length)} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold hover:bg-emerald-50">
            Prev
          </button>
          <button onClick={() => setI((v) => (v + 1) % items.length)} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold hover:bg-emerald-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
