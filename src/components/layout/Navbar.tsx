import Link from "next/link";

export function Navbar() {
    return (
        <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', height: '100%', textDecoration: 'none' }}>
                    <div style={{ position: 'relative', width: '180px', height: '120px', display: 'flex', alignItems: 'center' }}>
                        <img
                            src="/images/logo-inessence.png"
                            alt="Logo"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                mixBlendMode: 'multiply'
                            }}
                        />
                    </div>
                </Link>

                <nav style={{ display: 'flex', gap: '40px', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '1.5px', alignItems: 'center' }}>
                    <Link href="/" className="hover-text-sauge">ACCUEIL</Link>
                    <Link href="/consultations" className="hover-text-sauge">CONSULTATIONS</Link>
                    <Link href="/problematiques" className="hover-text-sauge">MOTIFS</Link>
                    <Link href="/techniques" className="hover-text-sauge">TECHNIQUES</Link>
                    <Link href="/ateliers" className="hover-text-sauge">ATELIERS</Link>
                    <Link href="/#villes" className="hover-text-sauge">ZONES</Link>
                    <Link href="/contact" className="btn-premium" style={{ padding: '12px 32px', marginLeft: '20px', borderRadius: '100px' }}>
                        FAIRE MA DEMANDE
                    </Link>
                </nav>
            </div>
        </header>
    );
}
