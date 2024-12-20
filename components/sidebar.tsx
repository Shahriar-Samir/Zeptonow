"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { breakfast } from "../config/site";

import { subCategoryType } from "@/types";
import {
  atta,
  biscuits,
  coldDrinks,
  frozenFoods,
  icecreams,
  masala,
  munchies,
  packaged,
  sweetCravings,
  teaCoffeeMore,
} from "@/config/site";

const Sidebar = (props: { category: string }) => {
  const { category } = props;

  console.log(category);

  const path = usePathname();

  const [subcategories, setSubcategories] = useState<subCategoryType[]>([]);

  useEffect(() => {
    if (category === "atta-rice-oils-dals") {
      setSubcategories(atta);
    }
    if (category === "tea-coffee-more") {
      setSubcategories(teaCoffeeMore);
    }
    if (category === "sweet-cravings") {
      setSubcategories(sweetCravings);
    }
    if (category === "munchies") {
      setSubcategories(munchies);
    }
    if (category === "frozen-food") {
      setSubcategories(frozenFoods);
    }
    if (category === "icecreams-more") {
      setSubcategories(icecreams);
    }
    if (category === "cold-drinks-juices") {
      setSubcategories(coldDrinks);
    }
    if (category === "biscuits-cookies") {
      setSubcategories(biscuits);
    }
    if (category === "packagedFood") {
      setSubcategories(packaged);
    }
    if (category === "masala-dry-fruits") {
      setSubcategories(masala);
    }
    if (category === "breakfast") {
      setSubcategories(breakfast);
    }
  }, []);

  return (
    <>
      <aside className=" w-[180px] border p-0 h-[100vh] z-10 sticky top-40 md:top-24 bg-white dark:bg-[#1d232a] dark:text-white">
        <ul>
          {subcategories.map((item) => {
            return (
              <li key={item.title}>
                <Link
                  className={
                    path === item.path
                      ? "border-s-5 border-[#950EDB] w-full py-3 flex gap-2 items-center  bg-[#F7E4FF] font-font4 text-[#7C0AB1] text-sm px-4 "
                      : "ps-4 w-full py-3 flex gap-2 items-center font-font1 text-sm"
                  }
                  href={item.path}
                >
                  <Image
                    alt={item.title}
                    className="rounded-full bg-[#F7F0FA]"
                    height={45}
                    src={item.img}
                    width={45}
                  />
                  <p className="">{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
