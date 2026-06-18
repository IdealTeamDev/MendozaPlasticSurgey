import type { Metadata } from "next";
import { Fahkwang, Montserrat } from "next/font/google";
import "./globals.css";

const fahkwang = Fahkwang({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-text",
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Mendoza Plastic Surgery | Dr. Delouis R. Mendoza",
  description: "Clínica de cirugía plástica y tratamientos estéticos liderada por el Dr. Delouis R. Mendoza.",
};

import FloatingContact from '@/components/FloatingContact';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fahkwang.variable} ${montserrat.variable} antialiased`}>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
