import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Cabins() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <Section variant="dark" className="py-20 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="text-center relative z-10">
                        <p style={{ color: '#ffffff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Accommodations</p>
                        <h1 style={{ color: '#ffffff' }} className="text-5xl md:text-6xl font-playfair mb-5 font-bold">
                            Cabins &amp; Yurts
                        </h1>
                        <p style={{ color: '#ffffff' }} className="text-2xl font-lora italic">Rustic comfort in the wilderness</p>
                    </div>
                </Section>

                {/* Introduction */}
                <Section variant="default">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                            Experience the perfect blend of rustic charm and comfort in our log cabins and yurts. Nestled among the trees with the sounds of the Saco River nearby, our accommodations provide a unique opportunity to connect with nature without sacrificing comfort.
                        </p>
                    </div>
                </Section>

                {/* Cabin Options */}
                <Section variant="brand">
                    <div className="text-center mb-14">
                        <p style={{ color: '#ffffff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Choose Your Stay</p>
                        <h2 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-playfair mb-5 font-bold">
                            Our Accommodation Options
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Rustic Cabin */}
                        <Card className="bg-white/[0.10] backdrop-blur-sm border-none hover:bg-white/[0.16] transition-all duration-300 p-9">
                            <div className="text-6xl mb-7">🏠</div>
                            <h3 style={{ color: '#ffffff' }} className="text-3xl font-playfair mb-5 font-bold">Rustic Log Cabins</h3>
                            <p style={{ color: '#ffffff' }} className="mb-7 text-lg leading-relaxed">
                                Our authentic log cabins offer a true New Hampshire camping experience. Built from local timber, these cabins provide shelter and authentic rustic charm.
                            </p>
                            <div className="bg-black/20 p-7 rounded-xl">
                                <h4 style={{ color: '#ffffff' }} className="font-bold mb-5 uppercase tracking-wider text-sm">Features</h4>
                                <ul className="space-y-3 list-none p-0">
                                    {["Sleeps 4-6 guests", "Electricity available in select cabins", "Outdoor fire ring & picnic table", "Near bathhouse facilities", "Bring your own linens"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3" style={{ color: '#ffffff' }}>
                                            <svg className="w-5 h-5 text-tan-beige flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>

                        {/* Yurts */}
                        <Card className="bg-white/[0.10] backdrop-blur-sm border-none hover:bg-white/[0.16] transition-all duration-300 p-9">
                            <div className="text-6xl mb-7">⛺</div>
                            <h3 style={{ color: '#ffffff' }} className="text-3xl font-playfair mb-5 font-bold">Yurts</h3>
                            <p style={{ color: '#ffffff' }} className="mb-7 text-lg leading-relaxed">
                                Try something different with our spacious yurts! These unique accommodations offer a glamping experience that combines outdoor adventure with comfort.
                            </p>
                            <div className="bg-black/20 p-7 rounded-xl">
                                <h4 style={{ color: '#ffffff' }} className="font-bold mb-5 uppercase tracking-wider text-sm">Features</h4>
                                <ul className="space-y-3 list-none p-0">
                                    {["Circular design with high ceilings", "Sleeps 4-6 guests", "Skylight for stargazing", "Outdoor cooking area", "Fire ring & picnic table", "Bring your own linens"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3" style={{ color: '#ffffff' }}>
                                            <svg className="w-5 h-5 text-tan-beige flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </div>
                </Section>

                {/* What to Bring */}
                <Section variant="light">
                    <div className="text-center mb-14">
                        <p className="text-forest-green text-base uppercase tracking-[0.2em] mb-4 font-bold">Be Prepared</p>
                        <h2 className="text-4xl md:text-5xl font-playfair mb-5 text-bark-brown-dark font-bold">
                            Packing List
                        </h2>
                        <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card variant="default" className="bg-white border-t-4 border-forest-green">
                            <h3 className="text-xl font-bold text-forest-green mb-7 uppercase tracking-wider text-center">Essentials</h3>
                            <ul className="space-y-4 text-foreground list-none p-0">
                                {[
                                    "Sleeping bags or bedding", "Pillows", "Towels", "Flashlight or lantern", "Cooking equipment", "Food and beverages", "Cooler with ice"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-forest-green/10 flex-shrink-0">
                                            <svg className="w-4 h-4 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card variant="default" className="bg-white border-t-4 border-bark-brown">
                            <h3 className="text-xl font-bold text-bark-brown mb-7 uppercase tracking-wider text-center">Recommended</h3>
                            <ul className="space-y-4 text-foreground list-none p-0">
                                {[
                                    "Camp chairs", "Bug spray", "Sunscreen", "Hiking boots", "Swimwear", "Camera", "Books and games"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-bark-brown/10 flex-shrink-0">
                                            <svg className="w-4 h-4 text-bark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                        </span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Section>

                {/* Note */}
                <Section className="bg-deep-burgundy">
                    <div className="max-w-3xl mx-auto text-center space-y-5">
                        <div className="inline-flex items-center gap-2 bg-white/15 px-5 py-2 rounded-full text-base font-bold tracking-wide mb-2" style={{ color: '#ffffff' }}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Important Note
                        </div>
                        <p style={{ color: '#ffffff' }} className="text-xl leading-relaxed max-w-2xl mx-auto">
                            Our cabins and yurts are rustic accommodations without running water or indoor plumbing. Complete bathhouse facilities with hot showers are conveniently located nearby. This is camping, after all!
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
