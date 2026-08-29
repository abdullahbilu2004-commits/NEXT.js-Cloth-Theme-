"use client";

import Image from "next/image";
import Link from "next/link";

export default function OrderSummary({ cart }) {

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price) *
        Number(item.quantity || 1),
    0
  );


  const shipping = 0;

  const total = subtotal + shipping;


  return (
    <aside className="h-fit border border-black/10 p-5">

      {/* ================= TITLE ================= */}
      <div className="flex items-center justify-between">

        <h2 className="text-[10px] font-medium uppercase">
          Your Order
        </h2>

        <span className="text-[9px] text-blue-700">
          ({cart.length})
        </span>

      </div>


      {/* ================= PRODUCTS ================= */}
      <div className="mt-5 space-y-4">

        {cart.length === 0 ? (

          <div className="py-8 text-center">

            <p className="text-[10px] text-[#777]">
              Your cart is empty.
            </p>

            <Link
              href="/products"
              className="mt-3 inline-block text-[9px] underline"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          cart.map((item) => (

            <div
              key={`${item.id}-${item.size}-${item.color}`}
              className="flex gap-3"
            >

              {/* Image */}
              <div className="relative h-[82px] w-[70px] shrink-0 overflow-hidden bg-[#e8e8e6]">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="70px"
                />

              </div>


              {/* Info */}
              <div className="flex min-w-0 flex-1 flex-col">

                <div className="flex justify-between gap-2">

                  <p className="text-[9px] leading-[1.4]">
                    {item.name}
                  </p>

                  <Link
                    href="/cart"
                    className="shrink-0 text-[8px] underline"
                  >
                    Change
                  </Link>

                </div>


                <p className="mt-1 text-[8px] text-[#777]">
                  {item.color || "Black"}
                  {item.size && ` / ${item.size}`}
                </p>


                <div className="mt-auto flex items-end justify-between">

                  <span className="text-[8px] text-blue-700">
                    ({item.quantity || 1})
                  </span>

                  <span className="text-[9px]">
                    ${Number(item.price).toFixed(2)}
                  </span>

                </div>

              </div>

            </div>

          ))

        )}

      </div>


      {/* ================= TOTALS ================= */}
      {cart.length > 0 && (
        <div className="mt-5 border-t border-black/10 pt-4">

          <div className="flex justify-between text-[9px]">
            <span>Subtotal</span>
            <span>
              ${subtotal.toFixed(2)}
            </span>
          </div>


          <div className="mt-2 flex justify-between text-[9px]">

            <span>
              Shipping
            </span>

            <span className="text-[7px] text-[#777]">
              Calculated at next step
            </span>

          </div>


          <div className="mt-4 border-t border-black/10 pt-4">

            <div className="flex justify-between text-[10px] font-medium">

              <span>
                Total
              </span>

              <span>
                ${total.toFixed(2)}
              </span>

            </div>

          </div>

        </div>
      )}

    </aside>
  );
}