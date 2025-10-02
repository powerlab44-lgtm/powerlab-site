import { Resend } from "resend";
import { NextResponse } from "next/server";

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

/** Type guard per validare il body */
function isContactForm(x: unknown): x is ContactForm {
    if (!x || typeof x !== "object") return false;
    const obj = x as Record<string, unknown>;
    return (
        typeof obj.name === "string" &&
        typeof obj.email === "string" &&
        typeof obj.message === "string"
    );
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { success: false, error: "Manca RESEND_API_KEY" },
            { status: 500 }
        );
    }

    try {
        const bodyUnknown = await req.json();
        if (!isContactForm(bodyUnknown)) {
            return NextResponse.json(
                { success: false, error: "Campi mancanti" },
                { status: 400 }
            );
        }

        const { name, email, message } = bodyUnknown;

        await resend.emails.send({
            from: "PowerLab <onboarding@resend.dev>",
            to: "powerlab44@gmail.com", // ← mail di destinazione
            subject: "Nuovo messaggio dal sito PowerLab 🚀",
            text: `
Hai ricevuto un nuovo messaggio dal form di contatto:

• Nome: ${name}
• Email: ${email}

Messaggio:
${message}
      `.trim(),
        });

        return NextResponse.json(
            { success: true, message: "Email inviata con successo" },
            { status: 200 }
        );
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Errore sconosciuto";
        console.error("Errore invio email:", msg);
        return NextResponse.json(
            { success: false, error: msg },
            { status: 500 }
        );
    }
}
