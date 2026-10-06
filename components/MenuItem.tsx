import Image from "next/image";
import type { MenuItem as Item } from "@/data/menu";

export const formatPrice = (n: number) => `${n} DA`;

export default function MenuItem({ item }: { item: Item }) {
  return (
    <li className="flex gap-4 border-b border-gold/15 py-3.5 last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0">
      {item.image && (
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-gold/30 bg-ink sm:h-24 sm:w-24">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <div className="min-w-0">
            <p className="font-medium text-cream">{item.name}</p>
            {item.arabicName && (
              <p
                dir="rtl"
                lang="ar"
                className="text-left font-arabic text-sm text-gold-3/80"
              >
                {item.arabicName}
              </p>
            )}
            {item.description && (
              <p dir="auto" className="mt-0.5 text-sm text-mute">
                {item.description}
              </p>
            )}
            {item.note && (
              <p className="mt-0.5 text-xs text-mute">{item.note}</p>
            )}
          </div>
          {item.price !== undefined && (
            <span className="whitespace-nowrap font-display text-xl font-semibold text-gold-2">
              {formatPrice(item.price)}
            </span>
          )}
        </div>
        {item.variants && (
          <dl className="mt-2 space-y-1">
            {item.variants.map((v) => (
              <div key={v.label} className="flex justify-between gap-4 text-sm">
                <dt className="text-mute">{v.label}</dt>
                <dd className="font-display text-lg font-semibold text-gold-2">
                  {formatPrice(v.price)}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </li>
  );
}
