
export function Ribbon({ badge, title, subtitle }: { badge?: string; title: string; subtitle?: string }) {
  return (
    <div className="relative my-16">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="relative mx-auto max-w-fit rounded-2xl bg-white px-8 py-4 shadow-sm text-center">
        {badge && (
          <span className="mb-1 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {badge}
          </span>
        )}
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>
    </div>
  );
}
