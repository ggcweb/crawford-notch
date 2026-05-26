import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Rates() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <Section variant="dark" className="py-20 md:py-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="relative z-10">
                        <p style={{ color: '#ffffff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Pricing</p>
                        <h1 style={{ color: '#ffffff' }} className="text-5xl md:text-6xl font-playfair mb-5 font-bold">
                            Rates &amp; Specials
                        </h1>
                        <p style={{ color: '#ffffff' }} className="text-xl tracking-wide">2025 Season</p>
                    </div>
                </Section>

                {/* Rates Table */}
                <Section variant="default">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-forest-green text-base uppercase tracking-[0.2em] mb-4 font-bold">Per Night</p>
                            <h2 className="text-4xl md:text-5xl text-bark-brown-dark font-playfair mb-5 font-bold">
                                Campsite Rates
                            </h2>
                            <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
                        </div>

                        <Card className="overflow-hidden border-none shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-forest-green">
                                        <tr>
                                            <th className="px-7 py-5 font-playfair text-xl font-bold" style={{ color: '#ffffff' }}>Site Type</th>
                                            <th className="px-7 py-5 font-playfair text-xl text-center font-bold" style={{ color: '#ffffff' }}>Nightly</th>
                                            <th className="px-7 py-5 font-playfair text-xl text-center font-bold" style={{ color: '#ffffff' }}>Weekly</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-foreground divide-y divide-tan-beige/50">
                                        {[
                                            { type: "Tent Site (Primitive)", nightly: "$35", weekly: "$210" },
                                            { type: "Tent Site (Electric)", nightly: "$45", weekly: "$270" },
                                            { type: "RV Site (Water/Electric)", nightly: "$55", weekly: "$330" },
                                            { type: "Rustic Cabin", nightly: "$85", weekly: "$510" },
                                            { type: "Yurt", nightly: "$95", weekly: "$570" },
                                        ].map((row, i) => (
                                            <tr key={i} className={`hover:bg-forest-green/5 transition-colors ${i % 2 === 1 ? 'bg-tan-beige-light/50' : 'bg-white'}`}>
                                                <td className="px-7 py-5 font-bold text-lg">{row.type}</td>
                                                <td className="px-7 py-5 text-center font-bold text-forest-green text-xl">{row.nightly}</td>
                                                <td className="px-7 py-5 text-center text-lg font-semibold">{row.weekly}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>

                        <p className="text-base text-foreground mt-5 text-center italic">
                            * Rates are for 2 adults and up to 4 children. Additional guests $10/night.
                        </p>
                    </div>
                </Section>

                {/* Specials */}
                <Section variant="brand" className="relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                    <div className="text-center mb-14 relative z-10">
                        <p style={{ color: '#ffffff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Save More</p>
                        <h2 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-playfair mb-5 font-bold">
                            Seasonal Specials
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
                        {[
                            { title: "Early Bird", discount: "10% OFF", desc: "Book before May 1st for stays in June" },
                            { title: "Extended Stay", discount: "7th Night FREE", desc: "Stay 6 nights, get the 7th night free" },
                            { title: "Fall Foliage", discount: "15% OFF", desc: "Midweek stays in September & October" },
                            { title: "Return Camper", discount: "5% OFF", desc: "Returning guests receive a discount" },
                        ].map((special, i) => (
                            <Card key={i} className="bg-white/[0.10] backdrop-blur-sm border-none p-7 text-center hover:bg-white/[0.16] transition-all duration-300 group">
                                <h3 style={{ color: '#ffffff' }} className="text-xl font-playfair mb-3 font-bold">{special.title}</h3>
                                <div style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">{special.discount}</div>
                                <p style={{ color: '#ffffff' }} className="text-base">{special.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Additional Fees */}
                <Section variant="light">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-14">
                            <p className="text-forest-green text-base uppercase tracking-[0.2em] mb-4 font-bold">Details</p>
                            <h2 className="text-4xl md:text-5xl text-bark-brown-dark font-playfair mb-5 font-bold">
                                Additional Fees &amp; Information
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-white p-9 border-l-4 border-forest-green">
                                <h3 className="text-2xl font-playfair font-bold mb-7 flex items-center gap-3">
                                    <span className="text-forest-green text-2xl">+</span> Extra Charges
                                </h3>
                                <ul className="space-y-4 text-foreground list-none p-0">
                                    <li className="flex justify-between border-b border-tan-beige/50 pb-3 text-lg"><span>Extra person (over 4)</span> <span className="font-bold text-forest-green">$10/night</span></li>
                                    <li className="flex justify-between border-b border-tan-beige/50 pb-3 text-lg"><span>Extra vehicle</span> <span className="font-bold text-forest-green">$5/night</span></li>
                                    <li className="flex justify-between border-b border-tan-beige/50 pb-3 text-lg"><span>Pet fee</span> <span className="font-bold text-forest-green">$5/pet/night</span></li>
                                    <li className="flex justify-between border-b border-tan-beige/50 pb-3 text-lg"><span>Firewood bundle</span> <span className="font-bold text-forest-green">$8</span></li>
                                    <li className="flex justify-between text-lg"><span>Ice bag</span> <span className="font-bold text-forest-green">$3</span></li>
                                </ul>
                            </Card>

                            <Card className="bg-white p-9 border-l-4 border-bark-brown">
                                <h3 className="text-2xl font-playfair font-bold mb-7 flex items-center gap-3">
                                    <svg className="w-7 h-7 text-bark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Payment Info
                                </h3>
                                <ul className="space-y-4 text-foreground list-none p-0">
                                    {["Deposit required to hold reservation", "Full payment due one week before arrival", "We accept cash and major credit cards", "No personal checks"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg">
                                            <svg className="w-5 h-5 text-bark-brown flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Note */}
                <Section className="bg-deep-burgundy py-14 text-center">
                    <p style={{ color: '#ffffff' }} className="text-xl md:text-2xl">
                        Rates are subject to change. Please contact us for the most current pricing and availability.
                    </p>
                    <p className="text-3xl mt-5 font-playfair font-bold">
                        <a href="tel:6033742779" style={{ color: '#ffffff' }} className="hover:text-tan-beige transition-colors">
                            Phone: (603) 374-2779
                        </a>
                    </p>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
