import React from 'react';
import ProcedureHero from '@/components/procedimientos/ProcedureHero';
import ProcedureTabs from '@/components/procedimientos/ProcedureTabs';
import ProcedureGrid, { Procedure } from '@/components/procedimientos/ProcedureGrid';
import { getPageBySlug, getMedia, getProcedures } from '@/lib/wordpress';

export default async function ProcedimientosPage() {
  const wpPage = await getPageBySlug('procedimientos');
  const acf = wpPage?.acf || {};

  const heroImage = typeof acf?.hero_imagen === 'number' 
    ? (await getMedia(acf.hero_imagen))?.source_url 
    : acf?.hero_imagen;

  let resolvedTabs: any[] = [];
  if (Array.isArray(acf?.tabs_lista)) {
    resolvedTabs = await Promise.all(
      acf.tabs_lista.map(async (tab: any, index: number) => {
        let imageUrl = '';
        if (typeof tab.imagen === 'number') {
          const media = await getMedia(tab.imagen);
          imageUrl = media?.source_url || '';
        } else {
          imageUrl = tab.imagen || '';
        }
        return {
          id: `tab-${index}`,
          tabLabel: tab.titulo_pestana || `Tab ${index + 1}`,
          desc: tab.descripcion || '',
          imageUrl: imageUrl,
        };
      })
    );
  }

  // Fetch all procedures from CPT
  const rawProcedures = await getProcedures();
  const procedures: Procedure[] = rawProcedures?.map((p: any) => {
    // Attempt to get featured image
    const featuredMedia = p._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    
    return {
      id: p.id,
      slug: p.slug,
      title: p.title?.rendered,
      imageUrl: featuredMedia,
      excerpt: p.acf?.intro_titulo || p.acf?.hero_subtitulo || ''
    };
  }) || [];

  return (
    <main style={{ backgroundColor: '#000' }}>
      <ProcedureHero 
        title={acf?.hero_titulo}
        desc={acf?.hero_texto}
        imageUrl={heroImage}
      />
      
      <ProcedureTabs 
        title={acf?.tabs_titulo}
        tabs={resolvedTabs}
      />

      <ProcedureGrid procedures={procedures} />
    </main>
  );
}
