import Image from "next/image";
import React from "react";

function Services() {
    const serviceData = [
        {
            name: "Interior Design",
            description: "Creating functional and aesthetically pleasing spaces tailored to your style and needs.",
            image: "/josh img/33.jpg",
            servicesList: [
                "Space planning and layout design",
                "Custom furniture selection",
                "Lighting and color consultation",
                "Home decor and styling",
            ]
        },
        {
            name: "Mentorship",
            description: "Providing guidance and support to help aspiring designers and creatives grow their skills and confidence.",
            image: "/josh img/mentor.jpg",
            servicesList: [
                "One-on-one career coaching",
                "Portfolio reviews and feedback",
                "Skill development sessions",
                "Networking and industry insights",
            ]
        },
        {
            name: "Design Artist",
            description: "Crafting unique artistic designs that blend creativity and functionality for impactful results.",
            image: "/josh img/35.jpg",
            servicesList: [
                "Custom artwork creation",
                "Graphic design projects",
                "Collaborations on creative campaigns",
                "Commissioned design pieces",
            ]
        },
        {
            name: "Public Speaker for Arts and Culture",
            description: "Delivering engaging talks and workshops to inspire and educate audiences about the power of art and culture.",
            image: "/josh img/speaker.jpg",
            servicesList: [
                "Keynote speeches on art and culture",
                "Workshops and panel discussions",
                "Event hosting and moderation",
                "Community outreach programs",
            ]
        },
        {
            name: "Art Curator",
            description: "Curating exceptional art collections and exhibitions that tell compelling stories and connect with audiences.",
            image: "/josh img/75.jpg",
            servicesList: [
                "Exhibition planning and design",
                "Art selection and acquisition",
                "Collaboration with artists and galleries",
                "Event coordination and promotion",
            ]
        },
    ];
    
  return (
    <section id="service" data-aos="zoom-in" className="flex flex-col  bg-[#0E1011]">
      <div className="p-3 md:p-20">
        <div className="flex justify-between mb-5 text-xl mt-5">
          <p className="text-gray-600 italic  inter-font">(What we do)</p>
          <p className="text-gray-600 italic  inter-font">(02)</p>
        </div>
        <div className="mt-10">
          <h2 className="md:text-[200px] text-[75px] leading-[0.9]">
            Services.
          </h2>
          <p className="inter-font md:text-5xl text-3xl md:w-[80%] mt-3">
            Bringing creativity and expertise together, we offer tailored
            services that inspire, educate, and transform ideas into impactful
            experiences.
          </p>
        </div>
      </div>
      {serviceData.map((data, index) => (
      <div data-aos="zoom-in" key={index} className="divide-y divide-black bg-[#181A1B] flex flex-col md:flex-row">
        <div data-aos="fade-right" className=" md:w-[40%] ">
          <Image
          
            width={500}
            height={500}
            src={data.image}
            alt={data.name}
            priority
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>



        <div  className="md:p-20 p-3 md:w-[60%] flex flex-col gap-10">
          <div className="text-[80px] flex flex-col  leading-[0.9] ">{data.name}.</div>

          <p className="inter-font text-3xl text-gray-400 ">
          {data.description}.
          </p>

          <p className="text-gray-600 italic text-lg  inter-font">
            ({data.name})
          </p>

          <ul className="inter-font md:text-2xl  grid grid-cols-2  gap-5 mt-5 font-bold  pb-5 md:p-0">
            {data.servicesList.map((s, index) => (
 <li key={index}>{s}</li>

            ))}
           
          </ul>
        </div>
      </div>
        ))}
    </section>
  );
}

export default Services;
