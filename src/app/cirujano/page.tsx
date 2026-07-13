import React from 'react';
import { Metadata } from 'next';
import { getPageBySlug, getMedia, getCasos, getCasoById } from '@/lib/wordpress';
import SurgeonHero from '@/components/nosotros/SurgeonHero';
import SurgeonDetails from '@/components/nosotros/SurgeonDetails';
import SurgeonFunFacts from '@/components/nosotros/SurgeonFunFacts';

// Import globals from the old nosotros.css if needed
import '@/components/nosotros/nosotros.css';

export const metadata: Metadata = {
  title: 'Dr. Delquis Mendoza | Mendoza Plastic Surgery',
  description: 'Conoce al Dr. Delquis R. Mendoza, cirujano plástico y reconstructivo certificado, líder de Mendoza Plastic Surgery en Atlanta, GA.',
};

export const revalidate = 0;

export default async function SurgeonPage() {
  // Tomamos los datos de la página 'cirujano'
  const wpPage = await getPageBySlug('cirujano'); 
  
  const acf = wpPage?.acf || {};

  const acfImageFields = [
    'surgeon_image',
    'surgeon_estudios_image',
    'surgeon_certificaciones_image',
    'surgeon_clinica_image',
    'surgeon_funfacts_image',
  ];

  for (const field of acfImageFields) {
    if (acf[field] && typeof acf[field] === 'number') {
      const media = await getMedia(acf[field]);
      acf[field] = media?.source_url || null;
    }
  }


  return (
    <main className="nosotros-page fade-in">
      <SurgeonHero 
        subtitle={acf?.surgeon_subtitle}
        title={acf?.surgeon_title}
        desc={acf?.surgeon_desc}
        imageUrl={acf?.surgeon_image}
      />
      
      <SurgeonDetails 
        estudiosText={acf?.surgeon_estudios_text}
        estudiosImage={acf?.surgeon_estudios_image}
        certificacionesText={acf?.surgeon_certificaciones_text}
        certificacionesImage={acf?.surgeon_certificaciones_image}
        clinicaText={acf?.surgeon_clinica_text}
        clinicaImage={acf?.surgeon_clinica_image}
      />
      
      <SurgeonFunFacts 
        funfactsText={acf?.surgeon_funfacts_text}
        funfactsImage={acf?.surgeon_funfacts_image}
      />


    </main>
  );
}
