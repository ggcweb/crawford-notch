import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BOOKING_URL } from '@/lib/booking';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Reservations",
    description: "Book your stay at Crawford Notch Campground in New Hampshire's White Mountains. Reserve campsites, cabins, and yurts online through Campspot or by phone.",
};

export default function Reservations() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Section variant="brand" className="py-20 md:py-24 text-center">
                    <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Book Your Stay</p>
                    <h1 className="text-cream">Make a Reservation</h1>
                    <p className="text-cream/85 text-lg mt-3">Join us for your next adventure</p>
                </Section>

                <Section variant="default">
                    <div className="max-w-3xl mx-auto text-center space-y-10">
                        <p className="text-lg md:text-xl text-foreground">
                            We&apos;re excited to welcome you to Crawford Notch Campground. To make a reservation, use our online booking system or contact us directly by phone.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="accent" size="lg" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                                Book Online Now
                            </Button>
                            <Button variant="outline" size="lg" href="tel:6033742779">
                                Call (603) 374-2779
                            </Button>
                        </div>
                    </div>
                </Section>

                <Section variant="dark">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Before You Arrive</p>
                            <h2 className="text-cream">Reservation Information</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-7">
                            <Card variant="inset" className="p-8">
                                <h3 className="text-cream border-b border-cream/15 pb-4 mb-5">Check-in / Check-out</h3>
                                <ul className="space-y-3.5 list-none p-0">
                                    {[['Cabin check-in:', '3:00 PM'], ['Site check-in:', '1:00 PM'], ['Check-out:', '11:00 AM'], ['Office hours:', '8am – 8pm']].map(([k, v]) => (
                                        <li key={k} className="flex justify-between text-cream/90"><span>{k}</span><span className="font-semibold text-ochre">{v}</span></li>
                                    ))}
                                </ul>
                            </Card>
                            <Card variant="inset" className="p-8">
                                <h3 className="text-cream border-b border-cream/15 pb-4 mb-5">Cancellation Policy</h3>
                                <ul className="space-y-3.5 list-none p-0">
                                    {[['Outside of 30 days:', '50% refund'], ['Within 30 days:', 'No refund']].map(([k, v]) => (
                                        <li key={k} className="flex justify-between text-cream/90"><span>{k}</span><span>{v}</span></li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                        <div className="text-center mt-12">
                            <p className="text-cream/90">
                                Please review our <Link href="/policies" className="text-ochre underline hover:no-underline font-medium">policies</Link> and <Link href="/rules" className="text-ochre underline hover:no-underline font-medium">rules</Link> before your visit.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
