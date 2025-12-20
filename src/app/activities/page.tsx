import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function Activities() {
    return (
        <div className="min-h-screen flex flex-col font-lora">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <Section variant="brand" className="py-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 style={{ color: "white" }} className="text-4xl md:text-5xl font-playfair mb-4 text-white">
                            Activities &amp; Attractions
                        </h1>
                        <p className="opacity-90 text-xl font-light">Endless adventures in the White Mountains</p>
                    </div>
                </Section>

                {/* On-Site Activities */}
                <Section variant="default">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-playfair text-bark-brown-dark mb-4">
                            On-Site Activities
                        </h2>
                        <div className="h-1 w-20 bg-forest-green mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: "🏊", title: "River Swimming", desc: "Cool off in the crystal-clear waters of the Saco River, right at our doorstep." },
                            { icon: "🛟", title: "River Tubing", desc: "Float lazily down the gentle Saco River on a relaxing tube ride." },
                            { icon: "🎣", title: "Fishing", desc: "Try your luck catching trout and other fish in the river. License required." },
                            { icon: "🥾", title: "Hiking", desc: "Access trails directly from the campground or drive to nearby trailheads." },
                            { icon: "🦌", title: "Wildlife Watching", desc: "Spot moose, deer, eagles, and more in their natural habitat." },
                            { icon: "⭐", title: "Stargazing", desc: "Enjoy incredible night skies far from city lights. No light pollution here!" }
                        ].map((activity, i) => (
                            <Card key={i} className="text-center hover:bg-tan-beige-light transition-colors group p-8">
                                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{activity.icon}</div>
                                <h3 className="text-2xl font-playfair font-semibold text-bark-brown-dark mb-3">{activity.title}</h3>
                                <p className="text-bark-brown-dark opacity-80 leading-relaxed text-lg">
                                    {activity.desc}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Hiking Trails */}
                <Section variant="dark" className="relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 style={{ color: "white" }} className="text-3xl md:text-4xl font-playfair mb-4 text-tan-beige">
                                Nearby Hiking Trails
                            </h2>
                            <p className="text-white/80">From easy walks to challenging climbs</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { name: "Mount Willard Trail", difficulty: "Moderate • 3.2 miles", desc: "One of the most rewarding hikes for the effort. Stunning views from the summit overlooking Crawford Notch." },
                                { name: "Arethusa Falls Trail", difficulty: "Moderate • 2.6 miles", desc: "Hike to New Hampshire's highest waterfall, a spectacular 200-foot cascade." },
                                { name: "Mount Crawford Trail", difficulty: "Moderate-Strenuous • 5 miles", desc: "360-degree views from the summit make this challenging hike worthwhile." },
                                { name: "Zealand Falls Trail", difficulty: "Easy-Moderate • 5.6 miles", desc: "Beautiful waterfall hike with an AMC hut at the destination. Great family hike." }
                            ].map((trail, i) => (
                                <Card key={i} className="bg-white/10 text-white backdrop-blur-sm border-none p-8 hover:bg-white/15 transition-colors">
                                    <h3 style={{ color: "white" }} className="text-2xl font-playfair font-semibold mb-2">{trail.name}</h3>
                                    <div className="inline-block bg-forest-green px-3 py-1 rounded text-sm font-medium mb-4 opacity-90">{trail.difficulty}</div>
                                    <p className="opacity-90 text-lg leading-relaxed">
                                        {trail.desc}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Area Attractions */}
                <Section variant="light">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-playfair text-bark-brown-dark mb-4">
                            Area Attractions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        {[
                            { icon: "🚂", title: "Conway Scenic Railroad", desc: "Take a scenic train ride through the mountains. Various routes available including the famous Crawford Notch route." },
                            { icon: "🏔️", title: "Mount Washington", desc: "Visit the highest peak in the Northeast. Drive the Auto Road or take the Cog Railway to the summit." },
                            { icon: "🛍️", title: "North Conway Shopping", desc: "Tax-free outlet shopping, local boutiques, and restaurants just 15 miles away." },
                            { icon: "🚡", title: "Wildcat Mountain Gondola", desc: "Ride the gondola for spectacular views of the Presidential Range and Tuckerman Ravine." },
                            { icon: "🌉", title: "Covered Bridges", desc: "Explore historic covered bridges throughout the region, perfect for photography." },
                            { icon: "🦫", title: "Flume Gorge", desc: "Walk through this natural granite gorge in Franconia Notch State Park." }
                        ].map((attraction, i) => (
                            <div key={i} className="flex gap-6 items-start p-4 hover:bg-white rounded-lg transition-colors">
                                <div className="text-4xl flex-shrink-0 pt-1">{attraction.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-bark-brown-dark mb-2 font-playfair">{attraction.title}</h3>
                                    <p className="text-bark-brown-dark opacity-80 leading-relaxed">
                                        {attraction.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Disconnect */}
                <Section variant="brand" className="bg-deep-burgundy text-center py-20">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-white">
                            A Chance to Disconnect
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                            📵 No Wi-Fi available and cell service is four miles down the road.
                            <br className="my-4 block" />
                            <span className="italic font-serif">Embrace the opportunity to truly unplug and connect with nature and family.</span>
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
