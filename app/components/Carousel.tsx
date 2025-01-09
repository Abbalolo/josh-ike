"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";


function CarouselCon() {

  const autoplayOptions = () => Autoplay({ delay: 5000 });

  return (
    <div className="relative md:w-[45%]">
      <Carousel
        plugins={[autoplayOptions()]} // Call the wrapped function
        className="md:sticky top-0 left-0 z-10"
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              width={500}
              height={200}
              src="/josh img/5.jpg"
              alt={"name"}
              priority
              className="object-cover w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              width={500}
              height={200}
              src="/josh img/5.jpg"
              alt={"name"}
              priority
              
              className="object-cover w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              width={500}
              height={200}
              src="/josh img/5.jpg"
              alt={"name"}
              priority
              
              className="object-cover w-full"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
     

  


    </div>
  );
}
 
export default CarouselCon;
