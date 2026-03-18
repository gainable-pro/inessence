import { resend } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, firstname, email, phone, city, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Inessence <onboarding@resend.dev>',
            to: ['inessence.naturopathe@gmail.com'],
            subject: `Nouveau message Contact Inessence - ${firstname} ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #d4af37;">Nouveau message de contact</h2>
                    <p><strong>Nom :</strong> ${firstname} ${name}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Téléphone :</strong> ${phone}</p>
                    <p><strong>Ville / Secteur :</strong> ${city}</p>
                    <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
                        <p><strong>Message :</strong></p>
                        <p>${message}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
