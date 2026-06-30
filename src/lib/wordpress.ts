const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://mendozaplastic.wpenginepowered.com';

async function fetchAPI(endpoint: string, options = {}) {
  const res = await fetch(`${API_URL}/wp-json/wp/v2${endpoint}`, {
    next: { revalidate: 60 }, // Cache for 60 seconds (ISR)
    ...options,
  });

  if (!res.ok) {
    console.error(`Failed to fetch API: ${endpoint}`);
    return null;
  }

  const json = await res.json();
  return json;
}

export async function getPageBySlug(slug: string) {
  const data = await fetchAPI(`/pages?slug=${slug}`);
  return data && data.length > 0 ? data[0] : null;
}

export async function getPosts(categoryId?: number) {
  const endpoint = categoryId ? `/posts?categories=${categoryId}` : '/posts';
  const data = await fetchAPI(endpoint);
  return data || [];
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(`/posts?slug=${slug}`);
  return data && data.length > 0 ? data[0] : null;
}

export async function getProcedures() {
  const data = await fetchAPI('/procedimiento?_embed');
  return data;
}

export async function getCasos() {
  const data = await fetchAPI('/caso?_embed');
  return data;
}

export async function getCasoBySlug(slug: string) {
  const data = await fetchAPI(`/caso?slug=${slug}&_embed`);
  return data && data.length > 0 ? data[0] : null;
}

export async function getProcedureBySlug(slug: string) {
  const data = await fetchAPI(`/procedimiento?slug=${slug}`);
  return data && data.length > 0 ? data[0] : null;
}

// Para la Opción A: Procedimientos como páginas hijas de una página principal.
export async function getChildPages(parentId: number) {
  const data = await fetchAPI(`/pages?parent=${parentId}`);
  return data || [];
}

// Alternative for posts if using categories for procedures
export async function getCategoryBySlug(slug: string) {
  const data = await fetchAPI(`/categories?slug=${slug}`);
  return data && data.length > 0 ? data[0] : null;
}

export async function getMedia(id: number) {
  if (!id) return null;
  const data = await fetchAPI(`/media/${id}`);
  return data;
}

export async function getGlobalOptions() {
  // ACF Pro exposes options at /acf/v3/options/options if enabled in functions.php
  const res = await fetch(`${API_URL}/wp-json/acf/v3/options/options`, {
    next: { revalidate: 60 }
  });
  
  if (!res.ok) {
    return null;
  }
  
  const json = await res.json();
  return json?.acf || {};
}

