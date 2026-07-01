import React, { useEffect, useState } from 'react';
import './CasesModal.css';
import { CaseCardData } from './CasesGrid';

interface CasesModalProps {
  isOpen: boolean;
  onClose: () => void;
  cases: CaseCardData[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function CasesModal({ isOpen, onClose, cases, currentIndex, onNext, onPrev }: CasesModalProps) {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

  // Reset example index when case changes
  useEffect(() => {
    setCurrentExampleIndex(0);
  }, [currentIndex]);
  
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || cases.length === 0) return null;

  const currentCase = cases[currentIndex];
  const currentExample = currentCase.examples[currentExampleIndex] || { beforeImg: '', afterImg: '' };

  const nextExample = () => {
    setCurrentExampleIndex(prev => prev === currentCase.examples.length - 1 ? 0 : prev + 1);
  };

  const prevExample = () => {
    setCurrentExampleIndex(prev => prev === 0 ? currentCase.examples.length - 1 : prev - 1);
  };

  return (
    <div className="cases-modal-overlay" onClick={onClose}>
      <div className="cases-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="cases-modal-close" onClick={onClose} aria-label="Cerrar modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="cases-modal-body">
          {/* Labels */}
          <div className="cases-modal-labels">
            <span className="cases-modal-pill">ANTES</span>
            <span className="cases-modal-pill">DESPU\u00c9S</span>
          </div>

          {/* Images side-by-side */}
          <div className="cases-modal-images">
            <div className="cases-modal-img-wrapper">
              {currentExample.beforeImg ? (
                <img src={currentExample.beforeImg} alt={`Antes - ${currentCase.title}`} />
              ) : (
                <div className="cases-modal-img-placeholder">Antes</div>
              )}
            </div>
            <div className="cases-modal-img-wrapper">
              {currentExample.afterImg ? (
                <img src={currentExample.afterImg} alt={`Después - ${currentCase.title}`} />
              ) : (
                <div className="cases-modal-img-placeholder">Después</div>
              )}
            </div>
          </div>

          {/* Controls for Examples */}
          {currentCase.examples.length > 1 && (
            <div className="cases-modal-example-controls" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0', color: '#666', alignItems: 'center' }}>
              <button onClick={prevExample} style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>&lt;</button>
              <span style={{ fontSize: '0.9rem' }}>
                {currentExampleIndex + 1} / {currentCase.examples.length}
              </span>
              <button onClick={nextExample} style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>&gt;</button>
            </div>
          )}

          {/* Controls */}
          {cases.length > 1 && (
            <div className="cases-modal-controls">
              <button className="cases-modal-nav-btn" onClick={onPrev}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="cases-modal-nav-btn" onClick={onNext}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}

          {/* Description */}
          <div className="cases-modal-desc">
            <p>{currentCase.description}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
