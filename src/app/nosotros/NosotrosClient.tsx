"use client";

import React, { useState } from 'react';
import SurgeonHero from '@/components/nosotros/SurgeonHero';
import SurgeonBeforeAfter from '@/components/nosotros/SurgeonBeforeAfter';
import SurgeonDetails from '@/components/nosotros/SurgeonDetails';
import SurgeonFunFacts from '@/components/nosotros/SurgeonFunFacts';
import MedicalCenterHero from '@/components/nosotros/MedicalCenterHero';
import MedicalCenterDetails from '@/components/nosotros/MedicalCenterDetails';
import MedicalCenterServices from '@/components/nosotros/MedicalCenterServices';

export default function NosotrosClient() {
  const [activeTab, setActiveTab] = useState<'surgeon' | 'medical'>('surgeon');

  return (
    <>
      <div className="nosotros-toggle-wrapper">
        <div className="nosotros-toggle">
          <button 
            className={`toggle-btn ${activeTab === 'surgeon' ? 'active' : ''}`}
            onClick={() => setActiveTab('surgeon')}
          >
            Surgeon
          </button>
          <button 
            className={`toggle-btn ${activeTab === 'medical' ? 'active' : ''}`}
            onClick={() => setActiveTab('medical')}
          >
            Medical Center
          </button>
        </div>
      </div>

      {activeTab === 'surgeon' ? (
        <div className="tab-content fade-in">
          <SurgeonHero />
          <SurgeonBeforeAfter />
          <SurgeonDetails />
          <SurgeonFunFacts />
        </div>
      ) : (
        <div className="tab-content fade-in">
          <MedicalCenterHero />
          <MedicalCenterDetails />
          <MedicalCenterServices />
        </div>
      )}
    </>
  );
}
