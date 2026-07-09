import React from 'react';
import PatientsHero from '@/components/pacientes/PatientsHero';
import FinancingTabs from '@/components/pacientes/FinancingTabs';
import ConsultationFees from '@/components/pacientes/ConsultationFees';
import { getPageBySlug, getMedia } from '@/lib/wordpress';

export default async function PacientesPage() {
  const wpPage = await getPageBySlug('pacientes'); // Ajusta al slug real
  const acf = wpPage?.acf || {};

  const getMediaUrl = async (imgData: any) => {
    if (!imgData) return null;
    if (typeof imgData === 'number') {
      const media = await getMedia(imgData);
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
      <PatientsHero 
        title={acf?.hero_title}
        subtitle={acf?.hero_desc}
        imageUrl={acf?.hero_image}
      />
      <FinancingTabs tabs={finTabs} title={acf?.fin_title} />
      <ConsultationFees title={acf?.fees_title} />
      </main>
  );
}
