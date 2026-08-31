


"use client";

import Image from "next/image";
import QuantitySelector from "./QuantitySelector";

export default function CartItem({
  item,
  updateQuantity,
  removeFromCart,
}) {
  const increaseQuantity = () => {
    updateQuantity(item.cartId, item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.cartId, item.quantity - 1);
    }
  };

  // Price ko safely number mein convert karo
  const price = Number(
    String(item.price).replace("$", "")
  );

  // Quantity ke according total
  const totalPrice = price * item.quantity;

  return (
    <div className="relative border-b border-black/10 pb-8">

      {/* ================= REMOVE ================= */}
      <button
        type="button"
        onClick={() => removeFromCart(item.cartId)}
        aria-label={`Remove ${item.name}`}
        className="absolute right-0 top-0 z-10 text-[12px] text-[#777] transition hover:text-black"
      >
        ×
      </button>


      <div className="flex gap-3 sm:gap-5">

        {/* ================= PRODUCT IMAGE ================= */}
        <div className="relative h-[150px] w-[120px] shrink-0 overflow-hidden bg-[#e8e8e6] sm:h-[180px] sm:w-[145px]">

          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 120px, 145px"
          />

        </div>


        {/* ================= PRODUCT DETAILS ================= */}
        <div className="flex min-w-0 flex-1 flex-col">

          {/* Category */}
          <p className="text-[9px] uppercase tracking-[0.08em] text-[#777]">
            {item.category}
          </p>


          {/* Product Name */}
          <h3 className="mt-1 max-w-[220px] text-[10px] uppercase leading-[1.5] tracking-[0.03em]">
            {item.name}
          </h3>


          {/* ================= COLOR ================= */}
          <div className="mt-5">

            <p className="mb-2 text-[9px] uppercase tracking-[0.1em] text-[#777]">
              Color
            </p>

            <div
              className="h-4 w-4 border border-black/20 bg-[#222]"
              aria-label={`${item.color || "Black"} color`}
              title={item.color || "Black"}
            />

          </div>


          {/* ================= BOTTOM CONTROLS ================= */}
          <div className="mt-auto flex items-end justify-between gap-3">

            {/* Quantity */}
            <QuantitySelector
              quantity={item.quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />


            {/* Total Price */}
            <p className="shrink-0 text-[10px]">
              ${totalPrice.toFixed(0)}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

