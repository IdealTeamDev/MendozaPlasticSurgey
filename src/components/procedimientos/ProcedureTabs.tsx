"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './ProcedureTabs.css';

const TABS_DATA = {
  cuerpo: {
    title: "CUERPO",
    imageText: "Img Cuerpo",
    description: "Las cirugías corporales están diseñadas para moldear, definir y mejorar el contorno del cuerpo. Procedimientos como liposucción, tummy tuck o levantamientos corporales ayudan a eliminar exceso de grasa y piel, logrando una silueta más armónica y proporcionada. Cada tratamiento se adapta a las necesidades del paciente, buscando resultados naturales y equilibrados.",
    links: [
      { label: "Liposucción", href: "/procedimientos/liposuccion" },
      { label: "Ginecomastia", href: "/procedimientos/ginecomastia" },
      { label: "Lifting de Muslos", href: "/procedimientos/lifting-muslos" },
      { label: "BBL", href: "/procedimientos/bbl" },
      { label: "Tummy Tuck", href: "/procedimientos/tummy-tuck" }
    ]
  },
  senos: {
    title: "SENOS",
    imageText: "Img Senos",
    description: "Nuestros procedimientos de senos buscan realzar tu feminidad y confianza, ofreciendo resultados hermosos y proporcionados mediante técnicas avanzadas y seguras.",
    links: [
      { label: "Aumento de Senos", href: "/procedimientos/aumento-senos" },
      { label: "Levantamiento", href: "/procedimientos/levantamiento-senos" },
      { label: "Reducción", href: "/procedimientos/reduccion-senos" }
    ]
  },
  faciales: {
    title: "FACIALES",
    imageText: "Img Facial",
    description: "Rejuvenece y refresca tu apariencia con nuestros procedimientos faciales personalizados, diseñados para resaltar tu belleza natural.",
    links: [
      { label: "Rinoplastia", href: "/procedimientos/rinoplastia" },
      { label: "Lifting Facial", href: "/procedimientos/lifting-facial" },
      { label: "Blefaroplastia", href: "/procedimientos/blefaroplastia" }
    ]
  },
  inyectables: {
    title: "INYECTABLES",
    imageText: "Img Inyectables",
    description: "Tratamientos no invasivos para suavizar arrugas, restaurar volumen y mejorar la textura de la piel con resultados inmediatos.",
    links: [
      { label: "Botox", href: "/procedimientos/botox" },
      { label: "Rellenos Dérmicos", href: "/procedimientos/rellenos" }
    ]
  },
  tratamientos: {
    title: "TRATAMIENTOS",
    imageText: "Img Tratamientos",
    description: "Soluciones estéticas avanzadas para el cuidado de la piel y el cuerpo, utilizando tecnología de punta para resultados óptimos sin cirugía.",
    links: [
      { label: "Morpheus8", href: "/procedimientos/morpheus8" },
      { label: "Depilación Láser", href: "/procedimientos/laser" }
    ]
  }
};

type TabKey = keyof typeof TABS_DATA;

export default function ProcedureTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('cuerpo');

  const currentData = TABS_DATA[activeTab];

  return (
    <section className="proc-tabs-section section-padding">
      <div className="container">
        
        <div className="proc-tabs-header text-center">
          <h2 className="proc-tabs-title">
            NUESTRO EQUIPO CUENTA CON EL CONOCIMIENTO, LA EXPERIENCIA Y LAS HABILIDADES PARA BRINDARTE LOS MEJORES RESULTADOS.
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="proc-tabs-nav-wrapper">
          <div className="proc-tabs-nav">
            {(Object.keys(TABS_DATA) as TabKey[]).map(key => (
              <button
                key={key}
                className={`proc-tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {TABS_DATA[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="proc-tab-content">
          <div className="proc-tab-img-col">
            <div className="proc-tab-img-wrapper">
              <div className="proc-tab-img-placeholder">
                ({currentData.imageText})
              </div>
            </div>
          </div>
          
          <div className="proc-tab-text-col">
            <p className="proc-tab-desc">
              {currentData.description}
            </p>
            
            <div className="proc-pill-links">
              {currentData.links.map(link => (
                <Link key={link.href} href={link.href} className="proc-pill-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
