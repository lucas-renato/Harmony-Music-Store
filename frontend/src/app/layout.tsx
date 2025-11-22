import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <nav className="navbar">
            {/* ESQUERDA - logo e links */}
            <div className="nav-left">
              <h1>Harmony Music Store</h1>
              <ul>
                <li>
                  <a href="/">Início</a>
                </li>
                <li>
                  <a href="/loja">Loja</a>
                  <Link href="/loja"></Link>
                </li>
              </ul>
            </div>

            {/* CENTRO - barra de pesquisa */}
            <div className="nav-center">
              <input
                type="text"
                placeholder="Buscar instrumentos..."
                className="search-bar"
              />
            </div>

            {/* DIREITA - ícones */}
            <div className="nav-right">
              <img src="/heart.png" alt="Favoritos" className="icon" />
              <img src="/cart.png" alt="Carrinho" className="icon" />
            </div>
          </nav>
        </header>

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
