'use client'


import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type subCategoryType = {
    path: string,
    img:string,
    title:string
}

const Sidebar = () => {

    const path = usePathname()

    console.log(path)

    const subcategoires:subCategoryType[] = [
        {
            path: '/cn/tea-coffee-more/top-picks',
            img: '/category/teaCoffeeMore/1.webp',
            title:'Top Picks'
        },
        {
            path: '/cn/tea-coffee-more/coffee',
            img: '/category/teaCoffeeMore/2.webp',
            title:'Coffee'
        },
        {
            path: '/cn/tea-coffee-more/tea',
            img: '/category/teaCoffeeMore/3.webp',
            title:'Tea'
        },
        {
            path: '/cn/tea-coffee-more/drink-mixes',
            img: '/category/teaCoffeeMore/4.webp',
            title:'Drink Mixes'
        },
        {
            path: '/cn/tea-coffee-more/green-herbal-tea',
            img: '/category/teaCoffeeMore/5.webp',
            title:'Green & Herbal Tea'
        },
        {
            path: '/cn/tea-coffee-more/milk-drink-mixes',
            img: '/category/teaCoffeeMore/6.webp',
            title:'Milk Drink'
        },
        {
            path: '/cn/tea-coffee-more/ready-to-drink',
            img: '/category/teaCoffeeMore/7.webp',
            title:'Ready To Drink'
        },
    ]
    return (
        <>
        <aside className='w-[180px] border p-0 h-[100vh] z-10 sticky top-0'>
                <ul>
                    {subcategoires.map(item=>{
                        return <li key={item.title}>
                            <Link href={item.path} className={path===item.path? 'border-s-5 border-[#950EDB] w-full py-3 flex gap-2 items-center  bg-[#F7E4FF] font-font4 text-[#7C0AB1] text-sm px-4 ' : 'ps-4 w-full py-3 flex gap-2 items-center font-font1 text-sm'}>
                                    <Image width={45} height={45} alt={item.title} className='rounded-full bg-[#F7F0FA]' src={item.img}/>
                                    <p className=''>{item.title}</p>
                               </Link>
                        </li>
                    })}
                </ul>
        </aside>
        </>
    );
};

export default Sidebar;