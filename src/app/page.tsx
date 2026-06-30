import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Badges from '@/components/Badges';
import Procedures from '@/components/Procedures';
import Financing from '@/components/Financing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getPageBySlug } from '@/lib/wordpress';

export default async function Home() {
  const wpPage = await getPageBySlug('inicio'); // Ajusta 'inicio' al slug real en WP

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
          <Hero />
          <About />
          <Badges />
          <Procedures />
          <Financing />
          <Testimonials />
          <Contact />
        </>
      )}

      <Footer />
    </main>
  );
}
