'use client'


import { getProduct } from '@/config/products';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoArrowBackSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { addToCart } from '@/lib/features/cart/cart';
import { ProductType } from '@/types';

const Product = (props:{params:{productName:string}}) => {
    const {params:{productName}} = props
    const [product,setProduct] = useState<ProductType>({name:''})
    const dispatch = useDispatch()
    const router = useRouter()
    
    const goBack = ()=> router.back()

    const addToCartHandler = (item:any)=>{
        dispatch(addToCart({
          ...item, quantity:1
        }))
  
        toast.success('Successfully added to cart')
    }


    useEffect(()=>{
        getProduct(productName.split('%20').join(' ').replace('%26','&').replace('%2F','/'),setProduct)
    },[])    

    return (
        <main className='mt-5 '>
                <button className='flex gap-2 items-center btn ms-5 bg-[#f1e6ff] dark:hover:bg-[#f1e6ff] hover:bg-[#950EDB] dark:bg-[#950EDB] hover:text-white dark:hover:text-black  dark:text-white' onClick={goBack}><IoArrowBackSharp /> Back</button>
            <section className='flex flex-col md:flex-row gap-14  px-5 mt-10'>
                <article className='w-full md:w-1/2 h-full'>
                <figure className=' flex h-[80vh] justify-center items-center h-full border rounded-lg'>
          
                <Swiper className="mySwiper w-3/4" modules={[Navigation]} navigation={true}>
        <SwiperSlide>
                  <Image alt={product.name?product?.name?.replace('%25','%').replace('%2F','/').replace('%7C','|').replace("%E2%80%99", "'").replace('%2C',',').replace('%2C',','): ''} className='w-100' height={1000} src={product?.img1? product?.img1:''} width={1000}/>
        </SwiperSlide>
        <SwiperSlide>
                  <Image alt={product.name?product?.name?.replace('%25','%').replace('%2F','/').replace('%7C','|').replace("%E2%80%99", "'").replace('%2C',',').replace('%2C',','): ''} className='w-100' height={1000} src={product?.img1? product?.img1:''} width={1000}/>
        </SwiperSlide>
        <SwiperSlide>
                  <Image alt={product.name?product?.name?.replace('%25','%').replace('%2F','/').replace('%7C','|').replace("%E2%80%99", "'").replace('%2C',',').replace('%2C',','): ''} className='w-100' height={1000} src={product?.img1? product?.img1:''} width={1000}/>
        </SwiperSlide>

      </Swiper>
                </figure>
                <section className='mt-10 '>
                    <h1 className='font-font4 dark:text-white'>About Product</h1>
                    <ul className='list-disc text-gray-500 font-font2 ps-4 flex flex-col gap-2 mt-4 dark:text-white'>
                        {product?.description? <li>Description : {product?.description}</li> : ''}
                        <li>Country of Origin : {product?.origin}</li>
                        <li>Shelf Life : {product?.life}</li>
                        {product?.ingredients? <li>Ingredients : {product?.ingredients}</li> : ''}
                        {product?.FSSAILicense? <li>FSSAI License : {product?.FSSAILicense}</li> : ''}
                        <li>Manufacturer Name : {product?.manufacturer}</li>
                        {product?.manufacturerAddress? <li>Manufacturer Address : {product?.manufacturerAddress}</li> :''}
                        {product?.nutritionalInfo? <li>Nutritional Info : {product?.nutritionalInfo}</li> :''}
                    </ul>
                </section>
                </article>
                <article className='w-full md:w-1/2'>
                    <section className='pb-14 border-b-1'>
                    <div className='flex gap-1 bg-[#F6F6F6] inline w-max p-1 rounded font-font3 text-sm'><Image alt='clock' height={15} src='/icons/clock-primary.svg' width={15}/> 9 Mins</div>
                    <h1 className='font-font4 text-xl mt-3 dark:text-white' >{product?.name?.replace('%25','%').replace('%2F','/').replace('%7C ','| ').replace('%7C ','| ').replace("%E2%80%99", "'").replace('%2C',',').replace('%2C',',')}</h1>
                    <Link className='text-[#950EDB] font-font3 text-md' href='#'>See all {product?.model} products</Link>
                    <div className='flex flex-col mt-5 gap-5'>
                    <h1 className='text-gray-600 dark:text-white'>{product?.unit}</h1>
                    <div className='flex gap-3 items-center'>
                    <h1 className='font-font4 text-2xl dark:text-white'>₹{product?.discountedPrice}</h1>
                    {product?.discount? <h1 className='text-gray-600 line-through'>₹{product?.price}</h1> : ''}
                    {product?.discount? <div className='text-xs font-font4 text-white py-1 px-2 rounded-md bg-gradient-to-b from-[#7006A0] to-[#A201EC]'>{product?.discount}% Off</div> : ''}
                    </div>
                    <button className='bg-[#ef4372] px-10 rounded-md py-3 font-font3 text-white border-none w-max mt-8' onClick={()=>addToCartHandler(product)}>Add</button>
                    </div>
                    </section>
                    <section className='mt-5 flex flex-col gap-5 dark:text-white'>
                        <h1 className='font-font4 text-lg mt-5'>How it Works</h1>
                        <div className='flex gap-4 items-center'>
                            <Image alt='do-not-blink' className='border rounded-sm' height={80} src='/productDetails/place-order.svg' width={80}/>
                            <div className='gap-2'>
                                <h1 className='font-font2 text-md'>Open the app</h1>
                                <p className='font-font2 text-gray-400'>Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Image alt='do-not-blink' className='border rounded-sm' height={80} src='/productDetails/do-not-blink.svg' width={80}/>
                            <div className='gap-2'>
                                <h1 className='font-font2 text-md'>Place an order</h1>
                                <p className='font-font2 text-gray-400'>Add your favourite items to the cart & avail the best offers</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Image alt='do-not-blink' className='border rounded-sm' height={80} src='/productDetails/enjoy.svg' width={80}/>
                            <div className='gap-2'>
                                <h1 className='font-font2 text-md'>Get free delivery</h1>
                                <p className='font-font2 text-gray-400'>Experience lighting-fast speed & get all your items delivered in 10 minutes</p>
                            </div>
                        </div>
                    </section>
                </article>
            </section>
        </main>
    );
};

export default Product;