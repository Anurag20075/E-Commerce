import React from "react";
import { motion } from "framer-motion";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Gaming PCs",
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f1725c79?auto=format&fit=crop&w=600&q=80",
      count: 24,
    },
    {
      id: 2,
      name: "Laptops",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
      count: 18,
    },
    {
      id: 3,
      name: "Graphics Cards",
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
      count: 32,
    },
    {
      id: 4,
      name: "Processors",
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f1725c79?auto=format&fit=crop&w=600&q=80",
      count: 16,
    },
    {
      id: 5,
      name: "Memory",
      image:
        "https://images.unsplash.com/photo-1593692674566-75d0606b6c0e?auto=format&fit=crop&w=600&q=80",
      count: 28,
    },
    {
      id: 6,
      name: "Peripherals",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
      count: 45,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Shop by <span className="text-blue-400">Category</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse our extensive collection of computer and gaming products
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="relative rounded-xl overflow-hidden h-64 shadow-lg cursor-pointer group"
              whileHover={{ y: -10 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-gray-300">{category.count} products</p>
              </div>

              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
