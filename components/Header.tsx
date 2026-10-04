import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <header className="pattern border-b border-gold/25 px-5 pb-7 pt-[calc(env(safe-area-inset-top)+1.5rem)] text-center">
      <div className="rise mx-auto max-w-md">
        <h1 className="sr-only">Eyüp Sultan — Grilled Steak &amp; Tender</h1>
        <Image
          src="/images/logo.png"
          alt="Eyüp Sultan, Grilled Steak & Tender"
          width={1254}
          height={1254}
          sizes="176px"
          className="mx-auto h-44 w-44"
        />
        <p className="font-display text-3xl italic text-cream">
          Bienvenue à Eyüp Sultan
        </p>
        <p
          dir="rtl"
          lang="ar"
          className="mt-1 font-arabic text-base text-gold-2"
        >
          مرحبا بكم في مطعم أيوب سلطان
        </p>
        <div className="mt-5">
          <SocialLinks />
        </div>
        <a
          href="#grillades"
          className="mt-6 inline-flex min-h-11 items-center gap-1 text-sm tracking-wide text-gold-3"
        >
          Voir le menu <ChevronDown size={16} aria-hidden />
        </a>
      </div>
    </header>
  );
}
