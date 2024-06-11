import Image from 'next/image'
import React from 'react'
import thejars from '../image/thejars.png'
import jar from '../image/jars.png'
import smalljar from '../image/smalljar.png'
import theflavour from '../image/theflavours.png'
import spices from '../image/spicess.png'
import slide from '../image/slide.png'
import slider from '../image/slide2.png'
export default function Recipe() {
  return (
    <div className='bg-[#f7f7ee] h-[1100px]'>
      <div className='block md:flex px-5 items-center justify-center mx-auto pt-[200px] md:px-[50px] lg:px-[300px] gap-x-1  '>
            <div className='text-center justify-center items-center my-auto bg-[#e2e1d8] w-full h-auto'>
                <Image src={thejars} className='w-full h-auto' alt=''/>
            </div>
            
            <div className='text-center justify-center items-center my-auto bg-[#e2e1d8] w-full h-auto'>
                <Image src={slide} className='w-full h-auto' alt=''/>
            </div>

            <div className='text-center justify-center items-center my-auto bg-[#e2e1d8] w-full h-auto'>
                <Image src={jar} className='w-full h-auto' alt=''/>
            </div>
      </div>


      <div className='block md:flex px-5 items-center justify-center mx-auto pt-1 md:px-[50px] lg:px-[300px] gap-x-1'>
            <div className='text-center justify-center items-center my-auto bg-[#e2e1d8] w-full h-auto'>
                <Image src={slider} className='w-full h-auto' alt=''/>
            </div>
            
            <div className='text-center justify-center items-center my-auto bg-[#e2e1d8] w-full h-auto'>
                <Image src={theflavour} className='w-full h-auto ' alt=''/>
            </div>

            <div className='text-center justify-center items-center my-auto bg-[#e2e1d8] w-full h-auto'>
                <Image src={smalljar} className='w-full h-auto' alt=''/>
            </div>
      </div>
    </div>
  )
}
