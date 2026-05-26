import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MapCalibrator from '@/components/MapCalibrator';

export const metadata: Metadata = {
    title: 'Map Editor',
    robots: { index: false, follow: false },
};

export default function MapEditorPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 bg-tan-beige py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-playfair font-bold text-bark-brown-dark mb-2">
                        Map Marker Editor
                    </h1>
                    <p className="text-bark-brown mb-8 max-w-3xl">
                        Position each site marker over the campground map, then export the coordinates. This page is for
                        setup only and is not linked from the public site.
                    </p>
                    <MapCalibrator />
                </div>
            </main>
            <Footer />
        </div>
    );
}
