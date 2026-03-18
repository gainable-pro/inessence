import PostEditor from '@/components/admin/PostEditor'
import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'

export const revalidate = 0

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !post) {
    notFound()
  }

  return (
    <div>
      <PostEditor initialPost={post} />
    </div>
  )
}
