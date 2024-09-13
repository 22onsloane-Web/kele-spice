/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
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
export default function Home() {
  const controls = useAnimation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const urlpic = "https://thespiceshop.co.uk/cdn/shop/files/logo_new.png?v=1674147259&width=352";
  return (
    <div className='bg-[#bd1f17] w-full  lg:h-fit pb-[6vw] pt-[2vw] lg:pt-[60px] ' >
      {/* <p className='text-[#fff] bg-[#c12126] font-normal text-[12px] md:text-[22px] py-3 font-Compaign text-center '>Dont miss out! Follow us on social media for exclusive daily deals and updates!</p>   
         */}
 

      <div className='block md:flex justify-between mx-auto mt-0  py-[0vw] lg:py-[150px] px-[2vw] lg:px-[13vw] h-auto' >


      <motion.div initial={{x: -200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} animate={controls} viewport={{once:true}}>
            <div className='text-[#ecba23] flex gap-x-3 text-[20px]'>
              <GoHorizontalRule className='w-[50px] h-auto font-light '/>
             <div className='py-2 uppercase'>
             <p className={antonio.className}>Fragrant. Zesty. Hot</p>
             </div>
            </div>

            <div className={antonio.className}>
              <p className='font-semibold text-[7vw] lg:text-[4vw] pt-0 text-white uppercase w-fit tracking-tight'>Enhance Your</p>
              <p className='font-semibold text-[7vw] lg:text-[4vw] mt-0 lg:mt-[-24px] text-white uppercase w-fit tracking-tight'> Culinary Creations</p>
            </div>
            <div className={open_sans.className}>
              <p className='w-[550px] font-medium mt-4 hidden lg:block'>Welcome to SpiceSavvy, your ultimate destination for flavorful spices! Elevate your culinary creations with our premium, aromatic blends. Satisfaction Guaranteed!</p>
            </div>
            
            <div className='flex justify-center -ml-[2vw]'>
            <Image src={headerpic} className="w-full h-auto mt-[0vh] block lg:hidden " alt=''/>
            </div>

            <div className='px-[10vw] pb-[3vw]'>
            <div className='bg-[#ecba23] text-[20px] mt-8 hover:scale-110 transition duration-200 lg:w-fit text-white uppercase hover:cursor-pointer font-semibold rounded-[5px] flex justify-center text-center w-full'>
            <p className='px-6 py-2'>Discover</p>
          </div>
            </div>
          </motion.div>

      <motion.div initial={{x: 200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} animate={controls} viewport={{once:true}} className='hidden lg:block'>
        <div>
        <Image src={headerpic} className="w-[600px] h-auto mt-[-12vh] " alt=''/>
        <div className='mx-auto justify-center ml-4 flex mt-3'>
        <Image src={arrowleft} className='w-auto h-[80px] -mt-3' alt=''/>
        </div>
        <div className='flex mt-[-20px] justify-start mx-auto'>
        <div className='mt-[-50px]'>
          <div className={antonio.className}>
          <p className='text-[#ecba23] flex gap-x-3 text-[3vw]'> R 50.00</p>
          </div>
          <p className='w-[400px] '>Delight in our Herbs & Aromatics blend—crafted to elevate every dish with rich flavors and invigorating aromas.</p>
        </div>
        </div>
        </div>

        </motion.div>
        
      {/* <motion.div initial={{x: -200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}}viewport={{once:true}}className='px-5 md:px-0 mt-0 md:mt-0 md:hidden block space-y-1 lg:space-y-0 ml-[-10px]'>
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
            <Image src={artpic} className="w-[850px] h-auto" alt=''/>
        </motion.div> */}
        
      </div>

      
    </div>
  )
}
