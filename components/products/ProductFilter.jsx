"use client";

import { useState } from "react";

export default function ProductFilter({
  filters,
  setFilters,
}) {
  const [open, setOpen] = useState({
    availability: true,
    category: false,
    colors: false,
    price: false,
    collections: false,
    tags: false,
    ratings: false,
  });

  const toggleSection = (section) => {
    setOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sizes = ["XS", "S", "M", "L", "XL", "2X"];

  const categories = [
    "T-Shirts",
    "Shirts",
    "Polo Shirts",
    "Jeans",
    "Jackets",
  ];

  const colors = [
    "Black",
    "White",
    "Grey",
    "Brown",
    "Green",
    "Beige",
  ];

  const toggleArrayValue = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <aside className="w-full shrink-0 text-[11px] lg:w-[180px]">

      {/* FILTER TITLE */}
      <h2 className="mb-6 text-[12px] font-semibold uppercase tracking-[0.08em]">
        Filters
      </h2>


      {/* ================= SIZE ================= */}
      <div className="border-b border-black/10 pb-5">

        <p className="mb-3 font-semibold">
          Size
        </p>

        <div className="flex flex-wrap gap-1">

          {sizes.map((size) => (
            <button
              key={size}
              onClick={() =>
                toggleArrayValue("sizes", size)
              }
              className={`flex h-7 min-w-7 items-center justify-center border px-2 text-[10px] transition ${
                filters.sizes.includes(size)
                  ? "bg-black text-white"
                  : "border-black/15 hover:bg-black hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}

        </div>

      </div>


      {/* ================= AVAILABILITY ================= */}
      <FilterSection
        title="Availability"
        isOpen={open.availability}
        onClick={() => toggleSection("availability")}
      >

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.available}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                available: e.target.checked,
              }))
            }
            className="h-3.5 w-3.5"
          />

          <span>
            Availability
          </span>

          <span className="ml-auto text-[#777]">
            (450)
          </span>
        </label>


        <label className="mt-3 flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.outOfStock}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                outOfStock: e.target.checked,
              }))
            }
            className="h-3.5 w-3.5"
          />

          <span>
            Out Of Stock
          </span>

          <span className="ml-auto text-[#777]">
            (18)
          </span>
        </label>

      </FilterSection>


      {/* ================= CATEGORY ================= */}
      <FilterSection
        title="Category"
        isOpen={open.category}
        onClick={() => toggleSection("category")}
      >

        {categories.map((category) => (
          <label
            key={category}
            className="mb-2 flex items-center gap-2"
          >
            <input
              type="checkbox"
              checked={filters.categories.includes(category)}
              onChange={() =>
                toggleArrayValue("categories", category)
              }
              className="h-3.5 w-3.5"
            />

            {category}
          </label>
        ))}

      </FilterSection>


      {/* ================= COLORS ================= */}
      <FilterSection
        title="Colors"
        isOpen={open.colors}
        onClick={() => toggleSection("colors")}
      >

        <div className="flex flex-wrap gap-2">

          {colors.map((color) => (
            <button
              key={color}
              onClick={() =>
                toggleArrayValue("colors", color)
              }
              className={`border px-2 py-1 text-[9px] ${
                filters.colors.includes(color)
                  ? "bg-black text-white"
                  : "border-black/15"
              }`}
            >
              {color}
            </button>
          ))}

        </div>

      </FilterSection>


      {/* ================= PRICE ================= */}
      <FilterSection
        title="Price Range"
        isOpen={open.price}
        onClick={() => toggleSection("price")}
      >

        <div className="flex items-center gap-2">

          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                minPrice: e.target.value,
              }))
            }
            className="w-full border border-black/15 bg-transparent px-2 py-2 text-[10px] outline-none"
          />

          <span>—</span>

          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                maxPrice: e.target.value,
              }))
            }
            className="w-full border border-black/15 bg-transparent px-2 py-2 text-[10px] outline-none"
          />

        </div>

      </FilterSection>


      {/* ================= COLLECTIONS ================= */}
      <FilterSection
        title="Collections"
        isOpen={open.collections}
        onClick={() => toggleSection("collections")}
      >
        <p>New</p>
        <p>Best Sellers</p>
        <p>Essentials</p>
        <p>Summer</p>
      </FilterSection>


      {/* ================= TAGS ================= */}
      <FilterSection
        title="Tags"
        isOpen={open.tags}
        onClick={() => toggleSection("tags")}
      >
        <p>New</p>
        <p>Trending</p>
        <p>Sale</p>
        <p>Limited</p>
      </FilterSection>


      {/* ================= RATINGS ================= */}
      <FilterSection
        title="Ratings"
        isOpen={open.ratings}
        onClick={() => toggleSection("ratings")}
      >

        <button className="text-[10px]">
          ★★★★★
        </button>

        <button className="block text-[10px]">
          ★★★★☆
        </button>

        <button className="block text-[10px]">
          ★★★☆☆
        </button>

      </FilterSection>

    </aside>
  );
}


function FilterSection({
  title,
  isOpen,
  onClick,
  children,
}) {
  return (
    <div className="border-b border-black/10 py-4">

      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left font-semibold"
      >
        <span>{title}</span>

        <span className="text-[14px] font-normal">
          {isOpen ? "⌃" : "⌄"}
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 space-y-2 text-[10px] text-[#444]">
          {children}
        </div>
      )}

    </div>
  );
}