import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-purple-900 text-white backdrop-blur-lg border-b border-purple-600/30 px-4 py-3 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Nexus<span className="text-white">Tech</span>
          </h1>
        </div>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex items-center gap-6">
          {["Home", "Products", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative font-medium group hover:text-purple-400 transition-colors duration-300"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:block max-w-xs w-full">
          <div className="group relative rounded-full overflow-hidden border border-gray-700 bg-gray-800 transition-all duration-300 hover:border-purple-500">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search for Products"
              className="block w-full py-2 pl-10 pr-4 text-sm bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 py-1 text-sm transition-all duration-300">
              Search
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full hover:bg-gray-800 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-white hover:text-purple-400 transition-colors duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .962.343 1.09.835l.383 1.437m0 0L6.75 14.25h10.5l2.121-7.438a1.125 1.125 0 00-1.09-1.437H5.109m0 0L4.5 4.5m1.875 15a.375.375 0 100-.75.375.375 0 000 .75zm10.5 0a.375.375 0 100-.75.375.375 0 000 .75z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-purple-400 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center text-black">
              3
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-3 bg-gray-900 border-t border-purple-600/30">
          {["Home", "Products", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
