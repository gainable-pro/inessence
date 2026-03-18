'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

type Block = {
  id: string
  type: 'text' | 'image'
  title?: string
  content?: string
  url?: string
  caption?: string
}

export default function PostEditor({ initialPost }: { initialPost?: any }) {
  const [title, setTitle] = useState(initialPost?.title || '')
  const [slug, setSlug] = useState(initialPost?.slug || '')
  const [metaTitle, setMetaTitle] = useState(initialPost?.meta_title || '')
  const [metaDesc, setMetaDesc] = useState(initialPost?.meta_desc || '')
  const [h1, setH1] = useState(initialPost?.h1 || '')
  const [cityTag, setCityTag] = useState(initialPost?.city_tag || '')
  const [blocks, setBlocks] = useState<Block[]>(initialPost?.content_blocks || [])
  const [isPublished, setIsPublished] = useState(initialPost?.is_published || false)

  const [loading, setLoading] = useState(false)
  const [uploadingImage, setUploadingImage] = useState<string | null>(null)
  
  const supabase = createClient()
  const router = useRouter()

  // SEO Score Calculation
  const getSeoScore = () => {
    let score = 0
    if (title.length > 5) score += 10
    if (metaTitle.length > 30 && metaTitle.length < 65) score += 20
    if (metaDesc.length > 120 && metaDesc.length < 160) score += 20
    if (h1.length > 5) score += 20
    if (cityTag.length > 2) score += 10
    
    const textBlocks = blocks.filter(b => b.type === 'text' && b.content)
    const wordCount = textBlocks.reduce((acc, curr) => acc + (curr.content?.split(' ').length || 0), 0)
    if (wordCount > 300) score += 20

    return score
  }

  const seoScore = getSeoScore()
  const seoColor = seoScore > 80 ? '#22c55e' : seoScore > 50 ? '#f59e0b' : '#ef4444'

  const generateSlug = (text: string) => {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
  }

  const addBlock = (type: 'text' | 'image') => {
    setBlocks([...blocks, { id: crypto.randomUUID(), type, content: '', url: '', caption: '' }])
  }

  const updateBlock = (id: string, updates: Partial<Block>) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, ...updates } : b))
  }

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id))
  }

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return
    if (direction === 'down' && index === blocks.length - 1) return
    const newBlocks = [...blocks]
    const destIndex = direction === 'up' ? index - 1 : index + 1
    const temp = newBlocks[index]
    newBlocks[index] = newBlocks[destIndex]
    newBlocks[destIndex] = temp
    setBlocks(newBlocks)
  }

  const handleImageUpload = async (id: string, file: File) => {
    setUploadingImage(id)
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `uploads/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage.from('blog-images').getPublicUrl(filePath)
      updateBlock(id, { url: data.publicUrl })
    } catch (error) {
      alert('Erreur lors du téléchargement de l\'image.')
    } finally {
      setUploadingImage(null)
    }
  }

  const handleSave = async (publish: boolean) => {
    if (!title || !slug) return alert('Le titre et le permalien (slug) sont obligatoires.')
    setLoading(true)

    const postData = {
      title,
      slug,
      meta_title: metaTitle,
      meta_desc: metaDesc,
      h1,
      city_tag: cityTag,
      content_blocks: blocks,
      is_published: publish
    }

    let response
    
    if (initialPost?.id) {
      response = await supabase.from('posts').update(postData).eq('id', initialPost.id)
    } else {
      const { data: userData } = await supabase.auth.getUser()
      response = await supabase.from('posts').insert([{ ...postData, author_id: userData.user?.id }])
    }

    if (response.error) {
      alert('Erreur lors de la sauvegarde : ' + response.error.message)
    } else {
      router.push('/admin')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', margin: 0, color: 'var(--sauge-dark)', fontFamily: 'var(--font-playfair)' }}>
          {initialPost ? 'Éditer l\'article' : 'Rédiger un nouvel article'}
        </h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => handleSave(false)} disabled={loading} style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', fontWeight: 600, cursor: 'pointer' }}>
            Sauvegarder Brouillon
          </button>
          <button onClick={() => handleSave(true)} disabled={loading} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: 'var(--gold-vibrant)', color: 'white', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
            {loading ? '...' : 'Publier l\'article'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* COLONNE GAUCHE : CONTENU PRINCIPAL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-soft)' }}>
             <h2 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-main)' }}>Informations Générales</h2>
             
             <div style={{ marginBottom: '15px' }}>
               <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Titre de l'article *</label>
               <input 
                 value={title} 
                 onChange={e => { setTitle(e.target.value); setSlug(generateSlug(e.target.value)); }}
                 style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1.1rem', backgroundColor: '#f8fafc', outline: 'none' }}
                 placeholder="Ex: Les bienfaits de la réflexologie..."
               />
             </div>

             <div>
               <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Lien permanent (Slug) *</label>
               <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                 <span style={{ padding: '11px 15px', borderRight: '1px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#64748b', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                   /articles/
                 </span>
                 <input 
                   value={slug} 
                   onChange={e => setSlug(generateSlug(e.target.value))}
                   style={{ width: '100%', padding: '11px', border: 'none', fontSize: '0.95rem', color: 'var(--text-main)', outline: 'none', backgroundColor: 'transparent' }}
                   placeholder="titre-de-larticle"
                 />
               </div>
             </div>
          </div>

          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-soft)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
               <h2 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-main)' }}>Contenu de l'article (Zig-Zag)</h2>
             </div>
             
             <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
               Ajoutez des blocs de texte et d'images. Sur le site, ils s'alterneront automatiquement (image à gauche, texte à droite, puis l'inverse) pour créer un effet visuel dynamique.
             </p>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
               {blocks.map((block, index) => (
                 <div key={block.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', position: 'relative', backgroundColor: '#f8fafc' }}>
                   
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                     <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: '#64748b' }}>
                       Bloc {index + 1} : {block.type === 'text' ? '📝 Texte' : '🖼️ Image'}
                     </span>
                     <div style={{ display: 'flex', gap: '10px' }}>
                       <button onClick={() => moveBlock(index, 'up')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>↑</button>
                       <button onClick={() => moveBlock(index, 'down')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>↓</button>
                       <button onClick={() => removeBlock(block.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', fontSize: '1rem' }}>✖</button>
                     </div>
                   </div>

                    {block.type === 'text' ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input 
                          value={block.title || ''}
                          onChange={e => updateBlock(block.id, { title: e.target.value })}
                          placeholder="Titre du bloc (Optionnel, ex: Les origines de la pratique...)"
                          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1.05rem', fontWeight: 600, outline: 'none', backgroundColor: 'white' }}
                        />
                        <textarea 
                          value={block.content || ''}
                          onChange={e => updateBlock(block.id, { content: e.target.value })}
                          rows={6}
                          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', resize: 'vertical', outline: 'none' }}
                          placeholder="Écrivez le paragraphe ici..."
                        />
                      </div>
                    ) : (
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                       {block.url ? (
                         <div style={{ position: 'relative' }}>
                           <img src={block.url} alt="Aperçu" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                           <button onClick={() => updateBlock(block.id, { url: '' })} style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.7)', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '6px', cursor: 'pointer' }}>Changer</button>
                         </div>
                       ) : (
                         <div style={{ border: '2px dashed #cbd5e1', padding: '40px', textAlign: 'center', borderRadius: '8px', backgroundColor: 'white' }}>
                           {uploadingImage === block.id ? 'Téléchargement...' : (
                             <>
                               <label style={{ cursor: 'pointer', color: 'var(--gold-vibrant)', fontWeight: 600 }}>
                                 Cliquez pour sélectionner une image
                                 <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => e.target.files && handleImageUpload(block.id, e.target.files[0])} />
                               </label>
                             </>
                           )}
                         </div>
                       )}
                       <input 
                         value={block.caption || ''}
                         onChange={e => updateBlock(block.id, { caption: e.target.value })}
                         placeholder="Légende SEO de l'image (optionnelle)"
                         style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', outline: 'none' }}
                       />
                     </div>
                   )}
                 </div>
               ))}
             </div>

             <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
               <button onClick={() => addBlock('text')} style={{ padding: '10px 20px', backgroundColor: '#e2e8f0', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600, border: 'none', cursor: 'pointer', color: '#475569' }}>+ Ajouter du Texte</button>
               <button onClick={() => addBlock('image')} style={{ padding: '10px 20px', backgroundColor: '#e2e8f0', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600, border: 'none', cursor: 'pointer', color: '#475569' }}>+ Ajouter une Image</button>
             </div>
          </div>
        </div>

        {/* COLONNE DROITE : SEO & PARAMETRES */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '16px', boxShadow: 'var(--shadow-soft)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)', display: 'flex', justifyContent: 'space-between' }}>
              Score SEO 
              <span style={{ backgroundColor: seoColor, color: 'white', padding: '2px 8px', borderRadius: '100px', fontSize: '0.8rem' }}>{seoScore} / 100</span>
            </h3>
            <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', marginBottom: '20px' }}>
               <div style={{ width: `${Math.min(100, seoScore)}%`, height: '100%', backgroundColor: seoColor, transition: 'all 0.3s' }} />
            </div>
            
            <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px' }}>
              <li style={{ color: title.length > 5 ? '#22c55e' : '#64748b' }}>Titre assez long</li>
              <li style={{ color: (metaTitle.length > 30 && metaTitle.length < 65) ? '#22c55e' : '#64748b' }}>Meta Title optimisé (30-65 car.)</li>
              <li style={{ color: (metaDesc.length > 120 && metaDesc.length < 160) ? '#22c55e' : '#64748b' }}>Meta Desc courte (120-160 car.)</li>
              <li style={{ color: h1.length > 5 ? '#22c55e' : '#64748b' }}>Balise H1 primaire renseignée</li>
              <li style={{ color: cityTag.length > 2 ? '#22c55e' : '#64748b' }}>Ciblage Local (Ville cochée)</li>
              <li style={{ color: seoScore >= 100 ? '#22c55e' : '#64748b' }}>Plus de 300 mots (Texte)</li>
            </ul>
          </div>

          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '16px', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-main)' }}>Paramètres de Publication</h3>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Ville Cible (SEO Local)</label>
              <input 
                 value={cityTag} 
                 onChange={e => setCityTag(e.target.value)}
                 style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', outline: 'none' }}
                 placeholder="Ex: Miramas"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Titre Principal (Balise H1)</label>
              <input 
                 value={h1} 
                 onChange={e => setH1(e.target.value)}
                 style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', display: 'flex', justifyContent: 'space-between' }}>
                Meta Title
                <span style={{ fontWeight: 400, color: metaTitle.length > 65 ? '#ef4444' : '#64748b' }}>{metaTitle.length}/60</span>
              </label>
              <input 
                 value={metaTitle} 
                 onChange={e => setMetaTitle(e.target.value)}
                 style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', outline: 'none' }}
                 placeholder="Titre court affiché sur Google"
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', display: 'flex', justifyContent: 'space-between' }}>
                Meta Description
                <span style={{ fontWeight: 400, color: metaDesc.length > 160 ? '#ef4444' : '#64748b' }}>{metaDesc.length}/155</span>
              </label>
              <textarea 
                 value={metaDesc} 
                 onChange={e => setMetaDesc(e.target.value)}
                 rows={4}
                 style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', resize: 'vertical', outline: 'none' }}
                 placeholder="Résumé incitatif affiché sur Google..."
              />
            </div>

          </div>

          {/* ASSISTANT IA PROMPT */}
          <div style={{ backgroundColor: 'var(--sable-warm)', padding: '25px', borderRadius: '16px', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', gap: '15px', border: '1px solid var(--gold-warm)' }}>
            <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--gold-vibrant)' }}>✨ Assistant IA Seo</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
              Copiez ce prompt expert dans ChatGPT pour générer un contenu sur-mesure pour votre structure Zig-Zag.
            </p>
            <textarea 
               readOnly
               value={`Agis comme un expert SEO et naturopathe. Rédige un article complet sur le sujet : "${title || '...'}"\n\nL'article doit être structuré pour un format 'Zig-Zag' (alternance de 4 à 6 blocs distincts).\n\nFournis-moi exactement :\n1. Une balise Meta Title optimisée (30 à 65 caractères).\n2. Une Meta Description attractive (120 à 160 caractères).\n3. Un titre principal H1 accrocheur.\n4. Pour CHACUN des blocs, fournis un Titre structurant et un paragraphe de texte ciblé de 100 à 150 mots.\n5. Indique clairement à quel moment je devrais insérer une image d'illustration.`}
               rows={8}
               style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.8rem', resize: 'vertical', outline: 'none', backgroundColor: 'white', color: '#475569', lineHeight: 1.6 }}
            />
            <button 
              onClick={(e) => {
                e.preventDefault();
                const text = `Agis comme un expert SEO et naturopathe. Rédige un article complet sur le sujet : "${title || '...'}"\n\nL'article doit être structuré pour un format 'Zig-Zag' (alternance de 4 à 6 blocs distincts).\n\nFournis-moi exactement :\n1. Une balise Meta Title optimisée (30 à 65 caractères).\n2. Une Meta Description attractive (120 à 160 caractères).\n3. Un titre principal H1 accrocheur.\n4. Pour CHACUN des blocs, fournis un Titre structurant et un paragraphe de texte ciblé de 100 à 150 mots.\n5. Indique clairement à quel moment je devrais insérer une image d'illustration.`;
                navigator.clipboard.writeText(text);
                alert('Prompt expert copié ! Collez-le dans ChatGPT.');
              }}
              style={{ padding: '12px', backgroundColor: 'var(--gold-warm)', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
            >
              📋 Copier le Prompt
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}
