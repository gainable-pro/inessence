import { BLOG_POSTS } from "@/lib/data";
import Link from "next/link";

export default function BlogIndex() {
    return (
        <div className="animate-fade-in">
            {/* BLOG HERO */}
            <section style={{
                padding: '240px 0 100px',
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
                        Le <span className="text-sauge">Blog</span> Naturo
                    </h1>
                    <p style={{
                        fontSize: '1.4rem',
                        color: 'var(--text-muted)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.8,
                        fontWeight: 300
                    }}>
                        Découvrez nos dossiers complets pour comprendre vos symptômes et retrouver votre équilibre naturellement.
                    </p>
                </div>
            </section>

            {/* BLOG GRID */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '60px' }}>
                        {BLOG_POSTS.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                style={{
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderRadius: '40px',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    transition: 'all 0.4s ease',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
                                className="hover-lift"
                            >
                                <div style={{ height: '320px', overflow: 'hidden' }}>
                                    <img
                                        src={`/images/${post.img}`}
                                        alt={post.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        className="hover-scale"
                                    />
                                </div>
                                <div style={{ padding: '48px' }}>
                                    <span style={{ color: 'var(--gold-warm)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>
                                        {post.symptom.toUpperCase()}
                                    </span>
                                    <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '24px' }}>{post.title}</h2>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: '32px' }}>
                                        {post.intro.substring(0, 120)}...
                                    </p>
                                    <span style={{ fontWeight: 700, letterSpacing: '2px', fontSize: '0.9rem', color: 'var(--sauge-dark)' }}>DÉCOUVRIR L'ORIENTATION →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
