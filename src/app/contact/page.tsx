"use client";

import { useState } from "react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState<null | boolean>(null);
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setOk(null);
        setMsg("");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            setOk(res.ok && data?.success);
            setMsg(data?.message || (res.ok ? "Messaggio inviato!" : "Errore nell'invio"));
            if (res.ok) form.reset();
        } catch (err: any) {
            setOk(false);
            setMsg("Errore di rete, riprova.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-black min-h-screen">
            {/* Header */}
            <div className="container mx-auto px-6 pt-32 pb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    Parla con <span className="text-brand">PowerLab</span>
                </h1>
                <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
                    Un piccolo passo adesso. Il prossimo lo facciamo insieme.
                </p>
            </div>

            {/* Contenuto */}
            <div className="container mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-start">
                    {/* INFO CARD */}
                    <div className="rounded-3xl p-8 md:p-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] text-neutral-300">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contatti</h2>

                        <ul className="space-y-5">
                            {/* Indirizzo */}
                            <li className="flex gap-3">
                                <svg width="22" height="22" viewBox="0 0 24 24" className="mt-1 text-brand" fill="currentColor">
                                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                                </svg>
                                <div>
                                    <div className="font-medium text-white">Studio PowerLab</div>
                                    <div>Via Monti 7, Castel Goffredo (MN)</div>
                                </div>
                            </li>

                            {/* WhatsApp */}
                            <li className="flex gap-3">
                                <svg width="22" height="22" viewBox="0 0 24 24" className="mt-1 text-brand" fill="currentColor">
                                    <path d="M16.2 13.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.1-.4-2-1.3-.7-.6-1.3-1.5-1.5-1.7-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.2.1-.3 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.8.1.2 2 3.1 4.8 4.4 1.8.8 2.5.9 3.4 1 .3 0 .7 0 1.1-.1.4-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z" />
                                    <path d="M20 12c0 4.4-3.6 8-8 8-1.4 0-2.8-.4-4-1l-4 1 1-3.9c-.7-1.2-1-2.6-1-4.1 0-4.4 3.6-8 8-8s8 3.6 8 8z" fillOpacity=".2" />
                                </svg>
                                <div>
                                    <div className="font-medium text-white">WhatsApp</div>
                                    <a
                                        className="hover:text-brand transition"
                                        href="https://wa.me/393314559446?text=Ciao%20PowerLab%2C%20vorrei%20informazioni."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +39 331 455 9446
                                    </a>
                                </div>
                            </li>

                            {/* Email */}
                            <li className="flex gap-3">
                                <svg width="22" height="22" viewBox="0 0 24 24" className="mt-1 text-brand" fill="currentColor">
                                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-1.4 3-6.6 4.13L5.4 7h13.2ZM4 18V8.25l7.2 4.5a1 1 0 0 0 1.06 0L20 8.25V18H4Z" />
                                </svg>
                                <div>
                                    <div className="font-medium text-white">Email</div>
                                    <a className="hover:text-brand transition" href="mailto:powerlab44@gmail.com">
                                        powerlab44@gmail.com
                                    </a>
                                    <div className="text-neutral-500 text-sm mt-1">Rispondiamo entro 24h</div>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-white/10 text-neutral-400 text-sm">
                            Orari: Lun–Ven 7:00–21:00 • Sab 8:00–14:00
                        </div>
                    </div>

                    {/* FORM */}
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

                        {/* stato invio */}
                        {ok !== null && (
                            <div
                                className={`text-sm ${
                                    ok ? "text-emerald-400" : "text-red-400"
                                }`}
                            >
                                {msg}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full md:w-auto px-8 py-3 rounded-full font-semibold bg-brand text-black hover:opacity-90 disabled:opacity-50 transition"
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
