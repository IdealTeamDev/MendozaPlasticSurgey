import React from 'react';
import { Metadata } from 'next';
import { getPageBySlug, getMedia, getCasos, getCasoById } from '@/lib/wordpress';
import PageHero from '@/components/PageHero';
import ProcedureResultsSlider from '@/components/procedimientos/ProcedureResultsSlider';
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

  // Fetch cases for SurgeonBeforeAfter (ProcedureResultsSlider)
  const casosDataRaw = await getCasos() || [];
  
  const getMediaUrl = async (imgData: any) => {
    if (!imgData) return null;
    if (typeof imgData === 'number') {
      const media = await getMedia(imgData);
      return media?.source_url || null;
    }
    if (typeof imgData === 'object' && imgData.url) {
      return imgData.url;
    }
    if (typeof imgData === 'string') {
      return imgData;
    }
    return null;
  };

  const cases = await Promise.all(casosDataRaw.map(async (rawCase: any) => {
    const c = await getCasoById(rawCase.id) || rawCase;
    const examples = [];
    
    if (c.acf?.galeria_casos && Array.isArray(c.acf.galeria_casos)) {
      const repeaterCases = await Promise.all(
        c.acf.galeria_casos.map(async (item: any) => {
          const bImg = await getMediaUrl(item.foto_antes);
          const aImg = await getMediaUrl(item.foto_despues);
          return { before: bImg, after: aImg };
        })
      );
      examples.push(...repeaterCases.filter((c: any) => c.before && c.after));
    }

    return {
      id: c.id,
      title: c.title?.rendered || 'Caso',
      examples
    };
  }));

  const validCases = cases.filter(c => c.examples.length > 0);

  return (
    <main className="nosotros-page fade-in">
      <PageHero 
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

      {validCases.length > 0 && (
        <section style={{ backgroundColor: '#f9f9f9', paddingTop: '4rem' }}>
          <div className="container" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>ANTES Y DESPUÉS</p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--black)' }}>CIRUGÍA PLÁSTICA</h2>
          </div>
          <ProcedureResultsSlider cases={validCases} />
        </section>
      )}
    </main>
  );
}
