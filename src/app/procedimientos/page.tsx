import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcedureHero from '@/components/procedimientos/ProcedureHero';
import ProcedureTabs from '@/components/procedimientos/ProcedureTabs';
import { getPageBySlug } from '@/lib/wordpress';

export default async function ProcedimientosPage() {
  const wpPage = await getPageBySlug('procedimientos');

  return (
    <main>
      <Navbar />
      
      {wpPage ? (
        <div 
          className="wp-content-container" 
          style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh' }}
          dangerouslySetInnerHTML={{ __html: wpPage.content.rendered }} 
        />
      ) : (
        <>
          <ProcedureHero />
          <ProcedureTabs />
        </>
      )}

      <Footer />
    </main>
  );
}
