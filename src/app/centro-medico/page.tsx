import React from 'react';
import { Metadata } from 'next';
import { getPageBySlug, getMedia, getProcedureCategories } from '@/lib/wordpress';
import MedicalCenterIntro from '@/components/nosotros/MedicalCenterIntro';
import MedicalCenterDetails from '@/components/nosotros/MedicalCenterDetails';
import MedicalCenterGallery from '@/components/nosotros/MedicalCenterGallery';
import MedicalCenterServices from '@/components/nosotros/MedicalCenterServices';

import '@/components/nosotros/nosotros.css';

export const metadata: Metadata = {
  title: 'Medical Center | Mendoza Plastic Surgery',
  description: 'Conoce nuestras modernas instalaciones en Atlanta. El Medical Center de Mendoza Plastic Surgery está equipado con tecnología de vanguardia para tu seguridad.',
};

export const revalidate = 0;

export default async function MedicalCenterPage() {
  // Tomamos los datos de la página 'centro-medico'
  const wpPage = await getPageBySlug('centro-medico'); 
  
  const acf = wpPage?.acf || {};

  const acfImageFields = [
    'medical_tab1_image',
    'medical_tab2_image'
  ];

  for (const field of acfImageFields) {
    if (acf[field] && typeof acf[field] === 'number') {
      const media = await getMedia(acf[field]);
      acf[field] = media?.source_url || null;
    }
  }

  // Resolve gallery images
  if (acf.medical_gallery && Array.isArray(acf.medical_gallery)) {
    acf.medical_gallery = await Promise.all(
      acf.medical_gallery.map(async (item: any) => {
        if (item.image && typeof item.image === 'number') {
          const media = await getMedia(item.image);
          return { image: media?.source_url || null };
        }
        return item;
      })
    );
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
    <main className="medical-center-page fade-in">
      <MedicalCenterIntro 
        title={acf?.medical_intro_title}
        text={acf?.medical_intro_text}
      />
      <MedicalCenterDetails 
        tab1Title={acf?.medical_tab1_title}
        tab1Image={acf?.medical_tab1_image}
        tab1TextLeft={acf?.medical_tab1_text_left}
        tab1TextRight={acf?.medical_tab1_text_right}
        tab2Title={acf?.medical_tab2_title}
        tab2Image={acf?.medical_tab2_image}
        tab2TextLeft={acf?.medical_tab2_text_left}
        tab2TextRight={acf?.medical_tab2_text_right}
      />
      <MedicalCenterGallery images={acf?.medical_gallery?.map((g: any) => g.image).filter(Boolean) || []} />
      <MedicalCenterServices categories={procedureCategories} />
    </main>
  );
}
