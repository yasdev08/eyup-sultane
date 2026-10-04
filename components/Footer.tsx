import Image from "next/image";
import { Phone } from "lucide-react";
import { phone } from "@/data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gold/30 px-5 pb-[calc(env(safe-area-inset-bottom)+2rem)] pt-8 text-center">
      <Image src="/images/logo.png" alt="" width={1254} height={1254} sizes="96px" className="mx-auto h-24 w-24" />
      <p className="font-display text-xl italic text-gold-2">Grilled Steak &amp; Tender</p>
      <div className="mt-5"><SocialLinks /></div>
      <a href={`tel:${phone.replace(/\s/g, "")}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-cream">
        <Phone size={16} className="text-gold-2" aria-hidden /> Contactez-nous · {phone}
      </a>
    </footer>
  );
}
