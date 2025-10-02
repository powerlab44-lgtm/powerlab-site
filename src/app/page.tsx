"use client";

import Image from "next/image";
import Link from "next/link";

// Dati rapidi (modifica liberamente)
const servizi = [
    { id: "pt", title: "Personal Training", desc: "Programma 1:1 su misura.", href: "/servizi#personal" },
    { id: "small", title: "Small Group", desc: "Allenamenti di gruppo mirati.", href: "/servizi#small-group" },
    { id: "ath", title: "Performance", desc: "Forza, potenza, prevenzione.", href: "/servizi#performance" },
];

const gallery = [
    "/images/foto00025.jpg",
    "/images/foto00029.jpg",
    "/images/foto00030.jpg",
    "/images/foto00082.jpg",
    "/images/foto00080.jpg",
];

const reviews = [
    {
        name: "Giulia",
        quote:
            "Ambiente curato e coach attentissimi: in 3 mesi ho più energia e zero dolori.",
    },
    {
        name: "Luca",
        quote:
            "Metodo chiaro, misurazioni periodiche e risultati reali. Consigliatissimo.",
    },
    {
        name: "Sara",
        quote:
            "Mi sento seguita davvero: il piano è su misura e si vede ad ogni seduta.",
    },
];

export default function Home() {
    return (
        <main className="min-h-[100svh] bg-black text-white">
            {/* HERO — compatto, mobile-first */}
            <section className="px-5 pt-8 pb-6">
                <div className="mx-auto max-w-[680px] text-center">
                    <div className="mb-5">
                        <Image
                            src="/logo.png"
                            width={220}
                            height={80}
                            alt="PowerLab"
                            className="mx-auto h-auto w-[180px] sm:w-[220px] drop-shadow-[0_10px_30px_rgba(104,180,46,0.25)]"
                            priority
                        />
                    </div>

                    <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                        Un posto dove ti senti a{" "}
                        <span className="text-brand">casa</span>, un passo alla{" "}
                        <span className="text-brand">volta</span>.
                    </h1>

                    <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                        Studio personal &amp; fitness a Castel Goffredo. Metodo chiaro,
                        progressioni misurabili, risultati concreti.
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-3">
                        <Link
                            href="/contact"
                            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                        >
                            Prenota una call
                        </Link>
                        <Link
                            href="/servizi"
                            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:border-brand hover:text-brand"
                        >
                            Scopri i servizi
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEZIONE SERVIZI — cards compatte */}
            <section className="px-5 py-6">
                <div className="mx-auto max-w-[980px]">
                    <div className="mb-3 flex items-end justify-between">
                        <h2 className="text-xl font-bold sm:text-2xl">Servizi principali</h2>
                        <Link
                            href="/servizi"
                            className="text-sm font-medium text-brand hover:underline"
                        >
                            Vedi tutto
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {servizi.map((s) => (
                            <Link
                                key={s.id}
                                href={s.href}
                                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm transition hover:border-brand/50"
                            >
                                <div className="mb-2 text-base font-semibold">{s.title}</div>
                                <p className="text-sm text-neutral-300">{s.desc}</p>
                                <div className="mt-3 text-xs font-semibold text-brand opacity-90 group-hover:opacity-100">
                                    Scopri di più →
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERIA — anteprima in scroll orizzontale (perfetta su mobile) */}
            <section className="px-5 py-6">
                <div className="mx-auto max-w-[1100px]">
                    <div className="mb-3 flex items-end justify-between">
                        <h2 className="text-xl font-bold sm:text-2xl">Galleria</h2>
                        <Link
                            href="/galleria"
                            className="text-sm font-medium text-brand hover:underline"
                        >
                            Apri galleria
                        </Link>
                    </div>

                    <div className="-mx-5 overflow-x-auto pb-2">
                        <div className="flex w-max gap-3 px-5">
                            {gallery.map((src, i) => (
                                <div
                                    key={i}
                                    className="relative h-40 w-64 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-48 sm:w-80"
                                >
                                    <Image
                                        src={src}
                                        alt={`Scatto PowerLab ${i + 1}`}
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 640px) 256px, 320px"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIANZE — anteprima in card, scrollabile */}
            <section className="px-5 py-6">
                <div className="mx-auto max-w-[980px]">
                    <div className="mb-3 flex items-end justify-between">
                        <h2 className="text-xl font-bold sm:text-2xl">
                            Le persone dicono di noi
                        </h2>
                        <Link
                            href="/testimonianze"
                            className="text-sm font-medium text-brand hover:underline"
                        >
                            Leggi tutte
                        </Link>
                    </div>

                    <div className="-mx-5 overflow-x-auto pb-2">
                        <div className="flex w-max gap-3 px-5">
                            {reviews.map((r, idx) => (
                                <div
                                    key={idx}
                                    className="w-[280px] rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                                >
                                    {/* avatar facoltativo – se vuoi reali, sostituisci src */}
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/10" />
                                        <div className="text-sm font-semibold">{r.name}</div>
                                    </div>
                                    <p className="text-sm leading-relaxed text-neutral-300">
                                        “{r.quote}”
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINALE */}
            <section className="px-5 py-8">
                <div className="mx-auto max-w-[720px] rounded-3xl border border-brand/30 bg-brand/10 p-6 text-center">
                    <h3 className="text-lg font-bold sm:text-xl">
                        Pronto a fare il prossimo passo?
                    </h3>
                    <p className="mt-2 text-sm text-neutral-300">
                        Prenota una call conoscitiva: capiamo obiettivi, tempi e metodo,
                        senza impegno.
                    </p>
                    <div className="mt-4 flex justify-center gap-3">
                        <Link
                            href="/contact"
                            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-black hover:brightness-110"
                        >
                            Prenota ora
                        </Link>
                        <Link
                            href="/about"
                            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:border-brand hover:text-brand"
                        >
                            Chi siamo
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER MINI */}
            <footer className="px-5 pb-8 pt-4 text-center text-xs text-neutral-400">
                © {new Date().getFullYear()} PowerLab — Studio Personal &amp; Fitness
            </footer>
        </main>
    );
}
