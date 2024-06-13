/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <div className='w-full bg-[#000000] md:pt-0 pt-[50px] px-5 md:px-0 z-30'>
      <div className='block lg:flex gap-x-10 justify-center items-center  mx-auto px-1 md:px-10 py-10 lg:space-y-0 space-y-5'>
            <div className='bg-[#d3d3d3] w-full lg:w-[300px] h-[250px]'>
                <div className='py-5 justify-center items-center mx-auto flex'>
                  <FaLocationDot className='w-[70px] h-[70px] text-[#c12126]'/>
                </div>

                <div className='text-center px-10'>
                <p className='text-[20px] font-semibold pb-5'>OUR MAIN OFFICE</p>
                <p>Rovinia 94 Brodway St New</p>
                <p className='pb-4'>Road, JHB 2001 </p>
                </div>
            </div>

            <div className='bg-[#d3d3d3] w-full lg:w-[300px] h-[250px]'>
                <div className='py-5 justify-center items-center mx-auto flex'>
                  <FaPhone className='w-[70px] h-[70px] text-[#c12126]'/>
                </div>

                <div className='text-center px-10'>
                <p className='text-[20px] font-semibold pb-5'>Phone number</p>
                <p>+277012345678</p>
                <p>+277905939029</p>
          
                </div>
            </div>

            <div className='bg-[#d3d3d3] w-full lg:w-[300px] h-[250px]'>
                <div className='py-5 justify-center items-center mx-auto flex'>
                  <FaFax className='w-[70px] h-[70px] text-[#c12126]'/>
                </div>

                <div className='text-center px-10'>
                <p className='text-[20px] font-semibold pb-5'>FAX</p>
                <p>1-234-567-8900</p>
              
                </div>
            </div>

            <div className='bg-[#d3d3d3] w-full lg:w-[300px] h-[250px]'>
                <div className='py-5 justify-center items-center mx-auto flex'>
                  <MdEmail  className='w-[70px] h-[70px] text-[#c12126]'/>
                </div>

                <div className='text-center px-10'>
                <p className='text-[20px] font-semibold pb-5'>Email</p>
                <p> kileproducts@gmial.com</p>
                <p>kilecustomers@gmail.com</p>
                </div>
            </div>
      </div>

      <div className='text-[#e4e4e4] block md:px-10 lg:px-0 lg:flex gap-x-[200px] items-center justify-center mx-auto pb-[100px]'>
       <div className='pb-[50px] lg:pb-0'>
       <p className='font-bold text-[30px] px-5 lg:px-0'>Contact Info</p>
        <p className='w-full lg:w-[400px] px-5 lg:px-0 text-[16px] mt-5'>For inquiries, feedback, or collaborations, don't hesitate to reach out to Rovinia. Our office is situated at 94 Brodway St, New Road, JHB 2001. Whether you have questions about our services, want to discuss partnership opportunities, or simply wish to share your thoughts, we're here to listen. You can contact us directly by phone at [Your Phone Number], where our team will be delighted to assist you, or feel free to drop us an email at [Your Email Address].</p>
        </div>

        <div className='space-y-0 text-white'>
            <div>
                <p>Email</p>
                <input type="text" placeholder='Enter a valid email address' className='bg-[#000] outline-none border-b-[2px] pb-2 w-full lg:w-[400px] px-5 lg:px-0' />
            </div>
            <div className='pt-6'>
                <p>Name</p>
                <input type="text" placeholder='Enter your name' className='bg-[#000] outline-none border-b-[2px] pb-2 w-full lg:w-[400px] px-5 lg:px-0' />
            </div>
            <div className='pt-6'>
                <p>Message</p>
                <textarea name="" placeholder='Enter your message' className='bg-[#000] outline-none border-b-[2px] pb-4 h-[100px] w-full lg:w-[400px] px-5 lg:px-0'  id=""></textarea>  
            </div>  
            <button className='w-full bg-[#c12126] font-bold text-[16px] py-2'>Submit</button>        
        </div>
        </div>

        
    </div>
  )
}
