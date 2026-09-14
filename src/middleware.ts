import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  // Seules les routes d'administration nécessitent la vérification de session Supabase.
  // Éviter d'appeler Supabase sur les pages publiques pour éliminer le délai d'expiration Vercel (504 MIDDLEWARE_INVOCATION_TIMEOUT).
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return await updateSession(request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
