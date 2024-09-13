/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { PiSpeakerHigh } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { BsClockHistory } from "react-icons/bs";
import {Antonio, Open_Sans} from 'next/font/google'
import { SocialIcon } from 'react-social-icons'
import logo from '../image/Kele-spice-logo.png'
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa6';


const open_sans = Open_Sans({ subsets: ["latin"] });
export default function Footer() {
  return (
    <div className='w-full bg-[#232323]  h-auto'>
        <div className='pt-[70px] px-[10vw] pb-[50px]'>
        <div className={open_sans.className}>
        <div className='block lg:flex items-center justify-between mx-auto text-center'>
          <div >
            <div className='mx-auto flex items-center justify-center'>
            <PiSpeakerHigh className='w-[45px] h-auto text-[#ecba23]'/>
            </div>
            <p className='font-bold py-4'>ABOUT KELE SPICE</p>
            <div className='font-medium text-[#bdbdbd]'>
                 <p>Enjoy a wonderful food and</p>
                  <p>cafe experience</p>
            </div>
          </div>
          <div>
          <div className='mx-auto flex items-center justify-center'>
            <TfiEmail className='w-[45px] h-auto text-[#ecba23]'/>
            </div>
            <p className='font-bold py-4'>LET'S TALK</p>
            <div className='font-medium text-[#bdbdbd]'>
                 <p>Enjoy a wonderful food and</p>
                  <p>cafe experience</p>
            </div>
          </div>
          <div>
          <div className='mx-auto flex items-center justify-center'>
            <SlLocationPin className='w-[45px] h-auto text-[#ecba23]'/>
            </div>
            <p className='font-bold py-4'>LET'S MEET</p>
            <div className='font-medium text-[#bdbdbd]'>
                 <p>Enjoy a wonderful food and</p>
                  <p>cafe experience</p>
            </div>
          </div>
          <div>
          <div className='mx-auto flex items-center justify-center'>
            <BsClockHistory className='w-[45px] h-auto text-[#ecba23]'/>
            </div>
            <p className='font-bold py-4'>OPENING HOURS</p>
            <div className='font-medium text-[#bdbdbd]'>
                 <p>Enjoy a wonderful food and</p>
                  <p>cafe experience</p>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className='px-[20vw] border-t-[1px] border-[#373737] mt-5'>
          <div className={open_sans.className}>
            <div className='block lg:flex justify-between items-center mx-auto'>
              <div className='hidden lg:block'>
                <p className='font-bold'>© Copyright 2024 <span className='text-[#ecba23] '>Kelespice</span></p>
              </div>
              <div>
                <Image src={logo} className='w-[250px] h-auto' alt='' />
              </div>
              <div className='flex justify-center gap-x-[7vw] lg:gap-x-2'>
                <div className='bg-[#000] bg-opacity-50 hover:bg-[#bd1f17]'>
                <SocialIcon url="https://www.facebook.com/" fgColor='#fff' bgColor='transparent' style={{ height: 34, width: 34 }} />
                </div>
                <div className='bg-[#000] bg-opacity-50 hover:bg-[#bd1f17]'>
                <SocialIcon url="https://twitter.com/" fgColor='#fff' bgColor='transparent' style={{ height: 34, width: 34 }}  />
                </div>
                <div className='bg-[#000] bg-opacity-50 hover:bg-[#bd1f17]'>
                <SocialIcon url="https://www.linkedin.com/" fgColor='#fff' bgColor='transparent' style={{ height: 34, width: 34 }} />
                </div>
                <div className='bg-[#000] bg-opacity-50 hover:bg-[#bd1f17]'>
                <SocialIcon url="https://www.instagram.com/" fgColor='#fff' bgColor='transparent' style={{ height: 34, width: 34 }} />
                </div>
              </div>
              <div className='block lg:hidden py-[3vw]'>
                <p className='font-bold'>© Copyright 2024 <span className='text-[#ecba23] '>Kelespice</span></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
