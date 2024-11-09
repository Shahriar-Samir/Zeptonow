import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='border-t pt-5 mx-4 mt-20'>
                <h6 className="font-font3 text-black text-xl">Categories</h6>
            <footer className="footer py-5 pb-10">
  <nav className='flex flex-col gap-4'>
  <Link href='#' className="link link-hover font-font2 text-black">Fruits & Vegetables</Link>
<Link href='#' className="link link-hover font-font2 text-black">Baby Food</Link>
<Link href='#' className="link link-hover font-font2 text-black">Breakfast & Sauces</Link>
<Link href='#' className="link link-hover font-font2 text-black">Cleaning Essentials</Link>
<Link href='#' className="link link-hover font-font2 text-black">Homegrown Brands</Link>
  </nav>
  <nav className='flex flex-col gap-4'>
  <Link href='#' className="link link-hover text-black font-font2">Atta, Rice, Oil & Dals</Link>
  <Link href='#' className="link link-hover text-black font-font2">Dairy, Bread & Eggs</Link>
  <Link href='#' className="link link-hover text-black font-font2">Tea, Coffee & More</Link>
  <Link href='#' className="link link-hover text-black font-font2">Home Needs</Link>
<Link href='#' className="link link-hover text-black font-font2">Paan Corner</Link>
  </nav>
  <nav className='flex flex-col gap-4'>
  <Link href='#' className="link link-hover text-black font-font2">Masala & Dry Fruits</Link>
  <Link href='#' className="link link-hover text-black font-font2">Cold Drinks & Juices</Link>
  <Link href='#' className="link link-hover text-black font-font2">Biscuits</Link>
  <Link href='#' className="link link-hover text-black font-font2">Electricals & Accessories</Link>
  </nav>
  <nav className='flex flex-col gap-4'>
  <Link href='#' className="link link-hover text-black font-font2">Sweet Cravings</Link>
  <Link href='#' className="link link-hover text-black font-font2">Munchies</Link>
  <Link href='#' className="link link-hover text-black font-font2">Makeup & Beauty</Link>
  <Link href='#' className="link link-hover text-black font-font2">Hygiene & Grooming</Link>
  </nav>
  <nav className='flex flex-col gap-4'>
  <Link href='#' className="link link-hover text-black font-font2">Frozen Food & Ice Creams</Link>
  <Link href='#' className="link link-hover text-black font-font2">Meats, Fish & Eggs</Link>
  <Link href='#' className="link link-hover text-black font-font2">Bath & Body</Link>
  <Link href='#' className="link link-hover text-black font-font2">Health & Baby Care</Link>
  </nav>
</footer>
<footer className="footer text-base-content border-t px-5 py-4 pb-28 gap-32">
  <section className='flex flex-col'>
      <Image height={100} width={100} alt='logo2' src='/primary-logo2.svg'/>
      <div className='flex gap-5 items-center'>
        <Image height={23} width={23} alt='' src='/icons/instagram.svg'/>
        <Image height={23} width={23} alt='' src='/icons/twitter.svg'/>
        <Image height={23} width={23} alt='' src='/icons/facebook.svg'/>
        <Image height={23} width={23} alt='' src='/icons/linkedin.svg'/>
      </div>
      <p className='w-max'>© KiranaKart Technologies Private Limited</p>
  </section>
<nav className='flex flex-col gap-4'>
<Link href='#' className="link link-hover font-font2 text-black">Home</Link>
<Link href='#' className="link link-hover font-font2 text-black">Delivery Areas</Link>
<Link href='#' className="link link-hover font-font2 text-black">Careers</Link>
<Link href='#' className="link link-hover font-font2 text-black">Customer Support</Link>
<Link href='#' className="link link-hover font-font2 text-black">Press</Link>
  </nav>
  <nav className='flex flex-col gap-4'>
  <Link href='#' className="link link-hover font-font2 text-black">Privacy Policy</Link>
<Link href='#' className="link link-hover font-font2 text-black">Terms of Use</Link>
<Link href='#' className="link link-hover font-font2 text-black">Responsible Disclosure Policy</Link>
<Link href='#' className="link link-hover font-font2 text-black">Mojo - a Zepto Blog</Link>

  </nav>
  <nav className='flex flex-col gap-4'>
  <Link href='#' className="link link-hover font-font2 text-black">Download App</Link>
    <button className='text-black flex gap-2 border  border-[#D1D5DB] rounded-lg font-font2 py-4 px-10'><Image height={15} width={15} alt='' src='/icons/play-store.svg'/> Get it on play store</button>
    <button className='text-black flex gap-2 border  border-[#D1D5DB] rounded-lg font-font2 py-4 px-10'><Image height={15} width={15} alt='' src='/icons/app-store.svg'/>Get it on app store</button>
  </nav>
</footer>
        </footer>
    );
};

export default Footer;