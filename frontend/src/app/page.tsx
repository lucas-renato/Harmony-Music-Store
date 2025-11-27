"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
    // Produtos mockados direto no front
    const data: Product[] = [
      {
        id: 1,
        name: "Guitarra Fender",
        description: "Elétrica",
        price: 2500,
        image: "/instruments/guitarrafender.jpg",
      },
      {
        id: 2,
        name: "Baixo Ibanez",
        description: "4 cordas",
        price: 1800,
        image: "/instruments/baixojazz.jpg",
      },
      {
        id: 3,
        name: "Teclado Yamaha",
        description: "61 teclas",
        price: 1200,
        image: "/instruments/tecladoyamaha.jpg",
      },
    ];
    setProducts(data);
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

      {/* 🎠 CARROSSEL DE DESTAQUES */}
      <section className="carousel-section">
        <h2>Destaques da Semana</h2>

        <div className="carousel">
          {products.length === 0 && <p>Nenhum produto encontrado.</p>}

          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={
                  product.image ? product.image : "/instruments/placeholder.jpg"
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
