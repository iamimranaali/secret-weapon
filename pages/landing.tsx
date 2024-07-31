'use client'  
import Image from 'next/image'  
import React from 'react'  
import { motion } from 'framer-motion'  
import { fadeIn } from '@/lib/variants'  

export default function Landing() {  
  return (  
    <div className="h-fit  py-12 w-full flex flex-col items-center justify-between md:flex-row mx-auto  ">  
      <motion.div  
        variants={fadeIn("left", 0.7)}  
        initial="inactive"  
        whileInView="active"  
        viewport={{ once: true }}  
        className="flex flex-col mt-12 md:mt-0 max-w-2xl w-full pl-4 xl:pl-14 gap-4"  
      >  
        <div className="relative w-fit flex flex-col">  
          <span className="group-hover:w-12 group-hover:opacity-100 h-1 opacity-0 w-0 transition-all duration-300 bg-black rounded-xl self-end" />  
          <h4 className="text-xl relative uppercase font-semibold text-neutral-600">one-stop solution</h4>  
          <span className="h-1 w-12 bg-black rounded-xl" />  
        </div>  

        <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-900 font-bold">  
          Welcome to Secret Weapon Trading Solutions  
        </h2>  
        
        <p className="text-neutral-600 text-base md:text-sm xl:text-lg">  
        Where we automate your strategies
        </p>  
        
        <p className="text-neutral-600 text-base md:text-sm xl:text-lg">  
        We are dedicated to providing our clients with the most effective and innovative trading solutions.
        With over three years of experience in the industry and over a decade of experience in trading our team of experts specializes in developing and implementing trading strategies using platforms such as Amibroker and Trading view.
        </p>  

        
      </motion.div>  

      <motion.div  
        className="relative  h-auto min-w-full p-8  aspect-square md:min-w-[400px] lg:min-w-[400px] md:max-w-[580px] w-full bg-contain"  
        variants={fadeIn("right", 0.7)}  
        initial="inactive"  
        whileInView="active"  
        viewport={{ once: true }}  
      >  
        <Image  
          src="/quotestream_desktop_and_mobile.png"  
          alt="hero"  
          className="object-contain"  
          fill  
        />  
      </motion.div>  
    </div>  
  )  
}