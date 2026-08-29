"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { products } from "@/lib/products";

import ProductGrid from "@/components/products/ProductGrid";
import ProductFilter from "@/components/products/ProductFilter";
import ProductSearch from "@/components/products/ProductSearch";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    sizes: [],
    categories: [],
    colors: [],
    available: false,
    outOfStock: false,
    minPrice: "",
    maxPrice: "",
  });


  const filteredProducts = useMemo(() => {
    return products.filter((product) => {

      /* SEARCH */
      const searchMatch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(search.toLowerCase());


      if (!searchMatch) {
        return false;
      }


      /* SIZE */
      if (
        filters.sizes.length > 0 &&
        !filters.sizes.some((size) =>
          product.sizes.includes(size)
        )
      ) {
        return false;
      }


      /* CATEGORY */
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(product.category)
      ) {
        return false;
      }


      /* COLORS */
      if (
        filters.colors.length > 0 &&
        !filters.colors.includes(product.color)
      ) {
        return false;
      }


      /* AVAILABILITY */
      if (
        filters.available &&
        product.availability !== "available"
      ) {
        return false;
      }


      /* OUT OF STOCK */
      if (
        filters.outOfStock &&
        product.availability !== "out"
      ) {
        return false;
      }


      /* MIN PRICE */
      if (
        filters.minPrice &&
        product.price < Number(filters.minPrice)
      ) {
        return false;
      }


      /* MAX PRICE */
      if (
        filters.maxPrice &&
        product.price > Number(filters.maxPrice)
      ) {
        return false;
      }


      return true;
    });
  }, [search, filters]);


  return (
    <main className="min-h-screen bg-[#f5f5f3] px-5 pb-20 pt-8 text-[#222] md:px-8 lg:px-10">

      <div className="mx-auto max-w-[1200px]">


        {/* ================= HEADER ================= */}
        <div className="mb-7">

          {/* Breadcrumb */}
          <p className="mb-2 text-[9px] text-[#666]">
            <Link href="/">
              Home
            </Link>

            <span className="mx-1">
              /
            </span>

            Products
          </p>


          {/* Title */}
          <h1 className="text-[18px] font-bold uppercase tracking-[-0.03em]">
            Products
          </h1>

        </div>


        {/* ================= SEARCH + CATEGORIES ================= */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start">

          {/* Search */}
          <div className="w-full lg:w-[230px]">

            <ProductSearch
              value={search}
              onChange={setSearch}
            />

          </div>


          {/* Categories */}
          <div className="flex flex-wrap gap-2">

            {[
              "NEW",
              "SHIRTS",
              "POLO SHIRTS",
              "SHORTS",
              "SWEATERS",
              "BEST SELLERS",
              "T-SHIRTS",
              "JEANS",
              "JACKETS",
              "COATS",
            ].map((category) => (
              <button
                key={category}
                onClick={() => {
                  const normalized =
                    category === "NEW"
                      ? []
                      : [category
                          .toLowerCase()
                          .replace(/\b\w/g, (c) =>
                            c.toUpperCase()
                          )];

                  setFilters((prev) => ({
                    ...prev,
                    categories: normalized,
                  }));
                }}
                className="h-8 border border-black/10 px-4 text-[9px] uppercase transition hover:bg-black hover:text-white"
              >
                {category}
              </button>
            ))}

          </div>

        </div>


        {/* ================= CONTENT ================= */}
        <div className="flex flex-col gap-8 lg:flex-row">


          {/* SIDEBAR */}
          <ProductFilter
            filters={filters}
            setFilters={setFilters}
          />


          {/* PRODUCTS */}
          <div className="min-w-0 flex-1">

            {/* Result count */}
            <div className="mb-4 flex justify-end">
              <span className="text-[9px] text-[#777]">
                {filteredProducts.length} Products
              </span>
            </div>

            <ProductGrid
              products={filteredProducts}
            />

          </div>

        </div>

      </div>

    </main>
  );
}