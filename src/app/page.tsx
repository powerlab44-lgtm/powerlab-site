// app/page.tsx
import Image from "next/image";
import Link from "next/link";

const heroImages = [
    "/images/foto00005.jpg",
    "/images/foto00028.jpg",
    "/images/foto00059.jpg",
];

const services = [
    {
        title: "Personal Training",
        desc: "Programma 1:1 su misura.",
        href: "/servizi#personal",
        img: "/images/foto00011.jpg",
    },
    {
        title: "Small Group",
        desc: "Allenamenti di gruppo mirati.",
        href: "/servizi#small-group",
        img: "/images/foto00023.jpg",
    },
    {
        title: "Performance",
        desc: "Forza, potenza, prevenzione.",
        href: "/servizi#performance",
        img: "/images/foto00031.jpg",
    },
];

const gallery = [
    "/images/foto00091.jpg",
    "/images/foto00068.jpg",
    "/images/foto00029.jpg",
    "/images/foto00059.jpg",
    "/images/foto00013.jpg",
    "/images/foto00082.jpg",
];

const testimonials = [
    {
        name: "Giulia",
        quote:
            "Ambiente curato e coach attentissimi: in 3 mesi più energia e zero dolori.",
    },
    {
        name: "Luca",
        quote:
            "Metodo chiaro, misurazioni periodiche e risultati reali. Consigliatissimo.",
    },
    {
        name: "Sara",
        quote:
            "Mi sento seguita davvero: piano su misura e progressi ad ogni seduta.",
    },
];

export default function Home() {
    return (
        <main className="bg-black text-white">
            {/* HERO */}
            <section className="relative min-h-[72vh] md:min-h-[78vh] overflow-hidden">
                {/* Immagine: su mobile object-contain per mostrare tutti e tre; da md in su torna cover */}
                <div className="absolute inset-0">
                    <Image
                        src={heroImages[0]}
                        alt="PowerLab Team"
                        fill
                        priority
                        sizes="100vw"
                        className="
              object-contain           /* mostra tutta l'immagine su mobile */
              md:object-cover          /* copertura completa da tablet/desktop */
              object-center
              opacity-90
              bg-black                  /* eventuali bande ai lati su mobile = nere, integrate al layout */
            "
                    />
                    {/* Gradiente per lettura testo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                </div>

                {/* Testo ABBASSATO */}
                <div
                    className="
            relative z-10 container mx-auto px-6
            pt-40 md:pt-48              /* qui abbassi le scritte */
            pb-14
            max-w-5xl
          "
                >
                    <h1
                        className="
              text-4xl md:text-6xl font-extrabold leading-tight
            "
                    >
                        Un posto dove ti senti a{" "}
                        <span className="text-brand">casa</span>, un passo
                        <br className="hidden md:block" />{" "}
                        <span className="text-brand">alla volta</span>.
                    </h1>

                    <p className="mt-5 text-neutral-300 max-w-2xl text-lg">
                        Percorsi su misura, tecnologie di valutazione e coach che ti
                        seguono davvero. Pensiamo a tutto noi: tu porti solo la voglia di
                        stare bene.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-full bg-brand text-black font-semibold hover:opacity-90 transition"
                        >
                            Prenota una call
                        </Link>
                        <Link
                            href="/galleria"
                            className="px-6 py-3 rounded-full ring-1 ring-white/20 bg-white/5 hover:bg-white/10 transition"
                        >
                            Guarda la galleria
                        </Link>
                    </div>
                </div>
            </section>

            {/* SERVIZI */}
            <section className="container mx-auto px-6 py-14 md:py-20">
                <div className="flex items-end justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Servizi</h2>
                    <Link href="/servizi" className="text-brand text-sm md:text-base hover:opacity-80">
                        Vedi tutto →
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <Link
                            key={s.title}
                            href={s.href}
                            className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5"
                        >
                            <div className="relative h-56 md:h-60">
                                <Image
                                    src={s.img}
                                    alt={s.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold">{s.title}</h3>
                                <p className="mt-1 text-neutral-400">{s.desc}</p>
                                <div className="mt-4 text-brand text-sm">Scopri di più →</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* GALLERIA */}
            <section className="container mx-auto px-6 pb-14 md:pb-20">
                <div className="flex items-end justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Galleria</h2>
                    <Link href="/galleria" className="text-brand text-sm md:text-base hover:opacity-80">
                        Apri galleria →
                    </Link>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                    {gallery.map((src, i) => (
                        <div
                            key={i}
                            className="mb-4 break-inside-avoid rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5"
                        >
                            <div className="relative w-full h-[220px] md:h-[260px]">
                                <Image
                                    src={src}
                                    alt={`Galleria ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIANZE */}
            <section className="container mx-auto px-6 pb-16 md:pb-24">
                <div className="flex items-end justify-between mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Le persone dicono di noi</h2>
                    <Link href="/testimonianze" className="text-brand text-sm md:text-base hover:opacity-80">
                        Leggi tutte →
                    </Link>
                </div>

                <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-2">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="snap-start min-w-[82%] sm:min-w-[420px] bg-white/5 ring-1 ring-white/10 rounded-3xl p-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-white/10" />
                                <div className="font-medium">{t.name}</div>
                            </div>
                            <p className="mt-4 text-neutral-300">{t.quote}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA CONTATTI */}
            <section className="relative">
                <div className="container mx-auto px-6 pb-20">
                    <div className="rounded-3xl p-8 md:p-10 ring-1 ring-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold">Pronto per iniziare?</h3>
                            <p className="mt-2 text-neutral-400">
                                Scrivici su WhatsApp o prenota una call.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="https://wa.me/393314559446?text=Ciao%20PowerLab%2C%20vorrei%20informazioni."
                                target="_blank"
                                className="px-6 py-3 rounded-full font-semibold bg-brand text-black hover:opacity-90 transition"
                            >
                                WhatsApp
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-full ring-1 ring-white/20 bg-white/5 hover:bg-white/10 transition"
                            >
                                Prenota una call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
