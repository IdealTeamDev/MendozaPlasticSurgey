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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Badges />
      <Procedures />
      <Financing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
