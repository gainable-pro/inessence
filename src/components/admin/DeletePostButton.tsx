'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function DeletePostButton({ postId, postTitle }: { postId: string, postTitle: string }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  const handleDelete = async () => {
    if (confirm(`Êtes-vous sûr de vouloir supprimer DÉFINITIVEMENT l'article "${postTitle}" ? Cette action est irréversible.`)) {
      setIsDeleting(true)
      const { error } = await supabase.from('posts').delete().eq('id', postId)
      
      if (error) {
        alert('Erreur lors de la suppression : ' + error.message)
        setIsDeleting(false)
      } else {
        router.refresh()
      }
    }
  }

  return (
    <button 
      onClick={handleDelete} 
      disabled={isDeleting}
      title="Supprimer définitivement cet article"
      style={{ 
        color: '#dc2626', 
        fontWeight: 600, 
        fontSize: '0.9rem', 
        border: '1px solid #fca5a5', 
        backgroundColor: '#fef2f2',
        padding: '6px 16px', 
        borderRadius: '6px',
        cursor: isDeleting ? 'not-allowed' : 'pointer',
        opacity: isDeleting ? 0.6 : 1,
      }}
    >
      {isDeleting ? '...' : 'Supprimer'}
    </button>
  )
}
