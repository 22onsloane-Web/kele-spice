"use client"
import { Bars3Icon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React, { useState } from 'react'
import header from "../image/aboutpic.png"
import Image from 'next/image'
import thejars from '../image/thejars.png'
import { motion } from 'framer-motion'

export default function Page() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className='bg-[#f6f8ed]'>
        <p className='text-[#fff] bg-[#c12126] font-normal text-[12px] md:text-[22px] py-3 font-Compaign text-center '>Dont miss out! Follow us on social media for exclusive daily deals and updates!</p>   
        
        <div className='flex justify-center items-center mx-auto pt-0 text-[20px] shadow-xl font-normal gap-x-5'>
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
         <div className='justify-center items-center mx-auto py-4 font-semibold hidden  lg:flex gap-x-[100px]'>
         <Link href='/'>
         <p>Home</p>
         </Link>
          <p>Product</p>
          <Link href='/about'>
          <p>About Us</p>
          </Link>
          <p>Contact Us</p>
         </div>
        </div>
       
       <div className='w-full flex mt-5 md:mt-0 '>
          <div className=' mx-auto px-[20px] md:px-[50px] py-[2%]  '>
             <div className='block md:flex justify-between gap-x-[200px]'>
             <div className=' md:hidden block w-full px-0'>
                <div className='bg-[#ff8801] w-full pl-5 h-[350px]'>
      
                </div>
                <Image src={thejars} alt='' className='w-full px-[50px] absolute z-0  h-auto ml-[-70px] mt-[-330px]'/>
              </div>
              <div className='mt-[20%] block md:hidden text-center text-[55px] font-medium'>
                <p>Who we are.</p>
              </div>
              <motion.div  initial={{x: -200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='text-[30px] w-full px-10 md:text-[90px] hidden md:block font-bold mt-[30px]'>
                <p className='border-b-[2px]'>Who</p>
                <p className='border-b-[2px] mt-0 md:mt-[-10px] w-fit'>we</p>
                <p className='border-b-[2px] w-fit'>are.</p>
              </motion.div>
              <motion.div  initial={{x: 200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className=' md:block hidden'>
                <div className='bg-[#ff8801] w-[350px] h-[350px]'>
      
                </div>
                <Image src={thejars} alt='' className='w-[400px] absolute z-0  h-auto ml-[-100px] mt-[-300px]'/>
              </motion.div>
             </div>

             <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='mt-[10px] md:mt-[30px] pb-[20px]'>
              <p className='w-full px-0 md:px-8 lg:px-0 lg:w-[750px] text-[20px] md:text-[25px] text-[#575757] font-light'>At Kele Spice Hub, we are founded on the principle of loving life through the sharing of spices, herbs, and aromas that add wholesome taste to both your food and your life. Our home-made blends are meticulously prepared with love and detail in small batches from our kitchen in South Africa, ensuring each product reflects our passion and commitment to quality.</p>
             </motion.div>

             {/* <div>
              <p className='text-center font-bold mt-[100px] text-[60px]'>Our Values</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>Compassion</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>We listen and respond to the needs of our customers, focusing on emapathy with their cooking scenario and every flavor we blend brings them joy.</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>Excellence</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>We are committed to sourcing and preparing the highest quality spices and herbs, ensuring exceptional taste and satisfaction in every blend.</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>Innovation</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>We embrace a problem-solving approach, continuously seeking to improve and innovate.</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>Integrity</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>We build trust through honest sourcing practices, fair trade, respect, and reliability. </p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>Mutual</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>We pursue shared goals with our partners to achieve mutual success. </p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>Adaptability</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>We adapt to changing culinary trends and customer preferences, ensuring our products remain relevant and exciting. </p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>Customer-centricity</p>
              <p className='w-[750px] text-[25px] text-[#575757] font-light'>We focus on people first approach considering kindness, approachability, and community involvement</p>
             </div> */}
          </div>
          <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='items-end justify-end  w-[600px] lg:block md:hidden hidden'>
          <Image src={header} className='w-full h-auto' alt='' />
          </motion.div>
       </div>

       <p></p>

      
    </div>
  )
}
