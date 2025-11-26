"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

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

      {/* 🎠 CARROSSEL DE DESTAQUES (AGORA DINÂMICO) */}
      <section className="carousel-section">
        <h2>Destaques da Semana</h2>

        <div className="carousel">
          {products.length === 0 && <p>Nenhum produto encontrado.</p>}

          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={
                  product.image
                    ? product.image
                    : "/instruments/placeholder.jpg"
                }
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>R$ {product.price}</p>
            </div>
          ))}
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
