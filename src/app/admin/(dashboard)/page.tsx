import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import DeletePostButton from '@/components/admin/DeletePostButton'

export const revalidate = 0 // Pas de cache dynamique pour l'admin

export default async function AdminDashboardPage() {
  const supabase = await createClient()
  
  // Récupérer les articles triés par date
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, slug, is_published, created_at, city_tag')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--text-main)', margin: 0 }}>Vos Articles</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Gérez les publications de votre blog (création, modification, brouillons).</p>
        </div>
        <Link href="/admin/posts/new" className="btn-premium" style={{ backgroundColor: 'var(--gold-warm)', color: 'var(--text-main)', padding: '12px 24px', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 600 }}>
          + Nouvel Article
        </Link>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: 'var(--shadow-soft)', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
        {error ? (
          <div style={{ padding: '30px', color: '#dc2626' }}>Erreur de chargement des articles.</div>
        ) : !posts || posts.length === 0 ? (
          <div style={{ padding: '60px 40px', textAlign: 'center', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📝</div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '8px' }}>Aucun article pour le moment</h3>
            <p style={{ marginBottom: '24px' }}>Vous n'avez pas encore rédigé d'articles sur votre blog.</p>
            <Link href="/admin/posts/new" style={{ color: 'var(--gold-vibrant)', fontWeight: 600, textDecoration: 'underline' }}>
              Commencer à écrire
            </Link>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Titre de l'article</th>
                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Date de création</th>
                <th style={{ padding: '16px 24px', fontWeight: 600 }}>Statut</th>
                <th style={{ padding: '16px 24px', fontWeight: 600, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} style={{ borderBottom: '1px solid #f3f4f6', backgroundColor: 'white' }}>
                  <td style={{ padding: '20px 24px', fontWeight: 500, color: 'var(--text-main)' }}>
                    {post.title}
                    {post.city_tag && <span style={{ marginLeft: '10px', fontSize: '0.75rem', backgroundColor: '#f1f5f9', color: '#64748b', padding: '4px 8px', borderRadius: '100px' }}>{post.city_tag}</span>}
                  </td>
                  <td style={{ padding: '20px 24px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {new Date(post.created_at).toLocaleDateString('fr-FR')}
                  </td>
                  <td style={{ padding: '20px 24px' }}>
                    {post.is_published ? (
                      <span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>En ligne</span>
                    ) : (
                      <span style={{ backgroundColor: '#fef3c7', color: '#92400e', padding: '6px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>Brouillon</span>
                    )}
                  </td>
                  <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                      <Link href={`/admin/posts/${post.id}`} style={{ color: 'var(--sauge-dark)', fontWeight: 600, fontSize: '0.9rem', border: '1px solid var(--sauge-dark)', padding: '6px 16px', borderRadius: '6px' }}>
                        Éditer
                      </Link>
                      {post.is_published && (
                        <a href={`/articles/${post.slug}`} target="_blank" rel="noopener noreferrer" style={{ color: 'white', backgroundColor: 'var(--sauge-dark)', fontWeight: 600, fontSize: '0.9rem', padding: '6px 16px', borderRadius: '6px', textDecoration: 'none' }}>
                          Voir
                        </a>
                      )}
                      <DeletePostButton postId={post.id} postTitle={post.title} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
