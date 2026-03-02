import Link from "next/link";

export function Navbar() {
    return (
        <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                    <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                        {/* Fallback pattern if image is not loaded yet */}
                        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--gold-warm)', opacity: 0.1 }} />
                        <img
                            src="/images/logo-inessence.png"
                            alt="Logo INESSENCE"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    <span className="font-serif" style={{ fontSize: '1.4rem', letterSpacing: '2px', color: 'var(--text-main)' }}>
                        INESSENCE
                    </span>
                </Link>

                <nav style={{ display: 'flex', gap: '32px', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px', alignItems: 'center' }}>
                    <Link href="/" className="hover:text-sauge">ACCUEIL</Link>
                    <Link href="/consultations" className="hover:text-sauge">CONSULTATIONS</Link>
                    <Link href="/problematiques" className="hover:text-sauge">MOTIFS</Link>
                    <Link href="/techniques" className="hover:text-sauge">TECHNIQUES</Link>
                    <Link href="/ateliers" className="hover:text-sauge">ATELIERS</Link>
                    <Link href="/#villes" className="hover:text-sauge">ZONES</Link>
                    <Link href="/contact" className="btn-premium" style={{ padding: '10px 24px', marginLeft: '10px' }}>
                        FAIRE MA DEMANDE
                    </Link>
                </nav>
            </div>
        </header>
    );
}
