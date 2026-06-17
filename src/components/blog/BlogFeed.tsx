import React from 'react';
import Link from 'next/link';
import './BlogFeed.css';

const MAIN_POSTS = [
  { id: 1, slug: 'lipo-360', tag: 'CUERPO', date: 'Abril 10, 2024', title: '¿QUÉ ES UNA LIPO 360? GUÍA BÁSICA' },
  { id: 2, slug: 'implantes-senos-naturales', tag: 'CUERPO', date: 'Abril 10, 2024', title: '¿CÓMO ESCOGER LOS IMPLANTES DE SENOS NATURALES?' },
  { id: 3, slug: 'implantes-senos-2', tag: 'SENOS', date: 'Abril 10, 2024', title: '¿CÓMO ESCOGER LOS IMPLANTES DE SENOS NATURALES?' },
  { id: 4, slug: 'sculptra', tag: 'FACIALES', date: 'Abril 10, 2024', title: 'SCULPTRA: TRATAMIENTO FACIAL PARA REJUVENECIMIENTO' },
  { id: 5, slug: 'abdominoplastia', tag: 'CUERPO', date: 'Abril 10, 2024', title: '¿QUÉ PASA CON EL CUERPO DESPUÉS DE UNA ABDOMINOPLASTIA?' },
  { id: 6, slug: 'cirugias-combinadas', tag: 'CUERPO', date: 'Abril 10, 2024', title: 'CIRUGÍAS COMBINADAS: TUMMY TUCK Y LIPOSUCCIÓN' },
];

const POPULAR_POSTS = [
  { id: 1, slug: 'lipo-360', date: 'Abril 10, 2024', title: 'What Is a Lipo 360?' },
  { id: 2, slug: 'recuperar-figura', date: 'Julio 20, 2024', title: '¿Cómo recuperar tu figura?' },
  { id: 3, slug: 'implantes-senos-naturales', date: 'Junio 05, 2024', title: '¿Cómo escoger los implantes?' },
];

export default function BlogFeed() {
  return (
    <section className="blog-feed-section section-padding">
      <div className="container">
        
        <div className="blog-feed-header text-center">
          <h2 className="blog-feed-title">
            NO TE PIERDAS LAS ÚLTIMAS PUBLICACIONES:<br/>
            DESCUBRE NUEVAS PERSPECTIVAS Y CONSEJOS DE EXPERTOS SOBRE BELLEZA Y CIRUGÍA PLÁSTICA
          </h2>
        </div>

        <div className="blog-feed-layout">
          
          {/* Main Feed Column */}
          <div className="blog-main-col">
            <div className="blog-posts-grid">
              {MAIN_POSTS.map(post => (
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

            {/* Pagination */}
            <div className="blog-pagination">
              <button className="pag-btn prev">&lt;</button>
              <button className="pag-btn active">1</button>
              <button className="pag-btn">2</button>
              <button className="pag-btn">3</button>
              <span className="pag-dots">...</span>
              <button className="pag-btn">10</button>
              <button className="pag-btn next">&gt;</button>
            </div>
          </div>

          {/* Sidebar Column */}
          <aside className="blog-sidebar-col">
            <div className="blog-popular-widget">
              <h3 className="widget-title">BLOGS POPULARES</h3>
              <div className="popular-posts-list">
                {POPULAR_POSTS.map(post => (
                  <Link href={`/blog/${post.slug}`} key={post.id} className="popular-post-item" style={{textDecoration: 'none'}}>
                    <div className="popular-post-thumb">
                      (Img)
                    </div>
                    <div className="popular-post-info">
                      <span className="popular-post-date">{post.date}</span>
                      <h4 className="popular-post-title">{post.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
