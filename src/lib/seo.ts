import { Metadata } from 'next';

export function generateYoastMetadata(yoastData: any, fallbackTitle?: string, fallbackDescription?: string): Metadata {
  if (!yoastData) {
    return {
      title: fallbackTitle || 'Mendoza Plastic Surgery',
      description: fallbackDescription || 'Mendoza Plastic Surgery',
    };
  }

  // Handle both stringified json (if it comes as a string) or object
  let yoastHeadJson = yoastData;
  if (typeof yoastData === 'string') {
    try {
      yoastHeadJson = JSON.parse(yoastData);
    } catch (e) {
      yoastHeadJson = {};
    }
  }

  const {
    title,
    description,
    robots,
    canonical,
    og_locale,
    og_type,
    og_title,
    og_description,
    og_url,
    og_site_name,
    article_published_time,
    article_modified_time,
    og_image,
    twitter_card,
    twitter_misc,
  } = yoastHeadJson;

  const metadata: Metadata = {
    title: title || fallbackTitle || 'Mendoza Plastic Surgery',
    description: description || fallbackDescription || '',
  };

  if (canonical) {
    metadata.alternates = {
      canonical: canonical,
    };
  }

  if (robots) {
    metadata.robots = {
      index: robots.index === 'index',
      follow: robots.follow === 'follow',
      googleBot: {
        index: robots.index === 'index',
        follow: robots.follow === 'follow',
        'max-video-preview': robots['max-video-preview'] !== undefined ? parseInt(robots['max-video-preview']) : -1,
        'max-image-preview': robots['max-image-preview'] || 'large',
        'max-snippet': robots['max-snippet'] !== undefined ? parseInt(robots['max-snippet']) : -1,
      },
    };
  }

  if (og_title || og_description || og_image) {
    metadata.openGraph = {
      title: og_title || title || fallbackTitle,
      description: og_description || description || fallbackDescription,
      url: og_url,
      siteName: og_site_name,
      locale: og_locale,
      type: og_type === 'article' ? 'article' : 'website',
    };

    if (og_type === 'article') {
      metadata.openGraph.publishedTime = article_published_time;
      metadata.openGraph.modifiedTime = article_modified_time;
    }

    if (og_image && og_image.length > 0) {
      metadata.openGraph.images = og_image.map((img: any) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        type: img.type,
      }));
    }
  }

  if (twitter_card) {
    metadata.twitter = {
      card: twitter_card === 'summary_large_image' ? 'summary_large_image' : 'summary',
      title: og_title || title,
      description: og_description || description,
    };
    if (og_image && og_image.length > 0) {
      metadata.twitter.images = [og_image[0].url];
    }
  }

  return metadata;
}
