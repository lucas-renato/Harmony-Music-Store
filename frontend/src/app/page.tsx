import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* 🌟 HERO BANNER */}

      <section className="hero">
        <div className="hero-content">
          <h1>Encontre o Som Perfeito</h1>
          <p>Instrumentos de alta qualidade para músicos de todos os níveis.</p>
          <Link href="/loja">
            <button className="hero-btn">Ver Produtos</button>
          </Link>
        </div>
      </section>

      {/* 🎠 CARROSSEL DE DESTAQUES */}
      <section className="carousel-section">
        <h2>Destaques da Semana</h2>

        <div className="carousel">
          <div className="product-card">
            <img src="/instruments/guitarrafender.jpg" alt="Guitarra" />
            <h3>Guitarra Fender</h3>
            <p>R$ 1.999</p>
          </div>

          <div className="product-card">
            <img src="/instruments/tecladoyamaha.jpg" alt="Teclado" />
            <h3>Teclado Yamaha</h3>
            <p>R$ 1.299</p>
          </div>

          <div className="product-card">
            <img src="/instruments/violino.jpg" alt="Violino" />
            <h3>Violino 4/4</h3>
            <p>R$ 899</p>
          </div>
        </div>
      </section>

      {/* ⭐ DEPOIMENTOS */}
      <section className="testimonials">
        <h2>O que nossos clientes dizem</h2>

        <div className="testimonials-container">
          <div className="testimonial">
            <p>"Atendimento excelente e entrega super rápida!"</p>
            <span>— João M.</span>
          </div>

          <div className="testimonial">
            <p>"A qualidade dos produtos é impecável. Recomendo demais."</p>
            <span>— Carla A.</span>
          </div>

          <div className="testimonial">
            <p>"A melhor loja de instrumentos que já comprei!"</p>
            <span>— Pedro L.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
