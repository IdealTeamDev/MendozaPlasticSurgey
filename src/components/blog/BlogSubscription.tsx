import React from 'react';
import './BlogSubscription.css';

export default function BlogSubscription() {
  return (
    <section className="blog-sub-section">
      <div className="blog-sub-bg">
        <div className="blog-sub-overlay"></div>
      </div>
      
      <div className="container blog-sub-container">
        <div className="blog-sub-content text-center">
          <h2 className="blog-sub-title">SUSCRÍBETE A NUESTRO BLOG</h2>
          <p className="blog-sub-text">
            Mantente al día con lo último en tendencias sobre la Plastic Surgery con nuestro boletín mensual.
          </p>
          
          <form className="blog-sub-form">
            <input type="email" placeholder="Ingresa tu correo electrónico" required />
            <button type="submit" className="btn submit-btn">Submit <span>→</span></button>
          </form>
        </div>
      </div>
    </section>
  );
}
