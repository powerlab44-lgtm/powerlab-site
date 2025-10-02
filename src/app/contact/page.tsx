"use client";

import { useState } from "react";

export default function Contact() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget as HTMLFormElement & {
            name: { value: string };
            email: { value: string };
            message: { value: string };
        };

        const payload = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Invio fallito");

            alert("✅ Messaggio inviato! Ti risponderemo a breve.");
            form.reset();
        } catch (err) {
            alert("❌ Errore durante l'invio. Riprova più tardi.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-black min-h-screen">
            {/* Header */}
            <div className="container mx-auto px-6 pt-36 pb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    Parla con <span className="text-brand">PowerLab</span>
                </h1>
                <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
                    Un piccolo passo adesso. Il prossimo lo facciamo insieme.
                </p>
            </div>

            {/* Contenuto */}
            <div className="container mx-auto px-6 pb-28">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* INFO CARD */}
                    <div className="rounded-3xl p-8 md:p-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Contatti</h2>
                        <ul className="space-y-4 text-neutral-300">
                            <li className="flex gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" className="mt-1 text-brand" fill="currentColor"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
                                <div>
                                    <div className="font-medium text-white">Studio PowerLab</div>
                                    <div>Via Monti 7, Castel Goffredo (MN)</div>
                                </div>
                            </li>

                            {/* SOLO WhatsApp Studio */}
                            <li className="flex gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" className="mt-1 text-brand" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.1.36 2.28.55 3.5.55a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.22.19 2.4.55 3.5a1 1 0 0 1-.25 1.01l-2.18 2.28Z"/></svg>
                                <div>
                                    <a href="https://wa.me/393314559446" className="block hover:text-brand transition">
                                        WhatsApp Studio · +39 331 455 9446
                                    </a>
                                </div>
                            </li>

                            {/* Email ufficiale */}
                            <li className="flex gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" className="mt-1 text-brand" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-1.4 3-6.6 4.13L5.4 7h13.2ZM4 18V8.25l7.2 4.5a1 1 0 0 0 1.06 0L20 8.25V18H4Z"/></svg>
                                <div>
                                    <a href="mailto:powerlab44@gmail.com" className="hover:text-brand transition">
                                        powerlab44@gmail.com
                                    </a>
                                    <div className="text-neutral-500 text-sm">Rispondiamo entro 24h</div>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-white/10 text-neutral-400 text-sm">
                            Orari: Lun–Ven 7:00–21:00 • Sab 8:00–14:00
                        </div>
                    </div>

                    {/* FORM CARD */}
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl p-8 md:p-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Scrivici</h2>

                        <div className="space-y-2">
                            <label className="text-sm text-neutral-400">Nome</label>
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-2xl bg-black/60 text-white border border-white/10 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/40 placeholder:text-neutral-500"
                                placeholder="Il tuo nome"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-neutral-400">Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-2xl bg-black/60 text-white border border-white/10 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/40 placeholder:text-neutral-500"
                                placeholder="name@email.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-neutral-400">Messaggio</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="w-full px-4 py-3 rounded-2xl bg-black/60 text-white border border-white/10 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/40 placeholder:text-neutral-500 resize-y"
                                placeholder="Raccontaci obiettivi e tempistiche"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full md:w-auto px-8 py-3 rounded-full font-semibold bg-brand text-black hover:opacity-90 transition disabled:opacity-60"
                        >
                            {loading ? "Invio..." : "Invia"}
                        </button>

                        <p className="text-xs text-neutral-500">
                            Inviando accetti la nostra informativa sul trattamento dei dati.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
