import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CampgroundMapViewer from '@/components/CampgroundMapViewer';
import { Icon, type IconName } from '@/components/ui/Icon';

const legend: { icon: IconName; title: string; desc: string }[] = [
    { icon: "tent", title: "Tent Sites", desc: "Primitive & Electric" },
    { icon: "rv", title: "RV Sites", desc: "Water & Electric" },
    { icon: "cabin", title: "Cabins", desc: "Rustic Log Cabins" },
    { icon: "yurt", title: "Yurts", desc: "Unique Glamping" },
];

const facilities: { icon: IconName; title: string }[] = [
    { icon: "shower", title: "Bathhouse" },
    { icon: "store", title: "General Store" },
    { icon: "firewood", title: "Firewood" },
    { icon: "tap", title: "Water Stations" },
    { icon: "trash", title: "Waste Disposal" },
    { icon: "water", title: "River Access" },
];

export const metadata: Metadata = {
    title: "Campground Map",
    description: "Explore our interactive map of tent, RV, cabin, and yurt sites at Crawford Notch Campground in the White Mountains of New Hampshire.",
};

export default function CampgroundMap() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Page title */}
                <section className="bg-deep-burgundy text-cream py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-3 font-semibold">Interactive</p>
                        <h1 className="text-cream">Campground Map</h1>
                        <p className="text-cream/85 mt-3 max-w-xl mx-auto">Click any campsite to see details, features, and availability.</p>
                    </div>
                </section>

                {/* Map */}
                <section className="bg-tan-beige py-10 md:py-12 px-2 md:px-4">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-lg text-bark-brown-dark text-center mb-8 max-w-3xl mx-auto">
                            Our 100-acre campground features over 100 campsites, cabins, and yurts spread throughout our beautiful wooded property along the Saco River.
                        </p>
                        <CampgroundMapViewer />
                    </div>
                </section>

                {/* Legend */}
                <section className="bg-forest-green text-cream py-14 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-ochre text-sm uppercase tracking-[0.2em] mb-3 font-semibold">Legend</p>
                            <h2 className="text-cream">Site Types</h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {legend.map((type) => (
                                <div key={type.title} className="flex flex-col items-center p-5 border border-cream/12 rounded-sm">
                                    <Icon name={type.icon} className="w-9 h-9 mb-3 text-ochre" />
                                    <h3 className="text-cream text-base">{type.title}</h3>
                                    <p className="text-cream/75 text-sm mt-1">{type.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Facilities */}
                <section className="bg-tan-beige-light py-14 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-rust text-sm uppercase tracking-[0.2em] mb-3 font-semibold">On-Site</p>
                            <h2 className="text-bark-brown-dark">Facilities</h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {facilities.map((facility) => (
                                <div key={facility.title} className="bg-cream border border-bark-brown/12 p-5 rounded-sm flex flex-col items-center text-center">
                                    <Icon name={facility.icon} className="w-8 h-8 mb-3 text-forest-green" />
                                    <h3 className="text-bark-brown-dark text-base">{facility.title}</h3>
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
