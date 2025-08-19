import React from "react";
import { motion } from "framer-motion";
import { FiGift } from "react-icons/fi";

const PromotionalBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <FiGift className="text-blue-400 text-3xl mr-3" />
                <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  LIMITED TIME OFFER
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Summer Gaming <span className="text-blue-400">Bundle</span> Sale
              </h2>

              <p className="text-gray-300 mb-6 max-w-2xl">
                Get up to 30% off on selected gaming PCs, laptops, and
                components. Plus, receive a free gaming headset with purchases
                over $1500.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop the Sale
                </motion.button>

                <motion.button
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg border border-gray-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>

            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="relative bg-gray-900 p-4 rounded-xl">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-400 mb-2">
                      30%
                    </div>
                    <div className="text-xl font-semibold">OFF</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
