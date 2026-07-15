"use client";

import React, { useState } from 'react';
import './MedicalCenterGallery.css';

interface MedicalCenterGalleryProps {
  images?: string[];
}

export default function MedicalCenterGallery({ images = [] }: MedicalCenterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const displayImages = images.length > 0 ? images : [
    '/hero_bg.png' // Fallback just to show something
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  if (displayImages.length === 0) return null;

  return (
    <section className="mc-gallery-section">
      <div className="container">
        <div className="mc-gallery-wrapper">
          <div 
            className="mc-gallery-image-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img 
              key={currentIndex}
              src={displayImages[currentIndex]} 
              alt="Medical Center Facility" 
              className="mc-gallery-img fade-anim"
            />
          </div>
          
          {displayImages.length > 1 && (
            <div className="mc-gallery-controls">
              <button className="mc-gallery-btn" onClick={prevImage} aria-label="Previous image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className="mc-gallery-btn" onClick={nextImage} aria-label="Next image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
