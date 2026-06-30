"use client";

import React, { useState } from 'react';
import SurgeonHero from '@/components/nosotros/SurgeonHero';
import SurgeonBeforeAfter from '@/components/nosotros/SurgeonBeforeAfter';
import SurgeonDetails from '@/components/nosotros/SurgeonDetails';
import SurgeonFunFacts from '@/components/nosotros/SurgeonFunFacts';
import MedicalCenterHero from '@/components/nosotros/MedicalCenterHero';
import MedicalCenterDetails from '@/components/nosotros/MedicalCenterDetails';
import MedicalCenterServices from '@/components/nosotros/MedicalCenterServices';

interface NosotrosProps {
  acf?: any;
}

export default function NosotrosClient({ acf }: NosotrosProps) {
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
          <SurgeonHero 
            subtitle={acf?.surgeon_subtitle}
            title={acf?.surgeon_title}
            desc={acf?.surgeon_desc}
            imageUrl={acf?.surgeon_image}
          />
          <SurgeonBeforeAfter />
          <SurgeonDetails />
          <SurgeonFunFacts />
        </div>
      ) : (
        <div className="tab-content fade-in">
          <MedicalCenterHero 
            title={acf?.medical_title}
            desc={acf?.medical_desc}
            imageUrl={acf?.medical_image}
          />
          <MedicalCenterDetails />
          <MedicalCenterServices />
        </div>
      )}
    </>
  );
}
