import Link from "next/link";
import HeroServices from "./_components/HeroServices";
import ItemsService from "./_components/ItemsServices";

export default async function ServicesPages() {
  return (
    <main className="w-screen overflow-y-hidden">
      <HeroServices />
      <ItemsService />
    </main>
  );
}
