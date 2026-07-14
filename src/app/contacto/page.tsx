import React from 'react';
import { Metadata } from 'next';
import { generateYoastMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const wpPage = await getPageBySlug('contacto');
  return generateYoastMetadata(
    wpPage?.yoast_head_json,
    'Contacto | Mendoza Plastic Surgery',
    'Comuníquese con Mendoza Plastic Surgery'
  );
}
import PageHero from '@/components/PageHero';
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
      <PageHero 
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

      </main>
  );
}
