import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Challenges', href: '#challenges' },
    { name: 'Points', href: '#points' },
    { name: 'Join', href: '#join' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-stone-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2 text-stone-100 font-bold text-xl tracking-tight">
              <Shield className="w-8 h-8 text-orange-600" />
              <span>COMPETENCE GRID</span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-orange-500 font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#join"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Start Now
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-800 border-t border-stone-700 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-stone-300 hover:text-orange-500 hover:bg-stone-700 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-orange-600 text-white px-3 py-3 rounded-md font-bold"
            >
              Start Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
