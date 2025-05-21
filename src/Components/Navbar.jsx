import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import {
  faCartPlus,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context/Context";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
const {cartQty} = useContext(AppContext); 

  return (
    <div className="bg-gray-300 p-5 sticky top-0 shadow-xl z-1">
      {/* Top Navbar Wrapper */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex gap-2 items-center">
          <FontAwesomeIcon icon={faShopify} className="text-green-600 text-4xl" />
          <span className="text-3xl">Shopify</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 font-bold items-center">
          <NavLink to="/" className="navlink">HOME</NavLink>
          <NavLink to="/about" className="navlink">ABOUT</NavLink>
          <NavLink to="/products" className="navlink">PRODUCTS</NavLink>
          <NavLink to="/contact" className="navlink">CONTACT</NavLink>
          {/* <button className="bg-green-600 p-2 text-gray-300 rounded-sm hover:bg-green-700">
            LOG IN
          </button> */}
          <div>
            <button><NavLink to="/cart"><FontAwesomeIcon icon={faCartPlus} className="relative text-3xl text-gray-800" />
            <span className="absolute text-white bg-green-600 rounded-full h-[20px] w-[20px] text-center text-sm justify-center top-4 right-3">{cartQty}</span></NavLink></button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setDisplay(!display)}
            className="text-3xl font-bold"
          >
            <FontAwesomeIcon icon={display ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Items */}
      {display && (
        <nav className="mt-4 flex flex-col gap-4 font-bold px-4 md:hidden">
          <NavLink to="/" onClick={() => setDisplay(false)} className="navlink">
            HOME
          </NavLink>
          <NavLink to="/about" onClick={() => setDisplay(false)} className="navlink">
            ABOUT
          </NavLink>
          <NavLink to="/products" onClick={() => setDisplay(false)} className="navlink">
            PRODUCTS
          </NavLink>
          <NavLink to="/contact" onClick={() => setDisplay(false)} className="navlink">
            CONTACT
          </NavLink>
          {/* <button className="bg-green-600 p-2 text-gray-300 rounded-sm hover:bg-green-700 w-30">
            LOG IN
          </button> */}
          <div>
            <button onClick={() => setDisplay(false)}><NavLink to="/cart" ><FontAwesomeIcon icon={faCartPlus} className="text-2xl text-gray-800 self-start" />
          <span className="absolute text-white bg-green-600 rounded-full h-[15px] w-[15px] text-center text-[10px] bottom-10 left-13">{cartQty}</span></NavLink></button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
