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
          link: "/cn/tea-coffee-more/icecreams-more",
        },
        {
          img: "/category/3.webp",
          link: "/cn/tea-coffee-more/frozen-food",
        },
        {
          img: "/category/4.webp",
          link: "/cn/tea-coffee-more/sweet-cravings",
        },
        {
          img: "/category/5.webp",
          link: "/cn/tea-coffee-more/cold-drinks-juices",
        },
        {
          img: "/category/6.webp",
          link: "/cn/tea-coffee-more/munchies",
        },
        {
          img: "/category/7.webp",
          link: "/cn/tea-coffee-more/biscuits-cookies",
        },
      ];
          
    return (
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
    );
};

export default SnacksAndDrinks;