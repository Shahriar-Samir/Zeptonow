import GroceryAndKitchen from "@/components/HomePageSections/GroceryAndKitchen";
import SnacksAndDrinks from "@/components/HomePageSections/SnacksAndDrinks";




export default function Home() {
  

  return (
    <main className="px-6">
        <section className="flex flex-col gap-7 mt-5">
        <GroceryAndKitchen/>
        <SnacksAndDrinks/>
        </section>
    </main>
  );
}
