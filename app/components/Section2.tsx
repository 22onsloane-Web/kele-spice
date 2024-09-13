import React from 'react'
import {Antonio, Open_Sans} from 'next/font/google'
import { GoHorizontalRule } from 'react-icons/go'
import Image from 'next/image';
import section2pic from '../image/section2.jpg'

const antonio = Antonio({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });
export default function Section2() {
  return (
    <div className='bg-[#232323] w-full pb-[50px]'>
   <div className='flex mx-auto items-center justify-center py-[60px]'>
   <div className={antonio.className}>
        <div className='block'>
        <div className='w-full lg:w-[650px] text-center'>
        <div className='-mt-1 flex justify-center items-center mx-auto text-[#bd1f17]'>
           <GoHorizontalRule className='w-[40px] h-auto font-light '/>
           <div className={antonio.className}>
           <p className='font-medium text-[22px]'>WHO WE ARE</p>
           </div>   
        </div>

        <div className='pt-5 pb-2'>
            <p className='text-center text-[5vw] lg:text-[40px] font-bold uppercase'>We offer the best way to spice up meals.</p>
        </div>
        <div className=''>
        <p className={open_sans.className}>Spice up your dining experience with our promotion, where every dish is crafted with the finest, freshest spices to make your meal exceptional.</p>
        </div>

      </div>

        </div>

    
    </div>
   </div>

   <div className='block lg:flex w-full lg:w-[1200px] gap-x-10 justify-between mx-auto '>
    <div>
        <img src={section2pic.src} className='w-full lg:w-[650px] h-auto' alt='' />
      </div>


      <div className='w-full lg:w-[600px] px-[50px] space-y-[50px] py-10'>
       <div className={antonio.className}>
       <div className='flex w-full items-center justify-between mx-auto border-b-[1px] border-[#393939] pb-2'>
            <p className='text-[25px] font-semibold text-[#ecba23]'>Spice Blends</p>
            <p className='text-[25px]'>R36</p>
        </div>
        <div className='mt-5 text-[#888888] font-semibold'>
        <p className={open_sans.className}>Explore our unique spice blends, each designed with the finest ingredients to bring out the best in your dishes.</p>
        </div>
       </div>

       <div className={antonio.className}>
       <div className='flex w-full items-center justify-between mx-auto border-b-[1px] border-[#393939] pb-2'>
            <p className='text-[25px] font-semibold text-[#ecba23]'>Spice Blends</p>
            <p className='text-[25px]'>R36</p>
        </div>
        <div className='mt-5 text-[#888888] font-semibold'>
        <p className={open_sans.className}>Explore our unique spice blends, each designed with the finest ingredients to bring out the best in your dishes.</p>
        </div>
       </div>

       <div className={antonio.className}>
       <div className='flex w-full items-center justify-between mx-auto border-b-[1px] border-[#393939] pb-2'>
            <p className='text-[25px] font-semibold text-[#ecba23]'>Spice Blends</p>
            <p className='text-[25px]'>R36</p>
        </div>
        <div className='mt-5 text-[#888888] font-semibold'>
        <p className={open_sans.className}>Explore our unique spice blends, each designed with the finest ingredients to bring out the best in your dishes.</p>
        </div>
       </div>

       <div className={antonio.className}>
       <div className='flex w-full items-center justify-between mx-auto border-b-[1px] border-[#393939] pb-2'>
            <p className='text-[25px] font-semibold text-[#ecba23]'>Spice Blends</p>
            <p className='text-[25px]'>R36</p>
        </div>
        <div className='mt-5 text-[#888888] font-semibold'>
        <p className={open_sans.className}>Explore our unique spice blends, each designed with the finest ingredients to bring out the best in your dishes.</p>
        </div>
       </div>

       <div className={antonio.className}>
       <div className='flex w-full items-center justify-between mx-auto border-b-[1px] border-[#393939] pb-2'>
            <p className='text-[25px] font-semibold text-[#ecba23]'>Spice Blends</p>
            <p className='text-[25px]'>R36</p>
        </div>
        <div className='mt-5 text-[#888888] font-semibold'>
        <p className={open_sans.className}>Explore our unique spice blends, each designed with the finest ingredients to bring out the best in your dishes.</p>
        </div>
       </div>
      </div>

    </div>

    </div>
  )
}
