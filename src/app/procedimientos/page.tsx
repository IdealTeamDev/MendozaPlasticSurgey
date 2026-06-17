import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcedureHero from '@/components/procedimientos/ProcedureHero';
import ProcedureTabs from '@/components/procedimientos/ProcedureTabs';

export default function ProcedimientosPage() {
  return (
    <main>
      <Navbar />
      <ProcedureHero />
      <ProcedureTabs />
      <Footer />
    </main>
  );
}
