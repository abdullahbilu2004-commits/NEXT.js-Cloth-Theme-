"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "NEW COLLECTION",
    season: "Summer",
    year: "2024",
    images: [
      "/Group 64.png",
      "/Rectangle 13.png",
    ],
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
    season: "Autumn",
    year: "2024",
    images: [
      "/Group 65.png",
      "/LastSec2.png",
    ],
  },
  {
    id: 3,
    title: "ESSENTIALS",
    season: "Winter",
    year: "2024",
    images: [
      "/LastSec2.png",
      "/Rectangle 18.png",
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-gray-200 px-6 pb-8 pt-4 text-[12px] text-[#222] md:px-10 md:pb-10 md:pt-6">

      <div className="mx-auto max-w-[1200px]">

        {/* ================= HERO ================= */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-10">


          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="flex w-full flex-col md:h-[430px] md:w-[30%]">


            {/* ================= TOP ================= */}
            <div>

              {/* Categories */}
              <div className="flex flex-col gap-[3px] uppercase leading-[1.3]">

                <Link
                  href="/products?category=men"
                  className="text-[12px] transition-opacity hover:opacity-50"
                >
                  Men
                </Link>

                <Link
                  href="/products?category=women"
                  className="text-[12px] transition-opacity hover:opacity-50"
                >
                  Women
                </Link>

                <Link
                  href="/products?category=kids"
                  className="text-[12px] transition-opacity hover:opacity-50"
                >
                  Kids
                </Link>

              </div>


              {/* Search */}
              <div className="mt-3 flex h-8 w-[185px] items-center bg-[#dededc] px-2">

                <span className="mr-2 text-[13px]">
                  ⌕
                </span>

                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent text-[12px] outline-none placeholder:text-[#777]"
                />

              </div>

            </div>


            {/* ================= MIDDLE ================= */}
            <div className="my-auto py-10">

              <h1 className="max-w-[210px] text-[30px] font-bold uppercase leading-[0.82] tracking-[-0.06em] md:text-[34px]">
                {slide.title}
              </h1>

              <div className="mt-3 flex flex-col text-[12px] leading-[1.2]">
                <span>{slide.season}</span>
                <span>{slide.year}</span>
              </div>

            </div>


            {/* ================= BOTTOM ================= */}
            <div className="flex items-center gap-6">

              {/* Go To Shop */}
              <Link
                href="/products"
                className="flex h-8 w-[140px] items-center justify-between bg-[#dededc] px-3 text-[12px] transition-colors hover:bg-[#d2d2d0]"
              >

                <span>
                  Go To Shop
                </span>

                <span className="text-[16px] font-light leading-none">
                  ⟶
                </span>

              </Link>


              {/* Carousel Buttons */}
              <div className="flex gap-2">

                <button
                  onClick={previousSlide}
                  aria-label="Previous slide"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center border border-black/10 text-[14px] transition-colors hover:bg-black hover:text-white"
                >
                  ‹
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="flex h-8 w-8 items-center cursor-pointer justify-center border border-black/10 text-[14px] transition-colors hover:bg-black hover:text-white"
                >
                  ›
                </button>

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT - SLIDER IMAGES
          ====================================================== */}
          <div className="flex w-full gap-4 md:h-[430px] md:w-[70%]">

            {slide.images.map((image, index) => (
              <div
                key={image}
                className="relative h-[380px] flex-1 overflow-hidden bg-[#e8e8e6] md:h-[430px]"
              >

                <Image
                  src={image}
                  alt={`${slide.title} ${index + 1}`}
                  fill
                  priority={currentSlide === 0}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 35vw"
                />

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}