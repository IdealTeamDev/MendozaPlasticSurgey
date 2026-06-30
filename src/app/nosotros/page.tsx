import React from 'react';
import { getPageBySlug } from '@/lib/wordpress';
import NosotrosClient from './NosotrosClient'; // Extracted client logic

import './nosotros.css';

export default async function NosotrosPage() {
  const wpPage = await getPageBySlug('nosotros'); // Ajusta 'nosotros' al slug real

  return (
    <main className="nosotros-page">
      {wpPage ? (
        <div 
          className="wp-content-container fade-in" 
          style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh' }}
          dangerouslySetInnerHTML={{ __html: wpPage.content.rendered }} 
        />
      ) : (
        <NosotrosClient />
      )}

      </main>
  );
}
