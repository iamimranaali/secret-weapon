import Navbar from "@/components/core/navbar";
import Landing from "@/pages/landing";
import { ArrowBigLeft, ArrowRight, ArrowRightFromLine, ChevronDown, Facebook, Instagram, LinkedinIcon, Mail, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full  overflow-x-hidden">

    <section className="h-full md:h-screen w-full p-4 relative">
    
      <div className="h-full w-full flex flex-col justify-between   bg-black rounded-[40px] p-4">
        <div className="flex flex-col justify-between gap-32 px-8 py-4">
           {/* nav */}
      <nav className="flex justify-between items-center">
        <h1 className="font-bold text-white">LOGO_ <span className="text-purple-600">ON</span></h1>
        <ul className="flex gap-8">
          <li className="font-semibold text-white">home</li>
          <li className="font-semibold text-white">products</li>
          <li className="font-semibold text-white">contant</li>
          <li className="font-semibold text-white">more</li>
        </ul>
      </nav>
      {/* context */}
      <div className="flex h-fit items-center">
        <div className="w-full max-w-2xl space-y-4">
            <h1 className="text-white text-6xl font-bold">The Future of Automated Trading is Here</h1>
            <h4 className="text-white">We Have Developed and Automated More
            Than 1000 Strategies
            </h4>
            <button className="px-6 py-3 rounded-2xl group hover:gap-8 transition-all duration-300 gap-3 flex items-center bg-white">
            <span>Portfolio</span> <ArrowRight className="group-hover:-rotate-45 transition-all duration-300" size={16}/>
          </button>
          </div>
      </div>
        </div>
     
      {/* fotter */}
      <div className="bg-white  rounded-[36px] p-4 w-full h-24">
        <div className="w-full flex justify-between items-start max-w-xl mx-auto">
        <Link href={'#'} className="p-4"><Instagram /></Link>
        <Link href={'#'} className="p-4"><Facebook /></Link>
        <Link href={'#'} className="p-4 font-semibold px-4 py-2 border rounded-2xl flex flex-col hover:bg-neutral-300 transition-colors duration-300 hover:border-neutral-500 group items-center justify-center"><span className="">Our products</span><ChevronDown  size={12} className="group-hover:animate-bounce transition-all duration-300"/></Link>
        <Link href={'#'} className="p-4"><LinkedinIcon /></Link>
        <Link href={'#'} className="p-4"><MessageCircleIcon /></Link>
        </div>
        
      </div>

      
      </div>
 
    </section>
    <section className="h-screen w-full p-4 relative">
    
   <Landing/>

  </section>
    </main>

  );
}
