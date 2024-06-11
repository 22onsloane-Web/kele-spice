"use client"
import React, { useState } from 'react'
import headerpic from "../image/banner_img.webp"
import Image from 'next/image'
import { Bars3Icon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className='bg-[#fec800] w-full h-[700px]'>
      <div className='flex justify-center items-center mx-auto pt-4 text-[20px] font-normal gap-x-5'>
        <div className='bg-[#c12126] text-center rounded-[80px] justify-center items-center'>
            
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
       <div className='justify-center items-center mx-auto pt-7 font-semibold hidden  lg:flex gap-x-[100px]'>
       <p>Products</p>
        <p>Recipes</p>
        <p>Our Story</p>
        <p>Contact Us</p>
       </div>
      </div>

      <div className='block md:flex justify-center items-center mx-auto mt-5  md:mt-[100px] gap-x-10' >

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
