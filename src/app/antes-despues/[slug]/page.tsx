"use client";

import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcedureGalleryHero from '@/components/antes-despues/ProcedureGalleryHero';
import ProcedureGalleryGrid from '@/components/antes-despues/ProcedureGalleryGrid';
import ProcedureContactSection from '@/components/antes-despues/ProcedureContactSection';

// Simularemos una base de datos de procedimientos
const PROCEDURES: Record<string, { category: string; title: string }> = {
  'aumento-de-senos': { category: 'CIRUGÍA DE SENOS', title: 'AUMENTO DE SENOS' },
  'reduccion-de-senos': { category: 'CIRUGÍA DE SENOS', title: 'REDUCCIÓN DE SENOS' },
};

export default function ProcedurePage({ params }: { params: Promise<{ slug: string }> }) {
  // En Next.js >= 13 con app directory y params asincronos
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const procedure = PROCEDURES[slug] || { category: 'PROCEDIMIENTO', title: slug.replace(/-/g, ' ').toUpperCase() };

  return (
    <main>
      <Navbar />
      <ProcedureGalleryHero categoryTitle={procedure.category} procedureTitle={procedure.title} />
      <ProcedureGalleryGrid />
      <ProcedureContactSection />
      <Footer />
    </main>
  );
}
