import React from 'react';
import { Hero } from '../components/Home/Hero';
import { Services } from '../components/Home/Services';
import { Projects } from '../components/Home/Projects';
import { Testimonials } from '../components/Home/Testimonials';
import { ContactForm } from '../components/Contact/ContactForm';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <ContactForm />
    </>
  );
}