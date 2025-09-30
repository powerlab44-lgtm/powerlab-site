"use client";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                {/* LOGO */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="PowerLab Logo"
                        className="h-12 w-auto"
                    />
                </Link>

                {/* MENU */}
                <div className="flex space-x-8 text-lg font-medium">
                    <Link href="/" className="hover:text-[#8BC53F] transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-[#8BC53F] transition-colors">
                        Chi siamo
                    </Link>
                    <Link href="/servizi" className="hover:text-[#8BC53F] transition-colors">
                        Servizi
                    </Link>
                    <Link href="/contact" className="hover:text-[#8BC53F] transition-colors">
                        Contatti
                    </Link>
                    <Link href="/galleria" className="hover:text-[#8BC53F] transition-colors">
                        Galleria
                    </Link>
                </div>
            </div>
        </nav>
    );
}
