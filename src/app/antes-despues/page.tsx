import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BeforeAfterHero from '@/components/antes-despues/BeforeAfterHero';
import BeforeAfterGallery from '@/components/antes-despues/BeforeAfterGallery';

export default function AntesDespuesPage() {
  return (
    <main>
      <Navbar />
      <BeforeAfterHero />
      <BeforeAfterGallery />
      <Footer />
    </main>
  );
}
