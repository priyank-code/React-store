import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer class=" py-5 border-t-2 border-gray-300">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
          <div>
            <h3 class="text-lg font-semibold mb-4">Shop with Us</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-gray-500">
                  Men’s Fashion
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Women’s Fashion
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Home & Kitchen
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Beauty & Personal Care
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Sports & Outdoors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Customer Service</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-gray-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold  mb-4">Company</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-gray-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Press
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold  mb-4">Stay Connected</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-gray-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-500">
                  YouTube
                </a>
              </li>
            </ul>
            <form class="mt-4">
              <label for="email" class="block text-sm mb-1">
                Subscribe to our newsletter
              </label>
              <div class="flex items-center">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  class="w-full px-3 py-2 rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  class="px-4 py-2 bg-green-600 text-white rounded-r hover:bg-green-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="mt-10 pt-5 border-t border-gray-300 text-gray-800 font-medium">
          <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div class="text-center md:text-left">
              © 2025 Shopify. All rights reserved.
            </div>

            <div class="text-center md:text-right">
              Made by 
              <a href="https://www.linkedin.com/in/priyankvaghani" className="text-green-600"> Priyank Vaghani.</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
