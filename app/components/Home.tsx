/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import headerpic from "../image/banner_img.webp"
import Image from 'next/image'
import { Bars3Icon, ChatBubbleBottomCenterTextIcon, HomeIcon, PhoneIcon, RectangleGroupIcon, WalletIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import logo from "../image/logospice.jpg"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const urlpic = "https://thespiceshop.co.uk/cdn/shop/files/logo_new.png?v=1674147259&width=352";
  return (
    <div className='bg-[#fec800] w-full h-[700px]'>
      <p className='text-[#fff] bg-[#c12126] font-normal text-[12px] md:text-[22px] py-3 font-Compaign text-center '>Dont miss out! Follow us on social media for exclusive daily deals and updates!</p>   
        
      <div >
      <div className="flex items-center justify-between px-3 pt-3 lg:hidden">
            <a href="#" className="-m-1.5 p-1.5 text-white">
            <img
              className="w-20 h-auto"
              src={urlpic} 
              alt=""
            />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Close menu</span>
              <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>

        <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto shadow-[2px_3px_5px_black] bg-[#f5f5f5] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 text-white">
            <img
              className="w-20 h-auto"
              src={urlpic}
              alt=""
            />
            </a>
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
                ><div className="flex gap-x-6 text-[#303030]  hover:text-[#c12126]">
                   <HomeIcon className="h-7 w-7  mt-0 hover:text-white" aria-hidden="true"/>
                   <p className=" font-medium text-[15px]">Home</p>
                </div>
               
                </a>

                <a
                 href="#offres"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                ><div className="flex gap-x-6 text-[#303030]  hover:text-[#c12126]"  >
                   <RectangleGroupIcon className="h-7 w-7  mt-0 hover:text-white" aria-hidden="true"/>
                   <p className=" font-medium text-[15px]">Product</p>
                </div>
               
                </a>
                <a
                 href="#offres"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                ><div className="flex gap-x-6 text-[#303030]  hover:text-[#c12126]"  >
                   <WalletIcon className="h-7 w-7  mt-0 hover:text-white" aria-hidden="true"/>
                   <p className=" font-medium text-[15px]">About Us</p>
                </div>
                </a>
                <a
                 href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                ><div  className="flex gap-x-6 text-[#303030]  hover:text-[#c12126]"  >
                   <PhoneIcon className="h-7 w-7  mt-0 hover:text-white" aria-hidden="true"/>
                   <p className=" font-medium text-[15px]">Contact Us</p>
                </div>
               
                </a>
      
              </div>

            
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

       <div className='justify-center items-center mx-auto py-4 font-semibold hidden  lg:flex gap-x-[100px]'>
       <Link href='/'>
       <p>Home</p>
       </Link>
        <Link href="#product"  className='hover:cursor-pointer'>
        <p>Product</p></Link>
        <Link href='/about'>
        <p>About Us</p>
        </Link>
        <Link href="#contact"  className='hover:cursor-pointer'>
        <p>Contact Us</p></Link>
       </div>
      </div>

      <div className='block md:flex justify-center items-center mx-auto mt-0  md:mt-[100px] gap-x-10' >
      <motion.div initial={{x: -200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}}viewport={{once:true}}className='px-5 md:px-0 mt-0 md:mt-0 md:hidden block space-y-1 lg:space-y-0 ml-[-10px]'>
            <Image src={headerpic} className="w-[750px] h-auto" alt=''/>
        </motion.div>

        <motion.div  initial={{x: -200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='mt-0 md:mt-[-30px] text-black md:block hidden'>
        <p className='font-bold font-Compaign text-[50px]  md:text-[80px] text-center md:text-start'>The Finest </p>
        <p className='font-bold font-Compaign text-[50px] md:text-[80px] text-center md:text-start mt-[-10px] md:mt-[-50px]'>Spices</p>
        <div className='mt-0 pb-5 text-center md:text-start '>
        <p className='font-normal  text-[23px]'>Ethically sourced</p>
        <p className='font-normal text-medium text-[23px]'>Handcrafted Blends</p>
        </div>
       <div className='px-10 md:px-0'>
       <div className='bg-[#c12126] rounded-[30px] text-center w-full px-10 md:px-0 md:w-[200px] hover:cursor-pointer hover:bg-black hover:text-[#c12126] '>
            <p className='px-0 py-2 font-semibold text-[20px] text-white'>Shop now</p>
        </div>
       </div>


        </motion.div>

        <motion.div  initial={{x: 200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='mt-0 md:mt-[-30px] text-black block md:hidden'>
        <p className='font-bold font-Compaign text-[50px]  md:text-[80px] text-center md:text-start'>The Finest </p>
        <p className='font-bold font-Compaign text-[50px] md:text-[80px] text-center md:text-start mt-[-10px] md:mt-[-50px]'>Spices</p>
        <div className='mt-0 pb-5 text-center md:text-start '>
        <p className='font-normal  text-[23px]'>Ethically sourced</p>
        <p className='font-normal text-medium text-[23px]'>Handcrafted Blends</p>
        </div>
       <div className='px-10 md:px-0'>
       <div className='bg-[#c12126] rounded-[30px] text-center w-full px-10 md:px-0 md:w-[200px] hover:cursor-pointer hover:bg-black hover:text-[#c12126] '>
            <p className='px-0 py-2 font-semibold text-[20px] text-white'>Shop now</p>
        </div>
       </div>
        </motion.div>

        <motion.div  initial={{x: 200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='px-5 md:px-0 mt-6 md:mt-0 md:block hidden'>
            <Image src={headerpic} className="w-[750px] h-auto" alt=''/>
        </motion.div>
        
      </div>

      
    </div>
  )
}
