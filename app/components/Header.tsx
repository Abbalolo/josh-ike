"use client";
import Link from "next/link";
import  { useEffect, useState } from "react";


function Header() {
  const [open, setOpen] = useState(false); // State to manage menu open/close
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  // Handle scroll to toggle the header background color
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Add background color when scrolled
    } else {
      setIsScrolled(false); // Remove background color when at the top
    }
  };

  
  const handleToggleDarkMode = () => {
    const html = document.querySelector("html");
    if (!html) {
return false
     
    }

    if (theme === "light") {
      setTheme("dark");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
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
      link: "/#work",
    },
    {
      name: "Services",
      link: "/#service",
    },
    {
      name: "About",
      link: "/#about",
    },
  
  ];

  return (
    <header  className={`w-full flex  items-center justify-between px-10 py-3 fixed left-0 top-0 z-50  dark:text-[#ffffff] ${
      isScrolled ? 'glass-effect text-[#ffffff]' : 'bg-transparent '
    }`}>
      <div className="">
      <Link className="text-[30px]  flex items-center" href="/">
        JOSH EGESI
      </Link>
      </div>

      <nav
        className={` absolute w-full md:w-auto inter-font  top-0 left-0 md:static md:flex justify-center items-center md:justify-end md:items-end  transition-transform duration-500 ${
          open
            ? "transform translate-x-0 h-screen flex flex-col  bg-[#0E1011]"
            : "transform -translate-x-full md:translate-x-0 md:h-auto "
        }`}
      >
        <ul className="flex gap-10  flex-col md:flex-row items-center">
          {navData.map((data, index) => (
            <li key={index}>
              <Link
              onClick={() => setOpen(false)}
                href={data.link}
                className="relative before:content-[''] before:absolute before:top-6 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full md:text-[20px] text-[40px]"
              >
                {data.name}
              </Link>
            </li>
          ))}
        
        </ul>
        <Link   onClick={() => setOpen(false)} href={"/contact"} className="border-b-2 hover:border-none transition-all duration-300  text-[20px] md:ml-10 font-semibold mt-5 md:mt-0">Lets Talk</Link>
        <button   onClick={handleToggleDarkMode}
        className="md:ml-5 h-10 w-10 rounded-lg p-2 hover:bg-gray-100 bg-white dark:bg-black dark:hover:bg-gray-700 transition-all duration-300">
        <svg className="fill-black block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    </button>
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
