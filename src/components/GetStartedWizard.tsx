"use client";

import React, { useMemo, useState } from "react";

type Step = "service" | "timeline" | "channel" | "details" | "done";

const services = [
  { id: "chatbots", label: "Chatbots intelligents" },
  { id: "cx", label: "Customer Experience (CX)" },
  { id: "hybrid", label: "Support hybride (Bot + Humain)" },
];

const timelines = ["Immédiatement", "Mois prochain", "Sous 90 jours", "Je découvre"];
const channels = ["WhatsApp", "Web", "Messenger", "Telegram", "SMS (simple)"];

export function GetStartedWizard({ onSubmit }: { onSubmit: (payload: Record<string, string>) => Promise<void> }) {
  const [step, setStep] = useState<Step>("service");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    service: "",
    timeline: "",
    channel: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const canNext = useMemo(() => {
    if (step === "service") return !!data.service;
    if (step === "timeline") return !!data.timeline;
    if (step === "channel") return !!data.channel;
    if (step === "details") return !!data.name && !!data.company && !!data.email;
    return true;
  }, [step, data]);

  async function submit() {
    setLoading(true);
    try {
      await onSubmit(data);
      setStep("done");
    } finally {
      setLoading(false);
    }
  }

  function next() {
    const order: Step[] = ["service", "timeline", "channel", "details", "done"];
    const idx = order.indexOf(step);
    if (step === "details") return submit();
    setStep(order[idx + 1] ?? "details");
  }

  function back() {
    const order: Step[] = ["service", "timeline", "channel", "details", "done"];
    const idx = order.indexOf(step);
    const prev = order[idx - 1];
    if (prev) setStep(prev);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Get started</p>
        <p className="text-xs text-neutral-400">{step === "done" ? "✓ envoyé" : step}</p>
      </div>

      {step === "service" && (
        <>
          <p className="mt-3 text-sm text-neutral-300">Quel service recherchez-vous ?</p>
          <div className="mt-4 grid gap-2">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setData((d) => ({ ...d, service: s.id }))}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  data.service === s.id ? "border-white/30 bg-white/10" : "border-white/10 bg-neutral-950/30 hover:bg-white/5"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </>
      )}

      {step === "timeline" && (
        <>
          <p className="mt-3 text-sm text-neutral-300">Quand souhaitez-vous démarrer ?</p>
          <div className="mt-4 grid gap-2">
            {timelines.map((x) => (
              <button
                key={x}
                onClick={() => setData((d) => ({ ...d, timeline: x }))}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  data.timeline === x ? "border-white/30 bg-white/10" : "border-white/10 bg-neutral-950/30 hover:bg-white/5"
                }`}
              >
                {x}
              </button>
            ))}
          </div>
        </>
      )}

      {step === "channel" && (
        <>
          <p className="mt-3 text-sm text-neutral-300">Votre canal principal ?</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {channels.map((x) => (
              <button
                key={x}
                onClick={() => setData((d) => ({ ...d, channel: x }))}
                className={`rounded-2xl border px-4 py-3 text-sm transition ${
                  data.channel === x ? "border-white/30 bg-white/10" : "border-white/10 bg-neutral-950/30 hover:bg-white/5"
                }`}
              >
                {x}
              </button>
            ))}
          </div>
        </>
      )}

      {step === "details" && (
        <>
          <p className="mt-3 text-sm text-neutral-300">Vos informations</p>
          <div className="mt-4 grid gap-2">
            <input className="w-full rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30" placeholder="Nom" value={data.name} onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))} />
            <input className="w-full rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30" placeholder="Entreprise" value={data.company} onChange={(e) => setData((d) => ({ ...d, company: e.target.value }))} />
            <input className="w-full rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30" placeholder="Email pro" value={data.email} onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))} />
            <input className="w-full rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30" placeholder="Téléphone" value={data.phone} onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))} />
            <textarea className="min-h-[90px] w-full rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30" placeholder="Message (optionnel)" value={data.message} onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))} />
          </div>
        </>
      )}

      {step === "done" && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-950/30 p-4">
          <p className="font-semibold">Merci 👋</p>
          <p className="mt-1 text-sm text-neutral-300">Votre demande a été envoyée. On vous contacte rapidement.</p>
        </div>
      )}

      {step !== "done" && (
        <div className="mt-6 flex gap-2">
          <button onClick={back} className="w-1/3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10">
            Back
          </button>
          <button disabled={!canNext || loading} onClick={next} className="w-2/3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 disabled:opacity-50">
            {step === "details" ? (loading ? "Sending..." : "Submit") : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
