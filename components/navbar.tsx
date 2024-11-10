'use client'

import NextLink from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios'

export const Navbar = () => {
    const [location,setLocation] = useState('')

    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;

  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          axios.get(`https://api.opencagedata.com/geocode/v1/json?key=c87ff59feccf4d21a22f30952ae0d625&q=${position.coords.latitude}+${position.coords.longitude}`)
          .then(res=>{
            const currentLocation = res.data.results[0].components
            setLocation(`${currentLocation.county}, ${currentLocation.state}`)
          })
        },
        (error) => {
          console.log(error)
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },[])


  return (

      <nav className="flex flex-col md:flex-row justify-between md:items-center bg-[#D1ABFF] md:bg-gradient-to-b md:from-[#EEE0FF] md:to-[#FEFDFF] px-2 py-4 pb-8 md:px-16 gap-5 sticky top-0 z-50">
      <div className="flex gap-2 md:gap-5 items-center">
        <div className="gap-3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
          <Image height={54} width={54} alt="user" src="/icons/user.svg" className="md:hidden "/>
            <Image width={90} height={30} alt={'logo'} src="/primary-logo.svg" className="hidden md:inline min-w-[90px] min-h-[30px]"/>
          </NextLink>
        </div>
      <div>
        <h1 className="font-font2 font-bold text-lg w-max">Delivery in 
        <span className="font-font5 "> 7 Mins</span></h1>
        <button onClick={()=>modal?.showModal()} className="text-sm font-semibold font-font3 w-max">{location?.slice(0,44)} {location?.length > 44? '...' : ''}</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-white">
    <div className="flex items-center justify-center py-2 ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-font4 text-center ">Your Location</h3>
    </div>
    <div className="border-t">
    <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
    </div>
  </div>
</dialog>
      </div>
      </div>

      <div
        className="flex w-full gap-5"
      >
        <div className="flex w-full bg-[#FFFFFF] rounded-lg py-3 px-4 gap-5">
          <Image height={50} width={50} alt="search icon" src="/search-icon.svg" className="h-[20px] w-[20px] "/>         
          <p className="font-font1">Search for </p>
        </div>
        <div className="hidden md:flex gap-5">
          <button className="flex flex-col items-center">
            <Image height={24} width={24} alt="user" src="/icons/user.svg"/>
            <p className="text-xs">Login</p>
          </button>
          <button className="flex flex-col items-center">
            <Image height={24} width={24} alt="user" src="/icons/cart.svg"/>
            <p className="text-xs">Cart</p>
          </button>
        </div>
      </div>

      </nav>


  );
};
