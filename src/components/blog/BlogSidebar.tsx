import React from 'react';
import Link from 'next/link';

export default function BlogSidebar() {
  const POPULAR_POSTS = [
    { id: 1, slug: 'lipo-360', date: 'Abril 10, 2024', title: 'What Is a Lipo 360?' },
    { id: 2, slug: 'recuperar-figura', date: 'Julio 20, 2024', title: '¿Cómo recuperar tu figura?' },
    { id: 3, slug: 'implantes-senos-naturales', date: 'Junio 05, 2024', title: '¿Cómo escoger los implantes?' },
  ];

  return (
    <aside className="blog-sidebar-col" style={{ flex: '1', minWidth: '300px' }}>
      
      {/* SÍGUENOS */}
      <div className="blog-sidebar-widget mb-4">
        <h3 className="widget-title" style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>SÍGUENOS</h3>
        <div className="social-icons" style={{ display: 'flex', gap: '15px', marginBottom: '1.5rem' }}>
          {/* Simple placeholders for social icons */}
          <a href="#" style={{ color: '#000' }} aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" style={{ color: '#000' }} aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" style={{ color: '#000' }} aria-label="Pinterest">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c5.5 0 10-4.5 10-10S17.5 2 12 2z"></path><path d="M12 16.5v-3.5M9.5 9h5M12 16.5c-2.5 0-4.5-2-4.5-4.5h0C7.5 9.5 9.5 7.5 12 7.5c2.5 0 4.5 2 4.5 4.5h0c0 2.5-2 4.5-4.5 4.5z"></path></svg>
          </a>
          <a href="#" style={{ color: '#000' }} aria-label="YouTube">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
        
        <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0066cc', marginBottom: '1rem', textDecoration: 'underline' }}>
          Suscríbete a nuestro boletín y recibe una selección de artículos interesantes cada mes
        </p>
        
        <form className="sidebar-subscribe-form" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <input type="email" placeholder="Ingresa tu e-mail" style={{ padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
          <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Suscríbete</button>
          
          <label style={{ display: 'flex', gap: '0.5rem', fontSize: '0.7rem', color: '#666', marginTop: '0.5rem', alignItems: 'flex-start' }}>
            <input type="checkbox" required style={{ marginTop: '0.2rem' }} />
            <span>Al marcar esta casilla, usted confirma que ha leído y acepta nuestros términos de uso con respecto al almacenamiento de los datos enviados a través de este formulario.</span>
          </label>
        </form>
      </div>

      <hr style={{ margin: '2rem 0', borderColor: '#eee' }} />

      {/* BLOG POPULARES */}
      <div className="blog-popular-widget">
        <h3 className="widget-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 600 }}>BLOG POPULARES</h3>
        <div className="popular-posts-list">
          {POPULAR_POSTS.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="popular-post-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem', textDecoration: 'none' }}>
              <div className="popular-post-thumb" style={{ width: '100px', height: '70px', backgroundColor: '#ddd', borderRadius: '4px', flexShrink: 0 }}></div>
              <div className="popular-post-info">
                <span className="popular-post-date" style={{ fontSize: '0.75rem', color: '#888', display: 'block', marginBottom: '0.3rem' }}>{post.date}</span>
                <h4 className="popular-post-title" style={{ fontSize: '0.9rem', color: '#000', margin: 0, fontWeight: 600 }}>{post.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
