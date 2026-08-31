"use client";

import Link from "next/link";

export default function CartSummary({
  subtotal,
  shipping = 0,
}) {
  const total = subtotal + shipping;

  return (
    <div className="w-full border border-black/10 p-5 sm:p-6">

      {/* Title */}
      <h2 className="text-[10px] uppercase tracking-[0.1em]">
        Order Summary
      </h2>


      {/* Subtotal */}
      <div className="mt-7 flex items-center justify-between border-b border-black/10 pb-3">

        <span className="text-[9px] uppercase text-[#777]">
          Subtotal
        </span>

        <span className="text-[10px]">
          ${subtotal.toFixed(0)}
        </span>

      </div>


      {/* Shipping */}
      <div className="flex items-center justify-between border-b border-black/10 py-3">

        <span className="text-[9px] uppercase text-[#777]">
          Shipping
        </span>

        <span className="text-[10px]">
          ${shipping.toFixed(0)}
        </span>

      </div>


      {/* Total */}
      <div className="flex items-center justify-between py-5">

        <span className="text-[10px] uppercase tracking-[0.08em]">
          Total
        </span>

        <span className="text-[10px]">
          ${total.toFixed(0)}
        </span>

      </div>


      {/* Terms */}
      <label className="flex cursor-pointer items-center gap-2 py-2">

        <input
          type="checkbox"
          className="h-3 w-3 accent-black"
        />

        <span className="text-[8px] text-[#777]">
          I agree to the Terms and Conditions
        </span>

      </label>


      {/* Continue */}
      <Link
        href="/checkout"
        className="mt-5 flex h-9 w-full items-center justify-center bg-black text-[9px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-80"
      >
        Continue
      </Link>

    </div>
  );
}