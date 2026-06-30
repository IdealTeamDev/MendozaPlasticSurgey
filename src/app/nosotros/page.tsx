import React from 'react';
import { getPageBySlug, getMedia } from '@/lib/wordpress';
import NosotrosClient from './NosotrosClient'; // Extracted client logic

import './nosotros.css';

export default async function NosotrosPage() {
  const wpPage = await getPageBySlug('nosotros'); // Ajusta 'nosotros' al slug real
  
  const acf = wpPage?.acf || {};

  // Resolve images
  if (acf.surgeon_image && typeof acf.surgeon_image === 'number') {
    const media = await getMedia(acf.surgeon_image);
    acf.surgeon_image = media?.source_url || null;
  }
  if (acf.medical_image && typeof acf.medical_image === 'number') {
    const media = await getMedia(acf.medical_image);
    acf.medical_image = media?.source_url || null;
  }

  return (
    <main className="nosotros-page">
      <NosotrosClient acf={acf} />
    </main>
  );
}
