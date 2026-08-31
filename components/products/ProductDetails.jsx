"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";

export default function ProductDetails({ product }) {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState("");

  const [selectedColor, setSelectedColor] = useState(
    product.color || "Black"
  );

  const colors = [
    {
      name: "White",
      value: "#e5e5e2",
    },
    {
      name: "Grey",
      value: "#a9a9a7",
    },
    {
      name: "Black",
      value: "#222222",
    },
    {
      name: "Mint",
      value: "#a9d8d0",
    },
    {
      name: "Cream",
      value: "#dedbd0",
    },
    {
      name: "Blue",
      value: "#aeb9df",
    },
  ];

  // ================= ADD TO CART =================
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    addToCart(
      {
        ...product,
        color: selectedColor,
      },
      selectedSize
    );

    router.push("/cart");
  };

  // ================= WISHLIST =================
  const handleWishlist = () => {
    const existingWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists = existingWishlist.some(
      (item) => item.id === product.id
    );

    if (!alreadyExists) {
      existingWishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });

      localStorage.setItem(
        "wishlist",
        JSON.stringify(existingWishlist)
      );
    }

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );

    alert(
      alreadyExists
        ? "Already in wishlist."
        : "Added to wishlist."
    );
  };

  return (
    <div className="w-full border border-black/10 bg-[#f5f5f3] p-5 sm:p-6">

      {/* ================= WISHLIST ================= */}
      <div className="flex h-8 items-center justify-end">

        <button
          type="button"
          onClick={handleWishlist}
          aria-label="Add to wishlist"
          className="flex h-8 w-8 items-center justify-center text-[20px] leading-none transition hover:scale-110"
        >
          ♡
        </button>

      </div>


      {/* ================= PRODUCT NAME ================= */}
      <div className="mt-5">

        <h1 className="text-[15px] font-medium uppercase leading-[1.35] tracking-[0.02em]">
          {product.name}
        </h1>

        <p className="mt-3 text-[14px]">
          ${product.price}
        </p>

      </div>


      {/* ================= MRP ================= */}
      <p className="mt-3 text-[10px] leading-4 text-[#777]">
        MRP incl. of all taxes
      </p>


      {/* ================= DESCRIPTION ================= */}
      <p className="mt-7 text-[11px] leading-[1.6] text-[#444]">
        Relaxed-fit shirt. Camp collar and short
        sleeves. Button-up front.
      </p>


      {/* ================= COLOR ================= */}
      <div className="mt-7">

        <p className="mb-3 text-[10px] uppercase tracking-[0.08em] text-[#777]">
          Color
        </p>

        <div className="flex flex-wrap gap-2">

          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() =>
                setSelectedColor(color.name)
              }
              aria-label={color.name}
              title={color.name}
              className={`h-[30px] w-[30px] shrink-0 border ${
                selectedColor === color.name
                  ? "border-black"
                  : "border-transparent"
              }`}
              style={{
                backgroundColor: color.value,
              }}
            />
          ))}

        </div>

      </div>


      {/* ================= SIZE ================= */}
      <div className="mt-6">

        <p className="mb-3 text-[10px] uppercase tracking-[0.08em] text-[#777]">
          Size
        </p>

        <div className="flex flex-wrap gap-2">

          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() =>
                setSelectedSize(size)
              }
              className={`flex h-[36px] min-w-[36px] shrink-0 items-center justify-center border px-2 text-[10px] transition ${
                selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-black/15 hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}

        </div>

      </div>


      {/* ================= SIZE GUIDE ================= */}
      <div className="mt-3 flex items-center">

        <button
          type="button"
          className="text-[8px] uppercase tracking-[0.04em] text-[#777] hover:text-black"
        >
          Find your size
        </button>

        <span className="mx-2 text-[8px] text-[#aaa]">
          |
        </span>

        <button
          type="button"
          className="text-[8px] uppercase tracking-[0.04em] text-[#777] hover:text-black"
        >
          Measurement guide
        </button>

      </div>


      {/* ================= ADD TO CART ================= */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-5 flex h-[46px] cursor-pointer w-full items-center justify-center bg-[#dededc] text-[11px] uppercase tracking-[0.07em] transition hover:bg-black hover:text-white"
      >
        Add
      </button>

    </div>
  );
}

