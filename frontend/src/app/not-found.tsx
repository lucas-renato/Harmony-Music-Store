export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Página não encontrada
      </h1>
      <p>A página que você tentou acessar não existe.</p>
      <a
        href="/"
        style={{
          padding: "10px 20px",
          border: "1px solid #333",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Voltar ao início
      </a>
    </div>
  );
}
