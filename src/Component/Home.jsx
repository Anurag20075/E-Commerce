import { React } from "react";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white font-sans">
      <section className="relative py-12 px-4 md:py-24 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl  font-bold">
                <span className="block">Ultimate Gaming</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                  Experience Awaits
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Unleash the power of next-gen with the revolutionary RTX 5090.
                Unmatched performance for gamers and creators.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-8 hover:from-purple-400 hover:to-purple-500 shadow-purple-500/20 hover:shadow-purple-500/40  rounded-3xl font-medium transform hover:scale-110 transition-all duration-300 shadow-lg ">
                  Shop Now
                </button>
                <button
                  className="border border-purple-500 text-white py-3 px-8 bg-transparent
                rounded-3xl font-medium  transition-all duration-300 shadow-lg hover:bg-purple-500/10 transform hover:-translate-y-1"
                >
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
      {/* Deal of The Day */}
      <section className="py-12 px-4 bg-gray-900/50 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col items-center md:flex-row mb-8 justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
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
          <div
            className="bg-gray-800/30 backdrop-blur-md rounded-lg p-6 border border-gray-700
          hover:border-purple-500 transform transition-all duration-300 group shadow-lg"
          >
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
                  <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-3xl font-bold transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-1">
                    Add to Cart
                  </button>
                  <button className="px-6 py-2 bg-transparent border border-gray-600 hover:border-purple-500 rounded-3xl transition-all duration-300 transform hover:-translate-y-1">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h1 className=" flex justify-center text-4xl font-semibold">
            Featured Products
          </h1>
          <div className="grid cols-grid-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
            <a
              href="#"
              className="bg-gray-800/30 backdrop-blur-md rounded-lg p-4 border border-gray-700 hover:border-purple-500 transform transition-all duration-300 group shadow-lg flex flex-col items-center"
            >
              <span className="material-symbols-outlined text-4xl text-purple-500 group-hover:text-purple-300 transition-colors">
                laptop
              </span>
              <span className="font-semibold text-center mt-2">
                Gaming Laptops
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
