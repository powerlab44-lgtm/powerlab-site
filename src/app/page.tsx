"use client";

import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6
                     bg-gradient-to-b from-black via-black to-green-900">

            {/* LOGO CENTRALE */}
            <div className="mb-10">
                <Image
                    src="/logo.png"
                    alt="PowerLab Logo"
                    width={320}
                    height={120}
                    className="mx-auto drop-shadow-[0_6px_20px_rgba(0,255,0,0.5)]"
                />npm run dev
            </div>

            {/* HERO TEXT */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl">
                Un posto dove ti senti a <br />
                <span className="text-brand">casa,</span> <br />
                un passo <span className="text-brand">alla volta.</span>
            </h1>

            <p className="mt-6 text-neutral-300 text-lg md:text-xl max-w-2xl">
                Benvenuto in <span className="text-brand font-semibold">PowerLab</span>:
                il tuo angolo di performance, benessere e crescita. <br />
                Un ambiente studiato per trasformare la tua energia in risultati concreti.
            </p>

            {/* CTA */}
            <div className="mt-10">
                <a
                    href="/contact"
                    className="inline-block px-10 py-4 rounded-full text-lg font-semibold
                     border border-white/20 bg-white text-black hover:bg-brand hover:text-black
                     hover:border-brand transition-all duration-300 shadow-lg"
                >
                    Prenota una call
                </a>
            </div>
        </main>
    );
}
