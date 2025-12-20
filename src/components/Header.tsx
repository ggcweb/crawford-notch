'use client';

import { useState } from 'react';
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
    const pathname = usePathname();

    return (
        <header className="w-full relative">
            {/* Hero Image Section */}
            <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070"
                    alt="Crawford Notch Landscape"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Gradient Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h1 style={{ color: 'white' }} className="font-playfair text-3xl md:text-5xl lg:text-6xl text-center px-4 text-shadow-lg animate-fade-in-up">
                        Crawford Notch General Store &amp; Campground
                    </h1>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-bark-brown-dark w-full sticky top-0 z-50 shadow-xl border-t-4 border-forest-green">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-full py-4 text-tan-beige-light text-lg flex items-center justify-center gap-2 hover:bg-black/20 transition-colors"
                        aria-label="Toggle Menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="font-playfair uppercase tracking-wide">{isMenuOpen ? 'Close Menu' : 'Menu'}</span>
                        <svg
                            className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden text-white md:flex flex-wrap justify-center items-center py-0 list-none p-0 m-0">
                        {navLinks.map((link, index) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href} className="flex items-center">
                                    <Link
                                        href={link.href}
                                        className={`inline-block px-4 py-4 text-sm lg:text-base font-medium transition-all duration-300 relative group ${isActive ? 'text-tan-beige' : 'text-white/90 hover:text-white'
                                            }`}
                                    >
                                        {link.label}
                                        {/* Underline Animation */}
                                        <span className={`absolute bottom-0 left-0 w-full h-1 bg-forest-green transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                    </Link>
                                    {/* Separator */}
                                    {index < navLinks.length - 1 && (
                                        <span className="text-white/40 select-none">•</span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Navigation */}
                    <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="bg-bark-brown-dark/95 border-t border-bark-brown-light backdrop-blur-sm list-none p-0 m-0">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`block px-6 py-4 text-white hover:bg-forest-green transition-colors text-center border-b border-white/5 ${pathname === link.href ? 'bg-forest-green/50' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
