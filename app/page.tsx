import ImageOverlay from "@/components/core/ImageOverlay";
import { StaticNav } from "@/components/core/static-nav";
import ContentSection from "@/components/shared/ContentSection";
import NeedAssistant from "@/components/shared/need-assistant";
import PointSection from "@/components/shared/pointSection";
import {  ArrowRight, ChevronDown, Facebook, Instagram, LinkedinIcon, MessageCircleIcon, PhoneOutgoing } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="h-full w-full ">

<section className="h-full md:h-screen w-full p-4 mt-4 md:mt-0 relative">
    
    <div className="h-full w-full relative flex flex-col justify-between gap-8 md:gap-0 overflow-hidden bg-black rounded-[40px]">
      <ImageOverlay />
      <div className="flex flex-col justify-between gap-32 px-8 py-4 z-10 m-4 pt-32 md:pt-4">
         {/* nav */}
    <nav className=" hidden md:flex justify-between items-center  ">
      <h1 className="font-bold text-white">LOGO_ <span className="text-purple-600">ON</span></h1>
      <StaticNav color={'white'} />

    </nav>
    {/* context */}
    <div className="flex h-fit items-center  md:mt-0">
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
 {/* <Landing/> */}
  <ContentSection 
  content="left"
  SuperTitle="one-stop solution"
  title={"Welcome to Secret Weapon Trading Solutions"}
  subTitle={"Where we automate your strategies"}
  descriptions={["We are dedicated to providing our clients with the most effective and innovative trading solutions."," With over three years of experience in the industry and over a decade of experience in trading our team of experts specializes in developing and implementing trading strategies using platforms such as Amibroker and Trading view."]}
  image={"/quotestream_desktop_and_mobile.png"}
  button={"Read More"}
  />

  <section className="h-full bg w-full flex flex-col items-center justify-center relative overflow-hidden">
    <span className="text-5xl md:text-8xl font-[1000] bg-[url('/secret-3.png')] text-center bg-clip-text mb-4 text-transparent">We are here</span>
    <article className="w-[90%] h-full bg-black rounded-[40px] overflow-hidden px-8 pt-8  space-y-6 ">
      <h3 className="text-2xl md:text-5xl font-bold text-neutral-50 text-center mx-auto max-w-4xl">Want to develop, back-test or automate your strategy?</h3>
      <div className="flex gap-3 items-center justify-center ">
      <PhoneOutgoing  className="text-white"/>
      <p className="font-semibold text-neutral-50 text-center text-xs md:text-xl">Call Us Today</p>
      </div>
      <div>
      <p className="font-semibold text-neutral-50 text-center text-base md:text-2xl ">+91 9023797391</p>
      <span className="hidden md:block">|</span>
      <p className="font-semibold text-neutral-50 text-center text-base md:text-2xl ">+91 9370112985</p>
      
      </div>
    
      <div className="w-[700px] aspect-[2/1]  mx-auto  relative">

      <Image src={'/gif_platform_cut.gif'} alt="platform-gif" fill  className="object-contain absolute bottom-0"/>
      </div>
    </article>
  </section>

  
  <PointSection />
  <NeedAssistant/>
  {/* <section className="h-40 w-52"></section> */}
    </main>

  );
}
