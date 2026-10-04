import { MapPin } from "lucide-react";
import { socialLinks } from "@/data/site";

const svg = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;
const Instagram = () => (<svg {...svg}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></svg>);
const Facebook = () => (<svg {...svg}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" /></svg>);
const TikTok = () => (<svg {...svg}><path d="M15 3v11a4 4 0 1 1-4-4M15 3a5 5 0 0 0 5 5" /></svg>);

const items = [
  { key: "instagram", label: "Instagram", icon: <Instagram /> },
  { key: "facebook", label: "Facebook", icon: <Facebook /> },
  { key: "tiktok", label: "TikTok", icon: <TikTok /> },
  { key: "googleMaps", label: "Google Maps", icon: <MapPin size={20} aria-hidden /> },
] as const;

export default function SocialLinks() {
  return (
    <ul className="flex items-center justify-center gap-3">
      {items.map(({ key, label, icon }) => (
        <li key={key}>
          <a href={socialLinks[key]} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-ink/60 text-gold-2 transition-colors hover:bg-gold hover:text-ink">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
