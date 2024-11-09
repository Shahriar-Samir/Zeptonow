"use client"


import Sidebar from "@/components/sidebar";
import { updateProducts } from "@/config/products";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Subcategory = (props: { params: { subcategory: string, category:string } }) => {
  const [products,setProducts] = useState([])


  const {
    params: { subcategory, category },
  } = props;

  useEffect(()=>{
      updateProducts(category,subcategory,setProducts)
  },[])

  return (
    <main className="flex gap-5">
      <Sidebar category={category}/>
      <section className="px-3 w-10/12">
      <h1 className="px-5 py-5 text-2xl font-font4 capitalize">{subcategory}</h1>
      <section className="mt-3 grid grid-cols-6 gap-3">
        {products.map((item) => {
          return (
           <Link href={`/pn/${item.name}`}>
            <article
              key={item}
              className="card h-[350px] flex flex-col justify-between  "
            >
              <div className="relative rounded-xl overflow-hidden">
                <div className="absolute z-20 ">
                  <Image
                    alt="offer-tag"
                    height={37}
                    src="/icons/offer-tag.svg"
                    width={37}
                  />
                  <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] font-font2">
                    {item.discount}% Off
                  </h1>
                </div>
                <div className="border rounded-xl">
                  <figure className="w-full overflow-hidden h-[170px] overflow-hidden">
                    <Image
                      alt="Shoes"
                      className="rounded-xl h-full w-full object-cover transition-all hover:scale-110"
                      height={400}
                      src={item.img1}
                      width={400}
                    />
                  </figure>
                </div>
                <div className="p-0 text-sm">
                  <h2 className="mt-2 font-font2">
                    {item.name}
                  </h2>
                  <p className="font-font1 mt-1">{item.unit}</p>
                </div>
              </div>
              <div className="w-full">
                <p className="">
                  <span className="font-font3">₹{item?.discountedPrice}</span>
                  <span className="text-xs text-gray-400 font-font1 ms-1 line-through">
                    ₹{item?.price}
                  </span>
                </p>
                <button className="w-full py-2 text-[#EF4372] text-sm font-font4 border rounded border-[#EF4372]">
                  Add to Cart
                </button>
              </div>
            </article>
            </Link>
          );
        })}
      </section>
    </section>
    </main>
  );
};

export default Subcategory;
