import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PatientsHero from '@/components/pacientes/PatientsHero';
import FinancingTabs from '@/components/pacientes/FinancingTabs';
import ConsultationFees from '@/components/pacientes/ConsultationFees';

export default function PacientesPage() {
  return (
    <main>
      <Navbar />
      <PatientsHero />
      <FinancingTabs />
      <ConsultationFees />
      <Footer />
    </main>
  );
}
