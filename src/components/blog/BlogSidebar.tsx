import React from 'react';
import Link from 'next/link';

interface PopularPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  imageUrl?: string;
}

export default function BlogSidebar({ popularPosts = [] }: { popularPosts?: PopularPost[] }) {
  // If popular posts are not passed, mock them for preview
  const posts = popularPosts.length > 0 ? popularPosts : [
    { id: 1, slug: 'lipo-360', date: 'Apr 23, 2026', title: 'What is a Lipo 360...', imageUrl: '/procedures.png' },
    { id: 2, slug: 'recuperar-figura', date: 'Abr 15, 2026', title: '¿Cómo recuperar l...', imageUrl: '/procedures.png' },
  ];

  return (
    <aside className="blog-sidebar-col" style={{ flex: '1', minWidth: '300px' }}>
      
      {/* SÍGUENOS */}
      <div className="blog-sidebar-widget mb-4">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <h3 className="widget-title" style={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 400, margin: 0 }}>SÍGUENOS</h3>
          <div className="social-icons" style={{ display: 'flex', gap: '10px' }}>
            {/* Simple placeholders for solid circle social icons */}
            <a href="#" className="social-circle" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-circle" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path></svg>
            </a>
            <a href="#" className="social-circle" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c5.5 0 10-4.5 10-10S17.5 2 12 2z"></path></svg>
            </a>
            <a href="#" className="social-circle" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path></svg>
            </a>
          </div>
        </div>
        
        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#111', marginBottom: '1.5rem', lineHeight: '1.4' }}>
          Suscríbete a nuestro boletín y recibe una selección de artículos interesantes cada mes
        </p>
        
        <form className="sidebar-subscribe-form" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <input type="email" placeholder="Ingresa tu email" style={{ padding: '0.8rem 1rem', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '0.9rem' }} />
          <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Suscríbete</button>
          
          <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.7rem', color: '#999', marginTop: '0.5rem', alignItems: 'flex-start', lineHeight: '1.3' }}>
            <input type="checkbox" required style={{ marginTop: '0.2rem' }} />
            <span>Al marcar esta casilla, usted confirma que ha leído y acepta nuestros términos de uso con respecto al almacenamiento de los datos enviados a través de este formulario.</span>
          </label>
        </form>
      </div>

      <hr style={{ margin: '2.5rem 0', borderColor: '#eee' }} />

      {/* BLOG POPULARES */}
      <div className="blog-popular-widget">
        <h3 className="widget-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 400 }}>BLOG POPULARES</h3>
        <div className="popular-posts-list sidebar-mini-cards">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className={`popular-post-card ${index === 0 ? 'active' : ''}`}>
              <div 
                className="popular-post-thumb" 
                style={{ backgroundImage: `url(${post.imageUrl || '/procedures.png'})` }}
              ></div>
              <div className="popular-post-info">
                <span className="popular-post-date">{post.date}</span>
                <h4 className="popular-post-title">{post.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CSS for sidebar elements */}
      <style dangerouslySetInnerHTML={{__html: `
        .social-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: #000;
          color: #fff;
          border-radius: 50%;
          text-decoration: none;
        }
        .popular-post-card {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          text-decoration: none;
          background: #fff;
          padding: 0.5rem;
          border-radius: 4px;
          transition: all 0.2s ease;
          border: 2px solid transparent;
        }
        .popular-post-card.active, .popular-post-card:hover {
          border: 2px dashed #3498db;
        }
        .popular-post-thumb {
          width: 110px;
          height: 70px;
          background-color: #f5f5f5;
          border-radius: 4px;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
        }
        .popular-post-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .popular-post-date {
          font-size: 0.75rem;
          color: #888;
          display: block;
          margin-bottom: 0.3rem;
        }
        .popular-post-title {
          font-size: 0.95rem;
          color: #111;
          margin: 0;
          font-weight: 600;
          line-height: 1.3;
        }
      `}} />
    </aside>
  );
}
