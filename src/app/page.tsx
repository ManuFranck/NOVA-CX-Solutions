"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { Container, Pill, Button, Card } from "@/components/ui";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Testimonials } from "@/components/Testimonials";
import { GetStartedWizard } from "@/components/GetStartedWizard";

type Lang = "fr" | "en";

const brand = {
  name: "NOVA CX Solutions",
  taglineFR: "L’expérience client intelligente",
  taglineEN: "Intelligent customer experience",
  locationFR: "Conakry • Guinée",
  locationEN: "Conakry • Guinea",
  email: "contact@novacxsolutions.com",
  whatsapp: "+224600000000",
};

const links = {
  solutions: "#solutions",
  industries: "#industries",
  process: "#process",
  pricing: "#pricing",
  faq: "#faq",
  contact: "#contact",
};

export default function Page() {
  const [lang, setLang] = useState<Lang>("fr");

  const t = useMemo(() => {
    const FR = {
      nav: { solutions: "Solutions", industries: "Secteurs", process: "Méthode", pricing: "Offres", faq: "FAQ" },
      hero: {
        eyebrow: "CX & Chatbots • 100% adapté au marché guinéen",
        title: "Un service client moderne, 24/7 — piloté par chatbots + humain.",
        subtitle:
          "Nous déployons des chatbots multi‑canaux (WhatsApp, Web, Messenger, Telegram, SMS simple) + une organisation CX pour réduire les coûts, améliorer la satisfaction et accélérer vos réponses.",
        cta1: "Demander une démo",
        cta2: "Voir les offres",
        trust: "Réponses rapides • Escalade vers humain • Reporting CSAT & qualité",
      },
      proof: {
        items: [
          { title: "Chatbots utiles", desc: "FAQ, rendez-vous, réclamations, suivi de commandes, feedback." },
          { title: "Support hybride", desc: "Automatisation ~80% + agents humains pour les cas complexes." },
          { title: "Pilotage CX", desc: "Parcours client, historique, rapports mensuels, amélioration continue." },
        ],
      },
      process: {
        title: "Notre méthode",
        subtitle: "Rapide, pragmatique, et mesurable.",
        steps: [
          { k: "1", title: "Diagnostic", desc: "Analyse des demandes et des canaux." },
          { k: "2", title: "Prototype", desc: "Bot pilote + ton + scénarios." },
          { k: "3", title: "Déploiement", desc: "Test 30 jours + ajustements." },
          { k: "4", title: "Optimisation", desc: "Amélioration continue + CSAT." },
        ],
      },
      pricing: {
        title: "Offres mensuelles",
        subtitle: "Tarifs indicatifs (selon volume, canaux, complexité).",
        cards: [
          { name: "Starter", price: "2 000 000 GNF / mois", for: "FAQ simple", items: ["1 canal", "Jusqu’à 50 Q/R", "Rapport mensuel basique"] },
          { name: "Business", price: "4 500 000 GNF / mois", for: "FAQ + RDV + réclamations", featured: true, items: ["2–3 canaux", "Support humain limité", "Analyse CX & amélioration du bot"] },
          { name: "Premium", price: "8 000 000+ GNF / mois", for: "Sur‑mesure", items: ["Omnicanal", "Support hybride complet", "Reporting CX détaillé", "Optimisation continue"] },
        ],
        note: "ONG & banques : facturation par projet ou par volume.",
      },
      faq: {
        title: "FAQ",
        items: [
          { q: "Le bot remplace les agents ?", a: "Non. Il automatise les demandes répétitives et escalade vers l’humain pour les cas sensibles." },
          { q: "Quels canaux ?", a: "WhatsApp, Web, Messenger, Telegram, et SMS (réponses simples)." },
          { q: "Délais ?", a: "Prototype rapide + test 30 jours pour optimiser avant généralisation." },
          { q: "Langues ?", a: "Français + possibilité d’ajouter des langues locales selon votre contexte." },
        ],
      },
      contact: {
        title: "Parlons de votre support client",
        subtitle: "Dites-nous votre secteur et votre canal principal. On vous répond rapidement.",
      },
      footer: { rights: "Tous droits réservés." },
    };

    const EN = {
      nav: { solutions: "Solutions", industries: "Industries", process: "Process", pricing: "Pricing", faq: "FAQ" },
      hero: {
        eyebrow: "CX & Chatbots • Built for Guinea realities",
        title: "Modern 24/7 customer support — chatbots + human escalation.",
        subtitle:
          "We deploy multi‑channel chatbots (WhatsApp, Web, Messenger, Telegram, simple SMS) plus CX operations to reduce costs, improve satisfaction, and respond faster.",
        cta1: "Request a demo",
        cta2: "See pricing",
        trust: "Fast answers • Human escalation • CSAT & quality reporting",
      },
      proof: {
        items: [
          { title: "Practical chatbots", desc: "FAQ, booking, complaints, order tracking, feedback." },
          { title: "Hybrid support", desc: "~80% automation + humans for complex cases." },
          { title: "CX operations", desc: "Journeys, history, monthly reporting, continuous improvement." },
        ],
      },
      process: {
        title: "Our process",
        subtitle: "Fast, practical, measurable.",
        steps: [
          { k: "1", title: "Discovery", desc: "Requests + channels audit." },
          { k: "2", title: "Prototype", desc: "Pilot bot + tone + scenarios." },
          { k: "3", title: "Rollout", desc: "30-day test + tuning." },
          { k: "4", title: "Optimize", desc: "Continuous improvement + CSAT." },
        ],
      },
      pricing: {
        title: "Monthly pricing",
        subtitle: "Indicative pricing (volume, channels, complexity).",
        cards: [
          { name: "Starter", price: "2,000,000 GNF / month", for: "Simple FAQ", items: ["1 channel", "Up to 50 Q&A", "Basic monthly report"] },
          { name: "Business", price: "4,500,000 GNF / month", for: "FAQ + booking + complaints", featured: true, items: ["2–3 channels", "Limited human support", "CX analysis & bot improvement"] },
          { name: "Premium", price: "8,000,000+ GNF / month", for: "Custom", items: ["Omnichannel", "Full hybrid support", "Detailed CX reporting", "Continuous optimization"] },
        ],
        note: "NGOs & banks: project or volume pricing.",
      },
      faq: {
        title: "FAQ",
        items: [
          { q: "Do chatbots replace agents?", a: "No. They automate repetitive requests and escalate complex/sensitive cases to humans." },
          { q: "Which channels?", a: "WhatsApp, Web, Messenger, Telegram, and simple SMS." },
          { q: "Timeline?", a: "Fast prototype + 30-day rollout to optimize before scaling." },
          { q: "Languages?", a: "French by default; local languages can be added." },
        ],
      },
      contact: {
        title: "Let’s talk",
        subtitle: "Tell us your industry and main channel. We’ll reply fast.",
      },
      footer: { rights: "All rights reserved." },
    };

    return lang === "en" ? EN : FR;
  }, [lang]);

  async function submitLead(payload: Record<string, string>) {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to submit");
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white font-black text-neutral-950">
                N
              </div>
              <div>
                <p className="text-sm font-semibold">{brand.name}</p>
                <p className="text-xs text-neutral-400">{lang === "en" ? brand.taglineEN : brand.taglineFR}</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-neutral-200 md:flex">
              <a className="hover:text-white" href={links.solutions}>{t.nav.solutions}</a>
              <a className="hover:text-white" href={links.industries}>{t.nav.industries}</a>
              <a className="hover:text-white" href={links.process}>{t.nav.process}</a>
              <a className="hover:text-white" href={links.pricing}>{t.nav.pricing}</a>
              <a className="hover:text-white" href={links.faq}>{t.nav.faq}</a>
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang(lang === "en" ? "fr" : "en")}
                className="rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-neutral-200 hover:bg-white/10"
                aria-label="Toggle language"
              >
                {lang === "en" ? "FR" : "EN"}
              </button>
              <Button href={links.contact}>{lang === "en" ? "Get a demo" : "Démo"}</Button>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="bg-hero-glow">
          <Container>
            <div className="grid gap-10 py-14 md:grid-cols-12 md:items-start md:py-20">
              <div className="md:col-span-7">
                <div className="flex flex-wrap gap-2">
                  <Pill>⚡ {t.hero.eyebrow}</Pill>
                  <Pill>✅ WhatsApp • Web • Telegram</Pill>
                </div>

                <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">{t.hero.title}</h1>
                <p className="mt-5 text-base text-neutral-300 md:text-lg">{t.hero.subtitle}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={links.contact}>{t.hero.cta1}</Button>
                  <Button href={links.pricing} variant="secondary">{t.hero.cta2}</Button>
                </div>

                <p className="mt-5 text-sm text-neutral-400">{t.hero.trust}</p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {t.proof.items.map((it: any) => (
                    <div key={it.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm font-semibold">{it.title}</p>
                      <p className="mt-2 text-sm text-neutral-300">{it.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5">
                <GetStartedWizard onSubmit={submitLead} />
                <div className="mt-4 grid gap-4">
                  <LogoMarquee />
                  <Testimonials />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="solutions" className="py-16 md:py-20">
          <Container>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm text-neutral-400">{brand.locationFR}</p>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{t.nav.solutions}</h2>
                <p className="mt-2 text-sm text-neutral-300">
                  {lang === "en" ? "Each page is a dynamic route generated from data." : "Chaque page est une route dynamique générée depuis des données."}
                </p>
              </div>
              <Button href={links.contact} variant="secondary">{lang === "en" ? "Talk to us" : "Parlons"}</Button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {solutions.map((s) => (
                <Card key={s.slug} title={s.title} desc={s.subtitle}>
                  <div className="flex flex-wrap gap-2">
                    {s.channels.slice(0, 3).map((c) => (
                      <span key={c} className="rounded-2xl border border-white/10 bg-neutral-950/40 px-3 py-2 text-xs text-neutral-200">{c}</span>
                    ))}
                  </div>

                  <div className="mt-5">
                    <Link href={`/solutions/${s.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-90">
                      {lang === "en" ? "Learn more" : "Voir détails"} →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="industries" className="border-t border-white/10 py-16 md:py-20">
          <Container>
            <h2 className="text-2xl font-semibold md:text-3xl">{t.nav.industries}</h2>
            <p className="mt-2 text-sm text-neutral-300">{lang === "en" ? "We adapt flows to your sector and volume." : "Nous adaptons les flux à votre secteur et à votre volume."}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {industries.map((i) => (
                <Link key={i.slug} href={`/industries/${i.slug}`} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft transition hover:bg-white/10">
                  <p className="text-sm font-semibold">{i.title}</p>
                  <p className="mt-2 text-xs text-neutral-300">{lang === "en" ? "See examples →" : "Voir exemples →"}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section id="process" className="py-16 md:py-20">
          <Container>
            <h2 className="text-2xl font-semibold md:text-3xl">{t.process.title}</h2>
            <p className="mt-2 text-sm text-neutral-300">{t.process.subtitle}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {t.process.steps.map((s: any) => (
                <div key={s.k} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white text-sm font-bold text-neutral-950">{s.k}</span>
                    <p className="font-semibold">{s.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-neutral-300">{s.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="pricing" className="border-t border-white/10 py-16 md:py-20">
          <Container>
            <h2 className="text-2xl font-semibold md:text-3xl">{t.pricing.title}</h2>
            <p className="mt-2 text-sm text-neutral-300">{t.pricing.subtitle}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {t.pricing.cards.map((c: any) => (
                <div key={c.name} className={`rounded-3xl border p-6 shadow-soft ${c.featured ? "border-white/30 bg-white/10" : "border-white/10 bg-white/5"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold">{c.name}</p>
                      <p className="mt-1 text-xs text-neutral-300">{c.for}</p>
                    </div>
                    {c.featured && <span className="rounded-2xl bg-white px-3 py-1 text-xs font-semibold text-neutral-950">{lang === "en" ? "Most popular" : "Le plus choisi"}</span>}
                  </div>
                  <p className="mt-4 text-2xl font-semibold">{c.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-200">
                    {c.items.map((x: string) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button href={links.contact}>{lang === "en" ? "Talk to sales" : "Parler à un consultant"}</Button>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-neutral-400">{t.pricing.note}</p>
          </Container>
        </section>

        <section id="faq" className="py-16 md:py-20">
          <Container>
            <h2 className="text-2xl font-semibold md:text-3xl">{t.faq.title}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {t.faq.items.map((x: any) => (
                <div key={x.q} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <p className="font-semibold">{x.q}</p>
                  <p className="mt-2 text-sm text-neutral-300">{x.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="border-t border-white/10 py-16 md:py-20">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft md:p-8">
                <h2 className="text-2xl font-semibold">{t.contact.title}</h2>
                <p className="mt-2 text-sm text-neutral-300">{t.contact.subtitle}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={`mailto:${brand.email}`}>Email</Button>
                  <Button href={`https://wa.me/${brand.whatsapp.replace("+", "")}`} variant="secondary">WhatsApp</Button>
                </div>

                <p className="mt-6 text-sm text-neutral-400">{lang === "en" ? "Or use the Get started form above." : "Ou utilisez le formulaire “Get started” en haut."}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 shadow-soft md:p-8">
                <p className="text-sm font-semibold">{brand.name}</p>
                <p className="mt-2 text-sm text-neutral-300">
                  {lang === "en" ? brand.locationEN : brand.locationFR} • {lang === "en" ? brand.taglineEN : brand.taglineFR}
                </p>

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold">Stack (exemples)</p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                    <li>• WhatsApp Business API / Telegram / Facebook Messenger</li>
                    <li>• Plateforme bot : Kore.ai (ou custom)</li>
                    <li>• CX / ticketing : Zendesk</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold">{brand.name}</p>
              <p className="text-sm text-neutral-400">
                {lang === "en" ? brand.locationEN : brand.locationFR} • {lang === "en" ? brand.taglineEN : brand.taglineFR}
              </p>
            </div>
            <p className="text-sm text-neutral-400">© {new Date().getFullYear()} {brand.name}. {t.footer.rights}</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
