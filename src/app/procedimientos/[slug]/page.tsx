"use client";

import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Common Components
import ProcedureDetailHero from '@/components/procedimientos/ProcedureDetailHero';
import ProcedureIntro from '@/components/procedimientos/ProcedureIntro';
import ProcedureDetailsTabs from '@/components/procedimientos/ProcedureDetailsTabs';
import ProcedureOthers from '@/components/procedimientos/ProcedureOthers';
import ProcedureTestimonials from '@/components/procedimientos/ProcedureTestimonials';

// Option 1 Specific Components
import ProcedureResultsSlider from '@/components/procedimientos/ProcedureResultsSlider';
import ProcedureFAQ from '@/components/procedimientos/ProcedureFAQ';

// Option 2 Specific Components
import ProcedureTreatmentTypes from '@/components/procedimientos/ProcedureTreatmentTypes';

export default function ProcedureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  // Format title dynamically
  const formatTitle = (str: string) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  const title = formatTitle(slug);

  // Template Routing Logic
  const isOption2 = slug === 'sueroterapia';

  return (
    <main>
      <Navbar />
      
      {/* Hero Header */}
      <ProcedureDetailHero title={title} subtitle={isOption2 ? "TRATAMIENTOS" : "PROCEDIMIENTOS"} />
      
      {/* Intro Section - showQuickFacts is false for Option 2 */}
      <ProcedureIntro showQuickFacts={!isOption2} />
      
      {/* Details Tabs (Present in both) */}
      <ProcedureDetailsTabs />

      {/* Conditional Block based on Template */}
      {isOption2 ? (
        // OPTION 2
        <ProcedureTreatmentTypes />
      ) : (
        // OPTION 1
        <>
          <ProcedureResultsSlider />
          <ProcedureFAQ />
        </>
      )}

      {/* Shared Bottom Sections */}
      <ProcedureOthers />
      <ProcedureTestimonials />
      
      <Footer />
    </main>
  );
}
