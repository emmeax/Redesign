import React from "react";
import { motion } from "framer-motion";
import pp3 from "../assets/Images/pp3.png";
import Hero from "./Hero";

const Home = () => {
  return (
    <section className="bg-[#EEF2FF] px-6 md:px-10 pt-10 space-y-16">
      {/* First Intro Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <img
            src={pp3}
            alt="Profile"
            className="w-2/3 border-4 border-white shadow-lg shadow-blue-600 rounded-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-10 md:space-y-6 text-left order-2 md:order-1"
        >
          <h1 className="text-5xl text-center md:text-left font-inter font-semibold text-gray-900">Hi,</h1>
          <h2 className="text-5xl text-center md:text-left font-inter font-semibold text-blue-700">I'm Tobyteq</h2>
          <p className="text-[#000000] text-lg font-inter font-regular leading-relaxed tracking-wide">
            I'm a video expert dedicated to helping brands, companies, and individuals create impactful,
            high-quality videos that stand out and leave a lasting impression!.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#024B8A] text-white font-inter font-bold px-8 py-2 rounded-md shadow-md hover:bg-blue-800 transition">
              Say Hello!
            </button>
          </div>

          {/* Stats */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-3 mt-10 flex justify-center items-center gap-10 md:gap-12 w-full max-w-4xl"
          >
            <div className="text-center">
              <h3 className="text-2xl font-inter font-bold text-blue-700">9</h3>
              <p className="text-gray-600 text-sm font-inter font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-inter font-bold text-blue-700">350+</h3>
              <p className="text-gray-600 text-sm font-inter font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-inter font-bold text-blue-700">120+</h3>
              <p className="text-gray-600 text-sm font-inter font-medium">Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Section — Aligns Below the Top Section */}
      <div className="w-full flex justify-center">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
