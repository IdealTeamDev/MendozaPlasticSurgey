import React from 'react';
import { 
  getProcedureBySlug, 
  getCasoById, 
  getMedia, 
  getProcedureCategories, 
  getProceduresByCategory,
  getCategoryBySlug,
  fetchAPI
} from '@/lib/wordpress';
import ProcedureDetailHero from '@/components/procedimientos/ProcedureDetailHero';
import CasesGrid from '@/components/casos/CasesGrid';
import CasesSidebar from '@/components/casos/CasesSidebar';
import ProcedureIntro from '@/components/procedimientos/ProcedureIntro';

// Helper to format date
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const d = new Date(dateString);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export default async function CasosInternalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // 1. Fetch current procedure
  const wpProc = await getProcedureBySlug(slug);
  
  if (!wpProc) {
    return <div>Procedimiento no encontrado</div>;
  }

  // 2. Fetch procedure category for Hero subtitle
  let categoryName = "PROCEDIMIENTOS";
  if (wpProc.categoria_procedimiento && wpProc.categoria_procedimiento.length > 0) {
    // Assuming we have a way to fetch category name by ID. 
    // We can fetch all categories and find it.
    const allCats = await getProcedureCategories() || [];
    const cat = allCats.find((c: any) => c.id === wpProc.categoria_procedimiento[0]);
    if (cat) {
      categoryName = cat.name.toUpperCase();
    }
  }

  const title = wpProc.title?.rendered || slug.toUpperCase();
  const acf = wpProc.acf || {};

  // 3. Resolve Casos Relacionados
  let casesData: any[] = [];
  if (Array.isArray(acf.casos_relacionados)) {
    casesData = await Promise.all(
      acf.casos_relacionados.map(async (casoRef: any) => {
        const id = typeof casoRef === 'number' ? casoRef : (casoRef.ID || casoRef.id);
        if (!id) return null;
        
        const casoPost = await getCasoById(id);
        if (!casoPost) return null;

        const casoAcf = casoPost.acf || {};
        
        let beforeImg = '';
        if (typeof casoAcf.foto_antes === 'number') {
          beforeImg = (await getMedia(casoAcf.foto_antes))?.source_url || '';
        } else {
          beforeImg = casoAcf.foto_antes || '';
        }
        
        let afterImg = '';
        if (typeof casoAcf.foto_despues === 'number') {
          afterImg = (await getMedia(casoAcf.foto_despues))?.source_url || '';
        } else {
          afterImg = casoAcf.foto_despues || '';
        }

        return {
          id: id,
          title: casoRef.post_title || casoPost.title?.rendered,
          date: formatDate(casoPost.date),
          description: casoAcf.descripcion_corta || `${title} con el Dr. Mendoza`, // Fallback description
          beforeImg,
          afterImg
        };
      })
    );
    casesData = casesData.filter(c => c !== null);
  }

  // 4. Resolve Sidebar Categories
  const categoriesRaw = await getProcedureCategories() || [];
  const orderMap: { [key: string]: number } = {
    'cirugia-de-cuerpo': 1,
    'cirugia-de-senos': 2,
    'cirugia-facial': 3,
    'tratamientos': 4,
    'inyectables': 5
  };
  const sortedCategories = [...categoriesRaw].sort((a, b) => {
    const aOrder = orderMap[a.slug?.toLowerCase()] || 99;
    const bOrder = orderMap[b.slug?.toLowerCase()] || 99;
    return aOrder - bOrder;
  });

  const sidebarCategories = await Promise.all(sortedCategories.map(async (cat: any) => {
    const procsRaw = await getProceduresByCategory(cat.id) || [];
    const procedures = procsRaw.map((p: any) => ({
      id: p.id,
      title: p.title?.rendered || '',
      slug: p.slug
    }));

    return {
      id: cat.id,
      name: cat.name,
      procedures: procedures
    };
  }));

  return (
    <main style={{ backgroundColor: '#fafafa', paddingBottom: '4rem' }}>
      {/* Hero */}
      <ProcedureDetailHero 
        title={title} 
        subtitle={categoryName}
        imageUrl="/images/placeholder-hero.jpg" 
      />

      {/* Main Content Area */}
      <section className="container" style={{ padding: '4rem 1rem' }}>
        
        {/* Title Block */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--black)', marginBottom: '0.5rem', fontFamily: 'var(--font-title)' }}>
            RESULTADOS CIRUGÍA PLÁSTICA
          </h2>
          <p style={{ fontSize: '1rem', color: '#666', fontFamily: 'var(--font-subtitle)' }}>
            Explora la galer\u00eda de antes y despu\u00e9s, y descubre transformaciones reales.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          
          {/* Left Column (Grid) */}
          <div style={{ flex: '1 1 65%', minWidth: '300px' }}>
            <CasesGrid cases={casesData} />
            
            {/* Pagination Placeholder (Static for now) */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem', fontFamily: 'var(--font-subtitle)', fontSize: '0.9rem', color: '#888' }}>
              <span>&lt;</span>
              <span style={{ border: '1px solid #333', padding: '2px 8px', borderRadius: '4px', color: '#333' }}>1</span>
              <span>2</span>
              <span>3</span>
              <span>..</span>
              <span>10</span>
              <span>&gt;</span>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div style={{ flex: '1 1 30%', minWidth: '280px' }}>
            <CasesSidebar categories={sidebarCategories} />
          </div>

        </div>
      </section>

      {/* Contact Form Section (Pre-Footer) */}
      <section style={{ backgroundColor: '#fff', padding: '5rem 1rem' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 40%', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 400, fontFamily: 'var(--font-title)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              \u00a1EL CAMBIO QUE QUIERES ES AHORA!
            </h2>
            <p style={{ fontFamily: 'var(--font-subtitle)', color: '#555', marginBottom: '1.5rem' }}>
              Reserva tu consulta con el Dr. Mendoza <strong>cirujano pl\u00e1stico en Atlanta</strong> y conoce m\u00e1s sobre tu procedimiento.
            </p>
            <p style={{ fontFamily: 'var(--font-subtitle)', color: '#555' }}>
              Despu\u00e9s de diligenciar el formulario, uno de nuestros asesores se pondr\u00e1 en contacto contigo para fijar la fecha de tu consulta.
            </p>
          </div>
          <div style={{ flex: '1 1 50%', minWidth: '300px', backgroundColor: '#f9f9f9', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'var(--font-subtitle)' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#333' }}>Nombre*</label>
                <input type="text" placeholder="Ingresa tu nombre aqu\u00ed" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#333' }}>Correo electr\u00f3nico*</label>
                <input type="email" placeholder="Ingresa tu correo electr\u00f3nico aqu\u00ed" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#333' }}>Celular*</label>
                <input type="tel" placeholder="Ingresa tu n\u00famero de celular aqu\u00ed" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#333' }}>Procedimiento deseado*</label>
                <select style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff', color: '#888' }}>
                  <option>Selecciona un procedimiento</option>
                  <option>Aumento de senos</option>
                  <option>Liposucci\u00f3n</option>
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                <input type="checkbox" id="policy" />
                <label htmlFor="policy" style={{ fontSize: '0.8rem', color: '#666' }}>Acepto pol\u00edtica de tratamiento de datos</label>
              </div>
              <button type="button" style={{ backgroundColor: '#000', color: '#fff', padding: '1rem', border: 'none', borderRadius: '4px', fontWeight: 500, marginTop: '1rem', cursor: 'pointer' }}>
                Agenda tu consulta
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
