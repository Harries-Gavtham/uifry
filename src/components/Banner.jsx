import React from "react";
import Phone from "../assets/bg1.png";
import App from "../assets/app1.png";
import { BsArrowRight } from "react-icons/bs";
import { IoPlayCircleOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="px-8 max-w-[1000px] mx-auto grid cols-1 md:grid-cols-2">
      <div className="text-center mx-auto md:text-left text-xl sm:text-2xl font-extrabold py-1 ">
        <h2>Make The Best</h2>
        <h2>Best Financial Decisions</h2>
        <p className="text-sm sm:text-lg font-medium text-gray-500">
          Peace of mind through smart money management.
        </p>
        <div className="text-sm sm:text-lg font-medium flex md:justify-start py-2 gap-1 justify-center">
          <button className="px-3 py-3 rounded-md flex items-center bg-black text-white">
            Get Started <BsArrowRight />
          </button>
          <button className="px-3 py-3 rounded-md flex items-center border border-gray-500">
            <IoPlayCircleOutline /> Watch Video{" "}
          </button>
        </div>
        <div className="hidden md:block md:mx-auto">
          <img src={App} className="w-[300px]" />
        </div>
      </div>
      <div className="mx-auto ">
        <img className="w-[280px] sm:w-[350px] md:w-[400px]" src={Phone} />
      </div>
    </section>
  );
};

export default Banner;
