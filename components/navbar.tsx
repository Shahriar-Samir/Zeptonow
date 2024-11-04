import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import Image from "next/image";

export const Navbar = () => {
 

  return (
    <NextUINavbar className="bg-gradient-to-b from-[#EEE0FF] to-[#fcf9ff] py-4 px-16 "  maxWidth="xl" position="sticky" >
      <NavbarContent className="justify-center" data-justify="center">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image width={90} height={30} alt={'logo'} src="/primary-logo.svg"/>
          </NextLink>
        </NavbarBrand>
      <div>
        <h1 className="font-font2 font-bold text-xl">Delivery in 
        <span className="font-font5 text-lg"> 7 Mins</span></h1>
        <button className="text-sm font-semibold font-font3">Pocket 25, Subhash Place, Rohini, Delhi, Delhi</button>
      </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex w-full gap-5"
      >
        <NavbarItem className="hidden lg:flex w-full bg-[#FFFFFF] rounded-lg py-3 px-4 gap-5">
          <Image height={50} width={50} alt="search icon" src="/search-icon.svg" className="h-[20px] w-[20px]"/>         
          <p className="font-font1">Search for </p>
        </NavbarItem>
        <NavbarItem className="hidden md:flex gap-5">
          <button className="flex flex-col items-center">
            <Image height={24} width={24} alt="user" src="/icons/user.svg"/>
            <p className="text-xs">Login</p>
          </button>
          <button className="flex flex-col items-center">
            <Image height={24} width={24} alt="user" src="/icons/cart.svg"/>
            <p className="text-xs">Cart</p>
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
