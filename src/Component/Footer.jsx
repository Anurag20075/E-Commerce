import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">Giftify</h2>
          <p className="text-sm text-gray-400">
            Your one-stop shop for personalized gifts. Make every occasion
            special with custom products crafted just for you.
          </p>
        </motion.div>

        {/* Shop Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Gift Cards
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Support Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white transition-colors">
              <Globe size={22} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Newsletter Section Inside Footer */}
      <section className="mt-12 px-6 md:px-20">
        <motion.div
          className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow Effect */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay in the Loop 🎁
              </h2>
              <p className="text-gray-400 text-lg">
                Subscribe to our newsletter and be the first to know about{" "}
                <span className="text-purple-400">new arrivals</span>,{" "}
                <span className="text-purple-400">exclusive deals</span>, and{" "}
                <span className="text-purple-400">special gift ideas</span>.
              </p>
            </motion.div>

            {/* Right Form */}
            <motion.form
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-900 text-gray-200 placeholder-gray-500 focus:outline-none border border-gray-700 focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </motion.div>
      </section>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Giftify. All rights reserved.
      </div>
    </footer>
  );
}
