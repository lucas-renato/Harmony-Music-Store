"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface CartItem {
  id: number;
  product: number;        // id do produto
  product_name: string;
  quantity: number;
  total_price: string | number;
}

const API_BASE = "http://127.0.0.1:8000/api";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Carregar carrinho do backend
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/cart/`, {
      credentials: "include", // importante para DRF IsAuthenticated com sessão/cookie
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao carregar o carrinho");
        }
        return res.json();
      })
      .then((data: CartItem[]) => {
        setItems(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Não foi possível carregar o carrinho. Verifique se está logado.");
      })
      .finally(() => setLoading(false));
  }, []);

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const subtotal = items.reduce((sum, item) => {
    const value = typeof item.total_price === "string"
      ? Number(item.total_price)
      : item.total_price;
    return sum + (isNaN(value) ? 0 : value);
  }, 0);

  // Remover item do carrinho
  const removeItem = (itemId: number) => {
    setSaving(true);
    setError(null);

    fetch(`${API_BASE}/cart/${itemId}/`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao remover item");
        }
        // Atualiza lista local
        setItems((prev) => prev.filter((item) => item.id !== itemId));
      })
      .catch((err) => {
        console.error(err);
        setError("Não foi possível remover o item do carrinho.");
      })
      .finally(() => setSaving(false));
  };

  if (loading) {
    return (
      <div className="page">
        <section className="cart-section">
          <h1>Carrinho</h1>
          <p>Carregando itens...</p>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="cart-section">
        <h1>Carrinho de Compras</h1>
        <p>Confira os produtos antes de finalizar sua compra.</p>

        {error && <p className="cart-error">{error}</p>}

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Seu carrinho está vazio.</p>
            <Link href="/loja">
              <button className="hero-btn">Voltar para a loja</button>
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Lista de itens */}
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item-card" key={item.id}>
                  <div className="cart-item-info">
                    {/* Se quiser depois, pode buscar a imagem do produto pela API de products */}
                    <div>
                      <h3>{item.product_name}</h3>
                      <p className="cart-item-qty">
                        Quantidade: {item.quantity}
                      </p>
                      <p className="cart-item-line-total">
                        Total do item:{" "}
                        {formatCurrency(
                          typeof item.total_price === "string"
                            ? Number(item.total_price)
                            : item.total_price
                        )}
                      </p>
                      <button
                        className="cart-remove-btn"
                        onClick={() => removeItem(item.id)}
                        disabled={saving}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo */}
            <aside className="cart-summary">
              <h2>Resumo do Pedido</h2>

              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              {/* Se quiser adicionar frete/cupom, coloca aqui */}

              <div className="cart-summary-row cart-summary-total">
                <span>Total</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <Link href="/checkout">
                <button className="hero-btn cart-checkout-btn">
                  Finalizar Compra
                </button>
              </Link>

              <Link href="/loja" className="cart-continue-link">
                Continuar comprando
              </Link>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}
