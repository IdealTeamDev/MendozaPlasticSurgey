import React from 'react';
import Link from 'next/link';
import './BlogRelated.css';

const RELATED_POSTS = [
  { id: 1, slug: 'lipo-360', tag: 'CUERPO', date: 'Abril 10, 2024', title: '¿QUÉ ES UNA LIPO 360? GUÍA BÁSICA' },
  { id: 2, slug: 'implantes-senos-naturales', tag: 'CUERPO', date: 'Abril 10, 2024', title: '¿CÓMO ESCOGER LOS IMPLANTES DE SENOS NATURALES?' },
];

export default function BlogRelated() {
  return (
    <section className="blog-related-section">
      <div className="container">
        
        <div className="blog-related-header">
          <h2 className="related-title">TAMBIÉN TE PUEDE GUSTAR</h2>
        </div>

        <div className="related-grid">
          {RELATED_POSTS.map(post => (
            <div key={post.id} className="blog-post-card">
              <Link href={`/blog/${post.slug}`} className="blog-post-img-wrapper" style={{display: 'block', textDecoration: 'none'}}>
                <span className="blog-post-tag">{post.tag}</span>
                <div className="blog-post-img-placeholder">
                  (Img Blog)
                </div>
              </Link>
              <div className="blog-post-content">
                <span className="blog-post-date">{post.date}</span>
                <Link href={`/blog/${post.slug}`} style={{textDecoration: 'none'}}>
                  <h3 className="blog-post-card-title">{post.title}</h3>
                </Link>
                <Link href={`/blog/${post.slug}`}>
                  <button className="btn blog-post-btn">Leer más</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
