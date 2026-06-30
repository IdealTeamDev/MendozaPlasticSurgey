import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Badges from '@/components/Badges';
import Procedures from '@/components/Procedures';
import Financing from '@/components/Financing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getPageBySlug } from '@/lib/wordpress';

export default async function Home() {
  const wpPage = await getPageBySlug('inicio'); // Ajusta 'inicio' al slug real en WP

  // Extraer datos de ACF si existen
  const acf = wpPage?.acf || {};

  return (
    <main>
      <Navbar />
      
      {/* Usamos el componente original y le pasamos los datos de ACF si existen */}
      <Hero 
        subtitle={acf?.hero_subtitulo}
        title={acf?.hero_titulo}
        text={acf?.hero_texto}
        imageUrl={acf?.hero_imagen}
      />
      
      <About />
      <Badges />
      <Procedures />
      <Financing />
      <Testimonials />
      <Contact />

      <Footer />
    </main>
  );
}
