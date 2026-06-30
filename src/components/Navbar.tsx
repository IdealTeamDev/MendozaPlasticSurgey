"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

interface MenuItem {
  titulo: string;
  enlace: string;
  es_desplegable?: boolean;
  sub_menu?: { titulo: string; enlace: string }[];
}

interface NavbarProps {
  logoUrl?: string | null;
  menuItems?: MenuItem[];
}

export default function Navbar({ logoUrl, menuItems }: NavbarProps) {
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

const FALLBACK_MENU: MenuItem[] = [
  { titulo: 'Inicio', enlace: '/' },
  { titulo: 'Nosotros', enlace: '/nosotros' },
  { 
    titulo: 'Procedimientos', 
    enlace: '/procedimientos',
    es_desplegable: true,
    sub_menu: [
      { titulo: 'Todos los procedimientos', enlace: '/procedimientos' },
      { titulo: 'Cirugía de Senos', enlace: '/procedimientos#senos' },
      { titulo: 'Cirugía de Cuerpo', enlace: '/procedimientos#cuerpo' },
      { titulo: 'Cirugía Facial', enlace: '/procedimientos#facial' }
    ]
  },
  { titulo: 'Antes y Después', enlace: '/antes-despues' },
  { titulo: 'Pacientes', enlace: '/pacientes' },
  { titulo: 'Blog', enlace: '/blog' },
  { titulo: 'Contacto', enlace: '/contacto' },
];

  const finalMenu = menuItems && menuItems.length > 0 ? menuItems : FALLBACK_MENU;

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            {logoUrl ? (
              <img src={logoUrl} alt="Mendoza Plastic Surgery Logo" style={{ height: '40px', objectFit: 'contain' }} />
            ) : (
              <img src="/default-logo.png" alt="Mendoza Plastic Surgery Logo" style={{ height: '40px', objectFit: 'contain' }} />
            )}
          </Link>
        </div>
        
        <nav className="navbar-links">
          {finalMenu.map((item, i) => (
            item.es_desplegable && item.sub_menu ? (
              <div className="nav-dropdown" key={i}>
                <Link href={item.enlace || '#'} className="has-dropdown">{item.titulo} <span className="arrow">▼</span></Link>
                <div className="dropdown-menu">
                  {item.sub_menu.map((sub, j) => (
                    <Link href={sub.enlace} key={j}>{sub.titulo}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link href={item.enlace} key={i}>{item.titulo}</Link>
            )
          ))}
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
              {logoUrl ? (
                <img src={logoUrl} alt="Mendoza Plastic Surgery Logo" style={{ height: '40px', objectFit: 'contain' }} />
              ) : (
                <img src="/default-logo.png" alt="Mendoza Plastic Surgery Logo" style={{ height: '40px', objectFit: 'contain' }} />
              )}
            </Link>
          </div>
          <button className="icon-btn close-btn" onClick={() => setIsMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="mobile-menu-content">
          {finalMenu.map((item, i) => (
            item.es_desplegable && item.sub_menu ? (
              <div className="mobile-accordion" key={i}>
                <div 
                  className="mobile-accordion-header"
                  onClick={() => toggleMenu(`menu-${i}`)}
                >
                  <Link href={item.enlace || '#'} className="mobile-link has-dropdown" onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }}>
                    {item.titulo} <span className={`arrow ${expandedMenu === `menu-${i}` ? 'open' : ''}`}>▼</span>
                  </Link>
                </div>
                <div className={`mobile-accordion-body ${expandedMenu === `menu-${i}` ? 'open' : ''}`}>
                  <div className="accordion-inner">
                    {item.sub_menu.map((sub, j) => (
                      <Link href={sub.enlace} key={j} onClick={() => setIsMenuOpen(false)}>{sub.titulo}</Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link href={item.enlace} className="mobile-link" key={i} onClick={() => setIsMenuOpen(false)}>
                {item.titulo}
              </Link>
            )
          ))}
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
