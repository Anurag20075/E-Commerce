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
                <button
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-8 hover:from-purple-400 hover:to-purple-500
                rounded-3xl font-medium transform hover:scale-110 transition-all duration-300 shadow-lg "
                >
                  Shop Now
                </button>
                <button
                  className="border border-purple-500 text-white py-3 px-8 bg-transparent
                rounded-3xl font-medium  transition-all duration-300 shadow-lg hover:bg-primary-500/10 transform hover:-translate-y-1"
                >
                  Explore More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                alt="RTX 5090 Graphics Card"
                className="rounded-lg shadow-2xl shadow-primary-500/20 w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                keywords="gpu, graphics card, rtx, gaming hardware, computer component"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-primary-900/20 to-transparent opacity-50"></div>
      </section>
      {/* Deal of The Day */}
      <section className="py-12 px-4 bg-gray-900/50 border-y border-gray-800"></section>
    </div>
  );
}
export default Home;
