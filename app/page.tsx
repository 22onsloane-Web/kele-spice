import Image from "next/image";
import Homes from "./components/Home";
import cat1 from './image/cat_01.webp'
import cat2 from './image/cat_02.webp'
import cat3 from './image/cat_03.webp'
import Recipe from "./components/Recipe";
export default function Home() {
  return (
  
      

      <div >
      <p className='text-[#fff] bg-[#c12126] font-normal text-[22px] py-3 font-Compaign text-center '>Dont miss out! Follow us on social media for exclusive daily deals and updates!</p> 
      <Homes/>

      <div className="w-full text-[#fff] block mt-[100px] md:mt-0 md:flex  text-[35px] font-semibold ">
        

        
        <div className=" ">
        <div className="absolute p-[60px] md:p-[100px]">
        <p>Herbs & Spice</p>
        <p className="mt-[-20px]">Blends</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        </div>
          <Image src={cat1} className=" w-full h-auto" alt=""/>
        </div>

        <div className=" ">
        <div className="absolute p-[60px] md:p-[100px]">
        <p>Curry</p>
        <p className="mt-[-20px]">Blends</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        </div>
          <Image src={cat2} className=" w-full h-auto" alt=""/>
        </div>

        <div className=" ">
        <div className="absolute p-[60px] md:p-[100px]">
        <p>Single</p>
        <p className="mt-[-20px]">Spices</p>
        <div className='bg-[#e4e4e4] text-black rounded-[10px] md:rounded-[30px] text-center mt-2 w-[90px] md:w-[150px] hover:cursor-pointer hover:bg-black hover:text-[#fff] '>
            <p className='px-0 py-2 font-bold text-[15px] '>Shop now</p>
        </div>
        </div>
          <Image src={cat3} className=" w-full h-auto" alt=""/>
        </div>


        </div>

        <div>
         <Recipe/>
        </div>
      </div>
      
    

    
  
  );
}
