'use client'

import NextLink from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios'
import VoiceRecorder from "./VoiceCoverter";

export const Navbar = () => {
    const [locations, setLocations] = useState([])
    const [currentLocation, setLocation] = useState('')
    const [theme,setTheme] = useState('light')
    

  const getLocations = (e)=>{
      const location = e.target.value.length===0? '0' : e.target.value

      try{
        axios.get(`http://localhost:3000/api/geolocation/${location}`)
         .then(res=>{
           setLocations(res.data.suggestions)
         })
     }
     catch(err){
         console.log(err)
     }
  }

    
    const [modal, setModal] = useState<HTMLDialogElement | null>(null);


    const changeTheme = ()=>{
      if(theme==='light'){
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        setTheme('dark')
        document.getElementById('sun')?.classList.remove('swap-off')
        document.getElementById('sun')?.classList.add('swap-on')
        document.getElementById('moon')?.classList.remove('swap-on')
        document.getElementById('moon')?.classList.add('swap-off')
      }
      else{
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        setTheme('light')
        document.getElementById('moon')?.classList.remove('swap-off')
        document.getElementById('moon')?.classList.add('swap-on')
        document.getElementById('sun')?.classList.remove('swap-on')
        document.getElementById('sun')?.classList.add('swap-off')
      }
    }

    useEffect(()=>{
      if(theme==='light'){
        document.getElementById('moon')?.classList.remove('swap-off')
        document.getElementById('moon')?.classList.add('swap-on')
        document.getElementById('sun')?.classList.remove('swap-on')
        document.getElementById('sun')?.classList.add('swap-off')
      }
      else{
        document.getElementById('sun')?.classList.remove('swap-off')
        document.getElementById('sun')?.classList.add('swap-on')
        document.getElementById('moon')?.classList.remove('swap-on')
        document.getElementById('moon')?.classList.add('swap-off')
      }
      document.querySelector('html')?.setAttribute("data-theme",theme)
    },[theme])


    useEffect(() => {

      const modalElement = document.getElementById('my_modal_1') as HTMLDialogElement;
      setModal(modalElement);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            axios.get(`https://api.opencagedata.com/geocode/v1/json?key=c87ff59feccf4d21a22f30952ae0d625&q=${position.coords.latitude}+${position.coords.longitude}`)
              .then(res => {
                const currentLocation = res.data.results[0].components;
                setLocation(`${currentLocation.county}, ${currentLocation.state}`);
              })
          },
          (error) => {
            console.log(error)
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }, []);

    const openModal = () => {
      modal?.showModal();  
    };

    return (
      <nav className="flex flex-col md:flex-row justify-between md:items-center bg-[#D1ABFF] md:bg-gradient-to-b md:from-[#EEE0FF] md:to-[#FEFDFF] px-2 py-4 pb-8 md:px-16 gap-5 sticky top-0 z-50 dark:bg-[#1d232a] dark:md:bg-gradient-to-b dark:md:from-[#1d232a] dark:md:to-[#1d232a] dark:text-white dark:border-b">
        <div className="flex gap-2 md:gap-5 items-center">
          <div className="gap-3">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Image height={54} width={54} alt="user" src="/icons/user.svg" className="md:hidden "/>
              <Image width={90} height={30} alt={'logo'} src="/primary-logo.svg" className="hidden md:inline min-w-[90px] min-h-[30px]"/>
            </NextLink>
          </div>
          <div>
            <h1 className="font-font2 font-bold text-lg w-max">Delivery in 
              <span className="font-font5 "> 7 Mins</span>
            </h1>
            <button onClick={openModal} className="text-sm font-semibold font-font3 w-max">
              {currentLocation?.slice(0, 44)} {currentLocation?.length > 44 ? '...' : ''}
            </button>

            {/* Modal */}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-white dark:bg-[#1d232a]">
                <div className="flex items-center justify-center py-2 ">
                  <form method="dialog">
                    {/* Close button for the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-font4 text-center ">Your Location</h3>
                </div>
                <div className="border-t"></div>
                <label  className="input input-bordered flex items-center gap-2 mt-5 !bg-[#f6f3f8]">
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
  <input onChange={getLocations} type="text" className="grow  text-sm text-black" placeholder="Search a new address" />
</label>

<section className="h-[40vh] overflow-y-auto">
         {
         locations.map(place=>{
          return <div key={place.latitude+place.longtitude} className="flex py-4 gap-4 border-b cursor-pointer">
              <Image height={17} width={17} alt={place.formatted} className="" src="/icons/location-maker.svg"/>
              <div>
                  <h1 className="text-md font-font4">{place.city? place.city : place.formatted}</h1>
                  <h2 className="text-sm font-font1 text-[#b0aab3]">{place.formatted}</h2>
              </div>
          </div>
         })
         }
</section>
              </div>
            </dialog>
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="flex w-full bg-[#FFFFFF] rounded-lg py-3 px-4 gap-5">
            <Image height={50} width={50} alt="search icon" src="/search-icon.svg" className="h-[20px] w-[20px]" />
            <p className="font-font1 text-black">Search for </p>
          </div>
          <div className="hidden md:flex gap-5">
            <VoiceRecorder/>
            <button className="flex flex-col items-center">
              <Image height={24} width={24} alt="cart" src="/icons/cart.svg"/>
              <p className="text-xs">Cart</p>
            </button>
          </div>
        </div>

        <label  className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={changeTheme} className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
  id="sun"
    className="h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    id="moon"
    className="h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
      </nav>
    );
};
