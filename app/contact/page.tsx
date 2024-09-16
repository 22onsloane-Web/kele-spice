import React from 'react'
import bgPic from '../image/aboutpics.jpg'
import {Antonio, Open_Sans} from 'next/font/google'
import Image from 'next/image'
import { GoHorizontalRule } from 'react-icons/go'
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { BsClockHistory } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";


const antonio = Antonio({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });
export default function contact() {
  return (
    <div className='bg-[#faf9f8] h-auto pb-[0px]'>
       <div className=''>
        <Image src={bgPic} className='w-full h-auto' alt=''/>
        <div className={antonio.className}>
        <div className='flex mx-auto items-center justify-center -mt-[280px] pb-[200px]'>
        <div className=''>
          <p className='font-semibold text-[4vw] pt-0 text-white uppercase w-fit tracking-tight'>CONTACT US</p>
          <div className='flex text-[20px]shadow-md justify-center items-center mx-auto gap-x-3'>
            <p>HOME</p>
           <div className='-mt-1'>
           <GoHorizontalRule className='w-[40px] h-auto font-light '/>
           </div>
            <p>CONTACT US</p>
          </div>
        </div>
        </div>
        </div>
       </div>

       <div className='px-0 lg:px-[200px]'>
        <div className='block lg:flex gap-x-5 mx-auto items-center justify-between  '>
            <div className='bg-[#fff] text-center w-full h-[280px] shadow-md '>
               <div className='py-10 px-5 text-black space-y-3'>
               <div className='bg-[#faf7f2] w-fit rounded-full p-4 flex mx-auto items-center justify-center'>
                    <SlLocationPin className='text-[#bd1f17] w-[40px] h-auto'/>
                </div>
                <div className={antonio.className}>
                <p className='font-bold' >Our Address</p>
                </div>
                <div>
                    <p>22 onsloane street,  </p>
                    <p>Sandton, Bryston.</p>
                </div>
               </div>
            </div>

            <div className='bg-[#fff] text-center w-full h-[280px] shadow-md'>
               <div className='py-10 px-5 text-black space-y-3'>
               <div className='bg-[#faf7f2] w-fit rounded-full p-4 flex mx-auto items-center justify-center'>
                    <TfiEmail className='text-[#bd1f17] w-[40px] h-auto'/>
                </div>
                <div className={antonio.className}>
                <p className='font-bold' >Email Address</p>
                </div>
                <div>
                    <p>kelespice@gmial.com </p>
                    <p>kelespicesupport@gmail.com</p>
                </div>
               </div>
            </div>

            <div className='bg-[#fff] text-center w-full h-[280px] shadow-md'>
               <div className='py-10 px-5 text-black space-y-3'>
               <div className='bg-[#faf7f2] w-fit rounded-full p-4 flex mx-auto items-center justify-center'>
                    <IoIosPhonePortrait className='text-[#bd1f17] w-[40px] h-auto'/>
                </div>
                <div className={antonio.className}>
                <p className='font-bold' >Phone Number</p>
                </div>
                <div>
                    <p>+277 012-345-678 </p>
                    <p>+277 012-345-678 </p>
                </div>
               </div>
            </div>

            <div className='bg-[#fff] text-center w-full h-[280px] shadow-md'>
               <div className='py-10 px-5 text-black space-y-3'>
               <div className='bg-[#faf7f2] w-fit rounded-full p-4 flex mx-auto items-center justify-center'>
                    <BsClockHistory className='text-[#bd1f17] w-[40px] h-auto'/>
                </div>
                <div className={antonio.className}>
                <p className='font-bold' >Opening Time</p>
                </div>
                <div>
                    <p>Mon - Fri - 09:00AM - 09:00PM</p>
                    <p>Sat-Sun - closed</p>
                </div>
               </div>
            </div>
        </div>
       </div>


       <div className='flex mx-auto items-center justify-center mt-[120px]'>
       <div className='bg-[#f8f9fa] w-[1000px] h-auto  border-[1px] border-[#e9e9e9]'>
      <div className='lg:p-[70px]'>
      <div className='text-[#bd1f17] flex gap-x-3'>
        <div className='-mt-0'>
           <GoHorizontalRule className='w-[40px] h-auto font-light '/>
           </div>
            <div className={antonio.className}>
            <p className='text-semibold text-[27px]'>CONTACT US</p>
            </div>
        </div>
        <div className={antonio.className}>
        <p className='text-[55px] py-5 font-bold text-black'>WRITE US SOMETHING</p>
        </div>

       <div className='block lg:flex justify-between space-y-[3vw] px-[3vw]' >
       <div className={open_sans.className}>
            <div className='space-y-1'> 
            <p className='text-[#6a747b] px-2 font-semibold'>Your Name*</p>
            <input type="text" placeholder='Your name here' className='py-3 px-[2vw] lg:px-3 text-[#6a747b] outline-none border-[1px] border-[#d3d3d3] w-full lg:w-[350px] rounded-[5px] lg:rounded-[25px]'  />
            </div>
        </div>

        <div className={open_sans.className}>
            <div className='space-y-1'> 
            <p className='text-[#6a747b] px-2 font-semibold'>Your Email*</p>
            <input type="text" placeholder='Your email here' className='py-3 px-[2vw] lg:px-3 text-[#6a747b] outline-none border-[1px] border-[#d3d3d3] w-full lg:w-[350px] rounded-[5px] lg:rounded-[25px]'  />
            </div>
        </div>

       </div>

       <div className='block lg:flex justify-between mt-6 space-y-[3vw] px-[3vw]'>
       <div className={open_sans.className}>
            <div className='space-y-1'> 
            <p className='text-[#6a747b] px-2 font-semibold'>Your Subject*</p>
            <input type="text" placeholder='Your subject here' className='py-3 px-[2vw] lg:px-3 text-[#6a747b] outline-none border-[1px] border-[#d3d3d3] w-full lg:w-[350px] rounded-[5px] lg:rounded-[25px]'  />
            </div>
        </div>

        <div className={open_sans.className}>
            <div className='space-y-1'> 
            <p className='text-[#6a747b] px-2 font-semibold'>Contact Number*</p>
            <input type="text" placeholder='Your contact cumber here' className='py-3 px-[2vw] lg:px-3 text-[#6a747b] outline-none border-[1px] border-[#d3d3d3] w-full lg:w-[350px] rounded-[5px] lg:rounded-[25px]'  />
            </div>
        </div>

       </div>
       <div className='mt-6 w-full px-[3vw]'>
       <div className={open_sans.className}>
            <div className='space-y-1 w-full'> 
            <p className='text-[#6a747b] px-2 font-semibold'>Message *</p>
            <textarea  placeholder='Tell us a few words' className='py-3 px-3 text-[#6a747b] outline-none border-[1px] border-[#d3d3d3] w-full h-[200px] rounded-[5px] lg:rounded-[25px]'  />
            </div>
        </div>
       </div>

       <div className='bg-[#bd1f17] text-center py-4 px-8 w-fit rounded-[5px] lg:rounded-[25px] mt-5 font-bold text-[20px]'>
        <p className={antonio.className}>SEND MESSAGE</p>
       </div>

      </div>

      </div>
       </div>

       <div>
        <iframe className='w-full h-[450px] mt-[100px]'
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14338.481434915571!2d28.002083104391897!3d-26.045974934787058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-26.047097899999997!2d28.0068096!4m5!1s0x1e9574086dca7fd9%3A0x6d73df7886490b91!2s22onsloane!3m2!1d-26.042621!2d28.0168257!5e0!3m2!1sen!2sza!4v1720445930211!5m2!1sen!2sza" width="1100" height="400"></iframe>
       </div>

    </div>
  )
}
