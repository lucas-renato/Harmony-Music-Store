"use client";

import Link from "next/link";
import "@/app/globals.css"; // ajuste o caminho conforme seu projeto

export default function Cart() {
  // Array de itens no carrinho, aqui só com a guitarra Fender como exemplo
  const cartItems = [
    {
      id: 1,
      name: "Guitarra Fender Stratocaster",
      price: 4299.0,
      category: "Cordas",
      image: "/instruments/guitarrafender.jpg",
      quantity: 1,
    },
  ];

  return (
    <section className="store-section">
      <h1 className="store-title">Meu Carrinho</h1>

      <div className="store-grid">
        {cartItems.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h2>{item.name}</h2>
              <p className="category">{item.category}</p>
              <p className="price">R$ {item.price.toFixed(2)}</p>
              <p>Quantidade: {item.quantity}</p>
              <div className="cart-buttons">
                <button className="details-btn">Remover</button>
                <button className="details-btn">Finalizar Compra</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
