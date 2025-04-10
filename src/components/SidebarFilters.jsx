import { motion } from "framer-motion";

const SidebarFilters = ({ isMobileFilterOpen, toggleMobileFilter, brands }) => {
  return (
    <>
      {/* Sidebar Filters Button (for mobile) */}
      <div className="md:hidden">
        <button
          className="p-2 bg-primary-600 text-white rounded-lg"
          onClick={toggleMobileFilter} // عند الضغط على الزر، يقوم بتغيير حالة الـ Sidebar
        >
          Filter
        </button>
      </div>

      {/* Sidebar Filters */}
      <motion.aside
        className={`w-full lg:w-64 self-start bg-white p-4 rounded-lg shadow-lg max-h-[calc(100vh-6rem)] overflow-y-auto fixed inset-0 z-50
          ${
            isMobileFilterOpen ? "translate-x-0" : "-translate-x-full"
          }  // في الشاشات الصغيرة يظهر أو يختفي
          transition-transform duration-300 ease-in-out 
          lg:relative lg:block lg:top-16 lg:sticky lg:h-[calc(100vh-6rem)]`} // في الشاشات الكبيرة، يظهر ثابتًا دون حركة
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-semibold text-lg mb-4 text-gray-800">Filters</h2>

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
          {["Electronics", "Fashion", "Home & Garden", "Sports", "Beauty"].map(
            (category) => (
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
            )
          )}
        </div>

        {/* Brands */}
        <div>
          <h3 className="font-medium mb-3 text-gray-700">Brands</h3>
          {brands?.slice(0, 4).map((brand) => (
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
      </motion.aside>
    </>
  );
};

export default SidebarFilters;
