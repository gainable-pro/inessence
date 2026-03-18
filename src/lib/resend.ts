import { Resend } from 'resend';

// Initialisation robuste pour éviter les erreurs au build (SSG)
// Si la clé n'est pas présente, on utilise un stub
const apiKey = process.env.RESEND_API_KEY || 're_stub_for_build';

export const resend = new Resend(apiKey);
