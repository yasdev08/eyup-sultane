import type { MenuCategory } from "@/data/menu";
import MenuItem from "./MenuItem";

export default function MenuSection({ category: c }: { category: MenuCategory }) {
  return (
    <section id={c.id} aria-labelledby={`${c.id}-t`} className="mx-auto max-w-4xl scroll-mt-20 px-4 py-8">
      <div className="mb-4 text-center">
        <h2 id={`${c.id}-t`} className="font-display text-4xl font-semibold text-gold-2">{c.name}</h2>
        {c.arabicName && <p dir="rtl" lang="ar" className="font-arabic text-lg text-cream/90">{c.arabicName}</p>}
        <div aria-hidden className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        {c.note && <p className="mt-3 text-sm text-mute">{c.note}</p>}
      </div>
      <ul className="grid rounded-md border border-gold/20 bg-coal px-5 md:grid-cols-2 md:gap-x-10">
        {c.items.map((item) => <MenuItem key={item.id} item={item} />)}
      </ul>
    </section>
  );
}
