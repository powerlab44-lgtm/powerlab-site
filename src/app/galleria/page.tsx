"use client";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

export default function Galleria() {
    const TOTAL = 96;         // n. foto
    const EXT = "jpg";        // "jpeg" se serve
    const [open, setOpen] = useState<string | null>(null);

    return (
        <section className="bg-black min-h-screen">
            {/* Header */}
            <div className="container mx-auto px-6 pt-36 pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    La nostra <span className="text-brand">Galleria</span>
                </h1>
                <p className="mt-5 text-neutral-400 max-w-2xl mx-auto text-lg">
                    Scatti reali, energia vera. Un assaggio di ciò che viviamo ogni giorno in PowerLab.
                </p>
            </div>

            {/* Masonry “pulito” */}
            <div className="container mx-auto px-4 sm:px-6 pb-28">
                {/* columns = masonry fluido; gap più ampio per look Apple */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 [column-fill:_balance]">
                    {Array.from({ length: TOTAL }, (_, i) => {
                        const num = String(i + 1).padStart(5, "0");
                        const src = `/images/foto${num}.${EXT}`;

                        return (
                            <figure key={src} className="mb-8 break-inside-avoid">
                                <button
                                    onClick={() => setOpen(src)}
                                    className="group block w-full text-left"
                                    aria-label={`Apri foto ${num}`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={src}
                                        alt={`Foto ${num}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="
                      w-full h-auto rounded-[24px]
                      shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]
                      ring-1 ring-white/10
                      transition-transform duration-500
                      group-hover:scale-[1.015]
                    "
                                    />
                                </button>
                            </figure>
                        );
                    })}
                </div>
            </div>

            {open && (
                <Lightbox
                    src={open}
                    alt="Foto PowerLab"
                    onClose={() => setOpen(null)}
                />
            )}
        </section>
    );
}
