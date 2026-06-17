import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contacto/ContactHero';
import ContactDetailsForm from '@/components/contacto/ContactDetailsForm';
import ContactMap from '@/components/contacto/ContactMap';

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactDetailsForm />
      <ContactMap />
      <Footer />
    </main>
  );
}
