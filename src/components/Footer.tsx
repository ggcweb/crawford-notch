"use client"
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/booking';

type FooterLink = { href: string; label: string; external?: boolean };

const exploreLinks: FooterLink[] = [
    { href: '/campground', label: 'Campground' },
    { href: '/cabins', label: 'Cabins & Yurts' },
    { href: '/rates', label: 'Rates & Reservations' },
    { href: '/activities', label: 'Activities' },
    { href: '/campground-map', label: 'Campground Map' },
];

const guestLinks: FooterLink[] = [
    { href: BOOKING_URL, label: 'Make a Reservation', external: true },
    { href: '/policies', label: 'Policies' },
    { href: '/rules', label: 'Rules' },
    { href: '/directions', label: 'Directions' },
];

export default function Footer() {
    return (
        <footer className="w-full bg-bark-brown-dark text-cream border-t-4 border-rust">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand & contact */}
                    <div className="md:col-span-1 space-y-6">
                        <div>
                            <h3 className="text-cream text-2xl font-display leading-tight mb-1">
                                Crawford Notch
                            </h3>
                            <p className="text-cream/80 text-base font-display italic">
                                General Store &amp; Campground
                            </p>
                        </div>
                        <div className="space-y-3 text-cream/90">
                            <p className="flex items-start gap-2.5">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-ochre" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="text-[0.95rem]">1138 US Route 302<br />Hart&apos;s Location, NH 03812</span>
                            </p>
                            <p className="flex items-center gap-2.5">
                                <svg className="w-5 h-5 flex-shrink-0 text-ochre" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <a href="tel:6033742779" className="text-cream hover:text-ochre transition-colors font-medium text-lg">
                                    (603) 374-2779
                                </a>
                            </p>
                        </div>
                        <div className="flex gap-3 pt-1">
                            <a href="https://www.facebook.com/crawfordnotchcamping/" target="_blank" rel="noopener noreferrer" className="border border-cream/25 hover:bg-rust hover:border-rust p-2.5 rounded-sm transition-colors" aria-label="Facebook">
                                <svg className="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-ochre font-display text-lg mb-5 tracking-tight">Explore</h4>
                            <ul className="space-y-2.5 list-none p-0">
                                {exploreLinks.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined} className="text-cream/85 hover:text-ochre transition-colors text-[0.95rem]">{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-ochre font-display text-lg mb-5 tracking-tight">Guest Info</h4>
                            <ul className="space-y-2.5 list-none p-0">
                                {guestLinks.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined} className="text-cream/85 hover:text-ochre transition-colors text-[0.95rem]">{l.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-1">
                        <h4 className="text-ochre font-display text-lg mb-5 tracking-tight">Stay Connected</h4>
                        <p className="text-cream/85 mb-4 text-[0.95rem] leading-relaxed">Seasonal updates and special offers, a few times a year.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-sm bg-cream/10 border border-cream/25 text-cream placeholder-cream/55 focus:outline-none focus:border-ochre focus:bg-cream/15 transition-all text-[0.95rem]"
                            />
                            <button className="w-full bg-rust text-cream font-medium py-3 rounded-sm hover:bg-rust-dark transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-cream/15 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-cream/75">
                    <p>&copy; {new Date().getFullYear()} Crawford Notch Campground. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-ochre" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        <span>Member, NH Campground Owners Association</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
