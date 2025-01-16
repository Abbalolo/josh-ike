import { BsLampFill } from "react-icons/bs"; 
import { FaFan } from "react-icons/fa"; 
import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <section id="work" data-aos="zoom-in-down" className="dark:bg-[#181A1B]  dark:text-[#ffffff] flex flex-col gap-5 section-scroll-top">
      <div className="p-3 md:p-20">
        <div className="flex justify-between mb-5 text-xl mt-5">
          <p className="text-gray-600 italic ">
            (Selected Work)
          </p>
          <p className="text-gray-600 italic t ">(01)</p>
        </div>
        <div className="mt-10">
          <h2 className="md:text-[80px] text-[60px] leading-[0.9]">
            Projects.
          </h2>
          <p className=" md:text-3xl text-2xl md:w-[80%] mt-3">
            Explore our recent projects showcasing creativity, innovation, and
            impactful design solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
      <div className="flex relative flex-col md:flex-row justify-center overflow-hidden">
  {[
    "/josh img/tripod1.jpg",
    "/josh img/tripod2.jpg",
    "/josh img/tripod3.jpg",
  ].map((src, index) => (
    <div data-aos="zoom-in" key={index} className="relative group w-full h-[400px] overflow-hidden">
      <Image
        width={500}
        height={500}
        src={src}
        alt={`Project image ${index + 1}`}
        priority
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <p className="absolute inset-0 flex items-center justify-center text-[80px] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <FaFan /> Tripod Fan
      </p>
    </div>
  ))}
</div>

        <div data-aos="zoom-in" className="flex relative flex-col md:flex-row justify-center overflow-hidden">
  {[
    "/josh img/light stand.jpg",
    "/josh img/light stand 3.jpg",
    "/josh img/light stand 2.jpg",
  ].map((src, index) => (
    <div key={index} className="relative group w-full h-[400px]">
      <Image
        width={500}
        height={500}
        src={src}
        alt={`Project image ${index + 1}`}
        priority
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <p className="absolute inset-0 flex items-center justify-center text-[80px] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <BsLampFill /> Yabasi Lamp
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

export default Projects;
