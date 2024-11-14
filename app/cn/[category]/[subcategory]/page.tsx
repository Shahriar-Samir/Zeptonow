"use client"


import Sidebar from "@/components/sidebar";
import { updateProducts } from "@/config/products";
import { ProductsType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";




const Subcategory = (props: { params: { subcategory: string, category:string } }) => {
  const [products,setProducts] = useState<ProductsType[]>([])


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
      <section className="mt-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-3">
        {products.map((item) => {
          return (
            <article key={item.name}
              className="card h-[350px] flex flex-col justify-between  "
            >
           <Link  href={`/pn/${item?.name}`}>
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
                <div className="p-0 text-sm dark:text-white">
                  <h2 className="mt-2 font-font2">
                    {item.name.replace('%25','%').replace('%2F','/').replace('%7C','|').replace('%7C','|').replace("%E2%80%99", "'")}
                  </h2>
                  <p className="font-font1 mt-1">{item.unit}</p>
                </div>
              </div>
            </Link>
              <div className="w-full">
                <p className="">
                  <span className="font-font3 dark:text-white">₹{item?.discountedPrice}</span>
                  <span className="text-xs text-gray-400 font-font1 ms-1 line-through">
                    ₹{item?.price}
                  </span>
                </p>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box w-full !max-w-[400px]">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h2 className="font-semibold text-md">Choose quantity</h2>
    <h4 className="font-bold text-sm">{item.name}</h4>
    <div className="flex gap-5 items-center w-full justify-center mt-4">
          <Image src={item.img1} width={400} className="w-5/12" height={400} alt={item.name}/>
          <Image src={item.img1} width={400} className="w-5/12" height={400} alt={item.name}/>
    </div>
    <div className="modal-action">
    </div>
  </div>
</dialog>
                <button className="w-full py-2 text-[#EF4372] text-sm font-font4 border rounded border-[#EF4372]">
                  Add to Cart
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </section>
    </main>
  );
};

export default Subcategory;
