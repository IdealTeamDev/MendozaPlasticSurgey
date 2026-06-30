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
import { getPageBySlug, getMedia } from '@/lib/wordpress';

export default async function Home() {
  const wpPage = await getPageBySlug('inicio'); // Ajusta 'inicio' al slug real en WP

  // Extraer datos de ACF si existen
  const acf = wpPage?.acf || {};

  // Resolver las imágenes si ACF devuelve IDs numéricos
  const heroImage = typeof acf?.hero_imagen === 'number' 
    ? (await getMedia(acf.hero_imagen))?.source_url 
    : acf?.hero_imagen;
    
  const aboutImage = typeof acf?.about_imagen === 'number' 
    ? (await getMedia(acf.about_imagen))?.source_url 
    : acf?.about_imagen;
    
  const procedimientosImage = typeof acf?.procedimientos_imagen === 'number' 
    ? (await getMedia(acf.procedimientos_imagen))?.source_url 
    : acf?.procedimientos_imagen;

  return (
    <main>
      <Navbar />
      
      {/* Usamos el componente original y le pasamos los datos de ACF si existen */}
      <Hero 
        subtitle={acf?.hero_subtitulo}
        title={acf?.hero_titulo}
        text={acf?.hero_texto || acf?.texto_hero}
        imageUrl={heroImage}
      />
      
      <About 
        subtitle={acf?.about_subtitulo}
        title={acf?.about_titulo}
        text={acf?.about_texto}
        imageUrl={aboutImage}
      />
      
      <Badges 
        title1={acf?.badges_titulo_1}
        title2={acf?.badges_titulo_2}
        title3={acf?.badges_titulo_3}
      />
      
      <Procedures 
        title={acf?.procedimientos_titulo}
        desc={acf?.procedimientos_desc}
        imageUrl={procedimientosImage}
      />
      
      <Financing 
        title={acf?.financiamiento_titulo}
        buttonText={acf?.financiamiento_boton}
      />
      
      <Testimonials />
      
      <Contact 
        subtitle={acf?.contacto_subtitulo}
        titleBold={acf?.contacto_titulo_bold}
        text={acf?.contacto_texto}
      />

      <Footer />
    </main>
  );
}
