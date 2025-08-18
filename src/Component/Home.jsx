import React from "react";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white font-sans">
      <nav className="bg-gray-900/70 border-b border-gray-800 px-4 py-2 overflow-x-auto">
        <div className="container mx-auto flex items-center justify-between">
          <ul className="flex space-x-1 md:space-x-3 whitespace-nowrap">
            <li>
              <a
                href="#"
                className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-purple-400 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm md:text-base">
                  computer
                </span>{" "}
                Gaming PCs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-purple-400 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm md:text-base">
                  laptop
                </span>{" "}
                Laptops
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-purple-400 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm md:text-base">
                  memory
                </span>{" "}
                Graphics Cards
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-purple-400 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm md:text-base">
                  headphones
                </span>{" "}
                Accessories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-purple-400 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm md:text-base">
                  desktop_windows
                </span>{" "}
                Monitors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-purple-400 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm md:text-base">
                  videogame_asset
                </span>{" "}
                Consoles
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-purple-400 transition-all duration-300 text-sm md:text-base flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm md:text-base">
                  sports_esports
                </span>{" "}
                Games
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative py-12 md:py-24 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="block">Ultimate Gaming</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-500">
                  Experience Awaits
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Unleash the power of next-gen with the revolutionary RTX 5090.
                Unmatched performance for gamers and creators.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 rounded-md font-bold transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-1">
                  Shop Now
                </button>
                <button className="px-8 py-3 bg-transparent border border-purple-500 hover:bg-purple-500/10 rounded-md font-bold transition-all duration-300 transform hover:-translate-y-1">
                  Explore More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                alt="RTX 5090 Graphics Card"
                className="rounded-lg shadow-2xl shadow-purple-500/20 w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                keywords="gpu, graphics card, rtx, gaming hardware, computer component"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-purple-900/20 to-transparent opacity-50"></div>
      </section>

      {/* Deal of the Day */}
      <section className="py-12 px-4 bg-gray-900/50 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-purple-400">
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

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 relative">
                <div className="absolute top-2 left-2 bg-purple-500 text-xs font-bold px-3 py-1 rounded-full">
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
                  <span className="text-3xl font-bold text-purple-400">
                    $1,399.99
                  </span>
                  <span className="text-xl line-through text-gray-400">
                    $1,999.99
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                    Save $600
                  </span>
                </div>
                <div className="space-x-4">
                  <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-md font-bold transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-1">
                    Add to Cart
                  </button>
                  <button className="px-6 py-2 bg-transparent border border-gray-600 hover:border-purple-500 rounded-md transition-all duration-300 transform hover:-translate-y-1">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <a
              href="#"
              className="bg-gray-800/30 hover:bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 group"
            >
              <span className="material-symbols-outlined text-4xl text-purple-400 group-hover:text-purple-300 transition-colors">
                laptop
              </span>
              <span className="font-semibold text-center">Gaming Laptops</span>
            </a>

            <a
              href="#"
              className="bg-gray-800/30 hover:bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 group"
            >
              <span className="material-symbols-outlined text-4xl text-purple-400 group-hover:text-purple-300 transition-colors">
                keyboard
              </span>
              <span className="font-semibold text-center">RGB Accessories</span>
            </a>

            <a
              href="#"
              className="bg-gray-800/30 hover:bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 group"
            >
              <span className="material-symbols-outlined text-4xl text-purple-400 group-hover:text-purple-300 transition-colors">
                desktop_windows
              </span>
              <span className="font-semibold text-center">Monitors</span>
            </a>

            <a
              href="#"
              className="bg-gray-800/30 hover:bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 group"
            >
              <span className="material-symbols-outlined text-4xl text-purple-400 group-hover:text-purple-300 transition-colors">
                chair
              </span>
              <span className="font-semibold text-center">Gaming Chairs</span>
            </a>

            <a
              href="#"
              className="bg-gray-800/30 hover:bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 group"
            >
              <span className="material-symbols-outlined text-4xl text-purple-400 group-hover:text-purple-300 transition-colors">
                headphones
              </span>
              <span className="font-semibold text-center">Headsets</span>
            </a>

            <a
              href="#"
              className="bg-gray-800/30 hover:bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 group"
            >
              <span className="material-symbols-outlined text-4xl text-purple-400 group-hover:text-purple-300 transition-colors">
                memory
              </span>
              <span className="font-semibold text-center">Components</span>
            </a>
          </div>
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="py-12 px-4 bg-gray-900/50 border-y border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Top Rated Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-2 right-2 bg-purple-500 text-xs font-bold px-3 py-1 rounded-full z-10">
                  Best Seller
                </div>
                <img
                  src="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Gaming Headset"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  keywords="gaming headset, rgb headset, gaming audio"
                />
              </div>
              <div className="p-4">
                <div className="flex text-yellow-400 mb-2">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star_half</span>
                  <span className="text-gray-400 ml-1 text-sm">(128)</span>
                </div>
                <h3 className="font-bold text-lg mb-1">
                  HyperX Cloud Alpha Wireless
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Premium Gaming Headset with 300hr Battery
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">$159.99</span>
                  <button className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
                    <span className="material-symbols-outlined">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602025882379-e01cf08baa51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmR8ZW58MHx8fHwxNzU1MzY0MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Gaming Keyboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  keywords="mechanical keyboard, rgb keyboard, gaming keyboard"
                />
              </div>
              <div className="p-4">
                <div className="flex text-yellow-400 mb-2">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="text-gray-400 ml-1 text-sm">(95)</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Razer Huntsman V2</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Optical Gaming Keyboard with RGB
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">$189.99</span>
                  <button className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
                    <span className="material-symbols-outlined">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-2 right-2 bg-green-500 text-xs font-bold px-3 py-1 rounded-full z-10">
                  New Arrival
                </div>
                <img
                  src="https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Gaming Mouse"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  keywords="gaming mouse, rgb mouse, wireless mouse"
                />
              </div>
              <div className="p-4">
                <div className="flex text-yellow-400 mb-2">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">
                    star_outline
                  </span>
                  <span className="text-gray-400 ml-1 text-sm">(64)</span>
                </div>
                <h3 className="font-bold text-lg mb-1">
                  Logitech G Pro X Superlight
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Wireless Gaming Mouse, 25K DPI
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">$149.99</span>
                  <button className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
                    <span className="material-symbols-outlined">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613483187636-c2024013d54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Gaming Monitor"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  keywords="gaming monitor, curved monitor, high refresh rate"
                />
              </div>
              <div className="p-4">
                <div className="flex text-yellow-400 mb-2">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star_half</span>
                  <span className="text-gray-400 ml-1 text-sm">(77)</span>
                </div>
                <h3 className="font-bold text-lg mb-1">ASUS ROG Swift 360Hz</h3>
                <p className="text-gray-400 text-sm mb-3">
                  24.5" FHD Gaming Monitor, G-SYNC
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">$699.99</span>
                  <button className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
                    <span className="material-symbols-outlined">
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 border border-purple-500 hover:bg-purple-500/20 rounded-md font-semibold transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Gamers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2">
              <div className="flex text-yellow-400 mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="text-gray-300 mb-4">
                "The RTX 4080 completely transformed my gaming experience. I can
                now run Cyberpunk 2077 with ray tracing at 4K with solid
                framerates. Worth every penny!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1556741533-e228ee50f8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MXwxfHNlYXJjaHwxfHxjdXN0b21lcnxlbnwwfHx8fDE3NTUzNjE3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Customer Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                  keywords="customer, gamer, review, testimonial"
                />
                <div>
                  <h4 className="font-bold">Alex Thompson</h4>
                  <p className="text-gray-400 text-sm">Pro Gamer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2">
              <div className="flex text-yellow-400 mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="text-gray-300 mb-4">
                "NexusTech's customer support is top-notch. They helped me build
                my dream streaming PC and even followed up after delivery to
                ensure everything was working perfectly."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHxjdXN0b21lcnxlbnwwfHx8fDE3NTUzNjE3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Customer Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                  keywords="customer, gamer, review, testimonial"
                />
                <div>
                  <h4 className="font-bold">Sarah Miller</h4>
                  <p className="text-gray-400 text-sm">Content Creator</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2">
              <div className="flex text-yellow-400 mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star_half</span>
              </div>
              <p className="text-gray-300 mb-4">
                "I purchased the ASUS ROG Strix G15 laptop, and it's been a
                game-changer for my mobile workstation needs. Fast shipping and
                the price match guarantee saved me over $200!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MXwxfHNlYXJjaHwxNXx8Y3VzdG9tZXJ8ZW58MHx8fHwxNzU1MzYxNzk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Customer Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                  keywords="customer, gamer, review, testimonial"
                />
                <div>
                  <h4 className="font-bold">Jason Chen</h4>
                  <p className="text-gray-400 text-sm">Game Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
