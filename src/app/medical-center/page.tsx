import React from 'react';
import { Metadata } from 'next';
import { getPageBySlug, getMedia, getProcedureCategories } from '@/lib/wordpress';
import MedicalCenterHero from '@/components/nosotros/MedicalCenterHero';
import MedicalCenterDetails from '@/components/nosotros/MedicalCenterDetails';
import MedicalCenterServices from '@/components/nosotros/MedicalCenterServices';

import '@/components/nosotros/nosotros.css';

export const metadata: Metadata = {
  title: 'Medical Center | Mendoza Plastic Surgery',
  description: 'Conoce nuestras modernas instalaciones en Atlanta. El Medical Center de Mendoza Plastic Surgery está equipado con tecnología de vanguardia para tu seguridad.',
};

export const revalidate = 0;

export default async function MedicalCenterPage() {
  // Tomamos los datos de la página 'nosotros' en WP para no tener que migrar nada aún
  const wpPage = await getPageBySlug('nosotros'); 
  
  const acf = wpPage?.acf || {};

  const acfImageFields = [
    'medical_image',
    'medical_acerca_image',
    'medical_porque_image'
  ];

  for (const field of acfImageFields) {
    if (acf[field] && typeof acf[field] === 'number') {
      const media = await getMedia(acf[field]);
      acf[field] = media?.source_url || null;
    }
  }

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
    <main className="nosotros-page fade-in">
      <MedicalCenterHero 
        title={acf?.medical_title}
        desc={acf?.medical_desc}
        imageUrl={acf?.medical_image}
      />
      <MedicalCenterDetails 
        acercaText={acf?.medical_acerca_text}
        acercaImage={acf?.medical_acerca_image}
        porqueText={acf?.medical_porque_text}
        porqueImage={acf?.medical_porque_image}
      />
      <MedicalCenterServices categories={procedureCategories} />
    </main>
  );
}
