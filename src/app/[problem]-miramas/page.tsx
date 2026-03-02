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
                        L'accompagnement en naturopathie pour la <strong>{prob.title.toLowerCase()}</strong> à Miramas permet de retrouver un équilibre de vie sain grâce à des techniques naturelles et personnalisées.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '24px' }}>Une solution naturelle pour votre bien-être</h2>
                    <p style={{ marginBottom: '40px' }}>
                        À Miramas, je vous reçois pour travailler ensemble sur les causes profondes de votre problématique.
                        La {prob.title.toLowerCase()} ne doit pas être une fatalité. Par l'hygiène de vie, l'alimentation et l'utilisation de plantes, nous pouvons améliorer significativement votre confort quotidien.
                    </p>

                    <div style={{ padding: '40px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', textAlign: 'center' }}>
                        <Link href="/contact" className="btn-premium">PRENDRE RENDEZ-VOUS À MIRAMAS</Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
