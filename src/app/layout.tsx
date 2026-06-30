import type { Metadata } from "next";
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
  title: "Mendoza Plastic Surgery | Dr. Delouis R. Mendoza",
  description: "Clínica de cirugía plástica y tratamientos estéticos liderada por el Dr. Delouis R. Mendoza.",
};

import FloatingContact from '@/components/FloatingContact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getGlobalOptions, getMedia } from '@/lib/wordpress';

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

  return (
    <html lang="es">
      <body className={`${fahkwang.variable} ${montserrat.variable} antialiased`}>
        <Navbar 
          logoUrl={logoUrl} 
          menuItems={globalOptions?.menu_principal}
        />
        {children}
        <Footer 
          logoUrl={logoUrl}
          description={globalOptions?.footer_descripcion}
          phone={globalOptions?.telefono}
          address={globalOptions?.direccion}
          socialLinks={globalOptions?.redes_sociales}
        />
        <FloatingContact />
      </body>
    </html>
  );
}
