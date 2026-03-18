import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const supabase = await createClient();
    const { data: post } = await supabase.from('posts').select('*').eq('slug', params.slug).single();
    if (!post) return { title: 'Article non trouvé' };

    const coverBlock = post.content_blocks?.find((b: any) => b.type === 'image' && b.url);
    
    return {
        title: post.meta_title || post.title,
        description: post.meta_desc,
        openGraph: {
            title: post.meta_title || post.title,
            description: post.meta_desc,
            images: coverBlock ? [coverBlock.url] : [],
        },
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const supabase = await createClient();
    
    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', params.slug)
        .eq('is_published', true)
        .single();

    if (error || !post) {
        notFound();
    }

    // Isoler les blocs de textes et d'images
    const blocks = post.content_blocks || [];
    
    // Le premier bloc contenant du texte servira d'introduction sous le H1 (s'il existe)
    // Nous laisserons l'éditeur choisir l'ordre. On parcourt simplement les blocs.
    
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
                        Naturopathie {post.city_tag ? `à ${post.city_tag}` : ''}
                    </span>
                    <h1 className="font-serif typewriter" style={{ fontSize: '4.5rem', marginBottom: '40px', lineHeight: 1.1 }}>
                        {post.h1 || post.title}
                    </h1>
                    {post.meta_desc && (
                        <p style={{
                            fontSize: '1.4rem',
                            color: 'var(--text-muted)',
                            maxWidth: '900px',
                            margin: '0 auto',
                            lineHeight: 1.8,
                            fontWeight: 300
                        }}>
                            {post.meta_desc}
                        </p>
                    )}
                </div>
            </section>

            {/* DYNAMIC ZIG ZAG CONTENT */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '140px' }}>
                        {blocks.map((block: any, index: number) => {
                            if (block.type === 'image') {
                                return (
                                    <div key={block.id || index} style={{ borderRadius: '50px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                                        {block.url ? (
                                            <img src={block.url} alt={block.caption || post.title} style={{ width: '100%', maxHeight: '600px', objectFit: 'cover', display: 'block' }} />
                                        ) : null}
                                        {block.caption && (
                                            <div style={{ padding: '15px', textAlign: 'center', backgroundColor: '#fdfcf9', fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                                {block.caption}
                                            </div>
                                        )}
                                    </div>
                                );
                            } else if (block.type === 'text') {
                                // Rendu du texte en HTML de manière sécurisée ou simple P
                                return (
                                    <div key={block.id || index} style={{ width: '100%', maxWidth: '850px', margin: '0 auto' }}>
                                        <div 
                                            style={{ fontSize: '1.25rem', lineHeight: 1.9, color: 'var(--text-main)', fontWeight: 300, whiteSpace: 'pre-line' }}
                                            dangerouslySetInnerHTML={{ __html: block.content || '' }}
                                        />
                                    </div>
                                );
                            }
                            return null;
                        })}
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
                        Prendre rendez-vous avec votre <span className="text-gold">naturopathe</span> {post.city_tag ? `à ${post.city_tag}` : ''}
                    </h2>
                    <p style={{ fontSize: '1.4rem', maxWidth: '750px', margin: '0 auto 60px', opacity: 0.9, fontWeight: 300 }}>
                        Optez pour un accompagnement holistique – Disponible au cabinet ou en visioconférence.
                    </p>
                    <Link href="/contact" className="btn-premium" style={{
                        padding: '24px 80px',
                        fontSize: '1.2rem',
                        backgroundColor: 'var(--white)',
                        color: 'var(--sauge-dark)',
                        borderRadius: '100px'
                    }}>
                        RÉSERVER MA CONSULTATION
                    </Link>
                </div>
            </section>
        </div>
    );
}
