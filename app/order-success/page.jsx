import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-5 text-[#222]">

      <div className="text-center">

        <p className="text-[10px] uppercase text-[#777]">
          Order Confirmed
        </p>

        <h1 className="mt-3 text-[30px] font-bold uppercase tracking-[-0.04em]">
          Thank You
        </h1>

        <p className="mx-auto mt-4 max-w-[350px] text-[10px] leading-[1.6] text-[#777]">
          Your order has been placed successfully.
          We will process your order shortly.
        </p>

        <Link
          href="/products"
          className="mt-7 inline-flex h-8 items-center justify-between bg-[#dededc] px-5 text-[9px] uppercase transition hover:bg-black hover:text-white"
        >
          Continue Shopping
          <span className="ml-8 text-[15px]">
            ⟶
          </span>
        </Link>

      </div>

    </main>
  );
}