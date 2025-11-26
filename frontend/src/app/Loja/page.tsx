"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import instruments from "@/data/instruments.json";

export default function Loja() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // FILTRO PRINCIPAL (categoria + busca)
  const filteredItems = instruments.filter((item) => {
    const matchesCategory =
      selectedCategory === "Todos" || item.category === selectedCategory;

    const matchesSearch = item.name.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  // PEGAR CATEGORIAS DINAMICAMENTE
  const categories = ["Todos", ...new Set(instruments.map((i) => i.category))];

  return (
    <section className="store-section">
      <h1 className="store-title">✨ Nossos Produtos</h1>

      {/* FILTRO CENTRALIZADO */}
      <div className="filter-wrapper">
        <label>Filtrar por categoria:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="store-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-info">
                <h2>{item.name}</h2>
                <p className="category">{item.category}</p>
                <p className="price">R$ {item.price.toFixed(2)}</p>
                <button className="details-btn">Ver detalhes</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Nenhum item encontrado.</p>
        )}
      </div>
    </section>
  );
}
