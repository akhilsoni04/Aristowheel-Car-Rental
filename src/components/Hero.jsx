import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import img from "../assets/img/hero.png";
import Button from "../layouts/Button";
 
const Hero = () => {
  return (
    <section className="bg-[#fef6f6] py-12 lg:py-20 px-5 lg:px-14">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6">
          <h3 className="text-red-900 font-semibold text-sm tracking-widest uppercase"
            data-aos="fade-up"
            data-aos-delay="100">
            Welcome To UrbanRide
          </h3>
          <h1 className="text-4xl font-extrabold leading-tight"
            data-aos="fade-up"
            data-aos-delay="200">
            Rent The Best Quality <span className="text-red-900">Car's </span>
            With Us
          </h1>
          <p
            className="text-gray-600 max-w-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We provide top-notch car rental services with affordable pricing and
            flexible options. Whether you're going on a trip or need a ride in
            town — we got you covered.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4" data-aos="fade-up" data-aos-delay="400">
            <Button title="Book Your Ride" hover={false} />
            <Button title="Sell Your Car" />
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div data-aos="zoom-in-left">
          <img src={img} alt="Luxury Car" />
        </div>
      </div>

      {/* FORM SECTION */}
      <div
        className="bg-white shadow-lg rounded-lg p-5 mt-12 flex flex-col md:flex-row gap-4 items-center justify-between max-w-5xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Location */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Choose Your Location"
            className="outline-none border-b w-full md:w-48 py-2 text-sm"
          />
          <FaLocationArrow className="text-red-900" />
        </div>

        {/* Pickup Date */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="date"
            className="outline-none border-b w-full md:w-36 py-2 text-sm"
          />
        </div>

        {/* Return Date */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="date"
            className="outline-none border-b w-full md:w-36 py-2 text-sm"
          />
        </div>

        {/* Book Button */}
        <Button title="Book Your Ride" hover={false} />
      </div>
    </section>
  );
};

export default Hero;
