import React from 'react';
import { Metadata } from 'next';
import { generateYoastMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const wpPage = await getPageBySlug('procedimientos');
  return generateYoastMetadata(
    wpPage?.yoast_head_json,
    'Procedimientos en Atlanta y cirugía plástica | cirujano con experiencia',
    'Conoce los procedimientos en Atlanta que están a la vanguardia de la cirugía plástica en Atlanta. Mendoza Plastic Surgery cuenta con profesionales de alta calidad.'
  );
}
import PageHero from '@/components/PageHero';
import ProceduresGrid, { ProcedureCategory, ProcedureCard } from '@/components/procedimientos/ProceduresGrid';
import { getPageBySlug, getMedia, getProcedureCategories, getProcedures } from '@/lib/wordpress';

export default async function ProcedimientosPage() {
  const wpPage = await getPageBySlug('procedimientos');
  const acf = wpPage?.acf || {};

  const heroImage = typeof acf?.hero_imagen === 'number' 
    ? (await getMedia(acf.hero_imagen))?.source_url 
    : acf?.hero_imagen;

  // Fetch ALL categories
  const rawCategories = await getProcedureCategories() || [];
  const categories: ProcedureCategory[] = rawCategories.map((c: any) => ({
    id: c.id,
    name: c.name,
    slug: c.slug
  }));

  // Fetch ALL procedures
  const rawProcedures = await getProcedures() || [];
  const procedures: ProcedureCard[] = await Promise.all(
    rawProcedures.map(async (p: any) => {
      let imageUrl = '';
      const introImagen = p.acf?.intro_imagen;
      const featuredMedia = p._embedded?.['wp:featuredmedia']?.[0]?.source_url;
      
      if (typeof introImagen === 'number') {
        imageUrl = (await getMedia(introImagen))?.source_url || '';
      } else if (typeof introImagen === 'string' && introImagen !== '') {
        imageUrl = introImagen;
      } else if (featuredMedia) {
        imageUrl = featuredMedia;
      } else if (typeof p.acf?.hero_imagen === 'number') {
        imageUrl = (await getMedia(p.acf.hero_imagen))?.source_url || '';
      } else if (typeof p.acf?.hero_imagen === 'string') {
        imageUrl = p.acf.hero_imagen;
      }
      
      return {
        id: p.id,
        title: p.title?.rendered || '',
        slug: p.slug,
        imageUrl,
        categories: p.categoria_procedimiento || []
      };
    })
  );

  return (
    <main style={{ backgroundColor: '#fff' }}>
      <PageHero 
        subtitle="NUESTROS"
        title={acf?.hero_titulo || 'PROCEDIMIENTOS'}
        desc={acf?.hero_texto}
        imageUrl={heroImage}
      />
      
      <ProceduresGrid 
        categories={categories}
        procedures={procedures}
        currentCategorySlug="todos"
      />
    </main>
  );
}
