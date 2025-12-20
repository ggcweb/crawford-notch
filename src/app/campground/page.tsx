import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Campground() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <Section variant="brand" className="py-20">
                    <div className="text-center">
                        <h1 style={{ color: "white" }} className="text-4xl md:text-5xl font-playfair mb-4">
                            Our Campground
                        </h1>
                        <div className="h-1 w-20 bg-white/50 mx-auto rounded-full" />
                    </div>
                </Section>

                {/* Description Section */}
                <Section variant="default">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <p className="text-lg md:text-xl text-bark-brown-dark leading-relaxed">
                            Crawford Notch Campground offers 100 wooded campsites nestled along the banks of the scenic Saco River in the heart of the White Mountains. Our family-owned campground provides a peaceful retreat where you can reconnect with nature and enjoy the stunning beauty of New Hampshire&apos;s mountain landscape.
                        </p>
                        <p className="text-lg md:text-xl text-bark-brown-dark leading-relaxed">
                            Each campsite is designed to provide privacy and a true wilderness experience, while still offering the amenities you need for a comfortable stay. Whether you&apos;re tent camping, bringing your RV, or looking for a cozy cabin, we have options to suit every camping style.
                        </p>
                    </div>
                </Section>

                {/* Site Types */}
                <Section variant="dark">
                    <div className="text-center mb-12">
                        <h2 style={{ color: "white" }} className="text-3xl md:text-4xl font-playfair mb-4 text-tan-beige">
                            Our Campsite Options
                        </h2>
                        <p className="text-white/80">Choose the perfect spot for your adventure</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-white/10 text-white backdrop-blur-sm border-none hover:bg-white/20">
                            <h3 style={{ color: "white" }} className="text-2xl font-playfair mb-4 flex items-center gap-3">
                                <span>🏕️</span> Tent Sites
                            </h3>
                            <ul className="list-disc pl-5 space-y-3 opacity-90 text-lg">
                                <li>Secluded, wooded locations</li>
                                <li>Fire ring and picnic table</li>
                                <li>Access to bathhouse facilities</li>
                                <li>Close to river access</li>
                            </ul>
                        </Card>

                        <Card className="bg-white/10 text-white backdrop-blur-sm border-none hover:bg-white/20">
                            <h3 style={{ color: "white" }} className="text-2xl font-playfair mb-4 flex items-center gap-3">
                                <span>🚐</span> RV Sites
                            </h3>
                            <ul className="list-disc pl-5 space-y-3 opacity-90 text-lg">
                                <li>Water and electric hookups available</li>
                                <li>Various site sizes</li>
                                <li>Pull-through and back-in options</li>
                                <li>Fire ring and picnic table</li>
                            </ul>
                        </Card>

                        <Card className="bg-white/10 text-white backdrop-blur-sm border-none hover:bg-white/20">
                            <h3 style={{ color: "white" }} className="text-2xl font-playfair mb-4 flex items-center gap-3">
                                <span>🏠</span> Cabins
                            </h3>
                            <ul className="list-disc pl-5 space-y-3 opacity-90 text-lg">
                                <li>Rustic log cabin experience</li>
                                <li>Various sizes available</li>
                                <li>Some with electricity</li>
                                <li>Outdoor fire ring and picnic table</li>
                            </ul>
                        </Card>

                        <Card className="bg-white/10 text-white backdrop-blur-sm border-none hover:bg-white/20">
                            <h3 style={{ color: "white" }} className="text-2xl font-playfair mb-4 flex items-center gap-3">
                                <span>⛺</span> Yurts
                            </h3>
                            <ul className="list-disc pl-5 space-y-3 opacity-90 text-lg">
                                <li>Unique glamping experience</li>
                                <li>Comfortable and spacious</li>
                                <li>Perfect for families</li>
                                <li>Outdoor cooking area</li>
                            </ul>
                        </Card>
                    </div>
                </Section>

                {/* Amenities */}
                <Section variant="brand">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-white">
                            Campground Amenities
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "🚿", title: "Modern Bathhouse", desc: "Clean restrooms with hot showers" },
                            { icon: "🏪", title: "General Store", desc: "Camping supplies, snacks, and essentials" },
                            { icon: "🔥", title: "Firewood", desc: "Available for purchase at the store" },
                            { icon: "🚰", title: "Potable Water", desc: "Fresh water spigots throughout" },
                            { icon: "🗑️", title: "Trash Service", desc: "Convenient disposal stations" },
                            { icon: "🐕", title: "Pet Friendly", desc: "Leashed pets welcome" },
                        ].map((item, i) => (
                            <Card key={i} className="bg-white/10 border-transparent hover:bg-white/20 text-center text-white backdrop-blur-sm">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                <p className="opacity-90">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Natural Features */}
                <Section variant="light">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-bark-brown-dark">
                            Experience Nature at Its Best
                        </h2>
                        <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card variant="default" className="hover:shadow-lg transition-shadow bg-white p-8">
                            <h3 className="text-2xl font-playfair font-semibold mb-4 text-forest-green">🏔️ Mountain Views</h3>
                            <p className="text-bark-brown-dark leading-relaxed">
                                Wake up to stunning views of the White Mountains. Crawford Notch offers some of the most spectacular scenery in New England.
                            </p>
                        </Card>
                        <Card variant="default" className="hover:shadow-lg transition-shadow bg-white p-8">
                            <h3 className="text-2xl font-playfair font-semibold mb-4 text-forest-green">🌊 Saco River Access</h3>
                            <p className="text-bark-brown-dark leading-relaxed">
                                Enjoy direct access to the Saco River for swimming, fishing, and tubing. The perfect way to cool off on a summer day.
                            </p>
                        </Card>
                        <Card variant="default" className="hover:shadow-lg transition-shadow bg-white p-8">
                            <h3 className="text-2xl font-playfair font-semibold mb-4 text-forest-green">🌲 Wooded Privacy</h3>
                            <p className="text-bark-brown-dark leading-relaxed">
                                Our 100-acre property provides natural privacy between sites, giving you a true wilderness camping experience.
                            </p>
                        </Card>
                        <Card variant="default" className="hover:shadow-lg transition-shadow bg-white p-8">
                            <h3 className="text-2xl font-playfair font-semibold mb-4 text-forest-green">🦌 Wildlife</h3>
                            <p className="text-bark-brown-dark leading-relaxed">
                                Keep your eyes open for moose, deer, and a variety of bird species that call this beautiful area home.
                            </p>
                        </Card>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
