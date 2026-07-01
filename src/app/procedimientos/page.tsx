import React from 'react';
import ProcedureHero from '@/components/procedimientos/ProcedureHero';
import ProcedureTabs from '@/components/procedimientos/ProcedureTabs';
import { getPageBySlug, getMedia } from '@/lib/wordpress';

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
        
        // Extract related procedures from the new ACF field
        const relatedProcedures = Array.isArray(tab.procedimientos_relacionados) 
          ? tab.procedimientos_relacionados.map((p: any) => ({
              id: p.ID || p.id,
              title: p.post_title || p.title?.rendered,
              slug: p.post_name || p.slug
            }))
          : [];

        return {
          id: `tab-${index}`,
          tabLabel: tab.titulo_pestana || `Tab ${index + 1}`,
          desc: tab.descripcion || '',
          imageUrl: imageUrl,
          procedures: relatedProcedures,
        };
      })
    );
  }

  return (
    <main style={{ backgroundColor: '#fff' }}>
      <ProcedureHero 
        title={acf?.hero_titulo}
        desc={acf?.hero_texto}
        imageUrl={heroImage}
      />
      
      <ProcedureTabs 
        title={acf?.tabs_titulo}
        tabs={resolvedTabs}
      />
    </main>
  );
}
