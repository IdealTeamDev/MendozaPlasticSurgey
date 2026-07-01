import React from 'react';
import Link from 'next/link';
import './BlogFeed.css';

interface Post {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  categoryName?: string;
  imageUrl?: string | null;
}

interface PopularPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  imageUrl?: string | null;
}

interface BlogFeedProps {
  posts: Post[];
  totalPages: number;
  currentPage: number;
  popularPosts: PopularPost[];
}

export default function BlogFeed({ posts, totalPages, currentPage, popularPosts }: BlogFeedProps) {
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
              {posts.map(post => (
                <div key={post.id} className="blog-post-card">
                  <Link href={`/blog/${post.slug}`} className="blog-post-img-wrapper" style={{display: 'block', textDecoration: 'none'}}>
                    <span className="blog-post-tag">{post.categoryName || 'BLOG'}</span>
                    <div className="blog-post-img-placeholder" style={{ overflow: 'hidden' }}>
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title.rendered} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <span>(Img Blog)</span>
                      )}
                    </div>
                  </Link>
                  <div className="blog-post-content">
                    <span className="blog-post-date">{new Date(post.date).toLocaleDateString('es-ES', { month: 'short', day: '2-digit', year: 'numeric' }).replace('.', '')}</span>
                    <Link href={`/blog/${post.slug}`} style={{textDecoration: 'none'}}>
                      <h3 className="blog-post-card-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                    </Link>
                    <Link href={`/blog/${post.slug}`}>
                      <button className="btn blog-post-btn">Leer más</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="blog-pagination">
                {currentPage > 1 && (
                  <Link href={`/blog?page=${currentPage - 1}`} className="pag-btn prev">&lt;</Link>
                )}
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                  // Muestra la primera, la última, la actual, y las adyacentes a la actual
                  if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                    return (
                      <Link 
                        key={page} 
                        href={`/blog?page=${page}`} 
                        className={`pag-btn ${currentPage === page ? 'active' : ''}`}
                      >
                        {page}
                      </Link>
                    );
                  }
                  // Si no mostramos la página y es adyacente a un bloque mostrado, mostramos puntos
                  if (page === 2 && currentPage > 3) return <span key={page} className="pag-dots">...</span>;
                  if (page === totalPages - 1 && currentPage < totalPages - 2) return <span key={page} className="pag-dots">...</span>;
                  
                  return null;
                })}

                {currentPage < totalPages && (
                  <Link href={`/blog?page=${currentPage + 1}`} className="pag-btn next">&gt;</Link>
                )}
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <aside className="blog-sidebar-col">
            <div className="blog-popular-widget">
              <h3 className="widget-title">BLOGS POPULARES</h3>
              <div className="popular-posts-list">
                {popularPosts.map(post => (
                  <Link href={`/blog/${post.slug}`} key={post.id} className="popular-post-item" style={{textDecoration: 'none'}}>
                    <div className="popular-post-thumb" style={{ overflow: 'hidden' }}>
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title.rendered} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <span>(Img)</span>
                      )}
                    </div>
                    <div className="popular-post-info">
                      <span className="popular-post-date">{new Date(post.date).toLocaleDateString('es-ES', { month: 'short', day: '2-digit', year: 'numeric' }).replace('.', '')}</span>
                      <h4 className="popular-post-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h4>
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
