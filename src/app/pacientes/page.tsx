import React from 'react';
import PatientsHero from '@/components/pacientes/PatientsHero';
import FinancingTabs from '@/components/pacientes/FinancingTabs';
import ConsultationFees from '@/components/pacientes/ConsultationFees';
import { getPageBySlug, getMedia } from '@/lib/wordpress';

export default async function PacientesPage() {
  const wpPage = await getPageBySlug('pacientes'); // Ajusta al slug real
  const acf = wpPage?.acf || {};

  // Resolve images
  if (acf.hero_image && typeof acf.hero_image === 'number') {
    const media = await getMedia(acf.hero_image);
    acf.hero_image = media?.source_url || null;
  }

  return (
    <main>
      <PatientsHero 
        title={acf?.hero_title}
        subtitle={acf?.hero_desc}
        imageUrl={acf?.hero_image}
      />
      <FinancingTabs />
      <ConsultationFees />
      </main>
  );
}
