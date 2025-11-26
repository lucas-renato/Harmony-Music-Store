"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import instruments from "@/data/instruments.json";
import Link from "next/link";

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
          filteredItems.map((item) => {
            // mapeia o "slug" da página manualmente
            let slug = "";
            switch (item.id) {
              case 1:
                slug = "guitarrafender";
                break;
              case 2:
                slug = "guitarra-gibson";
                break;
              case 3:
                slug = "violao-yamaha-c40";
                break;
              // ... e assim por diante para cada instrumento que tiver página
              default:
                slug = "";
            }

            return (
              <div key={item.id} className="product-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h2>{item.name}</h2>
                  <p className="category">{item.category}</p>
                  <p className="price">R$ {item.price.toFixed(2)}</p>

                  {slug && (
                    <Link href={`/loja/instrumentos/${slug}`}>
                      <button className="details-btn">Ver detalhes</button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </section>
  );
}
