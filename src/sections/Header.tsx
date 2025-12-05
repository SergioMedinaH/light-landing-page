import ArrowRight from "@/assets/arrow-right.svg";
import Menu from "@/assets/menu.svg";
import logo from "@/assets/logosaas.png";

import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm bg-[#EAEEFE]/50 z-20">
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity.</p>
      <div className="inline-flex gap-1 items-center">
        <p className="">Get started for free </p>
        <ArrowRight className="w-4 h-4 inline-flex"/>
      </div>
    </div>
    <div className="p-5">
      <div className=" flex justify-between items-center">
      <div className="relative">
            <div className="absolute z-10 w-[40px] top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF_24%,#FFDD9B_48%,#C2F0B1_73%,#2FD8FE)] blur-sm"></div>
            <Image draggable="false" src={logo} alt="Saas Image" className="h-10 w-10 relative z-20"/>
      </div>
      
      <Menu className=" h-5 w-5 md:hidden"/>
      <nav className="md:flex gap-6 items-center hidden text-black/60">
        <a href="#" className="">About</a>
        <a href="#" className="">Features</a>
        <a href="#" className="">Customers</a>
        <a href="#" className="">Updates</a>
        <a href="#" className="">Help</a>
        <button className="blackbtn blackbtn-primary">Get for free</button>
      </nav>
      </div>
      
    </div>

    
    </header>
  );
  /*return <div className="text-white">
    <div className="bg-black">
      <div className="h-[46px] flex text-center mx-auto items-center justify-center gap-2 text-sm">
        <p className="text-white/60">This page is included in a free SaaS Website Kit.</p>
        <p className="flex">View the complete Kit <span><ArrowRight/></span></p>
      </div>
    </div>
    <div></div>
  </div>

  <div className="flex p-5 bg-[#EAEEFE] justify-between items-center">
      <div className="relative">
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <div className="bg-[linear-gradient()] absolute top-1/2 right-1/2">deg</div>
      </div>
      <ul className="gap-6 items-center hidden sm:flex">
        <li className="text-black/60">About</li>
        <li className="text-black/60">Features</li>
        <li className="text-black/60">Customers</li>
        <li className="text-black/60">Updates</li>
        <li className="text-black/60">Help</li>
        <button className="text-white font-[16px] bg-black py-[10px] px-[15px] rounded-[10px]">Get for free</button>
      </ul>
      <Menu className="block sm:hidden h-5 w-5"/>

    </div>
  
  ;
  
  */
};
