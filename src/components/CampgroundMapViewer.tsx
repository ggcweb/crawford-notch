'use client';

import { useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

interface Site {
    id: string;
    number: string;
    type: 'rv' | 'tent' | 'cabin' | 'yurt';
    x: number; // percentage 0-100
    y: number; // percentage 0-100
    description: string;
    features: string[];
}

// Example data - This implies the user will need to adjust coordinates to match the actual map image
const sites: Site[] = [
    {
        id: '1',
        number: '1',
        type: 'tent',
        x: 20,
        y: 30,
        description: 'Secluded tent site near the river bank.',
        features: ['River View', 'Fire Ring', 'Picnic Table']
    },
    {
        id: '2',
        number: '12',
        type: 'rv',
        x: 45,
        y: 50,
        description: 'Large pull-through RV site with full hookups.',
        features: ['50 Amp', 'Water', 'Sewer', 'Pull-through']
    },
    {
        id: '3',
        number: 'C1',
        type: 'cabin',
        x: 70,
        y: 60,
        description: 'Cozy rustic cabin with front porch.',
        features: ['Sleeps 4', 'Electricity', 'Near Bathhouse']
    },
    {
        id: '4',
        number: 'Y1',
        type: 'yurt',
        x: 80,
        y: 25,
        description: 'Luxury yurt experience in the woods.',
        features: ['Queen Bed', 'Skylight', 'Private Deck']
    }
];

export default function CampgroundMapViewer() {
    const [selectedSite, setSelectedSite] = useState<Site | null>(null);

    return (
        <div className="relative w-full bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Map Container */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]">
                <Image
                    src="/image.png"
                    alt="Campground Map"
                    fill
                    className="object-contain bg-tan-beige-light"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                />

                {/* Interactive Overlay */}
                <div className="absolute inset-0 z-10">
                    {sites.map((site) => (
                        <button
                            key={site.id}
                            onClick={() => setSelectedSite(site)}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                            style={{ left: `${site.x}%`, top: `${site.y}%` }}
                            aria-label={`View details for site ${site.number}`}
                        >
                            {/* Pin Marker */}
                            <div className="relative flex flex-col items-center">
                                <span className={`
                                    w-8 h-8 rounded-full flex items-center justify-center 
                                    text-white font-bold text-xs shadow-lg transition-transform duration-300
                                    group-hover:scale-125 group-focus:scale-125 border-2 border-white
                                    ${site.type === 'rv' ? 'bg-blue-600' :
                                        site.type === 'cabin' ? 'bg-orange-700' :
                                            site.type === 'yurt' ? 'bg-purple-600' :
                                                'bg-forest-green'}
                                `}>
                                    {site.number}
                                </span>
                                {/* Pulsing effect for visibility */}
                                <span className="absolute w-full h-full rounded-full bg-white opacity-20 animate-ping group-hover:opacity-40"></span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Hint Text */}
            <div className="p-4 bg-bark-brown-dark text-tan-beige text-center text-sm">
                Click on the numbered markers to view site details.
            </div>

            {/* Modal */}
            {selectedSite && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div
                        className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden animate-scale-in"
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Modal Header */}
                        <div className="bg-bark-brown text-white p-4 flex justify-between items-center">
                            <h3 className="text-xl font-playfair">
                                {siteTypeLabel(selectedSite.type)} #{selectedSite.number}
                            </h3>
                            <button
                                onClick={() => setSelectedSite(null)}
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <p className="text-gray-700 mb-4 text-lg items-center text-center italic">
                                {selectedSite.description}
                            </p>

                            <div className="bg-tan-beige-light p-4 rounded-lg mb-6">
                                <h4 className="font-bold text-bark-brown-dark mb-2 text-sm uppercase tracking-wider">Features</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedSite.features.map(feature => (
                                        <span key={feature} className="px-3 py-1 bg-white text-forest-green text-sm rounded-full shadow-sm border border-forest-green/10">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedSite(null)} // In a real app, this might link to booking
                                className="w-full py-3 bg-forest-green text-white font-bold rounded hover:bg-forest-green-dark transition-colors"
                            >
                                Check Availability
                            </button>
                        </div>
                    </div>

                    {/* Backdrop Click to Close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedSite(null)} />
                </div>
            )}
        </div>
    );
}

function siteTypeLabel(type: string) {
    switch (type) {
        case 'rv': return 'RV Site';
        case 'cabin': return 'Cabin';
        case 'yurt': return 'Yurt';
        default: return 'Tent Site';
    }
}
