import React from 'react';
import ProcedureHero from '@/components/procedimientos/ProcedureHero';
import ProceduresGrid, { ProcedureCategory, ProcedureCard } from '@/components/procedimientos/ProceduresGrid';
import { getPageBySlug, getMedia, getProcedureCategories, getProcedures } from '@/lib/wordpress';

export default async function ProcedimientosCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
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
      const featuredMedia = p._embedded?.['wp:featuredmedia']?.[0]?.source_url;
      const acfImg = p.acf?.hero_imagen || p.acf?.intro_imagen;
      
      if (featuredMedia) {
        imageUrl = featuredMedia;
      } else if (typeof acfImg === 'number') {
        imageUrl = (await getMedia(acfImg))?.source_url || '';
      } else if (typeof acfImg === 'string') {
        imageUrl = acfImg;
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
      <ProcedureHero 
        title={acf?.hero_titulo}
        desc={acf?.hero_texto}
        imageUrl={heroImage}
      />
      
      <ProceduresGrid 
        categories={categories}
        procedures={procedures}
        currentCategorySlug={category}
      />
    </main>
  );
}
