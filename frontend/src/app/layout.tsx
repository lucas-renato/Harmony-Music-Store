import Link from "next/link";
import "./globals.css";
export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <nav className="navbar">
            {/* ESQUERDA - logo e links */}
            <div className="nav-left">
              <img src="/logohms.jpg" alt="Logo HMS" className="logo" />

              <ul>
                <li>
                  <Link href="/">Início</Link>
                </li>
                <li>
                  <Link href="/loja">Loja</Link>
                </li>
              </ul>
            </div>

            {/* CENTRO - barra de pesquisa */}
            <div className="nav-center">
              <form action="/loja" className="search-wrapper">
                <input
                  name="search"
                  type="text"
                  placeholder="Buscar instrumentos..."
                />
                <button type="submit">
                  <img src="/lupa.png" alt="Buscar" />
                </button>
              </form>
            </div>

            {/* DIREITA - ícones */}
            <div className="nav-right">
              <img src="/coracao.png" alt="Favoritos" className="icon" />
              <img src="/cart.png" alt="Carrinho" className="icon" />
            </div>
          </nav>
        </header>

        {/* 🚀 AQUI ESTÁ O MAIN QUE FALTAVA */}
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
