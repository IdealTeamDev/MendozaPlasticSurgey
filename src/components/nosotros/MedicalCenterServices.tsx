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
  const displayCategories = categories.length > 0 ? categories : [
    { id: 1, name: 'CUERPO', slug: 'cuerpo', image: '/procedures.png' },
    { id: 2, name: 'TRATAMIENTOS', slug: 'tratamientos', image: '/procedures.png' },
    { id: 3, name: 'REJUVENECIMIENTO NO QUIRÚRGICO', slug: 'rejuvenecimiento', image: '/procedures.png' }
  ];

  return (
    <section className="mc-services-section">
      <div className="container">
        <h2 className="mc-services-main-title text-center">AQUÍ COMIENZA TU TRANSFORMACIÓN</h2>
        
        <div className="mc-services-grid">
          {displayCategories.map((cat) => (
            <div key={cat.id} className="mc-new-service-card" style={{ backgroundImage: `url(${cat.image})` }}>
              <div className="mc-new-service-overlay">
                <h3 className="mc-new-service-name">{cat.name.toUpperCase()}</h3>
                <Link href={`/procedimientos#${cat.slug}`} className="mc-new-service-btn">
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
