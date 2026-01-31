import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
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
      ? "bg-white text-neutral-950 hover:bg-white/90"
      : "border border-white/15 bg-white/5 text-neutral-100 hover:bg-white/10";
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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <h3 className="text-lg font-semibold">{title}</h3>
      {desc && <p className="mt-2 text-sm text-neutral-300">{desc}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
