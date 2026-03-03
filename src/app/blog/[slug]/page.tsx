import { BLOG_POSTS } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);

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
                        CONSEILS & ACCOMPAGNEMENT
                    </span>
                    <h1 className="font-serif typewriter" style={{ fontSize: '5rem', marginBottom: '40px' }}>
                        {post.title}
                    </h1>
                    <p style={{
                        fontSize: '1.4rem',
                        color: 'var(--text-muted)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.8,
                        fontWeight: 300
                    }}>
                        {post.intro}
                    </p>
                </div>
            </section>

            {/* ARTICLE CONTENT (ZIG-ZAG) */}
            <section style={{ padding: '160px 0', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    {post.sections.map((section, idx) => (
                        <div key={idx} style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '120px',
                            alignItems: 'center',
                            marginBottom: '160px',
                            direction: idx % 2 === 0 ? 'ltr' : 'rtl'
                        }}>
                            <div style={{ direction: 'ltr' }}>
                                <h2 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '40px' }}>{section.title}</h2>
                                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                                    {section.content}
                                </p>
                            </div>
                            <div style={{ borderRadius: '60px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                                <img src={`/images/${section.img}`} alt={section.title} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONVERSION PANEL */}
            <section style={{
                padding: '160px 0',
                backgroundColor: 'var(--bg-secondary)',
                textAlign: 'center',
                borderRadius: '150px 150px 0 0'
            }}>
                <div className="container">
                    <h2 className="font-serif typewriter" style={{ fontSize: '4rem', marginBottom: '48px' }}>
                        Agir <span className="text-gold italic">Aujourd'hui</span>
                    </h2>
                    <p style={{
                        fontSize: '1.4rem',
                        color: 'var(--text-muted)',
                        maxWidth: '700px',
                        margin: '0 auto 64px',
                        lineHeight: 1.8,
                        fontWeight: 300
                    }}>
                        {post.conclusion}
                    </p>
                    <Link href="/contact" className="btn-premium" style={{
                        padding: '24px 80px',
                        fontSize: '1.2rem',
                        backgroundColor: 'var(--gold-warm)',
                        color: 'var(--text-main)',
                        borderRadius: '100px'
                    }}>
                        PRENDRE RENDEZ-VOUS
                    </Link>
                </div>
            </section>
        </div>
    );
}
