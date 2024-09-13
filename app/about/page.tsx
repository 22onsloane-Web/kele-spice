"use client"
import { Bars3Icon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React, { useState } from 'react'
import header from "../image/assortment-of-spices-2023-11-27-04-53-03-utc.jpg"
import bgPic1 from "../image/aboutspic.jpg"
import Image from 'next/image'
import thejars from '../image/thejars.png'
import { motion } from 'framer-motion'
import bgPic from '../image/aboutpics.jpg'
import {Antonio, Open_Sans} from 'next/font/google'
import { GoHorizontalRule } from 'react-icons/go'
import unsdgs from  "../image/unsdgs.jpg"
import { FaQuoteLeft } from "react-icons/fa";

const antonio = Antonio({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });
export default function Page() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div className='bg-[#fff6ef]'>
       <div className=''>
        <Image src={bgPic} className='w-full h-auto' alt=''/>
        <div className={antonio.className}>
        <div className='flex mx-auto items-center justify-center -mt-[280px] pb-[200px]'>
        <div className=''>
          <p className='font-semibold text-[4vw] pt-0 text-white uppercase w-fit tracking-tight'>ABOUT US</p>
          <div className='flex text-[20px] justify-center items-center mx-auto gap-x-3'>
            <p>HOME</p>
           <div className='-mt-1'>
           <GoHorizontalRule className='w-[50px] h-auto font-light '/>
           </div>
            <p>ABOUT US</p>
          </div>
        </div>
        </div>
        </div>
       </div>
       
       <div className='w-full flex mt-5 md:mt-0  pb-[200px] '>
          <div className=' mx-auto px-[20px] md:px-[50px] py-[2%]  '>
             <div className='block md:flex justify-between gap-x-[200px]'>
             <div className=' md:hidden block w-full px-0'>
                <div className='bg-[#ff8801] w-full pl-5 h-[350px]'>
      
                </div>
                <Image src={thejars} alt='' className='w-full px-[50px] absolute z-0  h-auto ml-[-70px] mt-[-330px]'/>
              </div>
              <div className='mt-[20%] block md:hidden text-center text-black text-[55px] font-medium'>
                <p>Who we are.</p>
              </div>
              <motion.div  initial={{x: -200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='text-[30px] w-full  md:text-[90px] hidden md:block font-bold mt-[30px]'>
                <p className='border-b-[2px] w-fit text-black'>Who we are.</p>
                <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='mt-[10px] md:mt-[30px] pb-[20px]'>
              <p className='w-full px-0 md:px-8 lg:px-0 lg:w-[750px] text-[20px] md:text-[25px] text-[#575757] font-light'>At Kele Spice Hub, we are founded on the principle of loving life through the sharing of spices, herbs, and aromas that add wholesome taste to both your food and your life. Our home-made blends are meticulously prepared with love and detail in small batches from our kitchen in South Africa, ensuring each product reflects our passion and commitment to quality.</p>
             </motion.div>
              </motion.div>
              <motion.div  initial={{x: 200, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className=' md:block hidden'>
                <div className='bg-[#ff8801] w-[450px] h-[450px]'>
      
                </div>
                <Image src={thejars} alt='' className='w-[500px] absolute z-0  h-auto ml-[-100px] mt-[-400px]'/>
              </motion.div>
             </div>

            

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
          {/* <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className='items-end justify-end  w-[600px] lg:block md:hidden hidden'>
          <Image src={header} className='w-full h-auto' alt='' />
          </motion.div> */}
       </div>

    <div className='px-[250px]'>
    <div className='flex shadow-xl w-full h-[800px] bg-[#fff5f0] justify-evenly items-center mx-auto'>
      <div className='w-full'>
      <Image src={header} className='w-auto h-[800px]' alt=''/>
      </div>


      <div className=' text-black w-full'>
        <div className={open_sans.className}>
        <p className='text-center text-[#000] text-[4vw]'>Core Values </p>
        <div className='text-start text-[#686766] px-[50px] space-y-10 mt-7 text-[16px]'>
        <p><span className='font-bold text-[#000] uppercase'>Compassion -</span>  We listen and respond to the needs of our customers, focusing on empathy with their cooking scenario and every flavor we blend brings them joy.</p>

        <p><span className='font-bold text-[#000] uppercase'> Excellence -</span>We are committed to sourcing and preparing the highest quality spices and herbs, ensuring exceptional taste and satisfaction in every blend.</p>

        <p><span className='font-bold text-[#000] uppercase'> Innovation -</span>  We embrace a problem-solving approach, continuously seeking to improve and innovate.</p>

        <p><span className='font-bold text-[#000] uppercase'> Integrity -</span>  We build trust through honest sourcing practices, fair trade, respect, and reliability.</p>

        <p><span className='font-bold text-[#000] uppercase'> Mutual -</span>  We pursue shared goals with our partners to achieve mutual success.</p>

        <p><span className='font-bold text-[#000] uppercase'> Adaptability  -</span> We adapt to changing culinary trends and customer preferences, ensuring our products remain relevant and exciting.</p>

        <p><span className='font-bold text-[#000] uppercase'> Customer-centricity  -</span> Customer-centricity We focus on people first approach considering kindness, approachability, and community involvement.</p>

        </div>
        </div>
        
      </div>

    



     </div>
     <div className={antonio.className}>
        <div className='w-full mt-[100px]'>
          <Image src={unsdgs} className='w-full h-auto' alt=''  />
        </div>
       <div className='px-[150px]'>
       <div className='absolute -mt-[480px] bg-[#000] w-[450px] bg-opacity-40 rounded-[15px]'>
          <div className='px-10 py-5'>
            <div className=' '>
              <FaQuoteLeft className='text-[50px] text-[#ecba23]' />
            </div>
          <p className='text-[20px]  py-4 font-extrabold'>Our Commitment to the UN Sustainable Development Goals (UNSDGs) </p>
          <p className={open_sans.className}>At Kele Spice Hub, we align our practices with the United Nations Sustainable Development Goals to contribute to a better and more sustainable future. Our focus includes promoting responsible consumption and production, supporting sustainable agricultural practices, and uplifting local economies through our business operations. </p>
          <div className="z-30 flex  gap-x-5 items-center justify-center mx-auto py-5">
          <button
            type="button"
            className={`w-3 h-3 rounded-full bg-[#ecba23]`}
          ></button>
           <button
            type="button"
            className={`w-3 h-3 rounded-full bg-gray-400`}
          ></button>
           <button
            type="button"
            className={`w-3 h-3 rounded-full bg-gray-400`}
          ></button>
      </div>
          </div>
        </div>
       </div>

      </div>
    </div>

     <div className='h-[200px] w-full'>

     </div>

      
    </div>
  )
}
