// src/app/candidatura/page.tsx
"use client";

export default function Candidatura() {
    // Sostituisci con il tuo link "embed" del modulo:
    // In Google Forms: Invia ➜ </> Incorpora ➜ copia l'URL che finisce con /viewform?embedded=true
    const FORM_EMBED_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLSfa5ypRF87cPSRnAm9U0AshLdxHLAzJdwX5cgYzvAu7tn_e_A/viewform?usp=preview";

    return (
        <main className="min-h-screen bg-black text-white">
            <section className="max-w-5xl mx-auto px-6 py-20">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Candidatura <span className="text-brand">PowerLab</span>
                    </h1>
                    <p className="mt-4 text-neutral-300">
                        Compila il questionario: ci aiuterà a capire se e come iniziare il percorso insieme.
                    </p>
                </header>

                {/* Wrapper responsive per l'iframe */}
                <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
                    <div className="pt-[165%] md:pt-[120%] lg:pt-[100%]" />
                    <iframe
                        title="Candidatura PowerLab"
                        src={FORM_EMBED_URL}
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                    />
                </div>

                <p className="mt-6 text-sm text-neutral-500 text-center">
                    Hai problemi a visualizzare il form?{" "}
                    <a
                        href={FORM_EMBED_URL.replace("&embedded=true", "")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand underline underline-offset-4"
                    >
                        Aprilo in una nuova scheda
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}
