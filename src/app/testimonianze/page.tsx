"use client";

export default function Testimonianze() {
    return (
        <main className="min-h-screen bg-black text-white px-6 py-20">
            <section className="max-w-6xl mx-auto text-center">
                {/* Titolo */}
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Le persone <span className="text-brand">dicono di noi</span>
                </h1>

                <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
                    Storie reali di chi ha scelto <span className="text-brand">PowerLab</span>.
                    Esperienze, risultati e trasformazioni che parlano più di mille parole.
                </p>

                {/* Testimonianze */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <article className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300">
                        <p className="text-neutral-300 italic leading-relaxed">
                            “Un team che ti ascolta davvero. Mi hanno seguito passo dopo passo,
                            facendomi ottenere risultati concreti.”
                        </p>
                        <div className="mt-5 text-left">
                            <h3 className="font-semibold text-brand">Marco R.</h3>
                            <p className="text-sm text-neutral-500">Imprenditore</p>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300">
                        <p className="text-neutral-300 italic leading-relaxed">
                            “Allenamenti personalizzati e un ambiente che ti fa sentire a casa.
                            Non tornerei mai indietro.”
                        </p>
                        <div className="mt-5 text-left">
                            <h3 className="font-semibold text-brand">Giulia F.</h3>
                            <p className="text-sm text-neutral-500">Designer</p>
                        </div>
                    </article>

                    {/* Card 3 */}
                    <article className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300">
                        <p className="text-neutral-300 italic leading-relaxed">
                            “Professionalità e cura dei dettagli. PowerLab è stato il miglior
                            investimento per il mio benessere.”
                        </p>
                        <div className="mt-5 text-left">
                            <h3 className="font-semibold text-brand">Luca M.</h3>
                            <p className="text-sm text-neutral-500">Studente</p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
