"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Chi siamo" },
    { href: "/services", label: "Servizi" },
    { href: "/contact", label: "Contatti" },
    { href: "/galleria", label: "Galleria" },
];

export default function NavBar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.png" alt="PowerLab" width={130} height={40} />
                </Link>

                <nav className="flex items-center gap-6 text-sm md:text-base">
                    {nav.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition-colors ${
                                    active ? "text-brand" : "text-white hover:text-brand"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
