import Link from "next/link";
import { createClient } from '@/utils/supabase/server';

export const revalidate = 60 // Revalidation par minute pour de bonnes perfs SEO

export default async function BlogIndex() {
    const supabase = await createClient();
    
    // Récupérer tous les articles publiés
    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

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
                        Découvrez nos dossiers pour comprendre la cause de vos symptômes et retrouver votre équilibre naturellement.
                    </p>
                </div>
            </section>

            {/* BLOG GRID */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--white)', minHeight: '50vh' }}>
                <div className="container">
                    {!posts || posts.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                            Aucun article n'est actuellement publié. Prenez vite rendez-vous ou revenez plus tard !
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '60px' }}>
                            {posts.map((post: any) => {
                                // Trouver la première image parmi les blocs pour servir de couverture
                                const coverBlock = post.content_blocks?.find((b: any) => b.type === 'image' && b.url);
                                const coverUrl = coverBlock?.url || '/images/accompagnement-naturopathy.png';

                                return (
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
                                                src={coverUrl}
                                                alt={post.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                className="hover-scale"
                                            />
                                        </div>
                                        <div style={{ padding: '48px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                                <span style={{ color: 'var(--gold-warm)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px' }}>
                                                    SANTÉ NATURELLE
                                                </span>
                                                {post.city_tag && (
                                                    <span style={{ color: 'var(--sauge-dark)', fontWeight: 600, fontSize: '0.8rem', backgroundColor: 'rgba(74, 111, 100, 0.1)', padding: '4px 12px', borderRadius: '100px' }}>
                                                        {post.city_tag}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '24px' }}>{post.title}</h2>
                                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: '32px' }}>
                                                {post.meta_desc ? post.meta_desc.substring(0, 120) + '...' : 'Découvrez cet article de fond sur la naturopathie et les soins naturels...'}
                                            </p>
                                            <span style={{ fontWeight: 700, letterSpacing: '2px', fontSize: '0.9rem', color: 'var(--sauge-dark)' }}>LIRE L'ARTICLE →</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
