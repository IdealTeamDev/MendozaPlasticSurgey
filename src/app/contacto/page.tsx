import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contacto/ContactHero';
import ContactDetailsForm from '@/components/contacto/ContactDetailsForm';
import ContactMap from '@/components/contacto/ContactMap';
import { getPageBySlug } from '@/lib/wordpress';

export default async function ContactoPage() {
  const wpPage = await getPageBySlug('contacto');

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
          <ContactHero />
          <ContactDetailsForm />
          <ContactMap />
        </>
      )}

      <Footer />
    </main>
  );
}
