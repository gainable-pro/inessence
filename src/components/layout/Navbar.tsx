"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { href: "/", label: "ACCUEIL" },
        { href: "/consultations", label: "CONSULTATIONS" },
        { href: "/prestations", label: "PRESTATIONS" },
        { href: "/blog", label: "BLOG" },
        { href: "/contact", label: "CONTACT" }
    ];

    return (
        <header>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', height: '100%', textDecoration: 'none' }}>
                    <div style={{ position: 'relative', width: '160px', height: '100px', display: 'flex', alignItems: 'center' }}>
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

                {/* Desktop Nav */}
                <nav className="nav-desktop" style={{ display: 'flex', gap: '30px', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1.2px', alignItems: 'center' }}>
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className="hover-text-sauge">{link.label}</Link>
                    ))}
                    <a href="tel:+33761211132" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', marginLeft: '10px' }}>
                        <span style={{ fontSize: '1.1rem' }}>📞</span>
                        <span>07 61 21 11 32</span>
                    </a>
                    <Link href="/contact" className="btn-premium" style={{ padding: '12px 28px', marginLeft: '10px', borderRadius: '100px' }}>
                        RDV
                    </Link>
                </nav>

                {/* Hamburger Button */}
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '2px' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="btn-premium"
                        onClick={() => setIsOpen(false)}
                        style={{ padding: '20px 50px', borderRadius: '100px', fontSize: '1.2rem', marginTop: '20px' }}
                    >
                        RDV
                    </Link>
                </div>
            </div>
        </header>
    );
}
