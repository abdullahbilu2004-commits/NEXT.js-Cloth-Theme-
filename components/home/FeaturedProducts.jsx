
"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: "/LastSec1.png",
  },
  {
    id: 2,
    image: "/LastSec2.png",
  },
  {
    id: 3,
    image: "/Rectangle 12.png",
  },
  {
    id: 4,
    image: "/LastSec4.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="w-full bg-[#f5f5f3] px-5 py-14 text-[#222] sm:px-6 sm:py-16 md:px-10 md:py-20">

      <div className="mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex items-end justify-between sm:mb-10">

          {/* Title */}
          <div>

            <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#777]">
              Our Selection
            </p>

            <h2 className="uppercase leading-[0.85] tracking-[-0.055em]">

              <span className="mr-2 text-[32px] font-bold sm:text-[36px] md:text-[48px]">
                Featured
              </span>

              <span className="text-[32px] font-light italic sm:text-[36px] md:text-[48px]">
                Products
              </span>

            </h2>

          </div>

        </div>


        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">

          {products.map((product, index) => (

            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className={`group min-w-0 ${
                index % 2 === 1
                  ? "translate-y-8 md:translate-y-12"
                  : "translate-y-0"
              }`}
            >

              {/* ================= IMAGE ================= */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e8e8e6]">

                <Image
                  src={product.image}
                  alt={`Featured product ${product.id}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />

              </div>

            </Link>

          ))}

        </div>


        {/* ================= MOBILE VIEW ALL ================= */}
        <div className="mt-10 flex justify-center md:hidden">

          <Link
            href="/products"
            className="group"
          >
            <span className="border-b border-black pb-1 text-[10px] uppercase tracking-[0.14em] transition-opacity duration-300 group-hover:opacity-50">
              View All Products
            </span>
          </Link>

        </div>

      </div>

    </section>
  );
}
