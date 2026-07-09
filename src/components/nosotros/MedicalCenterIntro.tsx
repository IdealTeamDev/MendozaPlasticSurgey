import React from 'react';
import './MedicalCenterIntro.css';

interface MedicalCenterIntroProps {
  title?: string;
  text?: string;
}

export default function MedicalCenterIntro({ title, text }: MedicalCenterIntroProps) {
  return (
    <section className="mc-intro-section">
      <div className="container mc-intro-container text-center">
        <h1 className="mc-intro-title">{title || 'CENTRO DE CIRUGÍA PLÁSTICA EN ATLANTA'}</h1>
        
        <div className="mc-intro-text">
          {text ? (
            <div dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <>
              <p>
                Bienvenido a Mendoza Plastic Surgery, tu clínica de cirugía plástica en Atlanta, donde un equipo de profesionales liderado por el Dr. Mendoza se dedica a las cirugías de contorno corporal, rejuvenecimiento facial y tratamientos faciales y corporales.
              </p>
              <p>
                La experiencia en Mendoza Plastic Surgery es seguridad, experiencia y resultados personalizados. Nuestro equipo trabaja bajo altos estándares médicos, utilizando tecnología de vanguardia y técnicas avanzadas para ofrecer resultados naturales y armoniosos. Además, brindamos un acompañamiento integral antes, durante y después del procedimiento, asegurando que cada paciente se sienta informado, cómodo y respaldado en todo momento.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
