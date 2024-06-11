"use client"
import Image from "next/image";
import Homes from "./components/Home";
import cat1 from './image/cat_01.webp'
import cat2 from './image/cat_02.webp'
import cat3 from './image/cat_03.webp'
import Recipe from "./components/Recipe";
import { useState } from "react";
import { ChatBubbleBottomCenterTextIcon, HomeIcon, PhoneIcon, RectangleGroupIcon, WalletIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (
  
      

      <div >
      <p className='text-[#fff] bg-[#c12126] font-normal text-[12px] md:text-[22px] py-3 font-Compaign text-center '>Dont miss out! Follow us on social media for exclusive daily deals and updates!</p> 
      <Homes/>

      <div className="w-full text-[#fff] block mt-[100px] md:mt-0 md:flex  text-[35px] font-semibold ">
        

        
        <div className=" ">
        <div className="absolute p-[60px] md:p-[100px]">
        <p>Herbs & Spice</p>
        <p className="mt-[-20px]">Blends</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        </div>
          <Image src={cat1} className=" w-full h-auto" alt=""/>
        </div>

        <div className=" ">
        <div className="absolute p-[60px] md:p-[100px]">
        <p>Curry</p>
        <p className="mt-[-20px]">Blends</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        </div>
          <Image src={cat2} className=" w-full h-auto" alt=""/>
        </div>

        <div className=" ">
        <div className="absolute p-[60px] md:p-[100px]">
        <p>Single</p>
        <p className="mt-[-20px]">Spices</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        </div>
          <Image src={cat3} className=" w-full h-auto" alt=""/>
        </div>


        </div>

        <div>
         <Recipe/>
        </div>




        <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto shadow-[2px_3px_5px_black] bg-[#ffffff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
        
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                ><div className="flex gap-x-6 hover:text-[#45aad7]">
                   <HomeIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
                   <p className="text-[#272828] font-medium text-[15px]">Home</p>
                </div>
               
                </a>

               
                <a
                 href="#offres"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                ><div className="flex gap-x-6 hover:text-[#45aad7]" >
                   <RectangleGroupIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
                   <p className="text-[#272828] font-medium text-[15px]"> Our Solutions</p>
                </div>
               
                </a>
                <a
                 href="#offres"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                ><div className="flex gap-x-6 hover:text-[#45aad7]" >
                   <WalletIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
                   <p className="text-[#272828] font-medium text-[15px]"> Services</p>
                </div>
               
                </a>
                <a
                
                 href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                ><div  className="flex gap-x-6 hover:text-[#45aad7]"  >
                   <PhoneIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
                   <p className="text-[#272828] font-medium text-[15px]"> Get In Touch</p>
                </div>
               
                </a>
                <a
                 href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                ><div  className="flex gap-x-6 hover:text-[#45aad7]"  >
                   <ChatBubbleBottomCenterTextIcon className="h-7 w-7 text-[#616f8d] mt-0 hover:text-white" aria-hidden="true"/>
                   <p className="text-[#272828] font-medium text-[15px]"> About Us</p>
                </div>
               
                </a>
      
              </div>

              
            
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      </div>
      
    

    
  
  );
}
