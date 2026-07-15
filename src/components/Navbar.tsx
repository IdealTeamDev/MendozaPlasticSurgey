"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

interface MenuColumn {
  titulo: string;
  enlace?: string;
  items: { titulo: string; enlace: string }[];
}

interface MenuItem {
  titulo: string;
  enlace: string;
  es_desplegable?: boolean;
  sub_menu?: { titulo: string; enlace: string }[];
  es_mega_menu?: boolean;
  mega_menu_columnas?: MenuColumn[];
}

interface NavbarProps {
  logoUrl?: string | null;
  menuItems?: MenuItem[];
}

export default function Navbar({ logoUrl, menuItems }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [forceCloseDesktop, setForceCloseDesktop] = useState(false);

  const toggleMenu = (menu: string) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null);
      setExpandedSubMenu(null);
    } else {
      setExpandedMenu(menu);
      setExpandedSubMenu(null);
    }
  };

  const toggleSubMenu = (menu: string) => {
    if (expandedSubMenu === menu) {
      setExpandedSubMenu(null);
    } else {
      setExpandedSubMenu(menu);
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
  { 
    titulo: 'Nosotros', 
    enlace: '#',
    es_desplegable: true,
    sub_menu: [
      { titulo: 'Dr. Mendoza', enlace: '/cirujano' },
      { titulo: 'Medical Center', enlace: '/centro-medico' }
    ]
  },
  { 
    titulo: 'Procedimientos', 
    enlace: '/procedimientos',
    es_desplegable: true,
    sub_menu: [
      { titulo: 'Cirugía de Senos', enlace: '/procedimientos/senos' },
      { titulo: 'Cirugía de Cuerpo', enlace: '/procedimientos/cuerpo' },
      { titulo: 'Cirugía Facial', enlace: '/procedimientos/faciales' }
    ]
  },
  { titulo: 'Antes y Después', enlace: '/antes-despues' },
  { titulo: 'Financiamiento', enlace: '/financiamiento' },
  { titulo: 'Blog', enlace: '/blog' },
  { titulo: 'Contacto', enlace: '/contacto' },
];

  const finalMenu = menuItems && menuItems.length > 0 ? menuItems : FALLBACK_MENU;

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/">
            {logoUrl ? (
              <Image className="navbar-logo-img" src={`${logoUrl}?v=2`} alt="Mendoza Plastic Surgery Logo" width={400} height={80} style={{ objectFit: 'contain', width: 'auto', height: '40px' }} priority unoptimized={true} />
            ) : (
              <Image className="navbar-logo-img" src="/default-logo.svg?v=2" alt="Mendoza Plastic Surgery Logo" width={400} height={80} style={{ objectFit: 'contain', width: 'auto', height: '40px' }} priority unoptimized={true} />
            )}
          </Link>

          <div className="lang-dropdown-wrapper desktop-only">
            <button className="lang-switcher">
              Idioma <span className="arrow">▼</span>
            </button>
            <div className="lang-dropdown-menu">
              <a href="#">Español</a>
              <a href="#">English</a>
            </div>
          </div>
        </div>
        
        <nav className="navbar-links">
          {finalMenu.map((item, i) => (
            item.es_desplegable ? (
              <div 
                className={`nav-dropdown ${item.es_mega_menu ? 'mega-menu-wrapper' : ''} ${forceCloseDesktop ? 'force-close' : ''}`} 
                key={i}
                onMouseLeave={() => setForceCloseDesktop(false)}
              >
                <Link href={item.enlace || '#'} className="has-dropdown" onClick={() => setForceCloseDesktop(true)}>{item.titulo} <span className="arrow">▼</span></Link>
                {item.es_mega_menu && item.mega_menu_columnas ? (
                  <div className="mega-menu">
                    <div className="mega-menu-container">
                      {item.mega_menu_columnas.map((col, cIndex) => (
                        <div className="mega-menu-column" key={cIndex}>
                          <div className="mega-menu-title">
                            {col.enlace ? <Link href={col.enlace} onClick={() => setForceCloseDesktop(true)}>{col.titulo}</Link> : col.titulo}
                          </div>
                          <ul className="mega-menu-list">
                            {col.items.map((sub, j) => (
                              <li key={j}><Link href={sub.enlace} onClick={() => setForceCloseDesktop(true)}>{sub.titulo}</Link></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : item.sub_menu ? (
                  <div className="dropdown-menu">
                    {item.sub_menu.map((sub, j) => (
                      <Link href={sub.enlace} key={j} onClick={() => setForceCloseDesktop(true)}>{sub.titulo}</Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link href={item.enlace} key={i}>{item.titulo}</Link>
            )
          ))}
        </nav>

        <div className="navbar-actions">
          <Link href="/contacto" className="book-consultation-btn">
            Agendar Consulta
          </Link>
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
                <Image src={`${logoUrl}?v=2`} alt="Mendoza Plastic Surgery Logo" width={400} height={80} style={{ objectFit: 'contain', width: 'auto', height: '40px' }} priority unoptimized={true} />
              ) : (
                <Image src="/default-logo.svg?v=2" alt="Mendoza Plastic Surgery Logo" width={400} height={80} style={{ objectFit: 'contain', width: 'auto', height: '40px' }} priority unoptimized={true} />
              )}
            </Link>
          </div>
          <button className="icon-btn close-btn" onClick={() => setIsMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="mobile-menu-content">
          {finalMenu.map((item, i) => (
            item.es_desplegable ? (
              <div className="mobile-accordion" key={i}>
                <div 
                  className="mobile-accordion-header"
                  onClick={(e) => { e.preventDefault(); toggleMenu(`menu-${i}`); }}
                >
                  <div style={{ width: '100%', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {item.titulo} <span className={`arrow ${expandedMenu === `menu-${i}` ? 'open' : ''}`}>▼</span>
                  </div>
                </div>
                <div className={`mobile-accordion-body ${expandedMenu === `menu-${i}` ? 'open' : ''}`}>
                  <div className="accordion-inner">
                    {item.es_mega_menu && item.mega_menu_columnas ? (
                      item.mega_menu_columnas.map((col, cIndex) => (
                        <div key={cIndex} className="mobile-mega-col">
                          <div 
                            className="mobile-subaccordion-header"
                            onClick={(e) => { e.preventDefault(); toggleSubMenu(`submenu-${i}-${cIndex}`); }}
                          >
                            <div className="mobile-mega-title">{col.titulo}</div>
                            <span className={`arrow ${expandedSubMenu === `submenu-${i}-${cIndex}` ? 'open' : ''}`}>▼</span>
                          </div>
                          <div className={`mobile-subaccordion-body ${expandedSubMenu === `submenu-${i}-${cIndex}` ? 'open' : ''}`}>
                            {col.items.map((sub, j) => (
                              <Link href={sub.enlace} key={j} onClick={() => setIsMenuOpen(false)}>{sub.titulo}</Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : item.sub_menu ? (
                      item.sub_menu.map((sub, j) => (
                        <Link href={sub.enlace} key={j} onClick={() => setIsMenuOpen(false)}>{sub.titulo}</Link>
                      ))
                    ) : null}
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
