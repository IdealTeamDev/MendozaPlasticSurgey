import React from 'react';
import ProcedureDetailHero from '@/components/procedimientos/ProcedureDetailHero';
import ProceduresGrid, { ProcedureCategory, ProcedureCard } from '@/components/procedimientos/ProceduresGrid';
import { getPageBySlug, getMedia, getProcedureCategories, getProcedures } from '@/lib/wordpress';

export default async function ProcedimientosCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  // Fetch ALL categories
  const rawCategories = await getProcedureCategories() || [];
  
  // Find current category
  const currentCategoryData = rawCategories.find((c: any) => c.slug === category);
  const catAcf = currentCategoryData?.acf || {};

  let catHeroImage = '';
  if (typeof catAcf?.hero_imagen === 'number') {
    catHeroImage = (await getMedia(catAcf.hero_imagen))?.source_url || '';
  } else if (typeof catAcf?.hero_imagen === 'string' && catAcf.hero_imagen !== '') {
    catHeroImage = catAcf.hero_imagen;
  } else {
    // Fallback to general procedures hero
    const wpPage = await getPageBySlug('procedimientos');
    const generalAcf = wpPage?.acf || {};
    catHeroImage = typeof generalAcf?.hero_imagen === 'number' 
      ? (await getMedia(generalAcf.hero_imagen))?.source_url 
      : generalAcf?.hero_imagen;
  }
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
      <ProcedureDetailHero 
        title={currentCategoryData?.name || category.toUpperCase()}
        subtitle="PROCEDIMIENTOS"
        imageUrl={catHeroImage}
      />

      {(catAcf?.intro_titulo || catAcf?.intro_descripcion) && (
        <div className="container" style={{ textAlign: 'center', margin: '4rem auto 2rem', maxWidth: '900px', padding: '0 1.5rem' }}>
          {catAcf?.intro_titulo && (
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '1.2rem', fontWeight: 400, color: '#111' }}>
              {catAcf.intro_titulo}
            </h2>
          )}
          {catAcf?.intro_descripcion && (
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.6, margin: 0 }}>
              {catAcf.intro_descripcion}
            </p>
          )}
        </div>
      )}
      
      <ProceduresGrid 
        categories={categories}
        procedures={procedures}
        currentCategorySlug={category}
        showTabs={false}
      />
    </main>
  );
}
