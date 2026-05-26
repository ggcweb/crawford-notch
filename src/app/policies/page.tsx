import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Policies() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />
            <main className="flex-1">
                <Section variant="brand" className="py-20 md:py-24 bg-deep-burgundy relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="text-center relative z-10">
                        <p style={{ color: '#fff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Guest Information</p>
                        <h1 style={{ color: '#fff' }} className="text-5xl md:text-6xl font-playfair mb-5 font-bold">Campground Policies</h1>
                        <div className="h-1 w-20 bg-white/40 mx-auto rounded-full" />
                    </div>
                </Section>

                <Section variant="default" className="bg-cream">
                    <div className="max-w-4xl mx-auto space-y-10">
                        <Card className="bg-white p-9 md:p-12 border-t-4 border-forest-green">
                            <h2 className="text-3xl font-playfair text-bark-brown-dark mb-7 font-bold">Reservation Policy</h2>
                            <ul className="space-y-5 text-foreground list-none text-lg p-0">
                                {["A deposit is required to secure your reservation.","Full payment is due one week before your arrival date.","Reservations may be made by phone or through our online booking system.","We accept cash and major credit cards. No personal checks."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-forest-green/10 flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="bg-white p-9 md:p-12 border-t-4 border-deep-burgundy">
                            <h2 className="text-3xl font-playfair text-deep-burgundy mb-7 font-bold">Cancellation Policy</h2>
                            <ul className="space-y-4 text-foreground list-none text-lg p-0">
                                {[{p:"Outside of 30 days:",d:"50% refund."},{p:"Within 30 days:",d:"No refund."}].map((item, i) => (
                                    <li key={i} className="flex flex-col md:flex-row md:items-center gap-2 p-4 bg-tan-beige-light/70 rounded-lg">
                                        <span className="font-bold text-deep-burgundy min-w-[180px]">{item.p}</span>
                                        <span>{item.d}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-white p-9 border-l-4 border-forest-green">
                                <h2 className="text-2xl font-playfair text-bark-brown-dark mb-5 font-bold">Check-in</h2>
                                <div className="space-y-3 mb-5">
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-lg text-foreground font-semibold">Cabin Check-in:</span>
                                        <span className="text-3xl font-bold text-forest-green">3:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-lg text-foreground font-semibold">Site Check-in:</span>
                                        <span className="text-3xl font-bold text-forest-green">1:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-lg text-foreground font-semibold">Office hours:</span>
                                        <span className="text-xl font-bold text-forest-green">8am - 8pm</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 list-none p-0 text-foreground text-lg">
                                    {["Please check in at the General Store","Late arrivals should call ahead"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-forest-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                            <Card className="bg-white p-9 border-l-4 border-bark-brown">
                                <h2 className="text-2xl font-playfair text-bark-brown-dark mb-5 font-bold">Check-out</h2>
                                <div className="text-5xl font-bold text-forest-green mb-5">11:00 AM</div>
                                <ul className="space-y-3 list-none p-0 text-foreground text-lg">
                                    {["Please leave your site clean","Return key cards to the office"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-bark-brown flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>

                        <Card className="bg-white p-9 md:p-12">
                            <h2 className="text-3xl font-playfair text-bark-brown-dark mb-7 font-bold">Guest &amp; Visitor Policy</h2>
                            <ul className="space-y-4 text-foreground list-none p-0 text-lg">
                                {["All guests must be registered at check-in.","Day visitors must register at the office and leave by 9:00 PM.","Maximum 6 people per campsite (varies for cabins).","Children under 18 must be accompanied by an adult."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="bg-white p-9 md:p-12 border-t-4 border-bark-brown">
                            <div className="flex items-center gap-4 mb-7">
                                <span className="text-5xl">🐕</span>
                                <h2 className="text-3xl font-playfair text-bark-brown-dark font-bold">Pet Policy</h2>
                            </div>
                            <ul className="space-y-4 text-foreground list-none text-lg p-0">
                                {["Pets are welcome at most campsites (some restrictions apply).","Pets must be on a leash (6 feet or less) at all times.","Owners must clean up after their pets immediately.","Pets may not be left unattended."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-2.5 h-2.5 bg-forest-green rounded-full flex-shrink-0 mt-2.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                                <li className="flex items-start gap-3 p-4 bg-deep-burgundy/5 rounded-lg border border-deep-burgundy/10">
                                    <svg className="w-5 h-5 text-deep-burgundy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span className="font-bold text-deep-burgundy">$5/pet/night fee applies.</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
