import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return new Response(
                JSON.stringify({ success: false, error: "Manca RESEND_API_KEY" }),
                { status: 500 }
            );
        }

        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ success: false, error: "Campi mancanti" }),
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "PowerLab <onboarding@resend.dev>",
            to: "powerlab44@gmail.com",
            reply_to: email,
            subject: `Nuovo messaggio da ${name}`,
            text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
        });

        return new Response(
            JSON.stringify({ success: true, message: "Email inviata con successo ✅" }),
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Errore invio email:", error?.message || error);
        return new Response(
            JSON.stringify({ success: false, error: "Errore interno" }),
            { status: 500 }
        );
    }
}
