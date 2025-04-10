import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import ProductCard from "./components/ProductCard";
import BrandCard from "./components/BrandCard";
import Footer from "./components/Footer";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const newProducts = [
    {
      name: "Wireless Earbuds",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    },
    {
      name: "Tablat",
      price: 699.99,
      image:
        "https://www.eastasiaeg.com/media/catalog/product/cache/7cc761d78ccccdcc12015db63d803651/a/9/a9.jpg-graphite_1.jpg",
    },
    {
      name: "Smart Watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400",
    },
    {
      name: "Running Shoes",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    },
  ];

  const recommendedProducts = [
    {
      name: "Laptop",
      price: 999.99,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    },
    {
      name: "Monitor",
      price: 8999.99,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Smartphone",
      price: 699.99,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    },
    {
      name: "Headphones",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
  ];

  const brands = [
    {
      name: "Apple",
      logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=50",
    },
    {
      name: "Samsung",
      logo: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=50",
    },
    {
      name: "Nike",
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=50",
    },
    {
      name: "Adidas",
      logo: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=50",
    },
  ];

  return (
    <div className="min-h-screen bg-[#eeeff1]">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 mt-16 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div className="flex flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.aside
            className={`w-full lg:w-64 md:w-60 self-start lg:sticky top-16 lg:top-44 ${
              isSidebarVisible ? "block" : "hidden"
            } md:block lg:block`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white p-4 rounded-lg shadow-lg max-h-[calc(100vh-6rem)] overflow-y-auto">
              <h2 className="font-semibold text-lg mb-4 text-gray-800">
                Filters
              </h2>
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-gray-700">Price Range</h3>
                <input
                  type="range"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-gray-700">Categories</h3>
                {[
                  "Electronics",
                  "Fashion",
                  "Home & Garden",
                  "Sports",
                  "Beauty",
                ].map((category) => (
                  <label
                    key={category}
                    className="flex items-center mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="mr-2 rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
              {/* Brands */}
              <div>
                <h3 className="font-medium mb-3 text-gray-700">Brands</h3>
                {brands.slice(0, 4).map((brand) => (
                  <label
                    key={brand.name}
                    className="flex items-center mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="mr-2 rounded text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-gray-700">{brand.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* New Products */}
            <section className="mb-12">
              <motion.h2
                className="text-2xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                New Arrivals
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newProducts.map((product, index) => (
                  <ProductCard
                    key={product.name}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Recommended Products */}
            <section className="mb-12">
              <motion.h2
                className="text-2xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Recommended For You
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedProducts.map((product, index) => (
                  <ProductCard
                    key={product.name}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Brands */}
            <section>
              <motion.h2
                className="text-2xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Featured Brands
              </motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {brands.map((brand, index) => (
                  <BrandCard key={brand.name} brand={brand} index={index} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setSidebarVisible(!isSidebarVisible)}
            className="lg:hidden fixed bottom-6 left-6 bg-primary-600 text-white p-3 rounded-full shadow-lg"
          >
            <span className="text-xl">{isSidebarVisible ? "←" : "→"}</span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
