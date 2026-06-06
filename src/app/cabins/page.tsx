import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

const essentials = ["Sleeping bags or bedding", "Pillows", "Towels", "Flashlight or lantern", "Cooking equipment", "Food and beverages", "Cooler with ice"];
const recommended = ["Camp chairs", "Bug spray", "Sunscreen", "Hiking boots", "Swimwear", "Camera", "Books and games"];

export const metadata: Metadata = {
    title: "Cabins & Yurts",
    description: "Cozy log cabins and yurts at Crawford Notch Campground along the Saco River in New Hampshire's White Mountains. Comfortable family lodging in the woods.",
};

export default function Cabins() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Page title */}
                <Section variant="dark" className="py-20 md:py-24">
                    <div className="text-center">
                        <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Accommodations</p>
                        <h1 className="text-cream">Cabins &amp; Yurts</h1>
                        <p className="text-cream/80 text-xl mt-3 font-display italic">Rustic comfort in the wilderness</p>
                    </div>
                </Section>

                {/* Intro */}
                <Section variant="default">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg md:text-xl text-foreground">
                            Experience the perfect blend of rustic charm and comfort in our log cabins and yurts. Nestled among the trees with the sounds of the Saco River nearby, our accommodations provide a unique opportunity to connect with nature without sacrificing comfort.
                        </p>
                    </div>
                </Section>

                {/* Options */}
                <Section variant="brand">
                    <div className="text-center mb-14">
                        <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Choose Your Stay</p>
                        <h2 className="text-cream">Our Accommodation Options</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                        <Card variant="inset" className="p-8">
                            <Icon name="cabin" className="w-12 h-12 text-ochre mb-5" />
                            <h3 className="text-cream mb-4">Rustic Log Cabins</h3>
                            <p className="text-cream/90 mb-6">
                                Our authentic log cabins offer a true New Hampshire camping experience. Built from local timber, these cabins provide shelter and authentic rustic charm.
                            </p>
                            <div className="bg-bark-brown-dark/30 border border-cream/10 p-6 rounded-sm">
                                <h4 className="text-ochre mb-4">Features</h4>
                                <ul className="space-y-3 list-none p-0">
                                    {["Sleeps 4–6 guests", "Electricity available in select cabins", "Outdoor fire ring & picnic table", "Near bathhouse facilities", "Bring your own linens"].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-cream/90">
                                            <svg className="w-5 h-5 text-ochre flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>

                        <Card variant="inset" className="p-8">
                            <Icon name="yurt" className="w-12 h-12 text-ochre mb-5" />
                            <h3 className="text-cream mb-4">Yurts</h3>
                            <p className="text-cream/90 mb-6">
                                Try something different with our spacious yurts. These unique accommodations offer a glamping experience that combines outdoor adventure with comfort.
                            </p>
                            <div className="bg-bark-brown-dark/30 border border-cream/10 p-6 rounded-sm">
                                <h4 className="text-ochre mb-4">Features</h4>
                                <ul className="space-y-3 list-none p-0">
                                    {["Circular design with high ceilings", "Sleeps 4–6 guests", "Skylight for stargazing", "Outdoor cooking area", "Fire ring & picnic table", "Bring your own linens"].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-cream/90">
                                            <svg className="w-5 h-5 text-ochre flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </div>
                </Section>

                {/* Packing list */}
                <Section variant="light">
                    <div className="text-center mb-14">
                        <p className="text-rust text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Be Prepared</p>
                        <h2 className="text-bark-brown-dark">Packing List</h2>
                        <div className="h-px w-12 bg-rust mx-auto mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                        <Card className="border-t-2 border-t-forest-green">
                            <h3 className="text-forest-green text-center mb-7 uppercase tracking-wide text-lg">Essentials</h3>
                            <ul className="space-y-3.5 text-foreground list-none p-0">
                                {essentials.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center rounded-sm bg-forest-green-light flex-shrink-0">
                                            <svg className="w-4 h-4 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card className="border-t-2 border-t-rust">
                            <h3 className="text-rust text-center mb-7 uppercase tracking-wide text-lg">Recommended</h3>
                            <ul className="space-y-3.5 text-foreground list-none p-0">
                                {recommended.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center rounded-sm bg-rust/12 flex-shrink-0">
                                            <svg className="w-4 h-4 text-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Section>

                {/* Note */}
                <Section variant="burgundy">
                    <div className="max-w-3xl mx-auto text-center space-y-5">
                        <div className="inline-flex items-center gap-2 border border-cream/30 px-4 py-1.5 rounded-sm text-sm font-medium tracking-wide">
                            <svg className="w-5 h-5 text-ochre" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Important Note
                        </div>
                        <p className="text-cream/90 text-xl max-w-2xl mx-auto">
                            Our cabins and yurts are rustic accommodations without running water or indoor plumbing. Complete bathhouse facilities with hot showers are conveniently located nearby. This is camping, after all.
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
