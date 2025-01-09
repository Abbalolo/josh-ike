"use client";
import Link from "next/link";
import  { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false); // State to manage menu open/close
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to toggle the header background color
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Add background color when scrolled
    } else {
      setIsScrolled(false); // Remove background color when at the top
    }
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navData = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Services",
      link: "#service",
    },
    {
      name: "About",
      link: "#about",
    },
  
  ];

  return (
    <header  className={`w-full flex  items-center justify-between px-10 py-7 fixed left-0 top-0 z-50 ${
      isScrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <Link className="text-[30px] " href="/">
        JOSHIKEEGESI
      </Link>

      <nav
        className={`absolute w-full inter-font  top-0 left-0 md:static md:flex justify-center items-center md:justify-end md:items-end  transition-transform duration-500 ${
          open
            ? "transform translate-x-0 h-screen flex flex-col "
            : "transform -translate-x-full md:translate-x-0 md:h-auto"
        }`}
      >
        <ul className="flex gap-10  flex-col md:flex-row items-center">
          {navData.map((data, index) => (
            <li key={index}>
              <Link
                href={data.link}
                className="relative before:content-[''] before:absolute before:top-6 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full md:text-[20px] text-[40px]"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={"/contact"} className="border-b-2 hover:border-none transition-all duration-300  text-[20px] md:ml-10 font-semibold mt-5 md:mt-0">Lets Talk</Link>
      </nav>

      <div
        className="relative focus:outline-none cursor-pointer w-10 h-10 items-center justify-center md:hidden flex"
        onClick={() => setOpen(!open)} // Toggle open state
      >
        <span className="sr-only">Open main menu</span>
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-10 bg-current transform transition duration-500 ease-in-out ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-10 bg-current transform transition duration-500 ease-in-out ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </div>
      
    
    </header>
  );
}

export default Header;
