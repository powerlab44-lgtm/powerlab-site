// src/components/ServiceCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    desc: string;
    img: string;        // es: "/images/team-01.jpg"
    href?: string;      // es: "/chi-siamo" o "/servizi/pt"
};

export default function ServiceCard({ title, desc, img, href = "/chi-siamo" }: Props) {
    return (
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur">
            {/* wrapper immagine responsive */}
            <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority={false}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            <div className="p-5 space-y-3">
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <p className="text-neutral-300 text-sm md:text-base">{desc}</p>

                {/* BOTTONE FUNZIONANTE */}
                <Link
                    href={href}
                    className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/90 px-5 py-2.5 text-sm font-semibold text-black hover:bg-brand transition-colors"
                >
                    Scopri di più
                    <span aria-hidden>→</span>
                </Link>
            </div>
        </div>
    );
}
