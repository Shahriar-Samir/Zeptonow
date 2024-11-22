import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t pt-5 mx-5 mt-20 ">
      <h6 className="font-font3 text-black text-xl dark:text-white">
        Categories
      </h6>
      <footer className="footer py-5 pb-10">
        <nav className="flex flex-col gap-4">
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Fruits & Vegetables
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Baby Food
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Breakfast & Sauces
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Cleaning Essentials
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Homegrown Brands
          </Link>
        </nav>
        <nav className="flex flex-col gap-4">
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Atta, Rice, Oil & Dals
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Dairy, Bread & Eggs
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Tea, Coffee & More
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Home Needs
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Paan Corner
          </Link>
        </nav>
        <nav className="flex flex-col gap-4">
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Masala & Dry Fruits
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Cold Drinks & Juices
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Biscuits
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Electricals & Accessories
          </Link>
        </nav>
        <nav className="flex flex-col gap-4">
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Sweet Cravings
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Munchies
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Makeup & Beauty
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Hygiene & Grooming
          </Link>
        </nav>
        <nav className="flex flex-col gap-4">
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Frozen Food & Ice Creams
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Meats, Fish & Eggs
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Bath & Body
          </Link>
          <Link
            className="link link-hover text-black dark:text-white font-font2"
            href="#"
          >
            Health & Baby Care
          </Link>
        </nav>
      </footer>
      <footer className="footer grid-flow-row lg:grid-flow-col text-base-content border-t px-5 py-4 pb-28 gap-32">
        <section className="flex flex-col">
          <Image
            alt="logo2"
            height={100}
            src="/primary-logo2.svg"
            width={100}
          />
          <div className="flex gap-5 items-center">
            <Image alt="" height={23} src="/icons/instagram.svg" width={23} />
            <Image alt="" height={23} src="/icons/twitter.svg" width={23} />
            <Image alt="" height={23} src="/icons/facebook.svg" width={23} />
            <Image alt="" height={23} src="/icons/linkedin.svg" width={23} />
          </div>
          <p className="w-max dark:text-white">
            © KiranaKart Technologies Private Limited
          </p>
        </section>
        <nav className="flex flex-col gap-4">
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Home
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Delivery Areas
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Careers
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Customer Support
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Press
          </Link>
        </nav>
        <nav className="flex flex-col gap-4">
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Terms of Use
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Responsible Disclosure Policy
          </Link>
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Mojo - a Zepto Blog
          </Link>
        </nav>
        <nav className="flex flex-col gap-4">
          <Link
            className="link link-hover font-font2 text-black dark:text-white"
            href="#"
          >
            Download App
          </Link>
          <button className="text-black flex gap-2 border  border-[#D1D5DB] rounded-lg font-font2 py-4 px-5 xl:px-10 w-max dark:bg-white">
            <Image alt="" height={15} src="/icons/play-store.svg" width={15} />{" "}
            Get it on play store
          </button>
          <button className="text-black flex gap-2 border  border-[#D1D5DB] rounded-lg font-font2 py-4  px-5 xl:px-10 w-max dark:bg-white">
            <Image alt="" height={15} src="/icons/app-store.svg" width={15} />
            Get it on app store
          </button>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
