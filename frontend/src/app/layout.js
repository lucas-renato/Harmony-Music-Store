import "./globals.css";

export const metadata = {
  title: "Harmony Music Store",
  description: "A sua loja de instrumentos musicais 🎵",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <nav>
            <h1>Harmony Music Store</h1>
            <ul>
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/produtos">Produtos</a>
              </li>
              <li>
                <a href="/sobre">Sobre</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <div className="footer-container">
            <div className="footer-item">
              <h3>Entrega Gratuita</h3>
              <p>Para pedidos acima de 300 reais.</p>
            </div>

            <div className="footer-item">
              <h3>Devolução em 90 dias</h3>
              <p>
                Se os produtos apresentarem problemas, entre em contato com
                nossa equipe de suporte.
              </p>
            </div>

            <div className="footer-item">
              <h3>Pagamento Seguro</h3>
              <p>
                Pagamento 100% seguro. Seus dados estão protegidos durante toda
                a compra.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
