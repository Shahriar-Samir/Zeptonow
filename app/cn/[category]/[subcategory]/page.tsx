"use client";

import Sidebar from "@/components/sidebar";
import { updateProducts } from "@/config/products";
import { addToCart } from "@/lib/features/cart/cart";
import { ProductsType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { IoArrowBackSharp } from "react-icons/io5";
import { ProductType } from "../../../../types";


const Subcategory = (props: { params: { subcategory: string; category: string } }) => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const goBack = () => router.back();

  const addToCartHandler = (item: any) => {
    dispatch(
      addToCart({
        ...item,
        quantity: 1,
      })
    );

    toast.success("Successfully added to cart");
  };

  const {
    params: { subcategory, category },
  } = props;

  useEffect(() => {
    updateProducts(category, subcategory, setProducts);
  }, [category, subcategory]);

  return (
    <main className="flex gap-5">
      <Sidebar category={category} />
      <section className="px-3 w-10/12">
        <button
          onClick={goBack}
          className="mt-4 flex gap-2 items-center btn bg-[#f1e6ff] dark:hover:bg-[#f1e6ff] hover:bg-[#950EDB] dark:bg-[#950EDB] hover:text-white dark:hover:text-black dark:text-white"
        >
          <IoArrowBackSharp /> Back
        </button>
        <h1 className="px-5 py-5 text-2xl font-font4 capitalize dark:text-white">{subcategory}</h1>
        <section className="mt-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-3">
          {products.map((item) => {
            return (
              <article
                key={item.name}
                className="card h-[350px] flex flex-col justify-between"
              >
                <Link href={`/pn/${item?.name}`}>
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
                        {item.name
                          .replace("%25", "%")
                          .replace("%2F", "/")
                          .replace("%7C", "|")
                          .replace("%E2%80%99", "'")}
                      </h2>
                      <p className="font-font1 mt-1">{item.unit}</p>
                    </div>
                  </div>
                </Link>
                <div className="w-full">
                  <p className="">
                    <span className="font-font3 dark:text-white">
                      ₹{item?.discountedPrice}
                    </span>
                    <span className="text-xs text-gray-400 font-font1 ms-1 line-through">
                      ₹{item?.price}
                    </span>
                  </p>
                  <ShowUnitsModal item={item} />
                  <div className="flex items-center gap-1">
                    <button
                      className="w-1/2 text-[#EF4372] text-xs font-font4 border rounded border-[#EF4372] py-2"
                      onClick={() => {
                        const dialog = document.getElementById(
                          "showUnits" + item.name
                        ) as HTMLDialogElement | null; // Type assertion
                        if (dialog) {
                          dialog.showModal();
                        } else {
                          console.error(`Dialog not found: showUnits${item.name}`);
                        }
                      }}
                    >
                      Options
                    </button>
                    <button
                      onClick={() => addToCartHandler(item)}
                      className="w-1/2 text-[#EF4372] text-xs font-font4 border rounded border-[#EF4372] py-2"
                    >
                      Add to Cart
                    </button>
                  </div>
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




const ShowUnitsModal = ({item}:any)=>{
  
  const newItem1 = {
    ...item,
    discountedPrice:item.discountedPrice? item.discountedPrice*2 : null,
    name: `2X ${item.name}`,
    unit: `2X ${item.unit}`
  }
  const newItem2 = {
    ...item,
    discountedPrice:item.discountedPrice? item.discountedPrice*4 : null,
    name: `4X ${item.name}`,
    unit: `4X ${item.unit}`
  }


  const dispatch = useDispatch()
  const addToCartHandler = (item:ProductType)=>{
    dispatch(addToCart({
      ...item, quantity:1
    }))

    toast.success('Successfully added to cart')
}
 
 
 
 
  return (
    <dialog id={'showUnits'+item.name} className="modal modal-middle sm:modal-middle">
  <div className="modal-box w-full w-11/12 !max-w-[400px]">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white">✕</button>
    </form>
    <h2 className="font-semibold text-md dark:text-white">Choose quantity</h2>
    <h4 className="font-bold text-xs text-gray-400 mt-2">{item.name}</h4>
    <div className="flex gap-5 items-center w-full justify-center mt-4">
        <article className="w-5/12 flex flex-col justify-between h-full">
        <div className="w-full flex flex-col">
        <Image src={newItem1.img1? newItem1.img1 : ''} width={400} className="w-full" height={400} alt={newItem1.name}/>
        <p className="font-font1 text-sm mt-2 dark:text-white"> 2 X {item.unit}</p>
        <p className="font-font2 text-sm mt-1 dark:text-white">₹{newItem1.discountedPrice}</p>
        </div>
        <button onClick={()=> addToCartHandler(newItem1)} className="w-full text-[#EF4372] text-xs font-font4 border rounded border-[#EF4372] py-2 mt-3">
                  Add to Cart
        </button>
        </article>
        <article className="w-5/12 flex flex-col justify-between h-full">
        <div className="w-full flex flex-col">
        <Image src={newItem2.img1? newItem2.img1 : ''} width={400} className="w-full" height={400} alt={newItem2.name}/>
        <p className="font-font1 text-sm mt-2 dark:text-white"> 4 X {item.unit}</p>
        <p className="font-font2 text-sm mt-1 dark:text-white">₹{newItem2.discountedPrice}</p>
        </div>
        <button onClick={()=> addToCartHandler(newItem2)} className="w-full text-[#EF4372] text-xs font-font4 border rounded border-[#EF4372] py-2 mt-3">
                  Add to Cart
        </button>
        </article>
    </div>
    <div className="modal-action">
    </div>
  </div>
</dialog>
  )
}