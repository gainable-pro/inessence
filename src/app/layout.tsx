import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "INESSENCE | Naturopathe à Miramas & En Ligne",
  description: "Consultation de naturopathie personnalisée à Miramas, en cabinet ou en visio. Gestion du stress, sommeil, alimentation et bien-être holistique.",
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
        <Navbar />
        <main style={{ paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
