import React from 'react'
import cup1 from '../image/cup1.png'
import cup2 from '../image/cup2.png'
import Image from 'next/image'
import slogant from '../image/rotate-spice.png'
import {Antonio, Open_Sans} from 'next/font/google'
import { GoHorizontalRule } from 'react-icons/go'


const antonio = Antonio({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });
export default function Section1() {
  return (
    <div className=''>

        <div className='absolute flex w-full items-center mx-auto justify-center lg:justify-end py-10 px-[]'>
           
            <div className='flex justify-center lg:block'>
            <Image src={slogant} className=" w-[20vw] lg:w-[12vw] animate-spin-veryslow ml-0 lg:-ml-[5vw] " alt=''  />
            </div>
        </div>
      <div className='items-center  justify-center gap-x-[] w-full flex mx-auto pt-[100px]'>
      
        <div>
        <div className='  gap-x-3 space-y-4 mt-[10vw] lg:mt-0'>
           <div className='-mt-1 flex justify-center items-center mx-auto text-[#bd1f17]'>
           <GoHorizontalRule className='w-[40px] h-auto font-light '/>
           <div className={antonio.className}>
           <p className='font-medium text-[4vw] lg:text-[22px]'>BEST SPICE FOR YOUR KITCHEN</p>
           </div>   
          
           </div>
           <div className={antonio.className}>
            <div className=''>
            <p className='text-black font-bold text-[6vw] lg:text-[56px] text-center'>TASTY & MEMORABLE FLAVOURS MADE </p>
            <p className='text-black font-bold text-[6vw] lg:text-[56px] text-center -mt-2'>WITH LOVE AND TRADITION</p>
            </div>
           </div>

           <div className=''>
            <div className='text-[#7c7c7c] font-medium text-center text-[16px] flex justify-center px-[5vw] lg:px-0 '>
                <p className='w-full lg:w-[30vw] flex justify-center '><span className={open_sans.className}>At Kele Spice Hub, we are more than just a spice provider. We are your partners in creating flavorful, wholesome meals that bring joy to your life. Join us on this delicious journey and taste the love in every blend.</span> </p>
            </div>
           </div>

           <div className='lg:flex justify-center hidden '>
            <div className='bg-[#bd1f17] text-center font-semibold py-3 px-6 rounded-[15px] transition duration-300 hover:scale-110 hover:cursor-pointer'>
                <p className={open_sans.className}>LEARN MORE</p>
            </div>
           </div>

        
        </div>

        </div>

      </div>
      <div className='mt-0 lg:-mt-[130px] px-10 pb-[2vw] lg:pb-0 '>
            <Image src={cup1} className='h-auto w-[450px] ' alt=''  />
            <div className='bg-[#bd1f17] text-center font-semibold py-3 px-6 rounded-[15px] transition duration-300 hover:scale-110 hover:cursor-pointer flex justify-center lg:hidden'>
                <p className={open_sans.className}>LEARN MORE</p>
            </div>
        </div>

    </div>
  )
}