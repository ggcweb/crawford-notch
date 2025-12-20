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
                <Section variant="dark" className="py-20 text-center">
                    <h1 style={{ color: "white" }} className="text-4xl md:text-5xl font-playfair mb-4">
                        Rates &amp; Specials
                    </h1>
                    <p className="opacity-90 text-xl font-light tracking-wide">2025 Season</p>
                </Section>

                {/* Rates Table */}
                <Section variant="default">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl text-bark-brown-dark font-playfair mb-4">
                                Campsite Rates
                            </h2>
                            <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
                        </div>

                        <Card className="overflow-hidden border-none shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-forest-green text-white">
                                        <tr>
                                            <th className="px-6 py-5 font-playfair text-lg">Site Type</th>
                                            <th className="px-6 py-5 font-playfair text-lg text-center">Nightly</th>
                                            <th className="px-6 py-5 font-playfair text-lg text-center">Weekly</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-bark-brown-dark divide-y divide-tan-beige">
                                        {[
                                            { type: "Tent Site (Primitive)", nightly: "$35", weekly: "$210" },
                                            { type: "Tent Site (Electric)", nightly: "$45", weekly: "$270" },
                                            { type: "RV Site (Water/Electric)", nightly: "$55", weekly: "$330" },
                                            { type: "Rustic Cabin", nightly: "$85", weekly: "$510" },
                                            { type: "Yurt", nightly: "$95", weekly: "$570" },
                                        ].map((row, i) => (
                                            <tr key={i} className={`hover:bg-tan-beige-light transition-colors ${i % 2 === 1 ? 'bg-white/50' : 'bg-white'}`}>
                                                <td className="px-6 py-4 font-semibold">{row.type}</td>
                                                <td className="px-6 py-4 text-center font-bold text-forest-green">{row.nightly}</td>
                                                <td className="px-6 py-4 text-center">{row.weekly}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>

                        <p className="text-sm text-bark-brown-dark/70 mt-4 text-center italic">
                            * Rates are for 2 adults and up to 4 children. Additional guests $10/night.
                        </p>
                    </div>
                </Section>

                {/* Specials */}
                <Section variant="brand" className="relative overflow-hidden">
                    {/* Pattern Background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-white">
                            Seasonal Specials
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {[
                            { title: "Early Bird", discount: "10% OFF", desc: "Book before May 1st for stays in June" },
                            { title: "Extended Stay", discount: "7th Night FREE", desc: "Stay 6 nights, get the 7th night free" },
                            { title: "Fall Foliage", discount: "15% OFF", desc: "Midweek stays in September & October" },
                            { title: "Return Camper", discount: "5% OFF", desc: "Returning guests receive a discount" },
                        ].map((special, i) => (
                            <Card key={i} className="bg-white/10 text-white backdrop-blur-sm border-none p-6 text-center transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-xl font-playfair mb-2">{special.title}</h3>
                                <div className="text-3xl font-bold mb-3 text-tan-beige">{special.discount}</div>
                                <p className="opacity-90 text-sm">{special.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Additional Fees */}
                <Section variant="light">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl text-bark-brown-dark font-playfair mb-4">
                                Additional Fees &amp; Information
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-white p-8 border-l-4 border-forest-green">
                                <h3 className="text-2xl font-playfair font-semibold mb-6 flex items-center gap-2">
                                    <span className="text-forest-green">+</span> Extra Charges
                                </h3>
                                <ul className="space-y-3 text-bark-brown-dark">
                                    <li className="flex justify-between border-b border-tan-beige pb-2"><span>Extra person (over 4)</span> <span className="font-bold">$10/night</span></li>
                                    <li className="flex justify-between border-b border-tan-beige pb-2"><span>Extra vehicle</span> <span className="font-bold">$5/night</span></li>
                                    <li className="flex justify-between border-b border-tan-beige pb-2"><span>Pet fee</span> <span className="font-bold">$5/pet/night</span></li>
                                    <li className="flex justify-between border-b border-tan-beige pb-2"><span>Firewood bundle</span> <span className="font-bold">$8</span></li>
                                    <li className="flex justify-between"><span>Ice bag</span> <span className="font-bold">$3</span></li>
                                </ul>
                            </Card>

                            <Card className="bg-white p-8 border-l-4 border-bark-brown">
                                <h3 className="text-2xl font-playfair font-semibold mb-6 flex items-center gap-2">
                                    <span className="text-bark-brown">ℹ️</span> Payment Info
                                </h3>
                                <ul className="list-disc pl-5 space-y-3 text-bark-brown-dark text-lg">
                                    <li>Deposit required to hold reservation</li>
                                    <li>Full payment due one week before arrival</li>
                                    <li>We accept cash and major credit cards</li>
                                    <li>No personal checks</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Note */}
                <Section className="bg-deep-burgundy text-white py-12 text-center">
                    <p className="text-bark-brown text-lg md:text-xl font-light opacity-90">
                        Rates are subject to change. Please contact us for the most current pricing and availability.
                    </p>
                    <p className="text-2xl mt-4 text-bark-brown font-playfair">
                        Phone: (603) 374-2779
                    </p>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
