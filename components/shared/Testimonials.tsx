'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import Image from "next/image"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

export function CarouselSpacing() {
  const testimonials = [
    {
      name: "Alfred jenner",
      image: '/secret-3.png',
      testimony:"dolorem voluptatum delectus aliquid deserunt. Commodi perspiciatis, dolorem nihil consectetur iusto illum maxime! Quidem pariatur corrupti odit aperiam rerum? Necessitatibus, pariatur. Veritatis, rerum. At soluta veniam debitis quam non, voluptas perspiciatis beatae nemo, sint enim rem."
    },
    {
      name: "Alfred jenner",
      image: '/secret-3.png',
      testimony:"dolorem voluptatum delectus aliquid deserunt. Commodi perspiciatis, dolorem nihil consectetur iusto illum maxime! Quidem pariatur corrupti odit aperiam rerum? Necessitatibus, pariatur. Veritatis, rerum. At soluta veniam debitis quam non, voluptas perspiciatis beatae nemo, sint enim rem."
    },
    {
      name: "Alfred jenner",
      image: '/secret-3.png',
      testimony:"dolorem voluptatum delectus aliquid deserunt. Commodi perspiciatis, dolorem nihil consectetur iusto illum maxime! Quidem pariatur corrupti odit aperiam rerum? Necessitatibus, pariatur. Veritatis, rerum. At soluta veniam debitis quam non, voluptas perspiciatis beatae nemo, sint enim rem."
    },
    {
      name: "Alfred jenner",
      image: '/secret-3.png',
      testimony:"dolorem voluptatum delectus aliquid deserunt. Commodi perspiciatis, dolorem nihil consectetur iusto illum maxime! Quidem pariatur corrupti odit aperiam rerum? Necessitatibus, pariatur. Veritatis, rerum. At soluta veniam debitis quam non, voluptas perspiciatis beatae nemo, sint enim rem."
    },
    {
      name: "Alfred jenner",
      image: '/secret-3.png',
      testimony:"dolorem voluptatum delectus aliquid deserunt. Commodi perspiciatis, dolorem nihil consectetur iusto illum maxime! Quidem pariatur corrupti odit aperiam rerum? Necessitatibus, pariatur. Veritatis, rerum. At soluta veniam debitis quam non, voluptas perspiciatis beatae nemo, sint enim rem."
    },
  ]
  return (
    <Carousel 
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    className="w-full  sm:max-w-[80%]">
      <CarouselContent className="-ml-1 ">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 h-fit ">
            <div className="p-1 ">
            <Card className={` rounded-3xl ${index === 2}`}>
                <CardContent className="flex flex-col justify-center items-center gap-6 p-8  h-80  ">
                  <div className="flex relative w-full gap-2 items-center">
                    <picture className="relative h-14 w-14 max-h-14 max-w-14 rounded-full overflow-hidden ">
                  <Image src={testimonial.image} alt="img" fill className="aspect-square object-cover"/>
                    </picture>
                    <div className="leading-none">
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <span className="font-semibold text-xs">14-jun-2024</span>
                    </div>
                  </div>
                  <div className="flex-1 w-full  text-[15px] leading-tight">
  <p className="line-clamp-[7]">
    {`${testimonial.testimony}`}
    
  </p>
 
</div>
                  
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
  
}

