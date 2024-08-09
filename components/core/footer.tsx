import { Facebook, Instagram, Linkedin, LinkedinIcon, X } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    

<footer className="flex flex-col bg-black rounded-[40px] shadow m-4 pb-4 ">
    <section className='flex flex-col md:flex-row items-center justify-start  gap-4 lg:gap-12 px-4 sm:px-8 py-16'>
    <article className='flex flex-col gap-6 lg:gap-8 w-full max-w-full md:max-w-52 lg:max-w-72 px-8 py-16 justify-center items-center bg-white rounded-3xl'>
        <h3 className='text-xl lg:text-2xl font-semibold '>LOGO_<span>GO</span></h3>
        <p className='text-center text-xs lg:text-base text-neutral-600'>We are dedicated to providing our clients with the most effective and innovative trading solutions.</p>
        <div className='flex gap-3 items-start'>

        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><X className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white'/></span>
        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Instagram  className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white'/></span>
        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><LinkedinIcon className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></span>
        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Facebook className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></span>
        </div>
   </article>
   <div className='flex-1 m-6 md:mt-0  w-full flex flex-col sm:flex-row flex-wrap md:flex-nowrap gap-8 md:gap-2 justify-between max-w-4xl mx-auto  sm:items-center '>
    <div className='flex flex-col justify-center ' >
    <h3 className=" mb-4 sm:text-center text-lg font-semibold text-white">Company</h3>
    <ul className="flex flex-col  sm:items-center justify-center gap-1 text-base font-medium text-white/70 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
    <div className='flex flex-col justify-center ' >
    <h3 className=" mb-4 sm:text-center text-lg font-semibold text-white">Company</h3>
    <ul className="flex flex-col  sm:items-center justify-center gap-1 text-base font-medium text-white/70 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
    <div className='flex flex-col justify-center ' >
    <h3 className=" mb-4 text-start text-lg font-semibold text-white">Contact Details</h3>
    <article className="flex flex-col  items-start justify-center gap-1 text-base font-medium text-white/70 dark:text-gray-400 sm:mt-0">
        <p>Kolhapur, Maharashtra, India</p>
        <span>+91 9023797391</span>
        <span>+91 9370113085</span>
        <p>support@secretweapon.in</p>
    </article>
    </div>

</div>
    </section>
  <div className='flex flex-col text-white w-fit self-center items-center justify-center'>
    <h3 className='text-xs font-semibold text-neutral-400 text-center'>Copyright © 2024 SecretWeapon, All Rights Reserved.</h3>
    <p className='text-xs font-semibold text-neutral-400'>Powered by team Nextech</p>
  </div>
</footer>

  )
}
