import React from "react";
import { motion } from "framer-motion";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      variants={cardVariants}
      whileHover={{ y: -10 }}
    >
      <div className="relative">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        <motion.button
          className="absolute top-4 right-4 bg-gray-900/70 p-2 rounded-full"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.8)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FiHeart className="text-white" />
        </motion.button>

        <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>

        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 fill-current ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-600"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">({product.rating})</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-400">
            ${product.price.toFixed(2)}
          </span>

          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiShoppingCart />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
