import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "NVIDIA GeForce RTX 4090",
      price: 1599.99,
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
      category: "Graphics Card",
      rating: 4.8,
    },
    {
      id: 2,
      name: "AMD Ryzen 9 7950X",
      price: 699.99,
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f1725c79?auto=format&fit=crop&w=600&q=80",
      category: "Processor",
      rating: 4.7,
    },
    {
      id: 3,
      name: "ASUS ROG Strix GeForce RTX 4080",
      price: 1299.99,
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
      category: "Graphics Card",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Corsair Vengeance DDR5 32GB",
      price: 249.99,
      image:
        "https://images.unsplash.com/photo-1593692674566-75d0606b6c0e?auto=format&fit=crop&w=600&q=80",
      category: "Memory",
      rating: 4.5,
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
    <section className="py-16 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-blue-400">Products</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out our top-of-the-line computer components and gaming
            peripherals
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
