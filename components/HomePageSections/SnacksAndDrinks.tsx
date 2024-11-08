import { categoryType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SnacksAndDrinks = () => {
    const SnacksAndDrinksSubCategories: categoryType[] = [
        {
          img: "/category/1.webp",
          link: "/cn/tea-coffee-more/top-picks",
        },
        {
          img: "/category/2.webp",
          link: "/cn/icecreams-more/top-picks",
        },
        {
          img: "/category/3.webp",
          link: "/cn/frozen-food/top-picks",
        },
        {
          img: "/category/4.webp",
          link: "/cn/sweet-cravings/top-picks",
        },
        {
          img: "/category/5.webp",
          link: "/cn/cold-drinks-juices/top-picks",
        },
        {
          img: "/category/6.webp",
          link: "/cn/munchies/top-picks",
        },
        {
          img: "/category/7.webp",
          link: "/cn/biscuits-cookies/top-picks",
        },
      ];
          
    return (    
        <main>
        <section>
        <h1 className="text-xl font-font4">Snacks & Drinks</h1>
        <section className="grid grid-cols-8 gap-5 mt-6">
          {SnacksAndDrinksSubCategories.map((item,index)=>{
            if (index === 0) {
                  return <Link href={item.link} key={index} className="col-span-2 flex flex-col items-center gap-2 ">
                              <Image width={300} height={300} alt="example" src={item.img}/>
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