import React from 'react';
import ProcedureHero from '@/components/procedimientos/ProcedureHero';
import ProcedureTabs from '@/components/procedimientos/ProcedureTabs';
import { getPageBySlug, getMedia, getProcedureCategories, getProceduresByCategory } from '@/lib/wordpress';

export default async function ProcedimientosPage() {
  const wpPage = await getPageBySlug('procedimientos');
  const acf = wpPage?.acf || {};

  const heroImage = typeof acf?.hero_imagen === 'number' 
    ? (await getMedia(acf.hero_imagen))?.source_url 
    : acf?.hero_imagen;

  // Fetch ALL categories first to map names to IDs
  const allCategories = await getProcedureCategories() || [];

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
        
        // Find category ID that matches tab label
        const matchedCat = allCategories.find((cat: any) => 
          cat.name.toLowerCase().trim() === normalizedTabLabel
        );

        let relatedProcedures = [];
        
        if (matchedCat) {
          // Fetch procedures that belong to this category ID
          const catProcedures = await getProceduresByCategory(matchedCat.id) || [];
          relatedProcedures = catProcedures.map((p: any) => ({
            id: p.id,
            title: p.title?.rendered,
            slug: p.slug
          }));
        }

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
    <main style={{ backgroundColor: 'var(--blanco-100)' }}>
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
