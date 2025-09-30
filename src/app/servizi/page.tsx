export default function Servizi() {
    return (
        <div className="flex flex-col">

            {/* HERO */}
            <section className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    Servizi pensati per farti
                    <br />
                    <span className="text-brand">fare il salto di qualità.</span>
                </h1>
                <p className="mt-6 text-neutral-300 max-w-2xl mx-auto text-lg">
                    Dalla valutazione iniziale alla programmazione su misura: un
                    ecosistema semplice, elegante ed efficace. Meno rumore, più risultati.
                </p>
                <div className="mt-10 flex items-center justify-center gap-4">
                    <a
                        href="/contact"
                        className="px-8 py-4 rounded-full font-semibold text-black bg-brand hover:opacity-90 transition"
                    >
                        Prenota una call
                    </a>
                    <a
                        href="/galleria"
                        className="px-8 py-4 rounded-full font-semibold border border-brand text-brand hover:bg-brand hover:text-black transition"
                    >
                        Scopri PowerLab
                    </a>
                </div>
            </section>

            {/* BLOCCO 1 – Coaching */}
            <section className="bg-black text-white">
                <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Coaching <span className="text-brand">personalizzato</span>
                        </h2>
                        <p className="text-lg text-neutral-300 mb-6">
                            Partiamo da te: obiettivi, storico, disponibilità e preferenze.
                            Costruiamo un piano che si integra alla tua vita, non il contrario.
                        </p>
                        <ul className="space-y-2 text-neutral-300">
                            <li>✓ Valutazione iniziale completa</li>
                            <li>✓ Programmazione 1:1, cicli e progressioni</li>
                            <li>✓ Video-feedback e ottimizzazione tecnica</li>
                        </ul>
                    </div>
                    <img
                        src="/images/foto00001.jpg"
                        alt="Coaching PowerLab"
                        className="w-full h-auto rounded-xl shadow-2xl border border-brand/20"
                    />
                </div>
            </section>

            {/* BLOCCO 2 – Metodologia */}
            <section className="bg-white text-black">
                <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
                    <img
                        src="/images/foto00002.jpg"
                        alt="Allenamenti scientifici"
                        className="w-full h-auto rounded-xl shadow-2xl border border-black/10"
                    />
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand">
                            Allenamenti scientifici, zero fronzoli
                        </h2>
                        <p className="text-lg text-neutral-700 mb-6">
                            Dalla forza all’ipertrofia, fino alla pliometria: quello che non
                            serve lo togliamo, quello che funziona rimane. Semplice, essenziale,
                            misurabile.
                        </p>
                        <ul className="space-y-2 text-neutral-700">
                            <li>✓ Progressioni chiare, carichi tracciati</li>
                            <li>✓ Recupero e nutrizione integrati al percorso</li>
                            <li>✓ Metriche che guidano le decisioni</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* BLOCCO 3 – Community/Benessere */}
            <section className="bg-black text-white">
                <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Performance, <span className="text-brand">benessere</span>, community
                        </h2>
                        <p className="text-lg text-neutral-300 mb-6">
                            Non solo schede: un ambiente in cui sentirti seguito, capito e
                            motivato. Cresciamo insieme — un passo alla volta.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="/contact"
                                className="px-7 py-3 rounded-full font-semibold text-black bg-brand hover:opacity-90 transition"
                            >
                                Inizia oggi
                            </a>
                            <a
                                href="/about"
                                className="px-7 py-3 rounded-full font-semibold border border-brand text-brand hover:bg-brand hover:text-black transition"
                            >
                                Conosci il team
                            </a>
                        </div>
                    </div>
                    <img
                        src="/images/foto00011.jpg"
                        alt="Team PowerLab"
                        className="w-full h-auto rounded-xl shadow-2xl border border-brand/20"
                    />
                </div>
            </section>

            {/* CTA FINALE */}
            <section className="container mx-auto px-6 py-24 text-center">
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Pronto a fare il prossimo passo?
                </h3>
                <p className="text-neutral-300 max-w-2xl mx-auto mb-10">
                    Ti guidiamo noi, senza complicazioni. Prima ti ascoltiamo, poi
                    progettamo il percorso giusto per te.
                </p>
                <a
                    href="/contact"
                    className="px-10 py-4 rounded-full font-semibold text-black bg-brand hover:opacity-90 transition"
                >
                    Prenota una call
                </a>
            </section>
        </div>
    );
}
