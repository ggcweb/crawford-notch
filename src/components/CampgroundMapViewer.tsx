'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    campgroundSites,
    getSiteTypeLabel,
    getSiteTypeColor,
    getSiteTypeEmoji,
    type CampgroundSite,
} from '@/data/campgroundSites';

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReduced(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);
    return reduced;
}

function siteTitle(site: CampgroundSite): string {
    switch (site.type) {
        case 'cabin': return `Cabin ${site.number}`;
        case 'yurt': return `Yurt ${site.number}`;
        case 'rv-we':
        case 'rv-electric': return `RV Site ${site.number}`;
        default: return `Site ${site.number}`;
    }
}

function carryInLabel(value: boolean | string): string {
    return typeof value === 'string' ? `Yes — ${value}` : 'Yes';
}

export default function CampgroundMapViewer() {
    const [selectedSite, setSelectedSite] = useState<CampgroundSite | null>(null);
    const [activeSite, setActiveSite] = useState<string | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    // Accessibility: Escape to close, body scroll lock, focus trap + restore.
    useEffect(() => {
        if (!selectedSite) return;

        previousFocusRef.current = document.activeElement as HTMLElement;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedSite(null);
                return;
            }
            if (e.key !== 'Tab' || !dialogRef.current) return;

            const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            );
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
            previousFocusRef.current?.focus?.();
        };
    }, [selectedSite]);

    return (
        <div className="relative w-full bg-cream rounded-xl shadow-xl overflow-hidden border border-bark-brown/10">
            {/* Map Container with fixed aspect ratio to lock alignment */}
            <div className="relative w-full aspect-[994/758]">
                <Image
                    src="/image.jpg"
                    alt="Map of Crawford Notch Campground showing numbered campsites, cabins, and facilities"
                    fill
                    priority
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className="object-contain bg-tan-beige-light"
                />

                {/* SVG Overlay for Interactive Regions */}
                <svg
                    viewBox="0 0 994 758"
                    className="absolute inset-0 w-full h-full z-10"
                    role="group"
                    aria-label="Interactive campsite locations"
                >
                    {campgroundSites.map((site) => {
                        const isActive = activeSite === site.id || selectedSite?.id === site.id;
                        const color = getSiteTypeColor(site.type);
                        const radius = site.type === 'group' ? 22 : 14;
                        const select = () => setSelectedSite(site);

                        return (
                            <g key={site.id}>
                                <circle
                                    cx={site.x}
                                    cy={site.y}
                                    r={radius}
                                    fill={color}
                                    fillOpacity={isActive ? 0.35 : 0}
                                    stroke={color}
                                    strokeWidth={isActive ? 2 : 0}
                                    strokeOpacity={0.9}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`${siteTitle(site)}, ${site.siteClass}`}
                                    style={{
                                        cursor: 'pointer',
                                        pointerEvents: 'all',
                                        outline: 'none',
                                        transition: 'fill-opacity 0.2s ease, stroke-width 0.2s ease',
                                    }}
                                    onClick={select}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            select();
                                        }
                                    }}
                                    onMouseEnter={() => setActiveSite(site.id)}
                                    onMouseLeave={() => setActiveSite(null)}
                                    onFocus={() => setActiveSite(site.id)}
                                    onBlur={() => setActiveSite(null)}
                                />

                                {/* Pulsing ring on hover/focus (skipped when reduced motion is preferred) */}
                                {isActive && !prefersReducedMotion && (
                                    <circle
                                        cx={site.x}
                                        cy={site.y}
                                        r={radius}
                                        fill="none"
                                        stroke={color}
                                        strokeWidth={2}
                                        strokeOpacity={0.6}
                                        style={{ pointerEvents: 'none' }}
                                    >
                                        <animate attributeName="r" from={radius} to={radius + 10} dur="1s" repeatCount="indefinite" />
                                        <animate attributeName="stroke-opacity" from="0.6" to="0" dur="1s" repeatCount="indefinite" />
                                    </circle>
                                )}
                            </g>
                        );
                    })}
                </svg>
            </div>

            {/* Hint Text */}
            <div className="p-4 bg-bark-brown-dark text-tan-beige text-center">
                <p className="font-semibold mb-1">Interactive Map — Select Any Site to View Details</p>
                <p className="text-sm opacity-80" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    Hover or tab to highlight a site • {campgroundSites.length} sites available
                </p>
            </div>

            {/* Modal Dialog */}
            {selectedSite && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    style={{ overscrollBehavior: 'contain' }}
                    onClick={() => setSelectedSite(null)}
                >
                    <div
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="site-dialog-title"
                        className="bg-cream rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto motion-safe:animate-[fadeIn_0.2s_ease-out]"
                        style={{ overscrollBehavior: 'contain' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div
                            className="text-white p-6 flex justify-between items-start gap-4"
                            style={{ backgroundColor: getSiteTypeColor(selectedSite.type) }}
                        >
                            <div className="min-w-0">
                                <p className="text-xs font-semibold uppercase tracking-widest opacity-90">
                                    {selectedSite.siteClass}
                                </p>
                                <h3
                                    id="site-dialog-title"
                                    className="font-playfair font-bold text-3xl mt-1 text-balance"
                                    style={{ fontVariantNumeric: 'tabular-nums' }}
                                >
                                    <span aria-hidden="true" className="mr-2">{getSiteTypeEmoji(selectedSite.type)}</span>
                                    {siteTitle(selectedSite)}
                                </h3>
                            </div>
                            <button
                                ref={closeButtonRef}
                                onClick={() => setSelectedSite(null)}
                                className="shrink-0 text-white/80 hover:text-white p-1.5 hover:bg-white/15 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                                aria-label="Close site details"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Facts */}
                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Fact label="Type" value={getSiteTypeLabel(selectedSite.type)} />
                                <Fact label="Location" value={selectedSite.area.replace('-', ' ')} capitalize />
                                {selectedSite.capacity && <Fact label="Capacity" value={selectedSite.capacity} />}
                                {selectedSite.beds && <Fact label="Sleeps" value={selectedSite.beds} />}
                                {selectedSite.parking && <Fact label="Parking" value={selectedSite.parking} />}
                                {selectedSite.carryInCarryOut && (
                                    <Fact label="Carry-In, Carry-Out" value={carryInLabel(selectedSite.carryInCarryOut)} />
                                )}
                                {selectedSite.maxTrailerLength && (
                                    <Fact label="Max Trailer Length" value={selectedSite.maxTrailerLength} />
                                )}
                                {selectedSite.maxMotorhomeLength && (
                                    <Fact label="Max Motorhome Length" value={selectedSite.maxMotorhomeLength} />
                                )}
                            </dl>

                            {selectedSite.note && (
                                <p className="text-sm text-bark-brown bg-tan-beige/60 border-l-4 border-bark-brown/40 rounded-r-md px-4 py-3">
                                    {selectedSite.note}
                                </p>
                            )}

                            {/* Amenities */}
                            {selectedSite.amenities.length > 0 && (
                                <div className="bg-tan-beige-light p-4 rounded-lg border border-bark-brown/10">
                                    <h4 className="font-bold text-bark-brown-dark mb-3 text-sm uppercase tracking-wider">
                                        Amenities
                                    </h4>
                                    <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
                                        {selectedSite.amenities.map((amenity) => (
                                            <li
                                                key={amenity}
                                                className="px-3 py-1.5 bg-cream text-bark-brown-dark text-sm rounded-full shadow-sm border-2 font-medium"
                                                style={{ borderColor: getSiteTypeColor(selectedSite.type) + '40' }}
                                            >
                                                {amenity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={`/reservations?site=${encodeURIComponent(selectedSite.number)}`}
                                    className="flex-1 inline-flex items-center justify-center py-3 px-6 text-white font-bold rounded-lg shadow-lg no-underline hover:no-underline hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    style={{ backgroundColor: getSiteTypeColor(selectedSite.type) }}
                                >
                                    Reserve This Site
                                </Link>
                                <button
                                    onClick={() => setSelectedSite(null)}
                                    className="px-6 py-3 bg-tan-beige text-bark-brown-dark font-semibold rounded-lg hover:bg-tan-beige/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2"
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

function Fact({ label, value, capitalize = false }: { label: string; value: string; capitalize?: boolean }) {
    return (
        <div className="bg-tan-beige-light p-3 rounded-lg border border-bark-brown/10">
            <dt className="text-xs text-bark-brown-dark font-semibold uppercase tracking-wide">{label}</dt>
            <dd className={`text-sm text-bark-brown mt-0.5 ${capitalize ? 'capitalize' : ''}`}>{value}</dd>
        </div>
    );
}
