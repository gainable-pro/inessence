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

                <nav style={{ display: 'flex', gap: '30px', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1.2px', alignItems: 'center' }}>
                    <Link href="/" className="hover-text-sauge">ACCUEIL</Link>
                    <Link href="/blog" className="hover-text-sauge">BLOG</Link>
                    <Link href="/consultations" className="hover-text-sauge">CONSULTATIONS</Link>
                    <Link href="/problematiques" className="hover-text-sauge">MOTIFS</Link>
                    <Link href="/techniques" className="hover-text-sauge">TECHNIQUES</Link>
                    <Link href="/ateliers" className="hover-text-sauge">ATELIERS</Link>
                    <Link href="/contact" className="btn-premium" style={{ padding: '12px 28px', marginLeft: '10px', borderRadius: '100px' }}>
                        RDV
                    </Link>
                </nav>
            </div>
        </header>
    );
}
