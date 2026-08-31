"use client";

import { useContext } from "react";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

import { CartContext } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
  } = useContext(CartContext);


  // Calculate subtotal
const subtotal = cartItems.reduce((total, item) => {
  const price = Number(
    String(item.price).replace("$", "")
  );

  return total + price * item.quantity;
}, 0);


  return (
    <main className="min-h-screen bg-[#f5f5f3] px-5 py-12 text-[#222] sm:px-6 sm:py-16 md:px-10 md:py-20">

      <div className="mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mb-10 border-b border-black/10 pb-5">

          <div className="flex items-center gap-6">

            <h1 className="text-[10px] uppercase tracking-[0.12em]">
              Shopping Bag
            </h1>

            <span className="text-[9px] uppercase tracking-[0.1em] text-[#999]">
              {cartItems.length} Products
            </span>

          </div>

        </div>


        {/* ================= EMPTY CART ================= */}
        {cartItems.length === 0 ? (

          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

            <p className="text-[10px] uppercase tracking-[0.15em] text-[#777]">
              Your Shopping Bag Is Empty
            </p>

            <a
              href="/products"
              className="mt-5 border-b border-black pb-1 text-[9px] uppercase tracking-[0.12em]"
            >
              Continue Shopping
            </a>

          </div>

        ) : (

          /* ================= CART CONTENT ================= */
          <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">

            {/* LEFT SIDE - PRODUCTS */}
            <div>

              <div className="grid gap-8">

                {cartItems.map((item) => (

                  <CartItem
                    key={item.cartId}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />

                ))}

              </div>

            </div>


            {/* RIGHT SIDE - SUMMARY */}
            <aside className="lg:sticky lg:top-24 lg:self-start">

              <CartSummary
                subtotal={subtotal}
                shipping={0}
              />

            </aside>

          </div>

        )}

      </div>

    </main>
  );
}