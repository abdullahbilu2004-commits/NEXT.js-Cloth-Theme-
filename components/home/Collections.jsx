
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: 1,
        label: "Cotton T-Shirt",
        title: "Basic Heavy Weight T-Shirt",
        price: "$109",
        image: "/Rectangle 12.png",
    },
    {
        id: 2,
        label: "Cotton Jeans",
        title: "Soft Wash Straight Fit Jeans",
        price: "$199",
        image: "/Rectangle 18.png",
    },
    {
        id: 3,
        label: "Cotton T-Shirt",
        title: "Basic Heavy Weight T-Shirt",
        price: "$109",
        image: "/Rectangle 13.png",
    },
    {
        id: 4,
        label: "Cotton T-Shirt",
        title: "Basic Heavy Weight T-Shirt",
        price: "$109",
        image: "/Group 68.png",
    },

    // Add more products here
    // They will appear after clicking See More
    {
        id: 5,
        label: "Cotton Shirt",
        title: "Relaxed Fit Cotton Shirt",
        price: "$129",
        image: "/LastSec2.png",
    },
    {
        id: 6,
        label: "Cotton Jeans",
        title: "Classic Straight Fit Jeans",
        price: "$189",
        image: "/LastSec1.png",
    },
];

export default function Collections() {
    const [showAll, setShowAll] = useState(false);

    // Initially show only 3 products
    const visibleProducts = showAll
        ? products
        : products.slice(0, 3);

    return (
        <section className="w-full bg-[#f5f5f3] px-6 py-16 text-[#222] md:px-10 md:py-20">

            <div className="mx-auto max-w-[1200px]">

                {/* ================= HEADER ================= */}
                <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between">

                    <div>


                        <h2 className="uppercase leading-[0.85] tracking-[-0.055em]">
                            <span className="mr-2 text-[36px] font-bold md:text-[48px]">
                                XIV
                            </span>

                            <span className="text-[36px] font-light italic md:text-[48px]">
                                Collections
                            </span>

                            <span className="ml-3 align-top text-[13px] font-normal tracking-[0.08em] text-[#777] md:text-[15px]">
                                23–24
                            </span>
                        </h2>



                        <div className="mt-4 flex gap-6 text-[12px] uppercase tracking-[0.15em] text-[#777]">
                            <button className="font-medium text-black">
                                All
                            </button>

                            <button>
                                Men
                            </button>

                            <button>
                                Women
                            </button>

                            <button>
                                Kid
                            </button>
                        </div>

                    </div>


                    <div className="mt-6 flex flex-col gap-2 text-[11px] uppercase tracking-[0.12em] text-[#777] md:mt-0 md:flex-row md:gap-8">

                        <span>
                            Filters(+)
                        </span>

                        <span>
                            Sort(s)
                        </span>

                        <div className="flex  gap-3">

                            <button>
                                Less to more
                            </button>

                            <button>
                                More to less
                            </button>

                        </div>

                    </div>

                </div>


                {/* ================= PRODUCT GRID ================= */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

                    {visibleProducts.map((product) => (

                        <Link
                            href={`/collections/${product.id}`}
                            key={product.id}
                            className="group"
                        >

                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e8e8e6]">

                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                />

                            </div>


                            <div className="mt-3 flex flex-col items-start text-[12px]">

                                <p className="text-[#777]">
                                    {product.label}
                                </p>

                                <h3 className="mt-1 font-medium">
                                    {product.title}
                                </h3>

                                <p className="mt-1 text-[#222]">
                                    {product.price}
                                </p>

                            </div>

                        </Link>

                    ))}

                </div>


                {/* ================= MORE BUTTON ================= */}
                <div className="mt-12 flex flex-col items-center">

                    <button
                        type="button"
                        onClick={() => setShowAll(!showAll)}
                        className="text-[12px] uppercase cursor-pointer tracking-[0.15em] text-[#777] transition-opacity duration-300 hover:opacity-50"
                    >
                        {showAll ? "See Less" : "See More"}
                    </button>

                </div>

            </div>

        </section>
    );
}

