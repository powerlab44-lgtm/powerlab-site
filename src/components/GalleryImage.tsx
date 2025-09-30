"use client";

import { useState } from "react";

type Props = { index: number; className?: string };

// Prova automaticamente questi pattern:
// foto00001.jpg / foto00001.jpeg / foto0001.jpg / foto0001.jpeg / foto1.jpg / foto1.jpeg
export default function GalleryImage({ index, className = "" }: Props) {
    const candidates = [
        `/images/foto${String(index).padStart(5, "0")}.jpg`,
        `/images/foto${String(index).padStart(5, "0")}.jpeg`,
        `/images/foto${String(index).padStart(4, "0")}.jpg`,
        `/images/foto${String(index).padStart(4, "0")}.jpeg`,
        `/images/foto${index}.jpg`,
        `/images/foto${index}.jpeg`,
    ];

    const [srcIndex, setSrcIndex] = useState(0);
    const src = candidates[srcIndex];

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={`Foto ${index}`}
            loading="lazy"
            className={className}
            onError={() => {
                if (srcIndex < candidates.length - 1) setSrcIndex(srcIndex + 1);
            }}
        />
    );
}
