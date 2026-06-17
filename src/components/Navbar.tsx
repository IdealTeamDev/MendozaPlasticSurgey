"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menu);
    }
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <div className="logo-mark">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-text">MENDOZA</span>
              <span className="logo-subtext">PLASTIC SURGERY</span>
            </div>
          </Link>
        </div>
        
        <nav className="navbar-links">
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <div className="nav-dropdown">
            <Link href="/procedimientos" className="has-dropdown">Procedimientos <span className="arrow">▼</span></Link>
            <div className="dropdown-menu">
              <Link href="/procedimientos">Cuerpo</Link>
              <Link href="/procedimientos">Senos</Link>
              <Link href="/procedimientos">Rostro</Link>
              <Link href="/procedimientos">Inyectables</Link>
              <Link href="/procedimientos">Tratamientos</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <Link href="/pacientes" className="has-dropdown">Pacientes <span className="arrow">▼</span></Link>
            <div className="dropdown-menu">
              <Link href="/pacientes">Financiación</Link>
              <Link href="/pacientes">Compra Epionce</Link>
            </div>
          </div>
          <Link href="/antes-despues">Antes y Después</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <div className="navbar-actions">
          <button className="lang-switcher desktop-only">
            Idioma <span className="arrow">▼</span>
          </button>
          <button className="icon-btn search-icon" onClick={() => setIsSearchOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className="icon-btn cart-icon">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </button>
          <button className="icon-btn mobile-menu-icon mobile-only" onClick={() => setIsMenuOpen(true)}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="navbar-logo">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <div className="logo-mark">
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </div>
              <div className="logo-text-wrapper">
                <span className="logo-text">MENDOZA</span>
                <span className="logo-subtext">PLASTIC SURGERY</span>
              </div>
            </Link>
          </div>
          <button className="icon-btn close-btn" onClick={() => setIsMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="mobile-menu-content">
          <Link href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          
          <div className="mobile-accordion">
            <button className="mobile-accordion-header" onClick={() => toggleMenu('nosotros')}>
              Nosotros 
              <span className="arrow-icon">
                {expandedMenu === 'nosotros' ? '▲' : '▼'}
              </span>
            </button>
            <div className={`mobile-accordion-body ${expandedMenu === 'nosotros' ? 'open' : ''}`}>
              <div className="accordion-inner">
                <Link href="#centro" onClick={() => setIsMenuOpen(false)}>Centro médico</Link>
                <Link href="#cirujano" onClick={() => setIsMenuOpen(false)}>Cirujano</Link>
              </div>
            </div>
          </div>

          <div className="mobile-accordion">
            <div 
              className="mobile-accordion-header"
              onClick={() => toggleMenu('procedimientos')}
            >
              <Link href="/procedimientos" className="mobile-link has-dropdown" onClick={(e) => e.stopPropagation()}>
                Procedimientos <span className={`arrow ${expandedMenu === 'procedimientos' ? 'open' : ''}`}>▼</span>
              </Link>
            </div>
            <div className={`mobile-accordion-body ${expandedMenu === 'procedimientos' ? 'open' : ''}`}>
              <div className="accordion-inner">
                <Link href="/procedimientos" onClick={() => setIsMenuOpen(false)}>Cuerpo</Link>
                <Link href="/procedimientos" onClick={() => setIsMenuOpen(false)}>Senos</Link>
                <Link href="/procedimientos" onClick={() => setIsMenuOpen(false)}>Rostro</Link>
                <Link href="/procedimientos" onClick={() => setIsMenuOpen(false)}>Inyectables</Link>
                <Link href="/procedimientos" onClick={() => setIsMenuOpen(false)}>Tratamientos</Link>
              </div>
            </div>
          </div>

          <div className="mobile-accordion">
            <button className="mobile-accordion-header" onClick={() => toggleMenu('pacientes')}>
              Pacientes 
              <span className="arrow-icon">
                {expandedMenu === 'pacientes' ? '▲' : '▼'}
              </span>
            </button>
            <div className={`mobile-accordion-body ${expandedMenu === 'pacientes' ? 'open' : ''}`}>
              <div className="accordion-inner">
                <Link href="/pacientes" onClick={() => setIsMenuOpen(false)}>Financiación</Link>
                <Link href="#epionce" onClick={() => setIsMenuOpen(false)}>Compra Epionce</Link>
              </div>
            </div>
          </div>

          <Link href="/nosotros" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
          <Link href="/antes-despues" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Antes y después</Link>
          <Link href="/blog" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/contacto" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
        </div>
      </div>

      {/* Search Overlay */}
      <div className={`search-overlay ${isSearchOpen ? 'open' : ''}`}>
        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="search-input-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
            <input 
              type="text" 
              placeholder="Search here" 
              autoFocus={isSearchOpen} 
            />
            <button className="search-close-btn" onClick={() => setIsSearchOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
