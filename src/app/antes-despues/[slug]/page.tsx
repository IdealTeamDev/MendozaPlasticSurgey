"use client";

import React, { use } from 'react';
import ProcedureGalleryHero from '@/components/antes-despues/ProcedureGalleryHero';
import ProcedureGalleryGrid from '@/components/antes-despues/ProcedureGalleryGrid';
import ProcedureContactSection from '@/components/antes-despues/ProcedureContactSection';
import { getCasoBySlug, getMedia } from '@/lib/wordpress';

export default async function ProcedurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const casoData = await getCasoBySlug(slug);
  let caso = null;

  if (casoData) {
    const acf = casoData.acf || {};
    let fotoAntesUrl = acf.foto_antes;
    let fotoDespuesUrl = acf.foto_despues;

    if (fotoAntesUrl && typeof fotoAntesUrl === 'number') {
      const media = await getMedia(fotoAntesUrl);
      fotoAntesUrl = media?.source_url || null;
    }
    if (fotoDespuesUrl && typeof fotoDespuesUrl === 'number') {
      const media = await getMedia(fotoDespuesUrl);
      fotoDespuesUrl = media?.source_url || null;
    }

    caso = {
      id: casoData.id,
      slug: casoData.slug,
      title: casoData.title?.rendered || 'Detalle del Caso',
      procedimiento: acf.procedimiento_relacionado || '',
      foto_antes: fotoAntesUrl,
      foto_despues: fotoDespuesUrl
    };
  }

  return (
    <main>
      <ProcedureGalleryHero 
        categoryTitle={caso?.procedimiento || 'CASO CLÍNICO'} 
        procedureTitle={caso?.title || 'ANTES Y DESPUÉS'} 
      />
      <ProcedureGalleryGrid cases={caso ? [caso] : []} />
      <ProcedureContactSection />
    </main>
  );
}
