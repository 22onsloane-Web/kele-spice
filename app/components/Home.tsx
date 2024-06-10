import React from 'react'
import headerpic from "../image/banner_img.webp"
import Image from 'next/image'
export default function Home() {
  return (
    <div className='bg-[#fec800] w-full h-[700px]'>
      <div className='flex justify-center items-center mx-auto pt-4 text-[20px] font-normal gap-x-5'>
        <div className='bg-[#c12126] text-center rounded-[80px] justify-center items-center'>
            
        </div>
       <div className='justify-center items-center mx-auto pt-7 font-semibold flex gap-x-[100px]'>
       <p>Products</p>
        <p>Recipes</p>
        <p>Our Story</p>
        <p>Contact Us</p>
       </div>
      </div>

      <div className='flex justify-center items-center mx-auto mt-[100px] gap-x-10' >
        <div className='mt-[-30px]'>
        <p className='font-bold font-Compaign text-[80px]'>The Finest </p>
        <p className='font-bold font-Compaign text-[80px] mt-[-50px]'>Spices</p>
        <div className='mt-0 pb-5'>
        <p className='font-normal  text-[23px]'>Ethically sourced</p>
        <p className='font-normal text-medium text-[23px]'>Handcrafted Blends</p>
        </div>
        <div className='bg-[#c12126] rounded-[30px] text-center w-[200px] hover:cursor-pointer hover:bg-black hover:text-[#c12126] '>
            <p className='px-0 py-2 font-semibold text-[20px] text-white'>Shop now</p>
        </div>


        </div>

        <div>
            <Image src={headerpic} className="w-[750px] h-auto" alt=''/>
        </div>
      </div>

      
    </div>
  )
}
