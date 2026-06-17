import React from 'react';
import Link from 'next/link';
import './BlogPostContent.css';

const POPULAR_POSTS = [
  { id: 1, slug: 'lipo-360', date: 'Abril 10, 2024', title: 'What Is a Lipo 360?' },
  { id: 2, slug: 'recuperar-figura', date: 'Julio 20, 2024', title: '¿Cómo recuperar tu figura?' },
  { id: 3, slug: 'implantes-senos-naturales', date: 'Junio 05, 2024', title: '¿Cómo escoger los implantes?' },
];

export default function BlogPostContent() {
  return (
    <section className="blog-post-section section-padding">
      <div className="container">
        
        <div className="blog-post-layout">
          
          {/* Main Content Column */}
          <article className="blog-post-main">
            
            <p className="blog-paragraph">
              Someterse a una abdominoplastia (tummy tuck) es un paso significativo hacia una figura más contorneada y firme. Aunque los resultados pueden ser transformadores, es fundamental entender que el cuerpo experimenta una serie de cambios y ajustes durante el periodo de recuperación.
            </p>
            <p className="blog-paragraph">
              Aquí te explicamos qué esperar del cuerpo después de una abdominoplastia.
            </p>
            <p className="blog-paragraph">
              Conocer estos cambios te ayudará a transitar de manera más suave y segura por tu proceso de curación.
            </p>

            <div className="blog-info-box">
              <h3 className="info-box-title">¿QUÉ ES UNA ABDOMINOPLASTIA (TUMMY TUCK)?</h3>
              <p>
                La abdominoplastia o tummy tuck es un procedimiento quirúrgico que elimina el exceso de piel y grasa del abdomen inferior, además de tensar los músculos de la pared abdominal. Este procedimiento es ideal para personas que buscan una apariencia más tonificada y plana en el abdomen, logrando una silueta más estética y rejuvenecida.
              </p>
            </div>

            <div className="blog-inline-image">
              <div className="blog-inline-img-placeholder">(Img Doctor)</div>
            </div>

            <h2 className="blog-h2">BENEFICIOS DE REALIZARSE UNA ABDOMINOPLASTIA</h2>
            <p className="blog-paragraph">
              Más allá de los resultados estéticos, la abdominoplastia puede tener beneficios funcionales, como aliviar el dolor de espalda asociado con músculos abdominales debilitados. También puede mejorar la postura y la comodidad al realizar actividades físicas.
            </p>
            <p className="blog-paragraph">
              Esta intervención quirúrgica es una de las más solicitadas por hombres y mujeres. Sin embargo, antes de decidirte por ella, es importante que conozcas cuáles son los cuidados requeridos.
            </p>

            <h2 className="blog-h2">CUIDADOS DESPUÉS DE UNA ABDOMINOPLASTIA</h2>
            <p className="blog-paragraph">
              Después de la cirugía, es normal experimentar hinchazón y molestias. Estos síntomas irán disminuyendo a medida que tu cuerpo se adapta. Tu cirujano te indicará cuándo debes reanudar actividades, así como las restricciones que debes seguir.
            </p>

            <div className="blog-inline-image wide-img">
              <div className="blog-inline-img-placeholder">(Img Tummy Tuck)</div>
            </div>

            <div className="blog-info-box highlight-box">
              <h3 className="info-box-title">DR. MENDOZA: CIRUJANO ESPECIALISTA EN ABDOMINOPLASTIAS EN ATLANTA</h3>
              <p>
                El Dr. Mendoza cuenta con años de experiencia realizando abdominoplastias y otros procedimientos de contorno corporal. Si estás considerando este procedimiento, no dudes en agendar una consulta.
              </p>
              <p>
                Tu bienestar y satisfacción son nuestra máxima prioridad. Te acompañaremos en cada paso del proceso, desde la consulta inicial hasta tu completa recuperación.
              </p>
            </div>

          </article>

          {/* Sidebar Column */}
          <aside className="blog-post-sidebar">
            
            {/* Share Widget */}
            <div className="sidebar-widget share-widget">
              <span className="share-label">COMPARTIR</span>
              <div className="share-icons">
                <a href="#" className="share-icon">Fb</a>
                <a href="#" className="share-icon">Tw</a>
                <a href="#" className="share-icon">Ig</a>
                <a href="#" className="share-icon">Li</a>
              </div>
            </div>

            {/* Subscribe Widget */}
            <div className="sidebar-widget subscribe-widget text-center">
              <h3 className="subs-title">Suscríbete a nuestro boletín y mantente al día con lo último</h3>
              <form className="sidebar-subs-form">
                <input type="email" placeholder="Ingresa tu email" required />
                <button type="submit" className="btn btn-black w-100">Suscribirse</button>
              </form>
            </div>

            {/* Popular Posts Widget (Reused style from BlogFeed) */}
            <div className="sidebar-widget popular-widget">
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
