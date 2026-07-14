import React from 'react';
import PatientsHero from '@/components/pacientes/PatientsHero';
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
    const validTabs = acf.fin_tabs.filter((t: any) => t.tab_name && t.tab_name.trim() !== '');
    finTabs = await Promise.all(
      validTabs.map(async (tab: any) => ({
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
        bgImageUrl={acf?.hero_bg_image}
      />
      <FinancingTabs tabs={finTabs} title={acf?.fin_title} />
      <ConsultationFees title={acf?.fees_title} />
      </main>
  );
}
