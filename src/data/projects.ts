import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Installation Commerciale - Centre Commercial Dakar',
    description: 'Installation électrique complète pour un nouveau centre commercial à Dakar.',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    title: 'Projet Résidentiel - Villa Moderne',
    description: 'Installation électrique pour une villa de luxe avec système domotique.',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    title: 'Installation Industrielle - Usine de Production',
    description: 'Mise en place du système électrique pour une usine de production.',
    category: 'industrial',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];