'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError('Identifiants incorrects. Veuillez vérifier votre adresse email et votre mot de passe.')
        setLoading(false)
      } else {
        // Redirection en cas de succès
        router.push('/admin')
        router.refresh()
      }
    } catch (err) {
      setError('Une erreur réseau est survenue.')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {error && (
        <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', textAlign: 'center' }}>
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Adresse Email</label>
        <input 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          required 
          placeholder="••••••••"
          style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '1rem', outline: 'none' }}
        />
      </div>
      <button disabled={loading} type="submit" className="btn-premium" style={{ width: '100%', backgroundColor: 'var(--sauge-dark)', color: 'white', padding: '14px', borderRadius: '8px', fontSize: '1rem', marginTop: '10px', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
        {loading ? 'Connexion en cours...' : 'Se connecter'}
      </button>
    </form>
  )
}
