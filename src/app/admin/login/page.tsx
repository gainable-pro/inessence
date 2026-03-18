import Link from 'next/link'
import LoginForm from '@/components/admin/LoginForm'

export default async function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-secondary)', padding: '20px' }}>
      <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-soft)', width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src="/images/logo-inessence.png" alt="Inessence Logo" style={{ height: '60px', margin: '0 auto 20px', mixBlendMode: 'multiply' }} />
          <h1 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--sauge-dark)' }}>Administration</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>Gérez vos articles de blog facilement</p>
        </div>

        <LoginForm />

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'underline' }}>
            ← Retourner sur le site
          </Link>
        </div>
      </div>
    </div>
  )
}
