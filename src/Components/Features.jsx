import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faShieldHalved,
  faMoneyCheckDollar,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className="justify-center mt-5 p-10 bg-gray-300">
      <div>
        <h1 className="md:text-4xl text-3xl font-bold text-center">
          We Provides
        </h1>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10 items-center md:h-[65vh]">
          <div className="flex text-center gap-1 items-center bg-white md:p-15 p-10 rounded-2xl shadow-2xl md:text-xl w-full h-full hover:translate-y-[-1.5rem] hover:shadow-black transition-all">
            <FontAwesomeIcon
              icon={faTruckFast}
              className="text-white text-4xl bg-green-600 p-5 rounded-full aspect-square shadow-xl"
            />
            <span className="font-medium ml-2"> Super Fast and Free Delivery</span>
          </div>

          <div className="grid gap-10 text-center items-center">
            <div className="flex gap-3 bg-white md:p-15 p-10 rounded-2xl shadow-2xl md:text-xl text-center items-center w-full hover:translate-y-[-1.5rem] hover:shadow-black transition-all">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-white text-4xl bg-green-600 p-5 rounded-full aspect-square shadow-xl"
              />
              <span className="font-medium ml-2">Non-Contact Shipping</span>
            </div>
            <div className="flex gap-3 bg-white md:p-15 p-10 rounded-2xl shadow-2xl md:text-xl text-center items-center w-full hover:translate-y-[-1.5rem] hover:shadow-black transition-all">
              <FontAwesomeIcon
                icon={faMoneyCheckDollar}
                className="text-white text-4xl bg-green-600 p-5 rounded-full aspect-square shadow-xl"
              />
              <span className="font-medium ml-2">Money-Back Guaranteed</span>
            </div>
          </div>

          <div className="flex text-center gap-1 items-center bg-white md:p-15 p-10 rounded-2xl shadow-2xl md:text-xl w-full h-full hover:translate-y-[-1.5rem] hover:shadow-black transition-all">
            <FontAwesomeIcon
              icon={faUserSecret}
              className="text-white text-4xl bg-green-600 p-5 rounded-full aspect-square shadow-xl"
            />
            <span className="font-medium ml-2">Super Secure Payment System</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
