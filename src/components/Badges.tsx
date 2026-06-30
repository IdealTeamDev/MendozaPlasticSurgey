"use client";

import React, { useRef } from 'react';
import './Badges.css';

export interface BadgeItem {
  imageUrl?: string;
  title?: string;
  type?: string;
  icon?: string;
}

interface BadgesProps {
  badges?: BadgeItem[];
}

export default function Badges({ badges }: BadgesProps) {
  const DEFAULT_BADGES: (BadgeItem & { id: number })[] = [
    { id: 1, type: 'blue', icon: 'M', title: 'Top Surgeon' },
    { id: 2, type: 'gold', icon: '★', title: 'Excellence' },
    { id: 3, type: 'blue', icon: '1', title: 'Certified' },
    { id: 4, type: 'gold', icon: '2', title: 'Awarded' },
    { id: 5, type: 'blue', icon: '3', title: 'Trusted' },
    { id: 6, type: 'gold', icon: '4', title: 'Rated' },
  ];

  const badgesToDisplay = badges && badges.length > 0 
    ? badges.map((b, index) => ({
        id: index + 1,
        imageUrl: b.imageUrl,
        type: b.type || 'blue',
        icon: b.icon || '★',
        title: b.title
      }))
    : DEFAULT_BADGES;

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.querySelector('.badge-slide')?.clientWidth || 200;
      scrollRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.querySelector('.badge-slide')?.clientWidth || 200;
      scrollRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="badges-section">
      <div className="container">
        <div className="badges-carousel">
          <button className="carousel-arrow prev-arrow" onClick={scrollPrev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="badges-viewport" ref={scrollRef}>
            <div className="badges-track">
              {badgesToDisplay.map(b => (
                <div key={b.id} className="badge-slide">
                  <div className="badge-item">
                    {b.imageUrl ? (
                      <img src={b.imageUrl} alt="Insignia" className="badge-image" style={{ maxWidth: '100%', height: 'auto', maxHeight: '150px', objectFit: 'contain' }} />
                    ) : (
                      <>
                        <div className={`badge-placeholder ${b.type}`}>
                          <span className="badge-icon">{b.icon}</span>
                        </div>
                        {b.title && <h3 className="badge-title">{b.title}</h3>}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow next-arrow" onClick={scrollNext} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
