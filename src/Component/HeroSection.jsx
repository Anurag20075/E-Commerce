import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0"></div>

      {/* Gaming background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ultimate <span className="text-blue-400">Gaming</span> Experience
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the latest in high-performance gaming PCs, cutting-edge
            components, and premium peripherals.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now <FiArrowRight className="ml-2" />
            </motion.button>

            <motion.button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg border border-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Build Your PC
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute top-1/4 right-10 w-16 h-16 rounded-full bg-blue-500/20 blur-xl"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full bg-purple-500/20 blur-xl"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
