import React from 'react';
import { getProcedureCategories, getProceduresByCategory, getMedia } from '@/lib/wordpress';
import CasesCategoryAccordion from '@/components/casos/CasesCategoryAccordion';
import PageHero from '@/components/PageHero';

export default async function CasosDirectoryPage() {
  // Fetch all procedure categories
  const categoriesRaw = await getProcedureCategories() || [];
  
  // Resolve data for each category
  const categoriesRawData = await Promise.all(categoriesRaw.map(async (cat: any) => {
    // Determine image from ACF
    let imageUrl = '';
    const acfImage = cat.acf?.imagen_categoria || cat.acf?.hero_imagen;
    if (typeof acfImage === 'number') {
      imageUrl = (await getMedia(acfImage))?.source_url || '';
    } else {
      imageUrl = acfImage || '';
    }

    // Fetch procedures for this category
    const procsRaw = await getProceduresByCategory(cat.id) || [];
    const procedures = procsRaw
      .filter((p: any) => Array.isArray(p.acf?.casos_relacionados) && p.acf.casos_relacionados.length > 0)
      .map((p: any) => ({
        id: p.id,
        title: p.title?.rendered || '',
        slug: p.slug
      }));

    return {
      id: cat.id,
      name: cat.name,
      slug: cat.slug || '',
      image: imageUrl,
      procedures: procedures
    };
  }));

  // Filter out categories that have no procedures with cases
  const filteredCategoriesRawData = categoriesRawData.filter(cat => cat.procedures && cat.procedures.length > 0);

  const getOrder = (slug: string) => {
    const s = slug.toLowerCase();
    if (s.includes('cuerpo')) return 1;
    if (s.includes('seno')) return 2;
    if (s.includes('facial')) return 3;
    if (s.includes('tratamiento')) return 4;
    return 5;
  };

  const categories = filteredCategoriesRawData.sort((a, b) => {
    return getOrder(a.slug) - getOrder(b.slug);
  });

  // Render Page
  return (
    <main>
      {/* Re-use PageHero for the top section */}
      <PageHero 
        title="ANTES Y DESPUÉS" 
        subtitle=""
        buttonText="Agenda tu consulta"
        buttonHref="/contacto"
        imageUrl="/hero_bg.png?v=3" /* Optionally fetch from a global options page later */
      />
      
      <section className="casos-intro-section" style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--black)', marginBottom: '0.5rem', fontFamily: 'var(--font-title)' }}>
            RESULTADOS CIRUGÍA PLÁSTICA
          </h2>
          <p style={{ fontSize: '1rem', color: '#666', fontFamily: 'var(--font-subtitle)', marginBottom: '3rem' }}>
            Explora la galería de antes y después, y descubre transformaciones reales.
          </p>

          <CasesCategoryAccordion categories={categories} />
        </div>
      </section>

    </main>
  );
}
