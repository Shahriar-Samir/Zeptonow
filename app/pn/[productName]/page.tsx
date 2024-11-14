'use client'


import { getProduct } from '@/config/products';
import { ProductType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Product = (props:{params:{productName:string}}) => {
    const {params:{productName}} = props
    const [product,setProduct] = useState<ProductType>({name:''})
    useEffect(()=>{
        getProduct(productName.split('%20').join(' ').replace('%26','&').replace('%2F','/'),setProduct)
    },[])    

    return (
        <main className='mt-5 '>
            <section className='flex flex-col md:flex-row gap-14  px-5 '>
                <article className='w-full md:w-1/2 h-full'>
                <figure className=' flex h-[80vh] justify-center items-center h-full border rounded-lg'>
          
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-3/4">
        <SwiperSlide>
                  <Image width={1000} height={1000} alt={product.name?product?.name?.replace('%25','%').replace('%2F','/').replace('%7C','|').replace("%E2%80%99", "'").replace('%2C',',').replace('%2C',','): ''} className='w-100' src={product?.img1? product?.img1:''}/>
        </SwiperSlide>
        <SwiperSlide>
                  <Image width={1000} height={1000} alt={product.name?product?.name?.replace('%25','%').replace('%2F','/').replace('%7C','|').replace("%E2%80%99", "'").replace('%2C',',').replace('%2C',','): ''} className='w-100' src={product?.img1? product?.img1:''}/>
        </SwiperSlide>
        <SwiperSlide>
                  <Image width={1000} height={1000} alt={product.name?product?.name?.replace('%25','%').replace('%2F','/').replace('%7C','|').replace("%E2%80%99", "'").replace('%2C',',').replace('%2C',','): ''} className='w-100' src={product?.img1? product?.img1:''}/>
        </SwiperSlide>

      </Swiper>
                </figure>
                <section className='mt-10'>
                    <h1 className='font-font4'>About Product</h1>
                    <ul className='list-disc text-gray-500 font-font2 ps-4 flex flex-col gap-2 mt-4'>
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
                    <div className='flex gap-1 bg-[#F6F6F6] inline w-max p-1 rounded font-font3 text-sm'><Image height={15} width={15} alt='clock' src='/icons/clock-primary.svg'/> 9 Mins</div>
                    <h1 className='font-font4 text-xl mt-3'>{product?.name?.replace('%25','%').replace('%2F','/').replace('%7C ','| ').replace('%7C ','| ').replace("%E2%80%99", "'").replace('%2C',',').replace('%2C',',')}</h1>
                    <Link href='#' className='text-[#950EDB] font-font3 text-md'>See all {product?.model} products</Link>
                    <div className='flex flex-col mt-5 gap-5'>
                    <h1 className='text-gray-600'>{product?.unit}</h1>
                    <div className='flex gap-3 items-center'>
                    <h1 className='font-font4 text-2xl'>₹{product?.discountedPrice}</h1>
                    {product?.discount? <h1 className='text-gray-600 line-through'>₹{product?.price}</h1> : ''}
                    {product?.discount? <div className='text-xs font-font4 text-white py-1 px-2 rounded-md bg-gradient-to-b from-[#7006A0] to-[#A201EC]'>{product?.discount}% Off</div> : ''}
                    </div>
                    <button className='bg-[#ef4372] px-10 rounded-md py-3 font-font3 text-white border-none w-max mt-8'>Add</button>
                    </div>
                    </section>
                    <section className='mt-5 flex flex-col gap-5'>
                        <h1 className='font-font4 text-lg mt-5'>How it Works</h1>
                        <div className='flex gap-4 items-center'>
                            <Image width={80} height={80} alt='do-not-blink' className='border rounded-sm' src='/productDetails/place-order.svg'/>
                            <div className='gap-2'>
                                <h1 className='font-font2 text-md'>Open the app</h1>
                                <p className='font-font2 text-gray-400'>Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Image width={80} height={80} alt='do-not-blink' className='border rounded-sm' src='/productDetails/do-not-blink.svg'/>
                            <div className='gap-2'>
                                <h1 className='font-font2 text-md'>Place an order</h1>
                                <p className='font-font2 text-gray-400'>Add your favourite items to the cart & avail the best offers</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Image width={80} height={80} alt='do-not-blink' className='border rounded-sm' src='/productDetails/enjoy.svg'/>
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