import React from 'react';
import PatientsHero from '@/components/pacientes/PatientsHero';
import FinancingTabs from '@/components/pacientes/FinancingTabs';
import ConsultationFees from '@/components/pacientes/ConsultationFees';

export default function PacientesPage() {
  return (
    <main>
      <PatientsHero />
      <FinancingTabs />
      <ConsultationFees />
      </main>
  );
}
