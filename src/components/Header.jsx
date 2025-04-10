import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const countries = [
    {
      name: "USA",
      flag: "🇺🇸",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
    },
    {
      name: "UK",
      flag: "🇬🇧",
    },
    {
      name: "France",
      flag: "🇫🇷",
    },
    {
      name: "Germany",
      flag: "🇩🇪",
    },
    {
      name: "Spain",
      flag: "🇪🇸",
    },
    {
      name: "Italy",
      flag: "🇮🇹",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
    },
  ];

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Beauty",
  ];

  return (
    <header className="bg-[#1b2435] shadow-md  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-200 hover:text-primary-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <motion.span
              className="text-2xl font-bold ml-2 text-[#2196f3]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ShopEase
            </motion.span>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-4">
            <motion.div
              className="relative w-full"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </motion.div>
          </div>

          {/* Icons */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button className="p-2 text-gray-200 hover:text-primary-600">
              <Scale size={24} />
            </button>
            <button className="p-2 text-gray-200 hover:text-primary-600">
              <Heart size={24} />
            </button>
            <button className="p-2 text-gray-200 hover:text-primary-600 relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-[#2196f3] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </motion.div>
        </div>

        {/* Countries */}
        <motion.div
          className="py-2 overflow-x-auto scrollbar-hide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex justify-center items-center">
            {countries.map((country) => (
              <motion.button
                key={country.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b2435] hover:bg-[#2196f3] min-w-fit transition-all"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="text-sm text-white font-semibold whitespace-nowrap">
                  {country.name}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Categories */}
        <nav className="hidden lg:flex py-2 space-x-6 items-center justify-center">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-gray-200 font-medium hover:text-primary-600 flex items-center transition-colors duration-200"
            >
              {category}
              <ChevronDown size={16} className="ml-1" />
            </motion.button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
