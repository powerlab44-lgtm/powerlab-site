export default function ImgTest() {
    return (
        <main style={{ padding: 32, background: "black", minHeight: "100vh", color: "white" }}>
            <h1>Test immagine</h1>
            <p>Se sotto non vedi l’immagine, il path è sbagliato.</p>
            <div style={{ border: "1px solid #8BC53F", borderRadius: 12, padding: 12, maxWidth: 600 }}>
                <img
                    src="/images/foto0001.jpg"   // <-- DEVE esistere esattamente così
                    alt="test"
                    style={{ width: "100%", height: "auto", display: "block" }}
                />
            </div>
            <p style={{ marginTop: 12 }}>
                Prova anche a visitare direttamente: <code>/images/foto0001.jpg</code>
            </p>
        </main>
    );
}
