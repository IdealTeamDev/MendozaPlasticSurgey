import React from 'react';
import PageHero from '@/components/PageHero';
import FinancingTabs from '@/components/pacientes/FinancingTabs';
import ConsultationFees from '@/components/pacientes/ConsultationFees';
import { getPageBySlug, getMedia } from '@/lib/wordpress';

export default async function PacientesPage() {
  const wpPage = await getPageBySlug('financiamiento'); // Ajusta al slug real
  const acf = wpPage?.acf || {};

  const getMediaUrl = async (imgData: any) => {
    if (!imgData) return null;
    if (typeof imgData === 'number' || (typeof imgData === 'string' && !isNaN(Number(imgData)) && !imgData.startsWith('http'))) {
      const id = Number(imgData);
      const media = await getMedia(id);
      return media?.source_url || null;
    }
    if (typeof imgData === 'object' && imgData.url) {
      return imgData.url;
    }
    if (typeof imgData === 'string') {
      return imgData;
    }
    return null;
  };

  // Resolve images
  acf.hero_image = await getMediaUrl(acf.hero_image);
  acf.hero_bg_image = await getMediaUrl(acf.hero_bg_image);

  let finTabs = [];
  if (acf.fin_tabs && Array.isArray(acf.fin_tabs)) {
    finTabs = await Promise.all(
      acf.fin_tabs.map(async (tab: any) => ({
        ...tab,
        tab_icon: await getMediaUrl(tab.tab_icon),
        tab_logo: await getMediaUrl(tab.tab_logo)
      }))
    );
  }

  return (
    <main>
      <PageHero 
        subtitle="FINANCIAMIENTO DE"
        title={acf?.hero_title || 'CIRUGÍA PLÁSTICA Y OPCIONES DE PAGO'}
        desc={acf?.hero_desc}
        imageUrl={acf?.hero_image}
      />
      <FinancingTabs tabs={finTabs} title={acf?.fin_title} />
      <ConsultationFees title={acf?.fees_title} />
      </main>
  );
}
