import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart, FiSearch, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <header className="bg-gray-800 py-4 px-4 md:px-8 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold text-blue-400">TechGear</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            "Home",
            "Gaming PCs",
            "Laptops",
            "Components",
            "Peripherals",
            "Deals",
          ].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-700"
          >
            <FiSearch className="text-xl" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-700 relative"
          >
            <FiShoppingCart className="text-xl" />
            <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </motion.button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          variants={menuVariants}
          className="md:hidden bg-gray-800 mt-4 py-4 px-4 absolute top-16 right-0 left-0 z-50 shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            {[
              "Home",
              "Gaming PCs",
              "Laptops",
              "Components",
              "Peripherals",
              "Deals",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-400 transition-colors py-2 border-b border-gray-700"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
