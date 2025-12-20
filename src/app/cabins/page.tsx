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
                <Section variant="dark" className="py-20 relative overflow-hidden">
                    {/* Pattern Background */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="text-center relative z-10">
                        <h1 style={{ color: "white" }} className="text-4xl md:text-5xl font-playfair mb-4 text-white">
                            Cabins &amp; Yurts
                        </h1>
                        <p className="text-xl text-white/80">Rustic comfort in the wilderness</p>
                    </div>
                </Section>

                {/* Introduction */}
                <Section variant="default">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-bark-brown-dark leading-relaxed font-medium">
                            Experience the perfect blend of rustic charm and comfort in our log cabins and yurts. Nestled among the trees with the sounds of the Saco River nearby, our accommodations provide a unique opportunity to connect with nature without sacrificing comfort.
                        </p>
                    </div>
                </Section>

                {/* Cabin Options */}
                <Section variant="brand">
                    <div className="text-center mb-12">
                        <h2 style={{ color: "white" }} className="text-3xl md:text-4xl font-playfair mb-4 text-white">
                            Our Accommodation Options
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Rustic Cabin */}
                        <Card className="bg-white/10 text-white backdrop-blur-sm border-none hover:bg-white/20 p-8">
                            <div className="text-5xl mb-6">🏠</div>
                            <h3 className="text-3xl font-playfair mb-4">Rustic Log Cabins</h3>
                            <p className="mb-6 opacity-90 text-lg leading-relaxed">
                                Our authentic log cabins offer a true New Hampshire camping experience. Built from local timber, these cabins provide shelter and authentic rustic charm.
                            </p>
                            <div className="bg-black/20 p-6 rounded-lg">
                                <h4 className="font-bold mb-4 uppercase tracking-wide text-sm opacity-80">Features</h4>
                                <ul className="list-disc pl-5 space-y-2 opacity-90">
                                    <li>Sleeps 4-6 guests</li>
                                    <li>Electricity available in select cabins</li>
                                    <li>Outdoor fire ring & picnic table</li>
                                    <li>Near bathhouse facilities</li>
                                    <li>Bring your own linens</li>
                                </ul>
                            </div>
                        </Card>

                        {/* Yurts */}
                        <Card className="bg-white/10 text-white backdrop-blur-sm border-none hover:bg-white/20 p-8">
                            <div className="text-5xl mb-6">⛺</div>
                            <h3 className="text-3xl font-playfair mb-4">Yurts</h3>
                            <p className="mb-6 opacity-90 text-lg leading-relaxed">
                                Try something different with our spacious yurts! These unique accommodations offer a glamping experience that combines outdoor adventure with comfort.
                            </p>
                            <div className="bg-black/20 p-6 rounded-lg">
                                <h4 className="font-bold mb-4 uppercase tracking-wide text-sm opacity-80">Features</h4>
                                <ul className="list-disc pl-5 space-y-2 opacity-90">
                                    <li>Circular design with high ceilings</li>
                                    <li>Sleeps 4-6 guests</li>
                                    <li>Skylight for stargazing</li>
                                    <li>Outdoor cooking area</li>
                                    <li>Fire ring & picnic table</li>
                                    <li>Bring your own linens</li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </Section>

                {/* What to Bring */}
                <Section variant="light">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-bark-brown-dark">
                            Packing List
                        </h2>
                        <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card variant="default" className="bg-white border-t-4 border-forest-green">
                            <h3 className="text-xl font-bold text-forest-green mb-6 uppercase tracking-wider text-center">Essentials</h3>
                            <ul className="space-y-3 text-bark-brown-dark list-none">
                                {[
                                    "Sleeping bags or bedding", "Pillows", "Towels", "Flashlight or lantern", "Cooking equipment", "Food and beverages", "Cooler with ice"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-forest-green font-bold">✓</span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card variant="default" className="bg-white border-t-4 border-bark-brown">
                            <h3 className="text-xl font-bold text-bark-brown mb-6 uppercase tracking-wider text-center">Recommended</h3>
                            <ul className="space-y-3 text-bark-brown-dark list-none">
                                {[
                                    "Camp chairs", "Bug spray", "Sunscreen", "Hiking boots", "Swimwear", "Camera", "Books and games"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-bark-brown font-bold">✓</span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Section>

                {/* Note */}
                <Section className="bg-deep-burgundy text-white">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <h3 className="text-2xl font-playfair">Important Note</h3>
                        <p className="text-bark-brown text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
                            Our cabins and yurts are rustic accommodations without running water or indoor plumbing. Complete bathhouse facilities with hot showers are conveniently located nearby. This is camping, after all!
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
