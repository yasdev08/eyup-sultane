import Image from "next/image";
import { accompaniments, platters } from "@/data/menu";
import { formatPrice } from "./MenuItem";

export default function GrillSection() {
  return (
    <section id="grillades" aria-labelledby="grill-t" className="pattern scroll-mt-20 border-b border-gold/25 bg-coal px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 id="grill-t" className="font-display text-5xl font-semibold text-gold-3">Grillades Eyüp Sultan</h2>
          <p dir="rtl" lang="ar" className="mt-1 font-arabic text-xl text-cream">مشاوي أيوب سلطان</p>
          <div aria-hidden className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {platters.flatMap((p) => p.sizes.map((s) => (
            <article key={`${p.name}-${s.persons}`} className="overflow-hidden rounded-md border border-gold/40 bg-ink">
              <div className="relative aspect-[12/5] bg-coal">
                <Image src={s.image} alt={`${p.name}, ${s.persons} personnes`} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" />
              </div>
              <div className="flex items-end justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-2xl text-cream">{p.name}</h3>
                  <p dir="rtl" lang="ar" className="text-left font-arabic text-sm text-gold-3/80">{p.arabicName}</p>
                  <p className="mt-1 text-sm text-mute">{s.persons} personnes</p>
                </div>
                <span className="whitespace-nowrap font-display text-3xl font-semibold text-gold-3">{s.price ? formatPrice(s.price) : "—"}</span>
              </div>
            </article>
          )))}
        </div>
        <p className="mt-6 text-center text-sm text-mute"><span className="text-gold-2">Accompagnements · المقبلات المرفقة :</span> {accompaniments.join(", ")}</p>
      </div>
    </section>
  );
}
