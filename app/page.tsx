import ImageOverlay from "@/components/core/ImageOverlay";
import { StaticNav } from "@/components/core/static-nav";
import Landing from "@/pages/landing";
import { ArrowBigLeft, ArrowRight, ArrowRightFromLine, ChevronDown, Facebook, HomeIcon, Instagram, LinkedinIcon, Mail, MessageCircleIcon, MessageSquareCode, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="h-full w-full ">

<section className="h-full md:h-screen w-full p-4 relative">
    
    <div className="h-full w-full relative flex flex-col justify-between gap-8 md:gap-0 overflow-hidden bg-black rounded-[40px]">
      <ImageOverlay />
      <div className="flex flex-col justify-between gap-32 px-8 py-4 z-10 m-4">
         {/* nav */}
    <nav className=" hidden md:flex justify-between items-center  ">
     <Image
     src="/logo.png"
     height={100}
     width={100}
     alt="Logo Image"
     />
      <StaticNav color={'white'} />

    </nav>
    {/* context */}
    <div className="flex h-fit items-center mt-8 md:mt-0">
      <div className="w-full md:max-w-2xl space-y-4">
          <h1 className="text-white text-2xl md:text-6xl font-bold ">The Future of Automated Trading is Here</h1>
          <h4 className="text-white text-sm md:text-base">We Have Developed and Automated More
          Than 1000 Strategies
          </h4>
          <button className="px-6 py-3 rounded-2xl group w-full sm:max-w-40 hover:gap-8 transition-all duration-300 gap-3 flex items-center bg-white">
          <span>Portfolio</span> <ArrowRight className="group-hover:-rotate-45 transition-all duration-300" size={16}/>
        </button>
        </div>
    </div>
      </div>
   
    {/* fotter */}
    <div className=" w-full h-28 z-10 px-4 pb-4" >
      <div className="bg-white flex items-center h-full w-full rounded-[36px]">
      <div className="w-full flex justify-center md:justify-between items-center md:items-start max-w-xl mx-auto">
      <Link href={'#'} className="p-4 hidden md:block"><Instagram /></Link>
      <Link href={'#'} className="p-4 hidden md:block"><Facebook /></Link>
      <Link href={'#'} className="p-4 font-semibold  rounded-xl py-2  flex flex-col border border-white hover:border-neutral-300 transition-colors duration-300 hover:border-neutral-500 group items-center justify-center"><span className="">Explore</span><ChevronDown  size={12} className="animate-bounce mt-2 transition-all duration-300"/></Link>
      <Link href={'#'} className="p-4 hidden md:block"><LinkedinIcon /></Link>
      <Link href={'#'} className="p-4 hidden md:block"><MessageCircleIcon /></Link>
      </div>
      </div>
    
      
    </div>
    
    
    </div>
    <div className="w-full flex justify-center  items-center gap-4 mt-3 mx-auto">
    <Link href={'#'} className="p-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 block md:hidden"><Instagram /></Link>
      <Link href={'#'} className="p-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 block md:hidden"><Facebook /></Link>
      <Link href={'#'} className="p-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 block md:hidden"><LinkedinIcon /></Link>
      <Link href={'#'} className="p-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 block md:hidden"><MessageCircleIcon /></Link>
      </div>
  </section>
  <section className="h-screen w-full p-4 relative">
 <Landing/>
</section>
<section className="h-screen w-full p-4 relative">
  <Landing/>
 </section>
    </main>

  );
}
