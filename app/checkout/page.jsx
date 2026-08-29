"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethod from "@/components/checkout/PaymentMethod";

export default function CheckoutPage() {
  const [step, setStep] = useState("information");

  const [cart, setCart] = useState([]);

  const [customerInfo, setCustomerInfo] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const handleInformationSubmit = (data) => {
    setCustomerInfo(data);
    setStep("shipping");
  };

  const handleShippingSubmit = () => {
    setStep("payment");
  };

  const handleBack = () => {
    if (step === "payment") {
      setStep("shipping");
    } else if (step === "shipping") {
      setStep("information");
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#222]">

      {/* ================= TOP ================= */}
      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-8 md:px-8 lg:px-10">

        {/* Back */}
        <Link
          href="/cart"
          className="mb-8 inline-flex items-center text-[22px] font-light transition hover:opacity-50"
        >
          ←
        </Link>


        {/* ================= TITLE ================= */}
        <h1 className="text-[28px] font-bold uppercase tracking-[-0.04em] md:text-[32px]">
          Checkout
        </h1>


        {/* ================= STEPS ================= */}
        <div className="mt-4 flex gap-7 text-[10px] uppercase">

          <button
            type="button"
            onClick={() => setStep("information")}
            className={
              step === "information"
                ? "text-black"
                : "text-[#999]"
            }
          >
            Information
          </button>

          <button
            type="button"
            onClick={() => {
              if (customerInfo.email) {
                setStep("shipping");
              }
            }}
            className={
              step === "shipping"
                ? "text-black"
                : "text-[#999]"
            }
          >
            Shipping
          </button>

          <button
            type="button"
            onClick={() => {
              if (customerInfo.email) {
                setStep("payment");
              }
            }}
            className={
              step === "payment"
                ? "text-black"
                : "text-[#999]"
            }
          >
            Payment
          </button>

        </div>


        {/* ================= CONTENT ================= */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_280px]">

          {/* ================= LEFT ================= */}
          <div>

            {step === "information" && (
              <CheckoutForm
                initialData={customerInfo}
                onSubmit={handleInformationSubmit}
              />
            )}


            {step === "shipping" && (
              <div>

                <h2 className="text-[10px] font-medium uppercase">
                  Shipping Method
                </h2>

                <div className="mt-4 border border-black/10 bg-[#f5f5f3] p-4">

                  <label className="flex cursor-pointer items-center justify-between">

                    <div className="flex items-center gap-3">

                      <input
                        type="radio"
                        defaultChecked
                        name="shipping"
                      />

                      <div>
                        <p className="text-[10px]">
                          Standard Shipping
                        </p>

                        <p className="mt-1 text-[8px] text-[#777]">
                          Delivery within 3–5 business days
                        </p>
                      </div>

                    </div>

                    <span className="text-[10px]">
                      Free
                    </span>

                  </label>

                </div>


                <button
                  type="button"
                  onClick={handleShippingSubmit}
                  className="mt-5 flex h-8 w-full max-w-[292px] items-center justify-between bg-[#dededc] px-3 text-[10px] transition hover:bg-black hover:text-white"
                >
                  <span>Payment</span>
                  <span className="text-[17px]">
                    ⟶
                  </span>
                </button>

              </div>
            )}


            {step === "payment" && (
              <PaymentMethod
                cart={cart}
                customerInfo={customerInfo}
                onBack={handleBack}
              />
            )}

          </div>


          {/* ================= ORDER SUMMARY ================= */}
          <OrderSummary cart={cart} />

        </div>

      </div>

    </main>
  );
}