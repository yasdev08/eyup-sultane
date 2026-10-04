"use client";
import { useEffect, useRef, useState } from "react";

export default function CategoryNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0].id);
  const bar = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    items.forEach((i) => { const el = document.getElementById(i.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    const el = bar.current?.querySelector<HTMLElement>('[aria-current="true"]');
    if (el && bar.current) bar.current.scrollTo({ left: el.offsetLeft - bar.current.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Catégories du menu" className="sticky top-0 z-30 border-b border-gold/25 bg-ink/95 pt-[env(safe-area-inset-top)] backdrop-blur">
      <ul ref={bar} className="no-scrollbar mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-2.5 lg:justify-center">
        {items.map((i) => (
          <li key={i.id} className="shrink-0">
            <a href={`#${i.id}`} aria-current={active === i.id ? "true" : undefined}
              className={`flex min-h-10 items-center rounded-full border px-4 text-sm transition-colors ${active === i.id ? "border-gold bg-gold text-ink font-semibold" : "border-gold/30 text-cream/80"}`}>
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
