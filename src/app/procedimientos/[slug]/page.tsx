import React from 'react';
import { getProcedureBySlug, getMedia, getCasoById, getProceduresByCategory } from '@/lib/wordpress';

// Common Components
import ProcedureDetailHero from '@/components/procedimientos/ProcedureDetailHero';
import ProcedureIntro from '@/components/procedimientos/ProcedureIntro';
import ProcedureDetailsTabs from '@/components/procedimientos/ProcedureDetailsTabs';
import ProcedureOthers from '@/components/procedimientos/ProcedureOthers';
import ProcedureTestimonials from '@/components/procedimientos/ProcedureTestimonials';

// Option 1 Specific Components
import ProcedureResultsSlider from '@/components/procedimientos/ProcedureResultsSlider';
import ProcedureFAQ from '@/components/procedimientos/ProcedureFAQ';

// Option 2 Specific Components
import ProcedureTreatmentTypes from '@/components/procedimientos/ProcedureTreatmentTypes';

export default async function ProcedureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const wpProc = await getProcedureBySlug(slug);
  const acf = wpProc?.acf || {};
  
  // Format title dynamically
  const formatTitle = (str: string) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  const title = formatTitle(slug);

  // Template Routing Logic
  const isOption2 = acf?.tipo_de_plantilla === 'tratamiento';

  // Resolve images
  const heroImage = typeof acf?.hero_imagen === 'number' 
    ? (await getMedia(acf.hero_imagen))?.source_url 
    : acf?.hero_imagen;

  const introImage = typeof acf?.intro_imagen === 'number'
    ? (await getMedia(acf.intro_imagen))?.source_url
    : acf?.intro_imagen;

  // Resolve Tabs
  let resolvedTabs = undefined;
  if (Array.isArray(acf?.detalles_tabs)) {
    resolvedTabs = acf.detalles_tabs.map((tab: any, index: number) => ({
      id: `tab-${index}`,
      label: tab.etiqueta_pestana || `Tab ${index + 1}`,
      titleSubtitle: tab.titulo_pequeno || '',
      titleMain: tab.titulo_principal || '',
      content: tab.contenido || ''
    }));
  }

  // Quick Facts
  const quickFacts = Array.isArray(acf?.quick_facts) ? acf.quick_facts : undefined;

  // Resolve Casos Relacionados
  let resolvedCases: any[] = [];
  if (Array.isArray(acf?.casos_relacionados)) {
    resolvedCases = await Promise.all(
      acf.casos_relacionados.map(async (casoRef: any) => {
        const id = casoRef.ID || casoRef.id;
        if (!id) return null;
        
        const casoPost = await getCasoById(id);
        const casoAcf = casoPost?.acf || {};
        
        let beforeImg = '';
        if (typeof casoAcf.foto_antes === 'number') {
          beforeImg = (await getMedia(casoAcf.foto_antes))?.source_url || '';
        } else {
          beforeImg = casoAcf.foto_antes || '';
        }
        
        let afterImg = '';
        if (typeof casoAcf.foto_despues === 'number') {
          afterImg = (await getMedia(casoAcf.foto_despues))?.source_url || '';
        } else {
          afterImg = casoAcf.foto_despues || '';
        }

        return {
          id: id,
          title: casoRef.post_title || casoPost?.title?.rendered,
          before: beforeImg,
          after: afterImg
        };
      })
    );
    resolvedCases = resolvedCases.filter(c => c !== null);
  }

  // FAQs
  const faqs = Array.isArray(acf?.faqs) ? acf.faqs : [];

  // Sibling Procedures
  const categoryIds = wpProc?.categoria_procedimiento || [];
  let otherProcedures: any[] = [];
  if (categoryIds.length > 0) {
    const siblings = await getProceduresByCategory(categoryIds[0]) || [];
    otherProcedures = siblings
      .filter((p: any) => p.id !== wpProc?.id)
      .map((p: any) => ({
        id: p.id,
        title: p.title?.rendered,
        slug: p.slug
      }));
  }

  return (
    <main>
      {/* Hero Header */}
      <ProcedureDetailHero 
        title={acf?.hero_titulo || title} 
        subtitle={acf?.hero_subtitulo || (isOption2 ? "TRATAMIENTOS" : "PROCEDIMIENTOS")}
        imageUrl={heroImage}
      />
      
      {/* Intro Section - showQuickFacts is false for Option 2 */}
      <ProcedureIntro 
        showQuickFacts={!isOption2} 
        title={acf?.intro_titulo}
        description={acf?.intro_descripcion}
        quickFacts={quickFacts}
        imageUrl={introImage}
      />
      
      {/* Details Tabs (Present in both) */}
      <ProcedureDetailsTabs tabs={resolvedTabs} />

      {/* Conditional Block based on Template */}
      {isOption2 ? (
        // OPTION 2
        <ProcedureTreatmentTypes />
      ) : (
        // OPTION 1
        <>
          <ProcedureResultsSlider cases={resolvedCases} />
          <ProcedureFAQ faqs={faqs} title={acf?.hero_titulo || title} />
        </>
      )}

      {/* Shared Bottom Sections */}
      <ProcedureOthers procedures={otherProcedures} />
      <ProcedureTestimonials />
      
      </main>
  );
}
