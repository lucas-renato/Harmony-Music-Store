"use client";

import Link from "next/link";
import "@/app/globals.css";

export default function Favoritos() {
  const favoriteItems = [
    {
      id: 1,
      name: "Guitarra Fender Stratocaster",
      price: 4299.0,
      category: "Cordas",
      image: "/instruments/guitarrafender.jpg",
      description:
        "Guitarra elétrica icônica com timbre brilhante, versátil para todos os estilos musicais.",
    },
  ];

  return (
    <section className="store-section">
      <h1 className="store-title">Favoritos</h1>

      <div className="store-grid">
        {favoriteItems.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />

            <div className="product-info">
              <h2>{item.name}</h2>
              <p className="category">{item.category}</p>
              <p className="price">R$ {item.price.toFixed(2)}</p>
              <p className="product-description">{item.description}</p>

              <div className="card-buttons">
                <button className="details-btn">
                  <Link href={`/loja/instrumentos/guitarrafender`}>
                    Ver detalhes
                  </Link>
                </button>
                <button className="add-to-cart-btn">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
