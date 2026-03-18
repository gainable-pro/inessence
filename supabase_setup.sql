-- ==============================================
-- INESSENCE CMS : SUPABASE SCHÉMA INITIAL
-- À copier-coller entièrement dans l'éditeur SQL de Supabase (SQL Editor)
-- ==============================================

-- 1. Création de la table des Articles de Blog (posts)
CREATE TABLE IF NOT EXISTS public.posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content_blocks jsonb DEFAULT '[]'::jsonb NOT NULL,
  meta_title text,
  meta_desc text,
  h1 text,
  city_tag text,
  is_published boolean DEFAULT false NOT NULL,
  author_id uuid REFERENCES auth.users(id) ON DELETE CASCADE
);

-- 2. Configuration de la sécurité (Row Level Security - RLS)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Les visiteurs peuvent lire (SELECT) uniquement les articles publiés
CREATE POLICY "Public profiles are viewable by everyone." 
ON public.posts FOR SELECT 
USING (is_published = true);

-- L'administratrice (connectée) a tous les droits (UPDATE, DELETE, INSERT, SELECT tout)
CREATE POLICY "Users can fully manage all posts if authenticated." 
ON public.posts FOR ALL 
USING (auth.role() = 'authenticated');

-- 3. Configuration du Stockage (Storage Bucket) pour les images du blog
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Les visiteurs peuvent télécharger/voir les images
CREATE POLICY "Public Read Access" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'blog-images');

-- L'administratrice peut ajouter/modifier/supprimer des images
CREATE POLICY "Authenticated users can manage objects" 
ON storage.objects FOR ALL 
USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- ==============================================
-- FIN DU SCRIPT
-- ==============================================
