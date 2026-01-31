import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
      {children}
    </span>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}) {
  const cls =
    variant === "primary"
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50";
  if (href) {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${cls}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${cls}`}
    >
      {children}
    </button>
  );
}

export function Card({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold">{title}</h3>
      {desc && <p className="mt-2 text-sm text-slate-600">{desc}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
