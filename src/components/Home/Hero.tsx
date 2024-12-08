import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Électricien professionnel"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Électricien Professionnel à Dakar
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Services électriques de qualité pour particuliers et entreprises. 
          Disponible 24/7 pour vos urgences.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 sm:w-auto"
          >
            Demander un devis
          </Link>
          <a
            href="tel:+221777777777"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 sm:w-auto"
          >
            <Phone className="h-5 w-5 mr-2" />
            +221 77 777 7777
          </a>
        </div>
      </div>
    </div>
  );
}