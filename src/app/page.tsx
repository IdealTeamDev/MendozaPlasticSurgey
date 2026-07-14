import React from 'react';
import { Metadata } from 'next';

import { generateYoastMetadata } from '@/lib/seo';
import Hero from '@/components/Hero';
import HomeIntroText from '@/components/HomeIntroText';
import About from '@/components/About';
import Badges from '@/components/Badges';
import Procedures from '@/components/Procedures';
import Financing from '@/components/Financing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { getPageBySlug, getMedia } from '@/lib/wordpress';

export async function generateMetadata(): Promise<Metadata> {
  const wpPage = await getPageBySlug('inicio');
  return generateYoastMetadata(
    wpPage?.yoast_head_json,
    'Mendoza Plastic Surgery | Cirujano plástico en Atlanta, Georgia',
    'Mendoza Plastic Surgery en Duluth, Georgia. El Dr. Mendoza, cirujano plástico, realiza cirugías corporal, mamaria, lifting facial y más. Reserve su consulta.'
  );
}


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

  // Resolver insignias (imágenes)
  let resolvedBadges: { imageUrl: string }[] = [];
  if (Array.isArray(acf?.badges_list)) {
    resolvedBadges = await Promise.all(
      acf.badges_list.map(async (badge: any) => {
        if (typeof badge.insignia === 'number') {
          const media = await getMedia(badge.insignia);
          return { imageUrl: media?.source_url || '' };
        }
        return { imageUrl: badge.insignia || '' };
      })
    );
    // Filtrar aquellas que no tengan imagen
    resolvedBadges = resolvedBadges.filter(b => b.imageUrl !== '');
  }

  // Resolver procedimientos
  let resolvedProcedures: any[] = [];
  if (Array.isArray(acf?.procedimientos_lista)) {
    resolvedProcedures = await Promise.all(
      acf.procedimientos_lista.map(async (proc: any, index: number) => {
        let imageUrl = '';
        if (typeof proc.imagen === 'number') {
          const media = await getMedia(proc.imagen);
          imageUrl = media?.source_url || '';
        } else {
          imageUrl = proc.imagen || '';
        }
        let subcategorias: any[] = [];
        if (Array.isArray(proc.subcategorias)) {
          subcategorias = await Promise.all(
            proc.subcategorias.map(async (sub: any) => {
              let iconoUrl = '';
              if (typeof sub.icono === 'number') {
                const iconMedia = await getMedia(sub.icono);
                iconoUrl = iconMedia?.source_url || '';
              } else {
                iconoUrl = sub.icono || '';
              }
              return {
                nombre: sub.nombre || '',
                enlace: sub.enlace || sub.url || '#',
                iconoUrl: iconoUrl
              };
            })
          );
        }

        return {
          id: `proc-${index}`,
          tabLabel: proc.titulo_pestana || `Procedimiento ${index + 1}`,
          desc: proc.descripcion || '',
          imageUrl: imageUrl,
          enlace: proc.url_boton_procedimientos || proc.enlace || proc.url || '/procedimientos',
          subcategorias: subcategorias
        };
      })
    );
  }

  return (
    <main>
      {/* Usamos el componente original y le pasamos los datos de ACF si existen */}
      <Hero 
        subtitle={acf?.hero_subtitulo}
        title={acf?.hero_titulo}
        text={acf?.hero_texto || acf?.texto_hero}
        imageUrl={heroImage}
      />
      
      {/* Nueva seccion WYSIWYG justo despues del hero (2da seccion) */}
      <HomeIntroText 
        subtitle={acf?.home_intro_subtitulo} 
        content={acf?.home_intro_text} 
      />
      
      {/* Testimonios despues del nuevo texto */}
      <Testimonials />
      
      <About 
        subtitle={acf?.about_subtitulo}
        title={acf?.about_titulo}
        text={acf?.about_texto}
        imageUrl={aboutImage}
      />
      
      <Badges badges={resolvedBadges} />

      <Procedures 
        title={acf?.procedimientos_titulo}
        procedures={resolvedProcedures}
      />
      
      <Financing 
        title={acf?.financiamiento_titulo}
        text={acf?.texto_financiamiento}
        buttonText={acf?.financiamiento_boton}
      />
      
      <Contact 
        subtitle={acf?.contacto_subtitulo}
        titleBold={acf?.contacto_titulo_bold}
        text={acf?.contacto_texto}
      />

      </main>
  );
}
