import React from "react";
import { FaCar } from "react-icons/fa";
import Button from "../layouts/Button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <header className=" flex justify-between items-center px-5 py-3.5 lg:px-14">
      {/* logo section  */}
      <div>
        <span className="font-extrabold text-2xl text-red-900">
          Aristowheel 
        </span>
      </div>
      {/* nav links */}
      <nav className=" hidden lg:flex gap-8">
        <a href="/" className="font-medium hover:text-red-900 transition-all">
          Home
        </a>
        <a href="/" className="font-medium hover:text-red-900 transition-all">
          About Us
        </a>
        <a href="/" className="font-medium hover:text-red-900 transition-all">
          Our Cars
        </a>
        <a href="/" className="font-medium hover:text-red-900 transition-all">
          Pricing
        </a>
        <a href="/" className="font-medium hover:text-red-900 transition-all">
          Blog
        </a>
        <a href="/" className="font-medium hover:text-red-900 transition-all">
          Contact Us
        </a>
      </nav>

      {/* signout section  */}
      <SignedOut>
        <SignInButton mode="redirect">
          <button className="bg-red-900 text-white px-5 py-1 rounded cursor-pointer" >
            Login
          </button>
        </SignInButton>
      </SignedOut>

      {/* signin Section  */}
      <SignedIn> 
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Navbar;
