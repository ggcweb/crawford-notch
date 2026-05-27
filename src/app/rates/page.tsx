import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const rates = [
    { type: "Tent Site (Primitive)", nightly: "$35", weekly: "$210" },
    { type: "Tent Site (Electric)", nightly: "$45", weekly: "$270" },
    { type: "RV Site (Water/Electric)", nightly: "$55", weekly: "$330" },
    { type: "Rustic Cabin", nightly: "$85", weekly: "$510" },
    { type: "Yurt", nightly: "$95", weekly: "$570" },
];

const specials = [
    { title: "Early Bird", discount: "10% off", desc: "Book before May 1st for stays in June" },
    { title: "Extended Stay", discount: "7th Night Free", desc: "Stay 6 nights, get the 7th night free" },
    { title: "Fall Foliage", discount: "15% off", desc: "Midweek stays in September & October" },
    { title: "Return Camper", discount: "5% off", desc: "Returning guests receive a discount" },
];

const extraCharges = [
    ["Extra person (over 4)", "$10/night"],
    ["Extra vehicle", "$5/night"],
    ["Pet fee", "$5/pet/night"],
    ["Firewood bundle", "$8"],
    ["Ice bag", "$3"],
];

export default function Rates() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Page title */}
                <Section variant="dark" className="py-20 md:py-24 text-center">
                    <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Pricing</p>
                    <h1 className="text-cream">Rates &amp; Specials</h1>
                    <p className="text-cream/80 text-lg mt-3 tracking-wide">2025 Season</p>
                </Section>

                {/* Rates table */}
                <Section variant="default">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-rust text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Per Night</p>
                            <h2 className="text-bark-brown-dark">Campsite Rates</h2>
                            <div className="h-px w-12 bg-rust mx-auto mt-6" />
                        </div>

                        <Card className="overflow-hidden p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-forest-green">
                                        <tr>
                                            <th className="px-6 py-4 font-display text-cream text-lg font-semibold">Site Type</th>
                                            <th className="px-6 py-4 font-display text-cream text-lg text-center font-semibold">Nightly</th>
                                            <th className="px-6 py-4 font-display text-cream text-lg text-center font-semibold">Weekly</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-foreground">
                                        {rates.map((row, i) => (
                                            <tr key={row.type} className={i % 2 === 1 ? 'bg-tan-beige-light/60' : 'bg-cream'}>
                                                <td className="px-6 py-4 font-medium">{row.type}</td>
                                                <td className="px-6 py-4 text-center font-semibold text-forest-green text-lg">{row.nightly}</td>
                                                <td className="px-6 py-4 text-center">{row.weekly}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>

                        <p className="text-sm text-muted mt-4 text-center italic">
                            * Rates are for 2 adults and up to 4 children. Additional guests $10/night.
                        </p>
                    </div>
                </Section>

                {/* Specials */}
                <Section variant="brand">
                    <div className="text-center mb-14">
                        <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Save More</p>
                        <h2 className="text-cream">Seasonal Specials</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specials.map((special) => (
                            <Card key={special.title} variant="inset" className="text-center p-7">
                                <h3 className="text-cream text-lg mb-3">{special.title}</h3>
                                <div className="text-ochre font-display text-3xl mb-4">{special.discount}</div>
                                <p className="text-cream/85 text-[0.95rem]">{special.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Additional fees */}
                <Section variant="light">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-14">
                            <p className="text-rust text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Details</p>
                            <h2 className="text-bark-brown-dark">Additional Fees &amp; Information</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-7">
                            <Card className="border-l-2 border-l-forest-green">
                                <h3 className="text-bark-brown-dark mb-6">Extra Charges</h3>
                                <ul className="space-y-3.5 text-foreground list-none p-0">
                                    {extraCharges.map(([label, price]) => (
                                        <li key={label} className="flex justify-between border-b border-bark-brown/12 pb-3 last:border-0">
                                            <span>{label}</span>
                                            <span className="font-semibold text-forest-green">{price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            <Card className="border-l-2 border-l-bark-brown">
                                <h3 className="text-bark-brown-dark flex items-center gap-3 mb-6">
                                    <svg className="w-6 h-6 text-bark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Payment Info
                                </h3>
                                <ul className="space-y-3.5 text-foreground list-none p-0">
                                    {["Deposit required to hold reservation", "Full payment due one week before arrival", "We accept cash and major credit cards", "No personal checks"].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-bark-brown flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Note */}
                <Section className="bg-deep-burgundy text-cream py-14 text-center">
                    <p className="text-cream/90 text-lg md:text-xl">
                        Rates are subject to change. Please contact us for the most current pricing and availability.
                    </p>
                    <p className="text-2xl mt-4 font-display">
                        <a href="tel:6033742779" className="text-ochre hover:text-cream transition-colors">
                            Phone: (603) 374-2779
                        </a>
                    </p>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
