import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-8 h-8 text-purple-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.9 7.59l-2-4A1 1 0 0019 3H5a1 1 0 00-.9.59l-2 4A1 1 0 002 8v9a3 3 0 003 3h14a3 3 0 003-3V8a1 1 0 00-.1-.41zM4.62 5h14.76l1 2H3.62l1-2zM19 18H5a1 1 0 01-1-1v-8h16v8a1 1 0 01-1 1z" />
                <path d="M7 14h10a1 1 0 000-2H7a1 1 0 000 2z" />
              </svg>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                NexusGear
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Building the future of gaming, one PC at a time. High-performance
              computing for gamers and creators.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl  bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Gaming PCs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Laptops
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Peripherals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl  bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Returns & Warranty
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  PC Building Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-purple-400">
                  location_on
                </span>
                123 Gaming Street, Tech City
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-purple-400">
                  phone
                </span>
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-purple-400">
                  email
                </span>
                support@nexusgear.com
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-purple-400">
                  schedule
                </span>
                Mon-Fri: 9AM-6PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2023 NexusGear. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
