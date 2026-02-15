import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 hover:opacity-95 transition-opacity">
            <Logo />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-brand-green font-bold text-sm uppercase tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:647-782-9061"
              className="flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full hover:bg-brand-green transition-colors font-bold shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>647-782-9061</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-2 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-lg font-bold text-stone-600 hover:text-brand-green hover:bg-stone-50 rounded-xl"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <a
                href="tel:647-782-9061"
                className="flex w-full items-center justify-center gap-2 bg-brand-navy text-white px-5 py-4 rounded-xl font-bold text-lg hover:bg-brand-green transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call 647-782-9061</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;