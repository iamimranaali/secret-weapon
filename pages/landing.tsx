'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variants'
export default function Landing() {
  return (
       <div className="h-fit py-12 w-full flex flex-col md:flex-row mx-auto  gap-4">
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col mt-12 group md:mt-0 w-full min-w-4xl pl-4 xl:pl-14 gap-4 md:gap-2 lg:gap-4 justify-center"
            >
                <div className='relative w-fit flex flex-col space-y-1 '>
              <span className=' group-hover:w-12 group-hover:opacity-100 h-1 opacity-0 w-0 transition-all duration-300 bg-black rounded-xl self-end '/>

                <h4 className="text-xl relative uppercase font-semibold text-neutral-600">
              one-stop solution
            </h4>
              <span className=' h-1 w-12 bg-black rounded-xl '/>
                </div>
           
            <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-900 font-bold">
            Welcome to Secret Weapon Trading Solutions
            </h2>
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg l">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque aurus an ipsum suscipit
            </p>

            <ul className="list-disc pl-4 text-base md:text-sm xl:text-lg text-neutral-600 space-y-2 lg:space-y-4">
              <li>
                Sapien quaerat tempor an ipsum laoreet purus and sapien dolor
              </li>
              <li>
                Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue dolor cursus
              </li>
            </ul>
          </motion.div>
         
            <motion.div className="relative h-auto min-w-full p-8  aspect-square md:min-w-[400px] lg:min-w-[580px] max-w-[43%] w-full bg-contain "
          variants={fadeIn("right", 0.7)}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}>
            <Image
            src={"/quotestream_desktop_and_mobile.png"}
            alt="hero"
            className='object-contain'
            fill
            />
          </motion.div>
        </div>
  )
}
