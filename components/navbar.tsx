import NextLink from "next/link";
import Image from "next/image";

export const Navbar = () => {
 

  return (

      <nav className="flex flex-col md:flex-row justify-between md:items-center bg-[#D1ABFF] md:bg-gradient-to-b md:from-[#EEE0FF] md:to-[#fcf9ff] px-2 py-4 md:px-16 gap-5 sticky top-0 z-20">
      <div className="flex gap-5 items-center">
        <div className="gap-3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image width={90} height={30} alt={'logo'} src="/primary-logo.svg" className="hidden md:inline min-w-[90px] min-h-[30px]"/>
          </NextLink>
        </div>
      <div>
        <h1 className="font-font2 font-bold text-lg w-max">Delivery in 
        <span className="font-font5 "> 7 Mins</span></h1>
        <button className="text-sm font-semibold font-font3 w-max">Pocket 25, Subhash Placesdf dsasdf sd</button>
      </div>
      </div>

      <div
        className="flex w-full gap-5"
      >
        <div className="flex w-full bg-[#FFFFFF] rounded-lg py-3 px-4 gap-5">
          <Image height={50} width={50} alt="search icon" src="/search-icon.svg" className="h-[20px] w-[20px] hidden md:inline"/>         
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
