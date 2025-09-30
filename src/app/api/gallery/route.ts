import { NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";

export async function GET() {
    const dir = join(process.cwd(), "public", "images");

    // prendi solo i nomi tipo "foto123.jpg|jpeg|png|webp"
    const files = readdirSync(dir)
        .filter((f) => /^foto\d+\.(jpe?g|png|webp)$/i.test(f))
        // ordinamento "naturale" (10 dopo 9, non dopo 1)
        .sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
        );

    // ritorna i percorsi pronti per <Image src="/images/..." />
    return NextResponse.json(files.map((f) => `/images/${f}`));
}
