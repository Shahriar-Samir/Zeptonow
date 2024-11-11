import { categoryType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SnacksAndDrinks = () => {
    const SnacksAndDrinksSubCategories: categoryType[] = [
        {
          img: "/category/SnacksAndDrinks/1.webp",
          link: "/cn/tea-coffee-more/top-picks",
        },
        {
          img: "/category/SnacksAndDrinks/2.webp",
          link: "/cn/icecreams-more/top-picks",
        },
        {
          img: "/category/SnacksAndDrinks/3.webp",
          link: "/cn/frozen-food/top-picks",
        },
        {
          img: "/category/SnacksAndDrinks/4.webp",
          link: "/cn/sweet-cravings/top-picks",
        },
        {
          img: "/category/SnacksAndDrinks/5.webp",
          link: "/cn/cold-drinks-juices/top-picks",
        },
        {
          img: "/category/SnacksAndDrinks/6.webp",
          link: "/cn/munchies/top-picks",
        },
        {
          img: "/category/SnacksAndDrinks/7.webp",
          link: "/cn/biscuits-cookies/top-picks",
        },
      ];
          
    return (    
        <main>
        <section>
        <h1 className="text-xl font-font4 dark:text-white">Snacks & Drinks</h1>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 mt-6">
          {SnacksAndDrinksSubCategories.map((item,index)=>{
            if (index === 0) {
                  return <Link href={item.link} key={index} className="col-span-2 flex flex-col bg-white items-center gap-2 ">
                              <Image width={300} height={300} alt="example" src={item.img? item.img:''}/>
                          </Link>
                }
                else{
                  return  <Link href={item.link} key={index} className="flex flex-col items-center gap-2 ">
                <Image width={300} height={300} alt="example" src={item.img}/>
            </Link>

                }
          })}
        </section>
        </section>
        </main>
    );
};

export default SnacksAndDrinks;