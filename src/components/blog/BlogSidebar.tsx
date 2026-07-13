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
  const facebookUrl = options?.facebook || 'https://www.facebook.com/mendozaplasticsurgery';
  const instagramUrl = options?.instagram || 'https://www.instagram.com/mendozaplasticsurgery/';
  const tiktokUrl = options?.tiktok || 'https://www.tiktok.com/@mendozaplasticsurgery';

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
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c-.01 1.75-.48 3.51-1.43 4.97-1.44 2.21-3.9 3.57-6.53 3.7-2.6.14-5.26-.64-7.05-2.43C-.19 19.8-.46 16.92.51 14.28c.95-2.58 3.32-4.4 6.06-4.78 1.34-.18 2.72-.03 3.99.38v4.13c-.92-.35-1.95-.42-2.9-.13-.8.24-1.48.8-1.89 1.52-.39.71-.47 1.57-.28 2.34.25.96 1.01 1.71 1.95 1.97 1.13.31 2.37.1 3.32-.57.87-.61 1.4-1.57 1.48-2.62V.02z"/></svg>
            </a>
          </div>
        </div>
        
        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#111', marginBottom: '1.5rem', lineHeight: '1.4' }}>
          Suscríbete a nuestro boletín y recibe una selección de artículos interesantes cada mes
        </p>
        
        <form className="sidebar-subscribe-form" action="https://formsubmit.co/manuel@idealteamcolombia.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <input type="hidden" name="_subject" value="Suscripción al blog (Sidebar) - Mendoza Plastic Surgery" />
          <input type="email" name="email" placeholder="Ingresa tu email" required style={{ padding: '0.8rem 1rem', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '0.9rem' }} />
          <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Suscríbete</button>
          
          <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.7rem', color: '#999', marginTop: '0.5rem', alignItems: 'flex-start', lineHeight: '1.3' }}>
            <input type="checkbox" name="terminos" required style={{ marginTop: '0.2rem' }} />
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
