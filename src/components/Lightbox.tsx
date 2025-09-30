"use client";
import { useEffect } from "react";

export default function Lightbox({
                                     src, alt, onClose,
                                 }: { src: string; alt: string; onClose: () => void }) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={alt}
                className="max-h-[90vh] max-w-[92vw] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
        </div>
    );
}
