import React from "react";
import CarouselCon from "./Carousel";
// import Header from "./Header";
import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (

     
      <section data-aos="zoom-in"  className="flex md:justify-end flex-col md:flex-row ">
          <CarouselCon />
      
        <div data-aos="zoom-in" className=" md:w-[60%] w-full flex flex-col gap-5 p-3 md:p-5 md:mt-28">
          <div className="md:text-[120px] text-[75px] flex flex-col leading-[0.9] ">
            <span className="">JOSH</span>
            <span className="">EGESI.</span>
          </div>

          <p className="text-gray-600 italic text-lg ">
            (Base in west africa)
          </p>

          <p className=" text-2xl  md:w-[70%] ">
            Innovating Africa: Redefining Design for a Dynamic and Modern World,
            Bridging Tradition and Technology to Shape the Future.
          </p>

          <p id="about" className="text-gray-600 italic text-lg mt-5 ">
            (About)
          </p>

          <div className=" md:text-[120px] text-[80px] flex flex-col ">Artist Bio.</div>

          <p className=" text-xl text-gray-400 md:w-[70%]">
            Born in 1992 in Lagos, Nigeria, Josh Ike Egesi is a multifaceted
            designer and artist whose innovative work is transforming the global
            design landscape. As the founder of the acclaimed design studio Ike,
            Egesi has garnered widespread acclaim for his ability to seamlessly
            fuse traditional African cultural elements with cutting-edge
            technology.
          </p>
          <p className=" text-xl text-gray-400 md:w-[70%]">
            With a diploma in art and industrial design from Auchi Polytechnic
            and a B.Sc. in fine and applied art with a painting major from the
            University of Benin, Edo State, Egesi&apos;s academic foundation has
            fueled his creative journey.
          </p>
          {/* 
<p className=' text-xl text-gray-400'>
Hailing from the vibrant design hub of Lagos, Egesi&apos;s design philosophy is rooted in a deep reverence for his Nigerian heritage and a relentless pursuit of creative solutions that resonate with modern audiences. His celebrated works, showcased at prestigious events like Milan Design Week, have solidified his reputation as a rising design luminary.</p> */}
          {/* <p className=' text-xl text-gray-400'>
Egesi&apos;s portfolio spans a diverse range of disciplines, including furniture, lighting, sporting goods, and electronics, and his iconic creations—such as the Ikenna Tripod Fan and the Ayo Bench S2—have earned him features in leading design publications, including Wallpaper*, Dezeen, and Architectural Digest.</p> */}
          {/* <p className=' text-xl text-gray-400'>
Beyond his artistic achievements, Egesi is a passionate advocate for social change, leveraging his expertise in art, science, and engineering to create meaningful, culturally resonant pieces. As a visionary designer and artist, his work bridges the gap between tradition and technology, serving as a powerful vehicle for cultural expression and social impact.</p> */}

          <Link
            className="relative before:content-[''] before:absolute md:before:top-6 before:top-14 before:left-0 before:w-20 before:h-[2px] before:bg-white before:transition-all before:duration-300  md:text-[20px] text-[40px] "
            href="#"
          >
            More About Us.
          </Link>

          <p className="text-gray-600 italic text-lg mt-5 ">
            (Our Partners)
          </p>

          <div className="grid grid-cols-4 gap-3 bg-gray-400 p-5">
            <Image
              width={100}
              height={40}
              src="/josh img/3.jpg"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/11.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain grayscale"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/12.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/6.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/1.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/9.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/8.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/14.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/10.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/2.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/4.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/13.png"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
            <Image
             width={100}
              height={40}
              src="/josh img/3.jpg"
              alt={"name"}
              priority
              className="md:object-cover object-contain"
            />
          </div>
        </div>
      </section>
   
  );
}

export default HeroSection;
