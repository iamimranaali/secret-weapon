'use client'
import React from 'react'
import {motion} from 'framer-motion'
export default function ProductSection() {
  return (
    <main className='h-full w-full flex items-center justify-center '>
      <div className='py-24 hidden sm:flex w-full  items-center justify-center'>

     
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
          staggerChildren: 0.1,
        }}
        className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 w-full max-w-full md:w-[90%] justify-items-center  p-4 mx-auto'
      >
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.2}}
           
            className='w-full  aspect-square border shadow-md

 bg-accent bg-opacity-10 rounded-2xl'
          />
        ))}
      </motion.div>
    
      </div>
      <div className='py-24 sm:hidden w-full flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
          staggerChildren: 0.1,
        }}
        className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 w-full max-w-full md:max-w-[90%] justify-items-center  py-4 mx-auto'
      >
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{type: 'tween',duration:1.2,}}
            viewport={{once: true}}
            className='w-full  aspect-square border shadow-md bg-accent bg-opacity-10 rounded-2xl'
          />
        ))}
      </motion.div>
    
      </div>
    </main>
  )
}
