import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-5 lg:px-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        {/* logo section */}
        <div>
          <h3
            className="text-2xl font-bold text-red-500 mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Aristowheel
          </h3>
          <p
            className="text-sm text-gray-400"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We make your rides smoother, faster, and more affordable. Your
            trusted car rental partner.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="font-semibold mb-3 text-red-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Quick Links
          </h4>
          <ul
            className="space-y-2 text-sm"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <li>
              <a href="/" className="hover:text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600">
                Cars
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4
            className="font-semibold mb-3 text-red-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Categories
          </h4>
          <ul
            className="space-y-2 text-sm"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <li>
              <a href="/" className="hover:text-red-600">
                Business Travel
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600">
                Electric Cars
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600">
                Wedding Rentals
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-600">
                SUVs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4
            className="font-semibold mb-3 text-red-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get In Touch
          </h4>
          <p
            className="text-sm text-gray-400 mb-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            111 Organic Street, Bengaluru, India
          </p>
          <p
            className="text-sm text-gray-400 mb-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Email: support@Aristowheel.com
          </p>
          <p
            className="text-sm text-gray-400 mb-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Phone: +44 123 456 7890
          </p>
          <div className="flex space-x-4">
            <a href="/" className="text-red-500 hover:text-red-800">
              <FaFacebookF />
            </a>
            <a href="/" className="text-red-500 hover:text-red-800">
              <FaInstagram />
            </a>
            <a href="/" className="text-red-500 hover:text-red-800">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400 border-t pt-4">
        @copyright developed by NextAkhil | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
