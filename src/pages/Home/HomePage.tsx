import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@components/Hero/Hero';
import { TechShowcase } from '@components/TechShowcase/TechShowcase';
import { ProofMetrics } from '@components/ProofMetrics/ProofMetrics';
import { Work } from '@components/Work/Work';
import { Experience } from '@components/Experience/Experience';
import { Skills } from '@components/Skills/Skills';
import { Blog } from '@components/Blog/Blog';
import { Contact } from '@components/Contact/Contact';

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Smooth scrolling setup
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  // Handle hash navigation from other pages
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <TechShowcase />
      <ProofMetrics />
      <Work />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
    </main>
  );
}
