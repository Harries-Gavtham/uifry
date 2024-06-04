import React from "react";
import Logo from "../assets/Group.png";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="max-w-[1000px] mx-auto text-lg text-[#000000] font-medium">
      <nav className="px-8 py-4 md:flex md:justify-between">
        <div className="flex justify-between items-center gap-10">
          <img src={Logo} className="h-7" />
          <RiMenu3Line size={27} className="md:hidden" />
          <ul className="hidden md:flex md:gap-7">
            <li>
              <a className="text-[#ff5555]" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:items-center">
          <button className="bg-black text-white px-7 py-3 rounded-lg">
            Download
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
