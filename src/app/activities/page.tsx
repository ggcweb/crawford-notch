import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon, type IconName } from '@/components/ui/Icon';

const onSite: { icon: IconName; title: string; desc: string }[] = [
    { icon: "water", title: "River Swimming", desc: "Cool off in the crystal-clear waters of the Saco River, right at our doorstep." },
    { icon: "tube", title: "River Tubing", desc: "Float lazily down the gentle Saco River. Please bring your own tube — we provide river access only, not tubes or equipment." },
    { icon: "fish", title: "Fishing", desc: "Try your luck catching trout and other fish in the river. A valid New Hampshire fishing license is required — we do not sell or provide licenses." },
    { icon: "boot", title: "Hiking", desc: "Access trails directly from the campground or drive to nearby trailheads." },
    { icon: "binoculars", title: "Wildlife Watching", desc: "Spot moose, deer, eagles, and more in their natural habitat." },
    { icon: "star", title: "Stargazing", desc: "Enjoy incredible night skies far from city lights. No light pollution here." },
];

const trails = [
    { name: "Mount Willard Trail", difficulty: "Moderate · 3.2 miles", desc: "One of the most rewarding hikes for the effort. Stunning views from the summit overlooking Crawford Notch." },
    { name: "Arethusa Falls Trail", difficulty: "Moderate · 2.6 miles", desc: "Hike to New Hampshire's highest waterfall, a spectacular 200-foot cascade." },
    { name: "Mount Crawford Trail", difficulty: "Moderate–Strenuous · 5 miles", desc: "360-degree views from the summit make this challenging hike worthwhile." },
    { name: "Zealand Falls Trail", difficulty: "Easy–Moderate · 5.6 miles", desc: "Beautiful waterfall hike with an AMC hut at the destination. Great family hike." },
];

const attractions: { icon: IconName; title: string; desc: string }[] = [
    { icon: "train", title: "Conway Scenic Railroad", desc: "Take a scenic train ride through the mountains. Various routes available including the famous Crawford Notch route." },
    { icon: "mountain", title: "Mount Washington", desc: "Visit the highest peak in the Northeast. Drive the Auto Road or take the Cog Railway to the summit." },
    { icon: "bag", title: "North Conway Shopping", desc: "Tax-free outlet shopping, local boutiques, and restaurants just 15 miles away." },
    { icon: "gondola", title: "Wildcat Mountain Gondola", desc: "Ride the gondola for spectacular views of the Presidential Range and Tuckerman Ravine." },
    { icon: "bridge", title: "Covered Bridges", desc: "Explore historic covered bridges throughout the region, perfect for photography." },
    { icon: "droplet", title: "Flume Gorge", desc: "Walk through this natural granite gorge in Franconia Notch State Park." },
];

export const metadata: Metadata = {
    title: "Activities",
    description: "Hiking, swimming in the Saco River, fishing, and family fun at Crawford Notch Campground in New Hampshire's White Mountains. Discover things to do nearby.",
};

export default function Activities() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Section variant="brand" className="py-20 md:py-24 text-center">
                    <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Things To Do</p>
                    <h1 className="text-cream">Activities &amp; Attractions</h1>
                    <p className="text-cream/85 text-lg mt-3">Endless adventures in the White Mountains</p>
                </Section>

                <Section variant="default">
                    <div className="text-center mb-14">
                        <p className="text-rust text-sm uppercase tracking-[0.2em] mb-4 font-semibold">On Property</p>
                        <h2 className="text-bark-brown-dark">On-Site Activities</h2>
                        <div className="h-px w-12 bg-rust mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {onSite.map((a) => (
                            <Card key={a.title} className="text-center flex flex-col items-center p-8">
                                <span className="w-14 h-14 flex items-center justify-center bg-forest-green-light text-forest-green rounded-sm mb-5">
                                    <Icon name={a.icon} className="w-7 h-7" />
                                </span>
                                <h3 className="text-bark-brown-dark text-xl mb-3">{a.title}</h3>
                                <p className="text-foreground">{a.desc}</p>
                            </Card>
                        ))}
                    </div>
                    <p className="text-center text-muted italic mt-10 max-w-2xl mx-auto">
                        Please note: we provide river access only. We do not rent or provide tubes, fishing licenses, or other equipment — bring your own gear for activities on the water.
                    </p>
                </Section>

                <Section variant="dark">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-14">
                            <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Explore</p>
                            <h2 className="text-cream">Nearby Hiking Trails</h2>
                            <p className="text-cream/80 text-lg mt-3">From easy walks to challenging climbs</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-7">
                            {trails.map((trail) => (
                                <Card key={trail.name} variant="inset" className="p-8">
                                    <div className="flex items-start gap-3 mb-3">
                                        <Icon name="boot" className="w-6 h-6 text-ochre flex-shrink-0 mt-1" />
                                        <h3 className="text-cream">{trail.name}</h3>
                                    </div>
                                    <p className="text-ochre text-sm font-semibold tracking-wide uppercase mb-4">{trail.difficulty}</p>
                                    <p className="text-cream/90">{trail.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>

                <Section variant="light">
                    <div className="text-center mb-14">
                        <p className="text-rust text-sm uppercase tracking-[0.2em] mb-4 font-semibold">Nearby</p>
                        <h2 className="text-bark-brown-dark">Area Attractions</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
                        {attractions.map((a) => (
                            <div key={a.title} className="flex gap-5 items-start p-5 rounded-sm hover:bg-tan-beige-light transition-colors">
                                <span className="w-12 h-12 flex items-center justify-center bg-forest-green-light text-forest-green rounded-sm flex-shrink-0">
                                    <Icon name={a.icon} className="w-6 h-6" />
                                </span>
                                <div>
                                    <h3 className="text-bark-brown-dark text-xl mb-1">{a.title}</h3>
                                    <p className="text-foreground">{a.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section variant="burgundy" className="text-center py-20 md:py-24">
                    <div className="max-w-2xl mx-auto">
                        <Icon name="no-signal" className="w-12 h-12 mx-auto mb-6 text-ochre" />
                        <h2 className="text-cream">A Chance to Disconnect</h2>
                        <p className="text-cream/90 text-xl mt-5">No Wi-Fi available, and cell service is four miles down the road.</p>
                        <p className="text-ochre text-lg mt-4 italic font-display">Embrace the opportunity to truly unplug and connect with nature and family.</p>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
