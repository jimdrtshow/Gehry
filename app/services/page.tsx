import HeroServices from "./_components/HeroServices";
import ItemsService from "./_components/ItemsServices";

export default function ServicesPages() {
  return (
    <main className="w-screen overflow-y-hidden">
      <HeroServices />
      <ItemsService />
    </main>
  );
}
