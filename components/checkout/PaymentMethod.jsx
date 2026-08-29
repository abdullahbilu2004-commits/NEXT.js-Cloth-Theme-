"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentMethod({
  cart,
  customerInfo,
  onBack,
}) {

  const router = useRouter();

  const [method, setMethod] = useState("cod");

  const [loading, setLoading] = useState(false);


  const handlePlaceOrder = () => {

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }


    setLoading(true);


    const order = {
      id: `ORD-${Date.now()}`,
      customer: customerInfo,
      items: cart,
      paymentMethod: method,
      createdAt: new Date().toISOString(),
    };


    localStorage.setItem(
      "lastOrder",
      JSON.stringify(order)
    );


    // Clear cart
    localStorage.removeItem("cart");

    window.dispatchEvent(
      new Event("cartUpdated")
    );


    setTimeout(() => {
      router.push("/order-success");
    }, 500);
  };


  return (
    <div className="max-w-[600px]">

      <h2 className="text-[10px] font-medium uppercase">
        Payment Method
      </h2>


      <div className="mt-4 space-y-2">

        {/* COD */}
        <label
          className={`flex cursor-pointer items-center justify-between border p-4 ${
            method === "cod"
              ? "border-black"
              : "border-black/10"
          }`}
        >

          <div className="flex items-center gap-3">

            <input
              type="radio"
              name="payment"
              value="cod"
              checked={method === "cod"}
              onChange={() => setMethod("cod")}
            />

            <div>

              <p className="text-[10px]">
                Cash on Delivery
              </p>

              <p className="mt-1 text-[8px] text-[#777]">
                Pay when your order arrives
              </p>

            </div>

          </div>

        </label>


        {/* Card */}
        <label
          className={`flex cursor-pointer items-center justify-between border p-4 ${
            method === "card"
              ? "border-black"
              : "border-black/10"
          }`}
        >

          <div className="flex items-center gap-3">

            <input
              type="radio"
              name="payment"
              value="card"
              checked={method === "card"}
              onChange={() => setMethod("card")}
            />

            <div>

              <p className="text-[10px]">
                Credit / Debit Card
              </p>

              <p className="mt-1 text-[8px] text-[#777]">
                Secure card payment
              </p>

            </div>

          </div>

        </label>

      </div>


      {/* ================= CARD FIELDS ================= */}
      {method === "card" && (
        <div className="mt-4 space-y-2">

          <input
            placeholder="Card Number"
            className="h-8 w-full border border-black/10 bg-transparent px-3 text-[9px] outline-none"
          />

          <div className="grid grid-cols-2 gap-2">

            <input
              placeholder="MM / YY"
              className="h-8 border border-black/10 bg-transparent px-3 text-[9px] outline-none"
            />

            <input
              placeholder="CVV"
              className="h-8 border border-black/10 bg-transparent px-3 text-[9px] outline-none"
            />

          </div>

        </div>
      )}


      {/* ================= BUTTONS ================= */}
      <div className="mt-5 flex gap-2">

        <button
          type="button"
          onClick={onBack}
          className="flex h-8 items-center justify-center border border-black/15 px-5 text-[9px] uppercase transition hover:bg-black hover:text-white"
        >
          Back
        </button>


        <button
          type="button"
          onClick={handlePlaceOrder}
          disabled={loading}
          className="flex h-8 flex-1 items-center justify-between bg-[#dededc] px-4 text-[9px] uppercase transition hover:bg-black hover:text-white disabled:opacity-50"
        >

          <span>
            {loading
              ? "Processing..."
              : "Place Order"}
          </span>

          <span className="text-[16px]">
            ⟶
          </span>

        </button>

      </div>

    </div>
  );
}