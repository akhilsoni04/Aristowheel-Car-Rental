import React from "react";

const Button = ({ title, hover = true }) => {
  return (
    <button>
      <a
        href="/"
        className={`px-5 py-1 relative rounded group overflow-hidden font-medium 
          ${hover ? "bg-purple-50 text-black border-black" : "bg-red-900 text-white border-red-900"} 
          inline-block border-[1.2px] transition-all duration-300`}>
            
        {/* Hover Background Layer */}
        {hover && (
          <span className="absolute right-0 bottom-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-red-900 group-hover:h-full opacity-90"></span>
        )}
        <span className={`relative ${hover ? "group-hover:text-white" : ""}`}>
          {title}
        </span>
      </a>
    </button>
  );
};

export default Button;
