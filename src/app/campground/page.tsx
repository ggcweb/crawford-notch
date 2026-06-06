import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icon, type IconName } from '@/components/ui/Icon';

const siteTypes: { icon: IconName; title: string; features: string[] }[] = [
    { icon: "tent", title: "Tent Sites", features: ["Secluded, wooded locations", "Fire ring and picnic table", "Access to bathhouse facilities", "Close to river access"] },
    { icon: "rv", title: "RV Sites", features: ["Water and electric hookups available", "Various site sizes", "Pull-through and back-in options", "Fire ring and picnic table"] },
    { icon: "cabin", title: "Cabins", features: ["Rustic log cabin experience", "Various sizes available", "Some with electricity", "Outdoor fire ring and picnic table"] },
    { icon: "yurt", title: "Yurts", features: ["Unique glamping experience", "Comfortable and spacious", "Perfect for families", "Outdoor cooking area"] },
];

const amenities: { icon: IconName; title: string; desc: string }[] = [
    { icon: "shower", title: "Modern Bathhouse", desc: "Clean restrooms with hot showers" },
    { icon: "store", title: "General Store", desc: "Camping supplies, snacks, and essentials" },
    { icon: "firewood", title: "Firewood", desc: "Available for purchase at the store" },
    { icon: "tap", title: "Potable Water", desc: "Fresh water spigots throughout" },
    { icon: "trash", title: "Trash Service", desc: "Convenient disposal stations" },
    { icon: "paw", title: "Pet Friendly", desc: "Leashed pets welcome" },
];

const features: { icon: IconName; title: string; desc: string }[] = [
    { icon: "mountain", title: "Mountain Views", desc: "Wake up to stunning views of the White Mountains. Crawford Notch offers some of the most spectacular scenery in New England." },
    { icon: "water", title: "Saco River Access", desc: "Enjoy direct access to the Saco River for swimming, fishing, and tubing. The perfect way to cool off on a summer day." },
    { icon: "pine", title: "Wooded Privacy", desc: "Our 100-acre property provides natural privacy between sites, giving you a true wilderness camping experience." },
    { icon: "binoculars", title: "Wildlife", desc: "Keep your eyes open for moose, deer, and a variety of bird species that call this beautiful area home." },
];

export const metadata: Metadata = {
    title: "Campground",
    description: "Secluded wooded and riverside campsites at Crawford Notch Campground in the White Mountains of New Hampshire. Tent and RV camping along the Saco River.",
};

export default function Campground() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Page title */}
                <Section variant="brand" className="py-20 md:py-24">
                    <div className="text-center">
                        <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Discover</p>
                        <h1 className="text-cream">Our Campground</h1>
                        <div className="h-px w-12 bg-ochre mx-auto mt-6" />
                    </div>
                </Section>

                {/* Description */}
                <Section variant="default">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <p className="text-lg md:text-xl text-foreground">
                            Crawford Notch Campground offers 100 wooded campsites nestled along the banks of the scenic Saco River in the heart of the White Mountains. Our family-owned campground provides a peaceful retreat where you can reconnect with nature and enjoy the stunning beauty of New Hampshire&apos;s mountain landscape.
                        </p>
                        <p className="text-lg md:text-xl text-foreground">
                            Each campsite is designed to provide privacy and a true wilderness experience, while still offering the amenities you need for a comfortable stay. Whether you&apos;re tent camping, bringing your RV, or looking for a cozy cabin, we have options to suit every camping style.
                        </p>
                        <div className="pt-4">
                            <Button href="/campground-map" variant="outline" size="lg">View Interactive Map</Button>
                        </div>
                    </div>
                </Section>

                {/* Site types */}
                <Section variant="dark">
                    <div className="text-center mb-14">
                        <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Choose Your Style</p>
                        <h2 className="text-cream">Our Campsite Options</h2>
                        <p className="text-cream/80 text-lg mt-3">Choose the perfect spot for your adventure</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                        {siteTypes.map((type) => (
                            <Card key={type.title} variant="inset" className="p-8">
                                <h3 className="text-cream flex items-center gap-4 mb-6">
                                    <Icon name={type.icon} className="w-9 h-9 text-ochre flex-shrink-0" /> {type.title}
                                </h3>
                                <ul className="list-none space-y-3 p-0">
                                    {type.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-cream/90">
                                            <svg className="w-5 h-5 text-ochre flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span>{feature}</span>
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
                        <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">For Your Comfort</p>
                        <h2 className="text-cream">Campground Amenities</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {amenities.map((item) => (
                            <div key={item.title} className="flex flex-col items-center text-center p-7 border border-cream/15 rounded-sm hover:border-ochre/50 transition-colors">
                                <Icon name={item.icon} className="w-9 h-9 mb-4 text-ochre" />
                                <h3 className="text-cream text-lg mb-2">{item.title}</h3>
                                <p className="text-cream/85 text-[0.95rem]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Natural features */}
                <Section variant="light">
                    <div className="text-center mb-14">
                        <p className="text-rust text-sm uppercase tracking-[0.2em] mb-4 font-semibold">The Setting</p>
                        <h2 className="text-bark-brown-dark">Experience Nature at Its Best</h2>
                        <div className="h-px w-12 bg-rust mx-auto mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                        {features.map((item) => (
                            <Card key={item.title} className="p-8">
                                <h3 className="text-forest-green flex items-center gap-4 mb-4">
                                    <span className="w-12 h-12 flex items-center justify-center bg-forest-green-light rounded-sm flex-shrink-0">
                                        <Icon name={item.icon} className="w-7 h-7" />
                                    </span>
                                    {item.title}
                                </h3>
                                <p className="text-foreground">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
