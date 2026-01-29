import Link from "next/link";

const WHATSAPP_LINK =
    "https://wa.me/393314559446?text=Ciao%20PowerLab%2C%20vorrei%20informazioni%20sui%20servizi.";
const EMAIL = "powerlab44@gmail.com";

// TODO: incolla qui il link esatto di CoachPlus quando lo hai
const COACHPLUS_LINK = "https://coachplus.com/IL_TUO_LINK";

type Service = {
    title: string;
    subtitle: string;
    who: string;
    includes: string[];
    ctaPrimary: { label: string; href: string; external?: boolean };
    ctaSecondary?: { label: string; href: string; external?: boolean };
};

const services: Service[] = [
    {
        title: "1to1 Personal Training",
        subtitle: "Allenamento 1:1 su misura",
        who: "Per chi vuole risultati rapidi, massima attenzione e un piano 100% personalizzato.",
        includes: [
            "Valutazione iniziale + obiettivi chiari",
            "Programma progressivo e monitoraggio costante",
            "Correzione tecnica e coaching durante la seduta",
        ],
        ctaPrimary: { label: "Prenota una call", href: "/contact" },
        ctaSecondary: { label: "Scrivici su WhatsApp", href: WHATSAPP_LINK, external: true },
    },
    {
        title: "1to2 Duo Training",
        subtitle: "Allenamento 1:2",
        who: "Per coppie/amici che vogliono allenarsi insieme senza perdere qualità e personalizzazione.",
        includes: [
            "Programmazione su misura per entrambi",
            "Sedute dinamiche e stimolanti",
            "Focus su tecnica, progressione e costanza",
        ],
        ctaPrimary: { label: "Prenota una call", href: "/contact" },
        ctaSecondary: { label: "Scrivici su WhatsApp", href: WHATSAPP_LINK, external: true },
    },
    {
        title: "1to3 Small Group",
        subtitle: "Allenamento 1:3",
        who: "Per chi cerca energia di gruppo con attenzione del coach e lavoro mirato.",
        includes: [
            "Gruppo ristretto (massimo 3 persone)",
            "Obiettivi e progressioni per ciascuno",
            "Allenamenti completi: forza, tono, performance",
        ],
        ctaPrimary: { label: "Prenota una call", href: "/contact" },
        ctaSecondary: { label: "Scrivici su WhatsApp", href: WHATSAPP_LINK, external: true },
    },
    {
        title: "Coaching Online",
        subtitle: "Programma a distanza (CoachPlus)",
        who: "Per chi vuole un percorso seguito anche da remoto, con feedback e piano aggiornato.",
        includes: [
            "Scheda personalizzata e aggiornamenti periodici",
            "Check-in, feedback e correzioni tecniche (video)",
            "Supporto su abitudini, routine e progressione",
        ],
        ctaPrimary: { label: "Vai a CoachPlus", href: COACHPLUS_LINK, external: true },
        ctaSecondary: { label: "Scrivici via email", href: `mailto:${EMAIL}` , external: true },
    },
];

export default function ServiziPage() {
    return (
        <main className="bg-black text-white">
            {/* HERO */}
            <section className="container mx-auto px-6 pt-20 md:pt-24 pb-10">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Servizi <span className="text-brand">PowerLab</span>
                </h1>
                <p className="mt-4 text-neutral-300 max-w-2xl text-lg">
                    Scegli il formato giusto per te: 1to1, 1to2, 1to3 oppure Coaching Online.
                    Ti guidiamo passo dopo passo.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                        href="/contact"
                        className="px-6 py-3 rounded-full bg-brand text-black font-semibold hover:opacity-90 transition"
                    >
                        Prenota una call
                    </Link>
                    <Link
                        href={WHATSAPP_LINK}
                        target="_blank"
                        className="px-6 py-3 rounded-full ring-1 ring-white/20 bg-white/5 hover:bg-white/10 transition"
                    >
                        WhatsApp
                    </Link>
                </div>
            </section>

            {/* GRID SERVIZI */}
            <section className="container mx-auto px-6 pb-16 md:pb-24">
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="rounded-3xl p-7 ring-1 ring-white/10 bg-white/5"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
                                    <p className="mt-1 text-brand font-medium">{s.subtitle}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-neutral-300">{s.who}</p>

                            <ul className="mt-5 space-y-2 text-neutral-300">
                                {s.includes.map((x) => (
                                    <li key={x} className="flex gap-2">
                                        <span className="text-brand">•</span>
                                        <span>{x}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <Link
                                    href={s.ctaPrimary.href}
                                    target={s.ctaPrimary.external ? "_blank" : undefined}
                                    className="px-6 py-3 rounded-full bg-brand text-black font-semibold hover:opacity-90 transition"
                                >
                                    {s.ctaPrimary.label}
                                </Link>

                                {s.ctaSecondary && (
                                    <Link
                                        href={s.ctaSecondary.href}
                                        target={s.ctaSecondary.external ? "_blank" : undefined}
                                        className="px-6 py-3 rounded-full ring-1 ring-white/20 bg-white/5 hover:bg-white/10 transition"
                                    >
                                        {s.ctaSecondary.label}
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* INFO CONTATTI */}
                <div className="mt-10 rounded-3xl p-7 ring-1 ring-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                    <h3 className="text-xl md:text-2xl font-bold">Hai dubbi su quale scegliere?</h3>
                    <p className="mt-2 text-neutral-300">
                        Scrivici su WhatsApp o mandaci una mail: ti consigliamo il servizio giusto.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <Link
                            href={WHATSAPP_LINK}
                            target="_blank"
                            className="px-6 py-3 rounded-full bg-brand text-black font-semibold hover:opacity-90 transition"
                        >
                            WhatsApp
                        </Link>
                        <Link
                            href={`mailto:${EMAIL}`}
                            className="px-6 py-3 rounded-full ring-1 ring-white/20 bg-white/5 hover:bg-white/10 transition"
                        >
                            Email
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
