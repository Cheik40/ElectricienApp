import React, { useState } from 'react';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { NavLink } from '../Navigation/NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Zap className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">ElectroSenegal</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/realisations">Réalisations</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          
          <div className="hidden md:flex items-center">
            <a
              href="tel:+221777777777"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
            >
              <Phone className="h-4 w-4 mr-2" />
              +221 77 777 7777
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" onNavigate={closeMenu}>Accueil</NavLink>
            <NavLink href="/services" onNavigate={closeMenu}>Services</NavLink>
            <NavLink href="/realisations" onNavigate={closeMenu}>Réalisations</NavLink>
            <NavLink href="/contact" onNavigate={closeMenu}>Contact</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <a
              href="tel:+221777777777"
              className="flex items-center px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            >
              <Phone className="h-5 w-5 mr-3 text-yellow-500" />
              +221 77 777 7777
            </a>
          </div>
        </div>
      )}
    </header>
  );
}