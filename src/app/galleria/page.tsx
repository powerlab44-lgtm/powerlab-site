"use client";

import { useEffect, useMemo, useState } from "react";

function shuffle<T>(arr: T[]) {
    // Fisher–Yates
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function Galleria() {
    const [urls, setUrls] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [seed, setSeed] = useState(0); // per rimescolare su richiesta

    useEffect(() => {
        fetch("/api/gallery")
            .then((r) => r.json())
            .then((data) => setUrls(data))
            .finally(() => setLoading(false));
    }, []);

    const mixed = useMemo(() => shuffle(urls), [urls, seed]);

    return (
        <main className="bg-black text-white min-h-screen">
            <section className="container mx-auto max-w-6xl px-4 md:px-6 pt-24 md:pt-28 pb-8">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            La nostra <span className="text-brand">Galleria</span>
                        </h1>
                        <p className="mt-3 text-neutral-300">
                            Foto reali. Formati liberi. Layout a cascata.
                        </p>
                    </div>

                    <button
                        onClick={() => setSeed((s) => s + 1)}
                        className="hidden md:inline-flex px-5 py-2 rounded-full border border-brand text-brand hover:bg-brand hover:text-black transition"
                        title="Mescola di nuovo"
                    >
                        Mescola
                    </button>
                </div>

                {/* Masonry: colonne responsive, altezze naturali */}
                <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-5">
                    {loading &&
                        Array.from({ length: 9 }).map((_, i) => (
                            <div
                                key={`skeleton-${i}`}
                                className="mb-5 h-56 w-full rounded-2xl bg-white/5 border border-white/10 animate-pulse"
                            />
                        ))}

                    {!loading &&
                        mixed.map((src, i) => (
                            <figure
                                key={src}
                                className="mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand/40 transition"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Foto ${i + 1}`}
                                    loading={i < 6 ? "eager" : "lazy"}
                                    className="w-full h-auto block hover:opacity-95 transition"
                                />
                            </figure>
                        ))}

                    {!loading && mixed.length === 0 && (
                        <p className="text-neutral-400">Nessuna immagine trovata in /public/images.</p>
                    )}
                </div>

                {/* Bottone Mescola per mobile */}
                <div className="mt-8 text-center md:hidden">
                    <button
                        onClick={() => setSeed((s) => s + 1)}
                        className="inline-flex px-5 py-2 rounded-full border border-brand text-brand hover:bg-brand hover:text-black transition"
                    >
                        Mescola
                    </button>
                </div>
            </section>
        </main>
    );
}
