import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CampgroundMapViewer from '@/components/CampgroundMapViewer';

export default function CampgroundMap() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Page Title */}
                <section className="bg-deep-burgundy text-white py-12 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1
                            className="text-3xl md:text-4xl"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Campground Map
                        </h1>
                    </div>
                </section>

                {/* Map Section */}
                <section className="bg-tan-beige py-12 px-2 md:px-4">
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
                        <h2
                            className="text-2xl md:text-3xl text-center mb-8"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Site Types
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="w-12 h-12 bg-tan-beige rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-2xl">🏕️</span>
                                </div>
                                <h3 className="font-semibold">Tent Sites</h3>
                                <p className="text-sm opacity-80">Primitive &amp; Electric</p>
                            </div>
                            <div>
                                <div className="w-12 h-12 bg-tan-beige rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-2xl">🚐</span>
                                </div>
                                <h3 className="font-semibold">RV Sites</h3>
                                <p className="text-sm opacity-80">Water &amp; Electric</p>
                            </div>
                            <div>
                                <div className="w-12 h-12 bg-tan-beige rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-2xl">🏠</span>
                                </div>
                                <h3 className="font-semibold">Cabins</h3>
                                <p className="text-sm opacity-80">Rustic Log Cabins</p>
                            </div>
                            <div>
                                <div className="w-12 h-12 bg-tan-beige rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <span className="text-2xl">⛺</span>
                                </div>
                                <h3 className="font-semibold">Yurts</h3>
                                <p className="text-sm opacity-80">Unique Glamping</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facilities */}
                <section className="bg-tan-beige-light py-12 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2
                            className="text-2xl md:text-3xl text-bark-brown text-center mb-8"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Facilities
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-bark-brown">
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-3xl mb-2">🚿</div>
                                <h3 className="font-semibold">Bathhouse</h3>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-3xl mb-2">🏪</div>
                                <h3 className="font-semibold">General Store</h3>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-3xl mb-2">🪵</div>
                                <h3 className="font-semibold">Firewood</h3>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-3xl mb-2">🚰</div>
                                <h3 className="font-semibold">Water Stations</h3>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-3xl mb-2">🗑️</div>
                                <h3 className="font-semibold">Waste Disposal</h3>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-3xl mb-2">🏊</div>
                                <h3 className="font-semibold">River Access</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
