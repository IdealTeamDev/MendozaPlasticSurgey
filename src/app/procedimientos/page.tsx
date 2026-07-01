import React from 'react';
import ProcedureHero from '@/components/procedimientos/ProcedureHero';
import ProcedureTabs from '@/components/procedimientos/ProcedureTabs';
import { getPageBySlug, getMedia, getProcedures } from '@/lib/wordpress';

export default async function ProcedimientosPage() {
  const wpPage = await getPageBySlug('procedimientos');
  const acf = wpPage?.acf || {};

  const heroImage = typeof acf?.hero_imagen === 'number' 
    ? (await getMedia(acf.hero_imagen))?.source_url 
    : acf?.hero_imagen;

  // Fetch ALL procedures to auto-feed the tabs based on categories
  const allProcedures = await getProcedures() || [];

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
        
        const tabLabel = tab.titulo_pestana || `Tab ${index + 1}`;
        const normalizedTabLabel = tabLabel.toLowerCase().trim();
        
        // Auto-feed procedures: Find all procedures that have a category matching this tab's name
        const relatedProcedures = allProcedures.filter((p: any) => {
          if (!p._embedded || !p._embedded['wp:term']) return false;
          
          // Flatten all taxonomy terms into a single array
          const terms = p._embedded['wp:term'].flat();
          return terms.some((term: any) => 
            term.taxonomy === 'categoria_procedimiento' && 
            term.name.toLowerCase().trim() === normalizedTabLabel
          );
        }).map((p: any) => ({
          id: p.id,
          title: p.title?.rendered,
          slug: p.slug
        }));

        return {
          id: `tab-${index}`,
          tabLabel: tabLabel,
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
