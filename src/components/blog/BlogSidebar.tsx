import React from 'react';
import Link from 'next/link';
import { getGlobalOptions } from '@/lib/wordpress';

interface PopularPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  imageUrl?: string;
}

export default async function BlogSidebar({ popularPosts = [] }: { popularPosts?: PopularPost[] }) {
  const options = await getGlobalOptions();
  const facebookUrl = options?.facebook || '#';
  const instagramUrl = options?.instagram || '#';
  const pinterestUrl = options?.pinterest || '#';
  const youtubeUrl = options?.youtube || '#';

  return (
    <aside className="blog-sidebar-col" style={{ flex: '1', minWidth: '300px' }}>
      
      {/* SÍGUENOS */}
      <div className="blog-sidebar-widget mb-4">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <h3 className="widget-title" style={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 400, margin: 0 }}>SÍGUENOS</h3>
          <div className="social-icons" style={{ display: 'flex', gap: '10px' }}>
            {/* Dynamic Social Links */}
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
            </a>
            <a href={pinterestUrl} target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.433 2.981 7.433 6.953 0 4.156-2.618 7.502-6.255 7.502-1.22 0-2.368-.634-2.763-1.385l-.752 2.868c-.272 1.043-1.009 2.35-1.5 3.159 1.194.37 2.473.57 3.795.57 6.627 0 11.99-5.367 11.99-11.987C24 5.367 18.644 0 12.017 0z"/></svg>
            </a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
        
        <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--negro-80)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
          Suscríbete a nuestro boletín y recibe una selección de artículos interesantes cada mes
        </p>
        
        <form className="sidebar-subscribe-form" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <input type="email" placeholder="Ingresa tu email" style={{ padding: '0.8rem 1rem', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '0.9rem' }} />
          <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', backgroundColor: 'var(--negro-100)', color: 'var(--blanco-100)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Suscríbete</button>
          
          <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.7rem', color: '#999', marginTop: '0.5rem', alignItems: 'flex-start', lineHeight: '1.3' }}>
            <input type="checkbox" required style={{ marginTop: '0.2rem' }} />
            <span>Al marcar esta casilla, usted confirma que ha leído y acepta nuestros términos de uso con respecto al almacenamiento de los datos enviados a través de este formulario.</span>
          </label>
        </form>
      </div>

      <hr style={{ margin: '2.5rem 0', borderColor: '#eee' }} />

      {/* BLOG POPULARES */}
      {popularPosts && popularPosts.length > 0 && (
        <div className="blog-popular-widget">
          <h3 className="widget-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 400 }}>BLOG POPULARES</h3>
          <div className="popular-posts-list sidebar-mini-cards">
            {popularPosts.map((post, index) => (
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
      )}

      {/* CSS for sidebar elements */}
      <style dangerouslySetInnerHTML={{__html: `
        .social-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: var(--negro-100);
          color: var(--blanco-100);
          border-radius: 50%;
          text-decoration: none;
        }
        .popular-post-card {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          text-decoration: none;
          background: var(--blanco-100);
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
          background-color: var(--caja);
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
          color: var(--negro-80);
          margin: 0;
          font-weight: 600;
          line-height: 1.3;
        }
      `}} />
    </aside>
  );
}
