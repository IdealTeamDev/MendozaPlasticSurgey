"use client";

import React, { useState } from 'react';
import './ProcedureFAQ.css';

const FAQ_DATA = [
  {
    id: 1,
    question: "¿LA LIPOSUCCIÓN ELIMINA LA CELULITIS?",
    answer: "No, la liposucción no elimina la celulitis. De hecho, puede hacer que la celulitis sea más evidente si la piel no tiene buena elasticidad. Existen otros tratamientos específicos para mejorar la apariencia de la celulitis."
  },
  {
    id: 2,
    question: "¿LA LIPOSUCCIÓN ES UN MÉTODO EFECTIVO PARA PERDER PESO?",
    answer: "La liposucción no es un tratamiento para la pérdida de peso ni una alternativa a la dieta y el ejercicio. Es un procedimiento de contorno corporal para eliminar áreas específicas de grasa rebelde."
  },
  {
    id: 3,
    question: "¿LAS CÉLULAS GRASAS ELIMINADAS DURANTE LA LIPOSUCCIÓN VOLVERÁN A APARECER?",
    answer: "Las células de grasa que se eliminan mediante la liposucción no vuelven a crecer. Sin embargo, si aumentas de peso después de la cirugía, las células de grasa restantes pueden aumentar de tamaño."
  },
  {
    id: 4,
    question: "¿ES DOLOROSA LA RECUPERACIÓN DE UNA LIPOSUCCIÓN?",
    answer: "Es normal experimentar dolor, hinchazón y moretones después de la liposucción. Tu cirujano te recetará analgésicos para mantenerte cómodo durante los primeros días."
  }
];

export default function ProcedureFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="proc-faq-section">
      <div className="container">
        
        <div className="proc-faq-header">
          <span className="proc-faq-subtitle">PREGUNTAS FRECUENTES</span>
          <h2 className="proc-faq-title">SOBRE LIPOSUCCIÓN</h2>
        </div>

        <div className="proc-faq-accordion">
          {FAQ_DATA.map((item) => (
            <div 
              key={item.id} 
              className={`proc-faq-item ${openId === item.id ? 'open' : ''}`}
            >
              <div 
                className="proc-faq-question"
                onClick={() => toggleAccordion(item.id)}
              >
                <h3>{item.question}</h3>
                <span className="proc-faq-icon">{openId === item.id ? '−' : '+'}</span>
              </div>
              <div className="proc-faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
