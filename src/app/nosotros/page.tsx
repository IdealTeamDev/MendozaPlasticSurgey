import React from 'react';
import { getPageBySlug, getMedia, getCasos, getCasoById, getProcedureCategories } from '@/lib/wordpress';
import NosotrosClient from './NosotrosClient'; // Extracted client logic

import './nosotros.css';

export const revalidate = 0; // Ensure the page fetches fresh ACF data

export default async function NosotrosPage() {
  const wpPage = await getPageBySlug('nosotros'); // Ajusta 'nosotros' al slug real
  
  const acf = wpPage?.acf || {};

  // Resolve images for ACF fields that might return an ID
  const acfImageFields = [
    'surgeon_image',
    'medical_image',
    'surgeon_estudios_image',
    'surgeon_certificaciones_image',
    'surgeon_clinica_image',
    'surgeon_funfacts_image',
    'medical_acerca_image',
    'medical_porque_image'
  ];

  for (const field of acfImageFields) {
    if (acf[field] && typeof acf[field] === 'number') {
      const media = await getMedia(acf[field]);
      acf[field] = media?.source_url || null;
    }
  }

  // Fetch cases for SurgeonBeforeAfter (ProcedureResultsSlider)
  const casosDataRaw = await getCasos() || [];
  
  // Helper to get media safely
  const getMediaUrl = async (imgData: any) => {
    if (!imgData) return null;
    if (typeof imgData === 'number') {
      const media = await getMedia(imgData);
      return media?.source_url || null;
    }
    return imgData;
  };

  const cases = await Promise.all(casosDataRaw.map(async (rawCase: any) => {
    // Re-fetch individual case to bypass ACF REST API bug (acf returning [])
    const c = await getCasoById(rawCase.id) || rawCase;
    const examples = [];
    
    // Check if ACF has before/after images in the gallery repeater
    if (c.acf?.galeria_casos && Array.isArray(c.acf.galeria_casos)) {
      const repeaterCases = await Promise.all(
        c.acf.galeria_casos.map(async (item: any) => {
          const bImg = await getMediaUrl(item.foto_antes);
          const aImg = await getMediaUrl(item.foto_despues);
          return { before: bImg, after: aImg };
        })
      );
      examples.push(...repeaterCases.filter(c => c.before && c.after));
    }

    if (examples.length === 0) {
      examples.push({ before: null, after: null });
    }

    return {
      id: c.id,
      title: c.title?.rendered || 'Caso',
      examples
    };
  }));

  // Fetch categories for Medical Center "Conoce Más Aquí"
  const categoriesRaw = await getProcedureCategories() || [];
  const procedureCategories = await Promise.all(categoriesRaw.map(async (cat: any) => {
    let imageUrl = '/procedures.png';
    const acfImage = cat.acf?.imagen_categoria;
    if (typeof acfImage === 'number') {
      imageUrl = (await getMedia(acfImage))?.source_url || imageUrl;
    } else if (acfImage) {
      imageUrl = acfImage;
    }
    
    return {
      id: cat.id,
      name: cat.name,
      slug: cat.slug || '',
      image: imageUrl
    };
  }));

  return (
    <main className="nosotros-page">
      <NosotrosClient acf={acf} cases={cases} procedureCategories={procedureCategories} />
    </main>
  );
}
