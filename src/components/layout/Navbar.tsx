import Link from "next/link";

export function Navbar() {
    return (
        <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Link href="/" className="font-serif" style={{ fontSize: '1.5rem', letterSpacing: '2px', fontWeight: 'bold' }}>
                    INESSENCE
                </Link>

                <nav style={{ display: 'flex', gap: '32px', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>
                    <Link href="/villes/miramas" className="hover:text-sauge">MÉTHODE</Link>
                    <Link href="/#villes" className="hover:text-sauge">VILLES</Link>
                    <Link href="/techniques" className="hover:text-sauge">TECHNIQUES</Link>
                    <Link href="/contact" className="btn-premium btn-outline" style={{ padding: '8px 20px' }}>PRENDRE RDV</Link>
                </nav>
            </div>
        </header>
    );
}
