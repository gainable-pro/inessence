import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const baseUrl = 'https://www.inessence-naturopathie.fr'; // Placeholder, replace with actual final domain

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "INESSENCE | Naturopathe à Miramas & En Ligne",
    template: "%s | INESSENCE"
  },
  description: "Consultation de naturopathie personnalisée à Miramas, en cabinet ou en visio. Gestion du stress, sommeil, alimentation et bien-être holistique.",
  openGraph: {
    title: "INESSENCE | Naturopathie & Bien-être",
    description: "Retrouvez votre équilibre grâce à un accompagnement naturopathique sur-mesure à Miramas ou en visioconférence.",
    url: baseUrl,
    siteName: "INESSENCE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INESSENCE | Naturopathe à Miramas",
    description: "Consultation de naturopathie personnalisée à Miramas et en visio.",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="dynamic-bg" aria-hidden="true" />
        <div className="blob-3" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main style={{ paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
