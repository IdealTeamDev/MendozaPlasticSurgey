import Link from 'next/link';
import './MedicalCenterServices.css';

interface CategoryData {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface MedicalCenterServicesProps {
  categories?: CategoryData[];
}

export default function MedicalCenterServices({ categories = [] }: MedicalCenterServicesProps) {
  // If no categories are passed or empty, use fallback data matching the mockup
  const displayCategories = categories.length > 0 ? categories : [
    { id: 1, name: 'CUERPO', slug: 'cuerpo', image: '/procedures.png' },
    { id: 2, name: 'TRATAMIENTOS', slug: 'tratamientos', image: '/procedures.png' },
    { id: 3, name: 'INYECTABLES', slug: 'inyectables', image: '/procedures.png' }
  ];

  const needsSlider = displayCategories.length > 3;

  return (
    <section className="mc-services-section section-padding">
      <div className="container">
        <h2 className="mc-services-title text-center">CONOCE MÁS AQUÍ</h2>
        
        <div className={`mc-services-container ${needsSlider ? 'has-slider' : ''}`}>
          {displayCategories.map((cat) => (
            <div key={cat.id} className="mc-service-card">
              <div className="mc-service-left-img">
                <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="mc-service-right-content">
                <h3 className="mc-service-name">{cat.name.toUpperCase()}</h3>
                <Link href={`/procedimientos#${cat.slug}`} className="mc-service-btn">
                  CONOCE MÁS AQUÍ
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
