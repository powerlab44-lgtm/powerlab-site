"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavLink({
                     href,
                     children,
                     onClick,
                 }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    const pathname = usePathname();
    const active =
        pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`px-3 py-2 rounded-full transition-colors ${
                active
                    ? "text-brand"
                    : "text-white/80 hover:text-white"
            }`}
        >
            {children}
        </Link>
    );
}

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const items = [
        { href: "/", label: "Home" },
        { href: "/about", label: "Chi siamo" },
        { href: "/services", label: "Servizi" },
        { href: "/contact", label: "Contatti" },
        { href: "/galleria", label: "Galleria" },
        { href: "/testimonianze", label: "Testimonianze" }, // NEW
    ];

    return (
        <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="PowerLab"
                        className="h-7 w-auto"
                    />
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-2">
                    {items.map((it) => (
                        <NavLink key={it.href} href={it.href}>
                            {it.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    aria-label="Apri menu"
                    className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 p-2 text-white/80"
                    onClick={() => setOpen((v) => !v)}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                </button>
            </nav>

            {/* Mobile drawer */}
            {open && (
                <div className="md:hidden border-t border-white/10 bg-black">
                    <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1">
                        {items.map((it) => (
                            <NavLink key={it.href} href={it.href} onClick={() => setOpen(false)}>
                                {it.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
