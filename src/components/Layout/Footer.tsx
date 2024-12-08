import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À Propos</h3>
            <p className="text-gray-300">
              ElectroSenegal, votre partenaire de confiance pour tous vos besoins en électricité 
              à Dakar et ses environs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                <span>+221 77 777 7777</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-yellow-500" />
                <span>contact@electrosenegal.sn</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-yellow-500" />
                <span>Lun - Ven: 8h - 18h</span>
              </li>
              <li className="ml-7">Sam: 9h - 15h</li>
              <li className="ml-7">Urgences 24/7</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} ElectroSenegal. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}