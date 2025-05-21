import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const About = () => {

  const {name} = useContext(AppContext);

  return <>
    <section class="bg-white text-gray-800 py-16 px-6 md:px-20">
  <div class="max-w-6xl mx-auto space-y-10">

    
    <div class="text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-2">About Us</h2>
      <p class="text-gray-600 text-lg">Discover who we are and why customers love shopping with us.</p>
    </div>

 
    <div>
      <h3 class="text-xl font-semibold mb-2">Who We Are</h3>
      <p class="text-gray-700">
        At <strong>Shopify</strong>, we believe shopping should be easy, affordable, and fun. Since 2022, we’ve been delivering
        high-quality fashion, electronics, and home essentials right to your doorstep.
      </p>
    </div>

   
    <div>
      <h3 class="text-xl font-semibold mb-2">Our Mission</h3>
      <p class="text-gray-700">
        Our mission is to make everyday shopping accessible and stress-free by offering carefully curated products
        and fast, reliable delivery.
      </p>
    </div>

   
    <div>
      <h3 class="text-xl font-semibold mb-2">What We Offer</h3>
      <p class="text-gray-700">
        From stylish clothing to smart gadgets, we provide products you’ll love at prices you can trust —
        backed by secure payments, fast shipping, and responsive support.
      </p>
    </div>

 
    <div>
      <h3 class="text-xl font-semibold mb-2">Why Choose Us</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Over 10,000 happy customers worldwide</li>
        <li>30-day hassle-free return policy</li>
        <li>Fast, tracked delivery on all orders</li>
        <li>Secure checkout and multiple payment options</li>
        <li>24/7 customer support team</li>
      </ul>
    </div>

  
    <div>
      <h3 class="text-xl font-semibold mb-2">Our Team</h3>
      <p class="text-gray-700">
        We’re a passionate team of creators, designers, and problem-solvers who care deeply about our customers’ experience.
        Every product is selected with you in mind.
      </p>
    </div>

    
    <div class="text-center mt-10">
      <p class="text-gray-600">Have a question or want to say hello?</p>
      <NavLink to="/contact" className="inline-block mt-3 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition">
        Contact Us
      </NavLink>
    </div>

  </div>
</section>
<Footer/>
  </>
}

export default About