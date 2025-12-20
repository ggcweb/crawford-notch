"use client"
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-bark-brown text-white font-lora">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand & Contact */}
                    <div className="md:col-span-1 space-y-6">
                        <h3 className="text-2xl font-playfair leading-tight">
                            Crawford Notch <br />
                            <span className="text-tan-beige opacity-80 text-lg">General Store &amp; Campground</span>
                        </h3>
                        <div className="space-y-4 text-white/80">
                            <p>
                                1777 Route 302<br />
                                Hart&apos;s Location, NH 03812
                            </p>
                            <p>
                                <a href="tel:6033742779" className="hover:text-tan-beige transition-colors font-semibold">
                                    (603) 374-2779
                                </a>
                            </p>
                            <div className="flex gap-4 pt-2">
                                {/* Social Icons */}
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Facebook">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" aria-label="Instagram">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Link Columns */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-tan-beige font-playfair text-lg mb-4">Explore</h4>
                            <ul className="space-y-2 text-white/80">
                                <li><Link href="/campground" className="hover:text-white transition-colors">Campground</Link></li>
                                <li><Link href="/cabins" className="hover:text-white transition-colors">Cabins &amp; Yurts</Link></li>
                                <li><Link href="/rates" className="hover:text-white transition-colors">Rates &amp; Specials</Link></li>
                                <li><Link href="/activities" className="hover:text-white transition-colors">Activities</Link></li>
                                <li><Link href="/campground-map" className="hover:text-white transition-colors">Campground Map</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-tan-beige font-playfair text-lg mb-4">Guest Info</h4>
                            <ul className="space-y-2 text-white/80">
                                <li><Link href="/reservations" className="hover:text-white transition-colors">Make a Reservation</Link></li>
                                <li><Link href="/policies" className="hover:text-white transition-colors">Policies</Link></li>
                                <li><Link href="/rules" className="hover:text-white transition-colors">Rules</Link></li>
                                <li><Link href="/directions" className="hover:text-white transition-colors">Directions</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-1">
                        <h4 className="text-tan-beige font-playfair text-lg mb-4">Stay Connected</h4>
                        <p className="text-white/80 mb-4 text-sm">Join our newsletter for updates and seasonal specials.</p>
                        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-tan-beige transition-colors"
                            />
                            <button className="w-full bg-tan-beige text-bark-brown font-bold py-2 rounded hover:bg-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} Crawford Notch Campground. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span className="">Member of NH Campground Owners Association</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
