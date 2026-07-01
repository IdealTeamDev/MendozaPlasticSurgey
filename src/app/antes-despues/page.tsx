import React from 'react';
import { getProcedureCategories, getProceduresByCategory, getMedia } from '@/lib/wordpress';
import CasesCategoryAccordion from '@/components/casos/CasesCategoryAccordion';
import ProcedureDetailHero from '@/components/procedimientos/ProcedureDetailHero';

export default async function CasosDirectoryPage() {
  // Fetch all procedure categories
  const categoriesRaw = await getProcedureCategories() || [];
  
  // Resolve data for each category
  const categoriesRawData = await Promise.all(categoriesRaw.map(async (cat: any) => {
    // Determine image from ACF
    let imageUrl = '';
    const acfImage = cat.acf?.imagen_categoria;
    if (typeof acfImage === 'number') {
      imageUrl = (await getMedia(acfImage))?.source_url || '';
    } else {
      imageUrl = acfImage || '';
    }

    // Fetch procedures for this category
    const procsRaw = await getProceduresByCategory(cat.id) || [];
    const procedures = procsRaw.map((p: any) => ({
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

  const orderMap: { [key: string]: number } = {
    'cirugia-de-cuerpo': 1,
    'cirugia-de-senos': 2,
    'cirugia-facial': 3,
    'tratamientos': 4,
    'inyectables': 5
  };

  const categories = categoriesRawData.sort((a, b) => {
    const aOrder = orderMap[a.slug?.toLowerCase()] || 99;
    const bOrder = orderMap[b.slug?.toLowerCase()] || 99;
    return aOrder - bOrder;
  });

  // Render Page
  return (
    <main>
      {/* Re-use ProcedureDetailHero for the top section */}
      <ProcedureDetailHero 
        title="ANTES Y DESPUÉS" 
        subtitle=""
        buttonText="Agenda tu consulta"
        buttonHref="/contacto"
        imageUrl="/hero_bg.png" /* Optionally fetch from a global options page later */
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
