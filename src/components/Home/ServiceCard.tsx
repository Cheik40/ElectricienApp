import React from 'react';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons];
  
  if (!Icon) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-yellow-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
      <Link
        to={`/services#${service.id}`}
        className="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700"
      >
        En savoir plus
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}