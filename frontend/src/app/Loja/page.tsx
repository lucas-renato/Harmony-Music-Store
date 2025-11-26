"use client";

import instruments from "@/data/instruments.json";

export default function Loja() {
  return (
    <section className="store-section">
      <h1 className="store-title">Nossos Produtos</h1>

      <div className="store-grid">
        {instruments.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />

            <div className="product-info">
              <h2>{item.name}</h2>
              <p className="category">{item.category}</p>
              <p className="price">R$ {item.price.toFixed(2)}</p>

              <button className="details-btn">Ver detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
