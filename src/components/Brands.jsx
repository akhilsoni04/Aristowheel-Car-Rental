import React from "react";
import {SiBmw, SiFord, SiMercedes, SiVolkswagen, SiTesla, SiPorsche,
} from "react-icons/si";

const brands = [
  { name: "BMW", icon: <SiBmw size={32} /> },
  { name: "Ford", icon: <SiFord size={44} /> },
  { name: "Mercedes Benz", icon: <SiMercedes size={32} /> },
  { name: "Volkswagen", icon: <SiVolkswagen size={32} /> },
  { name: "Tesla", icon: <SiTesla size={32} /> },
  { name: "Porsche", icon: <SiPorsche size={32} /> },
];

const Brands = () => {
  return (
    <section className="bg-[#f9fafb] py-14 px-5 lg:px-14">
      <div className="max-w-[1300px] mx-auto">
        {/* Heading + Button */}
        <div className="flex items-center justify-between mb-10">
          <h2
            className="text-2xl lg:text-3xl font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore Our Premium Brands
          </h2>
          <a
            href="/"
            className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-red-900 transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Show All Brands
          </a>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="bg-white rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
                
              <div className="text-gray-800">{brand.icon}</div>
              <p className="text-sm font-medium">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
