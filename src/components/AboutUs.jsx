import React from "react";
import { FaRegSmileBeam, FaHandshake, FaGlobeAsia } from "react-icons/fa";
import img from "../assets/img/about.png";

const points = [
  {
    icon: <FaRegSmileBeam className="text-white text-xl" />,
    title: "Customer Happiness",
    desc: "Rated 4.9/5 by 10,000+ users for excellent service and support.",
  },
  {
    icon: <FaHandshake className="text-white text-xl" />,
    title: "Trusted Partnerships",
    desc: "We collaborate with top car providers to ensure best-in-class experience.",
  },
  {
    icon: <FaGlobeAsia className="text-white text-xl" />,
    title: "Wider Reach",
    desc: "Services available in 20+ cities across the country — and growing!",
  },
];

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20 py-20 bg-white" id="about">
      {/* Left Image */}
      <div className="w-full lg:w-1/2" data-aos="zoom-in" data-aos-delay="100">
        <img src={img} alt="About SpeedyRides" />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-4xl font-bold text-gray-900">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At <strong>SpeedyRides</strong>, we believe in making every journey
          seamless, safe, and enjoyable. Whether it's a quick city trip or a
          long vacation, we provide the perfect car for your needs — fast,
          reliable, and hassle-free.
        </p>

        {/* Points */}
        <div className="space-y-5">
          {points.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="bg-red-900 p-3 rounded-full shadow-md">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
