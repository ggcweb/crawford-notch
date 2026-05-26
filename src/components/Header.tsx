'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/campground', label: 'Campground' },
    { href: '/cabins', label: 'Cabins' },
    { href: '/campground-map', label: 'Campground Map' },
    { href: '/rates', label: 'Rates' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/policies', label: 'Policies' },
    { href: '/rules', label: 'Rules' },
    { href: '/activities', label: 'Activities' },
    { href: '/directions', label: 'Directions' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="w-full relative">
            {/* Top Utility Bar */}
            <div className="bg-bark-brown-dark text-white hidden md:block">
                <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-base text-white/90">
                            <svg className="w-4 h-4 text-tan-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            1777 Route 302, Hart&apos;s Location, NH 03812
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="tel:6033742779" className="flex items-center gap-2 text-white hover:text-tan-beige transition-colors font-bold text-base">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            (603) 374-2779
                        </a>
                        <div className="flex gap-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80 hover:text-tan-beige transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/80 hover:text-tan-beige transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative w-full h-[480px] md:h-[600px]">
                <Image
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070"
                    alt="Crawford Notch Landscape"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Cinematic Gradient Overlay - strong for contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75" />

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                    <div className="text-center animate-fade-in-up">
                        <p className="text-white text-base md:text-lg uppercase tracking-[0.3em] mb-5 font-lora font-semibold" style={{ color: '#ffffff' }}>
                            White Mountains &bull; New Hampshire
                        </p>
                        <h1 style={{ color: '#ffffff' }} className="font-playfair text-5xl md:text-6xl lg:text-7xl text-center text-shadow-lg leading-tight mb-5">
                            Crawford Notch
                        </h1>
                        <p style={{ color: '#ffffff' }} className="text-2xl md:text-3xl font-playfair italic tracking-wide">
                            General Store &amp; Campground
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <span className="h-px w-16 bg-white/60"></span>
                            <span style={{ color: '#ffffff' }} className="text-base tracking-[0.2em] uppercase font-bold">Est. Family Owned</span>
                            <span className="h-px w-16 bg-white/60"></span>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
                        <svg className="w-7 h-7 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-bark-brown-dark/95 backdrop-blur-md shadow-2xl'
                : 'bg-bark-brown-dark shadow-xl'
                }`}>
                <div className="max-w-7xl mx-auto px-4">
                    {/* Mobile: Logo + Hamburger Row */}
                    <div className="md:hidden flex items-center justify-between py-3.5">
                        <Link href="/" className="text-white font-playfair text-xl font-bold" style={{ color: '#ffffff' }}>
                            Crawford Notch
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Toggle Menu"
                            aria-expanded={isMenuOpen}
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex flex-wrap justify-center items-center py-0 list-none p-0 m-0">
                        {navLinks.map((link, index) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href} className="flex items-center">
                                    <Link
                                        href={link.href}
                                        style={{ color: '#ffffff' }}
                                        className={`inline-block px-4 py-4 text-base font-semibold transition-all duration-300 relative group ${isActive ? 'text-tan-beige' : 'hover:text-tan-beige'
                                            }`}
                                    >
                                        {link.label}
                                        {/* Underline Animation */}
                                        <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-tan-beige transform origin-center transition-all duration-300 ${isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`}></span>
                                    </Link>
                                    {/* Separator */}
                                    {index < navLinks.length - 1 && (
                                        <span className="text-white/25 select-none text-xs">|</span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Navigation */}
                    <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="bg-bark-brown-dark/95 border-t border-white/10 backdrop-blur-sm list-none p-0 m-0 pb-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        style={{ color: '#ffffff' }}
                                        className={`block px-6 py-4 text-lg text-white hover:bg-forest-green/40 transition-colors border-b border-white/5 font-medium ${pathname === link.href ? 'bg-forest-green/30' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            {/* Mobile phone CTA */}
                            <li className="px-6 pt-4">
                                <a
                                    href="tel:6033742779"
                                    className="block text-center bg-forest-green text-white py-3.5 rounded-lg font-bold text-lg hover:bg-forest-green-dark transition-colors"
                                    style={{ color: '#ffffff' }}
                                >
                                    Call (603) 374-2779
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
