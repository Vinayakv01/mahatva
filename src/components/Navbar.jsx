import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CategoryDropdown from './CategoryDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
    setIsProductsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="/Main logo.png"
              alt="Mechanical Seal Manufacturer Company"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-[#F25C05] bg-orange-50' 
                  : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
              }`}
            >
              Home
            </Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  isCategoriesOpen || location.pathname.startsWith('/categories')
                    ? 'text-[#F25C05] bg-orange-50' 
                    : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
                }`}
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                Categories
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCategoriesOpen && (
                <CategoryDropdown 
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                />
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  isProductsOpen || location.pathname.startsWith('/products')
                    ? 'text-[#F25C05] bg-orange-50' 
                    : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#F25C05]"
                    onClick={closeMenu}
                  >
                    All Products
                  </Link>
                  <Link
                    to="/products?featured=true"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#F25C05]"
                    onClick={closeMenu}
                  >
                    Featured Products
                  </Link>
                  <Link
                    to="/products?new=true"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#F25C05]"
                    onClick={closeMenu}
                  >
                    New Arrivals
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-[#F25C05] bg-orange-50' 
                  : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-[#F25C05] bg-orange-50' 
                  : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-[#F25C05] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#F25C05] focus:outline-none focus:text-[#F25C05]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') 
                    ? 'text-[#F25C05] bg-orange-50' 
                    : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <Link
                to="/categories"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/categories') 
                    ? 'text-[#F25C05] bg-orange-50' 
                    : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
                }`}
                onClick={closeMenu}
              >
                Categories
              </Link>
              
              <Link
                to="/products"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/products') 
                    ? 'text-[#F25C05] bg-orange-50' 
                    : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
                }`}
                onClick={closeMenu}
              >
                Products
              </Link>
              
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/about') 
                    ? 'text-[#F25C05] bg-orange-50' 
                    : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') 
                    ? 'text-[#F25C05] bg-orange-50' 
                    : 'text-gray-700 hover:text-[#F25C05] hover:bg-orange-50'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              
              <Link
                to="/contact"
                className="block bg-[#F25C05] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600 transition-colors"
                onClick={closeMenu}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
