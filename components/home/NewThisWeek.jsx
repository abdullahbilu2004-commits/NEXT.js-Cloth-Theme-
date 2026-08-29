"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    category: "Men",
    price: "$120",
    image: "/Group 66.png",
  },
  {
    id: 2,
    name: "Black Essential Tee",
    category: "Men",
    price: "$85",
    image: "/Group 67.png",
  },
  {
    id: 3,
    name: "Minimal Beige Set",
    category: "Women",
    price: "$140",
    image: "/Group 68.png",
  },
  {
    id: 4,
    name: "Classic Black Dress",
    category: "Women",
    price: "$160",
    image: "/Group 69.png",
  },
  {
    id: 5,
    name: "Everyday Jacket",
    category: "Men",
    price: "$180",
    image: "/Rectangle 18.png",
  },
  {
    id: 6,
    name: "Summer Collection",
    category: "Women",
    price: "$110",
    image: "/Group 64.png",
  },
];

export default function NewThisWeek() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const visibleProducts = 4;

  const maxSlide = Math.max(
    0,
    products.length - visibleProducts
  );

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= maxSlide ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? maxSlide : prev - 1
    );
  };

  return (
    <section className="w-full bg-[#f5f5f3] px-6 py-16 text-[#222] md:px-10 md:py-20">

      <div className="mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex items-end justify-between">

          {/* ================= TITLE ================= */}
          <div>

            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#777]">
              This Week
            </p>

            <h2 className="flex items-baseline gap-2 text-[32px] font-medium uppercase leading-[0.85] tracking-[-0.06em] md:text-[42px]">

              <span>
                New
              </span>

              <span className="font-light italic">
                This Week
              </span>

            </h2>

          </div>


          {/* ================= SEE ALL ================= */}
          <Link
            href="/products"
            className="group shrink-0"
          >
            <span className="border-b border-black pb-1 text-[10px] uppercase tracking-[0.14em] transition-opacity duration-300 group-hover:opacity-50">
              See All
            </span>
          </Link>

        </div>


        {/* ================= PRODUCTS SLIDER ================= */}
        <div className="overflow-hidden">

          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / visibleProducts)
              }%)`,
            }}
          >

            {products.map((product) => (

              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group min-w-[calc(50%-8px)] sm:min-w-[calc(33.333%-11px)] md:min-w-[calc(25%-12px)]"
              >

                {/* ================= PRODUCT IMAGE ================= */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e8e8e6]">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={product.id <= 4}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />

                </div>


                {/* ================= PRODUCT INFO ================= */}
                <div className="flex items-start justify-between pt-3">

                  <div>

                    <h3 className="text-[11px] uppercase tracking-[0.04em]">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-[10px] text-[#777]">
                      {product.category}
                    </p>

                  </div>

                  <span className="text-[10px]">
                    {product.price}
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>


        {/* ================= SLIDER ARROWS ================= */}
        <div className="mt-5 flex items-center justify-center gap-2">

          {/* Previous */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous products"
            className="flex h-9 w-9 cursor-pointer items-center justify-center border border-black/15 text-[15px] transition-all duration-300 hover:bg-black hover:text-white"
          >
            ‹
          </button>


          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next products"
            className="flex h-9 w-9 cursor-pointer items-center justify-center border border-black/15 text-[15px] transition-all duration-300 hover:bg-black hover:text-white"
          >
            ›
          </button>

        </div>

      </div>

    </section>
  );
}

