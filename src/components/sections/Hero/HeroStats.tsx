import { floatingCards } from "./hero.data";

export function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6">
      {floatingCards.map((item) => (
        <div key={item.title} className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
          <p className="mt-2 text-sm text-slate-500">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
