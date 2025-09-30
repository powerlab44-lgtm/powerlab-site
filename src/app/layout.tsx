import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar"; // 👈 percorso RELATIVO corretto (da /app a /components)

export const metadata: Metadata = {
    title: "PowerLab",
    description: "Benessere e crescita – PowerLab",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="it">
        <body className="bg-black text-white">
        <NavBar />       {/* 👈 qui montiamo i menu */}
        {children}
        </body>
        </html>
    );
}
