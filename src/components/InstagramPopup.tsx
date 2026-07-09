"use client"
import { useCallback, useEffect, useRef, useState } from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/crawfordnotchcamping/';
const STORAGE_KEY = 'instagram-popup-dismissed-at';
const RESHOW_AFTER_MS = 30 * 24 * 60 * 60 * 1000; // show again after 30 days
const OPEN_DELAY_MS = 2500;

function wasRecentlyDismissed(): boolean {
    try {
        const dismissedAt = window.localStorage.getItem(STORAGE_KEY);
        if (!dismissedAt) return false;
        return Date.now() - Number(dismissedAt) < RESHOW_AFTER_MS;
    } catch {
        return false;
    }
}

export default function InstagramPopup() {
    const [open, setOpen] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (wasRecentlyDismissed()) return;
        const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
        return () => window.clearTimeout(timer);
    }, []);

    const dismiss = useCallback(() => {
        setOpen(false);
        try {
            window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
        } catch {
            // localStorage unavailable (private browsing) — popup just reappears next visit
        }
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') dismiss();
        };
        document.addEventListener('keydown', onKeyDown);
        dialogRef.current?.focus();
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open, dismiss]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bark-brown-dark/60 backdrop-blur-sm"
            onClick={dismiss}
            role="dialog"
            aria-modal="true"
            aria-labelledby="instagram-popup-title"
        >
            <div
                ref={dialogRef}
                tabIndex={-1}
                className="relative w-full max-w-md bg-cream rounded-sm border-t-4 border-rust shadow-2xl p-8 text-center focus:outline-none"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={dismiss}
                    aria-label="Close"
                    className="absolute top-3 right-3 p-2 text-muted hover:text-rust transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="mx-auto mb-5 w-14 h-14 rounded-sm bg-rust flex items-center justify-center">
                    <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </div>

                <h2 id="instagram-popup-title" className="font-display text-2xl text-bark-brown-dark mb-2">
                    We&apos;re on Instagram!
                </h2>
                <p className="text-muted text-[0.95rem] leading-relaxed mb-6">
                    Follow <span className="font-medium text-bark-brown-dark">@crawfordnotchcamping</span> for
                    photos from around the campground, seasonal updates, and White Mountains views.
                </p>

                <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                    className="block w-full bg-rust text-cream font-medium py-3 rounded-sm hover:bg-rust-dark transition-colors"
                >
                    Follow Us on Instagram
                </a>
                <button
                    onClick={dismiss}
                    className="mt-3 text-sm text-muted hover:text-rust transition-colors underline underline-offset-2"
                >
                    Maybe later
                </button>
            </div>
        </div>
    );
}
