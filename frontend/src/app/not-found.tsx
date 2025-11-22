export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você tentou acessar não existe ou foi movida.</p>

      <a
        href="/"
        style={{
          color: "#0070f3",
          marginTop: "1rem",
          display: "inline-block",
        }}
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}
