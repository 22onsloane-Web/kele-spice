"use client"
import Image from "next/image";
import Homes from "./components/Home";
import cat1 from './image/cat_01.webp'
import cat2 from './image/cat_02.webp'
import cat3 from './image/cat_03.webp'
import Recipe from "./components/Recipe";
import { useState } from "react";
import { ChatBubbleBottomCenterTextIcon, HomeIcon, PhoneIcon, RectangleGroupIcon, WalletIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Footer from "./components/Footer";
import { motion, useAnimation } from 'framer-motion'
import Product from "./components/Product";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const controls = useAnimation();
  return (
  
      

      <div className="bg-[#fff] scroll-smooth mt-[-3px]"  >
     <Homes/>

     <motion.div initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} animate={controls} viewport={{once:true}}>
      <Section1/>
     </motion.div>
     
      <div className="w-full text-[#fff] bg-[#f6f8ed] hidden mt-[0px] md:mt-[0px] md:flex  text-[35px] font-semibold ">
        

        
        <div className="bg-[#f6f8ed]">
        <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className="absolute pb-[60px] px-[60px] p-0 md:p-[100px]">
        <p>Spice</p>
        <p className="mt-[-20px]">Blends</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        <div className="mt-5 bg-[#bc3328] bg-opacity-90 shadow-xl rounded-[10px]">
        <p className="w-[400px] font-bold text-[17px] p-3">Explore our unique spice blends, each designed with the finest ingredients to bring out the best in your dishes. Made with meticulous care, these blends add depth and richness to your culinary creations. </p>
        </div>
        </motion.div>
          <Image src={cat1} className="w-full h-auto" alt=""/>
        </div>

        <div className=" ">
        <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className="absolute p-[60px] md:p-[100px]">
        <p>Herbs </p>
        <p className="mt-[-20px]">& Aromatics</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        <div className="mt-5 bg-[#ff8801] bg-opacity-90 shadow-xl rounded-[10px]">
        <p className="w-[400px] font-bold text-[17px] p-3">Our selection of herbs and aromatics is carefully selected to enhance the natural flavors of your meals. These premium ingredients add an aromatic touch that elevates your cooking.  </p>
        </div>
        </motion.div>
          <Image src={cat2} className=" w-full h-auto" alt=""/>
        </div>

        <div className=" ">
        <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className="absolute p-[60px] md:p-[100px]">
        <p>Specialty</p>
        <p className="mt-[-20px]">Mixes</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        <div className="mt-5 bg-[#bc3328] bg-opacity-90 shadow-xl rounded-[10px]">
        <p className="w-[400px] font-bold text-[17px] p-3">Discover our specialty mixes, designed to simplify your cooking while delivering complex and delicious flavors. Perfect for everyday meals and special occasions, these mixes bring a touch of magic to your kitchen. </p>
        </div>
        </motion.div>
          <Image src={cat3} className=" w-full h-auto" alt=""/>
        </div>


        </div>

        <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}}>
      <Section2/>
     </motion.div>

        <div className="w-full text-[#fff] block mt-[0] md:mt-0 md:hidden  text-[35px] font-semibold ">
        

        
        <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} >
          <div className="absolute p-[60px] md:p-[100px]">
        <p>Herbs & Spice</p>
        <p className="mt-[-20px]">Blends</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        </div>
          <Image src={cat1} className=" w-full h-auto" alt=""/>
        </motion.div>

        <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} >
        <div className="absolute p-[60px] md:p-[100px]">
        <p>Curry</p>
        <p className="mt-[-20px]">Blends</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        </div>
          <Image src={cat2} className=" w-full h-auto" alt=""/>
          </motion.div>

          <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} >
        <div className="absolute p-[60px] md:p-[100px]">
        <p>Single</p>
        <p className="mt-[-20px]">Spices</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        </div>
          <Image src={cat3} className=" w-full h-auto" alt=""/>
          </motion.div>
        </div>

        <div className="pt-[150px]" id='product'>
          <p className="text-center text-[30px] pb-[50px] text-black font-bold">Products</p>
          <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}} className="mt-[0px]" >
         <Product/>
         </motion.div>
        </div>


       <motion.div  initial={{y: 200, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1.2}} viewport={{once:true}}>
         <Recipe/>
        </motion.div>

      
      </div>
      
    

    
  
  );
}