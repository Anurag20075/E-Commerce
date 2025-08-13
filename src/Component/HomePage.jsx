import React from "react";
import { motion } from "framer-motion";
// import categories from "./HomepageData/Categories";
import products from "../HomepageData/ProductData";
import testimonials from "../HomepageData/Reviews";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaDesktop,
  FaGamepad,
  FaHeadphones,
  FaMouse,
  FaKeyboard,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { ImOpt } from "react-icons/im";

export default function GamerHub() {
  const categories = [
    { icon: <FaDesktop />, label: "PC Gaming" },
    { icon: <FaGamepad />, label: "Console Gaming" },
    { icon: <FaHeadphones />, label: "Gaming Audio" },
    { icon: <FaMouse />, label: "Gaming Mice" },
    { icon: <FaKeyboard />, label: "Gaming Keyboards" },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white font-sans">
      {/* Navigation Bar */}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 flex flex-wrap gap-10 items-center">
        <motion.div
          className="flex-1 min-w-[300px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Ultimate Gaming
            <br />
            Experience Awaits
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Unleash your inner gamer with our cutting-edge technology. From
            high-performance PCs to immersive VR experiences.
          </p>
          <div>
            <a
              href="#"
              className="bg-purple-500 hover:bg-purple-600 px-7 py-3 rounded-md font-medium mr-4"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="border border-purple-500 px-7 py-3 rounded-md font-medium"
            >
              Learn More
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://placehold.co/600x400/333333/cccccc?text=Gaming+Setup"
            alt="Gaming Setup"
            className="rounded-lg"
          />
        </motion.div>
      </section>

      {/* Deal of the Day */}
      <section className="py-12 px-4 bg-gray-900/50 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-400">
                bolt
              </span>
              Deal of the Day
            </h2>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold bg-gray-800 px-3 py-1 rounded-md">
                  12
                </span>
                <span className="text-xs text-gray-400">Hours</span>
              </div>
              <span className="text-xl">:</span>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold bg-gray-800 px-3 py-1 rounded-md">
                  45
                </span>
                <span className="text-xs text-gray-400">Minutes</span>
              </div>
              <span className="text-xl">:</span>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold bg-gray-800 px-3 py-1 rounded-md">
                  22
                </span>
                <span className="text-xs text-gray-400">Seconds</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 relative">
                <div className="absolute top-2 left-2 bg-primary-500 text-xs font-bold px-3 py-1 rounded-full">
                  -30%
                </div>
                <img
                  src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Gaming Laptop Deal"
                  className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  keywords="gaming laptop, gaming computer, deal, discount, sale"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold">
                  ASUS ROG Strix G15 Gaming Laptop
                </h3>
                <p className="text-gray-300">
                  15.6" 144Hz FHD Display, AMD Ryzen 9 5900HX, NVIDIA GeForce
                  RTX 3070, 16GB DDR4, 1TB SSD, RGB Keyboard
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-primary-400">
                    $1,399.99
                  </span>
                  <span className="text-xl line-through text-gray-400">
                    $1,999.99
                  </span>
                  <span className="bg-primary-500/20 text-primary-300 px-2 py-1 rounded text-sm">
                    Save $600
                  </span>
                </div>
                <div className="space-x-4">
                  <button className="px-6 py-2 bg-primary-500 hover:bg-primary-600 rounded-md font-bold transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transform hover:-translate-y-1">
                    Add to Cart
                  </button>
                  <button className="px-6 py-2 bg-transparent border border-gray-600 hover:border-primary-500 rounded-md transition-all duration-300 transform hover:-translate-y-1">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Featured Categories
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="bg-[#252525] rounded-lg p-6 text-center hover:bg-[#333] transition"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="text-purple-500 text-3xl mb-2">{cat.icon}</div>
              <h3 className="text-sm font-medium">{cat.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Top Rated Products */}
      <section className="bg-[#1e1e1e] py-12 px-6 container mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Top Rated Products</h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          viewport={{ once: true }}
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="bg-[#252525] rounded-lg overflow-hidden hover:-translate-y-1 transition-transform"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={`https://placehold.co/300x180/333333/cccccc?text=${p.img}`}
                alt={p.title}
                className="w-full"
              />
              <div className="p-4">
                <span className="bg-purple-500 text-xs px-2 py-1 rounded mb-2 inline-block">
                  {p.tag}
                </span>
                <h3 className="font-medium mb-2">{p.title}</h3>
                <div className="flex mb-2 text-yellow-400">
                  {Array.from({ length: Math.floor(p.rating) }).map(
                    (_, idx) => (
                      <FaStar key={idx} />
                    )
                  )}
                  {p.rating % 1 !== 0 && <FaStarHalfAlt />}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">{p.price}</span>
                  <div className="bg-purple-500 w-9 h-9 rounded-full flex items-center justify-center">
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="border border-purple-600 text-purple-600 hover:bg-purple-900 hover:text-white py-2 px-6 rounded transition"
          >
            View All Products
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          What Gamers Say
        </h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-[#252525] rounded-lg p-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-start mb-4">
                <img
                  src={`https://placehold.co/50x50/333333/cccccc?text=${t.initials}`}
                  alt={t.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium">{t.name}</h4>
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{t.review}"</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
