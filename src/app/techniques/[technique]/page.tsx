import Link from "next/link";
import { TECHNIQUES, slugify } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
    return TECHNIQUES.map((tech) => ({
        technique: tech.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ technique: string }> }): Promise<Metadata> {
    const { technique: slug } = await params;
    const tech = TECHNIQUES.find(t => t.slug === slug);
    if (!tech) return { title: 'Technique non trouvée' };

    const title = `${tech.title} à Miramas | Naturopathie Inessence`;
    const description = `Découvrez la technique de ${tech.title.toLowerCase()} proposée par Inessence à Miramas et en visioconférence.`;
    const canonicalUrl = `/techniques/${slug}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: canonicalUrl,
        },
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

export default async function TechniquePage({ params }: { params: Promise<{ technique: string }> }) {
    const { technique: slug } = await params;
    const tech = TECHNIQUES.find(t => t.slug === slug);

    if (!tech) {
        notFound();
    }

    return (
        <article className="animate-fade-in">
            <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <nav style={{ fontSize: '0.8rem', marginBottom: '24px', opacity: 0.6 }}>
                        <Link href="/" className="hover:text-sauge">ACCUEIL</Link> / <span>{tech.title.toUpperCase()}</span>
                    </nav>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '32px' }}>
                        {tech.title} à <span className="text-sauge">Miramas</span>
                    </h1>
                </div>
            </section>
        </article>
    );
}
