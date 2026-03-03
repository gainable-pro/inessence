import Link from "next/link";

export function Navbar() {
    return (
        <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                        <img
                            src="/images/logo-inessence.png"
                            alt="Logo"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </Link>

                <nav style={{ display: 'flex', gap: '32px', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px', alignItems: 'center' }}>
                    <Link href="/" className="hover-text-sauge">ACCUEIL</Link>
                    <Link href="/consultations" className="hover-text-sauge">CONSULTATIONS</Link>
                    <Link href="/problematiques" className="hover-text-sauge">MOTIFS</Link>
                    <Link href="/techniques" className="hover-text-sauge">TECHNIQUES</Link>
                    <Link href="/ateliers" className="hover-text-sauge">ATELIERS</Link>
                    <Link href="/#villes" className="hover-text-sauge">ZONES</Link>
                    <Link href="/contact" className="btn-premium" style={{ padding: '10px 24px', marginLeft: '10px' }}>
                        FAIRE MA DEMANDE
                    </Link>
                </nav>
            </div>
        </header>
    );
}
