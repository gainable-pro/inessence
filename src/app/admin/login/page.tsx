import { login } from './actions'
import Link from 'next/link'

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-secondary)', padding: '20px' }}>
      <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-soft)', width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src="/images/logo-inessence.png" alt="Inessence Logo" style={{ height: '60px', margin: '0 auto 20px', mixBlendMode: 'multiply' }} />
          <h1 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--sauge-dark)' }}>Administration</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>Gérez vos articles de blog facilement</p>
        </div>

        {searchParams?.error && (
          <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '20px', textAlign: 'center' }}>
            Identifiants incorrects. Veuillez réessayer.
          </div>
        )}

        <form action={login} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Adresse Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              placeholder="votre.email@exemple.fr"
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '1rem', outline: 'none' }}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Mot de passe</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              placeholder="••••••••"
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '1rem', outline: 'none' }}
            />
          </div>
          <button type="submit" className="btn-premium" style={{ width: '100%', backgroundColor: 'var(--sauge-dark)', color: 'white', padding: '14px', borderRadius: '8px', fontSize: '1rem', marginTop: '10px' }}>
            Se connecter
          </button>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'underline' }}>
            ← Retourner sur le site
          </Link>
        </div>
      </div>
    </div>
  )
}
