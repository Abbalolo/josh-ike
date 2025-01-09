import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer
      data-aos="zoom-in-down"
      className="flex flex-col  md:flex-row justify-around  dark:text-[#1F2122] bg-[#1F2122] dark:bg-[#ffffff] text-[#ffffff] md:p-20 p-5"
    >
      <div className="md:text-[120px] text-[75px] flex flex-col leading-[0.9] ">
        <span className="">JOSH</span>
        <span className="">EGESI.</span>
      </div>

      <ul className="inter-font text-xl mt-10">
        <p className="text-gray-600 italic text-lg inter-font mb-5">(Pages)</p>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Service</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
      <ul className="inter-font text-xl mt-10">
        <p className="text-gray-600 italic text-lg inter-font mb-5">
          (Socials)
        </p>
        <li>
          <Link href="#">Instagram</Link>
        </li>
        {/* <li><Link href="#">Service</Link></li>
    <li><Link href="#">About</Link></li>
    <li><Link href="#">Contact</Link></li> */}
      </ul>
    </footer>
  );
}

export default Footer;
