import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Activities() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />
            <main className="flex-1">
                <Section variant="brand" className="py-20 md:py-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="relative z-10">
                        <p style={{ color: '#fff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Things To Do</p>
                        <h1 style={{ color: '#fff' }} className="text-5xl md:text-6xl font-playfair mb-5 font-bold">Activities &amp; Attractions</h1>
                        <p style={{ color: '#fff' }} className="text-xl">Endless adventures in the White Mountains</p>
                    </div>
                </Section>

                <Section variant="default">
                    <div className="text-center mb-14">
                        <p className="text-forest-green text-base uppercase tracking-[0.2em] mb-4 font-bold">On Property</p>
                        <h2 className="text-4xl md:text-5xl font-playfair text-bark-brown-dark mb-5 font-bold">On-Site Activities</h2>
                        <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {[
                            { icon: "🏊", title: "River Swimming", desc: "Cool off in the crystal-clear waters of the Saco River, right at our doorstep." },
                            { icon: "🛟", title: "River Tubing", desc: "Float lazily down the gentle Saco River on a relaxing tube ride." },
                            { icon: "🎣", title: "Fishing", desc: "Try your luck catching trout and other fish in the river. License required." },
                            { icon: "🥾", title: "Hiking", desc: "Access trails directly from the campground or drive to nearby trailheads." },
                            { icon: "🦌", title: "Wildlife Watching", desc: "Spot moose, deer, eagles, and more in their natural habitat." },
                            { icon: "⭐", title: "Stargazing", desc: "Enjoy incredible night skies far from city lights. No light pollution here!" }
                        ].map((a, i) => (
                            <Card key={i} className="text-center bg-white group p-9">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{a.icon}</div>
                                <h3 className="text-2xl font-playfair font-bold text-bark-brown-dark mb-4">{a.title}</h3>
                                <p className="text-lg text-foreground leading-relaxed">{a.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section variant="dark" className="relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-14">
                            <p style={{ color: '#fff' }} className="text-base uppercase tracking-[0.2em] mb-4 font-bold">Explore</p>
                            <h2 style={{ color: '#fff' }} className="text-4xl md:text-5xl font-playfair mb-5 font-bold">Nearby Hiking Trails</h2>
                            <p style={{ color: '#fff' }} className="text-xl">From easy walks to challenging climbs</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { name: "Mount Willard Trail", difficulty: "Moderate • 3.2 miles", desc: "One of the most rewarding hikes for the effort. Stunning views from the summit overlooking Crawford Notch." },
                                { name: "Arethusa Falls Trail", difficulty: "Moderate • 2.6 miles", desc: "Hike to New Hampshire's highest waterfall, a spectacular 200-foot cascade." },
                                { name: "Mount Crawford Trail", difficulty: "Moderate-Strenuous • 5 miles", desc: "360-degree views from the summit make this challenging hike worthwhile." },
                                { name: "Zealand Falls Trail", difficulty: "Easy-Moderate • 5.6 miles", desc: "Beautiful waterfall hike with an AMC hut at the destination. Great family hike." }
                            ].map((trail, i) => (
                                <Card key={i} className="bg-white/[0.10] backdrop-blur-sm border-none p-9 hover:bg-white/[0.16] transition-all duration-300">
                                    <h3 style={{ color: '#fff' }} className="text-2xl font-playfair font-bold mb-3">{trail.name}</h3>
                                    <div className="inline-block bg-forest-green px-4 py-1.5 rounded-full text-sm font-bold mb-5 tracking-wide" style={{ color: '#fff' }}>{trail.difficulty}</div>
                                    <p style={{ color: '#fff' }} className="text-lg leading-relaxed">{trail.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>

                <Section variant="light">
                    <div className="text-center mb-14">
                        <p className="text-forest-green text-base uppercase tracking-[0.2em] mb-4 font-bold">Nearby</p>
                        <h2 className="text-4xl md:text-5xl font-playfair text-bark-brown-dark mb-5 font-bold">Area Attractions</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-7">
                        {[
                            { icon: "🚂", title: "Conway Scenic Railroad", desc: "Take a scenic train ride through the mountains. Various routes available including the famous Crawford Notch route." },
                            { icon: "🏔️", title: "Mount Washington", desc: "Visit the highest peak in the Northeast. Drive the Auto Road or take the Cog Railway to the summit." },
                            { icon: "🛍️", title: "North Conway Shopping", desc: "Tax-free outlet shopping, local boutiques, and restaurants just 15 miles away." },
                            { icon: "🚡", title: "Wildcat Mountain Gondola", desc: "Ride the gondola for spectacular views of the Presidential Range and Tuckerman Ravine." },
                            { icon: "🌉", title: "Covered Bridges", desc: "Explore historic covered bridges throughout the region, perfect for photography." },
                            { icon: "🦫", title: "Flume Gorge", desc: "Walk through this natural granite gorge in Franconia Notch State Park." }
                        ].map((a, i) => (
                            <div key={i} className="flex gap-5 items-start p-5 hover:bg-white rounded-xl transition-all duration-300 group">
                                <div className="text-4xl flex-shrink-0 pt-1 group-hover:scale-110 transition-transform duration-300">{a.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-bark-brown-dark mb-2 font-playfair">{a.title}</h3>
                                    <p className="text-lg text-foreground leading-relaxed">{a.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section variant="brand" className="bg-deep-burgundy text-center py-20 md:py-24">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-7xl mb-7">📵</div>
                        <h2 style={{ color: '#fff' }} className="text-4xl md:text-5xl font-playfair mb-7 font-bold">A Chance to Disconnect</h2>
                        <p style={{ color: '#fff' }} className="text-2xl leading-relaxed">No Wi-Fi available and cell service is four miles down the road.</p>
                        <p style={{ color: '#fff' }} className="text-xl mt-5 italic font-playfair">Embrace the opportunity to truly unplug and connect with nature and family.</p>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
