"use client";

import Image from "next/image";
import { useState } from "react";

export default function Logo() {
    const [src, setSrc] = useState("/logo_powerlab_large.png"); // favorite
    return (
        <Image
            src={src}
            alt="PowerLab Logo"
            width={220}
            height={80}
            priority
            onError={() => setSrc("/logo_powerlab_large.png")} // fallback
        />
    );

}
