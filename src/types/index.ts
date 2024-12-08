export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'residential' | 'commercial' | 'industrial';
  image: string;
}