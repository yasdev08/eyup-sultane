import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import GrillSection from "@/components/GrillSection";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import { menu, navItems } from "@/data/menu";

export default function Page() {
  return (
    <>
      <Header />
      <CategoryNav items={navItems} />
      <main className="pattern">
        {/* <GrillSection />*/}
        {menu.map((c) => (
          <MenuSection key={c.id} category={c} />
        ))}
      </main>
      <Footer />
    </>
  );
}
