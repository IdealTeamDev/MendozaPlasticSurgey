import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contacto/ContactHero';
import ContactDetailsForm from '@/components/contacto/ContactDetailsForm';
import ContactMap from '@/components/contacto/ContactMap';
import { getPageBySlug, getMedia } from '@/lib/wordpress';

export default async function ContactoPage() {
  const wpPage = await getPageBySlug('contacto');
  const acf = wpPage?.acf || {};
  
  const heroImage = typeof acf?.hero_imagen === 'number' 
    ? (await getMedia(acf.hero_imagen))?.source_url 
    : acf?.hero_imagen;

  return (
    <main>
      <Navbar />
      
      <ContactHero 
        subtitle={acf?.hero_subtitulo}
        title={acf?.hero_titulo}
        desc={acf?.hero_texto}
        imageUrl={heroImage}
      />
      <ContactDetailsForm 
        location={acf?.ubicacion}
        phone={acf?.telefono}
        email={acf?.email}
        schedule={acf?.horarios}
      />
      <ContactMap />

      <Footer />
    </main>
  );
}
