'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: '280px', backgroundColor: 'var(--sauge-dark)', color: 'white', padding: '30px 20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 className="font-serif" style={{ fontSize: '1.8rem', margin: 0, color: 'var(--gold-vibrant)' }}>Inessence</h2>
          <p style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '5px' }}>Espace d'Administration</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <Link href="/admin" style={{ padding: '12px 16px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px' }}>
             Articles de Blog
          </Link>
          <Link href="/" target="_blank" style={{ padding: '12px 16px', borderRadius: '8px', fontSize: '0.95rem', opacity: 0.7 }}>
            ↗ Voir le site en ligne
          </Link>
        </nav>

        <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
          <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '10px' }}>Connectée en tant que : Inessence</div>
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#fca5a5', cursor: 'pointer', fontSize: '0.9rem', padding: 0, fontWeight: 500 }}>
            Déconnexion
          </button>
        </div>
      </aside>
      
      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
