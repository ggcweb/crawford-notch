'use client';

import { useState } from 'react';
import Image from 'next/image';
import { campgroundSites, getSiteTypeLabel, getSiteTypeColor, type CampgroundSite } from '@/data/campgroundSites';

export default function CampgroundMapViewer() {
    const [selectedSite, setSelectedSite] = useState<CampgroundSite | null>(null);
    const [hoveredSite, setHoveredSite] = useState<string | null>(null);
    const [mouseCoords, setMouseCoords] = useState<{ x: number; y: number } | null>(null);

    return (
        <div className="relative w-full bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Map Container with fixed aspect ratio to lock alignment */}
            <div className="relative w-full aspect-[994/758]">
                {/* Debug Info - Mouse Coordinates */}
                {mouseCoords && (
                    <div className="absolute top-2 left-2 z-50 bg-black/80 text-white px-3 py-1.5 rounded-md text-sm font-mono shadow-lg pointer-events-none border border-white/20 backdrop-blur-sm">
                        x: {mouseCoords.x}, y: {mouseCoords.y}
                    </div>
                )}

                {/* PNG Background Map */}
                <Image
                    src="/image.png"
                    alt="Campground Map"
                    fill
                    priority
                    className="object-contain bg-tan-beige-light"
                />

                {/* SVG Overlay for Interactive Regions */}
                <svg
                    viewBox="0 0 994 758"
                    className="absolute inset-0 w-full h-full z-10"
                    style={{
                        cursor: 'crosshair',
                    }}
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = (e.clientX - rect.left) * (994 / rect.width);
                        const y = (e.clientY - rect.top) * (758 / rect.height);
                        setMouseCoords({ x: Math.round(x), y: Math.round(y) });
                    }}
                    onMouseLeave={() => setMouseCoords(null)}
                    onClick={(e) => {
                        // Click handler to help find coordinates for debugging if needed
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = (e.clientX - rect.left) * (994 / rect.width);
                        const y = (e.clientY - rect.top) * (758 / rect.height);
                        console.log(`Clicked Coordinate: x: ${Math.round(x)}, y: ${Math.round(y)}`);
                    }}
                >
                    {campgroundSites.map((site) => {
                        const isHovered = hoveredSite === site.id;
                        const isSelected = selectedSite?.id === site.id;
                        const color = getSiteTypeColor(site.type);

                        return (
                            <g key={site.id}>
                                {/* Clickable Circle Area */}
                                <circle
                                    cx={site.x}
                                    cy={site.y}
                                    r={site.type === 'group' ? 25 : 15}
                                    fill={isHovered || isSelected ? color : 'transparent'}
                                    fillOpacity={isHovered ? 0.3 : isSelected ? 0.4 : 0}
                                    stroke={color}
                                    strokeWidth={isHovered || isSelected ? 3 : 2}
                                    strokeOpacity={0.8}
                                    style={{
                                        cursor: 'pointer',
                                        pointerEvents: 'all',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent map click
                                        setSelectedSite(site);
                                    }}
                                    onMouseEnter={() => setHoveredSite(site.id)}
                                    onMouseLeave={() => setHoveredSite(null)}
                                />

                                {/* Site Number Label */}
                                <text
                                    x={site.x}
                                    y={site.y}
                                    textAnchor="middle"
                                    dominantBaseline="central"
                                    fill="white"
                                    stroke={color}
                                    strokeWidth={isHovered || isSelected ? 3 : 2}
                                    paintOrder="stroke"
                                    fontSize={site.type === 'group' ? 14 : 11}
                                    fontWeight="bold"
                                    style={{
                                        cursor: 'pointer',
                                        pointerEvents: 'all',
                                        userSelect: 'none',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedSite(site);
                                    }}
                                    onMouseEnter={() => setHoveredSite(site.id)}
                                    onMouseLeave={() => setHoveredSite(null)}
                                >
                                    {site.number}
                                </text>

                                {/* Pulsing ring on hover */}
                                {isHovered && (
                                    <circle
                                        cx={site.x}
                                        cy={site.y}
                                        r={site.type === 'group' ? 25 : 15}
                                        fill="none"
                                        stroke={color}
                                        strokeWidth={2}
                                        strokeOpacity={0.6}
                                        style={{ pointerEvents: 'none' }}
                                    >
                                        <animate
                                            attributeName="r"
                                            from={site.type === 'group' ? 25 : 15}
                                            to={site.type === 'group' ? 35 : 25}
                                            dur="1s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="stroke-opacity"
                                            from="0.6"
                                            to="0"
                                            dur="1s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                )}
                            </g>
                        );
                    })}
                </svg>
            </div>

            {/* Hint Text */}
            <div className="p-4 bg-bark-brown-dark text-tan-beige text-center text-sm">
                <p className="font-semibold mb-1">🗺️ Interactive Map - Click any site number to view details</p>
                <p className="text-xs opacity-80">
                    Hover over sites to highlight • {campgroundSites.length} sites available
                </p>
            </div>

            {/* Modal Dialog */}
            {selectedSite && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setSelectedSite(null)}
                >
                    <div
                        className="bg-white rounded-lg shadow-2xl max-w-lg w-full overflow-hidden transform transition-all"
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div
                            className="text-white p-5 flex justify-between items-center"
                            style={{ backgroundColor: getSiteTypeColor(selectedSite.type) }}
                        >
                            <div>
                                <h3 className="text-2xl font-playfair font-bold">
                                    Site #{selectedSite.number}
                                </h3>
                                <p className="text-sm opacity-90 mt-1">
                                    {getSiteTypeLabel(selectedSite.type)}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedSite(null)}
                                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-gray-700 text-lg leading-relaxed italic text-center">
                                    "{selectedSite.description}"
                                </p>
                            </div>

                            {/* Site Info Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-tan-beige-light p-3 rounded-lg text-center">
                                    <div className="text-2xl mb-1">📍</div>
                                    <div className="text-xs text-bark-brown-dark font-semibold uppercase tracking-wide">Area</div>
                                    <div className="text-sm text-bark-brown capitalize">{selectedSite.area.replace('-', ' ')}</div>
                                </div>
                                <div className="bg-tan-beige-light p-3 rounded-lg text-center">
                                    <div className="text-2xl mb-1">
                                        {selectedSite.type === 'tent' ? '⛺' :
                                            selectedSite.type === 'rv-we' ? '🚐' :
                                                selectedSite.type === 'cabin' ? '🏠' :
                                                    selectedSite.type === 'yurt' ? '🏕️' :
                                                        selectedSite.type === 'group' ? '👥' : '⚡'}
                                    </div>
                                    <div className="text-xs text-bark-brown-dark font-semibold uppercase tracking-wide">Type</div>
                                    <div className="text-sm text-bark-brown">{getSiteTypeLabel(selectedSite.type)}</div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-tan-beige-light p-4 rounded-lg mb-6">
                                <h4 className="font-bold text-bark-brown-dark mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                                    <span>✨</span> Site Features
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedSite.features.map(feature => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1.5 bg-white text-bark-brown-dark text-sm rounded-full shadow-sm border-2 font-medium"
                                            style={{ borderColor: getSiteTypeColor(selectedSite.type) + '40' }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <button
                                    onClick={() => {
                                        // In a real app, this would link to booking system
                                        window.location.href = '/reservations';
                                    }}
                                    className="flex-1 py-3 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                                    style={{ backgroundColor: getSiteTypeColor(selectedSite.type) }}
                                >
                                    Reserve This Site
                                </button>
                                <button
                                    onClick={() => setSelectedSite(null)}
                                    className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
