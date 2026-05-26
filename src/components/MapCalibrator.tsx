'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { campgroundSites, getSiteTypeColor, type CampgroundSite } from '@/data/campgroundSites';

type Pos = { x: number; y: number };
type PosMap = Record<string, Pos>;

const STORAGE_KEY = 'cnc-map-positions';
const VBW = 994;
const VBH = 758;

function initialPositions(): PosMap {
    const map: PosMap = {};
    for (const s of campgroundSites) map[s.id] = { x: s.x, y: s.y };
    return map;
}

export default function MapCalibrator() {
    const [positions, setPositions] = useState<PosMap>(initialPositions);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [mouse, setMouse] = useState<Pos | null>(null);
    const [showNumbers, setShowNumbers] = useState(true);
    const [copied, setCopied] = useState(false);

    const svgRef = useRef<SVGSVGElement>(null);
    const byId = useMemo(() => {
        const m: Record<string, CampgroundSite> = {};
        for (const s of campgroundSites) m[s.id] = s;
        return m;
    }, []);

    // Load any in-progress edits from localStorage on mount.
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved) as PosMap;
                // Hydrate persisted edits after mount (data-first render keeps SSR/CSR in sync).
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setPositions((prev) => ({ ...prev, ...parsed }));
            }
        } catch {
            // ignore malformed storage
        }
    }, []);

    // Persist edits so positioning survives reloads while you work.
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
        } catch {
            // ignore quota/availability errors
        }
    }, [positions]);

    const clientToViewBox = useCallback((clientX: number, clientY: number): Pos => {
        const rect = svgRef.current!.getBoundingClientRect();
        return {
            x: Math.round(((clientX - rect.left) / rect.width) * VBW),
            y: Math.round(((clientY - rect.top) / rect.height) * VBH),
        };
    }, []);

    const move = useCallback(
        (id: string, x: number, y: number) => {
            setPositions((prev) => ({
                ...prev,
                [id]: { x: Math.max(0, Math.min(VBW, x)), y: Math.max(0, Math.min(VBH, y)) },
            }));
        },
        [],
    );

    // Arrow-key nudging for the selected marker.
    useEffect(() => {
        if (!selectedId) return;
        const onKey = (e: KeyboardEvent) => {
            const step = e.shiftKey ? 10 : 1;
            const cur = positions[selectedId];
            if (!cur) return;
            if (e.key === 'ArrowLeft') { e.preventDefault(); move(selectedId, cur.x - step, cur.y); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); move(selectedId, cur.x + step, cur.y); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); move(selectedId, cur.x, cur.y - step); }
            else if (e.key === 'ArrowDown') { e.preventDefault(); move(selectedId, cur.x, cur.y + step); }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [selectedId, positions, move]);

    const exportText = useMemo(() => {
        const lines = campgroundSites.map((s) => {
            const p = positions[s.id];
            return `  { "id": "${s.id}", "x": ${p.x}, "y": ${p.y} }`;
        });
        return `[\n${lines.join(',\n')}\n]`;
    }, [positions]);

    const copyExport = async () => {
        try {
            await navigator.clipboard.writeText(exportText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    };

    const resetToFile = () => {
        if (!confirm('Discard your edits and reload the saved positions from the site?')) return;
        const init = initialPositions();
        setPositions(init);
        setSelectedId(null);
    };

    const selected = selectedId ? byId[selectedId] : null;
    const selectedPos = selectedId ? positions[selectedId] : null;

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Map */}
            <div className="flex-1 min-w-0">
                <div
                    className="relative w-full aspect-[994/758] bg-cream rounded-xl shadow-xl overflow-hidden border border-bark-brown/10"
                    style={{ touchAction: 'none' }}
                >
                    <Image
                        src="/image.jpg"
                        alt="Campground map being calibrated"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 760px"
                        className="object-contain select-none pointer-events-none"
                    />
                    <svg
                        ref={svgRef}
                        viewBox={`0 0 ${VBW} ${VBH}`}
                        className="absolute inset-0 w-full h-full"
                        style={{ cursor: draggingId ? 'grabbing' : 'crosshair' }}
                        onPointerMove={(e) => {
                            const p = clientToViewBox(e.clientX, e.clientY);
                            setMouse(p);
                            if (draggingId) move(draggingId, p.x, p.y);
                        }}
                        onPointerLeave={() => setMouse(null)}
                        onPointerUp={() => setDraggingId(null)}
                    >
                        {campgroundSites.map((s) => {
                            const p = positions[s.id];
                            const isSel = selectedId === s.id;
                            const color = getSiteTypeColor(s.type);
                            return (
                                <g key={s.id}>
                                    <circle
                                        cx={p.x}
                                        cy={p.y}
                                        r={isSel ? 11 : 7}
                                        fill={color}
                                        fillOpacity={isSel ? 0.85 : 0.55}
                                        stroke={isSel ? '#ffffff' : color}
                                        strokeWidth={isSel ? 2 : 1}
                                        style={{ cursor: 'grab' }}
                                        onPointerDown={(e) => {
                                            e.stopPropagation();
                                            svgRef.current?.setPointerCapture(e.pointerId);
                                            setSelectedId(s.id);
                                            setDraggingId(s.id);
                                        }}
                                    />
                                    {showNumbers && (
                                        <text
                                            x={p.x}
                                            y={p.y - (isSel ? 13 : 9)}
                                            textAnchor="middle"
                                            fontSize={isSel ? 13 : 9}
                                            fontWeight="bold"
                                            fill={color}
                                            stroke="#ffffff"
                                            strokeWidth={0.6}
                                            paintOrder="stroke"
                                            style={{ pointerEvents: 'none', userSelect: 'none' }}
                                        >
                                            {s.number}
                                        </text>
                                    )}
                                </g>
                            );
                        })}
                    </svg>

                    {mouse && (
                        <div className="absolute top-2 left-2 z-10 bg-black/80 text-white px-3 py-1.5 rounded-md text-sm font-mono pointer-events-none">
                            x: {mouse.x}, y: {mouse.y}
                        </div>
                    )}
                </div>
                <p className="text-sm text-bark-brown mt-3">
                    Drag any marker onto its spot on the map. Click a marker to select it, then use the arrow keys to
                    nudge by 1 (hold Shift for 10). Your edits are saved in this browser as you go.
                </p>
            </div>

            {/* Controls */}
            <div className="lg:w-80 shrink-0 space-y-4">
                <div className="bg-white rounded-lg border border-bark-brown/15 p-4">
                    <h2 className="text-lg font-playfair font-bold text-bark-brown-dark mb-3">Selected Site</h2>
                    {selected && selectedPos ? (
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span
                                    className="inline-block w-4 h-4 rounded-full"
                                    style={{ backgroundColor: getSiteTypeColor(selected.type) }}
                                    aria-hidden="true"
                                />
                                <span className="font-semibold text-bark-brown-dark">
                                    {selected.siteClass} · #{selected.number}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <label className="text-sm text-bark-brown">
                                    x
                                    <input
                                        type="number"
                                        inputMode="numeric"
                                        value={selectedPos.x}
                                        onChange={(e) => move(selected.id, Number(e.target.value), selectedPos.y)}
                                        className="mt-1 w-full border border-bark-brown/30 rounded px-2 py-1 font-mono"
                                    />
                                </label>
                                <label className="text-sm text-bark-brown">
                                    y
                                    <input
                                        type="number"
                                        inputMode="numeric"
                                        value={selectedPos.y}
                                        onChange={(e) => move(selected.id, selectedPos.x, Number(e.target.value))}
                                        className="mt-1 w-full border border-bark-brown/30 rounded px-2 py-1 font-mono"
                                    />
                                </label>
                            </div>
                        </div>
                    ) : (
                        <p className="text-sm text-bark-brown">Click a marker on the map to select it.</p>
                    )}
                </div>

                <div className="bg-white rounded-lg border border-bark-brown/15 p-4">
                    <label className="flex items-center gap-2 text-sm text-bark-brown-dark font-medium mb-3">
                        <input
                            type="checkbox"
                            checked={showNumbers}
                            onChange={(e) => setShowNumbers(e.target.checked)}
                        />
                        Show site numbers
                    </label>
                    <label className="block text-sm text-bark-brown-dark font-medium mb-1" htmlFor="site-jump">
                        Jump to site
                    </label>
                    <select
                        id="site-jump"
                        value={selectedId ?? ''}
                        onChange={(e) => setSelectedId(e.target.value || null)}
                        className="w-full border border-bark-brown/30 rounded px-2 py-2 bg-white"
                    >
                        <option value="">— select —</option>
                        {campgroundSites.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.number} — {s.siteClass}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="bg-white rounded-lg border border-bark-brown/15 p-4 space-y-3">
                    <h2 className="text-lg font-playfair font-bold text-bark-brown-dark">Export</h2>
                    <p className="text-sm text-bark-brown">
                        Copy these coordinates and share them, or paste them back into{' '}
                        <code>src/data/campgroundSites.ts</code>.
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={copyExport}
                            className="flex-1 py-2 px-4 bg-forest-green text-white font-semibold rounded-lg hover:bg-forest-green-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2"
                        >
                            {copied ? 'Copied!' : 'Copy Coordinates'}
                        </button>
                        <button
                            onClick={resetToFile}
                            className="py-2 px-4 bg-tan-beige text-bark-brown-dark font-semibold rounded-lg hover:bg-tan-beige/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2"
                        >
                            Reset
                        </button>
                    </div>
                    <textarea
                        readOnly
                        value={exportText}
                        spellCheck={false}
                        onFocus={(e) => e.currentTarget.select()}
                        className="w-full h-40 border border-bark-brown/30 rounded p-2 font-mono text-xs"
                    />
                </div>
            </div>
        </div>
    );
}
