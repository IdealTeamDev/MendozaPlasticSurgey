import React, { useEffect } from 'react';
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
              {currentCase.beforeImg ? (
                <img src={currentCase.beforeImg} alt={`Antes - ${currentCase.title}`} />
              ) : (
                <div className="cases-modal-img-placeholder">Antes</div>
              )}
            </div>
            <div className="cases-modal-img-wrapper">
              {currentCase.afterImg ? (
                <img src={currentCase.afterImg} alt={`Despu\u00e9s - ${currentCase.title}`} />
              ) : (
                <div className="cases-modal-img-placeholder">Despu\u00e9s</div>
              )}
            </div>
          </div>

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
