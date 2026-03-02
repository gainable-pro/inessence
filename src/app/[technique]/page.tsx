import Link from "next/link";
import { TECHNIQUES, slugify } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return TECHNIQUES.map((tech) => ({
        technique: tech.slug,
    }));
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
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                        Découvrez les bienfaits de la <strong>{tech.title.toLowerCase()}</strong>, une technique naturelle et efficace intégrée dans mes programmes d'accompagnement à Miramas.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '24px' }}>Principes et bienfaits après une séance</h2>
                    <p style={{ marginBottom: '40px' }}>
                        La {tech.title.toLowerCase()} est utilisée pour stimuler les capacités d'auto-guérison de votre corps.
                        Que ce soit pour une séance de réflexologie ou un conseil en phytothérapie, je m'adapte à votre terrain spécifique lors de nos rendez-vous à Miramas.
                    </p>

                    <div style={{ padding: '40px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', textAlign: 'center' }}>
                        <Link href="/contact" className="btn-premium">ESSAYER CETTE TECHNIQUE</Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
