"use client";
import React from "react";

const logos = ["Banques", "Microfinance", "Cliniques", "Pharmacies", "Écoles", "Universités", "PME", "ONG", "Projets"];

export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent" />
      <div className="flex animate-[marquee_18s_linear_infinite] gap-3 whitespace-nowrap px-6">
        {Array.from({ length: 2 }).flatMap((_, loop) =>
          logos.map((l) => (
            <span key={`${loop}-${l}`} className="rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-2 text-xs text-neutral-200">
              {l}
            </span>
          ))
        )}
      </div>
      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
