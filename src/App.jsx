import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import CarList from "./components/CarList";
import Process from "./components/Process";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Review from "./components/Review";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // run animation only once

      //Animate On Scroll AOS 

    });
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <Brands />
      <Process />
      <CarList />
      <AboutUs />
      <Review />
      <Footer />
    </>
  );
};

export default App;
