import React from 'react';
import { Metadata } from 'next';
import { getProcedureBySlug, getMedia, getCasoById, getProceduresByCategory } from '@/lib/wordpress';
import { generateYoastMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ slug: string; category: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const wpProc = await getProcedureBySlug(slug);
  return generateYoastMetadata(
    wpProc?.yoast_head_json,
    wpProc?.title?.rendered || 'Procedimiento',
    'Conozca más sobre este procedimiento en Mendoza Plastic Surgery.'
  );
}

// Common Components
import PageHero from '@/components/PageHero';
import ProcedureIntro from '@/components/procedimientos/ProcedureIntro';
import ProcedureDetailsTabs from '@/components/procedimientos/ProcedureDetailsTabs';
import ProcedureOthers from '@/components/procedimientos/ProcedureOthers';
import ProcedureTestimonials from '@/components/procedimientos/ProcedureTestimonials';

// Option 1 Specific Components
import ProcedureResultsSlider from '@/components/procedimientos/ProcedureResultsSlider';
import ProcedureFinancing from '@/components/procedimientos/ProcedureFinancing';
import ProcedureFAQ from '@/components/procedimientos/ProcedureFAQ';

// Option 2 Specific Components
import ProcedureTreatmentTypes from '@/components/procedimientos/ProcedureTreatmentTypes';

export default async function ProcedureDetailPage({ params }: { params: Promise<{ slug: string; category: string }> }) {
  const { slug, category } = await params;
  
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
    const casesNested = await Promise.all(
      acf.casos_relacionados.map(async (casoRef: any) => {
        // ACF might return just the ID number or a post object depending on settings
        const id = typeof casoRef === 'number' ? casoRef : (casoRef.ID || casoRef.id);
        if (!id) return null;
        
        const casoPost = await getCasoById(id);
        if (!casoPost) return null;
        
        const casoAcf = casoPost?.acf || {};
        const titleText = casoRef.post_title || casoPost?.title?.rendered;
        
        const getMediaUrl = async (fieldValue: any) => {
          if (typeof fieldValue === 'number') {
            return (await getMedia(fieldValue))?.source_url || '';
          }
          return fieldValue || '';
        };

        const examples: {before: string, after: string}[] = [];

        // Primary fields (backward compatibility)
        const beforeImg = await getMediaUrl(casoAcf.foto_antes);
        const afterImg = await getMediaUrl(casoAcf.foto_despues);
        if (beforeImg || afterImg) {
          examples.push({ before: beforeImg, after: afterImg });
        }
        
        // Repeater fields
        if (Array.isArray(casoAcf.galeria_casos) && casoAcf.galeria_casos.length > 0) {
          const repeaterCases = await Promise.all(
            casoAcf.galeria_casos.map(async (item: any) => {
              const bImg = await getMediaUrl(item.foto_antes);
              const aImg = await getMediaUrl(item.foto_despues);
              return { before: bImg, after: aImg };
            })
          );
          
          examples.push(...repeaterCases.filter(c => c.before || c.after));
        }

        if (examples.length === 0) return null;

        const rawContent = casoPost?.content?.rendered || '';
        const cleanContent = rawContent.replace(/<[^>]+>/g, '').trim();
        const shortDescriptionText = casoAcf.descripcion_corta || `${titleText} con el Dr. Mendoza`;
        const longDescriptionText = casoAcf.descripcion_larga || cleanContent || shortDescriptionText;

        return {
          id: id,
          title: titleText,
          shortDescription: shortDescriptionText,
          longDescription: longDescriptionText,
          examples
        };
      })
    );
    resolvedCases = casesNested.filter(c => c !== null);
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
      <PageHero 
        title={acf?.hero_titulo || title} 
        subtitle={acf?.hero_subtitulo || (isOption2 ? "TRATAMIENTOS" : "PROCEDIMIENTOS")}
        imageUrl={introImage || heroImage}
        hideImageCard={true}
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
        <ProcedureTreatmentTypes treatments={acf?.tipos_de_tratamiento || []} />
      ) : (
        // OPTION 1
        <>
          <ProcedureResultsSlider cases={resolvedCases} />
          <ProcedureFinancing 
            subtitle={acf?.financiamiento_subtitulo || 'FINANCIAMIENTO PARA'}
            title={acf?.financiamiento_titulo || `CIRUGÍA DE ${title.toUpperCase()}`}
            text={acf?.financiamiento_texto || `
              <p>En Mendoza Plastic Surgery contamos con diferentes opciones de financiamiento que te permiten acceder a tu procedimiento de manera flexible y segura.</p>
              <p>Trabajamos con aliados como Cherry, CareCredit y PatientFi, plataformas diseñadas para ofrecer planes de pago adaptados a tus necesidades, con procesos rápidos y opciones que facilitan iniciar tu tratamiento sin tener que realizar el pago total de inmediato.</p>
              <p>El costo de cada procedimiento puede variar según las necesidades de cada paciente, ya que todos nuestros tratamientos son personalizados.</p>
            `}
          />
          <ProcedureFAQ faqs={faqs} title={acf?.hero_titulo || title} />
        </>
      )}

      {/* Shared Bottom Sections */}
      <ProcedureOthers procedures={otherProcedures} />
      <ProcedureTestimonials />
      
      </main>
  );
}
