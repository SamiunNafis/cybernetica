import React from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-500 text-gray-300 pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-7 w-7 text-primary-500" />
              <span className="text-xl font-display font-bold tracking-wider text-white">
                CYBERNETICA
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Pioneering the future of human enhancement with cutting-edge cybernetic technology. 
              We're redefining the boundaries of human potential.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/products', label: 'Products' },
                { path: '/about', label: 'About Us' },
                { path: '/faq', label: 'FAQ' },
                { path: '/privacy', label: 'Privacy Policy' },
                { path: '/terms', label: 'Terms of Service' },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4 text-lg">Products</h3>
            <ul className="space-y-3">
              {[
                { label: 'Neural Interfaces' },
                { label: 'Bionic Limbs' },
                { label: 'Ocular Enhancements' },
                { label: 'Exo-Skeletons' },
                { label: 'Cognitive Amplifiers' },
                { label: 'Organ Replacements' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-sm">Neo-Tokyo Tower, District 7, Japan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-sm">+1 (800) CYBER-00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <span className="text-sm">info@cybernetica.tech</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md text-sm transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Cybernetica Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400">Terms of Service</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;