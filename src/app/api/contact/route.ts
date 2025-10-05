// app/api/contact/route.ts
import { Resend } from "resend";

/**
 * Contatto PowerLab (Resend) – no-any, compatibile con ESLint strict
 */

// Evita caching/ISR su questa API
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// ======= CONFIG (via ENV su Vercel) =======
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const EMAIL_TO = process.env.EMAIL_TO ?? "powerlab44@gmail.com";
const EMAIL_FROM =
    process.env.EMAIL_FROM ?? "PowerLab <onboarding@resend.dev>";

// ======= RATE LIMIT (in-memory, best-effort) =======
const WINDOW_MS = 15 * 1000; // 15s
const MAX_REQ = 3; // max 3 richieste/15s per IP
const hits = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
    const now = Date.now();
    const arr = hits.get(ip) ?? [];
    const filtered = arr.filter((t) => now - t < WINDOW_MS);
    filtered.push(now);
    hits.set(ip, filtered);
    return filtered.length <= MAX_REQ;
}

// ======= UTILS =======
function json(data: unknown, status = 200): Response {
    return new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

// ======= TYPES =======
interface Body {
    name?: string;
    email?: string;
    message?: string;
}

// ======= HANDLER =======
export async function POST(req: Request): Promise<Response> {
    try {
        // Rate limit per IP
        const ipHeader = req.headers.get("x-forwarded-for") ?? "";
        const ip =
            ipHeader.split(",")[0].trim() ||
            req.headers.get("x-real-ip") ||
            "unknown";
        if (!rateLimit(ip)) {
            return json(
                { success: false, error: "Troppe richieste. Riprova tra poco." },
                429
            );
        }

        // Body e validazione
        const parsed = (await req.json()) as unknown;
        const { name, email, message } = (parsed ?? {}) as Body;

        if (!name || !email || !message) {
            return json(
                { success: false, error: "Campi mancanti: name, email, message" },
                400
            );
        }
        if (!isValidEmail(email)) {
            return json({ success: false, error: "Email non valida" }, 400);
        }

        if (!RESEND_API_KEY) {
            return json(
                {
                    success: false,
                    error:
                        "Configurazione email mancante (RESEND_API_KEY). Contatta l'amministratore.",
                },
                500
            );
        }

        // Invia email
        const resend = new Resend(RESEND_API_KEY);
        await resend.emails.send({
            from: EMAIL_FROM,
            to: EMAIL_TO,
            replyTo: email,
            subject: "Nuovo messaggio dal sito PowerLab",
            text: `Hai ricevuto un nuovo messaggio dal form contatti.

Nome: ${name}
Email: ${email}

Messaggio:
${message}
`,
            html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#111">
          <h2>Nuovo messaggio dal sito <span style="color:#22c55e">PowerLab</span></h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Messaggio:</strong></p>
          <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px">${escapeHtml(
                message
            )}</pre>
        </div>
      `,
        });

        return json({ success: true, message: "Email inviata con successo ✅" });
    } catch (err: unknown) {
        // niente any: gestiamo unknown
        const msg =
            err instanceof Error
                ? err.message
                : typeof err === "string"
                    ? err
                    : "Errore interno";
        console.error("[/api/contact] error:", err);
        return json({ success: false, error: msg }, 500);
    }
}
