import React from 'react';
import './HomeIntroText.css';

interface HomeIntroTextProps {
  subtitle?: string;
  content?: string;
}

export default function HomeIntroText({ subtitle, content }: HomeIntroTextProps) {
  if (!content && !subtitle) return null;

  return (
    <section className="home-intro-section">
      <div className="container">
        {subtitle && (
          <h3 className="home-intro-subtitle">{subtitle}</h3>
        )}
        {content && (
          <div 
            className="home-intro-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}
