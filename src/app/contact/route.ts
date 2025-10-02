import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: "Dati mancanti" }, { status: 400 });
        }

        await resend.emails.send({
            from: "PowerLab <noreply@resend.dev>", // puoi cambiare dopo aver verificato il tuo dominio
            to: "powerlab44@gmail.com",
            reply_to: email,
            subject: `Nuovo messaggio da ${name}`,
            html: `
        <h2>Nuovo messaggio dal sito PowerLab</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
