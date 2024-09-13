/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react'
import headerpic from "../image/headepic.png"
import headerpic1 from "../image/headerpics.png"
import headerpic2 from "../image/headpic3.png"
import arrowleft from "../image/Screenshot_2024-07-07_030010-removebg-preview.png"
import artpic from "../image/kelelspice.png"
import Image from 'next/image'
import { ArrowDownCircleIcon, Bars3Icon, ChatBubbleBottomCenterTextIcon, HomeIcon, PhoneIcon, RectangleGroupIcon, WalletIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { motion, useAnimation } from 'framer-motion'
import {Antonio, Open_Sans} from 'next/font/google'
import Link from 'next/link'
import logo from "../image/Kele-spice-logo.png"
import { GoHorizontalRule } from "react-icons/go";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { PiArrowBendDownLeft } from "react-icons/pi";

const antonio = Antonio({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });
export default function Header() {  
  const controls = useAnimation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const urlpic = "https://thespiceshop.co.uk/cdn/shop/files/logo_new.png?v=1674147259&width=352";
  const [bgColor, setBgColor] = useState('#bd1f17')
  const [scroll, setScroll] = useState(false)

 


 

  useEffect(() => {
    // Function to change the message
    function changeBg() {
      if (window.scrollY >= 90) {
        setBgColor('#fff')
      }
      else {
        setBgColor('#bd1f17')
      }
     
    }
    // Call the function when the component mounts or reloads
    changeBg();
  }, []); 
  return (
    <div className={`bg-[${bgColor}] w-full h-fit pb-[0px] border-b-[0px] shadow-xl`}  >

      
      <motion.div initial={{ opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} animate={controls} viewport={{once:true}}>
      {/* <div className="flex items-center justify-between px-3 pt-3 lg:hidden">
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
          </div> */}

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
                 href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-[#f2f2f2] hover:text-[#45aad7]"
                ><div  className="flex gap-x-6 text-[#303030]  hover:text-[#c12126]"  >
                   <PhoneIcon className="h-7 w-7  mt-0 hover:text-white" aria-hidden="true"/>
                   <p className=" font-medium text-[15px]">Contact Us</p>
                </div>
               
                </a>
                <a href="http://">
                <div className='bg-[#ecba23] w-fit mt-5 text-white uppercase hover:cursor-pointer font-semibold rounded-[5px]'>
                    <p className='px-6 py-2'>Order now</p>
                </div></a>
      
              </div>

            
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <div className={`flex bg-[${bgColor}] border-b-[1px] border-[#ec4242] text-white justify-between w-full items-center mx-auto pt-0 px-5 lg:px-[150px] text-[20px] shadow-xl font-normal gap-x-5`} >
       {/* <div className='rounded-[35px]'>
       <p className='text-[25px] rounded-[35px] text-white font-extrabold '>KeleSpice<span className='text-[#ff830e]'>..</span></p>
       </div>  */}
       <div>
        <Image src={logo} className='w-[240px]' alt=''/>
       </div>
         <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-11 " aria-hidden="true" />
            </button>
          </div>
         <div className=' py-2 uppercase font-medium hidden text-white lg:flex gap-x-[100px]'>
         <Link href='/'>
         <p className={antonio.className}>Home</p>
         </Link >
         <Link href='./#product'>
         <p className={antonio.className}>Product</p>
         </Link>
          <Link href='/about'>
          <p className={antonio.className}>About Us</p>
          </Link>
         <Link href='/contact'>
         <p className={antonio.className}>Contact Us</p>
         </Link>
         
         </div>
         <Link href="https://api.whatsapp.com/">
        
         <div className='bg-[#ecba23] hidden lg:block text-white uppercase hover:cursor-pointer font-semibold rounded-[5px]'>
            <p className='px-6 py-2'>Order now</p>
          </div>
          </Link>
        </div>
      </motion.div>



      
    </div>
  )
}
