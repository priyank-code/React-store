import React from "react";
import image1 from "../assets/Hero.png"

const Hero = () => {
  return <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:p-30 p-10 lg:p-20 md:p-10 items-center bg-gray-300">
        <div>
          <p className="md:text-xl">Welcome to </p>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 text-green-600">E-COMMERCE STORE</h2>
          <p className=" md:text-xl mt-2 md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam quod ducimus similique consequatur cupiditate recusandae hic nisi maiores ab corrupti, sequi sit rerum! Alias aliquid dicta ipsa obcaecati rem!</p>
        <button className="bg-green-600  md:text-xl mt-5 p-3 text-white hover:bg-green-700 rounded-sm md:w-35 w-full"><a href="/products">SHOP NOW</a></button>
        </div>
        <div>
          <img src={image1} alt="Not Found" className="md:m-auto mt-10"/>
        </div>
      </div>
  </>;
};

export default Hero;
