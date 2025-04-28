import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Brain, Cpu, BarChart3 } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-400/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-display font-bold tracking-wider text-white">
              CYBERNETICA
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Products' },
              { path: '/about', label: 'About Us' },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary-400 border-b-2 border-primary-500'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-2 px-5 rounded-md font-medium hover:shadow-glow transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-dark-300 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {[
                { path: '/', label: 'Home', icon: <Cpu className="h-5 w-5" /> },
                { path: '/products', label: 'Products', icon: <BarChart3 className="h-5 w-5" /> },
                { path: '/about', label: 'About Us', icon: <Brain className="h-5 w-5" /> },
              ].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-2 rounded-md ${
                      isActive
                        ? 'bg-primary-900/40 text-primary-400'
                        : 'text-gray-300 hover:bg-dark-200'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
              <button className="mt-2 w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-2 px-5 rounded-md font-medium hover:shadow-glow transition-all duration-300">
                Get Started
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;