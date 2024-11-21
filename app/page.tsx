"use client";

import GroceryAndKitchen from "@/components/HomePageSections/GroceryAndKitchen";
import SnacksAndDrinks from "@/components/HomePageSections/SnacksAndDrinks";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);
  return (
    <main className="px-6">
      <button className="btn" onClick={() => signIn()}>
        github login
      </button>
      <section className="flex flex-col gap-7 mt-5">
        <GroceryAndKitchen />
        <SnacksAndDrinks />
      </section>
    </main>
  );
}
