"use client";

import React, { useState } from "react";
import Link from "next/link";

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        firstname: '',
        email: '',
        phone: '',
        city: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', firstname: '', email: '', phone: '', city: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="container animate-fade-in" style={{ maxWidth: '800px', padding: '120px 24px' }}>
            <h1 className="font-serif typewriter" style={{ fontSize: '3.5rem', marginBottom: '32px', textAlign: 'center' }}>Prendre rendez-vous</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '32px' }}>
                Remplissez le formulaire ci-dessous pour une demande de bilan de vitalité ou pour toute question. <br />
                Vous pouvez aussi me joindre directement au <a href="tel:+33761211132" style={{ color: 'var(--gold-warm)', fontWeight: 700 }}>07 61 21 11 32</a>.
            </p>

            {/* MEDOUCINE QUICK BOOKING BANNER */}
            <div style={{
                backgroundColor: 'var(--sable-warm)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                padding: '28px 32px',
                borderRadius: '24px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
                boxShadow: 'var(--shadow-warm)'
            }}>
                <div style={{ flex: '1 1 300px' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gold-warm)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        Prise de rendez-vous instantanée
                    </span>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                        Réservez en ligne sur Médoucine
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
                        Choisissez le soin de votre choix et sélectionnez votre créneau disponible 24h/24.
                    </p>
                </div>
                <a
                    href="https://www.medoucine.com/consultation/miramas/ines-fernandez/23273?addressId=86159&utm_source=google&utm_medium=organic&utm_campaign=gbp-partoo&utm_content=reserver-en-ligne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium"
                    style={{
                        padding: '14px 30px',
                        borderRadius: '100px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        whiteSpace: 'nowrap'
                    }}
                >
                    <span>Prendre RDV en ligne</span>
                    <span>→</span>
                </a>
            </div>

            {status === 'success' ? (
                <div style={{ padding: '40px', backgroundColor: 'var(--white)', borderRadius: '24px', textAlign: 'center', border: '2px solid var(--accent-sauge)' }}>
                    <h2 style={{ color: 'var(--accent-sauge)', marginBottom: '16px' }}>Message bien reçu !</h2>
                    <p style={{ marginBottom: '20px' }}>Nous avons bien reçu votre demande et je reviendrai vers vous dans les plus brefs délais.</p>
                    <div style={{ padding: '20px', background: 'var(--sable-warm)', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                        <p style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Une urgence ?</p>
                        <p style={{ fontSize: '0.9rem' }}>Pour être rappelé immédiatement, composez le :</p>
                        <a href="tel:+33761211132" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--gold-warm)', display: 'block', marginTop: '8px' }}>07 61 21 11 32</a>
                    </div>
                    <button onClick={() => setStatus('idle')} className="btn-premium" style={{ marginTop: '24px' }}>ENVOYER UN AUTRE MESSAGE</button>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-xl shadow-soft border border-slate-100"
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>NOM</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                style={{ padding: '12px', border: '1px solid #eee', borderRadius: '4px', background: 'var(--bg-secondary)' }}
                                required
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>PRÉNOM</label>
                            <input
                                type="text"
                                value={formData.firstname}
                                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                style={{ padding: '12px', border: '1px solid #eee', borderRadius: '4px', background: 'var(--bg-secondary)' }}
                                required
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>EMAIL</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                style={{ padding: '12px', border: '1px solid #eee', borderRadius: '4px', background: 'var(--bg-secondary)' }}
                                required
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>TÉLÉPHONE</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                style={{ padding: '12px', border: '1px solid #eee', borderRadius: '4px', background: 'var(--bg-secondary)' }}
                                required
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>VILLE / SECTEUR</label>
                        <input
                            type="text"
                            placeholder="Ex: Miramas, Salon..."
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            style={{ padding: '12px', border: '1px solid #eee', borderRadius: '4px', background: 'var(--bg-secondary)' }}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>VOTRE DEMANDE</label>
                        <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            style={{ padding: '12px', border: '1px solid #eee', borderRadius: '4px', background: 'var(--bg-secondary)', resize: 'none' }}
                            required
                        ></textarea>
                    </div>

                    {/* RGPD Checkbox */}
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginTop: '10px' }}>
                        <input type="checkbox" id="rgpd" style={{ marginTop: '4px' }} required />
                        <label htmlFor="rgpd" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                            En soumettant ce formulaire, j&apos;accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.
                            Consultez notre <Link href="/confidentialite" style={{ textDecoration: 'underline', color: 'var(--accent-sauge)' }}>Politique de confidentialité</Link>.
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-premium"
                        style={{ width: '100%', justifyContent: 'center', marginTop: '10px', opacity: status === 'submitting' ? 0.7 : 1 }}
                    >
                        {status === 'submitting' ? 'ENVOI EN COURS...' : 'ENVOYER MA DEMANDE'}
                    </button>

                    {status === 'error' && (
                        <p style={{ color: 'red', textAlign: 'center', fontSize: '0.8rem' }}>
                            Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.
                        </p>
                    )}

                    <p style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', textAlign: 'center', marginTop: '10px' }}>
                        * La naturopathie ne remplace pas un avis médical.
                    </p>
                </form>
            )}

            <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div style={{ padding: '36px 30px', background: 'var(--sable-warm)', borderRadius: '32px', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '2rem' }}>Le Cabinet</h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 600, margin: '0 0 4px' }}>6 rue pierre tristani</p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', margin: '0 0 16px' }}>13140 Miramas</p>
                    
                    <div style={{ background: 'var(--white)', padding: '16px', borderRadius: '16px', textAlign: 'left', fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '16px', border: '1px solid rgba(0,0,0,0.04)' }}>
                        <p style={{ fontWeight: 600, color: 'var(--sauge-dark)', marginBottom: '6px' }}>🕒 Horaires d&apos;ouverture :</p>
                        <p style={{ margin: '2px 0' }}>• Lun, Mar & Jeu : <strong>9h00 – 16h00</strong></p>
                        <p style={{ margin: '2px 0' }}>• Vendredi : <strong>9h00 – 19h00</strong></p>
                        <p style={{ margin: '6px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                            Fermé le mercredi, le samedi, le dimanche et les jours fériés.
                        </p>
                    </div>

                    <a
                        href="https://www.medoucine.com/consultation/miramas/ines-fernandez/23273?addressId=86159&utm_source=google&utm_medium=organic&utm_campaign=gbp-partoo&utm_content=reserver-en-ligne"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 700, textDecoration: 'underline' }}
                    >
                        Réserver un créneau au cabinet →
                    </a>
                </div>
                <div style={{ padding: '40px', background: 'var(--bg-secondary)', borderRadius: '32px', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '20px', fontSize: '2rem' }}>Consultation Visio</h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 600 }}>Partout en France</p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Via Zoom ou WhatsApp</p>
                    <div style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.6 }}>
                        La même qualité d&apos;écoute, depuis votre foyer.
                    </div>
                </div>
            </div>
        </div>
    );
}
