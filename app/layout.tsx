import type { Metadata } from "next";
import { Inter,  Open_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });
const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="stylesheet" href="https://use.typekit.net/vsh8rwa.css"/>
        </head>
      <body className={open_Sans.className}>
      {/* <div className='bg-[#fff] w-full pt-[40px]'>
          <Header/>
      <div className='flex items-center justify-center mx-auto gap-x-10 shadow-lg'>
            <div className=''>
                <Image src={logo} className='w-[150px] h-auto ' width={500} alt=""  />
            </div>
            <div className='hidden md:flex gap-x-10 mt-3 '>
                <div className='font-light hover:font-medium hover:cursor-pointer hover:text-[#96333c] w-[65px] '>
                    <Link href='/'>
                    <p>Home</p>
                    </Link>
                </div>
                <div className='font-light hover:font-medium hover:cursor-pointer hover:text-[#96333c] w-[65px] '>
                    <Link href=''>
                    <p>Specials</p>
                    </Link>
                </div>
                <div className='font-light hover:font-medium hover:cursor-pointer hover:text-[#96333c] w-[65px] '>
                <Link href='/product'>
                    <p>Product</p>
                    </Link>
                </div>
                <div className='font-light hover:font-medium hover:cursor-pointer hover:text-[#96333c] w-[65px] '>
                <Link href='/about'>
                    <p>About</p>
                    </Link>
                </div>
                <div className='font-light hover:font-medium hover:cursor-pointer hover:text-[#96333c] w-[65px] '>
                <Link href='/contact'>
                    <p>Contact</p>
                    </Link>
                </div>
            </div>
      </div>
    </div > */}
        
        {children}

        <div>
   
      </div>
        </body>
    </html>
  );
}