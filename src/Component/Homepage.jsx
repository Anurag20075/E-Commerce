function Homepage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-purple-900/50 text-purple-400 border border-purple-700">
                NEW RELEASE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Level Up Your{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                  Gaming Experience
                </span>
              </h2>
              <p className="text-gray-300 mb-6">
                Discover our newest high-performance gaming PCs and accessories
                designed for the ultimate gaming experience. Built for speed,
                power, and immersion.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20 flex items-center gap-2">
                  Shop Now
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
                <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors border border-gray-700">
                  Configure PC
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Gaming PC with RGB lighting"
                className="rounded-lg shadow-2xl shadow-purple-500/10 transform hover:scale-[1.02] transition-transform duration-300"
                keywords="gaming pc, rgb lighting, computer tower, gaming setup"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop By Category</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse our extensive collection of gaming and computing products,
              organized by category for easy navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Gaming PCs",
                icon: "computer",
                image:
                  "https://images.unsplash.com/photo-1626218174358-7769486c4b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBwY3xlbnwwfHx8fDE3NTU2MTczNjB8MA&ixlib=rb-4.1.0&q=80&w=1080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
              },
              {
                title: "Laptops",
                icon: "laptop_mac",
                image:
                  "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
              },
              {
                title: "Components",
                icon: "memory",
                image:
                  "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Peripherals",
                icon: "keyboard",
                image:
                  "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-750 transition-all duration-300 shadow-lg border border-gray-700 hover:border-purple-700 hover:shadow-purple-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  keywords={`${category.title}, gaming, computer hardware`}
                />
                <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-600 rounded-lg text-white">
                      <span className="material-symbols-outlined">
                        landscape
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-4 py-2 bg-purple-600 rounded-lg text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <button className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors">
              View all
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nexus Pro Gaming PC",
                image:
                  "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
                price: 1299,
                discount: 1499,
                specs: ["RTX 4070", "Intel i7", "32GB RAM", "1TB SSD"],
              },
              {
                name: "Phantom Gaming Laptop",
                image:
                  "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
                price: 1099,
                specs: ["RTX 3070", "AMD Ryzen 9", "16GB RAM", "1TB SSD"],
              },
              {
                name: "Elite RGB Gaming Bundle",
                image:
                  "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80",
                price: 249,
                discount: 299,
                specs: [
                  "Mechanical Keyboard",
                  "8000 DPI Mouse",
                  "RGB Headset",
                  "XL Mouse Pad",
                ],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-900/20 border border-gray-700 hover:border-purple-700 transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-2 right-2 z-10">
                    {product.discount && (
                      <span className="inline-block px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded">
                        SALE
                      </span>
                    )}
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    keywords={`${product.name}, gaming pc, computer hardware, gaming setup`}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-yellow-400 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="material-symbols-outlined text-sm"
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">(24 reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">
                        ${product.price}
                      </span>
                      {product.discount && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          ${product.discount}
                        </span>
                      )}
                    </div>
                    <button className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80"></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-purple-900/50 text-purple-400 border border-purple-700">
                LIMITED TIME OFFER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Summer Gaming <span className="text-purple-400">Sale</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Up to 30% off on selected gaming PCs and accessories. Upgrade
                your setup with our hottest deals of the season.
              </p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">00</div>
                  <div className="text-xs text-gray-400">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">12</div>
                  <div className="text-xs text-gray-400">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">45</div>
                  <div className="text-xs text-gray-400">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">30</div>
                  <div className="text-xs text-gray-400">Seconds</div>
                </div>
              </div>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20">
                Shop the Sale
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1442&q=80"
                alt="Gaming hardware on sale"
                className="w-full h-64 md:h-full object-cover object-center"
                keywords="gaming sale, computer components, gaming pc, discount"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Gamers Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Read trusted reviews from our satisfied customers who have leveled
              up their gaming experience with NexusGear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Turner",
                role: "Pro Gamer",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                comment:
                  "The build quality and performance of my new NexusGear PC is absolutely incredible. I've seen a massive FPS boost in all my favorite games.",
              },
              {
                name: "Samantha Chen",
                role: "Content Creator",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                comment:
                  "As a streamer, I need reliable performance. My NexusGear setup handles gaming and streaming simultaneously without breaking a sweat!",
              },
              {
                name: "Marcus Johnson",
                role: "Esports Coach",
                avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                comment:
                  "I recommend NexusGear to all my players. The customer service is top-notch and the custom builds are perfect for competitive gaming.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-900/10 border border-gray-700 hover:border-purple-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                    keywords={`${testimonial.name}, user profile, avatar`}
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-yellow-400 flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-gray-300">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for exclusive deals, new product
              announcements, and gaming tips.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from NexusGear.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Next: "Add an animated scroll-to-top button that appears when scrolling down" */}
      {/* Next: "Add a custom cursor effect for interactive elements" */}

      <div className="absolute bottom-4 right-4 z-50 transform transition-transform duration-300 translate-y-0 hover:translate-y-2">
        <div className="bg-gray-800 rounded-lg shadow-lg shadow-purple-900/20 border border-gray-700 p-4 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Your Cart (3)</h3>
            <button className="text-gray-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="space-y-3 max-h-60 overflow-y-auto">
            <div className="flex gap-3 items-center">
              <img
                src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBwY3xlbnwwfHx8fDE3NTU2MTczNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gaming PC"
                className="w-14 h-14 object-cover rounded-md"
                keywords="gaming pc, computer hardware"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">Nexus Pro Gaming PC</h4>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">$1,299</span>
                  <div className="flex items-center gap-1">
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 h-5 w-5 rounded flex items-center justify-center transition-colors">
                      -
                    </button>
                    <span className="text-xs px-2">1</span>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 h-5 w-5 rounded flex items-center justify-center transition-colors">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <img
                src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf"
                alt="RGB Gaming Bundle"
                className="w-14 h-14 object-cover rounded-md"
                keywords="gaming keyboard, rgb peripherals"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">Elite RGB Gaming Bundle</h4>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">$249</span>
                  <div className="flex items-center gap-1">
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 h-5 w-5 rounded flex items-center justify-center transition-colors">
                      -
                    </button>
                    <span className="text-xs px-2">2</span>
                    <button className="text-xs bg-gray-700 hover:bg-gray-600 h-5 w-5 rounded flex items-center justify-center transition-colors">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 my-3 pt-3">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Subtotal:</span>
              <span className="font-medium">$1,797</span>
            </div>
            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-400">Shipping:</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span className="text-purple-400">$1,797</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2">
              Checkout
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
            <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors">
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
