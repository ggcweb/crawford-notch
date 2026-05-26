import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CampgroundMapViewer from '@/components/CampgroundMapViewer';

export default function CampgroundMap() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <section className="bg-deep-burgundy text-white py-14 md:py-16 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <p className="text-white/50 text-sm uppercase tracking-[0.2em] mb-3">Interactive</p>
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "white" }}
                        >
                            Campground Map
                        </h1>
                        <p className="text-white/60 mt-3 max-w-xl mx-auto">Click any campsite to see details, features, and availability</p>
                    </div>
                </section>

                {/* Map Section */}
                <section className="bg-tan-beige py-10 md:py-12 px-2 md:px-4">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-lg text-bark-brown-dark text-center mb-8 leading-relaxed max-w-3xl mx-auto">
                            Our 100-acre campground features over 100 campsites, cabins, and yurts spread throughout our beautiful wooded property along the Saco River.
                        </p>

                        <CampgroundMapViewer />
                    </div>
                </section>

                {/* Map Legend */}
                <section className="bg-forest-green text-white py-12 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-white/50 text-sm uppercase tracking-[0.2em] mb-3">Legend</p>
                            <h2
                                className="text-2xl md:text-3xl"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "white" }}
                            >
                                Site Types
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { icon: "🏕️", title: "Tent Sites", desc: "Primitive & Electric" },
                                { icon: "🚐", title: "RV Sites", desc: "Water & Electric" },
                                { icon: "🏠", title: "Cabins", desc: "Rustic Log Cabins" },
                                { icon: "⛺", title: "Yurts", desc: "Unique Glamping" },
                            ].map((type, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="w-14 h-14 bg-white/10 group-hover:bg-white/20 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300">
                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{type.icon}</span>
                                    </div>
                                    <h3 style={{ color: "white" }} className="font-semibold text-sm">{type.title}</h3>
                                    <p className="text-xs opacity-70 mt-1">{type.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Facilities */}
                <section className="bg-tan-beige-light py-12 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-forest-green text-sm uppercase tracking-[0.2em] mb-3 font-semibold">On-Site</p>
                            <h2
                                className="text-2xl md:text-3xl text-bark-brown-dark"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                Facilities
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-center text-bark-brown-dark">
                            {[
                                { icon: "🚿", title: "Bathhouse" },
                                { icon: "🏪", title: "General Store" },
                                { icon: "🪵", title: "Firewood" },
                                { icon: "🚰", title: "Water Stations" },
                                { icon: "🗑️", title: "Waste Disposal" },
                                { icon: "🏊", title: "River Access" },
                            ].map((facility, i) => (
                                <div key={i} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{facility.icon}</div>
                                    <h3 className="font-semibold text-sm">{facility.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
