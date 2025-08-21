function Categories() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white font-sans">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-800 bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center">
                <span className="text-purple-500 text-2xl font-bold tracking-wider">
                  CYBER<span className="text-purple-500">TECH</span>
                </span>
                <span className="material-symbols-outlined text-purple-400 ml-1">
                  bolt
                </span>
              </a>

              <details className="relative group">
                <summary className="flex items-center px-3 py-2 rounded-md cursor-pointer bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
                  <span>Categories</span>
                  <span className="material-symbols-outlined ml-1 text-sm">
                    expand_more
                  </span>
                </summary>
                <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-gray-800 border border-gray-700 overflow-hidden z-10 transform transition-all duration-300">
                  <div className="py-1">
                    {[
                      "PCs",
                      "Laptops",
                      "Accessories",
                      "Peripherals",
                      "Gaming Chairs",
                      "Bundles",
                    ].map((category) => (
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white transition-colors duration-200"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              </details>
            </div>

            <div className="relative mx-4 flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Search for gaming gear..."
                className="w-full px-4 py-2 bg-gray-800 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>

            <div className="flex items-center space-x-5">
              <a href="#" className="relative group">
                <span className="material-symbols-outlined text-2xl hover:text-purple-400 transition-colors duration-300">
                  favorite
                </span>
                <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-purple-500 text-white text-xs rounded-full">
                  3
                </span>
                <span className="absolute inset-0 rounded-full group-hover:bg-purple-500 opacity-10 scale-0 group-hover:scale-150 transition-all duration-500"></span>
              </a>

              <a href="#" className="relative group">
                <span className="material-symbols-outlined text-2xl hover:text-purple-400 transition-colors duration-300">
                  shopping_cart
                </span>
                <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-purple-500 text-white text-xs rounded-full">
                  2
                </span>
                <span className="absolute inset-0 rounded-full group-hover:bg-purple-500 opacity-10 scale-0 group-hover:scale-150 transition-all duration-500"></span>
              </a>

              <a
                href="#"
                className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-500 hover:to-purple-500 transition duration-300 shadow-lg shadow-purple-500/20"
              >
                <span className="material-symbols-outlined mr-1">
                  account_circle
                </span>
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Category Tabs */}
      <div className="border-b border-gray-800 bg-black bg-opacity-50 pt-4">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto pb-1 scrollbar-hide">
            {[
              "All",
              "PCs",
              "Laptops",
              "Accessories",
              "Peripherals",
              "Gaming Chairs",
              "Bundles",
            ].map((category, index) => (
              <button
                className={`px-5 py-2 rounded-t-lg font-medium transition-all duration-300 border-b-2 ${
                  index === 0
                    ? "border-purple-500 bg-gray-800 bg-opacity-60"
                    : "border-transparent hover:border-purple-400 hover:bg-gray-800 hover:bg-opacity-40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className="md:w-64 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl p-5 h-fit border border-gray-800 shadow-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="material-symbols-outlined mr-2">filter_alt</span>
              Filters
            </h2>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-300">Price Range</h3>
              <div className="px-2">
                <div className="h-2 rounded-full bg-gray-700 relative">
                  <div className="absolute h-full w-1/2 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full"></div>
                  <div className="absolute h-4 w-4 bg-white rounded-full border-2 border-purple-500 top-1/2 transform -translate-y-1/2 left-1/2 cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="absolute h-4 w-4 bg-white rounded-full border-2 border-purple-500 top-1/2 transform -translate-y-1/2 right-0 cursor-pointer hover:scale-110 transition-transform"></div>
                </div>
                <div className="flex justify-between mt-3 text-sm text-gray-400">
                  <span>$500</span>
                  <span>$5000</span>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-300">Categories</h3>
              <div className="space-y-2">
                {[
                  "Gaming PCs",
                  "Laptops",
                  "Accessories",
                  "Peripherals",
                  "Gaming Chairs",
                  "Bundles",
                ].map((category) => (
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded bg-gray-700 border-none text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
                    />
                    <span className="group-hover:text-purple-400 transition-colors duration-200">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-300">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Blue", color: "bg-blue-500" },
                  { name: "Green", color: "bg-green-500" },
                  { name: "Red", color: "bg-red-500" },
                  { name: "Purple", color: "bg-purple-500" },
                  { name: "Yellow", color: "bg-yellow-500" },
                  { name: "Cyan", color: "bg-cyan-500" },
                ].map((color) => (
                  <div
                    className={`h-8 w-8 rounded-full ${color.color} cursor-pointer border-2 border-gray-700 hover:scale-110 hover:border-white transition-all duration-200`}
                    title={color.name}
                  >
                    <span className="sr-only">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom PC */}
            <div className="mb-6">
              <a
                href="#"
                className="block p-3 rounded-lg bg-gradient-to-r from-violet-800 to-indigo-900 hover:from-violet-700 hover:to-indigo-800 shadow-lg transition-all duration-300 border border-indigo-700 group"
              >
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-2xl text-purple-400 group-hover:text-purple-300 mr-2">
                    build
                  </span>
                  <div>
                    <h3 className="font-bold">Build Your Own PC</h3>
                    <p className="text-xs text-gray-300">
                      Customize every component
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Sort By */}
            <div className="mb-6">
              <h3 className="font-medium mb-3 text-gray-300">Sort By</h3>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300">
                <option>Most Popular</option>
                <option>Price Low–High</option>
                <option>Price High–Low</option>
                <option>Best Rated</option>
              </select>
            </div>

            {/* Apply Button */}
            <button className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors duration-300 font-medium shadow-lg shadow-purple-500/30 relative overflow-hidden group">
              <span className="relative z-10">Apply Filters</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product Card 1 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
                    alt="Gaming PC"
                    className="w-full h-52 object-cover object-center"
                    keywords="gaming pc, desktop, rgb, computer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full shadow-lg">
                      On Sale
                    </span>
                    <span className="px-2 py-1 bg-purple-500 text-white text-xs font-medium rounded-full shadow-lg">
                      Best Seller
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">
                    NeoTech Quantum X Gaming PC
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    RTX 4080, i9-13900K, 64GB DDR5
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span className="material-symbols-outlined text-yellow-400">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-1">(128)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">$2,499</span>
                      <span className="text-gray-400 line-through text-sm">
                        $2,799
                      </span>
                    </div>
                    <button className="p-2 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors duration-300 shadow-lg shadow-purple-500/20 group">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1684127987312-43455fd95925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsYXB0b3B8ZW58MHx8fHwxNzU1Njg2NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Gaming Laptop"
                    className="w-full h-52 object-cover object-center"
                    keywords="gaming laptop, portable, rgb, razer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-2 py-1 bg-purple-500 text-white text-xs font-medium rounded-full shadow-lg">
                      New
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">
                    Blade Stealth Pro Gaming Laptop
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    RTX 4070, AMD Ryzen 9, 32GB DDR5
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star, i) => (
                        <span className="material-symbols-outlined text-yellow-400">
                          landscape
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-1">(95)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">$1,899</span>
                    </div>
                    <button className="p-2 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors duration-300 shadow-lg shadow-purple-500/20 group">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxrZXlib2FyZHxlbnwwfHx8fDE3NTU2ODY3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mechanical Keyboard"
                    className="w-full h-52 object-cover object-center"
                    keywords="keyboard, mechanical, rgb, gaming keyboard"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-2 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full shadow-lg">
                      Limited Edition
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">
                    HyperX Pulse RGB Mechanical Keyboard
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    Blue Switches, Full RGB, Aluminum Body
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span className="material-symbols-outlined text-yellow-400">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-1">(212)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">$149</span>
                      <span className="text-gray-400 line-through text-sm">
                        $179
                      </span>
                    </div>
                    <button className="p-2 rounded-full bg-cyan-600 hover:bg-cyan-500 transition-colors duration-300 shadow-lg shadow-cyan-500/20 group">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600303881706-b8a373dc73c3"
                    alt="Gaming Headset"
                    className="w-full h-52 object-cover object-center"
                    keywords="headset, gaming headset, audio, rgb"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full shadow-lg">
                      On Sale
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">
                    VoidPro Wireless RGB Headset
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    7.1 Surround, 24h Battery, Noise Cancelling
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star, i) => (
                        <span className="material-symbols-outlined text-yellow-400">
                          landscape
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-1">(87)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">$129</span>
                      <span className="text-gray-400 line-through text-sm">
                        $169
                      </span>
                    </div>
                    <button className="p-2 rounded-full bg-red-600 hover:bg-red-500 transition-colors duration-300 shadow-lg shadow-red-500/20 group">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 5 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 group">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1527814050087-3793815479db"
                    alt="Ultra-wide Monitor"
                    className="w-full h-52 object-cover object-center"
                    keywords="monitor, ultrawide, gaming monitor, curved"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg">
                      Best Rated
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">
                    NeoSync 34" Curved Ultra-wide Monitor
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    4K, 144Hz, 1ms, HDR1000, G-Sync
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span className="material-symbols-outlined text-yellow-400">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-1">(156)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">$799</span>
                      <span className="text-gray-400 line-through text-sm">
                        $899
                      </span>
                    </div>
                    <button className="p-2 rounded-full bg-green-600 hover:bg-green-500 transition-colors duration-300 shadow-lg shadow-green-500/20 group">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 6 */}
              <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 group">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1619725002198-6a689b72f41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjaGFpcnxlbnwwfHx8fDE3NTU2ODY3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Gaming Chair"
                    className="w-full h-52 object-cover object-center"
                    keywords="gaming chair, ergonomic, racing style"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-full shadow-lg">
                      Trending
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">
                    Emperor Pro Gaming Chair
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    RGB Lighting, 4D Armrests, 180° Recline
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star, i) => (
                        <span className="material-symbols-outlined text-yellow-400">
                          landscape
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-1">(74)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">$349</span>
                      <span className="text-gray-400 line-through text-sm">
                        $399
                      </span>
                    </div>
                    <button className="p-2 rounded-full bg-amber-600 hover:bg-amber-500 transition-colors duration-300 shadow-lg shadow-amber-500/20 group">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <div className="inline-flex bg-gray-800 bg-opacity-50 rounded-full p-1 border border-gray-700">
                <button className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>

                {[1, 2, 3, 4, 5].map((page, i) => (
                  <button
                    className={`h-9 w-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                      i === 0
                        ? "bg-purple-600 shadow-lg shadow-purple-500/30"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-12 mb-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2">history</span>
                Recently Viewed
              </h2>

              <div className="relative">
                <div className="overflow-x-auto pb-4 scrollbar-hide">
                  <div className="flex space-x-4 w-max">
                    {[
                      {
                        id: 1,
                        name: "NeoTech Quantum X Gaming PC",
                        image:
                          "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
                        price: "$2,499",
                        oldPrice: "$2,799",
                        color: "purple",
                      },
                      {
                        id: 2,
                        name: "VoidPro Wireless RGB Headset",
                        image:
                          "https://images.unsplash.com/photo-1600303881706-b8a373dc73c3",
                        price: "$129",
                        oldPrice: "$169",
                        color: "red",
                      },
                      {
                        id: 3,
                        name: "Emperor Pro Gaming Chair",
                        image:
                          "https://images.unsplash.com/photo-1619725002198-6a689b72f41d",
                        price: "$349",
                        oldPrice: "$399",
                        color: "amber",
                      },
                      {
                        id: 4,
                        name: "Blade Stealth Pro Gaming Laptop",
                        image:
                          "https://images.unsplash.com/photo-1684127987312-43455fd95925",
                        price: "$1,899",
                        oldPrice: null,
                        color: "purple",
                      },
                      {
                        id: 5,
                        name: "HyperX Pulse RGB Mechanical Keyboard",
                        image:
                          "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
                        price: "$149",
                        oldPrice: "$179",
                        color: "cyan",
                      },
                    ].map((product) => (
                      <div
                        key={product.id}
                        className={`flex-shrink-0 w-64 bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-${product.color}-500/20 group`}
                      >
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                          <div
                            className={`absolute inset-0 bg-${product.color}-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                          ></div>
                        </div>
                        <div className="p-3">
                          <h3 className="text-sm font-bold mb-1 truncate">
                            {product.name}
                          </h3>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <span className="text-base font-bold">
                                {product.price}
                              </span>
                              {product.oldPrice && (
                                <span className="text-gray-400 line-through text-xs">
                                  {product.oldPrice}
                                </span>
                              )}
                            </div>
                            <button
                              className={`p-1.5 rounded-full bg-${product.color}-600 hover:bg-${product.color}-500 transition-colors duration-300 shadow-lg shadow-${product.color}-500/20`}
                            >
                              <span className="material-symbols-outlined text-sm">
                                add_shopping_cart
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-3 p-2 rounded-full bg-gray-800 bg-opacity-80 backdrop-blur-md border border-gray-700 shadow-lg hover:bg-gray-700 transition-all duration-300 z-10">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>

                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-3 p-2 rounded-full bg-gray-800 bg-opacity-80 backdrop-blur-md border border-gray-700 shadow-lg hover:bg-gray-700 transition-all duration-300 z-10">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next: "Add a footer section with links to Support, About Us, and Social Media icons" */}

      {/* Next: "Add a Newsletter subscription form with a neon glow effect" */}
    </div>
  );
}
export default Categories;
