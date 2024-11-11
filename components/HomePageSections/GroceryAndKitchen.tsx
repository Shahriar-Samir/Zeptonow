import { categoryType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GroceryAndKitchen = () => {
    const GroceryAndKitchenSubCategories: categoryType[] = [
        {
          img: "/category/GroceryAndKitchen/attaRiceOilDals.webp",
          link: "/cn/atta-rice-oils-dals/top-picks",
        },
        {
          img: "/category/GroceryAndKitchen/breakfatAndSauces.webp",
          link: "/cn/breakfast/top-picks",
        },
        {
          img: "/category/GroceryAndKitchen/masalaDryFruits.webp",
          link: "/cn/masala-dry-fruits/top-picks",
        },
        {
          img: "/category/GroceryAndKitchen/packagedFood.webp",
          link: "/cn/packagedFood/top-picks",
        },
      ];

    return (
        <section>
        <h1 className="text-xl font-font4 dark:text-white">Grocery & Kitchen</h1>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 mt-6">
          {GroceryAndKitchenSubCategories.map((item,index)=>{
                  return  <Link href={item.link} key={index} className="flex flex-col items-center gap-2 bg-white">
                <Image width={300} height={300} alt="example" src={item.img? item.img:''}/>
            </Link>
          })}
        </section>
        </section>
    );
};

export default GroceryAndKitchen;