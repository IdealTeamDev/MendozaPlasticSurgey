import React from 'react';
import Link from 'next/link';
import './BlogFeed.css';

interface Post {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  imageUrl?: string | null;
  _embedded?: any;
}

interface BlogFeedProps {
  posts: Post[];
}

const POPULAR_POSTS = [
  { id: 1, slug: 'lipo-360', date: 'Abril 10, 2024', title: 'What Is a Lipo 360?' },
  { id: 2, slug: 'recuperar-figura', date: 'Julio 20, 2024', title: '¿Cómo recuperar tu figura?' },
  { id: 3, slug: 'implantes-senos-naturales', date: 'Junio 05, 2024', title: '¿Cómo escoger los implantes?' },
];

export default function BlogFeed({ posts }: BlogFeedProps) {
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
                    <span className="blog-post-tag">BLOG</span>
                    <div className="blog-post-img-placeholder" style={{ overflow: 'hidden' }}>
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title.rendered} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <span>(Img Blog)</span>
                      )}
                    </div>
                  </Link>
                  <div className="blog-post-content">
                    <span className="blog-post-date">{new Date(post.date).toLocaleDateString()}</span>
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
