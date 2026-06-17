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

export default function BlogCategories() {
  return (
    <section className="blog-cat-section section-padding">
      <div className="container">
        
        <div className="blog-cat-header text-center">
          <h2 className="blog-cat-title">
            ESCOGE LA CATEGORÍA Y ENCUENTRA CONSEJOS PARA AYUDARTE A LOGRAR TUS METAS
          </h2>
        </div>

        <div className="blog-cat-grid">
          {/* Top row: 3 items */}
          <div className="blog-cat-row top-row">
            {CATEGORIES.slice(0, 3).map(cat => (
              <Link href={`/blog/categoria/${cat.id}`} key={cat.id} className={`blog-cat-card ${cat.imgClass}`}>
                <div className="blog-cat-overlay"></div>
                <span className="blog-cat-name">{cat.title}</span>
              </Link>
            ))}
          </div>

          {/* Bottom row: 2 items centered */}
          <div className="blog-cat-row bottom-row">
            {CATEGORIES.slice(3, 5).map(cat => (
              <Link href={`/blog/categoria/${cat.id}`} key={cat.id} className={`blog-cat-card ${cat.imgClass}`}>
                <div className="blog-cat-overlay"></div>
                <span className="blog-cat-name">{cat.title}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
