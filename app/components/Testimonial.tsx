"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Testimonial() {
   useEffect(() => {
    AOS.init();
   }, [])
   
    
  return (
    <section data-aos="zoom-in" className="flex flex-col  bg-[#0E1011] pb-10">
      <div className="p-3 md:p-20">
        <div className="flex justify-between mb-5 text-xl mt-5">
          <p className="text-gray-600 italic  inter-font">(Testimonial)</p>
          <p className="text-gray-600 italic  inter-font">(03)</p>
        </div>
        <div className="mt-10">
          <h2 className="md:text-[200px] text-[75px] leading-[0.9]">
          What our
          Clients say.
          </h2>
          <p className="inter-font md:text-5xl text-3xl md:w-[80%] mt-3">
          Hear our clients about their success stories and experiences with us.
          </p>
        </div>
      </div>
     
     <div  className="flex flex-col md:flex-row ">
        <div data-aos="zoom-in" className="md:p-12 p-10 flex flex-col gap-5 bg-[#1F2122]">
            <span className="md:text-[100px] text-[60px] font-bold">“</span>
        <p className="inter-font md:text-3xl text-2xl ">
          Hear our clients about their success stories and experiences with us.
          </p>
          <p className="inter-font text-xl text-gray-400 ">
          Their designs are not only beautiful but effective. Our sales increased by 30% post-launch. Incredible experience!.
          </p>

          <div className="flex items-center gap-3 inter-font">
  <Image
            width={40}
            height={40}
            src={"/josh img/25.jpg"}
            alt={"client"}
            priority
            className="object-cover w-[50px] h-[50px] rounded-full"
          />
          <div className="">
            <h3 className="text-xl font-semibold">Emil Roger</h3>
            <p className="text-gray-600 italic text-lg  ">
            (Pure Green)
          </p>
          </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="md:p-12 p-10 flex flex-col gap-5 mb-5 bg-[#181A1B]">
        <span className=" md:text-[100px] text-[60px] font-bold">“</span>
        <p className="inter-font md:text-3xl  text-2xl">
          Hear our clients about their success stories and experiences with us.
          </p>
          <p className="inter-font text-lg text-gray-400 ">
          Their designs are not only beautiful but effective. Our sales increased by 30% post-launch. Incredible experience!.
          </p>

          <div className="flex items-center gap-3 inter-font">
  <Image
            width={40}
            height={40}
            src={"/josh img/25.jpg"}
            alt={"client"}
            priority
            className="object-cover w-[50px] h-[50px] rounded-full"
          />
          <div className="">
            <h3 className="text-xl font-semibold">Emil Roger</h3>
            <p className="text-gray-600 italic text-lg  ">
            (Pure Green)
          </p>
          </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="md:p-12 p-10 flex flex-col gap-5 mb-10 bg-[#1F2122]">
        <span className="md:text-[100px] text-[60px] font-bold">“</span>
        <p className="inter-font md:text-3xl  text-2xl">
          Hear our clients about their success stories and experiences with us.
          </p>
          <p className="inter-font text-lg text-gray-400 ">
          Their designs are not only beautiful but effective. Our sales increased by 30% post-launch. Incredible experience!.
          </p>

          <div className="flex items-center gap-3 inter-font">
  <Image
            width={40}
            height={40}
            src={"/josh img/25.jpg"}
            alt={"client"}
            priority
            className="object-cover w-[50px] h-[50px] rounded-full"
          />
          <div className="">
            <h3 className="text-xl font-semibold">Emil Roger</h3>
            <p className="text-gray-600 italic text-lg  ">
            (Pure Green)
          </p>
          </div>
          </div>
        </div>
     </div>
    </section>
  );
}

export default Testimonial;
