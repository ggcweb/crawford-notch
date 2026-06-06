'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BOOKING_URL } from '@/lib/booking';

const navLinks: { href: string; label: string; external?: boolean }[] = [
    { href: '/', label: 'Home' },
    { href: '/campground', label: 'Campground' },
    { href: '/cabins', label: 'Cabins' },
    { href: '/campground-map', label: 'Map' },
    { href: '/rates', label: 'Rates' },
    { href: BOOKING_URL, label: 'Reservations', external: true },
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
            {/* Brand accent rule */}
            <div className="h-1 w-full bg-rust" />

            {/* Top utility bar */}
            <div className="bg-bark-brown-dark text-cream hidden md:block border-b border-cream/10">
                <div className="max-w-6xl mx-auto px-6 py-2.5 flex justify-between items-center">
                    <span className="flex items-center gap-2 text-sm text-cream/90">
                        <svg className="w-4 h-4 text-ochre" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        1138 US Route 302, Hart&apos;s Location, NH 03812
                    </span>
                    <div className="flex items-center gap-6">
                        <a href="tel:6033742779" className="flex items-center gap-2 text-cream hover:text-ochre transition-colors font-medium text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            (603) 374-2779
                        </a>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/crawfordnotchcamping/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/75 hover:text-ochre transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero image */}
            <div className="relative w-full h-[460px] md:h-[580px]">
                <Image
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070"
                    alt="Mountains and forest of Crawford Notch, New Hampshire"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Editorial overlay: darker at edges, readable type */}
                <div className="absolute inset-0 bg-gradient-to-b from-bark-brown-dark/55 via-bark-brown-dark/20 to-bark-brown-dark/80" />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                    <div className="text-center animate-fade-in-up max-w-3xl">
                        <p className="text-cream text-xs md:text-sm uppercase tracking-[0.34em] mb-5 font-medium text-shadow">
                            White Mountains &middot; New Hampshire
                        </p>
                        <h1 className="text-cream font-display text-5xl md:text-7xl leading-[1.05] mb-4 text-shadow-lg">
                            Crawford Notch
                        </h1>
                        <p className="text-cream/95 text-xl md:text-2xl font-display italic text-shadow">
                            General Store &amp; Campground
                        </p>
                        <div className="mt-7 flex items-center justify-center gap-4">
                            <span className="h-px w-12 bg-ochre/80" />
                            <span className="text-ochre text-xs tracking-[0.22em] uppercase font-semibold">Family owned since 1962</span>
                            <span className="h-px w-12 bg-ochre/80" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className={`w-full sticky top-0 z-50 bg-bark-brown-dark transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
                <div className="max-w-7xl mx-auto px-4">
                    {/* Mobile bar */}
                    <div className="md:hidden flex items-center justify-between py-3.5">
                        <Link href="/" className="text-cream font-display text-xl">
                            Crawford Notch
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-cream p-2 hover:bg-cream/10 rounded-sm transition-colors"
                            aria-label="Toggle menu"
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

                    {/* Desktop nav */}
                    <ul className="hidden md:flex flex-wrap justify-center items-center list-none p-0 m-0">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`relative inline-block px-2 lg:px-3 py-4 text-sm lg:text-[0.95rem] tracking-tight whitespace-nowrap transition-colors ${isActive ? 'text-ochre' : 'text-cream/85 hover:text-cream'}`}
                                    >
                                        {link.label}
                                        <span className={`absolute bottom-2 left-2 right-2 lg:left-3 lg:right-3 h-px bg-ochre origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile nav */}
                    <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="border-t border-cream/10 list-none p-0 m-0 pb-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        aria-current={pathname === link.href ? 'page' : undefined}
                                        className={`block px-6 py-3.5 text-lg border-b border-cream/5 transition-colors ${pathname === link.href ? 'text-ochre' : 'text-cream/90 hover:bg-forest-green/40 hover:text-cream'}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="px-6 pt-4">
                                <a
                                    href="tel:6033742779"
                                    className="block text-center bg-rust text-cream py-3.5 rounded-sm font-medium text-lg hover:bg-rust-dark transition-colors"
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
