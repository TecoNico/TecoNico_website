import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Home, Package, BookOpen, Users, Phone } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-gradient-to-r from-black/80 to-gray-900/80'
    }`}>
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">TN</span>
              </div>
              <div className="logo text-2xl md:text-3xl font-bold">
                <span className="text-white">Teco</span>
                <span className="text-red-500 animate-pulse">Nico</span>
              </div>
            </div>
            
            {/* Slogan - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="text-sm">
                <div className="text-red-500 font-medium animate-fade-in">
                  Don't wait for future..
                </div>
                <div className="text-gray-300 font-medium animate-fade-in delay-500">
                  ..Let's change the Present
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors duration-200 font-medium group"
            >
              <Home size={18} className="group-hover:animate-bounce" />
              <span>Home</span>
            </a>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProducts}
                className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors duration-200 font-medium group"
              >
                <Package size={18} className="group-hover:animate-bounce" />
                <span>Products</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 animate-fade-in">
                  <a 
                    href="/healthcare" 
                    className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 border-b border-gray-100 last:border-0"
                  >
                    <div className="font-medium">Healthcare</div>
                    <div className="text-xs text-gray-500 mt-1">Smart health solutions</div>
                  </a>
                  <a 
                    href="/homeautomation" 
                    className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                  >
                    <div className="font-medium">Home Automation</div>
                    <div className="text-xs text-gray-500 mt-1">Intelligent home systems</div>
                  </a>
                </div>
              )}
            </div>

            <a 
              href="/blog" 
              className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors duration-200 font-medium group"
            >
              <BookOpen size={18} className="group-hover:animate-bounce" />
              <span>Blogs</span>
            </a>
            
            <a 
              href="/team" 
              className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors duration-200 font-medium group"
            >
              <Users size={18} className="group-hover:animate-bounce" />
              <span>Our Team</span>
            </a>
            
            <a 
              href="/contact" 
              className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium"
            >
              <Phone size={18} />
              <span>Contact Us</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-red-500 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Slogan */}
        <div className="lg:hidden pb-4">
          <div className="text-xs text-center">
            <div className="text-red-500 font-medium">Don't wait for future..</div>
            <div className="text-gray-300 font-medium">..Let's change the Present</div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              <a 
                href="/" 
                className="flex items-center space-x-3 text-white hover:text-red-500 transition-colors duration-200 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={20} />
                <span>Home</span>
              </a>
              
              <div>
                <button
                  onClick={toggleProducts}
                  className="flex items-center space-x-3 text-white hover:text-red-500 transition-colors duration-200 py-2 font-medium w-full justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <Package size={20} />
                    <span>Products</span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {isProductsOpen && (
                  <div className="ml-8 mt-2 space-y-2 animate-fade-in">
                    <a 
                      href="/healthcare" 
                      className="block text-gray-300 hover:text-red-400 transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Healthcare
                    </a>
                    <a 
                      href="/homeautomation" 
                      className="block text-gray-300 hover:text-red-400 transition-colors duration-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home Automation
                    </a>
                  </div>
                )}
              </div>
              
              <a 
                href="/blog" 
                className="flex items-center space-x-3 text-white hover:text-red-500 transition-colors duration-200 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen size={20} />
                <span>Blogs</span>
              </a>
              
              <a 
                href="/team" 
                className="flex items-center space-x-3 text-white hover:text-red-500 transition-colors duration-200 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users size={20} />
                <span>Our Team</span>
              </a>
              
              <a 
                href="/contact" 
                className="flex items-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={20} />
                <span>Contact Us</span>
              </a>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
      `}</style>
    </header>
  );
};

export default Nav;