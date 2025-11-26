// src/app/loja/instrumentos/guitarra-fender.tsx
"use client";

import { useState } from "react";

export default function GuitarraFender() {
  const [favorited, setFavorited] = useState(false);

  const handleFavorite = () => {
    setFavorited(!favorited);
  };

  const handleAddToCart = () => {
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <section className="product-detail">
      <div className="detail-container">
        {/* IMAGEM */}
        <div className="image-section">
          <img
            src="/instruments/guitarrafender.jpg"
            alt="Guitarra Fender Stratocaster"
            className="detail-image"
          />
        </div>

        {/* INFORMAÇÕES */}
        <div className="detail-info">
          <h1 className="detail-title">Guitarra Fender Stratocaster</h1>
          <p className="detail-category">Categoria: Cordas</p>

          <h2 className="detail-price">R$ 4.299,00</h2>

          <p className="detail-description">
            A Fender Stratocaster é a escolha perfeita para guitarristas que
            buscam versatilidade e timbre clássico. Com acabamento impecável,
            corpo confortável e sonoridade brilhante, ela é ideal tanto para
            apresentações ao vivo quanto para gravações em estúdio.
          </p>

          <div className="buttons-section">
            <button onClick={handleAddToCart} className="add-cart-btn">
              Adicionar ao Carrinho
            </button>

            <button
              onClick={handleFavorite}
              className={`favorite-btn ${favorited ? "favorited" : ""}`}
            >
              {favorited ? "❤️ Favorito" : "🤍 Favoritar"}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-detail {
          padding: 40px 20px;
          display: flex;
          justify-content: center;
        }

        .detail-container {
          display: flex;
          flex-wrap: wrap;
          max-width: 1000px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .image-section {
          flex: 1 1 400px;
          min-width: 300px;
        }

        .detail-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .detail-info {
          flex: 1 1 400px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .detail-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .detail-category {
          font-size: 1rem;
          color: #555;
          margin-bottom: 20px;
        }

        .detail-price {
          font-size: 1.8rem;
          font-weight: 700;
          color: #f4a907;
          margin-bottom: 20px;
        }

        .detail-description {
          font-size: 1rem;
          color: #333;
          line-height: 1.5;
          margin-bottom: 30px;
        }

        .buttons-section {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .add-cart-btn {
          flex: 1;
          padding: 12px 20px;
          background-color: #1d4ed8;
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .add-cart-btn:hover {
          background-color: #2563eb;
        }

        .favorite-btn {
          flex: 1;
          padding: 12px 20px;
          background-color: #fff;
          border: 2px solid #f4a907;
          color: #f4a907;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .favorite-btn.favorited {
          background-color: #f4a907;
          color: #fff;
        }

        .favorite-btn:hover {
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .detail-container {
            flex-direction: column;
          }

          .image-section,
          .detail-info {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </section>
  );
}
