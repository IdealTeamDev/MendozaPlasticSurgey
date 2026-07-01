import React from 'react';
import './HomeIntroText.css';

interface HomeIntroTextProps {
  content?: string;
}

export default function HomeIntroText({ content }: HomeIntroTextProps) {
  if (!content) return null;

  return (
    <section className="home-intro-section">
      <div className="container">
        <div 
          className="home-intro-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}
