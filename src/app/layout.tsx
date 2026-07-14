import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Fahkwang, Montserrat } from "next/font/google";
import "./globals.css";

const fahkwang = Fahkwang({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-title",
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  title: "Mendoza Plastic Surgery | Dr. Delquis R. Mendoza",
  description: "Clínica de cirugía plástica y tratamientos estéticos liderada por el Dr. Delquis R. Mendoza.",
};

import FloatingContact from '@/components/FloatingContact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getGlobalOptions, getMedia, getProcedures, getProcedureCategories } from '@/lib/wordpress';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalOptions = await getGlobalOptions();
  
  // Resolve logo image
  let logoUrl = null;
  if (globalOptions?.logo_principal) {
    logoUrl = typeof globalOptions.logo_principal === 'number' 
      ? (await getMedia(globalOptions.logo_principal))?.source_url 
      : globalOptions.logo_principal;
  }

  const fixMenuUrls = (items: any[]) => {
    return items.map(item => {
      const newItem = { ...item };
      if (newItem.enlace === '/surgeon') newItem.enlace = '/cirujano';
      if (newItem.enlace === '/medical-center') newItem.enlace = '/centro-medico';
      
      if (newItem.sub_menu && newItem.sub_menu.length > 0) {
        newItem.sub_menu = fixMenuUrls(newItem.sub_menu);
      }
      return newItem;
    });
  };

  const menuItems = globalOptions?.menu_principal && globalOptions.menu_principal.length > 0 
    ? fixMenuUrls([...globalOptions.menu_principal])
    : [
        { titulo: 'Inicio', enlace: '/' },
        { 
          titulo: 'Nosotros', 
          enlace: '#',
          es_desplegable: true,
          sub_menu: [
            { titulo: 'Dr. Mendoza', enlace: '/cirujano' },
            { titulo: 'Medical Center', enlace: '/centro-medico' }
          ]
        },
        { titulo: 'Procedimientos', enlace: '/procedimientos' },
        { titulo: 'Antes y Después', enlace: '/antes-despues' },
        { titulo: 'Financiamiento', enlace: '/financiamiento' },
        { titulo: 'Blog', enlace: '/blog' },
        { titulo: 'Contacto', enlace: '/contacto' }
      ];

  // Auto-populate mega menu for Procedimientos
  if (menuItems.length > 0) {
    const procIndex = menuItems.findIndex((item: any) => 
      item.enlace === '/procedimientos' || item.titulo.toLowerCase().includes('procedimientos')
    );
    
    if (procIndex !== -1) {
      const categories = await getProcedureCategories();
      const procedures = await getProcedures();
      
      if (categories && categories.length > 0 && procedures && procedures.length > 0) {
        menuItems[procIndex].es_desplegable = true;
        menuItems[procIndex].es_mega_menu = true;
        
        const columnas = categories.map((cat: any) => {
          const catProcs = procedures.filter((p: any) => 
            p.categoria_procedimiento && p.categoria_procedimiento.includes(cat.id)
          );
          return {
            titulo: cat.name,
            enlace: `/procedimientos/${cat.slug}`,
            items: catProcs.map((p: any) => ({
              titulo: p.title.rendered,
              enlace: `/procedimientos/${cat.slug}/${p.slug}`
            }))
          };
        }).filter((col: any) => col.items.length > 0);
        
        menuItems[procIndex].mega_menu_columnas = columnas;
      }
    }
  }

  return (
    <html lang="es">
      <body className={`${fahkwang.variable} ${montserrat.variable} antialiased`}>
        <Navbar 
          logoUrl={logoUrl} 
          menuItems={menuItems}
        />
        {children}
        <Footer 
          logoUrl={logoUrl}
          description={globalOptions?.footer_descripcion}
          phone={globalOptions?.telefono}
          address={globalOptions?.direccion}
          socialLinks={[
            { red_social: 'facebook', url: 'https://www.facebook.com/mendozaplasticsurgery' },
            { red_social: 'instagram', url: 'https://www.instagram.com/mendozaplasticsurgery/' },
            { red_social: 'tiktok', url: 'https://www.tiktok.com/@mendozaplasticsurgery' }
          ]}
        />
        <FloatingContact />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
