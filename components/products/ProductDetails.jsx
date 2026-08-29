"use client";

import { useState } from "react";

export default function ProductDetails({ product }) {

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


  const handleAddToCart = () => {

    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = existingCart.find(
      (item) =>
        item.id === product.id &&
        item.size === selectedSize &&
        item.color === selectedColor
    );


    if (existingItem) {

      existingItem.quantity += 1;

    } else {

      existingCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
      });

    }


    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );


    // Navbar ya doosre components ko update karne ke liye event
    window.dispatchEvent(
      new Event("cartUpdated")
    );


    alert("Product added to cart.");
  };


  const handleWishlist = () => {

    const existingWishlist =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];


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
    <div className="w-full border border-black/10 bg-[#f5f5f3] p-5 md:p-6">

      {/* ================= WISHLIST ================= */}
      <div className="flex justify-end">

        <button
          type="button"
          onClick={handleWishlist}
          aria-label="Add to wishlist"
          className="flex h-6 w-6 items-center justify-center text-[12px] transition hover:scale-110"
        >
          ♡
        </button>

      </div>


      {/* ================= PRODUCT NAME ================= */}
      <div className="mt-3">

        <h1 className="text-[12px] font-medium uppercase leading-[1.3] tracking-[0.02em]">
          {product.name}
        </h1>

        <p className="mt-2 text-[11px]">
          ${product.price}
        </p>

      </div>


      {/* ================= MRP ================= */}
      <p className="mt-2 text-[9px] text-[#777]">
        MRP incl. of all taxes
      </p>


      {/* ================= DESCRIPTION ================= */}
      <p className="mt-7 text-[9px] leading-[1.5] text-[#444]">
        Relaxed-fit shirt. Camp collar and short
        sleeves. Button-up front.
      </p>


      {/* ================= COLOR ================= */}
      <div className="mt-7">

        <p className="mb-2 text-[9px] text-[#777]">
          Color
        </p>


        <div className="flex gap-[3px]">

          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() =>
                setSelectedColor(color.name)
              }
              aria-label={color.name}
              title={color.name}
              className={`h-[23px] w-[23px] border ${
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
      <div className="mt-5">

        <p className="mb-2 text-[9px] text-[#777]">
          Size
        </p>


        <div className="flex gap-[3px]">

          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() =>
                setSelectedSize(size)
              }
              className={`flex h-[23px] min-w-[23px] items-center justify-center border px-1 text-[8px] transition ${
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
      <div className="mt-2">

        <button
          type="button"
          className="text-[7px] uppercase text-[#777] hover:text-black"
        >
          Find your size
        </button>

        <span className="mx-1 text-[7px] text-[#aaa]">
          |
        </span>

        <button
          type="button"
          className="text-[7px] uppercase text-[#777] hover:text-black"
        >
          Measurement guide
        </button>

      </div>


      {/* ================= ADD TO CART ================= */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-3 flex h-7 w-full items-center justify-center bg-[#dededc] text-[9px] uppercase transition hover:bg-black hover:text-white"
      >
        Add
      </button>

    </div>
  );
}