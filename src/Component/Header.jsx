import React from "react";
import { Link } from "react-router-dom";
import { Monitor } from "lucide-react";
import { FaLaptop, FaMemory, FaGamepad, FaHeadphones } from "react-icons/fa";
import { GiGameConsole } from "react-icons/gi";
function Header() {
  return (
    <>
      <header className="Sticky bg-gray-900/90 text-white background-blur-md border-b border-primary-600/30 px-4 py-3 ">
        <div className="container mx-auto flex justify-between flex-auto gap-4 md:flex-row">
          <div className="flex items-center">
            <h1 className="font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-500">
              Nexus<span className=" text-white">Tech</span>
            </h1>
          </div>

          <div className="max-w-relative md:w-1/2">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>

            <div className="group relative rounded-full overflow-hidden border border-gray-700 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 hover:border-purple-700 dark:hover:border-purple-500">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 transition-colors duration-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 bg-transparent focus:ring-0 focus:outline-none dark:placeholder-gray-400 dark:text-white"
                placeholder="Search for Products"
                required
              />

              <button
                type="submit"
                className="absolute items-center end-2 top-1/2 -translate-y-1/2 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white font-medium rounded-full text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button className="relative p-2 rounded-full hover:bg-gray-800 transition-all duration-300 group">
              <span className="material-symbols-outlined text-2xl group-hover:text-primary-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-white hover:text-purple-700 transition-colors duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .962.343 1.09.835l.383 1.437m0 0L6.75 14.25h10.5l2.121-7.438a1.125 1.125 0 00-1.09-1.437H5.109m0 0L4.5 4.5m1.875 15a.375.375 0 100-.75.375.375 0 000 .75zm10.5 0a.375.375 0 100-.75.375.375 0 000 .75z"
                  />
                </svg>
              </span>
              <span className="absolute -top-1 -right-1 bg-primary-500 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center text-purple-700">
                3
              </span>
            </button>
          </div>
        </div>
      </header>
      <nav className="bg-gray-900/90 border-b border-gray-800 overflow-x-auto px-4 py-2 mt-0">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-1 md:space-x-3 whitespace-nowrap">
            <li>
              <a
                href="#"
                className="px-3 py-2 text-white rounded-md hover:bg-gray-800 hover:text-purple-700 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <Monitor className="w-6 h-6 text-gray-700 transition duration-300 hover:text-purple-700" />
                Gaming PCs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 text-white rounded-md hover:bg-gray-800 hover:text-purple-700 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <FaLaptop className="w-6 h-6 text-gray-700 hover:text-purple-700" />
                Laptop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 text-white rounded-md hover:bg-gray-800 hover:text-purple-700 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <FaMemory className="w-6 h-6 text-gray-700 hover:text-purple-700" />
                Graphics Card
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 text-white rounded-md hover:bg-gray-800 hover:text-purple-700 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <FaHeadphones className="w-6 h-6 text-gray-700 transition duration-300 hover:text-purple-700" />
                Accessories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 text-white rounded-md hover:bg-gray-800 hover:text-purple-700 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <Monitor className="w-6 h-6 text-gray-700 transition duration-300 hover:text-purple-700" />
                Monitor
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 text-white rounded-md hover:bg-gray-800 hover:text-purple-700 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                {/* < className="w-6 h-6" /> */}
                <GiGameConsole className="w-6 h-6 text-gray-700 hover:text-purple-700" />
                Console
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 text-white rounded-md hover:bg-gray-800 hover:text-purple-700 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <FaGamepad className="w-6 h-6 text-gray-700 hover:text-purple-700" />
                Game
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
