"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './CasesSidebar.css';

export interface SidebarProcedurePill {
  id: number;
  title: string;
  slug: string;
}

export interface SidebarCategoryData {
  id: number;
  name: string;
  procedures: SidebarProcedurePill[];
}

interface CasesSidebarProps {
  categories: SidebarCategoryData[];
}

export default function CasesSidebar({ categories = [] }: CasesSidebarProps) {
  const [openCategoryId, setOpenCategoryId] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    if (openCategoryId === id) {
      setOpenCategoryId(null);
    } else {
      setOpenCategoryId(id);
    }
  };

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="cases-sidebar-widget">
      <h3 className="cases-sidebar-title">PROCEDIMIENTOS</h3>
      
      <div className="cases-sidebar-accordion-list">
        {categories.map((cat) => {
          const isOpen = openCategoryId === cat.id;

          return (
            <div key={cat.id} className={`cases-sidebar-item ${isOpen ? 'open' : ''}`}>
              {/* Header / Trigger */}
              <div 
                className="cases-sidebar-header" 
                onClick={() => toggleCategory(cat.id)}
              >
                <span className="cases-sidebar-cat-name">{cat.name}</span>
                <span className={`cases-sidebar-arrow ${isOpen ? 'up' : 'down'}`}></span>
              </div>

              {/* Content (Procedures Links) */}
              <div className="cases-sidebar-content">
                <div className="cases-sidebar-content-inner">
                  {cat.procedures && cat.procedures.length > 0 ? (
                    <ul className="cases-sidebar-procs-list">
                      {cat.procedures.map((proc) => (
                        <li key={proc.id}>
                          <Link href={`/casos/${proc.slug}`} className="cases-sidebar-proc-link">
                            {proc.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="cases-sidebar-empty">No hay procedimientos.</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
