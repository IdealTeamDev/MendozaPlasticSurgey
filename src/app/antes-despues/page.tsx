import React from 'react';
import BeforeAfterHero from '@/components/antes-despues/BeforeAfterHero';
import BeforeAfterGallery from '@/components/antes-despues/BeforeAfterGallery';
import { getCasos, getMedia } from '@/lib/wordpress';

export default async function AntesDespuesPage() {
  const casosData = await getCasos();
  const cases = Array.isArray(casosData) ? await Promise.all(casosData.map(async (c: any) => {
    let thumbnailUrl = null;
    const mediaId = c.featured_media;
    if (mediaId) {
      const media = await getMedia(mediaId);
      thumbnailUrl = media?.source_url || null;
    }

    return {
      id: c.id,
      slug: c.slug,
      title: c.title?.rendered || 'Caso sin título',
      procedimiento: c.acf?.procedimiento_relacionado || '',
      thumbnailUrl
    };
  })) : [];

  return (
    <main>
      <BeforeAfterHero />
      <BeforeAfterGallery cases={cases} />
    </main>
  );
}
