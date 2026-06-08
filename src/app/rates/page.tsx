import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
    title: "Rates & Reservations",
    description: "Reservation and payment information for Crawford Notch Campground along the Saco River in New Hampshire's White Mountains. Book online through Campspot for current rates and availability.",
};

export default function Rates() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Page title */}
                <Section variant="dark" className="py-20 md:py-24 text-center">
                    <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Pricing</p>
                    <h1 className="text-cream">Rates &amp; Reservations</h1>
                    <p className="text-cream/80 text-lg mt-3 tracking-wide">2026 Season</p>
                </Section>

                {/* Payment policy */}
                <Section variant="light">
                    <div className="max-w-3xl mx-auto">
                        <Card className="p-8 md:p-12 text-center border-t-2 border-t-forest-green">
                            <span className="w-14 h-14 mx-auto flex items-center justify-center bg-forest-green-light text-forest-green rounded-sm mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </span>
                            <h2 className="text-bark-brown-dark mb-5">Payment</h2>
                            <p className="text-foreground text-lg md:text-xl">
                                Full payment is taken at the time of booking.
                            </p>
                        </Card>
                    </div>
                </Section>

                {/* Book / current rates */}
                <Section variant="burgundy" className="text-center py-16 md:py-20">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-cream">Current Rates &amp; Availability</h2>
                        <p className="text-cream/90 text-lg md:text-xl mt-5">
                            Rates vary by site type and season and are subject to change. For current pricing and real-time availability, please book directly through our reservation partner, Campspot.
                        </p>
                        <div className="mt-8">
                            <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                                Check Rates &amp; Book on Campspot
                            </Button>
                        </div>
                        <p className="text-2xl mt-10 font-display">
                            <a href="tel:6033742779" className="text-ochre hover:text-cream transition-colors">
                                Questions? Call (603) 374-2779
                            </a>
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
