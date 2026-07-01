import React from 'react';
import './BlogSubscription.css';

interface BlogSubscriptionProps {
  title?: string;
  desc?: string;
  bgImage?: string | null;
}

export default function BlogSubscription({ title, desc, bgImage }: BlogSubscriptionProps) {
  const inlineStyle = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  return (
    <section className="blog-sub-section">
      <div className="blog-sub-bg" style={inlineStyle}>
        <div className="blog-sub-overlay"></div>
      </div>
      <div className="container blog-sub-container">
        <div className="blog-sub-content text-center">
          <h2 className="blog-sub-title">{title || 'SUSCRÍBETE A NUESTRO BLOG'}</h2>
          <p className="blog-sub-text">
            {desc || 'Mantente al día con lo último en tendencias sobre la Plastic Surgery con nuestro boletín mensual.'}
          </p>
          
          <form className="blog-sub-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Ingresa tu correo electrónico" className="blog-sub-input" required />
            <button type="submit" className="btn submit-btn">SUBMIT &rarr;</button>
          </form>
        </div>
      </div>
    </section>
  );
}
