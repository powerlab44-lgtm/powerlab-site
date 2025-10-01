export default function Servizi() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero testuale */}
            <section className="container mx-auto px-4 sm:px-6 pt-14 pb-10 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
                    I nostri <span className="text-brand">Servizi</span>
                </h1>

                <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                    Essenziale, scientifico, orientato al risultato. Scegli il percorso,
                    noi pensiamo al resto —{" "}
                    <span className="text-brand font-semibold">un passo alla volta.</span>
                </p>
            </section>

            {/* Griglia immagini stile Apple */}
            <section className="container mx-auto px-4 sm:px-6 pb-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <figure className="group overflow-hidden rounded-2xl bg-neutral-900/40 border border-white/5 shadow-xl">
                        <div
                            className="relative w-full aspect-[4/3] overflow-hidden
                         transition-transform duration-500 will-change-transform
                         md:group-hover:scale-[1.02]"
                        >
                            <img
                                src="/images/foto00050.jpg"
                                alt="Allenamento PowerLab"
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <figcaption className="px-4 sm:px-5 py-4 sm:py-5">
                            <h3 className="text-lg sm:text-xl font-semibold">Allenamento</h3>
                            <p className="mt-1 text-sm sm:text-base text-neutral-400">
                                Programmi personalizzati che evolvono con te.
                            </p>
                        </figcaption>
                    </figure>

                    {/* Card 2 */}
                    <figure className="group overflow-hidden rounded-2xl bg-neutral-900/40 border border-white/5 shadow-xl">
                        <div
                            className="relative w-full aspect-[4/3] overflow-hidden
                         transition-transform duration-500 will-change-transform
                         md:group-hover:scale-[1.02]"
                        >
                            <img
                                src="/images/foto00059.jpg"
                                alt="Clienti PowerLab"
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <figcaption className="px-4 sm:px-5 py-4 sm:py-5">
                            <h3 className="text-lg sm:text-xl font-semibold">Coaching</h3>
                            <p className="mt-1 text-sm sm:text-base text-neutral-400">
                                Metodo chiaro, feedback costanti, risultati misurabili.
                            </p>
                        </figcaption>
                    </figure>

                    {/* Card 3 */}
                    <figure className="group overflow-hidden rounded-2xl bg-neutral-900/40 border border-white/5 shadow-xl">
                        <div
                            className="relative w-full aspect-[4/3] overflow-hidden
                         transition-transform duration-500 will-change-transform
                         md:group-hover:scale-[1.02]"
                        >
                            <img
                                src="/images/foto00005.jpg"
                                alt="Team PowerLab"
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <figcaption className="px-4 sm:px-5 py-4 sm:py-5">
                            <h3 className="text-lg sm:text-xl font-semibold">Team</h3>
                            <p className="mt-1 text-sm sm:text-base text-neutral-400">
                                Persone vere, energia vera. Sempre al tuo fianco.
                            </p>
                        </figcaption>
                    </figure>
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-full text-base sm:text-lg font-semibold
                       border border-white/15 bg-white text-black
                       hover:bg-brand hover:border-brand transition-all duration-300 shadow-lg"
                    >
                        Prenota una call
                    </a>
                </div>
            </section>
        </main>
    );
}
