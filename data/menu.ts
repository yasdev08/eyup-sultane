// All menu content lives here. Source: the two printed menus (photo menu in FR/AR, black menu in TR/AR).
// `price` omitted = not readable on the photo (see `note`). Prices are in DA, exactly as printed.
export type Variant = { label: string; price: number };
export type MenuItem = { id: string; name: string; arabicName?: string; description?: string; price?: number; variants?: Variant[]; note?: string; image?: string };
export type MenuCategory = { id: string; name: string; arabicName?: string; note?: string; items: MenuItem[] };
export type Platter = { name: string; arabicName: string; sizes: { persons: string; price?: number; image: string }[] };

let n = 0;
const it = (name: string, arabicName?: string, price?: number, extra: Partial<MenuItem> = {}): MenuItem => ({ id: `i${n++}`, name, arabicName, price, ...extra });

export const platters: Platter[] = [
  // TODO: the 4–5 personnes price is hidden by glare on the photo (starts "1300…"). Confirm with the owner.
  { name: "Grillades Eyüp Sultan", arabicName: "مشكل أيوب سلطان", sizes: [{ persons: "4-5", image: "/images/dishes/grill-eyup-4-5.jpg" }, { persons: "9-10", price: 24500, image: "/images/dishes/grill-eyup-9-10.jpg" }] },
  { name: "Grillades Mix", arabicName: "مشاوي ميكس", sizes: [{ persons: "4-5", price: 9500, image: "/images/dishes/grill-mix-4-5.jpg" }, { persons: "9-10", price: 18500, image: "/images/dishes/grill-mix-9-10.jpg" }] },
];
export const accompaniments = ["Riz", "Borghoul", "Frites", "Crème à l'ail", "Coleslaw", "Salade Ezme"];

export const menu: MenuCategory[] = [
  { id: "salades", name: "Salades", arabicName: "السلطات", items: [
    it("Salade verte", "سلطة خضراء", 500), it("Salade poulet", "سلطة دجاج", 800), it("Salade fetouche", "سلطة فتوش", 600),
    it("Salade de thon", "سلطة تونة", 700), it("Hmiss", "سلطة مشوية", 350), it("Coleslaw", "كول سلو", 400),
    it("Menu burger viande", "منيو برغر لحم", 950), it("Menu burger poulet", "منيو برغر دجاج", 750),
  ] },
  { id: "entrees-froides", name: "Entrées froides", arabicName: "مقبلات باردة", items: [
    it("Mtabel betrave", "متبل شمندر", 450), it("Homous", "حمص", 500), it("Mtabel Aubergine", "متبل باذنجان", 500),
    it("Muhammara", "محمرة", 450), it("Lebna", "لبنة", 500), it("Warak Enab", "ورق عنب", 600),
    it("Salade Ezme", "أزمي سلطة", 350), it("Mezza", "مازة (مشكل مقبلات)", 1100),
  ] },
  { id: "entrees-chaudes", name: "Entrées chaudes", arabicName: "مقبلات ساخنة", items: [
    it("Frites", "بطاطا", 300), it("Riz", "أرز", 300), it("Borghoul", "برغل", 300), it("Légumes cuit", "خضار مسلوقة", 600),
    it("Kebba frit", "كبة مقلية", 300), it("Patate piquante", "بطاطا حارة", 500), it("Falafel", "فلافل", 500),
    it("Lahmajoun", "لحم و عجين", 700), it("Brick fromage", "بوريك جبن", 100), it("Brick poulet", "بوريك دجاج", 150), it("Brick viande", "بوريك لحم", 250),
    // Not listed: a 600 DA dish whose name is unreadable (glare) in the photo.
  ] },
  { id: "bati-yemekleri", name: "Batı yemekleri", arabicName: "الأطباق الغربية", items: [
    it("Dana stroganoff", "فيليه بالخضار", 3000), it("Tavuk stroganoff", "دجاج بالكريمة", 1800), it("Tavuk Corden bleu", "كوردن بلو", 2000),
    it("Dana Bonfile", "فيليه", 3200), it("Tavuk Şnitzel", "دجاج مقلي", 1800), it("Peynirli Tavuk şnitzel", "دجاج بالجبنة", 2000),
    it("Lasegne", "لزانيا", 1400), it("Çıtır tavuk", "كريسبي", 1400), it("Tavuk Kanatları", "أجنحة دجاج", 1000),
  ] },
  { id: "salata", name: "Salata", arabicName: "السلطات", items: [
    it("Çoban Salatası", "سلطة خضراء", 400), it("Tavuk Salatası", "سلطة دجاج", 800), it("Fettuş", "فتوش", 600),
    it("Yunan Salatası", "سلطة يونانية", 600), it("Ton Salatası", "سلطة التونة", 700),
  ] },
  { id: "corbalar", name: "Çorbalar", arabicName: "الشوريات", items: [
    it("Mercimek Çorbası", "شوربة عدس", 400), it("Günün Çorbası", "شوربة اليوم", 400),
  ] },
  { id: "ozel-tepsiler", name: "Özel Tepsiler", arabicName: "صواني خاصة", items: [
    it("Tepsi kebabı", "كباب بالصينية", 2000), it("Tahınlı kebabı", "كباب بالطحينة", 2500),
  ] },
  { id: "entrez", name: "Entrez", arabicName: "المقبلات", items: [
    it("Frites", "بطاطا مقلية", 350), it("Légumes sautés", "خضار سوتيه", 500), it("Croquettes mozzarella", "كروكيت موزاريلا", 600),
    it("Falafel", "فلافل", 500), it("Çiğ Köfte", "كبة نية", 500), it("Yaprak Sarma", "ورق عنب", 500), it("Meza", "مشكل مقبلات", 1100),
    it("Tek Meza", "مقبلات فردية", 350), it("Börek", "بوريك (بالدجاج/جبن/لحم)", 700), it("Pilav", "صحن أرز", 300),
    it("Bulgur", "صحن برغل", 300), it("İçli Köfte", "كبة مقلية", 250),
  ] },
  { id: "burger", name: "Burger", arabicName: "برغر", items: [
    it("Et Burger — Klasik Burger", "برجر لحم", 1000, { description: "لحم، سلطة، طماطم، صوص" }),
    it("Et Burger — Doubel Burger", "دبل برجر", 1400),
    it("Klasik tavuk burger", "برجر دجاج كلاسيك", 800), it("Çıtır tavuk burger", undefined, 1000), it("Çocuk burger", "برجر أطفال", 700),
    // Not listed: Cheese Burger (price crossed out on the print).
  ] },
  { id: "fume-et", name: "Füme Et", arabicName: "اللحم المدخن", note: "250g füme et, pilav, karışık salata, sos çeşitleri", items: [
    it("Füme dana", "اللحم البقري", undefined, { variants: [{ label: "1 kişi", price: 3000 }, { label: "4 kişi", price: 10000 }] }),
    it("Füme kuzu", "لحم الخروف", undefined, { variants: [{ label: "1 kişi", price: 3500 }, { label: "4 kişi", price: 12000 }] }),
  ] },
  { id: "izgaralar", name: "İzgaralar", arabicName: "مشاوي", items: [
    it("Adana kebap", "كباب أضنا", 2000), it("Domatesli kebap", "كباب بالطماطم", 2000), it("Izgara köfte", "كفتة مشوية", 1800),
    it("Kaşarlı köfte", "كفتة محشية بالجبن", 2200), it("Beyti kebap", "كباب ملفوف", 2200),
    it("Tavuk şış", "شيش طاووق", undefined, { note: "Prix illisible sur la photo" }),
    it("Tavuk But", "أفخاذ دجاج", 1200), it("Tavuk kanatları", "أجنحة دجاج", 900), it("Tavuk kebap", "كباب دجاج", 1300), it("Karışık Kebap", "مكس كباب", 1700),
    it("Karışık izgara", "مشاوي مشكل", undefined, { variants: [
      { label: "2 personnes", price: 5000 }, { label: "4 personnes", price: 9000 }, { label: "6 personnes", price: 13000 }, { label: "8 personnes", price: 18000 }] }),
  ] },
  { id: "icecekler", name: "İçecekler", arabicName: "المشروبات", note: "Prix non indiqués sur le menu imprimé", items: [
    it("Naneli Limonlu Mojito", "موهيتو ليمون ونعنع"), it("Limon Suyu", "عصير الليمون"), it("Portakal Suyu", "عصير البرتقال"), it("Kokteyl", "كوكتيل"),
    it("Kavun Smoothie", "سموذي الشمام"), it("Karpuz Smoothie", "سموذي البطيخ"),
  ] },
];

export const navItems = [{ id: "grillades", label: "Grillades" }, ...menu.map((c) => ({ id: c.id, label: c.name }))];

// Dish photos cropped from the printed photo menu. Key: "category-id/item name" -> file in public/images/dishes.
const photos: Record<string, string> = {
  "salades/Salade verte": "salade-verte", "salades/Salade poulet": "salade-poulet", "salades/Salade fetouche": "salade-fetouche",
  "salades/Salade de thon": "salade-thon", "salades/Hmiss": "hmiss", "salades/Coleslaw": "coleslaw",
  "salades/Menu burger viande": "menu-burger-viande", "salades/Menu burger poulet": "menu-burger-poulet",
  "entrees-froides/Mtabel betrave": "mtabel-betrave", "entrees-froides/Homous": "homous", "entrees-froides/Mtabel Aubergine": "mtabel-aubergine",
  "entrees-froides/Muhammara": "muhammara", "entrees-froides/Lebna": "lebna", "entrees-froides/Warak Enab": "warak-enab",
  "entrees-froides/Salade Ezme": "salade-ezme", "entrees-froides/Mezza": "mezza",
  "entrees-chaudes/Frites": "frites", "entrees-chaudes/Riz": "riz", "entrees-chaudes/Borghoul": "borghoul", "entrees-chaudes/Légumes cuit": "legumes-cuit",
  "entrees-chaudes/Kebba frit": "kebba-frit", "entrees-chaudes/Patate piquante": "patate-piquante", "entrees-chaudes/Falafel": "falafel",
  "entrees-chaudes/Lahmajoun": "lahmajoun", "entrees-chaudes/Brick fromage": "brick-fromage", "entrees-chaudes/Brick poulet": "brick-poulet",
  "entrees-chaudes/Brick viande": "brick-viande",
  // Same dish names on the second menu, reusing the same photo:
  "entrez/Frites": "frites", "entrez/Falafel": "falafel",
};
menu.forEach((c) => c.items.forEach((i) => { const f = photos[`${c.id}/${i.name}`]; if (f) i.image = `/images/dishes/${f}.jpg`; }));
