import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Reservations() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <Section variant="brand" className="py-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 style={{ color: "white" }} className="text-4xl md:text-5xl font-playfair mb-4 text-white">
                            Make a Reservation
                        </h1>
                        <p className="opacity-90 text-xl font-light">Join us for your next adventure</p>
                    </div>
                </Section>

                {/* Primary Actions */}
                <Section variant="default">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <p className="text-xl text-bark-brown-dark leading-relaxed font-medium">
                            We&apos;re excited to welcome you to Crawford Notch Campground! To make a reservation, you can use our online booking system or contact us directly by phone.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                href="https://www.campspot.com/book/crawfordnotchcampground"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl px-12 py-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                                style={{ color: "white" }}
                            >
                                Book Online Now
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                href="tel:6033742779"
                                className="text-xl px-12 py-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all bg-white"
                            >
                                Call (603) 374-2779
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-4 text-bark-brown opacity-70">
                            <span className="h-px w-12 bg-bark-brown"></span>
                            <span className="text-sm uppercase tracking-widest font-bold">Or Request Info Below</span>
                            <span className="h-px w-12 bg-bark-brown"></span>
                        </div>
                    </div>
                </Section>

                {/* Info Request Form */}
                <Section variant="light">
                    <div className="max-w-3xl mx-auto">
                        <Card className="bg-white p-8 md:p-12 shadow-2xl border-t-8 border-forest-green">
                            <h2 className="text-3xl font-playfair text-bark-brown-dark text-center mb-8">
                                Request Information
                            </h2>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">First Name *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">Last Name *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">Phone *</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">Arrival Date *</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">Departure Date *</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">Site Type *</label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all appearance-none"
                                    >
                                        <option value="">Select a site type...</option>
                                        <option value="tent-primitive">Tent Site (Primitive)</option>
                                        <option value="tent-electric">Tent Site (Electric)</option>
                                        <option value="rv">RV Site (Water/Electric)</option>
                                        <option value="cabin">Rustic Cabin</option>
                                        <option value="yurt">Yurt</option>
                                    </select>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">Adults</label>
                                        <select className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all">
                                            {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num}{num === 6 ? '+' : ''}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">Children</label>
                                        <select className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all">
                                            {[0, 1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}{num === 5 ? '+' : ''}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-bark-brown-dark font-bold text-sm uppercase tracking-wide">Special Requests</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 bg-tan-beige-light border border-tan-beige rounded focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all"
                                        placeholder="Any special requests or questions..."
                                    ></textarea>
                                </div>

                                <Button type="submit" variant="primary" size="lg" fullWidth className="py-4 text-lg">
                                    Submit Request
                                </Button>
                            </form>
                        </Card>
                    </div>
                </Section>


                {/* Important Info */}
                <Section variant="dark">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-playfair text-white mb-4">Reservation Information</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-white/10 text-white backdrop-blur-sm border-none p-8">
                                <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Check-in / Check-out</h3>
                                <ul className="space-y-2 opacity-90 text-lg">
                                    <li className="flex justify-between"><span>Check-in:</span> <span className="font-bold">2:00 PM</span></li>
                                    <li className="flex justify-between"><span>Check-out:</span> <span className="font-bold">11:00 AM</span></li>
                                    <li className="flex justify-between"><span>Office hours:</span> <span className="font-bold">9am - 8pm</span></li>
                                </ul>
                            </Card>

                            <Card className="bg-white/10 text-white backdrop-blur-sm border-none p-8">
                                <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Cancellation Policy</h3>
                                <ul className="space-y-2 opacity-90 text-lg">
                                    <li className="flex justify-between"><span>14+ days:</span> <span>Full refund (-$25)</span></li>
                                    <li className="flex justify-between"><span>7-13 days:</span> <span>50% refund</span></li>
                                    <li className="flex justify-between"><span>&lt; 7 days:</span> <span>No refund</span></li>
                                </ul>
                            </Card>
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-white/80 text-lg">
                                Please review our <Link href="/policies" className="text-tan-beige underline hover:no-underline font-bold">policies</Link> and <Link href="/rules" className="text-tan-beige underline hover:no-underline font-bold">rules</Link> before your visit.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
