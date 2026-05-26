import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Campground() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <Section variant="brand" className="py-20 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="text-center relative z-10">
                        <p style={{ color: '#ffffff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Discover</p>
                        <h1 style={{ color: '#ffffff' }} className="text-5xl md:text-6xl font-playfair mb-5 font-bold">
                            Our Campground
                        </h1>
                        <div className="h-1 w-20 bg-white/50 mx-auto rounded-full" />
                    </div>
                </Section>

                {/* Description Section */}
                <Section variant="default">
                    <div className="max-w-4xl mx-auto text-center space-y-7">
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                            Crawford Notch Campground offers 100 wooded campsites nestled along the banks of the scenic Saco River in the heart of the White Mountains. Our family-owned campground provides a peaceful retreat where you can reconnect with nature and enjoy the stunning beauty of New Hampshire&apos;s mountain landscape.
                        </p>
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                            Each campsite is designed to provide privacy and a true wilderness experience, while still offering the amenities you need for a comfortable stay. Whether you&apos;re tent camping, bringing your RV, or looking for a cozy cabin, we have options to suit every camping style.
                        </p>
                        <div className="pt-5">
                            <Button href="/campground-map" variant="outline" size="lg">View Interactive Map</Button>
                        </div>
                    </div>
                </Section>

                {/* Site Types */}
                <Section variant="dark">
                    <div className="text-center mb-14">
                        <p style={{ color: '#ffffff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Choose Your Style</p>
                        <h2 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-playfair mb-5 font-bold">
                            Our Campsite Options
                        </h2>
                        <p style={{ color: '#ffffff' }} className="text-xl">Choose the perfect spot for your adventure</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: "🏕️", title: "Tent Sites", features: ["Secluded, wooded locations", "Fire ring and picnic table", "Access to bathhouse facilities", "Close to river access"] },
                            { icon: "🚐", title: "RV Sites", features: ["Water and electric hookups available", "Various site sizes", "Pull-through and back-in options", "Fire ring and picnic table"] },
                            { icon: "🏠", title: "Cabins", features: ["Rustic log cabin experience", "Various sizes available", "Some with electricity", "Outdoor fire ring and picnic table"] },
                            { icon: "⛺", title: "Yurts", features: ["Unique glamping experience", "Comfortable and spacious", "Perfect for families", "Outdoor cooking area"] },
                        ].map((type, i) => (
                            <Card key={i} className="bg-white/[0.10] backdrop-blur-sm border-none hover:bg-white/[0.16] transition-all duration-300 p-9">
                                <h3 style={{ color: '#ffffff' }} className="text-3xl font-playfair mb-6 flex items-center gap-4 font-bold">
                                    <span className="text-4xl">{type.icon}</span> {type.title}
                                </h3>
                                <ul className="list-none space-y-3.5 p-0">
                                    {type.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3" style={{ color: '#ffffff' }}>
                                            <svg className="w-5 h-5 text-tan-beige flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Amenities */}
                <Section variant="brand">
                    <div className="text-center mb-14">
                        <p style={{ color: '#ffffff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">For Your Comfort</p>
                        <h2 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-playfair mb-5 font-bold">
                            Campground Amenities
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-7">
                        {[
                            { icon: "🚿", title: "Modern Bathhouse", desc: "Clean restrooms with hot showers" },
                            { icon: "🏪", title: "General Store", desc: "Camping supplies, snacks, and essentials" },
                            { icon: "🔥", title: "Firewood", desc: "Available for purchase at the store" },
                            { icon: "🚰", title: "Potable Water", desc: "Fresh water spigots throughout" },
                            { icon: "🗑️", title: "Trash Service", desc: "Convenient disposal stations" },
                            { icon: "🐕", title: "Pet Friendly", desc: "Leashed pets welcome" },
                        ].map((item, i) => (
                            <Card key={i} className="bg-white/[0.10] border-transparent hover:bg-white/[0.16] text-center backdrop-blur-sm transition-all duration-300 group">
                                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 style={{ color: '#ffffff' }} className="font-bold text-xl mb-3">{item.title}</h3>
                                <p style={{ color: '#ffffff' }} className="text-lg">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Natural Features */}
                <Section variant="light">
                    <div className="text-center mb-14">
                        <p className="text-forest-green text-base uppercase tracking-[0.2em] mb-4 font-bold">The Setting</p>
                        <h2 className="text-4xl md:text-5xl font-playfair mb-5 text-bark-brown-dark font-bold">
                            Experience Nature at Its Best
                        </h2>
                        <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: "🏔️", title: "Mountain Views", desc: "Wake up to stunning views of the White Mountains. Crawford Notch offers some of the most spectacular scenery in New England." },
                            { icon: "🌊", title: "Saco River Access", desc: "Enjoy direct access to the Saco River for swimming, fishing, and tubing. The perfect way to cool off on a summer day." },
                            { icon: "🌲", title: "Wooded Privacy", desc: "Our 100-acre property provides natural privacy between sites, giving you a true wilderness camping experience." },
                            { icon: "🦌", title: "Wildlife", desc: "Keep your eyes open for moose, deer, and a variety of bird species that call this beautiful area home." },
                        ].map((item, i) => (
                            <Card key={i} variant="default" className="bg-white p-9 group">
                                <h3 className="text-2xl font-playfair font-bold mb-5 text-forest-green flex items-center gap-4">
                                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span> {item.title}
                                </h3>
                                <p className="text-lg text-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
