// src/app/services/page.tsx
"use client";

import ServiceCard from "@/components/ServiceCard";

export default function Servizi() {
    return (
        <main className="bg-black text-white">
            <section className="container mx-auto px-5 pt-10 pb-14">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    I nostri <span className="text-brand">servizi</span>
                </h1>
                <p className="mt-4 text-neutral-300 max-w-2xl">
                    Essenziale, scientifico, orientato al risultato. Scegli il percorso, noi
                    pensiamo a tutto — <span className="text-brand">un passo alla volta</span>.
                </p>

                {/* griglia 3 card */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ServiceCard
                        title="Personal Training"
                        desc="Percorso individuale su misura, misurazioni e progressi chiari."
                        img="/images/team-00018.jpg"
                        href="/chi-siamo"
                    />
                    <ServiceCard
                        title="Programmazione"
                        desc="Schede e progressioni cucite addosso ai tuoi obiettivi."
                        img="/images/team-00005.jpg"
                        href="/chi-siamo"
                    />
                    <ServiceCard
                        title="Performance & Recovery"
                        desc="Forza, mobilità e recupero ottimizzati con metodo."
                        img="/images/team-00003.jpg"
                        href="/chi-siamo"
                    />
                </div>
            </section>
        </main>
    );
}
