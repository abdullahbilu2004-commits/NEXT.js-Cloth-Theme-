"use client";

export default function QuantitySelector({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div className="flex w-fit flex-col border border-black/10">
      <button
        type="button"
        onClick={increaseQuantity}
        className="flex h-6 w-6 items-center justify-center text-[10px] transition hover:bg-black hover:text-white"
        aria-label="Increase quantity"
      >
        +
      </button>

      <div className="flex h-6 w-6 items-center justify-center border-y border-black/10 text-[10px]">
        {quantity}
      </div>

      <button
        type="button"
        onClick={decreaseQuantity}
        className="flex h-6 w-6 items-center justify-center text-[10px] transition hover:bg-black hover:text-white"
        aria-label="Decrease quantity"
      >
        −
      </button>
    </div>
  );
}