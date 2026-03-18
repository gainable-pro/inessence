import { BLOG_POSTS, BlogPost } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: 'Article non trouvé' };

    return {
        title: post.metaTitle,
        description: post.metaDesc,
        openGraph: {
            title: post.metaTitle,
            description: post.metaDesc,
            images: [`/images/${post.img}`],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="animate-fade-in">
            {/* ARTICLE HERO */}
            <section style={{
                padding: '240px 0 120px',
                backgroundColor: 'var(--sable-warm)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <span style={{
                        color: 'var(--gold-warm)',
                        fontWeight: 700,
                        letterSpacing: '4px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '32px'
                    }}>
                        Naturopathie à Miramas — {post.symptom}
                    </span>
                    <h1 className="font-serif typewriter" style={{ fontSize: '4.5rem', marginBottom: '40px', lineHeight: 1.1 }}>
                        {post.h1}
                    </h1>
                    <p style={{
                        fontSize: '1.4rem',
                        color: 'var(--text-muted)',
                        maxWidth: '900px',
                        margin: '0 auto',
                        lineHeight: 1.8,
                        fontWeight: 300
                    }}>
                        {post.intro}
                    </p>
                </div>
            </section>

            {/* STRUCTURED SEO CONTENT */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>

                    {/* ZIG ZAG 1: Understanding */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '100px', alignItems: 'center', marginBottom: '140px' }}>
                        <div>
                            <h2 className="font-serif" style={{ fontSize: '2.8rem', marginBottom: '32px', color: 'var(--sauge-dark)' }}>
                                {post.understanding.title}
                            </h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)', fontWeight: 300 }}>
                                {post.understanding.content}
                            </p>
                        </div>
                        <div style={{ borderRadius: '50px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                            <img src={`/images/${post.img}`} alt={post.title} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                        </div>
                    </div>

                    {/* ZIG ZAG 2: Why Consult */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '100px', alignItems: 'center', marginBottom: '140px' }}>
                        <div style={{ borderRadius: '50px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                            <img src="/images/accompagnement-naturopathy.png" alt="Accompagnement naturopathique Miramas" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <h2 className="font-serif" style={{ fontSize: '2.8rem', marginBottom: '32px', color: 'var(--sauge-dark)' }}>
                                {post.whyConsult.title}
                            </h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)', fontWeight: 300 }}>
                                {post.whyConsult.content}
                            </p>
                        </div>
                    </div>

                    {/* SOLUTIONS LIST */}
                    <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px', borderRadius: '60px', marginBottom: '140px' }}>
                        <h2 className="font-serif" style={{ fontSize: '2.8rem', marginBottom: '48px', textAlign: 'center' }}>
                            Les solutions naturelles proposées par Inessence
                        </h2>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', listStyle: 'none', padding: 0 }}>
                            {post.solutions.map((sol, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    gap: '20px',
                                    fontSize: '1.2rem',
                                    alignItems: 'center',
                                    color: 'var(--text-main)'
                                }}>
                                    <span style={{ color: 'var(--gold-vibrant)', fontSize: '1.5rem' }}>•</span>
                                    {sol}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* PROCESS */}
                    <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 120px' }}>
                        <h2 className="font-serif" style={{ fontSize: '2.8rem', marginBottom: '32px' }}>
                            {post.process.title}
                        </h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)', fontWeight: 300, marginBottom: '40px' }}>
                            {post.process.content}
                        </p>
                        <hr style={{ border: 'none', height: '1px', backgroundColor: 'rgba(0,0,0,0.1)', width: '200px', margin: '0 auto' }} />
                    </div>

                    {/* LEGAL DISCLAIMER */}
                    <div style={{
                        borderLeft: '4px solid var(--gold-warm)',
                        padding: '30px 40px',
                        backgroundColor: '#fdfcf9',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        opacity: 0.8,
                        marginBottom: '80px',
                        fontStyle: 'italic'
                    }}>
                        <strong>⚠️ Mention légale :</strong> La naturopathie ne remplace pas un suivi médical. Elle s’inscrit en complément d’un accompagnement par votre médecin.
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section style={{
                padding: '160px 0',
                backgroundColor: 'var(--sauge-dark)',
                color: 'white',
                textAlign: 'center',
                borderRadius: '150px 150px 0 0'
            }}>
                <div className="container">
                    <h2 className="font-serif" style={{ fontSize: '4rem', marginBottom: '32px' }}>
                        Prendre rendez-vous avec votre <span className="text-gold">naturopathe</span> à Miramas
                    </h2>
                    <p style={{ fontSize: '1.4rem', maxWidth: '750px', margin: '0 auto 60px', opacity: 0.9, fontWeight: 300 }}>
                        {post.cta} – Disponible au cabinet ou en visioconférence.
                    </p>
                    <Link href="/contact" className="btn-premium" style={{
                        padding: '24px 80px',
                        fontSize: '1.2rem',
                        backgroundColor: 'var(--white)',
                        color: 'var(--sauge-dark)',
                        borderRadius: '100px'
                    }}>
                        RESERVER MA CONSULTATION
                    </Link>
                </div>
            </section>
        </div>
    );
}
