import Link from "next/link";
import { PROBLEMATIQUES, slugify } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return PROBLEMATIQUES.map((prob) => ({
        problem: `${prob.slug}-miramas`,
    }));
}

export default async function ProblemPage({ params }: { params: Promise<{ problem: string }> }) {
    const { problem: fullSlug } = await params;
    const slug = fullSlug.replace('-miramas', '');
    const prob = PROBLEMATIQUES.find(p => p.slug === slug);

    if (!prob) {
        notFound();
    }

    return (
        <article className="animate-fade-in">
            <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <nav style={{ fontSize: '0.8rem', marginBottom: '24px', opacity: 0.6 }}>
                        <Link href="/" className="hover:text-sauge">ACCUEIL</Link> / <span>{prob.title.toUpperCase()} MIRAMAS</span>
                    </nav>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '32px' }}>
                        {prob.title} à <span className="text-sauge">Miramas</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                        L'accompagnement pour la <strong>{prob.title.toLowerCase()}</strong> à Miramas.
                    </p>
                </div>
            </section>
        </article>
    );
}
