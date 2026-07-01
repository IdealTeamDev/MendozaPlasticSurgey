import React from 'react';
import Link from 'next/link';
import './BlogCategories.css';

const CATEGORIES = [
  { id: 'cuerpo', title: 'CUERPO', imgClass: 'cat-bg-cuerpo' },
  { id: 'tratamientos', title: 'TRATAMIENTOS', imgClass: 'cat-bg-trat' },
  { id: 'inyectables', title: 'INYECTABLES', imgClass: 'cat-bg-iny' },
  { id: 'senos', title: 'SENOS', imgClass: 'cat-bg-senos' },
  { id: 'faciales', title: 'FACIALES', imgClass: 'cat-bg-faciales' },
];

interface BlogCategoriesProps {
  categories?: any[];
  categoryImages?: Record<string, string>;
}

export default function BlogCategories({ categories = [], categoryImages = {} }: BlogCategoriesProps) {
  // If no dynamic categories are passed (e.g. before API is ready), use fallbacks or just render nothing
  if (!categories || categories.length === 0) return null;

  // Render a clean grid of categories
  return (
    <section className="blog-cat-section section-padding">
      <div className="container">
        
        <div className="blog-cat-header text-center">
          <h2 className="blog-cat-title">
            ESCOGE LA CATEGORÍA Y ENCUENTRA CONSEJOS PARA AYUDARTE A LOGRAR TUS METAS
          </h2>
        </div>

        <div className="blog-cat-grid">
          {categories.map((cat, index) => {
            const catNameLower = cat.name.toLowerCase().trim();
            const customImg = categoryImages[catNameLower];
            const bgStyle = customImg ? { backgroundImage: `url(${customImg})` } : {};
            
            // To mimic the masonry-like 3-top, 2-bottom design roughly
            // You can also just rely on flex-wrap in CSS instead of splitting arrays manually.
            return (
              <Link href={`/blog/categoria/${cat.slug}`} key={cat.id} className="blog-cat-card" style={bgStyle}>
                <div className="blog-cat-overlay"></div>
                <span className="blog-cat-name">{cat.name}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
